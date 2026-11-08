# Messages Store Frontend Wiki

This page documents the current frontend and the visual direction for future work. The panel uses local Lit components and follows Home Assistant visual conventions without depending on private Home Assistant frontend components.

## Contents

- [Overview and architecture](#overview-and-architecture)
- [Message list](#message-list)
- [Create and edit messages](#create-and-edit-messages)
- [Tags and live preview](#tags-and-live-preview)
- [AI message generation](#ai-message-generation)
- [Data flow and Home Assistant services](#data-flow-and-home-assistant-services)
- [State, preferences, and keyboard behavior](#state-preferences-and-keyboard-behavior)
- [Design direction and known limitations](#design-direction-and-known-limitations)
- [Source map](#source-map)

## Overview and architecture

Messages Store is a custom Home Assistant panel for browsing and managing message collections keyed by slug. The frontend is written in TypeScript with Lit and bundled with Rollup. Home Assistant serves `custom_components/messages_store/app.js` inside an iframe at `/messages_store`.

`custom_components/messages_store/view.py` registers the sidebar panel and its static JavaScript path. Run `npm run build:integration` from `frontend/` to build and copy the compiled app bundle into the integration directory.

| Lit element | Responsibility |
| --- | --- |
| `messages-store` | Loads records and manages search, sorting, grouping, dialogs, deletion confirmation, and notifications. |
| `messages-store-list` | Renders the responsive list and emits edit, delete, and sort events. |
| `messages-store-modal` | Creates or edits a slug and its messages, previews tags, and can open AI generation. |
| `messages-store-ai-modal` | Collects generation inputs and invokes the AI generation service. |
| `messages-store-notification` | Shows dismissible success and error messages. |

Components render into the light DOM via `createRenderRoot()`. The application entry point is `frontend/src/app.ts`; global component styles are in `frontend/src/styles.css`.

## Message list

### Search and grouping

The full-width library follows the Home Assistant subpage layout: a fixed page toolbar contains a back link, the Messages Store title, and compact primary actions; the area below it fills the remaining viewport. A Filters chip opens a dialog for Group by (Slug or None), tag, and Favorites. Search and library actions sit above the results table with deliberate spacing. The column header remains fixed while only the table body scrolls; the extra “Messages” heading and result total are omitted. Search filters loaded records as the user types. It matches slug, every message variant, and tag text; entity IDs are searchable as part of message content. Filters are client-side and reset after reload, except grouping, which is saved in `localStorage` under `messages-store-config`.

Grouping by Slug is enabled by default. Grouped mode shows one row per slug, with its messages available in the edit flow. None shows each message separately. The result count reflects the selected mode.

### Sorting

The Slug header toggles ascending and descending alphabetical order. The initial order is ascending; message text has no sort control.

Clicking the slug or message cell opens the editor. In ungrouped mode the clicked variant receives focus; grouped mode focuses the first variant. Keyboard-focused cells also open with Enter or Space. Tags appear under the message. Each row has one three-dot menu containing edit, duplicate slug, favorite, and delete actions.

### Edit and delete

Edit opens the message dialog for the slug. Delete opens an in-app confirmation dialog that describes whether one message or the whole slug will be removed. In ungrouped mode, deleting one of several messages saves the remaining list through `edit_message`; deleting the last message or a grouped slug uses `delete_message`. Individual rows track the message index so duplicate text does not cause multiple entries to be removed.

### Loading and empty states

The page distinguishes loading, fetch errors, an empty store, and searches with no matches. Fetch errors offer a retry; an empty search offers a way to clear the query.

## Create and edit messages

Add Message opens the shared form in create mode; Edit opens it in edit mode.

- Slug is required on creation and read-only while editing.
- A slug has one or more auto-growing message text areas. Long forms scroll with the modal body, with a separate add-message strip below the message list; Remove appears when multiple fields exist.
- Save calls `add_message` or `edit_message`. The list reloads after success; failures appear as notifications.
- Tags use a type-and-select field with suggestions from tags already in the library; new tags can also be entered. The favorite toggle is saved with the slug and can also be changed from the list.
- While editing, the dialog header identifies the slug and hides its immutable slug field. A star-only favorite toggle is in the footer before Generate with AI. Create mode has no favorite control.
- Each message variant can be duplicated in the editor. A slug can be duplicated from the list; the new slug is suggested with a `_copy` suffix, receives the same messages and tags, and starts unfavorited.
- Typing `(state:` or `state:` in a message textarea opens entity suggestions filtered by entity ID or friendly name. Arrow keys and Enter select a result; choosing an optional numeric or unit filter adds it to the tag.
- A message preview can be opened with its eye button when the message has text. It shows its label on a separate line and resolves slug references from the first stored variant and state references from current Home Assistant states. `%s` remains visible as a placeholder. Missing slug and unavailable entity references are warnings and do not prevent saving.
- Generate with AI sits in the message dialog footer beside Cancel and Save. The list's Export button opens a menu for JSON or YAML downloads.
- Cancel, the close control, clicking the backdrop, and Escape dismiss the dialog without saving.
- `Ctrl+Alt+S` saves the message form. On open, focus is placed in the slug field for creation or the first message field for editing.

## Tags and live preview

The form previews `(slug:some_slug)` and `(state:entity_id)` references while editing.

- Slug references preview the first message for the referenced slug when it exists and does not itself contain a slug reference. Self-references, missing references, and nested references remain as typed.
- State references use current states available from `hass.states`, so state values can update live. Numeric values support `round`, `roundN`, and `unit` filters.
- `%s` placeholders remain visible in the preview; runtime retrieval fills them with service replacement arguments.

This is a frontend preview. Slug references use a deterministic first-variant preview; runtime retrieval may choose randomly. Final tag resolution is performed by backend retrieval services.

## Collection import and export

Export JSON or YAML downloads all slugs, message variants, tags, and favorite flags. Import accepts either format, including legacy collections without metadata. New slugs are inserted; existing slugs are skipped and the result reports imported, skipped, and invalid counts. Import never overwrites existing message data.

## AI settings and message generation

The page header includes an AI Settings dialog for choosing an `ai_task` entity and editing the general prompt. It reads and writes the integration's config-entry options, so changes are shared with Home Assistant's Messages Store integration options screen. Clearing the entity selection disables AI generation while keeping the prompt. The selected task and prompt are also shown when the integration options flow is opened.

The “Generate with AI” action appears only when the integration reports that a configured AI Task entity is available. The modal collects a task name, specific instructions, quantity (initially 5), and an optional base slug. The task name and instructions are required. The configured general prompt is prepended by the backend.

The frontend calls `messages_store.generate_ai_messages`. While waiting, Generate is disabled and indicates progress. Errors are shown in the AI dialog. On success, returned messages are appended to the main form and a returned slug fills an empty slug field. Generation does not persist the messages; the user must save the main form.

## Data flow and Home Assistant services

`frontend/src/utils.ts` invokes scripts through `hass.connection.sendMessagePromise`, using Home Assistant's `execute_script` and `response_variable` support. The UI uses these services:

| UI action | Service | Important fields |
| --- | --- | --- |
| Load records | `messages_store.get_messages` | No filter to retrieve all records. |
| Create | `messages_store.add_message` | `slug`, `message` list. |
| Edit or remove a single item | `messages_store.edit_message` | `slug`, updated `message` list. |
| Delete a slug | `messages_store.delete_message` | `slug`. |
| Generate suggestions | `messages_store.generate_ai_messages` | `task_name`, `instructions`, `quantity`, optional `slug`. |
| Check AI availability | `messages_store.get_ai_task_configured` | Returns `configured`. |
| Read AI settings | `messages_store.get_ai_task_settings` | Returns selected entity, shared prompt, and available AI Task entities. |
| Save AI settings | `messages_store.set_ai_task_settings` | Writes the selected entity and shared prompt to config-entry options. |
| Update tags/favorite | `messages_store.update_message_metadata` | `slug`, optional `tags`, optional `favorite`. |
| Export collection | `messages_store.export_messages` | Optional `format` (`json` or `yaml`); response contains serialized `content`. |
| Import collection | `messages_store.import_messages` | `content`, `format`; response lists imported and skipped slugs. |

The backend is the source of truth; the frontend refreshes records after successful mutations and does not persist a separate message database.

## State, preferences, and keyboard behavior

Search and sort direction reset on reload. Only the group preference is persisted locally. `Ctrl+Alt++` opens the create dialog, `Ctrl+Alt+S` saves it, and Escape closes the AI dialog first when it is open, otherwise the message dialog. Notifications close after 10 seconds or can be dismissed manually.

## Design direction and known limitations

The interface uses locally implemented Lit components, Home Assistant CSS theme properties with fallbacks, responsive table and card layouts, and mobile-friendly dialogs. Keep future UI work mobile-first, keyboard accessible, and based on public theme tokens. Do not depend on private Home Assistant frontend components or APIs.

Buttons follow the Home Assistant medium button scale (40px, pill radius, medium text). Local dropdown menus use compact 40px action rows, and the message table follows the data-table row rhythm (52px minimum) with a distinct sticky column header. These are visual conventions implemented in project CSS, not imported Home Assistant components.

The search field uses the compact outlined control style. Form inputs, selects, and textareas use the Home Assistant Material treatment: theme-filled backgrounds, bottom borders, and a primary-color focus line. The app fills its iframe viewport and uses Home Assistant's body font and type scale, with legacy theme variables as compatibility fallbacks.

Current limitations and follow-up opportunities:

- Labels remain in English; localization can be added through Home Assistant translations.
- The list has no pagination, bulk selection, or sorting by message text.
- Frontend response shapes are locally declared and not validated at runtime.
- The app is iframe-hosted, so theme variables and context need fallbacks.
- Keep testing focus order, screen reader announcements, and narrow viewport behavior as dialogs and list actions evolve.

The [Home Assistant frontend contributor guidance](https://github.com/home-assistant/frontend/blob/dev/AGENTS.md) is a useful reference for layout, theme, and accessibility conventions. This project should implement those conventions with its own components.

## Source map

| File | Role |
| --- | --- |
| [`frontend/src/app.ts`](../frontend/src/app.ts) | Page state, filtering, sorting, service calls, dialogs, and composition. |
| [`frontend/src/list.ts`](../frontend/src/list.ts) | Responsive list, metadata chips, favorite toggle, sort, and row actions. |
| [`frontend/src/modal.ts`](../frontend/src/modal.ts) | Create/edit form, metadata, inline entity autocomplete, test preview, reference warnings, duplication, and AI modal integration. |
| [`frontend/src/ai_modal.ts`](../frontend/src/ai_modal.ts) | AI generation form and service invocation. |
| [`frontend/src/notification.ts`](../frontend/src/notification.ts) | Temporary notifications. |
| [`frontend/src/utils.ts`](../frontend/src/utils.ts) | Home Assistant service-call helper. |
| [`frontend/src/styles.css`](../frontend/src/styles.css) | Theme tokens, responsive layout, dialogs, and states. |
| [`frontend/package.json`](../frontend/package.json) | Frontend dependencies and build scripts. |
| [`custom_components/messages_store/view.py`](../custom_components/messages_store/view.py) | Panel and static bundle registration. |
| [`custom_components/messages_store/app.js`](../custom_components/messages_store/app.js) | Compiled frontend served to Home Assistant. |
