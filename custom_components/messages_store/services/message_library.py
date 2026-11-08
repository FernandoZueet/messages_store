import json
import re

import yaml
from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse

from ..const import TAG_SEPARATOR_MESSAGE
from ..repository import MessagesStore
from .helpers import log_error

_SLUG = re.compile(r"^[a-zA-Z0-9_]{1,150}$")


async def update_message_metadata(hass: HomeAssistant, repository: MessagesStore, call: ServiceCall) -> ServiceResponse:
    try:
        slug = call.data["slug"]
        record = await hass.async_add_executor_job(repository.get_by_slug, slug)
        if not record:
            return {"status": False, "message": f"No message found for slug {slug}"}
        tags = list(dict.fromkeys(tag.strip() for tag in call.data.get("tags", record.get("tags", [])) if tag.strip()))
        favorite = call.data.get("favorite", record.get("favorite", False))
        await hass.async_add_executor_job(repository.update_metadata, slug, tags, favorite)
        return {"status": True, "message": f"Metadata updated for slug {slug}"}
    except Exception as err:
        return log_error("update_message_metadata", err)


def _normalize_collection(raw):
    if isinstance(raw, dict) and "messages" in raw:
        raw = raw["messages"]
    if isinstance(raw, dict):
        entries = []
        for slug, value in raw.items():
            if isinstance(value, dict):
                entries.append({"slug": slug, **value})
            else:
                entries.append({"slug": slug, "message": value})
    elif isinstance(raw, list):
        entries = raw
    else:
        raise ValueError("The collection must be a list of records or a slug mapping.")

    records = []
    for entry in entries:
        if not isinstance(entry, dict):
            continue
        slug = entry.get("slug")
        if not isinstance(slug, str) or not _SLUG.fullmatch(slug):
            continue
        message = entry.get("message", entry.get("messages"))
        if isinstance(message, list):
            if not message or any(not isinstance(item, str) or not item.strip() or len(item) > 2000 or TAG_SEPARATOR_MESSAGE in item for item in message):
                continue
            message = f"{TAG_SEPARATOR_MESSAGE} ".join(message)
        if not isinstance(message, str) or not message.strip() or len(message) > 200000:
            continue
        variants = message.split(TAG_SEPARATOR_MESSAGE)
        if any(not part.strip() or len(part.strip()) > 2000 for part in variants):
            continue
        tags = entry.get("tags", [])
        if not isinstance(tags, list):
            tags = []
        tags = list(dict.fromkeys(tag.strip()[:40] for tag in tags if isinstance(tag, str) and tag.strip()))
        favorite = entry.get("favorite", False)
        if not isinstance(favorite, bool):
            favorite = False
        records.append({"slug": slug, "message": message, "tags": tags, "favorite": favorite})
    return records


async def import_messages(hass: HomeAssistant, repository: MessagesStore, call: ServiceCall) -> ServiceResponse:
    try:
        content = call.data["content"]
        data = json.loads(content) if call.data["format"] == "json" else yaml.safe_load(content)
        collection_items = data.get("messages", data) if isinstance(data, dict) else data
        raw_count = len(collection_items) if isinstance(collection_items, (dict, list)) else 0
        records = _normalize_collection(data)
        inserted, skipped = await hass.async_add_executor_job(repository.import_records, records)
        return {"status": True, "imported": inserted, "skipped": skipped,
                "invalid_count": max(0, raw_count - len(records)),
                "message": f"Imported {len(inserted)} slug(s); skipped {len(skipped)} existing slug(s)."}
    except Exception as err:
        return log_error("import_messages", err)


async def export_messages(hass: HomeAssistant, repository: MessagesStore, call: ServiceCall) -> ServiceResponse:
    try:
        records = await hass.async_add_executor_job(repository.retrieve_all_messages)
        collection = {"version": 1, "messages": [
            {"slug": row["slug"], "message": [part.strip() for part in row["message"].split(TAG_SEPARATOR_MESSAGE)],
             "tags": row.get("tags", []), "favorite": row.get("favorite", False)}
            for row in records
        ]}
        if call.data.get("format", "json") == "yaml":
            content = yaml.safe_dump(collection, allow_unicode=True, sort_keys=False)
        else:
            content = json.dumps(collection, ensure_ascii=False, indent=2)
        return {"status": True, "content": content, "count": len(records), "format": call.data.get("format", "json")}
    except Exception as err:
        return log_error("export_messages", err)
