import "./styles.css";
import utils from "./utils";
import { LitElement, html } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import "./list";
import "./modal";
import "./notification";

declare global {
	interface HTMLElementTagNameMap {
		"messages-store": MessagesStore;
	}
}

@customElement("messages-store")
export class MessagesStore extends LitElement {
	@state() allMessages: Array<{
		slug: string;
		message: string;
		originalMessage: string[];
		messageIndex?: number;
	}> = [];
	@state() messages: Array<{
		slug: string;
		message: string;
		originalMessage: string[];
		messageIndex?: number;
	}> = [];
	@state() message = { slug: "", message: "", originalMessage: [""] };
	@state() isModalOpen = false;
	@state() notification: { message: string; type: string } | null = null;
	@state() searchTerm = "";
	@state() sortOrder: "asc" | "desc" = "asc";
	@state() groupMessages = true;
	@state() isLoading = true;
	@state() loadError = "";
	@state() pendingDelete: any = null;
	@state() isAISettingsOpen = false;
	@state() aiSettingsLoading = false;
	@state() aiSettingsSaving = false;
	@state() aiSettingsError = "";
	@state() aiTaskEntityId = "";
	@state() aiInstructions = "";
	@state() aiTaskEntities: Array<{ entity_id: string; name: string }> = [];

	@property({ type: Object }) hass;

	createRenderRoot() {
		return this;
	}

	async connectedCallback() {
		super.connectedCallback();
		this.loadConfig();
		await this.loadMessages();
		document.addEventListener("keydown", this.handleKeyDown);
	}

	disconnectedCallback() {
		document.removeEventListener("keydown", this.handleKeyDown);
		super.disconnectedCallback();
	}

	handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape" && this.pendingDelete) {
			this.cancelDelete();
			return;
		}
		if (e.key === "Escape" && this.isAISettingsOpen) {
			this.closeAISettings();
			return;
		}
		if (e.ctrlKey && e.altKey && e.key === "+") {
			this.addModal();
		}
	};

	loadConfig() {
		const config = localStorage.getItem("messages-store-config");
		if (config) {
			this.groupMessages = JSON.parse(config).groupMessages;
		}
	}

	saveConfig() {
		localStorage.setItem(
			"messages-store-config",
			JSON.stringify({ groupMessages: this.groupMessages })
		);
	}

	async loadMessages() {
		this.isLoading = true;
		this.loadError = "";
		try {
			const response = await this.callService(
				"messages_store",
				"get_messages"
			);
			if (!response || response.status === false) {
				throw new Error(
					response?.message || "Unable to load messages."
				);
			}
			this.allMessages = this.processMessages(response.data);
			this.filterMessages();
		} catch (error) {
			this.loadError =
				error instanceof Error
					? error.message
					: "Unable to load messages.";
			this.allMessages = [];
			this.messages = [];
		} finally {
			this.isLoading = false;
		}
	}

	processMessages(data) {
		let processedMessages: Array<{
			slug: string;
			message: string;
			originalMessage: string[];
			messageIndex?: number;
		}> = [];

		if (Array.isArray(data)) {
			data.forEach((msg) => {
				if (Array.isArray(msg.message)) {
					if (this.groupMessages) {
						processedMessages.push({
							slug: msg.slug,
							message: msg.message[0],
							originalMessage: msg.message,
						});
					} else {
						msg.message.forEach((message, messageIndex) => {
							processedMessages.push({
								slug: msg.slug,
								message: message.trim(),
								originalMessage: msg.message,
								messageIndex,
							});
						});
					}
				}
			});
		}

		return processedMessages;
	}

	sortMessages() {
		this.messages.sort((a, b) => {
			const compare = a.slug.localeCompare(b.slug);
			return this.sortOrder === "asc" ? compare : -compare;
		});
	}

	toggleSortOrder() {
		this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
		this.sortMessages();
	}

	toggleGroupMessages() {
		this.groupMessages = !this.groupMessages;
		this.saveConfig();
		this.loadMessages();
	}

	async callService(domain, service, data = {}, target = {}) {
		const response = await utils.callService(
			this.hass,
			domain,
			service,
			data,
			target
		);

		if (response?.status == "error") {
			this.showNotification(
				response?.error?.message || "Unknown error",
				"error"
			);
			return;
		}

		return response;
	}

	handleSearch(e) {
		this.searchTerm = e.target.value;
		this.filterMessages();
	}

	filterMessages() {
		const term = this.searchTerm.toLowerCase();
		if (!term) {
			this.messages = [...this.allMessages];
		} else {
			this.messages = this.allMessages.filter(
				(msg) =>
					msg.slug.toLowerCase().includes(term) ||
					msg.message.toLowerCase().includes(term) ||
					(this.groupMessages &&
						msg.originalMessage.some((message) =>
							message.toLowerCase().includes(term)
						))
			);
		}
		this.sortMessages();
	}

	editModal(msg) {
		msg = msg.detail;
		this.message = msg;
		this.isModalOpen = true;
	}

	addModal() {
		this.message = { slug: "", message: "", originalMessage: [""] };
		this.isModalOpen = true;
	}

	closeModal() {
		this.isModalOpen = false;
	}

	async openAISettings() {
		this.isAISettingsOpen = true;
		this.aiSettingsLoading = true;
		this.aiSettingsError = "";
		const response = await this.callService(
			"messages_store",
			"get_ai_task_settings"
		);
		this.aiSettingsLoading = false;
		if (!response?.status) {
			this.aiSettingsError = response?.message || "Unable to load AI settings.";
			return;
		}
		this.aiTaskEntityId = response.ai_task_entity_id || "";
		this.aiInstructions = response.instructions || "";
		this.aiTaskEntities = response.entities || [];
		await this.updateComplete;
		const taskSelect = this.querySelector(
			"#ai-task-entity"
		) as HTMLSelectElement | null;
		if (taskSelect) taskSelect.value = this.aiTaskEntityId;
	}

	closeAISettings() {
		this.isAISettingsOpen = false;
		this.aiSettingsError = "";
	}

	async saveAISettings(event) {
		event.preventDefault();
		this.aiSettingsSaving = true;
		this.aiSettingsError = "";
		const response = await this.callService(
			"messages_store",
			"set_ai_task_settings",
			{
				ai_task_entity_id: this.aiTaskEntityId || null,
				instructions: this.aiInstructions,
			}
		);
		this.aiSettingsSaving = false;
		if (!response?.status) {
			this.aiSettingsError = response?.message || "Unable to save AI settings.";
			return;
		}
		this.showNotification(response.message || "AI settings saved.", "success");
		this.closeAISettings();
	}

	async saveMessage(e) {
		const { slug, messages, service } = e.detail;
		const response = await this.callService("messages_store", service, {
			slug,
			message: messages,
		});
		this.showNotification(
			response?.message || "Unable to save the message.",
			response?.status ? "success" : "error"
		);
		if (response?.status) {
			this.closeModal();
			await this.loadMessages();
			this.filterMessages();
		}
	}

	async deleteMessage(e) {
		const slug = e.detail;
		const response = await this.callService(
			"messages_store",
			"delete_message",
			{ slug }
		);
		this.showNotification(
			response?.message || "Unable to delete the message.",
			response?.status ? "success" : "error"
		);
		if (response?.status) {
			await this.loadMessages();
			this.filterMessages();
		}
	}

	requestDelete(e) {
		this.pendingDelete = e.detail;
	}

	cancelDelete() {
		this.pendingDelete = null;
	}

	async confirmDelete() {
		const message = this.pendingDelete;
		if (!message) return;
		this.pendingDelete = null;

		if (message.removeSingleMessage) {
			const newMessages = message.originalMessage.filter(
				(_, index) => index !== message.messageIndex
			);
			await this.saveMessage({
				detail: {
					slug: message.slug,
					messages: newMessages,
					service: "edit_message",
				},
			});
			return;
		}
		await this.deleteMessage({ detail: message.slug });
	}

	showNotification(message, type) {
		this.notification = { message, type };
		setTimeout(() => (this.notification = null), 10000);
	}

	render() {
		return html`
			<div class="ms-page">
				<header class="ms-page-header">
					<div class="ms-heading-copy">
						<h1>Messages Store</h1>
						<p>
							Manage reusable messages for automations,
							notifications, and TTS.
						</p>
					</div>
					<div class="ms-header-actions">
						<button
							class="ms-button ms-button-secondary"
							@click=${this.openAISettings}
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
								<path d="m19.4 15 .1.1a1.8 1.8 0 1 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 1 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 1 1 0-3.6h.2a1.8 1.8 0 0 0 1.3-3.1l-.1-.1a1.8 1.8 0 1 1 2.5-2.5l.1.1a1.8 1.8 0 0 0 3.1-1.3v-.2a1.8 1.8 0 1 1 3.6 0v.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 1 1 2.5 2.5l-.1.1a1.8 1.8 0 0 0 1.3 3.1h.2a1.8 1.8 0 1 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.1Z" />
							</svg>
							<span>AI settings</span>
						</button>
						<button
							class="ms-button ms-button-primary"
							@click=${this.addModal}
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 5v14M5 12h14" />
							</svg>
							<span>Add message</span>
						</button>
					</div>
				</header>

				<section class="ms-toolbar" aria-label="Message list controls">
					<label class="ms-search">
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<circle cx="11" cy="11" r="7" />
							<path d="m16 16 4 4" />
						</svg>
						<input
							type="search"
							aria-label="Search messages"
							placeholder="Search messages"
							.value=${this.searchTerm}
							@input=${this.handleSearch}
						/>
					</label>
					<label class="ms-group-toggle">
						<input
							type="checkbox"
							.checked=${this.groupMessages}
							@change=${this.toggleGroupMessages}
						/>
						<span>Group slugs</span>
					</label>
				</section>

				<div class="ms-list-heading">
					<h2>Messages</h2>
					${!this.isLoading &&
					!this.loadError &&
					this.allMessages.length
						? html`<span class="ms-count"
								>${this.messages.length}
								${this.groupMessages
									? this.messages.length === 1
										? "slug"
										: "slugs"
									: this.messages.length === 1
										? "message"
										: "messages"}</span
							>`
						: ""}
				</div>

				${this.isLoading
					? html`<div class="ms-state-card" role="status">
							<span class="ms-spinner" aria-hidden="true"></span
							><span>Loading messages…</span>
						</div>`
					: this.loadError
						? html`<section
								class="ms-state-card ms-state-error"
								role="alert"
							>
								<div class="ms-state-icon" aria-hidden="true">
									!
								</div>
								<h2>Messages could not be loaded</h2>
								<p>${this.loadError}</p>
								<button
									class="ms-button ms-button-secondary"
									@click=${this.loadMessages}
								>
									Try again
								</button>
							</section>`
						: this.messages.length
							? html`<messages-store-list
									.hass=${this.hass}
									.messages=${this.messages}
									.groupMessages=${this.groupMessages}
									@edit=${this.editModal}
								@confirm-delete=${this.requestDelete}
									@save=${this.saveMessage}
									@sort=${this.toggleSortOrder}
									.sortOrder=${this.sortOrder}
								></messages-store-list>`
							: this.searchTerm
								? html`<section class="ms-state-card">
										<div
											class="ms-state-icon"
											aria-hidden="true"
										>
											<svg viewBox="0 0 24 24">
												<circle cx="11" cy="11" r="7" />
												<path d="m16 16 4 4" />
											</svg>
										</div>
										<h2>No messages match your search</h2>
										<p>Try another search term.</p>
										<button
											class="ms-button ms-button-secondary"
											@click=${() => {
												this.searchTerm = "";
												this.filterMessages();
											}}
										>
											Clear search
										</button>
									</section>`
								: html`<section class="ms-state-card">
										<div
											class="ms-state-icon"
											aria-hidden="true"
										>
											<svg viewBox="0 0 24 24">
												<path
													d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z"
												/>
												<path
													d="M4 5.5v13A2.5 2.5 0 0 1 6.5 16H20M8 7h8M8 10h8"
												/>
											</svg>
										</div>
										<h2>No messages yet</h2>
										<p>
											Add your first message to use it in
											automations, notifications, or TTS.
										</p>
										<button
											class="ms-button ms-button-primary"
											@click=${this.addModal}
										>
											<svg
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													d="M12 5v14M5 12h14"
												/></svg
											><span>Add message</span>
										</button>
									</section>`}
				${this.isModalOpen
					? html`
							<messages-store-modal
								.hass=${this.hass}
								.messages=${this.allMessages}
								.initialSlug=${this.message.slug}
								.initialMessages=${this.message.originalMessage}
								@save=${this.saveMessage}
								@close=${this.closeModal}
							></messages-store-modal>
						`
					: ""}
				${this.isAISettingsOpen
					? html`<div
							class="ms-dialog-backdrop"
							@click=${(event) => {
								if (event.target === event.currentTarget) this.closeAISettings();
							}}
						>
							<section class="ms-dialog" role="dialog" aria-modal="true" aria-labelledby="ai-settings-title">
								<header class="ms-dialog-header">
									<div class="ms-dialog-heading">
										<h2 id="ai-settings-title">AI Task settings</h2>
										<p>These settings are shared with the Messages Store integration configuration.</p>
									</div>
									<button class="ms-icon-button ms-dialog-close" aria-label="Close" @click=${this.closeAISettings}>
										<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
									</button>
								</header>
								<form @submit=${this.saveAISettings}>
									<div class="ms-dialog-body">
										${this.aiSettingsError ? html`<p class="ms-form-error" role="alert">${this.aiSettingsError}</p>` : ""}
										${this.aiSettingsLoading ? html`<div class="ms-state-card" role="status">Loading AI settings…</div>` : html`
											<div class="ms-field">
												<label for="ai-task-entity">AI Task entity</label>
												<select id="ai-task-entity" class="ms-input" .value=${this.aiTaskEntityId} @change=${(event) => { this.aiTaskEntityId = event.target.value; }}>
													<option value="" ?selected=${!this.aiTaskEntityId}>No AI Task selected</option>
													${this.aiTaskEntities.map((entity) => html`<option value=${entity.entity_id} ?selected=${entity.entity_id === this.aiTaskEntityId}>${entity.name} (${entity.entity_id})</option>`)}
												</select>
												<p class="ms-ai-hint">Clearing the selection also disables AI generation in the message editor.</p>
											</div>
											<div class="ms-field">
												<label for="ai-general-prompt">General prompt</label>
												<textarea id="ai-general-prompt" class="ms-textarea" rows="8" .value=${this.aiInstructions} @input=${(event) => { this.aiInstructions = event.target.value; }}></textarea>
												<p class="ms-ai-hint">This prompt is added to the specific instructions entered each time you generate messages.</p>
											</div>
										`}
									</div>
									<footer class="ms-dialog-footer">
										<button type="button" class="ms-button ms-button-secondary" @click=${this.closeAISettings}>Cancel</button>
										<button type="submit" class="ms-button ms-button-primary" ?disabled=${this.aiSettingsLoading || this.aiSettingsSaving}>${this.aiSettingsSaving ? "Saving…" : "Save settings"}</button>
									</footer>
								</form>
							</section>
						</div>`
					: ""}
				${this.notification
					? html`
							<messages-store-notification
								.message=${this.notification.message}
								.type=${this.notification.type}
								@close=${() => (this.notification = null)}
							></messages-store-notification>
						`
					: ""}
				${this.pendingDelete
					? html`<div
							class="ms-dialog-backdrop ms-confirm-backdrop"
							@click=${(e) => {
								if (e.target === e.currentTarget) this.cancelDelete();
							}}
						>
							<section
								class="ms-confirm-dialog"
								role="alertdialog"
								aria-modal="true"
								aria-labelledby="ms-delete-title"
								aria-describedby="ms-delete-description"
							>
								<div class="ms-confirm-icon" aria-hidden="true">
									<svg viewBox="0 0 24 24">
										<path d="M12 3 2.8 20h18.4L12 3Z" />
										<path d="M12 9v5m0 3h.01" />
									</svg>
								</div>
								<h2 id="ms-delete-title">
									${this.pendingDelete.removeSingleMessage
										? "Remove this message?"
										: "Delete this slug?"}
								</h2>
								<p id="ms-delete-description">
									${this.pendingDelete.removeSingleMessage
										? html`This message will be removed from
											<strong>${this.pendingDelete.slug}</strong>.`
										: html`<strong>${this.pendingDelete.slug}</strong>
											and all messages stored under it will be
											deleted.`}
								</p>
								<footer class="ms-confirm-actions">
									<button
										class="ms-button ms-button-secondary"
										autofocus
										@click=${this.cancelDelete}
									>
										Cancel
									</button>
									<button
										class="ms-button ms-button-danger"
										@click=${this.confirmDelete}
									>
										${this.pendingDelete.removeSingleMessage
											? "Remove message"
											: "Delete slug"}
									</button>
								</footer>
							</section>
						</div>`
					: ""}
			</div>
		`;
	}
}
