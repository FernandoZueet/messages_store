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
                    message TEXT NOT NULL
                )
            ''')
            conn.commit()

    def insert_message(self, slug: str, message: str):
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("INSERT INTO messages_store (slug, message) VALUES (?, ?)", (slug, message))
            conn.commit()

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
            c.execute("SELECT slug, message FROM messages_store")
            results = c.fetchall()
            return [{"slug": row[0], "message": row[1]} for row in results]

    def get_by_slug(self, slug: str) -> Optional[dict]:
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("SELECT slug, message FROM messages_store WHERE slug = ?", (slug,))
            result = c.fetchone()
            if result:
                return {"slug": result[0], "message": result[1]}
            return None
