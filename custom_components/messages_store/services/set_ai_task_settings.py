from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse

from ..const import DOMAIN, DEFAULT_INSTRUCTIONS
from ..repository import MessagesStore


async def set_ai_task_settings(
    hass: HomeAssistant, repository: MessagesStore, call: ServiceCall
) -> ServiceResponse:
    """Save AI Task settings as integration options shared with the options flow."""
    entries = hass.config_entries.async_entries(DOMAIN)
    if not entries:
        return {"status": False, "message": "Messages Store is not configured."}

    entity_id = call.data.get("ai_task_entity_id") or None
    instructions = call.data.get("instructions", DEFAULT_INSTRUCTIONS)

    if entity_id and not entity_id.startswith("ai_task."):
        return {"status": False, "message": "Select a valid AI Task entity."}
    if not isinstance(instructions, str) or not instructions.strip():
        return {"status": False, "message": "The prompt cannot be empty."}
    if entity_id and not hass.states.get(entity_id):
        return {"status": False, "message": "The selected AI Task entity is unavailable."}

    entry = entries[0]
    hass.config_entries.async_update_entry(
        entry,
        options={
            **entry.options,
            "ai_task_entity_id": entity_id,
            "instructions": instructions,
        },
    )
    return {"status": True, "message": "AI Task settings saved."}
