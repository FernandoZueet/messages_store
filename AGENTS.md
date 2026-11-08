# Project Agent Guide

## Project overview

Messages Store is a Home Assistant custom integration and custom sidebar panel. The integration lives in `custom_components/messages_store/`; the Lit and TypeScript frontend lives in `frontend/`. The frontend wiki and backend wiki in `docs/` describe current behavior and architecture. Read the relevant wiki before changing that area.

## Project structure

- `custom_components/messages_store/`: Home Assistant manifest, config flow, panel setup, service handlers, translations, and SQLite repository.
- `frontend/src/`: Lit components, Home Assistant service-call utilities, and CSS.
- `custom_components/messages_store/app.js`: compiled frontend bundle served by Home Assistant. Treat this as generated output; edit `frontend/src/` and rebuild it.
- `docs/frontend-wiki.md`, `docs/backend-wiki.md`: developer-facing architecture and behavior references.
- `compose.yaml` and `config/`: local Home Assistant environment and its runtime data. `config/` can contain machine-specific or sensitive state; avoid inspecting or changing it unless the task requires it.

## Working conventions

- Keep the frontend in Lit and TypeScript. Use local components and public Home Assistant theme CSS properties; do not introduce dependencies on private Home Assistant frontend components or APIs.
- Keep service request/response behavior consistent across frontend calls, backend handlers, schemas, and `services.yaml` documentation.
- Preserve existing stored message compatibility: `|` separates messages, `%s` is a replacement placeholder, and `(slug:...)` / `(state:...)` are runtime tags.
- Preserve explicit option values. For example, a cleared `ai_task_entity_id` option must not fall back to an older config-entry value merely because it is empty.
- Keep synchronous SQLite work off the Home Assistant event loop by dispatching it through `hass.async_add_executor_job`.
- Do not put secrets, Home Assistant tokens, or personal runtime configuration into source files or documentation.
- Update the relevant wiki when a change materially alters documented behavior or architecture.

## Build and local environment

Build the frontend from the `frontend/` directory:

```sh
npm run build
```

Build and copy the bundle to the integration directory:

```sh
npm run build:integration
```

The local Home Assistant instance is managed with Docker Compose from the repository root:

```sh
docker compose up -d
docker compose ps
docker compose logs -f homeassistant
```

The panel is available at `http://localhost:8123/messages_store` after Home Assistant is ready and the integration is loaded. Python changes generally require reloading the integration or restarting Home Assistant; frontend changes require rebuilding the integration bundle and refreshing the panel.

## Change and verification guidance

- Prefer focused changes that preserve the existing Home Assistant service contract.
- Before editing, inspect the relevant source and existing local changes. Do not overwrite unrelated user work.
- For frontend changes, build the bundle when the task requires a runnable local integration. The generated `app.js` should reflect the source.
- For Python changes, check syntax and review Home Assistant API usage against the supported minimum version in `manifest.json`.
- Do not add a test framework or run tests unless requested. If verification is requested, report exactly what was run and any limitations.
- Avoid destructive operations on `config/`, the Home Assistant database, or Docker volumes. Keep local runtime data separate from source changes.

## Useful references

- [Frontend wiki](docs/frontend-wiki.md)
- [Backend wiki](docs/backend-wiki.md)
- [Home Assistant frontend contributor guidance](https://github.com/home-assistant/frontend/blob/dev/AGENTS.md)
