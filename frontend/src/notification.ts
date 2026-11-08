import "./styles.css";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("messages-store-notification")
export class MessagesStoreNotification extends LitElement {
	@property({ type: String }) message = "";
	@property({ type: String }) type = "success";

	closeNotification() {
		this.dispatchEvent(new CustomEvent("close"));
	}

	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			${this.message
				? html`
						<div
							class="ms-toast ${this.type === "error"
								? "ms-toast-error"
								: ""}"
							role="${this.type === "error" ? "alert" : "status"}"
						>
							<span class="ms-toast-message"
								>${this.message}</span
							>
							<button
								class="ms-dialog-close"
								@click=${this.closeNotification}
								aria-label="Dismiss notification"
								title="Dismiss"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="m6 6 12 12M18 6 6 18" />
								</svg>
							</button>
						</div>
					`
				: ""}
		`;
	}
}
