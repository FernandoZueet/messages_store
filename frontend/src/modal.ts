import "./styles.css";
import "./ai_modal";
import utils from "./utils";
import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("messages-store-modal")
export class MessagesStoreModal extends LitElement {
	@property({ type: Array }) messages: Array<any> = [];
	@property({ type: String }) initialSlug = "";
	@property({ type: Boolean }) isEditing = false;
	@property({ type: Array }) initialMessages = [];
	@property({ type: Array }) initialTags: string[] = [];
	@property({ type: Boolean }) initialFavorite = false;
	@property({ type: Number }) initialFocusIndex = 0;
	@property({ type: Object }) hass;

	@property({ type: Object }) callService;

	@state() slug = "";
	@state() messageList = [""];
	@state() isAIModalOpen = false;
	@state() aiTaskConfigured = false;
	@state() tags: string[] = [];
	@state() tagQuery = "";
	@state() tagSuggestionsOpen = false;
	@state() tagSuggestionIndex = 0;
	@state() favorite = false;
	@state() selectedFilter = "";
	@state() activeMessageIndex = 0;
	@state() previewOpenIndices = new Set<number>();
	@state() caretPosition = 0;
	@state() suggestionStart = 0;
	@state() suggestionQuery = "";
	@state() suggestionOpen = false;
	@state() suggestionIndex = 0;

	createRenderRoot() {
		return this;
	}

	connectedCallback() {
		super.connectedCallback();
		this.slug = this.initialSlug ?? "";
		this.messageList = this.initialMessages ?? [""];
		this.tags = [...(this.initialTags || [])];
		this.favorite = !!this.initialFavorite;
		document.addEventListener("keydown", this.handleKeyDown);
	}

	disconnectedCallback() {
		document.removeEventListener("keydown", this.handleKeyDown);
		super.disconnectedCallback();
	}

	firstUpdated() {
		this.checkAITaskConfiguration();
		this.resizeMessageTextareas();
		if (!this.isEditing) {
			this.focusSlug();
		} else {
			this.focusMessage(Math.min(this.initialFocusIndex, this.messageList.length - 1));
		}
	}

	updated() {
		this.resizeMessageTextareas();
	}

	resizeMessageTextareas() {
		this.querySelectorAll<HTMLTextAreaElement>(".ms-message-textarea").forEach((textarea) => {
			textarea.style.height = "auto";
			textarea.style.height = `${Math.max(76, textarea.scrollHeight)}px`;
		});
	}

	async checkAITaskConfiguration() {
		try {
			const response = await utils.callService(
				this.hass,
				"messages_store",
				"get_ai_task_configured"
			);
			this.aiTaskConfigured = response?.configured === true;
		} catch {
			this.aiTaskConfigured = false;
		}
	}

	handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
			if (this.isAIModalOpen) {
				this.isAIModalOpen = false;
				return;
			}
			this.closeModal();
		}
		if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "s") {
			this.handleSave();
		}
	};

	async handleAddMessage() {
		this.messageList = [...this.messageList, ""];
		await this.updateComplete;
		await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
		const index = this.messageList.length - 1;
		const textarea = this.querySelectorAll(".ms-message-textarea")[index] as HTMLTextAreaElement | undefined;
		if (textarea) {
			textarea.scrollIntoView({ block: "nearest", behavior: "smooth" });
		}
		this.focusMessage(index, true);
	}

	handleRemoveMessage(index: number) {
		this.messageList = this.messageList.filter((_, i) => i !== index);
		this.previewOpenIndices = new Set([...this.previewOpenIndices].filter((i) => i !== index).map((i) => i > index ? i - 1 : i));
	}

	togglePreview(index: number) {
		const next = new Set(this.previewOpenIndices);
		if (next.has(index)) next.delete(index);
		else next.add(index);
		this.previewOpenIndices = next;
	}

	handleSave() {
		const service = this.isEditing ? "edit_message" : "add_message";
		this.dispatchEvent(
			new CustomEvent("save", {
				detail: {
					slug: this.slug,
					messages: this.messageList,
					tags: this.tags,
					favorite: this.favorite,
					service,
				},
			})
		);
	}

	get availableTags(): string[] {
		const query = this.tagQuery.trim().toLowerCase();
		const existing = this.messages.reduce<string[]>(
			(tags, record) => tags.concat((record.tags || []) as string[]),
			[]
		);
		return [...new Set<string>(existing)]
			.filter((tag) => !this.tags.includes(tag) && (!query || tag.toLowerCase().includes(query)))
			.sort((a, b) => a.localeCompare(b));
	}

	addTag(value = this.tagQuery) {
		const tag = value.trim();
		if (!tag || this.tags.some((existing) => existing.toLowerCase() === tag.toLowerCase())) {
			this.tagQuery = "";
			this.tagSuggestionsOpen = false;
			return;
		}
		this.tags = [...this.tags, tag];
		this.tagQuery = "";
		this.tagSuggestionsOpen = false;
	}

	handleTagKeyDown(event: KeyboardEvent) {
		if (event.key === "ArrowDown" && this.availableTags.length) {
			event.preventDefault();
			this.tagSuggestionsOpen = true;
			this.tagSuggestionIndex = (this.tagSuggestionIndex + 1) % this.availableTags.length;
		} else if (event.key === "ArrowUp" && this.availableTags.length) {
			event.preventDefault();
			this.tagSuggestionsOpen = true;
			this.tagSuggestionIndex = (this.tagSuggestionIndex - 1 + this.availableTags.length) % this.availableTags.length;
		} else if (event.key === "Escape") {
			this.tagSuggestionsOpen = false;
		} else if (event.key === ",") {
			event.preventDefault();
			this.addTag();
		} else if (event.key === "Enter") {
			event.preventDefault();
			this.addTag(this.availableTags[this.tagSuggestionIndex] || this.tagQuery);
		}
	}

	removeTag(tag: string) {
		this.tags = this.tags.filter((current) => current !== tag);
	}

	get entities() {
		return (Object.values(this.hass?.states || {}) as any[]).sort((a, b) =>
			a.entity_id.localeCompare(b.entity_id)
		);
	}

	get suggestedEntities() {
		const query = this.suggestionQuery.toLowerCase();
		return this.entities
			.filter((entity) =>
				`${entity.entity_id} ${entity.attributes?.friendly_name || ""}`
					.toLowerCase()
					.includes(query)
			)
			.slice(0, 8);
	}

	handleMessageInput(event: InputEvent, index: number) {
		const textarea = event.currentTarget as HTMLTextAreaElement;
		textarea.style.height = "auto";
		textarea.style.height = `${Math.max(76, textarea.scrollHeight)}px`;
		this.messageList[index] = textarea.value;
		this.activeMessageIndex = index;
		this.caretPosition = textarea.selectionStart;
		const beforeCursor = textarea.value.slice(0, textarea.selectionStart);
		const match = beforeCursor.match(/(?:\(state:|\bstate:)([a-zA-Z0-9_.]*)$/i);
		if (match) {
			this.suggestionStart = textarea.selectionStart - match[0].length;
			this.suggestionQuery = match[1];
			this.suggestionIndex = 0;
			this.suggestionOpen = this.suggestedEntities.length > 0;
		} else {
			this.suggestionOpen = false;
		}
		const selectionStart = textarea.selectionStart;
		const selectionEnd = textarea.selectionEnd;
		this.requestUpdate();
		void this.updateComplete.then(() => {
			const updated = this.querySelectorAll(".ms-message-textarea")[index] as HTMLTextAreaElement;
			updated?.setSelectionRange(selectionStart, selectionEnd);
		});
	}

	handleMessageKeyDown(event: KeyboardEvent, index: number) {
		if (!this.suggestionOpen) return;
		const suggestions = this.suggestedEntities;
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			this.suggestionIndex = (this.suggestionIndex + (event.key === "ArrowDown" ? 1 : -1) + suggestions.length) % suggestions.length;
		} else if (event.key === "Enter" && suggestions[this.suggestionIndex]) {
			event.preventDefault();
			event.stopPropagation();
			this.selectEntity(suggestions[this.suggestionIndex].entity_id, index);
		} else if (event.key === "Escape") {
			event.preventDefault();
			event.stopPropagation();
			this.suggestionOpen = false;
		}
	}

	async selectEntity(entityId: string, index: number) {
		const textarea = this.querySelectorAll(".ms-message-textarea")[index] as HTMLTextAreaElement;
		if (!textarea) return;
		const filter = this.selectedFilter ? `(${this.selectedFilter})` : "";
		const tag = `(state:${entityId}${filter})`;
		textarea.setRangeText(tag, this.suggestionStart, this.caretPosition, "end");
		this.messageList[index] = textarea.value;
		this.caretPosition = textarea.selectionStart;
		this.suggestionOpen = false;
		this.requestUpdate();
		await this.updateComplete;
		textarea.focus();
		textarea.setSelectionRange(this.caretPosition, this.caretPosition);
	}

	getMissingReferences(message: string) {
		const collect = (pattern: RegExp) => { const values: string[] = []; let match: RegExpExecArray | null; while ((match = pattern.exec(message)) !== null) values.push(match[1]); return values; };
		const missingSlugs = collect(/\(slug:([^)]+)\)/g).filter((slug) => slug !== this.slug && !this.messages.some((item) => item.slug === slug));
		const missingEntities = collect(/\(state:([a-zA-Z0-9_.]+)(?:\((.*?)\))?\)/g).filter((entityId) => !this.hass?.states?.[entityId]);
		return [...new Set([...missingSlugs.map((slug) => `Missing slug: ${slug}`), ...missingEntities.map((entity) => `Unavailable entity: ${entity}`)])];
	}

	closeModal() {
		this.dispatchEvent(new CustomEvent("close"));
	}

	handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) this.closeModal();
	}

	focusSlug() {
		const slugInput: any =
			this.renderRoot.querySelector('input[type="text"]');
		if (slugInput) {
			slugInput.focus();
		}
	}

	focusMessage(index: number, preventScroll = false) {
		const messageTextareas = this.renderRoot.querySelectorAll("textarea");
		if (messageTextareas && messageTextareas[index]) {
			messageTextareas[index].focus({ preventScroll });
		}
	}

	aiMessages(event: CustomEvent) {
		const { slug, messages } = event.detail;

		if (!this.slug) this.slug = slug;
		let newList = [...this.messageList, ...messages];
		if (newList.length > 0 && newList[0] === "") newList = newList.slice(1);
		this.messageList = newList;
	}

	previewMessage(message) {
		const preview = message
			.replace(/\(slug:([^)]+)\)/g, (match, slugName) => {
				if (slugName === this.slug) {
					return match;
				}

				const matchingMessages: any = this.messages.filter(
					(msg) => msg.slug === slugName
				);

				if (matchingMessages.length === 0) {
					return match;
				}

				const selectedMessage = matchingMessages[0].message;

				if (/\(slug:[^)]+\)/.test(selectedMessage)) {
					return match;
				}

				return selectedMessage;
			})
			.replace(
				/\(state:([a-zA-Z0-9_\.]+)(?:\((.*?)\))?\)/g,
				(match, entityId, filters) => {
					const stateObj = this.hass?.states?.[entityId];
					if (!stateObj) {
						return match;
					}

					let stateValue = stateObj.state;
					const unit = stateObj.attributes?.unit_of_measurement || "";
					let finalValue = stateValue;

					const isNumeric =
						!isNaN(parseFloat(stateValue)) && isFinite(stateValue);
					filters = filters
						? filters.split(",").map((f) => f.trim())
						: [];

					if (isNumeric) {
						stateValue = parseFloat(stateValue);

						if (filters.includes("round")) {
							finalValue = Math.round(stateValue);
						} else {
							const roundFilter = filters.find((f) =>
								f.startsWith("round")
							);
							if (roundFilter) {
								const decimals = parseInt(
									roundFilter.replace("round", ""),
									10
								);
								finalValue = stateValue.toFixed(decimals);
							}
						}
					}

					if (filters.includes("unit") && unit) {
						finalValue = `${finalValue} ${unit}`;
					}

					return finalValue;
				}
			);
		return preview;
	}

	render() {
		return html`
			<div class="ms-dialog-backdrop" @click=${this.handleBackdropClick}>
				<section
					class="ms-dialog"
					role="dialog"
					aria-modal="true"
					aria-labelledby="ms-message-dialog-title"
					@click=${(event) => event.stopPropagation()}
				>
					<header class="ms-dialog-header">
						<div class="ms-dialog-heading">
							<h2 id="ms-message-dialog-title">
								${this.isEditing
								? "Edit message"
									: "Add message"}
							</h2>
							<p>
								${this.isEditing
									? html`Editing slug: <strong>${this.slug}</strong>`
									: "Create a reusable message for your automations."}
							</p>
						</div>
						<button
							class="ms-dialog-close"
							@click=${this.closeModal}
							aria-label="Close dialog"
							title="Close"
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="m6 6 12 12M18 6 6 18" />
							</svg>
						</button>
					</header>
					<div class="ms-dialog-body">
						${!this.isEditing ? html`<div class="ms-field">
							<label for="ms-message-slug">Slug</label>
							<input
								id="ms-message-slug"
								type="text"
								class="ms-input"
								.value=${this.slug}
								@input=${(e) => (this.slug = e.target.value)}
								?disabled=${this.isEditing}
								autocomplete="off"
							/>
						</div>` : nothing}
						<div class="ms-field ms-library-metadata">
							<label for="ms-message-tags">Tags</label>
							<div class="ms-tag-editor">
								${this.tags.map((tag) => html`<span class="ms-tag-chip">${tag}<button type="button" aria-label="Remove tag ${tag}" @click=${() => this.removeTag(tag)}>×</button></span>`)}
								<input id="ms-message-tags" class="ms-input" maxlength="40" .value=${this.tagQuery} placeholder="Type or select a tag" @focus=${() => this.tagSuggestionsOpen = true} @input=${(e) => { this.tagQuery = e.target.value; this.tagSuggestionIndex = 0; this.tagSuggestionsOpen = true; }} @blur=${(e) => { this.addTag(e.target.value); this.tagSuggestionsOpen = false; }} @keydown=${this.handleTagKeyDown} />
								${this.tagSuggestionsOpen && this.availableTags.length ? html`<div class="ms-tag-suggestions" role="listbox" aria-label="Available tags">${this.availableTags.map((tag, index) => html`<button type="button" class="ms-tag-suggestion ${index === this.tagSuggestionIndex ? "is-active" : ""}" role="option" aria-selected=${index === this.tagSuggestionIndex} @mousedown=${(event) => event.preventDefault()} @click=${() => this.addTag(tag)}>${tag}</button>`)}</div>` : nothing}
							</div>
						</div>
		<div class="ms-field ms-messages-field">
			<div class="ms-message-editor-top">
								<span class="ms-field-label ms-messages-label">Messages</span>
							</div>
			<div class="ms-message-list">
							${this.messageList.map(
								(message, index) => html`
									<div class="ms-message-editor">
						<div class="ms-message-editor-top">
							<span>Message ${index + 1}</span>
							<div class="ms-message-editor-actions">
											${this.messageList.length > 1
												? html`<button
														class="ms-inline-button ms-icon-button ms-inline-button-danger"
														@click=${() =>
															this.handleRemoveMessage(
																index
															)}
														aria-label="Remove message ${index +
														1}"
														title="Remove message ${index + 1}"
													>
														<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6m4-6v6M5 7l1 14h12l1-14M9 7V4h6v3" /></svg>
													</button>`
												: nothing}
											${message.trim() ? html`<button class="ms-inline-button ms-icon-button" title="Duplicate message ${index + 1}" aria-label="Duplicate message ${index + 1}" @click=${() => { this.messageList = [...this.messageList.slice(0, index + 1), this.messageList[index], ...this.messageList.slice(index + 1)]; }}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg></button>` : nothing}
											${message.trim() ? html`<button type="button" class="ms-inline-button ms-icon-button ms-preview-toggle" title=${this.previewOpenIndices.has(index) ? `Hide preview for message ${index + 1}` : `Show preview for message ${index + 1}`} aria-label=${this.previewOpenIndices.has(index) ? `Hide preview for message ${index + 1}` : `Show preview for message ${index + 1}`} aria-expanded=${this.previewOpenIndices.has(index)} @click=${() => this.togglePreview(index)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg></button>` : nothing}
							</div>
										</div>
										<textarea
											class="ms-textarea ms-message-textarea"
											aria-label="Message ${index + 1}"
											.value=${message}
											@input=${(e) => {
												this.handleMessageInput(e, index);
											}}
											@keydown=${(e) => this.handleMessageKeyDown(e, index)}
											@keyup=${(e) => { this.activeMessageIndex = index; this.caretPosition = e.target.selectionStart; }}
											@click=${(e) => { this.activeMessageIndex = index; this.caretPosition = e.target.selectionStart; }}
										></textarea>
						${this.suggestionOpen && this.activeMessageIndex === index ? html`<div class="ms-entity-suggestions" role="listbox" aria-label="Home Assistant entities"><div class="ms-entity-suggestions-heading"><span>Entities</span><select class="ms-input" aria-label="State filter" .value=${this.selectedFilter} @change=${(e) => this.selectedFilter = e.target.value}><option value="">No filter</option><option value="round">round</option><option value="round1">round1</option><option value="round2">round2</option><option value="round3">round3</option><option value="unit">unit</option><option value="round1,unit">round1, unit</option></select></div>${this.suggestedEntities.map((entity: any, suggestionIndex) => html`<button type="button" class="ms-entity-suggestion ${suggestionIndex === this.suggestionIndex ? "is-active" : ""}" role="option" aria-selected=${suggestionIndex === this.suggestionIndex} @mousedown=${(e) => e.preventDefault()} @click=${() => this.selectEntity(entity.entity_id, index)}><span>${entity.attributes?.friendly_name || entity.entity_id}</span><small>${entity.entity_id} · ${entity.state}</small></button>`)}</div>` : nothing}
						${message.trim() && this.previewOpenIndices.has(index) ? html`<div class="ms-preview"><strong>Preview</strong><div>${this.previewMessage(message)}</div></div>` : nothing}
											${this.getMissingReferences(message).map((warning) => html`<p class="ms-reference-warning" role="status">${warning} (message can still be saved)</p>`)}
									</div>
								`
							)}
			</div>
			<div class="ms-message-list-footer">
				<button type="button" class="ms-inline-button ms-icon-button ms-add-message" title="Add another message" aria-label="Add another message" @click=${this.handleAddMessage}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></button>
			</div>
						</div>
					</div>
					<footer class="ms-dialog-footer">
						${this.isEditing ? html`<button type="button" class="ms-button ms-button-secondary ms-favorite-toggle ${this.favorite ? "is-favorite" : ""}" title=${this.favorite ? `Remove ${this.slug} from favorites` : `Favorite ${this.slug}`} aria-label=${this.favorite ? `Remove ${this.slug} from favorites` : `Favorite ${this.slug}`} @click=${() => this.favorite = !this.favorite}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg></button>` : nothing}
						${this.aiTaskConfigured
							? html`<button
									type="button"
									class="ms-button ms-button-secondary ms-ai-trigger"
									@click=${() => (this.isAIModalOpen = true)}
									aria-haspopup="dialog"
								>
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
										<path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
									</svg>
									<span>Generate with AI</span>
								</button>`
							: nothing}
						<button
							class="ms-button ms-button-secondary"
							@click=${this.closeModal}
						>
							Cancel
						</button>
						<button
							class="ms-button ms-button-primary"
							@click=${this.handleSave}
						>
							Save message
						</button>
					</footer>
				</section>
				${this.isAIModalOpen
					? html`
							<messages-store-ai-modal
								.hass=${this.hass}
								.initialSlug=${this.isEditing ? this.initialSlug : ""}
								@close=${() => (this.isAIModalOpen = false)}
								@aiMessages=${this.aiMessages}
							></messages-store-ai-modal>
						`
					: ""}
			</div>
		`;
	}
}
