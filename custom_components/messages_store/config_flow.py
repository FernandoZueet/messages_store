import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback
from homeassistant.helpers.selector import selector
from .const import DOMAIN, NAME, DEFAULT_INSTRUCTIONS

def get_data_schema(ai_task_entity_id, instructions):
    if ai_task_entity_id is None:
        return vol.Schema({
            vol.Optional("ai_task_entity_id"): selector({"entity": {"domain": "ai_task"}}),
            vol.Optional("instructions", default=instructions): selector({"text": {"multiline": True}}),
        })
    return vol.Schema({
        vol.Optional("ai_task_entity_id", default=ai_task_entity_id): selector({"entity": {"domain": "ai_task"}}),
        vol.Optional("instructions", default=instructions): selector({"text": {"multiline": True}}),
    })

class MessagesStoreConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Messages Store."""

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        current_instructions = DEFAULT_INSTRUCTIONS
        errors = {}

        if user_input is not None:
            entity_id = user_input.get("ai_task_entity_id")
            current_instructions = user_input.get("instructions")
            return self.async_create_entry(
                title=NAME,
                data={
                    "ai_task_entity_id": entity_id,
                    "instructions": current_instructions,
                },
            )

        return self.async_show_form(
            step_id="user",
            data_schema=get_data_schema(None, current_instructions),
            errors=errors,
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        return MessagesStoreOptionsFlowHandler()

class MessagesStoreOptionsFlowHandler(config_entries.OptionsFlow):
    """Handle Messages Store options."""

    async def async_step_init(self, user_input=None):
        """Manage the options."""
        ai_task_entity_id = self.config_entry.options.get("ai_task_entity_id") or self.config_entry.data.get("ai_task_entity_id")
        instructions = self.config_entry.options.get("instructions") or self.config_entry.data.get("instructions") or DEFAULT_INSTRUCTIONS
        ai_task_entities = [state.entity_id for state in self.hass.states.async_all() if state.domain == "ai_task"]
        errors = {}

        if not ai_task_entities:
            ai_task_entity_id = None

        if user_input is not None:
            entity_id = user_input.get("ai_task_entity_id")
            instructions = user_input.get("instructions")
            return self.async_create_entry(
                title="",
                data={
                    "ai_task_entity_id": entity_id,
                    "instructions": instructions,
                },
            )
            
        return self.async_show_form(
            step_id="init",
            data_schema=get_data_schema(ai_task_entity_id, instructions),
            errors=errors,
        )
