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
