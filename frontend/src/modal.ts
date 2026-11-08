import "./styles.css";
import "./ai_modal";
import utils from "./utils";
import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("messages-store-modal")
export class MessagesStoreModal extends LitElement {
	@property({ type: Array }) messages: Array<any> = [];
	@property({ type: String }) initialSlug = "";
	@property({ type: Array }) initialMessages = [];
	@property({ type: Object }) hass;

	@property({ type: Object }) callService;

	@state() slug = "";
	@state() messageList = [""];
	@state() isAIModalOpen = false;
	@state() aiTaskConfigured = false;

	createRenderRoot() {
		return this;
	}

	connectedCallback() {
		super.connectedCallback();
		this.slug = this.initialSlug ?? "";
		this.messageList = this.initialMessages ?? [""];
		document.addEventListener("keydown", this.handleKeyDown);
	}

	disconnectedCallback() {
		document.removeEventListener("keydown", this.handleKeyDown);
		super.disconnectedCallback();
	}

	firstUpdated() {
		this.checkAITaskConfiguration();
		if (!this.initialSlug) {
			this.focusSlug();
		} else {
			this.focusMessage(0);
		}
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

	handleAddMessage() {
		this.messageList = [...this.messageList, ""];
		setTimeout(() => this.focusMessage(this.messageList.length - 1), 0);
	}

	handleRemoveMessage(index: number) {
		this.messageList = this.messageList.filter((_, i) => i !== index);
	}

	handleSave() {
		const service = this.initialSlug ? "edit_message" : "add_message";
		this.dispatchEvent(
			new CustomEvent("save", {
				detail: {
					slug: this.slug,
					messages: this.messageList,
					service,
				},
			})
		);
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

	focusMessage(index: number) {
		const messageTextareas = this.renderRoot.querySelectorAll("textarea");
		if (messageTextareas && messageTextareas[index]) {
			messageTextareas[index].focus();
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
		return message
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
					const stateObj = this.hass.states[entityId];
					if (!stateObj) {
						return match;
					}

					let stateValue = stateObj.state;
					const unit = stateObj.attributes.unit_of_measurement || "";
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
								${this.initialSlug
									? "Edit message"
									: "Add message"}
							</h2>
							<p>
								${this.initialSlug
									? "Update the messages stored under this slug."
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
						<div class="ms-field">
							<label for="ms-message-slug">Slug</label>
							<input
								id="ms-message-slug"
								type="text"
								class="ms-input"
								.value=${this.slug}
								@input=${(e) => (this.slug = e.target.value)}
								?disabled=${!!this.initialSlug}
								autocomplete="off"
							/>
						</div>
						<div class="ms-field">
							<div class="ms-message-editor-top">
								<span class="ms-field-label">Messages</span
								><button
									class="ms-inline-button"
									@click=${this.handleAddMessage}
								>
									Add another
								</button>
							</div>
							${this.messageList.map(
								(message, index) => html`
									<div class="ms-message-editor">
										<div class="ms-message-editor-top">
											<span>Message ${index + 1}</span>
											${this.messageList.length > 1
												? html`<button
														class="ms-inline-button ms-inline-button-danger"
														@click=${() =>
															this.handleRemoveMessage(
																index
															)}
														aria-label="Remove message ${index +
														1}"
													>
														Remove
													</button>`
												: nothing}
										</div>
										<textarea
											class="ms-textarea"
											aria-label="Message ${index + 1}"
											.value=${message}
											@input=${(e) => {
												this.messageList[index] =
													e.target.value;
												this.requestUpdate();
											}}
										></textarea>
										${/(\(slug:[^)]+\)|\(state:[^)]+\))/.test(
											message
										)
											? html`<div class="ms-preview">
													<strong>Preview</strong
													>${this.previewMessage(
														message
													)}
												</div>`
											: nothing}
									</div>
								`
							)}
						</div>
					${this.aiTaskConfigured
						? html`<button
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
					</div>
					<footer class="ms-dialog-footer">
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
								.initialSlug=${this.initialSlug}
								@close=${() => (this.isAIModalOpen = false)}
								@aiMessages=${this.aiMessages}
							></messages-store-ai-modal>
						`
					: ""}
			</div>
		`;
	}
}
