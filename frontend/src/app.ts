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
		tags?: string[];
		favorite?: boolean;
	}> = [];
	@state() messages: Array<{
		slug: string;
		message: string;
		originalMessage: string[];
		messageIndex?: number;
		tags?: string[];
		favorite?: boolean;
	}> = [];
	@state() message: any = { slug: "", message: "", originalMessage: [""], tags: [], favorite: false };
	@state() isModalOpen = false;
	@state() editingMessage = false;
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
	@state() favoriteOnly = false;
	@state() selectedTag = "";
	@state() filtersDialogOpen = false;
	@state() importDialogOpen = false;
	@state() importContent = "";
	@state() importFormat: "json" | "yaml" = "json";
	@state() exportMenuOpen = false;

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
		if (e.key === "Escape" && this.exportMenuOpen) {
			this.exportMenuOpen = false;
			return;
		}
		if (e.key === "Escape" && this.filtersDialogOpen) {
			this.filtersDialogOpen = false;
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
		tags?: string[];
		favorite?: boolean;
		}> = [];

		if (Array.isArray(data)) {
			data.forEach((msg) => {
				if (Array.isArray(msg.message)) {
					if (this.groupMessages) {
						processedMessages.push({
							slug: msg.slug,
							message: msg.message[0],
							originalMessage: msg.message,
							tags: msg.tags || [], favorite: !!msg.favorite,
						});
					} else {
						msg.message.forEach((message, messageIndex) => {
							processedMessages.push({
								slug: msg.slug,
								message: message.trim(),
								originalMessage: msg.message,
								messageIndex,
								tags: msg.tags || [], favorite: !!msg.favorite,
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
		this.messages = this.allMessages.filter(
				(msg) =>
				(!term || msg.slug.toLowerCase().includes(term) ||
					msg.message.toLowerCase().includes(term) ||
					(msg.tags || []).some((tag) => tag.toLowerCase().includes(term)) ||
					(this.groupMessages &&
						msg.originalMessage.some((message) =>
							message.toLowerCase().includes(term)
						))) &&
				(this.selectedTag ? (msg.tags || []).includes(this.selectedTag) : true) &&
				(!this.favoriteOnly || msg.favorite)
			);
		this.sortMessages();
	}

	editModal(msg) {
		msg = msg.detail;
		this.message = {
			...msg,
			initialFocusIndex: this.groupMessages ? 0 : (msg.messageIndex ?? 0),
		};
		this.editingMessage = true;
		this.isModalOpen = true;
	}

	addModal() {
		this.message = { slug: "", message: "", originalMessage: [""], tags: [], favorite: false };
		this.editingMessage = false;
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

	closeFiltersDialog() {
		this.filtersDialogOpen = false;
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
		const { slug, messages, service, tags = [], favorite = false } = e.detail;
		const response = await this.callService("messages_store", service, {
			slug,
			message: messages,
			tags, favorite,
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

	get availableTags() { return [...new Set(this.allMessages.reduce((tags, msg) => tags.concat(msg.tags || []), [] as string[]))].sort(); }

	async exportCollection(format: "json" | "yaml") {
		this.exportMenuOpen = false;
		const result = await this.callService("messages_store", "export_messages", { format });
		if (!result?.status) { this.showNotification(result?.message || "Unable to export the collection.", "error"); return; }
		const blob = new Blob([result.content], { type: format === "json" ? "application/json" : "text/yaml" });
		const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = `messages-store.${format}`; link.click(); URL.revokeObjectURL(link.href);
	}

	async importCollection() {
		const result = await this.callService("messages_store", "import_messages", { content: this.importContent, format: this.importFormat });
		if (result?.status) {
			this.showNotification(`Imported ${result.imported.length}; skipped existing: ${result.skipped.join(", ") || "none"}; invalid ${result.invalid_count}.`, "success");
			this.importDialogOpen = false; this.importContent = ""; await this.loadMessages();
		} else this.showNotification(result?.message || "Unable to import the collection.", "error");
	}

	async duplicateSlug(event) {
		const source = event.detail;
		let slug = `${source.slug}_copy`, suffix = 2;
		while (this.allMessages.some((item) => item.slug === slug)) slug = `${source.slug}_copy_${suffix++}`;
		this.message = { slug, message: source.message, originalMessage: [...source.originalMessage], tags: [...(source.tags || [])], favorite: false };
		this.editingMessage = false;
		this.isModalOpen = true;
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
			<div class="ms-page" @click=${() => { if (this.exportMenuOpen) this.exportMenuOpen = false; }}>
			<div class="ms-app-shell">
				<header class="ms-page-header">
					<div class="ms-heading-copy">
						<a class="ms-back-button" href="/home" target="_top" aria-label="Back to Home Assistant" title="Back to Home Assistant">
							<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6M9 12h12" /></svg>
						</a>
						<div class="ms-heading-text">
							<h1>Messages Store</h1>
						</div>
					</div>
					<div class="ms-header-actions">
						<button
							class="ms-button ms-button-secondary ms-button-small"
							@click=${this.openAISettings}
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
								<path d="m19.4 15 .1.1a1.8 1.8 0 1 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 1 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 1 1 0-3.6h.2a1.8 1.8 0 0 0 1.3-3.1l-.1-.1a1.8 1.8 0 1 1 2.5-2.5l.1.1a1.8 1.8 0 0 0 3.1-1.3v-.2a1.8 1.8 0 1 1 3.6 0v.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 1 1 2.5 2.5l-.1.1a1.8 1.8 0 0 0 1.3 3.1h.2a1.8 1.8 0 1 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.1Z" />
							</svg>
							<span>AI settings</span>
						</button>
						<button
							class="ms-button ms-button-primary ms-button-small"
							@click=${this.addModal}
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 5v14M5 12h14" />
							</svg>
							<span>Add message</span>
						</button>
					</div>
				</header>

				<div class="ms-library-layout">
				<main class="ms-library-results">
				<section class="ms-toolbar" aria-label="Message list controls">
					<button class="ms-filter-chip ${this.selectedTag || this.favoriteOnly ? "is-active" : ""}" aria-haspopup="dialog" aria-expanded=${this.filtersDialogOpen} @click=${() => this.filtersDialogOpen = true}>
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10m-7 6h4" /></svg>
						<span>Filters</span>
						${this.selectedTag || this.favoriteOnly ? html`<span class="ms-filter-chip-count">${Number(!!this.selectedTag) + Number(this.favoriteOnly)}</span>` : ""}
					</button>
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
					<div class="ms-library-actions">
						<div class="ms-export-menu" @click=${(event) => event.stopPropagation()}>
							<button class="ms-button ms-button-secondary" aria-label="Export messages" title="Export messages" aria-haspopup="menu" aria-expanded=${this.exportMenuOpen} @click=${() => this.exportMenuOpen = !this.exportMenuOpen}>
								<svg class="ms-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M5 16v4h14v-4"/></svg><svg class="ms-action-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>
							</button>
							${this.exportMenuOpen ? html`<div class="ms-export-dropdown" role="menu"><button role="menuitem" @click=${() => this.exportCollection("json")}>JSON (.json)</button><button role="menuitem" @click=${() => this.exportCollection("yaml")}>YAML (.yaml)</button></div>` : ""}
						</div>
						<button class="ms-button ms-button-secondary ms-import-button" aria-label="Import collection" title="Import collection" @click=${() => this.importDialogOpen = true}><svg class="ms-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m0 0 4 4m-4-4L8 8"/><path d="M5 14v6h14v-6"/></svg></button>
					</div>
				</section>
				${this.filtersDialogOpen ? html`<div class="ms-dialog-backdrop" @click=${(event) => { if (event.target === event.currentTarget) this.closeFiltersDialog(); }}><section class="ms-dialog ms-filter-dialog" role="dialog" aria-modal="true" aria-labelledby="filters-title"><header class="ms-dialog-header"><div class="ms-dialog-heading"><h2 id="filters-title">Filters</h2><p>Choose how to group and filter messages.</p></div><button class="ms-icon-button ms-dialog-close" aria-label="Close filters" title="Close filters" @click=${this.closeFiltersDialog}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></header><div class="ms-dialog-body"><label class="ms-field"><span class="ms-field-label">Group by</span><select class="ms-input" aria-label="Group by" .value=${this.groupMessages ? "slug" : "none"} @change=${(event) => { this.groupMessages = event.target.value === "slug"; this.saveConfig(); this.loadMessages(); }}><option value="slug">Slug</option><option value="none">None</option></select></label><label class="ms-field"><span class="ms-field-label">Tags</span><select class="ms-input" aria-label="Filter by tag" .value=${this.selectedTag} @change=${(event) => { this.selectedTag = event.target.value; this.filterMessages(); }}><option value="">All tags</option>${this.availableTags.map((tag) => html`<option value=${tag}>${tag}</option>`)}</select></label><label class="ms-filter-favorite ms-filter-dialog-favorite"><input type="checkbox" .checked=${this.favoriteOnly} @change=${(event) => { this.favoriteOnly = event.target.checked; this.filterMessages(); }} /><span>Favorites only</span></label></div><footer class="ms-dialog-footer"><button class="ms-button ms-button-secondary" @click=${this.closeFiltersDialog}>Cancel</button><button class="ms-button ms-button-primary" @click=${this.closeFiltersDialog}>Show results</button></footer></section></div>` : ""}

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
								@duplicate=${this.duplicateSlug}
								@favorite=${async (event) => { const row = event.detail; const result = await this.callService("messages_store", "update_message_metadata", { slug: row.slug, tags: row.tags || [], favorite: !row.favorite }); if (result?.status) await this.loadMessages(); }}
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
				</main>
				</div>
			</div>
				${this.isModalOpen
					? html`
							<messages-store-modal
								.hass=${this.hass}
								.messages=${this.allMessages}
								.initialSlug=${this.message.slug}
								.isEditing=${this.editingMessage}
								.initialMessages=${this.message.originalMessage}
								.initialTags=${this.message.tags || []}
								.initialFavorite=${this.message.favorite || false}
								.initialFocusIndex=${this.message.initialFocusIndex || 0}
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
				${this.importDialogOpen ? html`<div class="ms-dialog-backdrop" @click=${(e) => { if (e.target === e.currentTarget) this.importDialogOpen = false; }}><section class="ms-dialog" role="dialog" aria-modal="true" aria-labelledby="import-title"><header class="ms-dialog-header"><div class="ms-dialog-heading"><h2 id="import-title">Import collection</h2><p>Existing slugs are skipped and reported.</p></div><button class="ms-icon-button ms-dialog-close" aria-label="Close" title="Close" @click=${() => this.importDialogOpen = false}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></header><div class="ms-dialog-body"><label class="ms-field">Choose JSON or YAML file<input class="ms-input" type="file" accept=".json,.yaml,.yml,application/json,text/yaml" @change=${async (e) => { const file = e.target.files?.[0]; if (file) { this.importContent = await file.text(); this.importFormat = /\.ya?ml$/i.test(file.name) ? "yaml" : "json"; } }} /></label><label class="ms-field">Format<select class="ms-input" .value=${this.importFormat} @change=${(e) => this.importFormat = e.target.value}><option value="json">JSON</option><option value="yaml">YAML</option></select></label><label class="ms-field">Collection<textarea class="ms-textarea" rows="12" .value=${this.importContent} @input=${(e) => this.importContent = e.target.value} placeholder="Paste JSON or YAML"></textarea></label></div><footer class="ms-dialog-footer"><button class="ms-button ms-button-secondary" @click=${() => this.importDialogOpen = false}>Cancel</button><button class="ms-button ms-button-primary" @click=${this.importCollection} ?disabled=${!this.importContent.trim()}>Import</button></footer></section></div>` : ""}
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
