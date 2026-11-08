import json
import sqlite3
from typing import Optional, List
from .messages_store import MessagesStore

class SQLiteMessageStoreRepository(MessagesStore):
    def __init__(self, db_path: str):
        self.db_path = db_path

    def create_table(self):
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute('''
                CREATE TABLE IF NOT EXISTS messages_store (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    slug TEXT NOT NULL,
                    message TEXT NOT NULL,
                    tags TEXT NOT NULL DEFAULT '[]',
                    favorite INTEGER NOT NULL DEFAULT 0
                )
            ''')
            columns = {row[1] for row in c.execute("PRAGMA table_info(messages_store)").fetchall()}
            if "tags" not in columns:
                c.execute("ALTER TABLE messages_store ADD COLUMN tags TEXT NOT NULL DEFAULT '[]'")
            if "favorite" not in columns:
                c.execute("ALTER TABLE messages_store ADD COLUMN favorite INTEGER NOT NULL DEFAULT 0")
            conn.commit()

    def insert_message(self, slug: str, message: str, tags=None, favorite=False):
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("INSERT INTO messages_store (slug, message, tags, favorite) VALUES (?, ?, ?, ?)",
                      (slug, message, json.dumps(tags or [], ensure_ascii=False), int(bool(favorite))))
            conn.commit()

    def update_metadata(self, slug: str, tags, favorite) -> bool:
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("UPDATE messages_store SET tags = ?, favorite = ? WHERE slug = ?",
                      (json.dumps(tags, ensure_ascii=False), int(bool(favorite)), slug))
            conn.commit()
            return c.rowcount > 0

    def slug_exists(self, slug: str) -> bool:
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("SELECT 1 FROM messages_store WHERE slug = ?", (slug,))
            return c.fetchone() is not None

    def retrieve_message(self, slug: str) -> Optional[str]:
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("SELECT message FROM messages_store WHERE slug = ?", (slug,))
            result = c.fetchone()
            return result[0] if result else None

    def delete_message(self, slug: str) -> bool:
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("SELECT message FROM messages_store WHERE slug = ?", (slug,))
            if c.fetchone() is None:
                return False
            c.execute("DELETE FROM messages_store WHERE slug = ?", (slug,))
            conn.commit()
            return True

    def update_message(self, slug: str, new_message: str) -> bool:
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("SELECT message FROM messages_store WHERE slug = ?", (slug,))
            if c.fetchone() is None:
                return False
            c.execute("UPDATE messages_store SET message = ? WHERE slug = ?", (new_message, slug))
            conn.commit()
            return True

    def retrieve_all_messages(self) -> List[dict]:
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("SELECT slug, message, tags, favorite FROM messages_store")
            results = c.fetchall()
            return [self._record(row) for row in results]

    def get_by_slug(self, slug: str) -> Optional[dict]:
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("SELECT slug, message, tags, favorite FROM messages_store WHERE slug = ?", (slug,))
            result = c.fetchone()
            if result:
                return self._record(result)
            return None

    @staticmethod
    def _record(row):
        try:
            tags = json.loads(row[2] or "[]")
        except (TypeError, ValueError):
            tags = []
        return {"slug": row[0], "message": row[1], "tags": tags if isinstance(tags, list) else [], "favorite": bool(row[3])}

    def import_records(self, records):
        inserted, skipped = [], []
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            conn.execute("BEGIN IMMEDIATE")
            for record in records:
                slug = record["slug"]
                exists = cursor.execute("SELECT 1 FROM messages_store WHERE slug = ? LIMIT 1", (slug,)).fetchone()
                if exists:
                    skipped.append(slug)
                    continue
                cursor.execute("INSERT INTO messages_store (slug, message, tags, favorite) VALUES (?, ?, ?, ?)",
                               (slug, record["message"], json.dumps(record.get("tags", []), ensure_ascii=False), int(record.get("favorite", False))))
                inserted.append(slug)
            conn.commit()
        return inserted, skipped
