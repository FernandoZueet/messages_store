import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from .const import DOMAIN, NAME

class MessagesStoreConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Messages Store."""

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        ai_task_entities = [state.entity_id for state in self.hass.states.async_all() if state.domain == "ai_task"]

        errors = {}
        if not ai_task_entities:
            errors["base"] = "no_ai_task_entities"
            return self.async_show_form(
                step_id="user",
                data_schema=vol.Schema({}),
                errors=errors,
                description_placeholders={"message": "No ai_task entities found. Please create one before configuring."}
            )

        if user_input is not None:
            entity_id = user_input.get("ai_task_entity_id")
            if entity_id is not None and entity_id not in ai_task_entities:
                errors["ai_task_entity_id"] = "invalid_entity"
            else:
                return self.async_create_entry(
                    title=NAME,
                    data={
                        "ai_task_entity_id": entity_id
                    },
                )

        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({
                vol.Optional("ai_task_entity_id"): vol.Any(None, vol.In(ai_task_entities))
            }),
            errors=errors,
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return MessagesStoreOptionsFlowHandler(config_entry)

class MessagesStoreOptionsFlowHandler(config_entries.OptionsFlow):
    """Handle Messages Store options."""

    def __init__(self, config_entry: config_entries.ConfigEntry):
        """Initialize options flow."""
        self.config_entry = config_entry

    async def async_step_init(self, user_input=None):
        """Manage the options."""
        ai_task_entities = [state.entity_id for state in self.hass.states.async_all() if state.domain == "ai_task"]
        current = self.config_entry.options.get("ai_task_entity_id") or self.config_entry.data.get("ai_task_entity_id")
        errors = {}

        if not ai_task_entities:
            errors["base"] = "no_ai_task_entities"
            return self.async_show_form(
                step_id="init",
                data_schema=vol.Schema({}),
                errors=errors,
                description_placeholders={"message": "No ai_task entities found. Please create one before configuring."}
            )
        
        if user_input is not None:
            entity_id = user_input.get("ai_task_entity_id")
            if entity_id is not None and entity_id not in ai_task_entities:
                errors["ai_task_entity_id"] = "invalid_entity"
            else:
                return self.async_create_entry(
                    title="",
                    data={
                        "ai_task_entity_id": entity_id
                    },
                )
            
        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema({
                vol.Optional("ai_task_entity_id", default=current): vol.Any(None, vol.In(ai_task_entities))
            }),
            errors=errors,
        )
