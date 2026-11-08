from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse

from ..const import DOMAIN
from ..repository import MessagesStore


async def get_ai_task_configured(
    hass: HomeAssistant, repository: MessagesStore, call: ServiceCall
) -> ServiceResponse:
    entries = hass.config_entries.async_entries(DOMAIN)
    if not entries:
        return {"status": True, "configured": False}

    entry = entries[0]
    entity_id = entry.options.get(
        "ai_task_entity_id", entry.data.get("ai_task_entity_id")
    )
    return {
        "status": True,
        "configured": bool(entity_id and hass.states.get(entity_id)),
    }


async def get_ai_task_settings(
    hass: HomeAssistant, repository: MessagesStore, call: ServiceCall
) -> ServiceResponse:
    """Return the AI Task and shared prompt saved for this integration."""
    entries = hass.config_entries.async_entries(DOMAIN)
    if not entries:
        return {"status": False, "message": "Messages Store is not configured."}

    entry = entries[0]
    return {
        "status": True,
        "ai_task_entity_id": entry.options.get(
            "ai_task_entity_id", entry.data.get("ai_task_entity_id")
        ),
        "instructions": entry.options.get(
            "instructions", entry.data.get("instructions", "")
        ),
        "entities": [
            {
                "entity_id": state.entity_id,
                "name": state.attributes.get("friendly_name", state.entity_id),
            }
            for state in hass.states.async_all()
            if state.domain == "ai_task"
        ],
    }
