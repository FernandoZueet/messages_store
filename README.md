
# Messages Store
![image](https://github.com/user-attachments/assets/c0977bda-d8da-4026-af73-972d302a53cc)

**Compatibility:** Requires Home Assistant version **2025.8.0** or newer.

**Messages Store** is a custom Home Assistant component designed to store, manage, and retrieve messages in a SQLite database. Whether it's for TTS messages, mobile notifications, Telegram alerts, or other applications, this component allows you to dynamically handle text data across various automation scenarios. You can easily add, edit, delete, and retrieve messages.

## Features
- **[UI Panel](#ui-panel)**: A user-friendly interface is available in the Home Assistant sidebar under "Messages Store," where you can list, search, edit, delete, and add messages.
- **State Replacement:** Automatically replace `(state:entity_id)` tags in messages with the current state of the specified Home Assistant entity, including the unit of measurement if available.
- **Slug Replacement:** Replace `(slug:slug_name)` tags in messages with the corresponding message stored under that slug, allowing for dynamic message construction.
- **Placeholder Replacement:** Dynamically replace `%s` placeholders in messages with values provided when retrieving the message, allowing for customizable and flexible messaging.
 - **AI Message Generation:** Generate new messages using AI, with the option to use an existing slug as a base for the prompt.

## Installation

### Manual Installation

1. Copy the `custom_components\messages_store` directory into your Home Assistant `custom_components` directory.
2. Restart Home Assistant.
3. Install the component through the Home Assistant UI by navigating to `Settings > Devices & Services > Integrations` and clicking on the "+ Add Integration" button.
4. Search for "Messages Store" and follow the on-screen instructions to configure it.

### Installation via HACS (Home Assistant Community Store)

1. Ensure you have HACS installed and configured in your Home Assistant setup.
2. Open HACS in the Home Assistant UI.
3. Go to the "Integrations" tab.
4. Click the three-dot menu in the top right corner and select "Custom repositories."
5. Add the repository URL of this project and select "Integration" as the category.
6. Click "Add" and then search for "Messages Store" in HACS.
7. Install the integration.
8. Restart Home Assistant.
9. After restarting, go to `Settings > Devices & Services > Integrations` and click "+ Add Integration."
10. Search for "Messages Store" and follow the on-screen instructions to configure it.

## Services
- **[Add messages](#1-messages_storeadd_message)** 
- **[Retrieve messages](#2-messages_storeget_message)** 
- **[Edit existing messages](#3-messages_storeedit_message)**.
- **[Delete messages](#4-messages_storedelete_message)** 
- **[Retrieve multiple messages](#5-messages_storeget_messages)** 
- **[Add multiple messages](#6-messages_storeadd_bulk_messages)** 
- **[Generate AI messages](#7-messages_storegenerate_ai_messages)** 

## UI Panel

### Search
![image](https://github.com/user-attachments/assets/f65fadbd-5fbe-49bb-a02d-e681e04b081f)

### Edit
![image](https://github.com/user-attachments/assets/eb02c5d0-5aad-44cf-85a1-d8fbfa839d3b)

### Add
![image](https://github.com/user-attachments/assets/29dde9e1-5a0a-4977-8c67-5ac8d71c3e6d)

### Preview tags 
![image](https://github.com/user-attachments/assets/711fb4b0-ca92-489c-89c0-2343aedec3d1)

## AI Task Configuration

To use the AI message generation service, you must configure an entity of type `ai_task` in the integration options:
![image](https://github.com/user-attachments/assets/6cbed4a0-7ff1-4559-b636-7c26582ce350)

1. Go to **Settings > Devices & Services > Integrations**.
2. Find **Messages Store** and click **Options**.
3. Select the desired `ai_task` entity in the **AI Task Entity** dropdown.
4. Save the configuration.

This entity will be used to call the AI service for message generation.

For more details about the AI Task integration, see the official documentation:
[Home Assistant AI Task Integration](https://www.home-assistant.io/integrations/ai_task/)

## Services

### 1. `messages_store.add_message`

**Description:** Adds a new message.

**Service Data:**

- `slug` (required): A unique identifier for the message.
- `message` (required): The message to be stored. Can be a string or a list of strings.

**Example:**

```yaml
service: messages_store.add_message
data:
  slug: "greeting_message"
  message: "Hello, welcome to %s, %s!"
```

**Example 2, multiple messages in slug:**

```yaml
service: messages_store.add_message
data:
  slug: "greeting_message"
  message: 
    - "Hello, welcome to %s, %s!"
    - "Welcome to %s %s !!"
```

**Example 3, advanced usage with slug tags:**

```yaml
service: messages_store.add_message
data:
  slug: "welcome_message"
  message: "Welcome to our service! (slug:greeting_message)"
```

**Explanation:**

- The message stored with the `slug` of `welcome_message` contains a reference to another message using the tag `(slug:greeting_message)`.
- When `welcome_message` is retrieved using the `get_message` service, the `(slug:greeting_message)` will be replaced with the corresponding message if it doesn't contain circular references.

**Example 4, advanced usage with state entity tags:**

```yaml
service: messages_store.add_message
data:
  slug: "welcome_message"
  message: "Welcome to our service! (state:sensor.temperature)"
```

**Explanation:**

- The message stored with the slug of welcome_message contains a reference to the current state of a Home Assistant entity using the tag `(state:sensor.temperature)`.
- When welcome_message is retrieved using the get_message service, the `(state:sensor.temperature)` tag will be replaced with the current state value of the `sensor.temperature` entity, including its unit of measurement, if available.

**Response:**

```yaml
status: true
message: Message added with slug welcome_message
```

### 2. `messages_store.get_message`

**Description:** Retrieves a message by its slug, with optional placeholder replacements.

**Service Data:**

- `slug` (required): The identifier of the message to retrieve.
- `replace` (optional): A list of values to replace placeholders (`%s`) in the message.
- `filter` (optional): Use `random` to retrieve a random message from the list.

**Example:**

```yaml
service: messages_store.get_message
data:
  slug: "greeting_message"
  replace:
    - "Home Assistant"
    - "John"
```

**Response:**

```yaml
status: true
message: 
  - Hello, welcome to Home Assistant, John!
  - Welcome to Home Assistant John !!
```

**Example 2, using state replacement:**

```yaml
service: messages_store.get_message
data:
  slug: "welcome_message"
```

**Response 2:**

```yaml
status: true
message: 
  - "Welcome to our service! 10°"
```

### 3. `messages_store.edit_message`

**Description:** Edits an existing message.

**Service Data:**

- `slug` (required): The identifier of the message to edit.
- `message` (required): The new message content. Can be a string or a list of strings.

**Example:**

```yaml
service: messages_store.edit_message
data:
  slug: "greeting_message"
  message: "Hello, welcome to the Home Assistant community!"
```

**Response:**

```yaml
status: true
message: "Message updated for slug greeting_message"
```

### 4. `messages_store.delete_message`

**Description:** Deletes a message by slug.

**Service Data:**

- `slug` (required): The identifier of the message to delete.

**Example:**

```yaml
service: messages_store.delete_message
data:
  slug: "greeting_message"
```

**Response:**

```yaml
status: true
message: "Message deleted for slug greeting_message"
```

### 5. `messages_store.get_messages`

**Description:** Retrieves multiple messages with optional filtering and placeholder replacements.

**Service Data:**

- `filter` (optional): A list of filters. Each filter is a dictionary with `slug` and optional `replace` fields. You can also use the `random` filter to retrieve a random message.

**Example:**

```yaml
service: messages_store.get_messages
data:
  filter:
    - slug: "greeting_message"
      replace:
        - "Home Assistant"
        - "John"
    - slug: "farewell_message"
      replace:
        - "Mary"
```

**Response:**

```yaml
status: true
data: 
  - slug: greeting_message
    message: 
      - Hello, welcome to Home Assistant, John!
  - slug: farewell_message
    message: 
      - Goodbye, Mary. See you next time!
```

**Example 2:**

```yaml
service: messages_store.get_messages
data:
  filter:
    - slug: "greeting_message"
    - slug: "farewell_message"
      replace:
        - "Mary"
    - filter: "random"
```

**Response 2:**

```yaml
status: true
data: 
  - slug: greeting_message
    message: 
      - Hello, welcome to %s, %s
  - slug: farewell_message
    message: 
      - Goodbye, Mary. See you next time!
```

### 6. `messages_store.add_bulk_messages`

**Description:** Adds multiple messages.

**Service Data:**

- `data` (required): A dictionary where each key is a slug and the corresponding value is a list of messages.

**Example:**

```yaml
service: messages_store.add_bulk_messages
data:
  closed_window_office_rain:
    - "It's raining and the office window is open"
    - "Close the office window because it's raining"
  alert_bedroom_climate_on_opened_door:
    - "I turned off the air conditioning because the door is open"
```

**Response:**

```yaml
status: true
message: "Successfully inserted slugs: closed_window_office_rain, alert_bedroom_climate_on_opened_door"
```

### 7. `messages_store.generate_ai_messages`

**Description:** Uses an AI Task entity to generate new messages based on instructions and optionally existing messages (by slug).

**Service Data:**

- `task_name` (required): Name of the AI task.
- `instructions` (required): Instructions for the AI to generate messages.
- `quantity` (required): Number of messages to generate.
- `slug` (optional): Slug of existing messages to use as base.

**Example:**

```yaml
service: messages_store.generate_ai_messages
data:
  instructions: "Generate welcome messages for new users."
  quantity: 3
  task_name: "welcome_generation"
  slug: "greeting_message"
```

**Response:**

```yaml
status: true
slug: greeting_message
messages:
  - "Welcome to our platform!"
  - "Hello, glad to have you here!"
  - "Enjoy your experience!"
```

**Notes:**
- The AI Task entity must be configured in the integration options (Settings > Devices & Services > Integrations > Messages Store > Options > AI Task Entity).
- If no AI Task entity is configured, the service will return an error.
- The slug field is optional. If provided, the messages stored under that slug will be used as base for the AI prompt.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Please ensure that your contributions follow the established coding guidelines and are thoroughly tested.
