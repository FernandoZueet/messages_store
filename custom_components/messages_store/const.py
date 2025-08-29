import json, os

DOMAIN = "messages_store"
NAME = "Messages Store"
PANEL_URL = "/messages-store-files/app.js"
PATH_DB_SQLITE = "home-assistant_v2.db"
TAG_SEPARATOR_MESSAGE = "|"

DEFAULT_INSTRUCTIONS = "I want you to create messages for me, I'll give you the instructions below.\n\nInstructions:\n- When creating messages, do NOT suggest or use tags like (state:entity_id) or (slug:slug_name). Only use %s as a placeholder for dynamic values.\n- When generating the slug, use only lowercase English words, no spaces, and use underscores. Example: alert_bedroom_climate_on_opened_door\n- Not repeat messages."

COMPONENT_PATH = os.path.dirname(os.path.realpath(__file__))

MANIFEST = json.load(
        open( os.path.join( COMPONENT_PATH, 'manifest.json') )
    )
    
VERSION = MANIFEST['version']
