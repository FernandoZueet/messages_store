import "./styles.css";
import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("messages-store-list")
export class MessagesStoreList extends LitElement {
	@property({ type: Array }) messages: Array<any> = [];
	@property({ type: String }) sortOrder: "asc" | "desc" = "asc";
	@property({ type: Boolean }) groupMessages = true;
	@property({ type: Object }) hass;
	@state() openMenuId = "";

	createRenderRoot() {
		return this;
	}

	handleEdit(message) {
		this.dispatchEvent(new CustomEvent("edit", { detail: message }));
	}

	handleCellKey(event: KeyboardEvent, message: any) {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			this.handleEdit(message);
		}
	}

	handleDelete(message) {
		this.closeMoreOptions();
		const removeSingleMessage =
			!this.groupMessages && message.originalMessage.length > 1;
		this.dispatchEvent(
			new CustomEvent("confirm-delete", {
				detail: { ...message, removeSingleMessage },
			})
		);
	}
	handleEditAction(message) { this.closeMoreOptions(); this.handleEdit(message); }
	rowId(message, index) { return `${message.slug}:${message.messageIndex ?? index}`; }
	toggleMoreOptions(message, index) {
		const id = this.rowId(message, index);
		this.openMenuId = this.openMenuId === id ? "" : id;
	}
	closeMoreOptions() { this.openMenuId = ""; }
	handleDuplicate(message) { this.closeMoreOptions(); this.dispatchEvent(new CustomEvent("duplicate", { detail: message })); }
	handleFavorite(message) { this.closeMoreOptions(); this.dispatchEvent(new CustomEvent("favorite", { detail: message })); }

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
			<div class="ms-table-wrap" @click=${this.closeMoreOptions}>
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
					<td data-label="Slug" class="ms-edit-cell" tabindex="0" aria-label="Edit ${message.slug}" @click=${() => this.handleEdit(message)} @keydown=${(event) => this.handleCellKey(event, message)}>
										<div class="ms-slug">${message.favorite ? html`<svg class="ms-slug-favorite" viewBox="0 0 24 24" aria-label="Favorite" role="img"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>` : nothing}${message.slug}</div>
										${this.groupMessages &&
										message.originalMessage.length > 1
											? html`<div class="ms-row-meta">
													${message.originalMessage
														.length}
													messages
												</div>`
											: nothing}
									</td>
					<td data-label="Message" class="ms-edit-cell" tabindex="0" aria-label="Edit message for ${message.slug}" @click=${() => this.handleEdit(message)} @keydown=${(event) => this.handleCellKey(event, message)}>
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
							<div class="ms-row-tags">${(message.tags || []).map((tag) => html`<span class="ms-tag-chip">${tag}</span>`)}</div>
									</td>
									<td
										data-label="Actions"
										class="ms-row-actions"
									>
						<div class="ms-row-more" @click=${(event) => event.stopPropagation()}>
							<button class="ms-icon-button ms-more-options-button" aria-haspopup="menu" aria-expanded=${this.openMenuId === this.rowId(message, index)} aria-label="More options for ${message.slug}" title="More options" @click=${() => this.toggleMoreOptions(message, index)}>
								<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg>
							</button>
							${this.openMenuId === this.rowId(message, index) ? html`<div class="ms-row-more-menu" role="menu">
								<button role="menuitem" @click=${() => this.handleEditAction(message)}><svg class="ms-menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></svg>Edit message</button>
								<button role="menuitem" @click=${() => this.handleDuplicate(message)}><svg class="ms-menu-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" /></svg>Duplicate slug</button>
								<button role="menuitem" @click=${() => this.handleFavorite(message)}><svg class="ms-menu-icon ms-menu-star ${message.favorite ? "is-favorite" : ""}" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>${message.favorite ? "Remove from favorites" : "Add to favorites"}</button>
								<div class="ms-menu-divider" role="separator"></div>
								<button role="menuitem" class="ms-menu-delete" @click=${() => this.handleDelete(message)}><svg class="ms-menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" /></svg>Delete message</button>
							</div>` : nothing}
						</div>
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
