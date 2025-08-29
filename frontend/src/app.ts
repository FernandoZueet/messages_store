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
	@state() allMessages: Array<{ slug: string; message: string; originalMessage: string[] }> = [];
	@state() messages: Array<{ slug: string; message: string; originalMessage: string[] }> = [];
	@state() message = { slug: "", message: "", originalMessage: [""] };
	@state() isModalOpen = false;
	@state() notification: { message: string; type: string } | null = null;
	@state() searchTerm = "";
	@state() sortOrder: "asc" | "desc" = "asc";
	@state() groupMessages = true;

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
		const response = await this.callService("messages_store", "get_messages");
		this.allMessages = this.processMessages(response?.data);
		this.filterMessages();
	}

	processMessages(data) {
		let processedMessages: Array<{ slug: string; message: string; originalMessage: string[] }> = [];

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
						msg.message.forEach((message) => {
							processedMessages.push({
								slug: msg.slug,
								message: message.trim(),
								originalMessage: msg.message,
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
		const response = await utils.callService(this.hass, domain, service, data, target);

		if(response?.status == 'error') {
			this.showNotification(response?.error?.message || "Unknown error", "error");
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
				(msg: { slug: string; message: string }) =>
					msg.slug.toLowerCase().includes(term) ||
					msg.message.toLowerCase().includes(term)
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

	async saveMessage(e) {
		const { slug, messages, service } = e.detail;
		const response = await this.callService("messages_store", service, {
			slug,
			message: messages,
		});
		this.showNotification(
			response.message,
			response.status ? "success" : "error"
		);
		if (response.status) {
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
			response.message,
			response.status ? "success" : "error"
		);
		if (response.status) {
			await this.loadMessages();
			this.filterMessages();
		}
	}

	showNotification(message, type) {
		this.notification = { message, type };
		setTimeout(() => (this.notification = null), 10000);
	}

	render() {
		return html`
			<div class="min-h-screen p-4 dark:bg-zinc-900 dark:text-white">
				<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
					<h1 class="text-2xl font-bold mb-4 sm:mb-0">Messages Store</h1>
					<div class="flex flex-col sm:flex-row sm:items-center">
						<label class="inline-flex items-center mb-4 sm:mb-0 sm:mr-4">
							<input
								type="checkbox"
								class="form-checkbox"
								.checked=${this.groupMessages}
								@click=${this.toggleGroupMessages}
							/>
							<span class="ml-2">Group slugs</span>
						</label>
						<button
							class="bg-zinc-500 text-white font-bold px-4 py-2 rounded"
							@click=${this.addModal}
						>
							Add Message
						</button>
					</div>
				</div>
				<input
					class="w-full text-sm outline-none border-b-2 border-zinc-600 bg-zinc-800 focus:border-zinc-500 focus:outline-none p-2 text-white mb-4"
					type="text"
					placeholder="Search messages..."
					@input=${this.handleSearch}
				/>

				<div class="overflow-x-auto">
					${this.messages.length > 0
						? html`
								<messages-store-list
									.messages=${this.messages}
									@edit=${this.editModal}
									@delete=${this.deleteMessage}
									@save=${this.saveMessage}
									@sort=${this.toggleSortOrder}
									.sortOrder=${this.sortOrder}
								></messages-store-list>
								<div class="mt-4 text-sm text-gray-500">
									Total Messages: ${this.messages.length}
								</div>
							`
						: html`
								<div class="mt-4 text-sm text-gray-500">
									No messages found.
								</div>
							`}
				</div>
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
				${this.notification
					? html`
							<messages-store-notification
								.message=${this.notification.message}
								.type=${this.notification.type}
								@close=${() => (this.notification = null)}
							></messages-store-notification>
						`
					: ""}
			</div>
		`;
	}
}
