import "./styles.css";
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import utils from "./utils";

@customElement("messages-store-ai-modal")
export class MessagesStoreAIModal extends LitElement {
	@state() instructions = "";
	@state() quantity = 5;
	@state() taskName = "";
	@state() slug = "";
	@state() loading = false;
	@state() error = "";

    @property({ type: Object }) hass;
    @property({ type: String }) initialSlug = "";

	createRenderRoot() {
		return this;
	}

    firstUpdated() {
		this.focusInput();
        this.slug = this.initialSlug ?? "";
        this.taskName = `AI Task ${this.initialSlug}`;
        this.instructions = this.initialSlug ? `Generate messages for slug` : "";
	}

    focusInput() {
		if (this.initialSlug) {
            const input: any = this.renderRoot.querySelector('#save');
            if (input) input.focus();
		} else {
            const input: any = this.renderRoot.querySelector('textarea');
            if (input) input.focus();
		}
	}

	handleClose() {
		this.dispatchEvent(new CustomEvent("close"));
	}

	async handleGenerate() {
		this.error = "";
		if (!this.instructions || !this.taskName || !this.quantity) {
			this.error = "Fill all required fields.";
			return;
		}
		this.loading = true;

        const response = await utils.callService(this.hass, "messages_store", "generate_ai_messages", {
			instructions: this.instructions,
            quantity: Number(this.quantity),
            task_name: this.taskName,
            slug: this.slug || undefined,
		});

        if(response?.status == "error") {
            this.error = response?.error?.message || "Service call failed";
            this.loading = false;
            return;
        }

        if(response && !response.status) {
            this.error = response?.message || "Unknown error";
            this.loading = false;
            return;
        }

        if (response && response.status) {
            this.dispatchEvent(
                new CustomEvent("aiMessages", {
                    detail: {
                        slug: response.slug,
                        messages: response.messages,
                    },
                })
            );
            this.handleClose();
            this.loading = false;
        } 
	}

	render() {
		return html`
			<div
				class="fixed inset-0 flex items-center justify-center z-90 bg-zinc-900 bg-opacity-50 backdrop-blur-sm" style="z-index: 9999;"
			>
				<div
						class="bg-zinc-800 text-white p-6 rounded-lg shadow-2xl w-full max-w-lg mx-4 sm:mx-6 md:w-2/3 lg:w-1/3 border-[1px] border-zinc-700 relative" 
				>
					<h2 class="text-xl mb-5 font-bold">
						Generate Messages with AI
					</h2>
					<div class="mb-3">
						<label class="block mb-1 text-sm">Task Name *</label>
						<input
							type="text"
							class="w-full p-2 bg-zinc-700 border-b-2 border-zinc-600 text-white"
							.value=${this.taskName}
							@input=${(e) => (this.taskName = e.target.value)}
						/>
                    </div>    
                    <div class="mb-3">
                        <label class="block mb-1 text-sm">Instructions *</label>
						<textarea
							class="w-full p-2 bg-zinc-700 border-b-2 border-zinc-600 text-white"
							.value=${this.instructions}
							@input=${(e) =>
								(this.instructions = e.target.value)}
						></textarea>
                        <div
                            class="text-sm text-zinc-400 mt-2 mb-2"
                        >
                            <span class="text-zinc-300"
                                >Ex: generates messages for when I get home, I will use it for tts</span
                            >
                        </div>
					</div>
					<div class="mb-3">
						<label class="block mb-1 text-sm">Quantity messages *</label>
						<input
							type="number"
							min="1"
							class="w-full p-2 bg-zinc-700 border-b-2 border-zinc-600 text-white"
							.value=${this.quantity}
							@input=${(e) => (this.quantity = e.target.value)}
						/>
					</div>
					<div class="mb-3">
						<label class="block mb-1 text-sm"
							>Slug base (optional)</label
						>
						<input
							type="text"
							class="w-full p-2 bg-zinc-700 border-b-2 border-zinc-600 text-white"
							.value=${this.slug}
							@input=${(e) => (this.slug = e.target.value)}
						/>
					</div>
					${this.error
						? html`<div class="text-red-400 mb-2">
								${this.error}
							</div>`
						: ""}
					<div class="flex justify-end mt-4">
						<button id="save"
							class="bg-green-500 text-white font-bold px-6 py-2 rounded mr-2"
							@click=${this.handleGenerate}
							?disabled=${this.loading}
						>
							${this.loading ? "Generating..." : "Generate"}
						</button>
						<button
							class="bg-zinc-500 font-bold text-white px-6 py-2 rounded"
							@click=${this.handleClose}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		`;
	}
}
