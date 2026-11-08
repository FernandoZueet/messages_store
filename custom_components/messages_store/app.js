function t(t,e,s,i){var n,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(o=(a<3?n(o):a>3?n(e,s,o):n(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;!function(t,e){void 0===e&&(e={});var s=e.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===s&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(':root {\n\t--ms-background: var(--primary-background-color, #f5f6f7);\n\t--ms-surface: var(--card-background-color, #ffffff);\n\t--ms-surface-muted: var(--secondary-background-color, #f1f3f4);\n\t--ms-text: var(--ha-color-text-primary, var(--primary-text-color, #202124));\n\t--ms-text-muted: var(--ha-color-text-secondary, var(--secondary-text-color, #6b7075));\n\t--ms-divider: var(--divider-color, #d9dcdf);\n\t--ms-accent: var(--primary-color, var(--ha-color-primary-40, #03a9f4));\n\t--ms-error: var(--error-color, #db4437);\n\t--ms-success: var(--success-color, #388e3c);\n\t--ms-radius: var(--ha-card-border-radius, 12px);\n\tfont-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, Roboto, Noto, sans-serif));\n\tfont-size: var(--ha-font-size-m, 14px);\n\tfont-weight: var(--ha-font-weight-body, var(--ha-font-weight-normal, 400));\n\tline-height: var(--ha-line-height-normal, 1.6);\n\tcolor-scheme: light dark;\n}\n\n@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t--ms-background: var(--primary-background-color, #111111);\n\t\t--ms-surface: var(--card-background-color, #1c1c1c);\n\t\t--ms-surface-muted: var(--secondary-background-color, #282828);\n\t\t--ms-text: var(--primary-text-color, #f1f1f1);\n\t\t--ms-text-muted: var(--secondary-text-color, #a8a8a8);\n\t\t--ms-divider: var(--divider-color, #3b3b3b);\n\t}\n}\n\nhtml,\nbody {\n\theight: 100%;\n\tmin-height: 100%;\n\tmargin: 0;\n\toverflow: hidden;\n\tbackground: var(--ms-background);\n\tcolor: var(--ms-text);\n\tfont-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, Roboto, Noto, sans-serif));\n\tfont-size: var(--ha-font-size-m, 14px);\n\tline-height: var(--ha-line-height-normal, 1.6);\n}\n\nmessages-store { display: block; width: 100%; height: 100%; min-height: 0; }\n\n* {\n\tbox-sizing: border-box;\n}\n\nbutton,\ninput,\ntextarea {\n\tfont: inherit;\n}\n\nbutton {\n\tcolor: inherit;\n}\n\n.ms-page {\n\tmin-height: 100vh;\n\theight: 100vh;\n\theight: 100dvh;\n\twidth: 100%;\n\t--ms-page-gutter: var(--ha-space-4, 16px);\n\tpadding: 0;\n\tbackground: var(--ms-background);\n\tcolor: var(--ms-text);\n}\n\n.ms-app-shell {\n\tdisplay: flex;\n\theight: 100%;\n\tmin-height: 0;\n\tflex-direction: column;\n\toverflow: hidden;\n\tpadding: 0 var(--ms-page-gutter);\n}\n\n.ms-page-header {\n\tdisplay: flex;\n\tmin-height: 56px;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 24px;\n\tmargin: 0 calc(-1 * var(--ms-page-gutter));\n\tpadding: 7px var(--ms-page-gutter);\n\tborder-bottom: 1px solid var(--ms-divider);\n\tbackground: var(--ms-background);\n}\n\n.ms-heading-copy h1 {\n\tmargin: 0;\n\tfont-size: calc(var(--ha-font-size-xl, 20px) - 1px);\n\tfont-weight: var(--ha-font-weight-light, 300);\n\tline-height: var(--ha-line-height-condensed, 1.2);\n}\n\n.ms-heading-copy {\n\tdisplay: flex;\n\tmin-width: 0;\n\talign-items: center;\n\tgap: var(--ha-space-5, 20px);\n}\n\n.ms-heading-text { min-width: 0; }\n\n.ms-back-button {\n\tdisplay: inline-flex;\n\twidth: 40px;\n\theight: 40px;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 0;\n\tborder-radius: 50%;\n\tbackground: transparent;\n\tcolor: var(--ms-text);\n}\n\n.ms-back-button:hover { background: var(--ms-surface-muted); }\n.ms-back-button:focus-visible { outline: 2px solid var(--ms-accent); outline-offset: 2px; }\n.ms-back-button svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.8; }\n\n.ms-button {\n\tdisplay: inline-flex;\n\tmin-height: 40px;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: var(--ha-space-2, 8px);\n\tpadding: 0 var(--ha-space-4, 16px);\n\tborder: 1px solid transparent;\n\tborder-radius: var(--ha-button-border-radius, var(--ha-border-radius-pill, 999px));\n\tfont-size: var(--ha-font-size-m, 14px);\n\tfont-weight: var(--ha-font-weight-medium, 500);\n\tline-height: 1;\n\twhite-space: nowrap;\n\tcursor: pointer;\n\ttransition:\n\t\tbackground-color 120ms ease,\n\t\tborder-color 120ms ease,\n\t\tfilter var(--ha-animation-duration-fast, 120ms) ease;\n}\n\n.ms-button:hover {\n\tfilter: brightness(0.94);\n}\n\n.ms-button:focus-visible,\n.ms-icon-button:focus-visible,\n.ms-sort-button:focus-visible,\n.ms-dialog-close:focus-visible {\n\toutline: 2px solid var(--ms-accent);\n\toutline-offset: 2px;\n}\n\n.ms-button svg,\n.ms-icon-button svg,\n.ms-dialog-close svg,\n.ms-search svg,\n.ms-state-icon svg,\n.ms-sort-button svg {\n\twidth: 20px;\n\theight: 20px;\n\tfill: none;\n\tstroke: currentColor;\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n\tstroke-width: 1.8;\n}\n\n.ms-button-primary {\n\tbackground: var(--ms-accent);\n\tcolor: var(--text-primary-color, #ffffff);\n}\n\n.ms-button-secondary {\n\tborder-color: var(--ms-divider);\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n}\n\n.ms-header-actions {\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tgap: 8px;\n}\n\n.ms-header-actions > .ms-button {\n\twidth: auto;\n\theight: 32px;\n\tmin-height: 32px;\n\tbox-sizing: border-box;\n\tflex: 0 0 auto;\n}\n\n.ms-button-small { min-height: 32px; height: 32px; gap: var(--ha-space-1, 4px); padding-inline: var(--ha-space-3, 12px); font-size: var(--ha-font-size-m, 14px); }\n.ms-header-actions .ms-button svg { width: 18px; height: 18px; }\n\n.ms-ai-trigger {\n\tborder-color: color-mix(in srgb, var(--ms-accent) 42%, var(--ms-divider));\n\tbackground: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface));\n\tcolor: var(--ms-accent);\n\tfont-weight: 600;\n}\n\n.ms-ai-trigger:hover {\n\tbackground: color-mix(in srgb, var(--ms-accent) 20%, var(--ms-surface));\n}\n\n.ms-ai-trigger svg {\n\tfill: currentColor;\n\tstroke: currentColor;\n\tstroke-width: 1.5;\n}\n\n.ms-button-danger {\n\tbackground: var(--ms-error);\n\tcolor: var(--text-primary-color, #ffffff);\n}\n\n.ms-toolbar {\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tgap: 12px;\n\tmargin: 0;\n}\n\n.ms-library-layout {\n\tdisplay: flex;\n\tmin-height: 0;\n\tflex: 1 1 auto;\n\tmargin-inline: calc(-1 * var(--ms-page-gutter));\n\tpadding-top: 18px;\n\talign-items: stretch;\n\toverflow: hidden;\n}\n\n.ms-filter-panel {\n\tmin-width: 0;\n\tmin-height: 0;\n\toverflow: auto;\n\tpadding-right: 16px;\n\tborder-right: 1px solid var(--ms-divider);\n}\n\n.ms-filter-toggle {\n\tdisplay: flex;\n\twidth: 100%;\n\tmin-height: 44px;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 0 12px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 12px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tfont-size: 14px;\n\tfont-weight: 600;\n\ttext-align: left;\n\tcursor: pointer;\n}\n\n.ms-filter-toggle svg {\n\twidth: 20px;\n\theight: 20px;\n\tflex: 0 0 auto;\n\tfill: none;\n\tstroke: currentColor;\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n\tstroke-width: 1.8;\n}\n\n.ms-filter-chevron { margin-left: auto; transition: transform 120ms ease; }\n.filters-collapsed .ms-filter-chevron { transform: rotate(180deg); }\n.filters-collapsed { grid-template-columns: 56px minmax(0, 1fr); }\n.filters-collapsed .ms-filter-panel { padding-right: 12px; }\n.filters-collapsed .ms-filter-toggle { justify-content: center; padding: 0; }\n.filters-collapsed .ms-filter-toggle span,\n.filters-collapsed .ms-filter-chevron { display: none; }\n.ms-filter-options { padding-top: 12px; }\n.ms-filter-section { padding: 13px 0 16px; border-bottom: 1px solid var(--ms-divider); }\n.ms-filter-section h2 { margin: 0 0 10px; color: var(--ms-text-muted); font-size: var(--ha-font-size-m, 14px); font-weight: var(--ha-font-weight-medium, 500); line-height: var(--ha-line-height-condensed, 1.2); }\n.ms-filter-select { width: 100%; min-height: 40px; padding-inline: 12px 36px; border: 1px solid var(--ms-divider); border-radius: var(--ha-border-radius-md, 12px); background-color: var(--ms-surface); color: var(--ms-text); font-size: var(--ha-font-size-m, 14px); }\n.ms-filter-select option { background: var(--ms-surface); color: var(--ms-text); }\n.ms-filter-favorite { display: flex; min-height: 48px; align-items: center; gap: 10px; padding: 0 2px; color: var(--ms-text); font-size: 14px; cursor: pointer; }\n.ms-filter-favorite input { width: 18px; height: 18px; margin: 0; accent-color: var(--ms-accent); }\n.ms-library-results {\n\tdisplay: flex;\n\tmin-width: 0;\n\tmin-height: 0;\n\tflex: 1 1 auto;\n\tflex-direction: column;\n\tgap: 16px;\n\tpadding-inline: var(--ms-page-gutter);\n\toverflow: hidden;\n}\n\n.ms-library-results > messages-store-list {\n\tdisplay: block;\n\tmin-height: 0;\n\tflex: 1 1 auto;\n\toverflow: visible;\n}\n\n.ms-library-results > .ms-state-card {\n\tmin-height: 0;\n\tflex: 1 1 auto;\n\toverflow: auto;\n}\n\n.ms-search {\n\tdisplay: flex;\n\tmin-width: 180px;\n\tmax-width: none;\n\tmin-height: 40px;\n\tflex: 1;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 0 13px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ha-border-radius-md, 12px);\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text-muted);\n\ttransition:\n\t\tborder-color 120ms ease,\n\t\tbox-shadow 120ms ease;\n}\n\n.ms-filter-chip {\n\tdisplay: inline-flex;\n\tmin-height: 40px;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: var(--ha-space-2, 8px);\n\tpadding: 0 var(--ha-space-3, 12px);\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ha-border-radius-md, 12px);\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tfont-family: var(--ha-font-family-body, inherit);\n\tfont-size: var(--ha-font-size-m, 14px);\n\tfont-weight: var(--ha-font-weight-medium, 500);\n\tline-height: 1;\n\twhite-space: nowrap;\n\tcursor: pointer;\n}\n\n.ms-filter-chip:hover { background: var(--ms-surface-muted); }\n.ms-filter-chip:focus-visible { outline: 2px solid var(--ms-accent); outline-offset: 2px; }\n.ms-filter-chip.is-active { border-color: color-mix(in srgb, var(--ms-accent) 56%, var(--ms-divider)); color: var(--ms-accent); }\n.ms-filter-chip svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.8; }\n.ms-filter-chip-count { display: grid; width: 20px; height: 20px; place-items: center; border-radius: 50%; background: var(--ms-accent); color: var(--text-primary-color, #fff); font-size: var(--ha-font-size-xs, 10px); }\n\n.ms-search:focus-within {\n\tborder-color: var(--ms-accent);\n\tbox-shadow: none;\n}\n\n.ms-search svg {\n\tflex: 0 0 auto;\n}\n\n.ms-search input {\n\twidth: 100%;\n\tmin-width: 0;\n\tborder: 0;\n\toutline: 0;\n\tbackground: transparent;\n\tcolor: var(--ms-text);\n\tfont-family: var(--ha-font-family-body, inherit);\n\tfont-size: var(--ha-font-size-m, 14px);\n}\n\n.ms-search input::-moz-placeholder {\n\tcolor: var(--ms-text-muted);\n\topacity: 1;\n}\n\n.ms-search input::placeholder {\n\tcolor: var(--ms-text-muted);\n\topacity: 1;\n}\n\n.ms-group-toggle {\n\tdisplay: inline-flex;\n\tmin-height: 44px;\n\talign-items: center;\n\tgap: 9px;\n\tpadding: 0 12px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 12px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tfont-size: 14px;\n\twhite-space: nowrap;\n\tcursor: pointer;\n\ttransition: border-color 120ms ease, background-color 120ms ease;\n}\n\n.ms-group-toggle:hover {\n\tbackground: var(--ms-surface-muted);\n}\n\n.ms-group-toggle:has(input:checked) {\n\tborder-color: color-mix(in srgb, var(--ms-accent) 55%, var(--ms-divider));\n\tbackground: color-mix(in srgb, var(--ms-accent) 10%, var(--ms-surface));\n}\n\n.ms-group-toggle:focus-within {\n\toutline: 2px solid var(--ms-accent);\n\toutline-offset: 2px;\n}\n\n.ms-group-toggle input {\n\twidth: 18px;\n\theight: 18px;\n\tmargin: 0;\n\tborder-radius: 4px;\n\taccent-color: var(--ms-accent);\n}\n\n.ms-toolbar .ms-button,\n.ms-toolbar .ms-tag-filter {\n\tmin-height: 40px;\n\tborder-radius: var(--ha-border-radius-md, 12px);\n}\n\n.ms-toolbar .ms-tag-filter {\n\tpadding-inline: 14px 34px;\n\tborder-color: var(--ms-divider);\n\tbackground-color: var(--ms-surface);\n\tcolor: var(--ms-text);\n}\n\n.ms-row-meta {\n\tcolor: var(--ms-text-muted);\n\tfont-size: 13px;\n}\n\n.ms-table-wrap {\n\theight: 100%;\n\tmin-height: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: hidden;\n\tmargin-inline: calc(-1 * var(--ms-page-gutter));\n\tborder-block: 1px solid var(--ms-divider);\n\tborder-inline: 0;\n\tborder-radius: 0;\n\tbackground: var(--data-table-background-color, var(--ms-surface));\n}\n\n.ms-table {\n\tdisplay: flex;\n\theight: 100%;\n\tmin-height: 0;\n\tflex-direction: column;\n\twidth: 100%;\n\ttext-align: left;\n}\n\n.ms-table thead {\n\tdisplay: block;\n\tflex: 0 0 auto;\n\tbackground: var(--table-header-background-color, var(--ms-surface-muted));\n}\n\n.ms-table tbody {\n\tdisplay: block;\n\tmin-height: 0;\n\tflex: 1 1 auto;\n\toverflow: auto;\n\tscrollbar-gutter: stable;\n}\n\n.ms-table tr {\n\tdisplay: grid;\n\twidth: 100%;\n\tgrid-template-columns: minmax(200px, 28%) minmax(0, 1fr) 56px;\n}\n\n.ms-table thead th:first-child {\n\tborder-top-left-radius: var(--ms-radius);\n}\n\n.ms-table thead th:last-child {\n\tborder-top-right-radius: var(--ms-radius);\n}\n\n.ms-table thead th:first-child,\n.ms-table thead th:last-child { border-radius: 0; }\n\n.ms-table th {\n\tdisplay: flex;\n\tmin-width: 0;\n\theight: 51px;\n\talign-items: center;\n\tpadding: 0 16px;\n\tborder-bottom: 1px solid var(--ms-divider);\n\tbackground: var(--table-header-background-color, var(--ms-surface-muted));\n\tcolor: var(--ms-text);\n\tfont-size: var(--ha-font-size-m, 14px);\n\tfont-weight: var(--ha-font-weight-medium, 500);\n\tletter-spacing: 0;\n}\n\n.ms-table td {\n\tmin-width: 0;\n\tpadding: 12px 16px;\n\tborder-top: 1px solid var(--ms-divider);\n\tfont-size: calc(var(--ha-font-size-m, 14px) - 1px);\n\tvertical-align: middle;\n}\n\n.ms-message-row { min-height: 52px; }\n\n.ms-message-row:first-child td {\n\tborder-top: 0;\n}\n\n.ms-message-row:hover {\n\tbackground: color-mix(in srgb, var(--ms-surface-muted) 55%, transparent);\n}\n\n.ms-sort-button {\n\tdisplay: inline-flex;\n\talign-items: center;\n\tgap: 4px;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: transparent;\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\tcursor: pointer;\n}\n\n.ms-sort-button svg {\n\twidth: 16px;\n\theight: 16px;\n\ttransition: transform 120ms ease;\n}\n\n.ms-sort-button svg.is-desc {\n\ttransform: rotate(180deg);\n}\n\n.ms-slug {\n\tdisplay: inline-flex;\n\talign-items: center;\n\tgap: 6px;\n\tfont-weight: 600;\n\tword-break: break-word;\n}\n\n.ms-slug-favorite {\n\twidth: 14px;\n\theight: 14px;\n\tflex: 0 0 14px;\n\tfill: var(--warning-color, #fbc02d);\n}\n\n.ms-row-meta {\n\tmargin-top: 4px;\n}\n\n.ms-message-preview {\n\tmax-width: 840px;\n\tcolor: #bbbbbb;\n\tline-height: 1.55;\n\tword-break: break-word;\n}\n\n.ms-message-preview > div + div {\n\tmargin-top: 4px;\n}\n\n.ms-message-hover {\n\tposition: relative;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\tmax-width: 100%;\n}\n\n.ms-message-hover.has-state-tooltip {\n\tcursor: help;\n}\n\n.ms-message-hover:hover,\n.ms-message-hover:focus {\n\tz-index: 25;\n}\n\n.ms-message-tooltip {\n\tposition: absolute;\n\ttop: calc(100% + 8px);\n\tleft: 0;\n\tz-index: 30;\n\tdisplay: flex;\n\twidth: -moz-max-content;\n\twidth: max-content;\n\tmax-width: min(380px, calc(100vw - 40px));\n\tflex-direction: column;\n\tgap: 6px;\n\tpadding: 10px 12px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 8px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 4px 14px rgb(0 0 0 / 22%);\n\tfont-size: 13px;\n\tline-height: 1.45;\n\twhite-space: normal;\n\tword-break: break-word;\n\topacity: 0;\n\tvisibility: hidden;\n\ttransform: translateY(-3px);\n\ttransition:\n\t\topacity 120ms ease,\n\t\ttransform 120ms ease,\n\t\tvisibility 120ms ease;\n\tpointer-events: none;\n}\n\n.ms-message-tooltip strong {\n\tcolor: var(--ms-text-muted);\n\tfont-size: 12px;\n\tfont-weight: 600;\n}\n\n.ms-message-hover:hover .ms-message-tooltip,\n.ms-message-hover:focus .ms-message-tooltip {\n\topacity: 1;\n\tvisibility: visible;\n\ttransform: translateY(0);\n}\n\n.ms-message-token {\n\tdisplay: inline-block;\n\tpadding: 1px 6px;\n\tborder-radius: 5px;\n\tbackground: var(--ms-surface-muted);\n\tcolor: var(--ms-text);\n\tfont-family: var(--paper-font-code1_-_font-family, monospace);\n\tfont-size: 0.92em;\n}\n\n.ms-row-actions {\n\twidth: 52px;\n\twhite-space: nowrap;\n\ttext-align: right;\n}\n\n.ms-row-more {\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n.ms-more-options-button {\n\twidth: 36px;\n}\n\n.ms-more-options-button svg {\n\twidth: 20px;\n\theight: 20px;\n\tfill: rgb(255 255 255);\n\tstroke: none;\n}\n\n.ms-row-more-menu {\n\tposition: absolute;\n\tright: 0;\n\ttop: calc(100% + 4px);\n\tz-index: 50;\n\tdisplay: grid;\n\tmin-width: 224px;\n\tpadding: var(--ha-space-1, 4px);\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ha-border-radius-lg, 12px);\n\tbackground: var(--ms-surface);\n\tbox-shadow: var(--ha-card-box-shadow, 0 4px 16px rgb(0 0 0 / 22%));\n}\n\n.ms-row-more-menu button {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: var(--ha-space-3, 12px);\n\tmin-height: 40px;\n\tpadding: 0 var(--ha-space-3, 12px);\n\tborder: 0;\n\tborder-radius: var(--ha-border-radius-md, 8px);\n\tbackground: transparent;\n\tcolor: var(--ms-text);\n\ttext-align: left;\n\tfont-size: var(--ha-font-size-m, 14px);\n\tfont-weight: var(--ha-font-weight-normal, 400);\n\tline-height: 1.25;\n\twhite-space: nowrap;\n\tcursor: pointer;\n}\n\n.ms-row-more-menu button:hover,\n.ms-row-more-menu button:focus-visible {\n\tbackground: var(--ms-surface-muted);\n}\n\n.ms-menu-icon { flex: 0 0 18px; width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.8; }\n.ms-menu-star { color: var(--ms-text-muted); }\n.ms-menu-star.is-favorite { color: var(--warning-color, #f9a825); fill: color-mix(in srgb, var(--warning-color, #f9a825) 20%, transparent); }\n.ms-row-more-menu .ms-menu-divider { height: 1px; margin: 4px 6px; background: var(--ms-divider); }\n.ms-row-more-menu .ms-menu-delete { color: var(--ms-error); }\n\n.ms-edit-cell { cursor: pointer; }\n.ms-edit-cell:hover { background: color-mix(in srgb, var(--ms-surface-muted) 62%, transparent); }\n.ms-edit-cell:focus-visible { outline: 2px solid var(--ms-accent); outline-offset: -2px; }\n\n.ms-actions-heading {\n\twidth: 1%;\n}\n\n.ms-row-actions > * + * { margin-left: 0; }\n\n.ms-icon-button,\n.ms-dialog-close {\n\tdisplay: inline-grid;\n\twidth: 38px;\n\theight: 38px;\n\tplace-items: center;\n\tpadding: 0;\n\tborder: 0;\n\tborder-radius: 50%;\n\tbackground: transparent;\n\tcolor: var(--ms-text-muted);\n\tcursor: pointer;\n}\n\n.ms-dialog-close { width: 48px; height: 48px; }\n\n.ms-tooltip-trigger {\n\tposition: relative;\n}\n\n.ms-tooltip-trigger::after {\n\tposition: absolute;\n\ttop: calc(100% + 7px);\n\tleft: 50%;\n\tz-index: 40;\n\twidth: -moz-max-content;\n\twidth: max-content;\n\tmax-width: 220px;\n\tpadding: 6px 9px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 6px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 3px 10px rgb(0 0 0 / 18%);\n\tcontent: attr(data-tooltip);\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\twhite-space: nowrap;\n\topacity: 0;\n\tvisibility: hidden;\n\ttransform: translate(-50%, -2px);\n\ttransition:\n\t\topacity 120ms ease,\n\t\ttransform 120ms ease,\n\t\tvisibility 120ms ease;\n\tpointer-events: none;\n}\n\n.ms-tooltip-trigger:hover::after,\n.ms-tooltip-trigger:focus-visible::after {\n\topacity: 1;\n\tvisibility: visible;\n\ttransform: translate(-50%, 0);\n}\n\n.ms-icon-button:hover,\n.ms-dialog-close:hover {\n\tbackground: var(--ms-surface-muted);\n\tcolor: var(--ms-text);\n}\n\n.ms-dialog-close:hover { background: color-mix(in srgb, var(--ms-text) 10%, transparent); }\n\n.ms-icon-button svg,\n.ms-dialog-close svg {\n\twidth: 19px;\n\theight: 19px;\n}\n\n.ms-dialog-close svg { width: 24px; height: 24px; }\n\n.ms-icon-danger:hover {\n\tcolor: var(--ms-error);\n}\n\n.ms-state-card {\n\tdisplay: flex;\n\tmin-height: 260px;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n\tpadding: 32px 20px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ms-radius);\n\tbackground: var(--ms-surface);\n\ttext-align: center;\n}\n\n.ms-state-card h2 {\n\tmargin: 2px 0 0;\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.ms-state-card p {\n\tmax-width: 440px;\n\tmargin: 0 0 8px;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 14px;\n\tline-height: 1.5;\n}\n\n.ms-state-icon {\n\tdisplay: grid;\n\twidth: 52px;\n\theight: 52px;\n\tplace-items: center;\n\tmargin-bottom: 4px;\n\tborder-radius: 50%;\n\tbackground: var(--ms-surface-muted);\n\tcolor: var(--ms-text-muted);\n}\n\n.ms-state-icon svg {\n\twidth: 26px;\n\theight: 26px;\n}\n\n.ms-state-error .ms-state-icon {\n\tbackground: color-mix(in srgb, var(--ms-error) 12%, var(--ms-surface));\n\tcolor: var(--ms-error);\n\tfont-size: 24px;\n\tfont-weight: 600;\n}\n\n.ms-spinner {\n\twidth: 22px;\n\theight: 22px;\n\tborder: 2px solid var(--ms-divider);\n\tborder-top-color: var(--ms-accent);\n\tborder-radius: 50%;\n\tanimation: ms-spin 800ms linear infinite;\n}\n\n@keyframes ms-spin {\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.ms-dialog-backdrop {\n\tposition: fixed;\n\tinset: 0;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 24px;\n\tbackground: rgb(0 0 0 / 48%);\n\t-webkit-backdrop-filter: blur(2px);\n\t        backdrop-filter: blur(2px);\n}\n\n.ms-dialog-backdrop.ms-dialog-nested {\n\tz-index: 1010;\n}\n\n.ms-confirm-backdrop {\n\tz-index: 1020;\n}\n\n.ms-confirm-dialog {\n\twidth: min(100%, 440px);\n\tpadding: 24px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ms-radius);\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 16px 48px rgb(0 0 0 / 28%);\n}\n\n.ms-confirm-icon {\n\tdisplay: grid;\n\twidth: 42px;\n\theight: 42px;\n\tplace-items: center;\n\tmargin-bottom: 16px;\n\tborder-radius: 50%;\n\tbackground: color-mix(in srgb, var(--ms-error) 12%, var(--ms-surface));\n\tcolor: var(--ms-error);\n}\n\n.ms-confirm-icon svg {\n\twidth: 22px;\n\theight: 22px;\n\tfill: none;\n\tstroke: currentColor;\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n\tstroke-width: 1.8;\n}\n\n.ms-confirm-dialog h2 {\n\tmargin: 0;\n\tfont-size: 20px;\n\tfont-weight: 500;\n}\n\n.ms-confirm-dialog p {\n\tmargin: 10px 0 24px;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 14px;\n\tline-height: 1.5;\n}\n\n.ms-confirm-dialog p strong {\n\tcolor: var(--ms-text);\n\tfont-weight: 600;\n}\n\n.ms-confirm-actions {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tgap: 10px;\n}\n\n.ms-dialog {\n\tdisplay: flex;\n\twidth: min(100%, 620px);\n\tmax-height: min(90vh, 900px);\n\tmax-height: min(90dvh, 900px);\n\tflex-direction: column;\n\toverflow: hidden;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ms-radius);\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 16px 48px rgb(0 0 0 / 28%);\n}\n\n.ms-filter-dialog { width: min(100%, 480px); }\n.ms-filter-dialog .ms-dialog-body { padding-block: 20px; }\n.ms-filter-dialog .ms-field { margin-bottom: 16px; }\n.ms-filter-dialog-favorite { min-height: 44px; margin-top: 4px; padding: 0 2px; }\n\n.ms-dialog-header {\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: flex-start;\n\tgap: 8px;\n\tpadding: 22px 24px 18px;\n\tborder-bottom: 1px solid var(--ms-divider);\n}\n\n.ms-dialog-heading { flex: 1 1 auto; }\n\n.ms-dialog-heading h2 {\n\tmargin: 0;\n\tfont-size: 20px;\n\tfont-weight: 500;\n}\n\n.ms-dialog-heading p {\n\tmargin: 1px 0 0;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 13px;\n\tline-height: 1.45;\n}\n\n.ms-dialog-heading p strong {\n\tcolor: var(--ms-accent);\n\tfont-weight: 700;\n}\n\n.ms-dialog-close {\n\torder: -1;\n\tflex: 0 0 auto;\n\tmargin: -6px 0 0 -8px;\n}\n\n.ms-dialog-body {\n\tmin-height: 0;\n\toverflow-y: auto;\n\tpadding: 22px 24px;\n}\n\n.ms-field {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7px;\n\tmargin-bottom: 20px;\n}\n\n.ms-field > label,\n.ms-field-label {\n\tcolor: var(--ms-text);\n\tfont-size: var(--ha-font-size-m, 14px);\n\tfont-weight: var(--ha-font-weight-medium, 500);\n\tline-height: var(--ha-line-height-condensed, 1.2);\n}\n\n.ms-required {\n\tcolor: var(--ms-error);\n}\n\n.ms-input,\n.ms-textarea {\n\twidth: 100%;\n\tmin-height: 40px;\n\tpadding: 8px 16px;\n\tborder: 0;\n\tborder-bottom: 1px solid var(--ha-color-border-neutral-loud, var(--input-idle-line-color, var(--ms-divider)));\n\tborder-radius: var(--ha-border-radius-sm, 4px) var(--ha-border-radius-sm, 4px) 0 0;\n\toutline: 0;\n\tbackground-color: var(--ha-color-form-background, var(--input-fill-color, color-mix(in srgb, var(--ms-text) 12%, var(--ms-surface))));\n\tcolor: var(--ms-text);\n\tfont-family: var(--ha-font-family-body, inherit);\n\tfont-size: var(--ha-font-size-m, 14px);\n\tfont-weight: var(--ha-font-weight-normal, 400);\n\tline-height: var(--ha-line-height-normal, 1.6);\n\ttransition: border-color 150ms ease, background-color 150ms ease;\n}\n\n.ms-input:hover,\n.ms-textarea:hover { background-color: var(--ha-color-form-background-hover, var(--input-fill-hover-color, color-mix(in srgb, var(--ms-text) 16%, var(--ms-surface)))); }\n\nselect.ms-input {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\tpadding-right: 36px;\n\tcolor: var(--ms-text);\n\tbackground-image: linear-gradient(45deg, transparent 50%, var(--ms-text-muted) 50%), linear-gradient(135deg, var(--ms-text-muted) 50%, transparent 50%);\n\tbackground-position: calc(100% - 17px) 50%, calc(100% - 12px) 50%;\n\tbackground-size: 5px 5px, 5px 5px;\n\tbackground-repeat: no-repeat;\n}\n\n.ms-textarea {\n\tmin-height: 84px;\n\tpadding-block: 10px;\n\tresize: vertical;\n}\n\n.ms-input:focus,\n.ms-textarea:focus {\n\tborder-bottom: 2px solid var(--primary-color, var(--ms-accent));\n\tbox-shadow: none;\n}\n\n.ms-input::-moz-placeholder, .ms-textarea::-moz-placeholder { color: var(--ms-text-muted); opacity: 1; }\n\n.ms-input::placeholder,\n.ms-textarea::placeholder { color: var(--ms-text-muted); opacity: 1; }\n\n.ms-input:disabled {\n\tbackground-color: var(--ha-color-form-background-disabled, var(--input-disabled-fill-color, var(--ms-surface-muted)));\n\tcolor: var(--ms-text-muted);\n\topacity: 0.8;\n}\n\n.ms-message-editor {\n\tmargin-top: 6px;\n\tpadding: 9px 10px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 9px;\n\tbackground: var(--ms-surface);\n}\n\n.ms-message-editor-top {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 12px;\n\tmargin-bottom: 8px;\n}\n\n.ms-message-editor-actions {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 8px;\n}\n\n.ms-message-editor-top span {\n\tcolor: var(--ms-text-muted);\n\tfont-size: 12px;\n\tfont-weight: 600;\n}\n\n.ms-message-editor-top .ms-messages-label {\n\tcolor: var(--ms-text);\n\tfont-size: 14px;\n\tfont-weight: 500;\n}\n\n.ms-message-editor .ms-textarea {\n\tmin-height: 76px;\n\theight: auto;\n\toverflow-y: hidden;\n\tresize: none;\n}\n\n.ms-message-list {\n\tmin-height: 0;\n}\n\n.ms-message-list-footer {\n\tdisplay: flex;\n\talign-items: center;\n\tmin-height: 32px;\n\tmargin-top: 6px;\n\tpadding: 0;\n}\n\n.ms-messages-field {\n\tgap: 3px;\n}\n\n.ms-messages-field > .ms-message-editor-top {\n\tmargin-bottom: 0;\n}\n\n.ms-inline-button {\n\tmin-height: 34px;\n\tpadding: 0 10px;\n\tborder: 0;\n\tborder-radius: 7px;\n\tbackground: transparent;\n\tcolor: var(--ms-accent);\n\tfont-size: 13px;\n\tfont-weight: 600;\n\tcursor: pointer;\n}\n\n.ms-inline-button:hover {\n\tbackground: var(--ms-surface-muted);\n}\n\n.ms-inline-button-danger {\n\tcolor: var(--ms-error);\n}\n\n.ms-preview-toggle {\n\tcolor: var(--ms-text-muted);\n}\n\n.ms-preview-toggle[aria-expanded="true"] {\n\tcolor: var(--ms-accent);\n}\n\n.ms-inline-button.ms-icon-button {\n\twidth: 32px;\n\theight: 32px;\n\tmin-height: 32px;\n\tpadding: 0;\n}\n\n.ms-inline-button.ms-icon-button svg {\n\twidth: 17px;\n\theight: 17px;\n}\n\n.ms-add-message {\n\tborder: 1px solid var(--ms-divider);\n\tcolor: var(--ms-accent);\n}\n\n.ms-preview {\n\tmargin-top: 10px;\n\tpadding: 10px 12px;\n\tborder-left: 3px solid var(--ms-accent);\n\tborder-radius: 0 6px 6px 0;\n\tbackground: var(--ms-surface-muted);\n\tcolor: var(--ms-text-muted);\n\tfont-size: 13px;\n\tline-height: 1.5;\n\tword-break: break-word;\n}\n\n.ms-preview strong {\n\tdisplay: block;\n\tmargin-bottom: 4px;\n\tcolor: var(--ms-text);\n}\n\n.ms-dialog-footer {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tgap: 10px;\n\tpadding: 16px 24px;\n\tborder-top: 1px solid var(--ms-divider);\n\tbackground: var(--ms-surface);\n}\n\n.ms-dialog-footer .ms-ai-trigger { flex: 0 0 auto; margin-right: auto; }\n.ms-favorite-toggle { display: inline-flex; width: 42px; height: 42px; align-items: center; justify-content: center; padding: 0; }\n.ms-favorite-toggle svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 1.8; }\n.ms-favorite-toggle.is-favorite { color: var(--warning-color, #f9a825); }\n.ms-favorite-toggle.is-favorite svg { fill: color-mix(in srgb, var(--warning-color, #f9a825) 25%, transparent); }\n\n.ms-ai-form .ms-dialog-body {\n\tpadding-bottom: 8px;\n}\n\n.ms-ai-hint {\n\tmargin: 2px 0 0;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 12px;\n\tline-height: 1.5;\n}\n\n.ms-form-error {\n\tmargin: 0 0 16px;\n\tpadding: 10px 12px;\n\tborder-radius: 7px;\n\tbackground: color-mix(in srgb, var(--ms-error) 12%, var(--ms-surface));\n\tcolor: var(--ms-error);\n\tfont-size: 13px;\n\tline-height: 1.45;\n}\n\n.ms-toast {\n\tposition: fixed;\n\tright: 24px;\n\tbottom: 24px;\n\tz-index: 1100;\n\tdisplay: flex;\n\tmin-width: min(320px, calc(100vw - 32px));\n\tmax-width: min(520px, calc(100vw - 32px));\n\talign-items: center;\n\tgap: 12px;\n\tpadding: 12px 12px 12px 16px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-left: 4px solid var(--ms-success);\n\tborder-radius: 9px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 5px 20px rgb(0 0 0 / 18%);\n\tfont-size: 14px;\n}\n\n.ms-toast-error {\n\tborder-left-color: var(--ms-error);\n}\n\n.ms-toast-message {\n\tflex: 1;\n\tline-height: 1.4;\n}\n\n.sr-only {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tpadding: 0;\n\tmargin: -1px;\n\toverflow: hidden;\n\tclip: rect(0, 0, 0, 0);\n\twhite-space: nowrap;\n\tborder: 0;\n}\n\n@media (max-width: 800px) {\n\t.ms-library-layout,\n\t.ms-library-layout.filters-collapsed {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 0;\n\t}\n\n\t.ms-filter-panel,\n\t.filters-collapsed .ms-filter-panel {\n\t\tmax-height: 34%;\n\t\tflex: 0 0 auto;\n\t\tpadding: 0 0 12px;\n\t\tborder-right: 0;\n\t\tborder-bottom: 1px solid var(--ms-divider);\n\t}\n\n\t.ms-library-results {\n\t\tmin-height: 0;\n\t\tflex: 1 1 auto;\n\t\tpadding-top: 0;\n\t}\n\n\t.filters-collapsed .ms-filter-toggle {\n\t\tjustify-content: flex-start;\n\t\tpadding: 0 12px;\n\t}\n\n\t.filters-collapsed .ms-filter-toggle span { display: inline; }\n\t.filters-collapsed .ms-filter-chevron { display: block; }\n}\n\n@media (max-width: 600px) {\n\t.ms-page {\n\t\theight: 100dvh;\n\t}\n\n\t.ms-page-header {\n\t\talign-items: stretch;\n\t\tmin-height: 108px;\n\t\tflex-direction: column;\n\t\tgap: 8px;\n\t\tmargin-bottom: 0;\n\t\tpadding-block: 10px;\n\t}\n\n\t.ms-header-actions {\n\t\twidth: 100%;\n\t\tflex-direction: row;\n\t\talign-items: stretch;\n\t\tgap: 8px;\n\t}\n\n\t.ms-header-actions > .ms-button {\n\t\twidth: auto;\n\t\tmin-width: 0;\n\t\tflex: 1 1 0;\n\t\tpadding-inline: 10px;\n\t}\n\n\t.ms-toolbar {\n\t\talign-items: center;\n\t\tflex-wrap: wrap;\n\t\tgap: 8px;\n\t\tmargin: 0;\n\t}\n\n\t.ms-search {\n\t\tmin-width: 120px;\n\t\tflex: 1 1 calc(100% - 96px);\n\t}\n\n\t.ms-filter-chip { min-height: 40px; }\n\t.ms-library-actions { flex: 0 0 auto; margin-left: auto; }\n\t.ms-library-actions > * { flex: 0 0 auto; }\n\t.ms-library-actions .ms-button { width: 40px; padding-inline: 0; }\n\t.ms-library-actions .ms-export-menu > .ms-button { width: 52px; }\n\n\t.ms-group-toggle {\n\t\talign-self: flex-start;\n\t}\n\n\t.ms-table-wrap {\n\t\tborder: 0;\n\t\tbackground: transparent;\n\t}\n\n\t.ms-table {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: auto;\n\t\toverflow: auto;\n\t}\n\n\t.ms-table thead {\n\t\tposition: absolute;\n\t\twidth: 1px;\n\t\theight: 1px;\n\t\tpadding: 0;\n\t\tmargin: -1px;\n\t\toverflow: hidden;\n\t\tclip: rect(0, 0, 0, 0);\n\t\twhite-space: nowrap;\n\t\tborder: 0;\n\t}\n\n\t.ms-table tbody { display: block; overflow: visible; }\n\n\t.ms-table tbody tr {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: minmax(0, 1fr) auto;\n\t\tgap: 10px 14px;\n\t\tmargin-bottom: 10px;\n\t\tpadding: 14px;\n\t\tborder: 1px solid var(--ms-divider);\n\t\tborder-radius: 10px;\n\t\tbackground: var(--ms-surface);\n\t}\n\n\t.ms-table td {\n\t\tpadding: 0;\n\t\tborder: 0;\n\t}\n\n\t.ms-table td[data-label="Message"] {\n\t\tgrid-column: 1 / -1;\n\t}\n\n\t.ms-row-actions {\n\t\tdisplay: flex;\n\t\twidth: auto;\n\t\talign-items: flex-start;\n\t\tjustify-content: flex-end;\n\t}\n\n\t.ms-dialog-backdrop {\n\t\talign-items: flex-end;\n\t\tpadding: 0;\n\t}\n\n\t.ms-confirm-backdrop {\n\t\talign-items: flex-end;\n\t}\n\n\t.ms-confirm-dialog {\n\t\twidth: 100%;\n\t\tpadding: 22px 18px calc(18px + env(safe-area-inset-bottom, 0px));\n\t\tborder-radius: 16px 16px 0 0;\n\t}\n\n\t.ms-confirm-actions .ms-button {\n\t\tflex: 1;\n\t}\n\n\t.ms-dialog {\n\t\twidth: 100%;\n\t\tmax-height: 92vh;\n\t\tmax-height: 92dvh;\n\t\tborder-radius: 16px 16px 0 0;\n\t}\n\n\t.ms-dialog-header {\n\t\tpadding: 18px 18px 15px;\n\t}\n\n\t.ms-dialog-body {\n\t\tpadding: 18px;\n\t}\n\n\t.ms-dialog-footer {\n\t\tpadding: 14px 18px calc(14px + env(safe-area-inset-bottom, 0px));\n\t}\n\n\t.ms-dialog-footer .ms-button {\n\t\tflex: 1;\n\t}\n\n\t.ms-toast {\n\t\tright: 16px;\n\t\tbottom: calc(16px + env(safe-area-inset-bottom, 0px));\n\t}\n}\n\n@media (prefers-reduced-motion: reduce) {\n\t*,\n\t*::before,\n\t*::after {\n\t\tanimation-duration: 0.01ms !important;\n\t\tanimation-iteration-count: 1 !important;\n\t\tscroll-behavior: auto !important;\n\t\ttransition-duration: 0.01ms !important;\n\t}\n}\n.ms-library-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }\n.ms-library-actions .ms-button, .ms-tag-filter { min-height: 40px; }\n.ms-tag-filter { width: auto; min-width: 150px; }\n.ms-export-menu { position: relative; }\n.ms-export-menu > .ms-button { display: inline-flex; width: 52px; align-items: center; justify-content: center; gap: 4px; padding-inline: 6px; }\n.ms-export-menu > .ms-button svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; }\n.ms-export-menu > .ms-button .ms-action-chevron { width: 14px; height: 14px; stroke-width: 2; }\n.ms-library-actions > .ms-import-button { width: 40px; min-width: 40px; justify-content: center; padding-inline: 0; }\n.ms-library-actions .ms-action-icon { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }\n.ms-export-dropdown { position: absolute; top: calc(100% + 6px); right: 0; z-index: 40; display: grid; min-width: 170px; padding: var(--ha-space-1, 4px); border: 1px solid var(--ms-divider); border-radius: var(--ha-border-radius-lg, 12px); background: var(--ms-surface); box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgb(0 0 0 / 22%)); }\n.ms-export-dropdown button { min-height: 40px; padding: 0 var(--ha-space-3, 12px); border: 0; border-radius: var(--ha-border-radius-md, 8px); background: transparent; color: var(--ms-text); text-align: left; font-size: var(--ha-font-size-m, 14px); font-weight: var(--ha-font-weight-normal, 400); line-height: 1.25; cursor: pointer; }\n.ms-export-dropdown button:hover, .ms-export-dropdown button:focus-visible { background: var(--ms-surface-muted); }\n.ms-row-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 5px; }\n.ms-tag-chip { display: inline-flex; padding: 3px 9px; border: 1px solid color-mix(in srgb, var(--ms-accent) 36%, var(--ms-divider)); border-radius: 999px; color: var(--ms-text); background: color-mix(in srgb, var(--ms-accent) 16%, var(--ms-surface)); font-size: 11px; font-weight: 600; }\n.ms-favorite-button { color: var(--secondary-text-color, #999); font-size: 18px; }\n.ms-favorite-button.is-favorite { color: var(--warning-color, #fbc02d); }\n.ms-entity-suggestions { position: relative; z-index: 4; display: grid; max-height: 280px; overflow-y: auto; margin-top: -6px; border: 1px solid var(--ms-divider); border-radius: var(--ha-border-radius-lg, 12px); background: var(--ms-surface); color: var(--ms-text); box-shadow: var(--ha-card-box-shadow, 0 4px 16px #0003); }\n.ms-entity-suggestions-heading { position: sticky; top: 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 12px; color: var(--ms-text-muted); background: var(--ms-surface); font-size: 12px; }\n.ms-entity-suggestions-heading .ms-input { width: auto; min-height: 34px; }\n.ms-entity-suggestion { display: grid; min-height: 44px; align-content: center; gap: 2px; padding: 6px 12px; border: 0; border-top: 1px solid var(--ms-divider); background: transparent; color: var(--ms-text); text-align: left; font-family: var(--ha-font-family-body, inherit); font-size: var(--ha-font-size-m, 14px); line-height: var(--ha-line-height-condensed, 1.2); cursor: pointer; }\n.ms-entity-suggestion:hover, .ms-entity-suggestion.is-active { background: var(--ms-surface-muted); }\n.ms-entity-suggestion small { color: var(--ms-text-muted); font-size: 11px; }\n.ms-reference-warning { margin: 6px 0 0; color: var(--warning-color, #f9a825); font-size: 13px; }\n.ms-library-metadata { display: grid; gap: 8px; }\n.ms-tag-editor { position: relative; display: flex; flex-wrap: wrap; align-items: center; gap: 6px; min-height: 44px; padding: 6px 8px; border: 0; border-bottom: 1px solid var(--ha-color-border-neutral-loud, var(--input-idle-line-color, var(--ms-divider))); border-radius: var(--ha-border-radius-sm, 4px) var(--ha-border-radius-sm, 4px) 0 0; background: var(--ha-color-form-background, var(--input-fill-color, color-mix(in srgb, var(--ms-text) 12%, var(--ms-surface)))); color: var(--ms-text); }\n.ms-tag-editor:focus-within { border-bottom: 2px solid var(--primary-color, var(--ms-accent)); box-shadow: none; background: var(--ha-color-form-background-hover, var(--input-fill-hover-color, color-mix(in srgb, var(--ms-text) 16%, var(--ms-surface)))); }\n.ms-tag-editor .ms-input { flex: 1 1 180px; min-width: 150px; min-height: 34px; padding: 4px 6px; border: 0; box-shadow: none; }\n.ms-tag-editor .ms-input:focus { border: 0; box-shadow: none; }\n.ms-tag-suggestions { position: absolute; top: calc(100% + 5px); left: 0; z-index: 30; display: grid; width: 100%; max-height: 220px; overflow-y: auto; padding: var(--ha-space-1, 4px); border: 1px solid var(--ms-divider); border-radius: var(--ha-border-radius-lg, 12px); background: var(--ms-surface); color: var(--ms-text); box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgb(0 0 0 / 24%)); }\n.ms-tag-suggestion { min-height: 40px; padding: 0 12px; border: 0; border-radius: var(--ha-border-radius-md, 8px); background: transparent; color: var(--ms-text); text-align: left; font-family: var(--ha-font-family-body, inherit); font-size: var(--ha-font-size-m, 14px); font-weight: var(--ha-font-weight-normal, 400); cursor: pointer; }\n.ms-tag-suggestion:hover, .ms-tag-suggestion.is-active { background: var(--ms-surface-muted); color: var(--ms-text); }\n.ms-tag-suggestion:focus-visible { outline: 2px solid var(--ms-accent); outline-offset: -2px; }\n.ms-tag-chip { align-items: center; gap: 4px; }\n.ms-tag-chip button { padding: 0 2px; border: 0; background: transparent; color: inherit; font-size: 16px; line-height: 1; cursor: pointer; }\n@media (max-width: 760px) {\n  .ms-library-actions { width: auto; margin-left: auto; }\n  .ms-library-actions .ms-button { flex: 0 0 auto; }\n  .ms-dialog-footer .ms-ai-trigger { flex: 1 0 100%; margin-right: 0; }\n  .ms-dialog-footer .ms-favorite-toggle { flex: 0 0 42px; }\n}\n');var e=async(t,e,s,i={},n={})=>{try{return(await t.connection.sendMessagePromise({type:"execute_script",sequence:[{service:`${e}.${s}`,data:i,target:n,response_variable:"service_result"},{stop:"done",response_variable:"service_result"}]})).response}catch(t){return{status:"error",error:t}}};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&a.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",g=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},m=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:m},v="finalized";let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=u){var i;const n=this.constructor._$Ep(t,s);if(void 0!==n&&!0===s.reflect){const a=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(e,s.type);this._$El=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this._$El=n,this[n]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var x;f[v]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:f}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,M="?"+k,S=`<${M}>`,_=document,A=()=>_.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,O="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,z=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,N=/"/g,P=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),j=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),B=new WeakMap,H=_.createTreeWalker(_,129,null,!1);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const q=(t,e)=>{const s=t.length-1,i=[];let n,a=2===e?"<svg>":"",o=I;for(let e=0;e<s;e++){const s=t[e];let r,l,d=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===I?"!--"===l[1]?o=T:void 0!==l[1]?o=z:void 0!==l[2]?(P.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=D):void 0!==l[3]&&(o=D):o===D?">"===l[0]?(o=null!=n?n:I,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?D:'"'===l[3]?N:L):o===N||o===L?o=D:o===T||o===z?o=I:(o=D,n=void 0);const h=o===D&&t[e+1].startsWith("/>")?" ":"";a+=o===I?s+S:d>=0?(i.push(r),s.slice(0,d)+$+s.slice(d)+k+h):s+k+(-2===d?(i.push(void 0),e):h)}return[F(t,a+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,a=0;const o=t.length-1,r=this.parts,[l,d]=q(t,e);if(this.el=K.createElement(l,s),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=H.nextNode())&&r.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith($)||e.startsWith(k)){const s=d[a++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+$).split(k),e=/([.?@])?(.*)/.exec(s);r.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Y:"@"===e[1]?X:G})}else r.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(P.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],A()),H.nextNode(),r.push({type:2,index:++n});i.append(t[e],A())}}}else if(8===i.nodeType)if(i.data===M)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)r.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const s=_.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){var n,a,o,r;if(e===j)return e;let l=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const d=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,s,i)),void 0!==i?(null!==(o=(r=s)._$Co)&&void 0!==o?o:r._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(e=Z(t,l._$AS(t,e.values),l,i)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(s,!0);H.currentNode=n;let a=H.nextNode(),o=0,r=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new Q(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new tt(a,this,t)),this._$AV.push(e),l=i[++r]}o!==(null==l?void 0:l.index)&&(a=H.nextNode(),o++)}return H.currentNode=_,n}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Q{constructor(t,e,s,i){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),E(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&E(this._$AH)?this._$AA.nextSibling.data=t:this.$(_.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(F(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(s);else{const t=new V(n,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new K(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new Q(this.k(A()),this.k(A()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,s,i,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let a=!1;if(void 0===n)t=Z(this,t,e,0),a=!E(t)||t!==this._$AH&&t!==j,a&&(this._$AH=t);else{const i=t;let o,r;for(t=n[0],o=0;o<n.length-1;o++)r=Z(this,i[s+o],e,o),r===j&&(r=this._$AH[o]),a||(a=!E(r)||r!==this._$AH[o]),r===U?t=U:t!==U&&(t+=(null!=r?r:"")+n[o+1]),this._$AH[o]=r}a&&!i&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const W=y?y.emptyScript:"";class Y extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class X extends G{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=Z(this,t,e,0))&&void 0!==s?s:U)===j)return;const i=this._$AH,n=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==U&&(i===U||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const et=b.litHtmlPolyfillSupport;null==et||et(K,Q),(null!==(x=b.litHtmlVersions)&&void 0!==x?x:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,it;class nt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,n;const a=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=a._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;a._$litPart$=o=new Q(e.insertBefore(A(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}nt.finalized=!0,nt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:nt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:nt}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}},lt=(t,e,s)=>{e.constructor.createProperty(s,t)};function dt(t){return(e,s)=>void 0!==s?lt(t,e,s):rt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return dt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;let gt=class extends nt{constructor(){super(...arguments),this.messages=[],this.sortOrder="asc",this.groupMessages=!0,this.openMenuId=""}createRenderRoot(){return this}handleEdit(t){this.dispatchEvent(new CustomEvent("edit",{detail:t}))}handleCellKey(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.handleEdit(e))}handleDelete(t){this.closeMoreOptions();const e=!this.groupMessages&&t.originalMessage.length>1;this.dispatchEvent(new CustomEvent("confirm-delete",{detail:Object.assign(Object.assign({},t),{removeSingleMessage:e})}))}handleEditAction(t){this.closeMoreOptions(),this.handleEdit(t)}rowId(t,e){var s;return`${t.slug}:${null!==(s=t.messageIndex)&&void 0!==s?s:e}`}toggleMoreOptions(t,e){const s=this.rowId(t,e);this.openMenuId=this.openMenuId===s?"":s}closeMoreOptions(){this.openMenuId=""}handleDuplicate(t){this.closeMoreOptions(),this.dispatchEvent(new CustomEvent("duplicate",{detail:t}))}handleFavorite(t){this.closeMoreOptions(),this.dispatchEvent(new CustomEvent("favorite",{detail:t}))}formatMessage(t){return t.split(/(\(state:[^)]+\)|\(slug:[^)]+\)|%s)/g).map((t=>/^\(state:[^)]+\)$|^\(slug:[^)]+\)$|^%s$/.test(t)?R`<span class="ms-message-token">${t}</span>`:t))}resolveStateMessage(t){return t.replace(/\(state:([a-zA-Z0-9_\.]+)(?:\((.*?)\))?\)/g,((t,e,s)=>{var i,n,a;const o=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[e];if(!o)return t;const r=s?s.split(",").map((t=>t.trim())):[],l=Number.parseFloat(o.state);let d=o.state;if(Number.isFinite(l)){const t=r.find((t=>t.startsWith("round")));if(r.includes("round"))d=Math.round(l);else if(t){const e=Number.parseInt(t.replace("round",""),10);Number.isFinite(e)&&(d=l.toFixed(e))}}return r.includes("unit")&&(null===(a=o.attributes)||void 0===a?void 0:a.unit_of_measurement)&&(d=`${d} ${o.attributes.unit_of_measurement}`),String(d)}))}resolveMessage(t,e=[]){const s=t.replace(/\(slug:([^)]+)\)/g,((t,s)=>{if(e.includes(s))return t;const i=this.messages.find((t=>t.slug===s));return i?this.resolveMessage(i.message,[...e,s]):t}));return this.resolveStateMessage(s)}handleSortClick(){this.sortOrder="asc"===this.sortOrder?"desc":"asc",this.dispatchEvent(new CustomEvent("sort",{detail:this.sortOrder}))}render(){return R`
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
										class="${"desc"===this.sortOrder?"is-desc":""}"
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
						${this.messages.map(((t,e)=>R`
								<tr
									class="ms-message-row"
									key="${t.slug+e}"
								>
					<td data-label="Slug" class="ms-edit-cell" tabindex="0" aria-label="Edit ${t.slug}" @click=${()=>this.handleEdit(t)} @keydown=${e=>this.handleCellKey(e,t)}>
										<div class="ms-slug">${t.favorite?R`<svg class="ms-slug-favorite" viewBox="0 0 24 24" aria-label="Favorite" role="img"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>`:U}${t.slug}</div>
										${this.groupMessages&&t.originalMessage.length>1?R`<div class="ms-row-meta">
													${t.originalMessage.length}
													messages
												</div>`:U}
									</td>
					<td data-label="Message" class="ms-edit-cell" tabindex="0" aria-label="Edit message for ${t.slug}" @click=${()=>this.handleEdit(t)} @keydown=${e=>this.handleCellKey(e,t)}>
							<div
								class="ms-message-hover ${/\((state|slug):[^)]+\)/.test(t.message)?"has-state-tooltip":""}"
								tabindex="${/\((state|slug):[^)]+\)/.test(t.message)?"0":"-1"}"
							>
								<div class="ms-message-preview">
									${t.message.split("| ").map((t=>R`<div>
												${this.formatMessage(t)}
											</div>`))}
								</div>
								${/\((state|slug):[^)]+\)/.test(t.message)?R`<div class="ms-message-tooltip" role="tooltip">
											<strong>${t.slug}</strong>
											<span>${this.resolveMessage(t.message,[t.slug])}</span>
										</div>`:U}
							</div>
							<div class="ms-row-tags">${(t.tags||[]).map((t=>R`<span class="ms-tag-chip">${t}</span>`))}</div>
									</td>
									<td
										data-label="Actions"
										class="ms-row-actions"
									>
						<div class="ms-row-more" @click=${t=>t.stopPropagation()}>
							<button class="ms-icon-button ms-more-options-button" aria-haspopup="menu" aria-expanded=${this.openMenuId===this.rowId(t,e)} aria-label="More options for ${t.slug}" title="More options" @click=${()=>this.toggleMoreOptions(t,e)}>
								<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg>
							</button>
							${this.openMenuId===this.rowId(t,e)?R`<div class="ms-row-more-menu" role="menu">
								<button role="menuitem" @click=${()=>this.handleEditAction(t)}><svg class="ms-menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></svg>Edit message</button>
								<button role="menuitem" @click=${()=>this.handleDuplicate(t)}><svg class="ms-menu-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" /></svg>Duplicate slug</button>
								<button role="menuitem" @click=${()=>this.handleFavorite(t)}><svg class="ms-menu-icon ms-menu-star ${t.favorite?"is-favorite":""}" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg>${t.favorite?"Remove from favorites":"Add to favorites"}</button>
								<div class="ms-menu-divider" role="separator"></div>
								<button role="menuitem" class="ms-menu-delete" @click=${()=>this.handleDelete(t)}><svg class="ms-menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" /></svg>Delete message</button>
							</div>`:U}
						</div>
									</td>
								</tr>
							`))}
					</tbody>
				</table>
			</div>
		`}};t([dt({type:Array})],gt.prototype,"messages",void 0),t([dt({type:String})],gt.prototype,"sortOrder",void 0),t([dt({type:Boolean})],gt.prototype,"groupMessages",void 0),t([dt({type:Object})],gt.prototype,"hass",void 0),t([ct()],gt.prototype,"openMenuId",void 0),gt=t([ot("messages-store-list")],gt);let pt=class extends nt{constructor(){super(...arguments),this.instructions="",this.quantity=5,this.taskName="",this.slug="",this.loading=!1,this.error="",this.initialSlug=""}createRenderRoot(){return this}firstUpdated(){var t;this.slug=null!==(t=this.initialSlug)&&void 0!==t?t:"",this.taskName=`AI Task ${this.initialSlug}`,this.instructions=this.initialSlug?"Generate messages for slug":"",this.focusInput()}focusInput(){const t=this.renderRoot.querySelector("textarea");t&&t.focus()}handleClose(){this.dispatchEvent(new CustomEvent("close"))}async handleGenerate(){var t;if(this.error="",this.instructions&&this.taskName&&this.quantity){this.loading=!0;try{const s=await e(this.hass,"messages_store","generate_ai_messages",{instructions:this.instructions,quantity:Number(this.quantity),task_name:this.taskName,slug:this.slug||void 0});if("error"===(null==s?void 0:s.status))throw new Error((null===(t=null==s?void 0:s.error)||void 0===t?void 0:t.message)||"Service call failed.");if(!(null==s?void 0:s.status))throw new Error((null==s?void 0:s.message)||"Unable to generate messages.");this.dispatchEvent(new CustomEvent("aiMessages",{detail:{slug:s.slug,messages:s.messages}})),this.handleClose()}catch(t){this.error=t instanceof Error?t.message:"Unable to generate messages."}finally{this.loading=!1}}else this.error="Fill all required fields."}handleSubmit(t){t.preventDefault(),this.handleGenerate()}handleBackdropClick(t){t.target===t.currentTarget&&this.handleClose()}render(){return R`
			<div
				class="ms-dialog-backdrop ms-dialog-nested"
				@click=${this.handleBackdropClick}
			>
				<section
					class="ms-dialog ms-ai-form"
					role="dialog"
					aria-modal="true"
					aria-labelledby="ms-ai-dialog-title"
					@click=${t=>t.stopPropagation()}
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
									@input=${t=>this.taskName=t.target.value}
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
									@input=${t=>this.instructions=t.target.value}
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
									@input=${t=>this.quantity=t.target.value}
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
									@input=${t=>this.slug=t.target.value}
								/>
							</div>
							${this.error?R`<p class="ms-form-error" role="alert">
										${this.error}
									</p>`:U}
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
								${this.loading?"Generating…":"Generate messages"}
							</button>
						</footer>
					</form>
				</section>
			</div>
		`}};t([ct()],pt.prototype,"instructions",void 0),t([ct()],pt.prototype,"quantity",void 0),t([ct()],pt.prototype,"taskName",void 0),t([ct()],pt.prototype,"slug",void 0),t([ct()],pt.prototype,"loading",void 0),t([ct()],pt.prototype,"error",void 0),t([dt({type:Object})],pt.prototype,"hass",void 0),t([dt({type:String})],pt.prototype,"initialSlug",void 0),pt=t([ot("messages-store-ai-modal")],pt);let mt=class extends nt{constructor(){super(...arguments),this.messages=[],this.initialSlug="",this.isEditing=!1,this.initialMessages=[],this.initialTags=[],this.initialFavorite=!1,this.initialFocusIndex=0,this.slug="",this.messageList=[""],this.isAIModalOpen=!1,this.aiTaskConfigured=!1,this.tags=[],this.tagQuery="",this.tagSuggestionsOpen=!1,this.tagSuggestionIndex=0,this.favorite=!1,this.selectedFilter="",this.activeMessageIndex=0,this.previewOpenIndices=new Set,this.caretPosition=0,this.suggestionStart=0,this.suggestionQuery="",this.suggestionOpen=!1,this.suggestionIndex=0,this.handleKeyDown=t=>{if("Escape"===t.key){if(this.isAIModalOpen)return void(this.isAIModalOpen=!1);this.closeModal()}t.ctrlKey&&t.altKey&&"s"===t.key.toLowerCase()&&this.handleSave()}}createRenderRoot(){return this}connectedCallback(){var t,e;super.connectedCallback(),this.slug=null!==(t=this.initialSlug)&&void 0!==t?t:"",this.messageList=null!==(e=this.initialMessages)&&void 0!==e?e:[""],this.tags=[...this.initialTags||[]],this.favorite=!!this.initialFavorite,document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}firstUpdated(){this.checkAITaskConfiguration(),this.resizeMessageTextareas(),this.isEditing?this.focusMessage(Math.min(this.initialFocusIndex,this.messageList.length-1)):this.focusSlug()}updated(){this.resizeMessageTextareas()}resizeMessageTextareas(){this.querySelectorAll(".ms-message-textarea").forEach((t=>{t.style.height="auto",t.style.height=`${Math.max(76,t.scrollHeight)}px`}))}async checkAITaskConfiguration(){try{const t=await e(this.hass,"messages_store","get_ai_task_configured");this.aiTaskConfigured=!0===(null==t?void 0:t.configured)}catch(t){this.aiTaskConfigured=!1}}async handleAddMessage(){this.messageList=[...this.messageList,""],await this.updateComplete,await new Promise((t=>requestAnimationFrame((()=>t()))));const t=this.messageList.length-1,e=this.querySelectorAll(".ms-message-textarea")[t];e&&e.scrollIntoView({block:"nearest",behavior:"smooth"}),this.focusMessage(t,!0)}handleRemoveMessage(t){this.messageList=this.messageList.filter(((e,s)=>s!==t)),this.previewOpenIndices=new Set([...this.previewOpenIndices].filter((e=>e!==t)).map((e=>e>t?e-1:e)))}togglePreview(t){const e=new Set(this.previewOpenIndices);e.has(t)?e.delete(t):e.add(t),this.previewOpenIndices=e}handleSave(){const t=this.isEditing?"edit_message":"add_message";this.dispatchEvent(new CustomEvent("save",{detail:{slug:this.slug,messages:this.messageList,tags:this.tags,favorite:this.favorite,service:t}}))}get availableTags(){const t=this.tagQuery.trim().toLowerCase(),e=this.messages.reduce(((t,e)=>t.concat(e.tags||[])),[]);return[...new Set(e)].filter((e=>!this.tags.includes(e)&&(!t||e.toLowerCase().includes(t)))).sort(((t,e)=>t.localeCompare(e)))}addTag(t=this.tagQuery){const e=t.trim();if(!e||this.tags.some((t=>t.toLowerCase()===e.toLowerCase())))return this.tagQuery="",void(this.tagSuggestionsOpen=!1);this.tags=[...this.tags,e],this.tagQuery="",this.tagSuggestionsOpen=!1}handleTagKeyDown(t){"ArrowDown"===t.key&&this.availableTags.length?(t.preventDefault(),this.tagSuggestionsOpen=!0,this.tagSuggestionIndex=(this.tagSuggestionIndex+1)%this.availableTags.length):"ArrowUp"===t.key&&this.availableTags.length?(t.preventDefault(),this.tagSuggestionsOpen=!0,this.tagSuggestionIndex=(this.tagSuggestionIndex-1+this.availableTags.length)%this.availableTags.length):"Escape"===t.key?this.tagSuggestionsOpen=!1:","===t.key?(t.preventDefault(),this.addTag()):"Enter"===t.key&&(t.preventDefault(),this.addTag(this.availableTags[this.tagSuggestionIndex]||this.tagQuery))}removeTag(t){this.tags=this.tags.filter((e=>e!==t))}get entities(){var t;return Object.values((null===(t=this.hass)||void 0===t?void 0:t.states)||{}).sort(((t,e)=>t.entity_id.localeCompare(e.entity_id)))}get suggestedEntities(){const t=this.suggestionQuery.toLowerCase();return this.entities.filter((e=>{var s;return`${e.entity_id} ${(null===(s=e.attributes)||void 0===s?void 0:s.friendly_name)||""}`.toLowerCase().includes(t)})).slice(0,8)}handleMessageInput(t,e){const s=t.currentTarget;s.style.height="auto",s.style.height=`${Math.max(76,s.scrollHeight)}px`,this.messageList[e]=s.value,this.activeMessageIndex=e,this.caretPosition=s.selectionStart;const i=s.value.slice(0,s.selectionStart).match(/(?:\(state:|\bstate:)([a-zA-Z0-9_.]*)$/i);i?(this.suggestionStart=s.selectionStart-i[0].length,this.suggestionQuery=i[1],this.suggestionIndex=0,this.suggestionOpen=this.suggestedEntities.length>0):this.suggestionOpen=!1;const n=s.selectionStart,a=s.selectionEnd;this.requestUpdate(),this.updateComplete.then((()=>{const t=this.querySelectorAll(".ms-message-textarea")[e];null==t||t.setSelectionRange(n,a)}))}handleMessageKeyDown(t,e){if(!this.suggestionOpen)return;const s=this.suggestedEntities;"ArrowDown"===t.key||"ArrowUp"===t.key?(t.preventDefault(),this.suggestionIndex=(this.suggestionIndex+("ArrowDown"===t.key?1:-1)+s.length)%s.length):"Enter"===t.key&&s[this.suggestionIndex]?(t.preventDefault(),t.stopPropagation(),this.selectEntity(s[this.suggestionIndex].entity_id,e)):"Escape"===t.key&&(t.preventDefault(),t.stopPropagation(),this.suggestionOpen=!1)}async selectEntity(t,e){const s=this.querySelectorAll(".ms-message-textarea")[e];if(!s)return;const i=`(state:${t}${this.selectedFilter?`(${this.selectedFilter})`:""})`;s.setRangeText(i,this.suggestionStart,this.caretPosition,"end"),this.messageList[e]=s.value,this.caretPosition=s.selectionStart,this.suggestionOpen=!1,this.requestUpdate(),await this.updateComplete,s.focus(),s.setSelectionRange(this.caretPosition,this.caretPosition)}getMissingReferences(t){const e=e=>{const s=[];let i;for(;null!==(i=e.exec(t));)s.push(i[1]);return s},s=e(/\(slug:([^)]+)\)/g).filter((t=>t!==this.slug&&!this.messages.some((e=>e.slug===t)))),i=e(/\(state:([a-zA-Z0-9_.]+)(?:\((.*?)\))?\)/g).filter((t=>{var e,s;return!(null===(s=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===s?void 0:s[t])}));return[...new Set([...s.map((t=>`Missing slug: ${t}`)),...i.map((t=>`Unavailable entity: ${t}`))])]}closeModal(){this.dispatchEvent(new CustomEvent("close"))}handleBackdropClick(t){t.target===t.currentTarget&&this.closeModal()}focusSlug(){const t=this.renderRoot.querySelector('input[type="text"]');t&&t.focus()}focusMessage(t,e=!1){const s=this.renderRoot.querySelectorAll("textarea");s&&s[t]&&s[t].focus({preventScroll:e})}aiMessages(t){const{slug:e,messages:s}=t.detail;this.slug||(this.slug=e);let i=[...this.messageList,...s];i.length>0&&""===i[0]&&(i=i.slice(1)),this.messageList=i}previewMessage(t){const e=t.replace(/\(slug:([^)]+)\)/g,((t,e)=>{if(e===this.slug)return t;const s=this.messages.filter((t=>t.slug===e));if(0===s.length)return t;const i=s[0].message;return/\(slug:[^)]+\)/.test(i)?t:i})).replace(/\(state:([a-zA-Z0-9_\.]+)(?:\((.*?)\))?\)/g,((t,e,s)=>{var i,n,a;const o=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[e];if(!o)return t;let r=o.state;const l=(null===(a=o.attributes)||void 0===a?void 0:a.unit_of_measurement)||"";let d=r;const c=!isNaN(parseFloat(r))&&isFinite(r);if(s=s?s.split(",").map((t=>t.trim())):[],c)if(r=parseFloat(r),s.includes("round"))d=Math.round(r);else{const t=s.find((t=>t.startsWith("round")));if(t){const e=parseInt(t.replace("round",""),10);d=r.toFixed(e)}}return s.includes("unit")&&l&&(d=`${d} ${l}`),d}));return e}render(){return R`
			<div class="ms-dialog-backdrop" @click=${this.handleBackdropClick}>
				<section
					class="ms-dialog"
					role="dialog"
					aria-modal="true"
					aria-labelledby="ms-message-dialog-title"
					@click=${t=>t.stopPropagation()}
				>
					<header class="ms-dialog-header">
						<div class="ms-dialog-heading">
							<h2 id="ms-message-dialog-title">
								${this.isEditing?"Edit message":"Add message"}
							</h2>
							<p>
								${this.isEditing?R`Editing slug: <strong>${this.slug}</strong>`:"Create a reusable message for your automations."}
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
						${this.isEditing?U:R`<div class="ms-field">
							<label for="ms-message-slug">Slug</label>
							<input
								id="ms-message-slug"
								type="text"
								class="ms-input"
								.value=${this.slug}
								@input=${t=>this.slug=t.target.value}
								?disabled=${this.isEditing}
								autocomplete="off"
							/>
						</div>`}
						<div class="ms-field ms-library-metadata">
							<label for="ms-message-tags">Tags</label>
							<div class="ms-tag-editor">
								${this.tags.map((t=>R`<span class="ms-tag-chip">${t}<button type="button" aria-label="Remove tag ${t}" @click=${()=>this.removeTag(t)}>×</button></span>`))}
								<input id="ms-message-tags" class="ms-input" maxlength="40" .value=${this.tagQuery} placeholder="Type or select a tag" @focus=${()=>this.tagSuggestionsOpen=!0} @input=${t=>{this.tagQuery=t.target.value,this.tagSuggestionIndex=0,this.tagSuggestionsOpen=!0}} @blur=${t=>{this.addTag(t.target.value),this.tagSuggestionsOpen=!1}} @keydown=${this.handleTagKeyDown} />
								${this.tagSuggestionsOpen&&this.availableTags.length?R`<div class="ms-tag-suggestions" role="listbox" aria-label="Available tags">${this.availableTags.map(((t,e)=>R`<button type="button" class="ms-tag-suggestion ${e===this.tagSuggestionIndex?"is-active":""}" role="option" aria-selected=${e===this.tagSuggestionIndex} @mousedown=${t=>t.preventDefault()} @click=${()=>this.addTag(t)}>${t}</button>`))}</div>`:U}
							</div>
						</div>
		<div class="ms-field ms-messages-field">
			<div class="ms-message-editor-top">
								<span class="ms-field-label ms-messages-label">Messages</span>
							</div>
			<div class="ms-message-list">
							${this.messageList.map(((t,e)=>R`
									<div class="ms-message-editor">
						<div class="ms-message-editor-top">
							<span>Message ${e+1}</span>
							<div class="ms-message-editor-actions">
											${this.messageList.length>1?R`<button
														class="ms-inline-button ms-icon-button ms-inline-button-danger"
														@click=${()=>this.handleRemoveMessage(e)}
														aria-label="Remove message ${e+1}"
														title="Remove message ${e+1}"
													>
														<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6m4-6v6M5 7l1 14h12l1-14M9 7V4h6v3" /></svg>
													</button>`:U}
											${t.trim()?R`<button class="ms-inline-button ms-icon-button" title="Duplicate message ${e+1}" aria-label="Duplicate message ${e+1}" @click=${()=>{this.messageList=[...this.messageList.slice(0,e+1),this.messageList[e],...this.messageList.slice(e+1)]}}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg></button>`:U}
											${t.trim()?R`<button type="button" class="ms-inline-button ms-icon-button ms-preview-toggle" title=${this.previewOpenIndices.has(e)?`Hide preview for message ${e+1}`:`Show preview for message ${e+1}`} aria-label=${this.previewOpenIndices.has(e)?`Hide preview for message ${e+1}`:`Show preview for message ${e+1}`} aria-expanded=${this.previewOpenIndices.has(e)} @click=${()=>this.togglePreview(e)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg></button>`:U}
							</div>
										</div>
										<textarea
											class="ms-textarea ms-message-textarea"
											aria-label="Message ${e+1}"
											.value=${t}
											@input=${t=>{this.handleMessageInput(t,e)}}
											@keydown=${t=>this.handleMessageKeyDown(t,e)}
											@keyup=${t=>{this.activeMessageIndex=e,this.caretPosition=t.target.selectionStart}}
											@click=${t=>{this.activeMessageIndex=e,this.caretPosition=t.target.selectionStart}}
										></textarea>
						${this.suggestionOpen&&this.activeMessageIndex===e?R`<div class="ms-entity-suggestions" role="listbox" aria-label="Home Assistant entities"><div class="ms-entity-suggestions-heading"><span>Entities</span><select class="ms-input" aria-label="State filter" .value=${this.selectedFilter} @change=${t=>this.selectedFilter=t.target.value}><option value="">No filter</option><option value="round">round</option><option value="round1">round1</option><option value="round2">round2</option><option value="round3">round3</option><option value="unit">unit</option><option value="round1,unit">round1, unit</option></select></div>${this.suggestedEntities.map(((t,s)=>{var i;return R`<button type="button" class="ms-entity-suggestion ${s===this.suggestionIndex?"is-active":""}" role="option" aria-selected=${s===this.suggestionIndex} @mousedown=${t=>t.preventDefault()} @click=${()=>this.selectEntity(t.entity_id,e)}><span>${(null===(i=t.attributes)||void 0===i?void 0:i.friendly_name)||t.entity_id}</span><small>${t.entity_id} · ${t.state}</small></button>`}))}</div>`:U}
						${t.trim()&&this.previewOpenIndices.has(e)?R`<div class="ms-preview"><strong>Preview</strong><div>${this.previewMessage(t)}</div></div>`:U}
											${this.getMissingReferences(t).map((t=>R`<p class="ms-reference-warning" role="status">${t} (message can still be saved)</p>`))}
									</div>
								`))}
			</div>
			<div class="ms-message-list-footer">
				<button type="button" class="ms-inline-button ms-icon-button ms-add-message" title="Add another message" aria-label="Add another message" @click=${this.handleAddMessage}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></button>
			</div>
						</div>
					</div>
					<footer class="ms-dialog-footer">
						${this.isEditing?R`<button type="button" class="ms-button ms-button-secondary ms-favorite-toggle ${this.favorite?"is-favorite":""}" title=${this.favorite?`Remove ${this.slug} from favorites`:`Favorite ${this.slug}`} aria-label=${this.favorite?`Remove ${this.slug} from favorites`:`Favorite ${this.slug}`} @click=${()=>this.favorite=!this.favorite}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" /></svg></button>`:U}
						${this.aiTaskConfigured?R`<button
									type="button"
									class="ms-button ms-button-secondary ms-ai-trigger"
									@click=${()=>this.isAIModalOpen=!0}
									aria-haspopup="dialog"
								>
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
										<path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
									</svg>
									<span>Generate with AI</span>
								</button>`:U}
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
				${this.isAIModalOpen?R`
							<messages-store-ai-modal
								.hass=${this.hass}
								.initialSlug=${this.isEditing?this.initialSlug:""}
								@close=${()=>this.isAIModalOpen=!1}
								@aiMessages=${this.aiMessages}
							></messages-store-ai-modal>
						`:""}
			</div>
		`}};t([dt({type:Array})],mt.prototype,"messages",void 0),t([dt({type:String})],mt.prototype,"initialSlug",void 0),t([dt({type:Boolean})],mt.prototype,"isEditing",void 0),t([dt({type:Array})],mt.prototype,"initialMessages",void 0),t([dt({type:Array})],mt.prototype,"initialTags",void 0),t([dt({type:Boolean})],mt.prototype,"initialFavorite",void 0),t([dt({type:Number})],mt.prototype,"initialFocusIndex",void 0),t([dt({type:Object})],mt.prototype,"hass",void 0),t([dt({type:Object})],mt.prototype,"callService",void 0),t([ct()],mt.prototype,"slug",void 0),t([ct()],mt.prototype,"messageList",void 0),t([ct()],mt.prototype,"isAIModalOpen",void 0),t([ct()],mt.prototype,"aiTaskConfigured",void 0),t([ct()],mt.prototype,"tags",void 0),t([ct()],mt.prototype,"tagQuery",void 0),t([ct()],mt.prototype,"tagSuggestionsOpen",void 0),t([ct()],mt.prototype,"tagSuggestionIndex",void 0),t([ct()],mt.prototype,"favorite",void 0),t([ct()],mt.prototype,"selectedFilter",void 0),t([ct()],mt.prototype,"activeMessageIndex",void 0),t([ct()],mt.prototype,"previewOpenIndices",void 0),t([ct()],mt.prototype,"caretPosition",void 0),t([ct()],mt.prototype,"suggestionStart",void 0),t([ct()],mt.prototype,"suggestionQuery",void 0),t([ct()],mt.prototype,"suggestionOpen",void 0),t([ct()],mt.prototype,"suggestionIndex",void 0),mt=t([ot("messages-store-modal")],mt);let ut=class extends nt{constructor(){super(...arguments),this.message="",this.type="success"}closeNotification(){this.dispatchEvent(new CustomEvent("close"))}createRenderRoot(){return this}render(){return R`
			${this.message?R`
						<div
							class="ms-toast ${"error"===this.type?"ms-toast-error":""}"
							role="${"error"===this.type?"alert":"status"}"
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
					`:""}
		`}};t([dt({type:String})],ut.prototype,"message",void 0),t([dt({type:String})],ut.prototype,"type",void 0),ut=t([ot("messages-store-notification")],ut);let vt=class extends nt{constructor(){super(...arguments),this.allMessages=[],this.messages=[],this.message={slug:"",message:"",originalMessage:[""],tags:[],favorite:!1},this.isModalOpen=!1,this.editingMessage=!1,this.notification=null,this.searchTerm="",this.sortOrder="asc",this.groupMessages=!0,this.isLoading=!0,this.loadError="",this.pendingDelete=null,this.isAISettingsOpen=!1,this.aiSettingsLoading=!1,this.aiSettingsSaving=!1,this.aiSettingsError="",this.aiTaskEntityId="",this.aiInstructions="",this.aiTaskEntities=[],this.favoriteOnly=!1,this.selectedTag="",this.filtersDialogOpen=!1,this.importDialogOpen=!1,this.importContent="",this.importFormat="json",this.exportMenuOpen=!1,this.handleKeyDown=t=>{"Escape"===t.key&&this.pendingDelete?this.cancelDelete():"Escape"===t.key&&this.exportMenuOpen?this.exportMenuOpen=!1:"Escape"===t.key&&this.filtersDialogOpen?this.filtersDialogOpen=!1:"Escape"===t.key&&this.isAISettingsOpen?this.closeAISettings():t.ctrlKey&&t.altKey&&"+"===t.key&&this.addModal()}}createRenderRoot(){return this}async connectedCallback(){super.connectedCallback(),this.loadConfig(),await this.loadMessages(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}loadConfig(){const t=localStorage.getItem("messages-store-config");t&&(this.groupMessages=JSON.parse(t).groupMessages)}saveConfig(){localStorage.setItem("messages-store-config",JSON.stringify({groupMessages:this.groupMessages}))}async loadMessages(){this.isLoading=!0,this.loadError="";try{const t=await this.callService("messages_store","get_messages");if(!t||!1===t.status)throw new Error((null==t?void 0:t.message)||"Unable to load messages.");this.allMessages=this.processMessages(t.data),this.filterMessages()}catch(t){this.loadError=t instanceof Error?t.message:"Unable to load messages.",this.allMessages=[],this.messages=[]}finally{this.isLoading=!1}}processMessages(t){let e=[];return Array.isArray(t)&&t.forEach((t=>{Array.isArray(t.message)&&(this.groupMessages?e.push({slug:t.slug,message:t.message[0],originalMessage:t.message,tags:t.tags||[],favorite:!!t.favorite}):t.message.forEach(((s,i)=>{e.push({slug:t.slug,message:s.trim(),originalMessage:t.message,messageIndex:i,tags:t.tags||[],favorite:!!t.favorite})})))})),e}sortMessages(){this.messages.sort(((t,e)=>{const s=t.slug.localeCompare(e.slug);return"asc"===this.sortOrder?s:-s}))}toggleSortOrder(){this.sortOrder="asc"===this.sortOrder?"desc":"asc",this.sortMessages()}toggleGroupMessages(){this.groupMessages=!this.groupMessages,this.saveConfig(),this.loadMessages()}async callService(t,s,i={},n={}){var a;const o=await e(this.hass,t,s,i,n);if("error"!=(null==o?void 0:o.status))return o;this.showNotification((null===(a=null==o?void 0:o.error)||void 0===a?void 0:a.message)||"Unknown error","error")}handleSearch(t){this.searchTerm=t.target.value,this.filterMessages()}filterMessages(){const t=this.searchTerm.toLowerCase();this.messages=this.allMessages.filter((e=>(!t||e.slug.toLowerCase().includes(t)||e.message.toLowerCase().includes(t)||(e.tags||[]).some((e=>e.toLowerCase().includes(t)))||this.groupMessages&&e.originalMessage.some((e=>e.toLowerCase().includes(t))))&&(!this.selectedTag||(e.tags||[]).includes(this.selectedTag))&&(!this.favoriteOnly||e.favorite))),this.sortMessages()}editModal(t){var e;t=t.detail,this.message=Object.assign(Object.assign({},t),{initialFocusIndex:this.groupMessages?0:null!==(e=t.messageIndex)&&void 0!==e?e:0}),this.editingMessage=!0,this.isModalOpen=!0}addModal(){this.message={slug:"",message:"",originalMessage:[""],tags:[],favorite:!1},this.editingMessage=!1,this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}async openAISettings(){this.isAISettingsOpen=!0,this.aiSettingsLoading=!0,this.aiSettingsError="";const t=await this.callService("messages_store","get_ai_task_settings");if(this.aiSettingsLoading=!1,!(null==t?void 0:t.status))return void(this.aiSettingsError=(null==t?void 0:t.message)||"Unable to load AI settings.");this.aiTaskEntityId=t.ai_task_entity_id||"",this.aiInstructions=t.instructions||"",this.aiTaskEntities=t.entities||[],await this.updateComplete;const e=this.querySelector("#ai-task-entity");e&&(e.value=this.aiTaskEntityId)}closeAISettings(){this.isAISettingsOpen=!1,this.aiSettingsError=""}closeFiltersDialog(){this.filtersDialogOpen=!1}async saveAISettings(t){t.preventDefault(),this.aiSettingsSaving=!0,this.aiSettingsError="";const e=await this.callService("messages_store","set_ai_task_settings",{ai_task_entity_id:this.aiTaskEntityId||null,instructions:this.aiInstructions});this.aiSettingsSaving=!1,(null==e?void 0:e.status)?(this.showNotification(e.message||"AI settings saved.","success"),this.closeAISettings()):this.aiSettingsError=(null==e?void 0:e.message)||"Unable to save AI settings."}async saveMessage(t){const{slug:e,messages:s,service:i,tags:n=[],favorite:a=!1}=t.detail,o=await this.callService("messages_store",i,{slug:e,message:s,tags:n,favorite:a});this.showNotification((null==o?void 0:o.message)||"Unable to save the message.",(null==o?void 0:o.status)?"success":"error"),(null==o?void 0:o.status)&&(this.closeModal(),await this.loadMessages(),this.filterMessages())}get availableTags(){return[...new Set(this.allMessages.reduce(((t,e)=>t.concat(e.tags||[])),[]))].sort()}async exportCollection(t){this.exportMenuOpen=!1;const e=await this.callService("messages_store","export_messages",{format:t});if(!(null==e?void 0:e.status))return void this.showNotification((null==e?void 0:e.message)||"Unable to export the collection.","error");const s=new Blob([e.content],{type:"json"===t?"application/json":"text/yaml"}),i=document.createElement("a");i.href=URL.createObjectURL(s),i.download=`messages-store.${t}`,i.click(),URL.revokeObjectURL(i.href)}async importCollection(){const t=await this.callService("messages_store","import_messages",{content:this.importContent,format:this.importFormat});(null==t?void 0:t.status)?(this.showNotification(`Imported ${t.imported.length}; skipped existing: ${t.skipped.join(", ")||"none"}; invalid ${t.invalid_count}.`,"success"),this.importDialogOpen=!1,this.importContent="",await this.loadMessages()):this.showNotification((null==t?void 0:t.message)||"Unable to import the collection.","error")}async duplicateSlug(t){const e=t.detail;let s=`${e.slug}_copy`,i=2;for(;this.allMessages.some((t=>t.slug===s));)s=`${e.slug}_copy_${i++}`;this.message={slug:s,message:e.message,originalMessage:[...e.originalMessage],tags:[...e.tags||[]],favorite:!1},this.editingMessage=!1,this.isModalOpen=!0}async deleteMessage(t){const e=t.detail,s=await this.callService("messages_store","delete_message",{slug:e});this.showNotification((null==s?void 0:s.message)||"Unable to delete the message.",(null==s?void 0:s.status)?"success":"error"),(null==s?void 0:s.status)&&(await this.loadMessages(),this.filterMessages())}requestDelete(t){this.pendingDelete=t.detail}cancelDelete(){this.pendingDelete=null}async confirmDelete(){const t=this.pendingDelete;if(t)if(this.pendingDelete=null,t.removeSingleMessage){const e=t.originalMessage.filter(((e,s)=>s!==t.messageIndex));await this.saveMessage({detail:{slug:t.slug,messages:e,service:"edit_message"}})}else await this.deleteMessage({detail:t.slug})}showNotification(t,e){this.notification={message:t,type:e},setTimeout((()=>this.notification=null),1e4)}render(){return R`
			<div class="ms-page" @click=${()=>{this.exportMenuOpen&&(this.exportMenuOpen=!1)}}>
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
					<button class="ms-filter-chip ${this.selectedTag||this.favoriteOnly?"is-active":""}" aria-haspopup="dialog" aria-expanded=${this.filtersDialogOpen} @click=${()=>this.filtersDialogOpen=!0}>
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10m-7 6h4" /></svg>
						<span>Filters</span>
						${this.selectedTag||this.favoriteOnly?R`<span class="ms-filter-chip-count">${Number(!!this.selectedTag)+Number(this.favoriteOnly)}</span>`:""}
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
						<div class="ms-export-menu" @click=${t=>t.stopPropagation()}>
							<button class="ms-button ms-button-secondary" aria-label="Export messages" title="Export messages" aria-haspopup="menu" aria-expanded=${this.exportMenuOpen} @click=${()=>this.exportMenuOpen=!this.exportMenuOpen}>
								<svg class="ms-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M5 16v4h14v-4"/></svg><svg class="ms-action-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>
							</button>
							${this.exportMenuOpen?R`<div class="ms-export-dropdown" role="menu"><button role="menuitem" @click=${()=>this.exportCollection("json")}>JSON (.json)</button><button role="menuitem" @click=${()=>this.exportCollection("yaml")}>YAML (.yaml)</button></div>`:""}
						</div>
						<button class="ms-button ms-button-secondary ms-import-button" aria-label="Import collection" title="Import collection" @click=${()=>this.importDialogOpen=!0}><svg class="ms-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m0 0 4 4m-4-4L8 8"/><path d="M5 14v6h14v-6"/></svg></button>
					</div>
				</section>
				${this.filtersDialogOpen?R`<div class="ms-dialog-backdrop" @click=${t=>{t.target===t.currentTarget&&this.closeFiltersDialog()}}><section class="ms-dialog ms-filter-dialog" role="dialog" aria-modal="true" aria-labelledby="filters-title"><header class="ms-dialog-header"><div class="ms-dialog-heading"><h2 id="filters-title">Filters</h2><p>Choose how to group and filter messages.</p></div><button class="ms-icon-button ms-dialog-close" aria-label="Close filters" title="Close filters" @click=${this.closeFiltersDialog}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></header><div class="ms-dialog-body"><label class="ms-field"><span class="ms-field-label">Group by</span><select class="ms-input" aria-label="Group by" .value=${this.groupMessages?"slug":"none"} @change=${t=>{this.groupMessages="slug"===t.target.value,this.saveConfig(),this.loadMessages()}}><option value="slug">Slug</option><option value="none">None</option></select></label><label class="ms-field"><span class="ms-field-label">Tags</span><select class="ms-input" aria-label="Filter by tag" .value=${this.selectedTag} @change=${t=>{this.selectedTag=t.target.value,this.filterMessages()}}><option value="">All tags</option>${this.availableTags.map((t=>R`<option value=${t}>${t}</option>`))}</select></label><label class="ms-filter-favorite ms-filter-dialog-favorite"><input type="checkbox" .checked=${this.favoriteOnly} @change=${t=>{this.favoriteOnly=t.target.checked,this.filterMessages()}} /><span>Favorites only</span></label></div><footer class="ms-dialog-footer"><button class="ms-button ms-button-secondary" @click=${this.closeFiltersDialog}>Cancel</button><button class="ms-button ms-button-primary" @click=${this.closeFiltersDialog}>Show results</button></footer></section></div>`:""}

				${this.isLoading?R`<div class="ms-state-card" role="status">
							<span class="ms-spinner" aria-hidden="true"></span
							><span>Loading messages…</span>
						</div>`:this.loadError?R`<section
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
							</section>`:this.messages.length?R`<messages-store-list
									.hass=${this.hass}
									.messages=${this.messages}
									.groupMessages=${this.groupMessages}
									@edit=${this.editModal}
								@confirm-delete=${this.requestDelete}
								@duplicate=${this.duplicateSlug}
								@favorite=${async t=>{const e=t.detail,s=await this.callService("messages_store","update_message_metadata",{slug:e.slug,tags:e.tags||[],favorite:!e.favorite});(null==s?void 0:s.status)&&await this.loadMessages()}}
									@save=${this.saveMessage}
									@sort=${this.toggleSortOrder}
									.sortOrder=${this.sortOrder}
								></messages-store-list>`:this.searchTerm?R`<section class="ms-state-card">
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
											@click=${()=>{this.searchTerm="",this.filterMessages()}}
										>
											Clear search
										</button>
									</section>`:R`<section class="ms-state-card">
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
				${this.isModalOpen?R`
							<messages-store-modal
								.hass=${this.hass}
								.messages=${this.allMessages}
								.initialSlug=${this.message.slug}
								.isEditing=${this.editingMessage}
								.initialMessages=${this.message.originalMessage}
								.initialTags=${this.message.tags||[]}
								.initialFavorite=${this.message.favorite||!1}
								.initialFocusIndex=${this.message.initialFocusIndex||0}
								@save=${this.saveMessage}
								@close=${this.closeModal}
							></messages-store-modal>
						`:""}
				${this.isAISettingsOpen?R`<div
							class="ms-dialog-backdrop"
							@click=${t=>{t.target===t.currentTarget&&this.closeAISettings()}}
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
										${this.aiSettingsError?R`<p class="ms-form-error" role="alert">${this.aiSettingsError}</p>`:""}
										${this.aiSettingsLoading?R`<div class="ms-state-card" role="status">Loading AI settings…</div>`:R`
											<div class="ms-field">
												<label for="ai-task-entity">AI Task entity</label>
												<select id="ai-task-entity" class="ms-input" .value=${this.aiTaskEntityId} @change=${t=>{this.aiTaskEntityId=t.target.value}}>
													<option value="" ?selected=${!this.aiTaskEntityId}>No AI Task selected</option>
													${this.aiTaskEntities.map((t=>R`<option value=${t.entity_id} ?selected=${t.entity_id===this.aiTaskEntityId}>${t.name} (${t.entity_id})</option>`))}
												</select>
												<p class="ms-ai-hint">Clearing the selection also disables AI generation in the message editor.</p>
											</div>
											<div class="ms-field">
												<label for="ai-general-prompt">General prompt</label>
												<textarea id="ai-general-prompt" class="ms-textarea" rows="8" .value=${this.aiInstructions} @input=${t=>{this.aiInstructions=t.target.value}}></textarea>
												<p class="ms-ai-hint">This prompt is added to the specific instructions entered each time you generate messages.</p>
											</div>
										`}
									</div>
									<footer class="ms-dialog-footer">
										<button type="button" class="ms-button ms-button-secondary" @click=${this.closeAISettings}>Cancel</button>
										<button type="submit" class="ms-button ms-button-primary" ?disabled=${this.aiSettingsLoading||this.aiSettingsSaving}>${this.aiSettingsSaving?"Saving…":"Save settings"}</button>
									</footer>
								</form>
							</section>
						</div>`:""}
				${this.importDialogOpen?R`<div class="ms-dialog-backdrop" @click=${t=>{t.target===t.currentTarget&&(this.importDialogOpen=!1)}}><section class="ms-dialog" role="dialog" aria-modal="true" aria-labelledby="import-title"><header class="ms-dialog-header"><div class="ms-dialog-heading"><h2 id="import-title">Import collection</h2><p>Existing slugs are skipped and reported.</p></div><button class="ms-icon-button ms-dialog-close" aria-label="Close" title="Close" @click=${()=>this.importDialogOpen=!1}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button></header><div class="ms-dialog-body"><label class="ms-field">Choose JSON or YAML file<input class="ms-input" type="file" accept=".json,.yaml,.yml,application/json,text/yaml" @change=${async t=>{var e;const s=null===(e=t.target.files)||void 0===e?void 0:e[0];s&&(this.importContent=await s.text(),this.importFormat=/\.ya?ml$/i.test(s.name)?"yaml":"json")}} /></label><label class="ms-field">Format<select class="ms-input" .value=${this.importFormat} @change=${t=>this.importFormat=t.target.value}><option value="json">JSON</option><option value="yaml">YAML</option></select></label><label class="ms-field">Collection<textarea class="ms-textarea" rows="12" .value=${this.importContent} @input=${t=>this.importContent=t.target.value} placeholder="Paste JSON or YAML"></textarea></label></div><footer class="ms-dialog-footer"><button class="ms-button ms-button-secondary" @click=${()=>this.importDialogOpen=!1}>Cancel</button><button class="ms-button ms-button-primary" @click=${this.importCollection} ?disabled=${!this.importContent.trim()}>Import</button></footer></section></div>`:""}
				${this.notification?R`
							<messages-store-notification
								.message=${this.notification.message}
								.type=${this.notification.type}
								@close=${()=>this.notification=null}
							></messages-store-notification>
						`:""}
				${this.pendingDelete?R`<div
							class="ms-dialog-backdrop ms-confirm-backdrop"
							@click=${t=>{t.target===t.currentTarget&&this.cancelDelete()}}
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
									${this.pendingDelete.removeSingleMessage?"Remove this message?":"Delete this slug?"}
								</h2>
								<p id="ms-delete-description">
									${this.pendingDelete.removeSingleMessage?R`This message will be removed from
											<strong>${this.pendingDelete.slug}</strong>.`:R`<strong>${this.pendingDelete.slug}</strong>
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
										${this.pendingDelete.removeSingleMessage?"Remove message":"Delete slug"}
									</button>
								</footer>
							</section>
						</div>`:""}
			</div>
		`}};t([ct()],vt.prototype,"allMessages",void 0),t([ct()],vt.prototype,"messages",void 0),t([ct()],vt.prototype,"message",void 0),t([ct()],vt.prototype,"isModalOpen",void 0),t([ct()],vt.prototype,"editingMessage",void 0),t([ct()],vt.prototype,"notification",void 0),t([ct()],vt.prototype,"searchTerm",void 0),t([ct()],vt.prototype,"sortOrder",void 0),t([ct()],vt.prototype,"groupMessages",void 0),t([ct()],vt.prototype,"isLoading",void 0),t([ct()],vt.prototype,"loadError",void 0),t([ct()],vt.prototype,"pendingDelete",void 0),t([ct()],vt.prototype,"isAISettingsOpen",void 0),t([ct()],vt.prototype,"aiSettingsLoading",void 0),t([ct()],vt.prototype,"aiSettingsSaving",void 0),t([ct()],vt.prototype,"aiSettingsError",void 0),t([ct()],vt.prototype,"aiTaskEntityId",void 0),t([ct()],vt.prototype,"aiInstructions",void 0),t([ct()],vt.prototype,"aiTaskEntities",void 0),t([ct()],vt.prototype,"favoriteOnly",void 0),t([ct()],vt.prototype,"selectedTag",void 0),t([ct()],vt.prototype,"filtersDialogOpen",void 0),t([ct()],vt.prototype,"importDialogOpen",void 0),t([ct()],vt.prototype,"importContent",void 0),t([ct()],vt.prototype,"importFormat",void 0),t([ct()],vt.prototype,"exportMenuOpen",void 0),t([dt({type:Object})],vt.prototype,"hass",void 0),vt=t([ot("messages-store")],vt);export{vt as MessagesStore};
