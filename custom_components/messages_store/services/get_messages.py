import random
import logging
from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse
from .helpers import log_error
from .tag_replacer import replace_all  
from ..repository import MessagesStore
from ..const import TAG_SEPARATOR_MESSAGE

_LOGGER = logging.getLogger(__name__)

async def get_messages(hass: HomeAssistant, repository: MessagesStore, call: ServiceCall) -> ServiceResponse:
    try:
        _LOGGER.debug("get_messages service called")
        filter_list = call.data.get('filter', [])
        grouped = call.data.get('grouped', False)
        force_random = call.data.get('force_random', False)  

        def retrieve_filtered_messages():
            results = {} if grouped else []
            for filter_item in filter_list:
                slug = filter_item['slug']
                replace_list = filter_item.get('replace', [])
                filter_option = filter_item.get('filter', None)

                message = repository.retrieve_message(slug)

                if message:
                    message_list = replace_all(hass, repository, message, slug, replace_list)

                    if filter_option == "random" or force_random:
                        message_list = [random.choice(message_list)]

                    if grouped:
                        results[slug] = message_list[0] if filter_option == "random" or force_random else message_list
                    else:
                        metadata = repository.get_by_slug(slug) or {}
                        results.append({
                            "slug": slug,
                            "message": message_list[0] if filter_option == "random" or force_random else message_list,
                            "tags": metadata.get("tags", []),
                            "favorite": metadata.get("favorite", False),
                        })
            return results

        def retrieve_all_messages():
            all_results = repository.retrieve_all_messages()
            if grouped:
                formatted_results = {}
                for entry in all_results:
                    slug = entry['slug']
                    message_list = [msg.strip() for msg in entry['message'].split(TAG_SEPARATOR_MESSAGE)]
                    if force_random:
                        message_list = random.choice(message_list)
                    formatted_results[slug] = message_list
                return formatted_results
            else:
                formatted_results = []
                for entry in all_results:
                    slug = entry['slug']
                    message_list = [msg.strip() for msg in entry['message'].split(TAG_SEPARATOR_MESSAGE)]
                    if force_random:
                        message_list = [random.choice(message_list)]
                    formatted_results.append({
                        "slug": slug,
                        "message": message_list,
                        "tags": entry.get("tags", []),
                        "favorite": entry.get("favorite", False),
                    })
                return formatted_results

        if filter_list:
            data = await hass.async_add_executor_job(retrieve_filtered_messages)
        else:
            data = await hass.async_add_executor_job(retrieve_all_messages)

        if data:
            return {"status": True, "data": data}
        else:
            return {"status": False, "message": "No messages found"}

    except Exception as e:
        return log_error("get_messages", e)
