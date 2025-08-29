import logging
import traceback

_LOGGER = logging.getLogger(__name__)

def log_error(action: str, error: Exception) -> dict:
    """Log error with a unique identifier and detailed traceback."""
    _LOGGER.error(f"Error during {action}. Error: {error}")
    _LOGGER.debug(f"Traceback: {traceback.format_exc()}")
    return {"status": False, "message": f"Error during {action}."}

def log_error_only(action: str, error: Exception) -> None:
    """Log error with a unique identifier and detailed traceback, no return value."""
    _LOGGER.error(f"Error during {action}. Error: {error}")
    _LOGGER.debug(f"Traceback: {traceback.format_exc()}")
