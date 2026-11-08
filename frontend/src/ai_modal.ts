import "./styles.css";
import { LitElement, html, nothing } from "lit";
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
		this.slug = this.initialSlug ?? "";
		this.taskName = `AI Task ${this.initialSlug}`;
		this.instructions = this.initialSlug
			? `Generate messages for slug`
			: "";
		this.focusInput();
	}

	focusInput() {
		const input: any = this.renderRoot.querySelector("textarea");
		if (input) input.focus();
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
		try {
			const response = await utils.callService(
				this.hass,
				"messages_store",
				"generate_ai_messages",
				{
					instructions: this.instructions,
					quantity: Number(this.quantity),
					task_name: this.taskName,
					slug: this.slug || undefined,
				}
			);

			if (response?.status === "error") {
				throw new Error(
					response?.error?.message || "Service call failed."
				);
			}
			if (!response?.status) {
				throw new Error(
					response?.message || "Unable to generate messages."
				);
			}

			this.dispatchEvent(
				new CustomEvent("aiMessages", {
					detail: {
						slug: response.slug,
						messages: response.messages,
					},
				})
			);
			this.handleClose();
		} catch (error) {
			this.error =
				error instanceof Error
					? error.message
					: "Unable to generate messages.";
		} finally {
			this.loading = false;
		}
	}

	handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		this.handleGenerate();
	}

	handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) this.handleClose();
	}

	render() {
		return html`
			<div
				class="ms-dialog-backdrop ms-dialog-nested"
				@click=${this.handleBackdropClick}
			>
				<section
					class="ms-dialog ms-ai-form"
					role="dialog"
					aria-modal="true"
					aria-labelledby="ms-ai-dialog-title"
					@click=${(event) => event.stopPropagation()}
				>
					<header class="ms-dialog-header">
						<div class="ms-dialog-heading">
							<h2 id="ms-ai-dialog-title">
								Generate messages with AI
							</h2>
							<p>
								Describe the messages you want. You can review
								them before saving.
							</p>
						</div>
						<button
							class="ms-dialog-close"
							@click=${this.handleClose}
							aria-label="Close dialog"
							title="Close"
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="m6 6 12 12M18 6 6 18" />
							</svg>
						</button>
					</header>
					<form @submit=${this.handleSubmit}>
						<div class="ms-dialog-body">
							<div class="ms-field">
								<label for="ms-ai-task-name"
									>Task name
									<span class="ms-required">*</span></label
								>
								<input
									id="ms-ai-task-name"
									class="ms-input"
									type="text"
									required
									.value=${this.taskName}
									@input=${(e) =>
										(this.taskName = e.target.value)}
								/>
							</div>
							<div class="ms-field">
								<label for="ms-ai-instructions"
									>Instructions
									<span class="ms-required">*</span></label
								>
								<textarea
									id="ms-ai-instructions"
									class="ms-textarea"
									required
									.value=${this.instructions}
									@input=${(e) =>
										(this.instructions = e.target.value)}
								></textarea>
								<p class="ms-ai-hint">
									For example: Generate friendly messages for
									when I get home. I will use them for TTS.
								</p>
							</div>
							<div class="ms-field">
								<label for="ms-ai-quantity"
									>Number of messages
									<span class="ms-required">*</span></label
								>
								<input
									id="ms-ai-quantity"
									class="ms-input"
									type="number"
									min="1"
									required
									.value=${String(this.quantity)}
									@input=${(e) =>
										(this.quantity = e.target.value)}
								/>
							</div>
							<div class="ms-field">
								<label for="ms-ai-slug"
									>Base slug
									<span class="ms-ai-hint"
										>(optional)</span
									></label
								>
								<input
									id="ms-ai-slug"
									class="ms-input"
									type="text"
									.value=${this.slug}
									@input=${(e) =>
										(this.slug = e.target.value)}
								/>
							</div>
							${this.error
								? html`<p class="ms-form-error" role="alert">
										${this.error}
									</p>`
								: nothing}
						</div>
						<footer class="ms-dialog-footer">
							<button
								class="ms-button ms-button-secondary"
								type="button"
								@click=${this.handleClose}
							>
								Cancel
							</button>
							<button
								class="ms-button ms-button-primary"
								type="submit"
								?disabled=${this.loading}
							>
								${this.loading
									? "Generating…"
									: "Generate messages"}
							</button>
						</footer>
					</form>
				</section>
			</div>
		`;
	}
}
