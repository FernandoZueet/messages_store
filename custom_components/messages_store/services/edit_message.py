import logging
from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse
from .helpers import log_error
from ..repository import MessagesStore
from ..const import TAG_SEPARATOR_MESSAGE

_LOGGER = logging.getLogger(__name__)

async def edit_message(hass: HomeAssistant, repository: MessagesStore, call: ServiceCall) -> ServiceResponse:
    _LOGGER.debug("edit_message service called")
    try:
        slug = call.data.get('slug')
        new_message = call.data.get('message')

        if isinstance(new_message, list):
            new_message = f"{TAG_SEPARATOR_MESSAGE} ".join(new_message)

        updated = await hass.async_add_executor_job(repository.update_message, slug, new_message)

        if updated:
            if 'tags' in call.data or 'favorite' in call.data:
                existing = await hass.async_add_executor_job(repository.get_by_slug, slug)
                await hass.async_add_executor_job(
                    repository.update_metadata, slug,
                    call.data.get('tags', existing.get('tags', [])),
                    call.data.get('favorite', existing.get('favorite', False)),
                )
            return {"status": True, "message": f"Message updated for slug {slug}"}
        else:
            return {"status": False, "message": f"No message found for slug {slug}"}

    except Exception as e:
        return log_error("edit_message", e)
