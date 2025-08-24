import logging
import json
from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse
from .helpers import log_error
from ..repository import MessagesStore
from ..const import DOMAIN

_LOGGER = logging.getLogger(__name__)

async def generate_ai_messages(hass: HomeAssistant, repository: MessagesStore, call: ServiceCall) -> ServiceResponse:
    _LOGGER.debug("generate_ai_messages service called")
    try:
        instructions = call.data.get('instructions')
        quantity = call.data.get('quantity')
        slug = call.data.get('slug')
        task_name = call.data.get('task_name')

        # validate fields
        if not instructions:
            return {"status": False, "message": "Instructions field is required."}
        if not quantity or not isinstance(quantity, int) or quantity < 1:
            return {"status": False, "message": "Quantity field is required and must be a positive integer."}
        if not task_name:
            return {"status": False, "message": "Task name field is required."}

        # Get AI Task entity ID
        entity_id = None
        entries = hass.config_entries.async_entries(DOMAIN)
        if entries:
            entry = entries[0]
            entity_id = entry.options.get('ai_task_entity_id') or entry.data.get('ai_task_entity_id')
        if not entity_id:
            return {"status": False, "message": "No AI Task entity configured. Please set it in integration options."}

        # Get base messages if slug is provided
        base_messages = None
        if slug and str(slug).strip():
            record = await hass.async_add_executor_job(repository.get_by_slug, slug)
            if not record:
                return {"status": False, "message": f"Slug '{slug}' does not exist."}
            msg_str = record.get("message", "").strip()
            base_messages = [m.strip() for m in msg_str.split("|") if m.strip()] if msg_str else None

        prompt = instructions + f"\nGenerate {quantity} messages."
        if base_messages:
            prompt += f"\nBase messages: {base_messages}"
        if not slug:
            prompt += "\nWhen generating the slug, use only lowercase English words, no spaces, and use underscores. Example: alert_bedroom_climate_on_opened_door."
        
        prompt += "\nWhen creating messages, do NOT suggest or use tags like (state:entity_id) or (slug:slug_name). Only use %s as a placeholder for dynamic values."

        # Call AI service to generate messages
        response = await hass.services.async_call(
            domain="ai_task",
            service="generate_data",
            service_data={
                "entity_id": entity_id,
                "instructions": prompt,
                "task_name": task_name,
                "structure": {
                    "messages": {
                        "selector": {
                            "object": None
                        }
                    },
                    "slug": {
                        "selector": {
                            "text": None
                        }
                    }
                }
            },
            blocking=True,
            return_response=True
        )
        _LOGGER.debug(f"AI service response: {response}")

        # Parse AI service response
        messages = None
        if response:
            try:
                messages_json = response.get('data', {}).get('messages', {}).get('json')
                generated_slug = response.get('data', {}).get('slug')
                if messages_json:
                    messages = json.loads(messages_json)
                if slug:
                    generated_slug = slug
            except Exception as e:
                _LOGGER.error(f"Error parsing AI messages: {e}")
        if not messages or not isinstance(messages, list):
            return {"status": False, "message": f"AI service did not return messages. Response: {response}"}

        return {"status": True, "messages": messages, "slug": generated_slug}

    except Exception as e:
        return log_error("generate_ai_messages", e)
