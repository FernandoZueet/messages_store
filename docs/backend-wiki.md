# Messages Store Backend Wiki

This page describes the Home Assistant integration backend: setup, configuration, persistence, service contracts, tag processing, and AI generation.

## Contents

- [Integration lifecycle](#integration-lifecycle)
- [Configuration and options](#configuration-and-options)
- [Persistence and repository](#persistence-and-repository)
- [Service architecture](#service-architecture)
- [Service reference](#service-reference)
- [Tag replacement](#tag-replacement)
- [AI generation](#ai-generation)
- [Errors, logging, and operational notes](#errors-logging-and-operational-notes)
- [Source map](#source-map)

## Integration lifecycle

The integration domain is `messages_store`; its manifest identifies it as a local service integration with a config flow and a single configured instance. `async_setup_entry` registers the custom panel, initializes the SQLite repository table, registers services, and installs an options update listener. The listener re-registers service handlers when the config entry changes.

The panel is registered in `view.py`, while service setup and the service-to-repository wrapper are in `__init__.py`. Each registered service receives Home Assistant, the repository instance, and a `ServiceCall`.

## Configuration and options

The config flow optionally stores an `ai_task_entity_id` and general AI instructions in the config entry. Options can override the initial values. AI generation reads the option value first and falls back to the initial config data only when the option key is absent. An explicit empty option therefore disables the configured task.

The AI Task selector is restricted to the `ai_task` entity domain. The default generation instructions ask for distinct messages and discourage generated `(state:...)` or `(slug:...)` tags, preferring `%s` placeholders.

## Persistence and repository

`SQLiteMessageStoreRepository` implements the abstract `MessagesStore` interface. It opens SQLite connections for repository operations and creates a `messages_store` table with an autoincrement ID, slug, and message text. The configured path is `home-assistant_v2.db`, the Home Assistant database file. Messages for a slug are stored in one text field joined with the `|` separator.

The repository exposes create, existence, read, update, delete, list, and lookup operations. Database work for the CRUD services is dispatched through `hass.async_add_executor_job` so synchronous SQLite calls do not block the Home Assistant event loop.

The table has no unique constraint on `slug`; uniqueness is checked in the add service before insertion. The repository API returns a single matching row for `get_by_slug`, and its update/delete operations work by slug.

## Service architecture

All service handlers return response dictionaries with a `status` boolean and either result data or a human-readable `message`. Exceptions are caught and passed to `services/helpers.py`; errors are logged and returned as a generic failure response. Service schemas are defined in `services/schemas.py` and metadata/examples are declared in `services.yaml`.

`SupportsResponse.ONLY` is used for the registered services, so callers are expected to request response data. CRUD operations receive the repository through a wrapper created during setup. AI configuration probing and generation are also registered as response services.

## Service reference

### `add_message`

Fields: `slug`, `message` (a string or a list of strings). Slugs must be 1–150 ASCII letters, digits, or underscores. Message text must be 1–2000 characters and cannot contain the reserved `|` separator. A list is joined into the stored string with `| `. Existing slugs produce a failure response.

### `edit_message`

Fields match `add_message`. A list is joined with the message separator, then the stored value for the slug is replaced. It reports a failure if no matching row exists. Because persistence is per slug, editing replaces the complete message collection for that slug.

### `delete_message`

Field: `slug`. Deletes all rows matching the slug and returns whether a matching record was found.

### `get_message`

Fields: `slug`, optional `replace` list, optional `filter` (`random`). It resolves tags and placeholders, and can choose one random message. The response contains the resolved messages under `message`.

### `get_messages`

Optional fields: `filter`, `grouped`, and `force_random`. With no filter it retrieves all rows. With filters it retrieves only the specified slugs and applies each filter item's replacements and random selection. Grouped mode returns an object keyed by slug; ungrouped mode returns a list of `{slug, message}` records. `force_random` chooses one message per slug.

### `add_bulk_messages`

Field: `data`, a mapping from slug to message list. Each slug is checked and inserted independently. Invalid or already existing slugs are reported in the response. The implementation does not wrap the entire batch in a transaction, so earlier valid inserts can remain if a later slug is invalid or already exists.

### `generate_ai_messages`

Fields: required `task_name`, `instructions`, and positive integer `quantity`; optional existing `slug` as a base. Calls the configured Home Assistant `ai_task.generate_data` service and returns generated `messages` and `slug`. It does not write generated data to the message table.

### `get_ai_task_configured`

No input fields. Returns `configured: true` only when a configured AI Task entity ID is set and that entity exists in Home Assistant state.

### `get_ai_task_settings` and `set_ai_task_settings`

These services back the panel's AI Settings dialog. The read service returns the selected entity, shared prompt, and available `ai_task` entities. The write service validates the selected entity and non-empty prompt, then updates the same config-entry options edited by Home Assistant's integration options flow. Passing `null` for the entity clears the selection. The app and integration options therefore stay synchronized.

## Tag replacement

`services/tag_replacer.py` resolves message content in this order:

1. `(slug:other_slug)` is replaced by a randomly selected message from the referenced slug, unless it refers to the current slug, is missing, or the referenced value itself contains a slug tag. These cases remain unchanged.
2. `(state:entity_id)` reads the current Home Assistant state. If filters are provided, `round` rounds to an integer, `roundN` rounds to N decimal places, and `unit` appends `unit_of_measurement` when present. Missing entities leave the original tag intact.
3. The stored string is split on `|`, each message is stripped, and each `%s` placeholder is replaced once per replacement value, in order.

`get_message` and filtered `get_messages` use this resolver. The unfiltered all-records path formats stored messages but does not run tag replacement, since it has no per-slug replacement arguments.

## AI generation

The generation handler validates input before reading integration configuration. It takes the AI Task entity from config-entry options, falling back to initial data only if the option key is absent. If no entity is configured, generation returns an actionable error.

When a base slug is supplied, the handler verifies it exists and includes its messages in the prompt. It combines the configured general instructions, requested quantity, optional base messages, and caller instructions, then invokes `ai_task.generate_data` with a structure requesting `messages` and `slug`.

The response parser accepts a message list directly, a JSON string containing a list or object with a `messages` list, or a pipe-delimited string. If the caller supplied a base slug, that slug is returned in place of an AI-generated slug. The backend returns suggestions only; the frontend must call `add_message` or `edit_message` to persist them.

## Errors, logging, and operational notes

Service handlers catch exceptions and return a generic error response while logging the operation and exception. Tracebacks are logged at debug level. Validation errors are generally handled by Home Assistant's service schema before the handler executes.

Operational points for maintainers:

- The integration is local; no external API is called directly by the integration except through Home Assistant's configured AI Task service.
- The integration writes a custom table into Home Assistant's SQLite database. Backups of the Home Assistant database include these records.
- Message boundaries depend on the `|` delimiter, which is rejected in individual message input.
- `add_bulk_messages` is not atomic, and slug uniqueness is enforced in application code rather than by a database constraint.
- `get_message` currently calls some repository reads directly in its async handler; consider moving all synchronous database access to the executor for consistent event-loop behavior.
- Preserve explicit `None` option semantics for `ai_task_entity_id`; using `options.get(key) or data.get(key)` would unintentionally re-enable an entity after the user clears the option.

## Source map

| File | Role |
| --- | --- |
| [`custom_components/messages_store/manifest.json`](../custom_components/messages_store/manifest.json) | Integration metadata and compatibility requirements. |
| [`custom_components/messages_store/config_flow.py`](../custom_components/messages_store/config_flow.py) | Initial setup and options flow. |
| [`custom_components/messages_store/__init__.py`](../custom_components/messages_store/__init__.py) | Panel and service setup, wrappers, reload listener. |
| [`custom_components/messages_store/const.py`](../custom_components/messages_store/const.py) | Domain, paths, separator, and default AI instructions. |
| [`custom_components/messages_store/view.py`](../custom_components/messages_store/view.py) | Sidebar panel and frontend bundle registration. |
| [`custom_components/messages_store/repository/messages_store.py`](../custom_components/messages_store/repository/messages_store.py) | Repository interface. |
| [`custom_components/messages_store/repository/sqlite_messages_store_repository.py`](../custom_components/messages_store/repository/sqlite_messages_store_repository.py) | SQLite persistence implementation. |
| [`custom_components/messages_store/services/schemas.py`](../custom_components/messages_store/services/schemas.py) | Home Assistant service input validation. |
| [`custom_components/messages_store/services/tag_replacer.py`](../custom_components/messages_store/services/tag_replacer.py) | Slug/state expansion and placeholder substitution. |
| [`custom_components/messages_store/services.yaml`](../custom_components/messages_store/services.yaml) | Service descriptions, fields, selectors, and examples. |
| [`custom_components/messages_store/services/`](../custom_components/messages_store/services/) | Individual CRUD, retrieval, bulk, and AI service handlers. |
