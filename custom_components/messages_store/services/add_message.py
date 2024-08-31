import logging
from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse
from .helpers import log_error
from ..repository import MessagesStore

_LOGGER = logging.getLogger(__name__)

async def add_message(hass: HomeAssistant, repository: MessagesStore, call: ServiceCall) -> ServiceResponse:
    _LOGGER.debug("add_message service called")
    try:
        slug = call.data.get('slug')
        message = call.data.get('message')

        if isinstance(message, list):
            message = ", ".join(message)

        if await hass.async_add_executor_job(repository.slug_exists, slug):
            return {"status": False, "message": f"Slug '{slug}' already exists"}

        await hass.async_add_executor_job(repository.insert_message, slug, message)
        return {"status": True, "message": f"Message added with slug {slug}"}

    except Exception as e:
        return log_error("add_message", e)
