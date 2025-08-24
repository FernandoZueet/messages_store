import "./styles.css";
import "./ai_modal";
import { LitElement, html } from "lit";
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
		if (!this.initialSlug) {
			this.focusSlug();
		} else {
			this.focusMessage(0);
		}
	}

	handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
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
			.replace(/\(state:([a-zA-Z0-9_\.]+)(?:\((.*?)\))?\)/g, (match, entityId, filters) => {
				const stateObj = this.hass.states[entityId];
				if (!stateObj) {
					return match;
				}
	
				let stateValue = stateObj.state;
				const unit = stateObj.attributes.unit_of_measurement || "";
				let finalValue = stateValue;

				const isNumeric = !isNaN(parseFloat(stateValue)) && isFinite(stateValue);
				filters = filters ? filters.split(',').map(f => f.trim()) : [];

				if (isNumeric) {
					stateValue = parseFloat(stateValue);

					if (filters.includes('round')) {
						finalValue = Math.round(stateValue);
					} else {
						const roundFilter = filters.find(f => f.startsWith('round'));
						if (roundFilter) {
							const decimals = parseInt(roundFilter.replace('round', ''), 10);
							finalValue = stateValue.toFixed(decimals);
						}
					}
				}

				if (filters.includes('unit') && unit) {
					finalValue = `${finalValue} ${unit}`;
				}

				return finalValue;
			});
	}

	render() {
		return html`
			<div
				class="fixed inset-0 flex items-center justify-center z-50 bg-zinc-900 bg-opacity-50 backdrop-blur-sm"
			>
				<div
					class="bg-zinc-800 text-white p-6 rounded-lg shadow-2xl w-full max-w-lg mx-4 sm:mx-6 md:w-2/3 lg:w-1/3 border-[1px] border-zinc-700 relative"
				>
					<h2 class="text-xl mb-5 font-bold flex justify-between items-center">
						${this.initialSlug ? "Edit Message" : "Add Message"}
						<button
							class="bg-blue-600 text-white font-bold px-3 py-1 rounded ml-2 text-sm"
							style="position:absolute;top:18px;right:18px;"
							@click=${() => (this.isAIModalOpen = true)}
						>
							Generate with AI
						</button>
					</h2>
					<div class="mb-4">
						<label class="block mb-2 text-sm">Slug</label>
						<input
							type="text"
							class="text-sm outline-none border-b-2 border-zinc-600 bg-zinc-700 focus:border-zinc-400 focus:outline-none w-full p-2 text-white"
							.value=${this.slug}
							@input=${(e) => (this.slug = e.target.value)}
							?disabled=${!!this.initialSlug}
						/>
					</div>
					<div class="mb-4">
						<label class="block mb-2 text-sm">Message</label>
						${this.messageList.map(
							(message, index) => html`
								<div class="flex flex-col mb-2">
									<div class="flex items-center">
										<textarea
											class="text-sm outline-none border-b-2 border-zinc-600 bg-zinc-700 focus:border-zinc-400 focus:outline-none w-full p-2 text-white mr-2"
											.value=${message}
											@input=${(e) => {
												this.messageList[index] =
													e.target.value;
												this.requestUpdate();
											}}
										></textarea>
										${this.messageList.length > 1
											? html`
													<button
														class="bg-zinc-600 text-white px-3 py-1 font-bold rounded"
														@click=${() =>
															this.handleRemoveMessage(
																index
															)}
													>
														x
													</button>
												`
											: ""}
									</div>
									${/\(slug:[^)]+\)/.test(message) ||
									/\(state:[^)]+\)/.test(message)
										? html`
												<div
													class="text-sm text-zinc-400 mt-2 mb-2"
												>
													<span class="text-zinc-300"
														>Preview:</span
													>
													${this.previewMessage(
														message
													)}
												</div>
											`
										: ""}
								</div>
							`
						)}
						<button
							class="bg-zinc-500 text-white font-bold px-3 py-1 rounded mt-2"
							@click=${this.handleAddMessage}
						>
							+
						</button>
					</div>
					<div class="flex justify-end">
						<button
							class="bg-green-500 text-white font-bold px-7 py-2 rounded mr-2"
							@click=${this.handleSave}
						>
							Save
						</button>
						<button
							class="bg-zinc-500 font-bold text-white px-7 py-2 rounded"
							@click=${this.closeModal}
						>
							Cancel
						</button>
					</div>
				</div>
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
