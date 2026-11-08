import "./styles.css";
import { LitElement, html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("messages-store-list")
export class MessagesStoreList extends LitElement {
	@property({ type: Array }) messages: Array<any> = [];
	@property({ type: String }) sortOrder: "asc" | "desc" = "asc";
	@property({ type: Boolean }) groupMessages = true;
	@property({ type: Object }) hass;

	createRenderRoot() {
		return this;
	}

	handleEdit(message) {
		this.dispatchEvent(new CustomEvent("edit", { detail: message }));
	}

	handleDelete(message) {
		const removeSingleMessage =
			!this.groupMessages && message.originalMessage.length > 1;
		this.dispatchEvent(
			new CustomEvent("confirm-delete", {
				detail: { ...message, removeSingleMessage },
			})
		);
	}

	formatMessage(message: string) {
		return message
			.split(/(\(state:[^)]+\)|\(slug:[^)]+\)|%s)/g)
			.map((part) =>
				/^\(state:[^)]+\)$|^\(slug:[^)]+\)$|^%s$/.test(part)
					? html`<span class="ms-message-token">${part}</span>`
					: part
			);
	}

	resolveStateMessage(message: string) {
		return message.replace(
			/\(state:([a-zA-Z0-9_\.]+)(?:\((.*?)\))?\)/g,
			(match, entityId, rawFilters) => {
				const entity = this.hass?.states?.[entityId];
				if (!entity) return match;
				const filters = rawFilters
					? rawFilters.split(",").map((filter) => filter.trim())
					: [];
				const numeric = Number.parseFloat(entity.state);
				let value: string | number = entity.state;
				if (Number.isFinite(numeric)) {
					const roundFilter = filters.find((filter) =>
						filter.startsWith("round")
					);
					if (filters.includes("round")) value = Math.round(numeric);
					else if (roundFilter) {
						const decimals = Number.parseInt(roundFilter.replace("round", ""), 10);
						if (Number.isFinite(decimals)) value = numeric.toFixed(decimals);
					}
				}
				if (filters.includes("unit") && entity.attributes?.unit_of_measurement) {
					value = `${value} ${entity.attributes.unit_of_measurement}`;
				}
				return String(value);
			}
		);
	}

	resolveMessage(message: string, visited: string[] = []) {
		const withSlugs = message.replace(/\(slug:([^)]+)\)/g, (match, slug) => {
			if (visited.includes(slug)) return match;
			const target = this.messages.find((item: any) => item.slug === slug);
			if (!target) return match;
			return this.resolveMessage(target.message, [...visited, slug]);
		});
		return this.resolveStateMessage(withSlugs);
	}

	handleSortClick() {
		this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
		this.dispatchEvent(new CustomEvent("sort", { detail: this.sortOrder }));
	}

	render() {
		return html`
			<div class="ms-table-wrap">
				<table class="ms-table">
					<thead>
						<tr>
							<th scope="col">
								<button
									class="ms-sort-button"
									@click=${this.handleSortClick}
									aria-label="Sort by slug"
								>
									<span>Slug</span>
									<svg
										class="${this.sortOrder === "desc"
											? "is-desc"
											: ""}"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="m7 10 5 5 5-5" />
									</svg>
								</button>
							</th>
							<th scope="col">Message</th>
							<th scope="col" class="ms-actions-heading">
								<span class="sr-only">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody>
						${this.messages.map(
							(message: any, index) => html`
								<tr
									class="ms-message-row"
									key="${message.slug + index}"
								>
									<td data-label="Slug">
										<div class="ms-slug">${message.slug}</div>
										${this.groupMessages &&
										message.originalMessage.length > 1
											? html`<div class="ms-row-meta">
													${message.originalMessage
														.length}
													messages
												</div>`
											: nothing}
									</td>
					<td data-label="Message">
							<div
								class="ms-message-hover ${/\((state|slug):[^)]+\)/.test(message.message)
									? "has-state-tooltip"
									: ""}"
								tabindex="${/\((state|slug):[^)]+\)/.test(message.message) ? "0" : "-1"}"
							>
								<div class="ms-message-preview">
									${message.message
										.split("| ")
										.map(
											(part) => html`<div>
												${this.formatMessage(part)}
											</div>`
										)}
								</div>
								${/\((state|slug):[^)]+\)/.test(message.message)
									? html`<div class="ms-message-tooltip" role="tooltip">
											<strong>${message.slug}</strong>
											<span>${this.resolveMessage(message.message, [message.slug])}</span>
										</div>`
									: nothing}
							</div>
									</td>
									<td
										data-label="Actions"
										class="ms-row-actions"
									>
										<button
								class="ms-icon-button ms-tooltip-trigger"
								data-tooltip="Edit message"
											@click=${() =>
												this.handleEdit(message)}
											aria-label="Edit ${message.slug}"
										>
											<svg
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path d="M12 20h9" />
												<path
													d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"
												/>
											</svg>
										</button>
										<button
								class="ms-icon-button ms-icon-danger ms-tooltip-trigger"
								data-tooltip="Delete message"
											@click=${() =>
												this.handleDelete(message)}
											aria-label="Delete ${message.slug}"
										>
											<svg
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"
												/>
											</svg>
										</button>
									</td>
								</tr>
							`
						)}
					</tbody>
				</table>
			</div>
		`;
	}
}
