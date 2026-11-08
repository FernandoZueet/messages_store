import logging
import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import HomeAssistant, SupportsResponse
from .view import async_setup_view
from .services.helpers import log_error, log_error_only
from .const import DOMAIN, PATH_DB_SQLITE
from .services import (
    add_message,
    get_message,
    get_messages,
    edit_message,
    delete_message,
    add_bulk_messages
)
from .services.generate_ai_messages import generate_ai_messages
from .services.get_ai_task_configured import (
    get_ai_task_configured,
    get_ai_task_settings,
)
from .services.set_ai_task_settings import set_ai_task_settings
from .services.schemas import (
    ADD_EDIT_SCHEMA,
    GET_SCHEMA,
    GET_MESSAGES_SCHEMA,
    DELETE_SCHEMA,
    ADD_BULK_MESSAGES_SCHEMA,
    METADATA_SCHEMA,
    IMPORT_SCHEMA,
    EXPORT_SCHEMA,
)
from .services.message_library import (
    update_message_metadata,
    import_messages,
    export_messages,
)
from .repository.sqlite_messages_store_repository import SQLiteMessageStoreRepository

_LOGGER = logging.getLogger(__name__)

async def async_setup_entry(hass: HomeAssistant, entry: config_entries.ConfigEntry) -> bool:
    _LOGGER.debug("async_setup_entry called")
    try:
        await async_setup_view(hass)
        return await setup_services(hass, entry)
    except Exception as e:
        log_error_only("Setting up Messages Store", e)
        return False

async def setup_services(hass: HomeAssistant, entry: config_entries.ConfigEntry) -> bool:
    try:
        """Helper function to set up services."""

        repository = SQLiteMessageStoreRepository(PATH_DB_SQLITE)

        await hass.async_add_executor_job(repository.create_table)

        def wrap_service(service_func):
            async def wrapped_service(call):
                return await service_func(hass, repository, call)
            return wrapped_service

        hass.services.async_register(
            DOMAIN,
            'add_message',
            wrap_service(add_message),
            schema=ADD_EDIT_SCHEMA,
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(
            DOMAIN,
            'get_message',
            wrap_service(get_message),
            schema=GET_SCHEMA,
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(
            DOMAIN,
            'get_messages',
            wrap_service(get_messages),
            schema=GET_MESSAGES_SCHEMA,
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(
            DOMAIN,
            'edit_message',
            wrap_service(edit_message),
            schema=ADD_EDIT_SCHEMA,
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(
            DOMAIN,
            'delete_message',
            wrap_service(delete_message),
            schema=DELETE_SCHEMA,
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(
            DOMAIN,
            'add_bulk_messages',
            wrap_service(add_bulk_messages),
            schema=ADD_BULK_MESSAGES_SCHEMA,
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(DOMAIN, 'update_message_metadata', wrap_service(update_message_metadata), schema=METADATA_SCHEMA, supports_response=SupportsResponse.ONLY)
        hass.services.async_register(DOMAIN, 'import_messages', wrap_service(import_messages), schema=IMPORT_SCHEMA, supports_response=SupportsResponse.ONLY)
        hass.services.async_register(DOMAIN, 'export_messages', wrap_service(export_messages), schema=EXPORT_SCHEMA, supports_response=SupportsResponse.ONLY)

        hass.services.async_register(
            DOMAIN,
            'generate_ai_messages',
            wrap_service(generate_ai_messages),
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(
            DOMAIN,
            'get_ai_task_configured',
            wrap_service(get_ai_task_configured),
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(
            DOMAIN,
            'get_ai_task_settings',
            wrap_service(get_ai_task_settings),
            supports_response=SupportsResponse.ONLY
        )

        hass.services.async_register(
            DOMAIN,
            'set_ai_task_settings',
            wrap_service(set_ai_task_settings),
            schema=vol.Schema({
                vol.Required("ai_task_entity_id"): vol.Any(None, str),
                vol.Required("instructions"): str,
            }),
            supports_response=SupportsResponse.ONLY
        )


        entry.async_on_unload(entry.add_update_listener(update_listener))

        return True
    
    except Exception as e:
        return log_error("Setting up Messages Store", e)

async def update_listener(hass: HomeAssistant, config_entry: config_entries.ConfigEntry):
    """Handle options update."""
    # Service handlers read the current config entry when invoked, so no
    # registrations need to be rebuilt when its options change.
    _LOGGER.debug("Messages Store options updated.")
