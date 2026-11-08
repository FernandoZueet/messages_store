import voluptuous as vol
from ..const import TAG_SEPARATOR_MESSAGE

def validate_no_pipe_char(value):
    if TAG_SEPARATOR_MESSAGE in value:
        raise vol.Invalid(f"The '{TAG_SEPARATOR_MESSAGE}' character is not allowed in messages.")
    return value

SLUG_SCHEMA = vol.All(vol.Match(r'^[a-zA-Z0-9_]+$'), vol.Length(min=1, max=150))
MESSAGE_SCHEMA = vol.Any(
    vol.All(str, vol.Length(min=1, max=2000), validate_no_pipe_char),  
    [vol.All(str, vol.Length(min=1, max=2000), validate_no_pipe_char)]  
)

FILTER_ITEM_SCHEMA = vol.Schema({
    vol.Required('slug'): SLUG_SCHEMA,
    vol.Optional('replace', default=[]): [vol.Any(str, int, float)],
    vol.Optional('filter', default=None): vol.Any(None, 'random')
})

ADD_EDIT_SCHEMA = vol.Schema({
    vol.Required('slug'): SLUG_SCHEMA,
    vol.Required('message'): MESSAGE_SCHEMA,
    vol.Optional('tags'): [vol.All(str, vol.Length(min=1, max=40))],
    vol.Optional('favorite'): vol.Boolean(),
})

METADATA_SCHEMA = vol.Schema({
    vol.Required('slug'): SLUG_SCHEMA,
    vol.Optional('tags'): [vol.All(str, vol.Length(min=1, max=40))],
    vol.Optional('favorite'): vol.Boolean(),
})

IMPORT_SCHEMA = vol.Schema({
    vol.Required('content'): vol.All(str, vol.Length(min=1, max=2000000)),
    vol.Required('format'): vol.In(['json', 'yaml']),
})

EXPORT_SCHEMA = vol.Schema({vol.Optional('format', default='json'): vol.In(['json', 'yaml'])})

DELETE_SCHEMA = vol.Schema({
    vol.Required('slug'): SLUG_SCHEMA,
})

GET_SCHEMA = vol.Schema({
    vol.Required('slug'): SLUG_SCHEMA,
    vol.Optional('replace', default=[]): [vol.Any(str, int, float)],
    vol.Optional('filter', default=None): vol.Any(None, 'random')
})

GET_MESSAGES_SCHEMA = vol.Schema({
    vol.Optional('filter', default=[]): [FILTER_ITEM_SCHEMA],
    vol.Optional('grouped', default=False): vol.Boolean(),  
    vol.Optional('force_random', default=False): vol.Boolean(), 
})

ADD_BULK_MESSAGES_SCHEMA = vol.Schema({
    vol.Required(str): vol.All(vol.Schema({
        vol.Required(vol.All(str, vol.Length(min=1, max=150))): vol.All([vol.Required(vol.Any(str, vol.Length(min=1, max=2000), validate_no_pipe_char))])
    }))
})
