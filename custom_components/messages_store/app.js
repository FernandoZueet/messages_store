function t(t,e,s,n){var i,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(o=(a<3?i(o):a>3?i(e,s,o):i(e,s))||o);return a>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;!function(t,e){void 0===e&&(e={});var s=e.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===s&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}(':root {\n\t--ms-background: var(--primary-background-color, #f5f6f7);\n\t--ms-surface: var(--card-background-color, #ffffff);\n\t--ms-surface-muted: var(--secondary-background-color, #f1f3f4);\n\t--ms-text: var(--primary-text-color, #202124);\n\t--ms-text-muted: var(--secondary-text-color, #6b7075);\n\t--ms-divider: var(--divider-color, #d9dcdf);\n\t--ms-accent: var(--primary-color, #03a9f4);\n\t--ms-error: var(--error-color, #db4437);\n\t--ms-success: var(--success-color, #388e3c);\n\t--ms-radius: var(--ha-card-border-radius, 12px);\n\tcolor-scheme: light dark;\n}\n\n@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t--ms-background: var(--primary-background-color, #111111);\n\t\t--ms-surface: var(--card-background-color, #1c1c1c);\n\t\t--ms-surface-muted: var(--secondary-background-color, #282828);\n\t\t--ms-text: var(--primary-text-color, #f1f1f1);\n\t\t--ms-text-muted: var(--secondary-text-color, #a8a8a8);\n\t\t--ms-divider: var(--divider-color, #3b3b3b);\n\t}\n}\n\nhtml,\nbody {\n\tmin-height: 100%;\n\tmargin: 0;\n\tbackground: var(--ms-background);\n\tcolor: var(--ms-text);\n\tfont-family: var(\n\t\t--paper-font-body1_-_font-family,\n\t\tRoboto,\n\t\t"Noto Sans",\n\t\tsans-serif\n\t);\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbutton,\ninput,\ntextarea {\n\tfont: inherit;\n}\n\nbutton {\n\tcolor: inherit;\n}\n\n.ms-page {\n\tmin-height: 100vh;\n\tmax-width: 1440px;\n\tmargin: 0 auto;\n\tpadding: 28px clamp(16px, 3vw, 40px) 48px;\n\tbackground: var(--ms-background);\n\tcolor: var(--ms-text);\n}\n\n.ms-page-header {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 24px;\n\tmargin-bottom: 28px;\n}\n\n.ms-heading-copy h1 {\n\tmargin: 0;\n\tfont-size: 24px;\n\tfont-weight: 500;\n\tline-height: 1.3;\n}\n\n.ms-heading-copy p {\n\tmargin: 6px 0 0;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 14px;\n\tline-height: 1.5;\n}\n\n.ms-button {\n\tdisplay: inline-flex;\n\tmin-height: 40px;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 9px;\n\tpadding: 0 16px;\n\tborder: 1px solid transparent;\n\tborder-radius: 8px;\n\tfont-size: 14px;\n\tfont-weight: 600;\n\tline-height: 1.2;\n\twhite-space: nowrap;\n\tcursor: pointer;\n\ttransition:\n\t\tbackground-color 120ms ease,\n\t\tborder-color 120ms ease,\n\t\tfilter 120ms ease;\n}\n\n.ms-button:hover {\n\tfilter: brightness(0.94);\n}\n\n.ms-button:focus-visible,\n.ms-icon-button:focus-visible,\n.ms-sort-button:focus-visible,\n.ms-dialog-close:focus-visible {\n\toutline: 2px solid var(--ms-accent);\n\toutline-offset: 2px;\n}\n\n.ms-button svg,\n.ms-icon-button svg,\n.ms-dialog-close svg,\n.ms-search svg,\n.ms-state-icon svg,\n.ms-sort-button svg {\n\twidth: 20px;\n\theight: 20px;\n\tfill: none;\n\tstroke: currentColor;\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n\tstroke-width: 1.8;\n}\n\n.ms-button-primary {\n\tbackground: var(--ms-accent);\n\tcolor: var(--text-primary-color, #ffffff);\n}\n\n.ms-button-secondary {\n\tborder-color: var(--ms-divider);\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n}\n\n.ms-ai-trigger {\n\tborder-color: color-mix(in srgb, var(--ms-accent) 42%, var(--ms-divider));\n\tbackground: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface));\n\tcolor: var(--ms-accent);\n\tfont-weight: 600;\n}\n\n.ms-ai-trigger:hover {\n\tbackground: color-mix(in srgb, var(--ms-accent) 20%, var(--ms-surface));\n}\n\n.ms-ai-trigger svg {\n\tfill: currentColor;\n\tstroke: currentColor;\n\tstroke-width: 1.5;\n}\n\n.ms-button-danger {\n\tbackground: var(--ms-error);\n\tcolor: var(--text-primary-color, #ffffff);\n}\n\n.ms-toolbar {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 20px;\n\tmargin-bottom: 28px;\n}\n\n.ms-search {\n\tdisplay: flex;\n\tmin-width: 180px;\n\tmax-width: 680px;\n\tmin-height: 44px;\n\tflex: 1;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 0 13px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 8px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text-muted);\n\ttransition:\n\t\tborder-color 120ms ease,\n\t\tbox-shadow 120ms ease;\n}\n\n.ms-search:focus-within {\n\tborder-color: var(--ms-accent);\n\tbox-shadow: 0 0 0 1px var(--ms-accent);\n}\n\n.ms-search svg {\n\tflex: 0 0 auto;\n}\n\n.ms-search input {\n\twidth: 100%;\n\tmin-width: 0;\n\tborder: 0;\n\toutline: 0;\n\tbackground: transparent;\n\tcolor: var(--ms-text);\n\tfont-size: 14px;\n}\n\n.ms-search input::-moz-placeholder {\n\tcolor: var(--ms-text-muted);\n\topacity: 1;\n}\n\n.ms-search input::placeholder {\n\tcolor: var(--ms-text-muted);\n\topacity: 1;\n}\n\n.ms-group-toggle {\n\tdisplay: inline-flex;\n\tmin-height: 40px;\n\talign-items: center;\n\tgap: 10px;\n\tcolor: var(--ms-text);\n\tfont-size: 14px;\n\twhite-space: nowrap;\n\tcursor: pointer;\n}\n\n.ms-group-toggle input {\n\twidth: 18px;\n\theight: 18px;\n\tmargin: 0;\n\taccent-color: var(--ms-accent);\n}\n\n.ms-list-heading {\n\tdisplay: flex;\n\talign-items: baseline;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tmargin: 0 0 12px;\n}\n\n.ms-list-heading h2 {\n\tmargin: 0;\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.ms-count,\n.ms-row-meta {\n\tcolor: var(--ms-text-muted);\n\tfont-size: 13px;\n}\n\n.ms-table-wrap {\n\toverflow: visible;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ms-radius);\n\tbackground: var(--ms-surface);\n}\n\n.ms-table {\n\twidth: 100%;\n\tborder-collapse: collapse;\n\ttext-align: left;\n}\n\n.ms-table thead {\n\tbackground: var(--ms-surface-muted);\n}\n\n.ms-table thead th:first-child {\n\tborder-top-left-radius: var(--ms-radius);\n}\n\n.ms-table thead th:last-child {\n\tborder-top-right-radius: var(--ms-radius);\n}\n\n.ms-table th {\n\tpadding: 12px 18px;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 12px;\n\tfont-weight: 600;\n\tletter-spacing: 0.02em;\n}\n\n.ms-table td {\n\tpadding: 15px 18px;\n\tborder-top: 1px solid var(--ms-divider);\n\tfont-size: 14px;\n\tvertical-align: middle;\n}\n\n.ms-message-row:first-child td {\n\tborder-top: 0;\n}\n\n.ms-message-row:hover {\n\tbackground: color-mix(in srgb, var(--ms-surface-muted) 55%, transparent);\n}\n\n.ms-sort-button {\n\tdisplay: inline-flex;\n\talign-items: center;\n\tgap: 4px;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: transparent;\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\tcursor: pointer;\n}\n\n.ms-sort-button svg {\n\twidth: 16px;\n\theight: 16px;\n\ttransition: transform 120ms ease;\n}\n\n.ms-sort-button svg.is-desc {\n\ttransform: rotate(180deg);\n}\n\n.ms-slug {\n\tfont-weight: 600;\n\tword-break: break-word;\n}\n\n.ms-row-meta {\n\tmargin-top: 4px;\n}\n\n.ms-message-preview {\n\tmax-width: 840px;\n\tcolor: var(--ms-text);\n\tline-height: 1.55;\n\tword-break: break-word;\n}\n\n.ms-message-preview > div + div {\n\tmargin-top: 4px;\n}\n\n.ms-message-hover {\n\tposition: relative;\n\twidth: -moz-fit-content;\n\twidth: fit-content;\n\tmax-width: 100%;\n}\n\n.ms-message-hover.has-state-tooltip {\n\tcursor: help;\n}\n\n.ms-message-hover:hover,\n.ms-message-hover:focus {\n\tz-index: 25;\n}\n\n.ms-message-tooltip {\n\tposition: absolute;\n\ttop: calc(100% + 8px);\n\tleft: 0;\n\tz-index: 30;\n\tdisplay: flex;\n\twidth: -moz-max-content;\n\twidth: max-content;\n\tmax-width: min(380px, calc(100vw - 40px));\n\tflex-direction: column;\n\tgap: 6px;\n\tpadding: 10px 12px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 8px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 4px 14px rgb(0 0 0 / 22%);\n\tfont-size: 13px;\n\tline-height: 1.45;\n\twhite-space: normal;\n\tword-break: break-word;\n\topacity: 0;\n\tvisibility: hidden;\n\ttransform: translateY(-3px);\n\ttransition:\n\t\topacity 120ms ease,\n\t\ttransform 120ms ease,\n\t\tvisibility 120ms ease;\n\tpointer-events: none;\n}\n\n.ms-message-tooltip strong {\n\tcolor: var(--ms-text-muted);\n\tfont-size: 12px;\n\tfont-weight: 600;\n}\n\n.ms-message-hover:hover .ms-message-tooltip,\n.ms-message-hover:focus .ms-message-tooltip {\n\topacity: 1;\n\tvisibility: visible;\n\ttransform: translateY(0);\n}\n\n.ms-message-token {\n\tdisplay: inline-block;\n\tpadding: 1px 6px;\n\tborder-radius: 5px;\n\tbackground: var(--ms-surface-muted);\n\tcolor: var(--ms-text);\n\tfont-family: var(--paper-font-code1_-_font-family, monospace);\n\tfont-size: 0.92em;\n}\n\n.ms-row-actions {\n\twidth: 1%;\n\twhite-space: nowrap;\n}\n\n.ms-actions-heading {\n\twidth: 1%;\n}\n\n.ms-row-actions > * + * {\n\tmargin-left: 4px;\n}\n\n.ms-icon-button,\n.ms-dialog-close {\n\tdisplay: inline-grid;\n\twidth: 38px;\n\theight: 38px;\n\tplace-items: center;\n\tpadding: 0;\n\tborder: 0;\n\tborder-radius: 50%;\n\tbackground: transparent;\n\tcolor: var(--ms-text-muted);\n\tcursor: pointer;\n}\n\n.ms-tooltip-trigger {\n\tposition: relative;\n}\n\n.ms-tooltip-trigger::after {\n\tposition: absolute;\n\ttop: calc(100% + 7px);\n\tleft: 50%;\n\tz-index: 40;\n\twidth: -moz-max-content;\n\twidth: max-content;\n\tmax-width: 220px;\n\tpadding: 6px 9px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 6px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 3px 10px rgb(0 0 0 / 18%);\n\tcontent: attr(data-tooltip);\n\tfont-size: 12px;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\twhite-space: nowrap;\n\topacity: 0;\n\tvisibility: hidden;\n\ttransform: translate(-50%, -2px);\n\ttransition:\n\t\topacity 120ms ease,\n\t\ttransform 120ms ease,\n\t\tvisibility 120ms ease;\n\tpointer-events: none;\n}\n\n.ms-tooltip-trigger:hover::after,\n.ms-tooltip-trigger:focus-visible::after {\n\topacity: 1;\n\tvisibility: visible;\n\ttransform: translate(-50%, 0);\n}\n\n.ms-icon-button:hover,\n.ms-dialog-close:hover {\n\tbackground: var(--ms-surface-muted);\n\tcolor: var(--ms-text);\n}\n\n.ms-icon-button svg,\n.ms-dialog-close svg {\n\twidth: 19px;\n\theight: 19px;\n}\n\n.ms-icon-danger:hover {\n\tcolor: var(--ms-error);\n}\n\n.ms-state-card {\n\tdisplay: flex;\n\tmin-height: 260px;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n\tpadding: 32px 20px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ms-radius);\n\tbackground: var(--ms-surface);\n\ttext-align: center;\n}\n\n.ms-state-card h2 {\n\tmargin: 2px 0 0;\n\tfont-size: 18px;\n\tfont-weight: 500;\n}\n\n.ms-state-card p {\n\tmax-width: 440px;\n\tmargin: 0 0 8px;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 14px;\n\tline-height: 1.5;\n}\n\n.ms-state-icon {\n\tdisplay: grid;\n\twidth: 52px;\n\theight: 52px;\n\tplace-items: center;\n\tmargin-bottom: 4px;\n\tborder-radius: 50%;\n\tbackground: var(--ms-surface-muted);\n\tcolor: var(--ms-text-muted);\n}\n\n.ms-state-icon svg {\n\twidth: 26px;\n\theight: 26px;\n}\n\n.ms-state-error .ms-state-icon {\n\tbackground: color-mix(in srgb, var(--ms-error) 12%, var(--ms-surface));\n\tcolor: var(--ms-error);\n\tfont-size: 24px;\n\tfont-weight: 600;\n}\n\n.ms-spinner {\n\twidth: 22px;\n\theight: 22px;\n\tborder: 2px solid var(--ms-divider);\n\tborder-top-color: var(--ms-accent);\n\tborder-radius: 50%;\n\tanimation: ms-spin 800ms linear infinite;\n}\n\n@keyframes ms-spin {\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.ms-dialog-backdrop {\n\tposition: fixed;\n\tinset: 0;\n\tz-index: 1000;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 24px;\n\tbackground: rgb(0 0 0 / 48%);\n\t-webkit-backdrop-filter: blur(2px);\n\t        backdrop-filter: blur(2px);\n}\n\n.ms-dialog-backdrop.ms-dialog-nested {\n\tz-index: 1010;\n}\n\n.ms-confirm-backdrop {\n\tz-index: 1020;\n}\n\n.ms-confirm-dialog {\n\twidth: min(100%, 440px);\n\tpadding: 24px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ms-radius);\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 16px 48px rgb(0 0 0 / 28%);\n}\n\n.ms-confirm-icon {\n\tdisplay: grid;\n\twidth: 42px;\n\theight: 42px;\n\tplace-items: center;\n\tmargin-bottom: 16px;\n\tborder-radius: 50%;\n\tbackground: color-mix(in srgb, var(--ms-error) 12%, var(--ms-surface));\n\tcolor: var(--ms-error);\n}\n\n.ms-confirm-icon svg {\n\twidth: 22px;\n\theight: 22px;\n\tfill: none;\n\tstroke: currentColor;\n\tstroke-linecap: round;\n\tstroke-linejoin: round;\n\tstroke-width: 1.8;\n}\n\n.ms-confirm-dialog h2 {\n\tmargin: 0;\n\tfont-size: 20px;\n\tfont-weight: 500;\n}\n\n.ms-confirm-dialog p {\n\tmargin: 10px 0 24px;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 14px;\n\tline-height: 1.5;\n}\n\n.ms-confirm-dialog p strong {\n\tcolor: var(--ms-text);\n\tfont-weight: 600;\n}\n\n.ms-confirm-actions {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tgap: 10px;\n}\n\n.ms-dialog {\n\tdisplay: flex;\n\twidth: min(100%, 620px);\n\tmax-height: min(90vh, 900px);\n\tmax-height: min(90dvh, 900px);\n\tflex-direction: column;\n\toverflow: hidden;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: var(--ms-radius);\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 16px 48px rgb(0 0 0 / 28%);\n}\n\n.ms-dialog-header {\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: space-between;\n\tgap: 16px;\n\tpadding: 22px 24px 18px;\n\tborder-bottom: 1px solid var(--ms-divider);\n}\n\n.ms-dialog-heading h2 {\n\tmargin: 0;\n\tfont-size: 20px;\n\tfont-weight: 500;\n}\n\n.ms-dialog-heading p {\n\tmargin: 5px 0 0;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 13px;\n\tline-height: 1.45;\n}\n\n.ms-dialog-close {\n\tflex: 0 0 auto;\n\tmargin: -6px -8px 0 0;\n}\n\n.ms-dialog-body {\n\tmin-height: 0;\n\toverflow-y: auto;\n\tpadding: 22px 24px;\n}\n\n.ms-field {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7px;\n\tmargin-bottom: 20px;\n}\n\n.ms-field > label,\n.ms-field-label {\n\tcolor: var(--ms-text);\n\tfont-size: 14px;\n\tfont-weight: 500;\n}\n\n.ms-required {\n\tcolor: var(--ms-error);\n}\n\n.ms-input,\n.ms-textarea {\n\twidth: 100%;\n\tmin-height: 42px;\n\tpadding: 10px 12px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 7px;\n\toutline: 0;\n\tbackground: var(--ms-background);\n\tcolor: var(--ms-text);\n\tfont-size: 14px;\n\tline-height: 1.45;\n\ttransition:\n\t\tborder-color 120ms ease,\n\t\tbox-shadow 120ms ease;\n}\n\n.ms-textarea {\n\tmin-height: 84px;\n\tresize: vertical;\n}\n\n.ms-input:focus,\n.ms-textarea:focus {\n\tborder-color: var(--ms-accent);\n\tbox-shadow: 0 0 0 1px var(--ms-accent);\n}\n\n.ms-input:disabled {\n\tcolor: var(--ms-text-muted);\n\topacity: 0.8;\n}\n\n.ms-message-editor {\n\tmargin-top: 10px;\n\tpadding: 12px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-radius: 9px;\n\tbackground: var(--ms-surface);\n}\n\n.ms-message-editor-top {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tgap: 12px;\n\tmargin-bottom: 8px;\n}\n\n.ms-message-editor-top span {\n\tcolor: var(--ms-text-muted);\n\tfont-size: 12px;\n\tfont-weight: 600;\n}\n\n.ms-message-editor .ms-textarea {\n\tmin-height: 76px;\n}\n\n.ms-inline-button {\n\tmin-height: 34px;\n\tpadding: 0 10px;\n\tborder: 0;\n\tborder-radius: 7px;\n\tbackground: transparent;\n\tcolor: var(--ms-accent);\n\tfont-size: 13px;\n\tfont-weight: 600;\n\tcursor: pointer;\n}\n\n.ms-inline-button:hover {\n\tbackground: var(--ms-surface-muted);\n}\n\n.ms-inline-button-danger {\n\tcolor: var(--ms-error);\n}\n\n.ms-preview {\n\tmargin-top: 10px;\n\tpadding: 10px 12px;\n\tborder-left: 3px solid var(--ms-accent);\n\tborder-radius: 0 6px 6px 0;\n\tbackground: var(--ms-surface-muted);\n\tcolor: var(--ms-text-muted);\n\tfont-size: 13px;\n\tline-height: 1.5;\n\tword-break: break-word;\n}\n\n.ms-preview strong {\n\tmargin-right: 6px;\n\tcolor: var(--ms-text);\n}\n\n.ms-dialog-footer {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tgap: 10px;\n\tpadding: 16px 24px;\n\tborder-top: 1px solid var(--ms-divider);\n\tbackground: var(--ms-surface);\n}\n\n.ms-ai-form .ms-dialog-body {\n\tpadding-bottom: 8px;\n}\n\n.ms-ai-hint {\n\tmargin: 2px 0 0;\n\tcolor: var(--ms-text-muted);\n\tfont-size: 12px;\n\tline-height: 1.5;\n}\n\n.ms-form-error {\n\tmargin: 0 0 16px;\n\tpadding: 10px 12px;\n\tborder-radius: 7px;\n\tbackground: color-mix(in srgb, var(--ms-error) 12%, var(--ms-surface));\n\tcolor: var(--ms-error);\n\tfont-size: 13px;\n\tline-height: 1.45;\n}\n\n.ms-toast {\n\tposition: fixed;\n\tright: 24px;\n\tbottom: 24px;\n\tz-index: 1100;\n\tdisplay: flex;\n\tmin-width: min(320px, calc(100vw - 32px));\n\tmax-width: min(520px, calc(100vw - 32px));\n\talign-items: center;\n\tgap: 12px;\n\tpadding: 12px 12px 12px 16px;\n\tborder: 1px solid var(--ms-divider);\n\tborder-left: 4px solid var(--ms-success);\n\tborder-radius: 9px;\n\tbackground: var(--ms-surface);\n\tcolor: var(--ms-text);\n\tbox-shadow: 0 5px 20px rgb(0 0 0 / 18%);\n\tfont-size: 14px;\n}\n\n.ms-toast-error {\n\tborder-left-color: var(--ms-error);\n}\n\n.ms-toast-message {\n\tflex: 1;\n\tline-height: 1.4;\n}\n\n.sr-only {\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tpadding: 0;\n\tmargin: -1px;\n\toverflow: hidden;\n\tclip: rect(0, 0, 0, 0);\n\twhite-space: nowrap;\n\tborder: 0;\n}\n\n@media (max-width: 600px) {\n\t.ms-page {\n\t\tpadding: 22px 16px 36px;\n\t}\n\n\t.ms-page-header {\n\t\talign-items: flex-start;\n\t\tflex-direction: column;\n\t\tgap: 16px;\n\t\tmargin-bottom: 22px;\n\t}\n\n\t.ms-page-header > .ms-button {\n\t\talign-self: stretch;\n\t}\n\n\t.ms-toolbar {\n\t\talign-items: stretch;\n\t\tflex-direction: column;\n\t\tgap: 8px;\n\t\tmargin-bottom: 22px;\n\t}\n\n\t.ms-search {\n\t\tmax-width: none;\n\t}\n\n\t.ms-group-toggle {\n\t\talign-self: flex-start;\n\t}\n\n\t.ms-table-wrap {\n\t\tborder: 0;\n\t\tbackground: transparent;\n\t}\n\n\t.ms-table,\n\t.ms-table tbody {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t}\n\n\t.ms-table thead {\n\t\tposition: absolute;\n\t\twidth: 1px;\n\t\theight: 1px;\n\t\tpadding: 0;\n\t\tmargin: -1px;\n\t\toverflow: hidden;\n\t\tclip: rect(0, 0, 0, 0);\n\t\twhite-space: nowrap;\n\t\tborder: 0;\n\t}\n\n\t.ms-table tbody tr {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: minmax(0, 1fr) auto;\n\t\tgap: 10px 14px;\n\t\tmargin-bottom: 10px;\n\t\tpadding: 14px;\n\t\tborder: 1px solid var(--ms-divider);\n\t\tborder-radius: 10px;\n\t\tbackground: var(--ms-surface);\n\t}\n\n\t.ms-table td {\n\t\tpadding: 0;\n\t\tborder: 0;\n\t}\n\n\t.ms-table td[data-label="Message"] {\n\t\tgrid-column: 1 / -1;\n\t}\n\n\t.ms-row-actions {\n\t\tdisplay: flex;\n\t\twidth: auto;\n\t\talign-items: flex-start;\n\t\tjustify-content: flex-end;\n\t}\n\n\t.ms-dialog-backdrop {\n\t\talign-items: flex-end;\n\t\tpadding: 0;\n\t}\n\n\t.ms-confirm-backdrop {\n\t\talign-items: flex-end;\n\t}\n\n\t.ms-confirm-dialog {\n\t\twidth: 100%;\n\t\tpadding: 22px 18px calc(18px + env(safe-area-inset-bottom, 0px));\n\t\tborder-radius: 16px 16px 0 0;\n\t}\n\n\t.ms-confirm-actions .ms-button {\n\t\tflex: 1;\n\t}\n\n\t.ms-dialog {\n\t\twidth: 100%;\n\t\tmax-height: 92vh;\n\t\tmax-height: 92dvh;\n\t\tborder-radius: 16px 16px 0 0;\n\t}\n\n\t.ms-dialog-header {\n\t\tpadding: 18px 18px 15px;\n\t}\n\n\t.ms-dialog-body {\n\t\tpadding: 18px;\n\t}\n\n\t.ms-dialog-footer {\n\t\tpadding: 14px 18px calc(14px + env(safe-area-inset-bottom, 0px));\n\t}\n\n\t.ms-dialog-footer .ms-button {\n\t\tflex: 1;\n\t}\n\n\t.ms-toast {\n\t\tright: 16px;\n\t\tbottom: calc(16px + env(safe-area-inset-bottom, 0px));\n\t}\n}\n\n@media (prefers-reduced-motion: reduce) {\n\t*,\n\t*::before,\n\t*::after {\n\t\tanimation-duration: 0.01ms !important;\n\t\tanimation-iteration-count: 1 !important;\n\t\tscroll-behavior: auto !important;\n\t\ttransition-duration: 0.01ms !important;\n\t}\n}\n');var e=async(t,e,s,n={},i={})=>{try{return(await t.connection.sendMessagePromise({type:"execute_script",sequence:[{service:`${e}.${s}`,data:n,target:i,response_variable:"service_result"},{stop:"done",response_variable:"service_result"}]})).response}catch(t){return{status:"error",error:t}}};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=window,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&a.set(e,t))}return t}toString(){return this.cssText}};const r=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",m=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},g=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g},v="finalized";let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const n=this._$Ep(s,e);void 0!==n&&(this._$Ev.set(n,s),t.push(n))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const n=document.createElement("style"),i=s.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=e.cssText,t.appendChild(n)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=u){var n;const i=this.constructor._$Ep(t,s);if(void 0!==i&&!0===s.reflect){const a=(void 0!==(null===(n=s.converter)||void 0===n?void 0:n.toAttribute)?s.converter:p).toAttribute(e,s.type);this._$El=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$El=null}}_$AK(t,e){var s;const n=this.constructor,i=n._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=n.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this._$El=i,this[i]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let n=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;f[v]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:f}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const x=window,y=x.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,k="?"+_,M=`<${k}>`,A=document,S=()=>A.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,O="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,L=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,D=/"/g,R=/^(?:script|style|textarea|title)$/i,P=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),H=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),I=new WeakMap,B=A.createTreeWalker(A,129,null,!1);function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,n=[];let i,a=2===e?"<svg>":"",o=T;for(let e=0;e<s;e++){const s=t[e];let r,l,d=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===T?"!--"===l[1]?o=z:void 0!==l[1]?o=N:void 0!==l[2]?(R.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=L):void 0!==l[3]&&(o=L):o===L?">"===l[0]?(o=null!=i?i:T,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?L:'"'===l[3]?D:U):o===D||o===U?o=L:o===z||o===N?o=T:(o=L,i=void 0);const h=o===L&&t[e+1].startsWith("/>")?" ":"";a+=o===T?s+M:d>=0?(n.push(r),s.slice(0,d)+w+s.slice(d)+_+h):s+_+(-2===d?(n.push(void 0),e):h)}return[q(t,a+(t[s]||"<?>")+(2===e?"</svg>":"")),n]};class G{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let i=0,a=0;const o=t.length-1,r=this.parts,[l,d]=K(t,e);if(this.el=G.createElement(l,s),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=B.nextNode())&&r.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(w)||e.startsWith(_)){const s=d[a++];if(t.push(e),void 0!==s){const t=n.getAttribute(s.toLowerCase()+w).split(_),e=/([.?@])?(.*)/.exec(s);r.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Q:"@"===e[1]?X:Z})}else r.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(R.test(n.tagName)){const t=n.textContent.split(_),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)n.append(t[s],S()),B.nextNode(),r.push({type:2,index:++i});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===k)r.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(_,t+1));)r.push({type:7,index:i}),t+=_.length-1}i++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function F(t,e,s=t,n){var i,a,o,r;if(e===H)return e;let l=void 0!==n?null===(i=s._$Co)||void 0===i?void 0:i[n]:s._$Cl;const d=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,s,n)),void 0!==n?(null!==(o=(r=s)._$Co)&&void 0!==o?o:r._$Co=[])[n]=l:s._$Cl=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,n)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(s,!0);B.currentNode=i;let a=B.nextNode(),o=0,r=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new W(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new tt(a,this,t)),this._$AV.push(e),l=n[++r]}o!==(null==l?void 0:l.index)&&(a=B.nextNode(),o++)}return B.currentNode=A,i}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class W{constructor(t,e,s,n){var i;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),E(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&E(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=G.createElement(q(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(s);else{const t=new V(i,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new G(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const i of t)n===e.length?e.push(s=new W(this.k(S()),this.k(S()),this,this.options)):s=e[n],s._$AI(i),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,s,n,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,n){const i=this.strings;let a=!1;if(void 0===i)t=F(this,t,e,0),a=!E(t)||t!==this._$AH&&t!==H,a&&(this._$AH=t);else{const n=t;let o,r;for(t=i[0],o=0;o<i.length-1;o++)r=F(this,n[s+o],e,o),r===H&&(r=this._$AH[o]),a||(a=!E(r)||r!==this._$AH[o]),r===j?t=j:t!==j&&(t+=(null!=r?r:"")+i[o+1]),this._$AH[o]=r}a&&!n&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const Y=y?y.emptyScript:"";class Q extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class X extends Z{constructor(t,e,s,n,i){super(t,e,s,n,i),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=F(this,t,e,0))&&void 0!==s?s:j)===H)return;const n=this._$AH,i=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==j&&(n===j||i);i&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const et=x.litHtmlPolyfillSupport;null==et||et(G,W),(null!==(b=x.litHtmlVersions)&&void 0!==b?b:x.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,nt;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var n,i;const a=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:e;let o=a._$litPart$;if(void 0===o){const t=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;a._$litPart$=o=new W(e.insertBefore(S(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}it.finalized=!0,it._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:it});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:it}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:n}=e;return{kind:s,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
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
 */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;let mt=class extends it{constructor(){super(...arguments),this.messages=[],this.sortOrder="asc",this.groupMessages=!0}createRenderRoot(){return this}handleEdit(t){this.dispatchEvent(new CustomEvent("edit",{detail:t}))}handleDelete(t){const e=!this.groupMessages&&t.originalMessage.length>1;this.dispatchEvent(new CustomEvent("confirm-delete",{detail:Object.assign(Object.assign({},t),{removeSingleMessage:e})}))}formatMessage(t){return t.split(/(\(state:[^)]+\)|\(slug:[^)]+\)|%s)/g).map((t=>/^\(state:[^)]+\)$|^\(slug:[^)]+\)$|^%s$/.test(t)?P`<span class="ms-message-token">${t}</span>`:t))}resolveStateMessage(t){return t.replace(/\(state:([a-zA-Z0-9_\.]+)(?:\((.*?)\))?\)/g,((t,e,s)=>{var n,i,a;const o=null===(i=null===(n=this.hass)||void 0===n?void 0:n.states)||void 0===i?void 0:i[e];if(!o)return t;const r=s?s.split(",").map((t=>t.trim())):[],l=Number.parseFloat(o.state);let d=o.state;if(Number.isFinite(l)){const t=r.find((t=>t.startsWith("round")));if(r.includes("round"))d=Math.round(l);else if(t){const e=Number.parseInt(t.replace("round",""),10);Number.isFinite(e)&&(d=l.toFixed(e))}}return r.includes("unit")&&(null===(a=o.attributes)||void 0===a?void 0:a.unit_of_measurement)&&(d=`${d} ${o.attributes.unit_of_measurement}`),String(d)}))}resolveMessage(t,e=[]){const s=t.replace(/\(slug:([^)]+)\)/g,((t,s)=>{if(e.includes(s))return t;const n=this.messages.find((t=>t.slug===s));return n?this.resolveMessage(n.message,[...e,s]):t}));return this.resolveStateMessage(s)}handleSortClick(){this.sortOrder="asc"===this.sortOrder?"desc":"asc",this.dispatchEvent(new CustomEvent("sort",{detail:this.sortOrder}))}render(){return P`
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
						${this.messages.map(((t,e)=>P`
								<tr
									class="ms-message-row"
									key="${t.slug+e}"
								>
									<td data-label="Slug">
										<div class="ms-slug">${t.slug}</div>
										${this.groupMessages&&t.originalMessage.length>1?P`<div class="ms-row-meta">
													${t.originalMessage.length}
													messages
												</div>`:j}
									</td>
					<td data-label="Message">
							<div
								class="ms-message-hover ${/\((state|slug):[^)]+\)/.test(t.message)?"has-state-tooltip":""}"
								tabindex="${/\((state|slug):[^)]+\)/.test(t.message)?"0":"-1"}"
							>
								<div class="ms-message-preview">
									${t.message.split("| ").map((t=>P`<div>
												${this.formatMessage(t)}
											</div>`))}
								</div>
								${/\((state|slug):[^)]+\)/.test(t.message)?P`<div class="ms-message-tooltip" role="tooltip">
											<strong>${t.slug}</strong>
											<span>${this.resolveMessage(t.message,[t.slug])}</span>
										</div>`:j}
							</div>
									</td>
									<td
										data-label="Actions"
										class="ms-row-actions"
									>
										<button
								class="ms-icon-button ms-tooltip-trigger"
								data-tooltip="Edit message"
											@click=${()=>this.handleEdit(t)}
											aria-label="Edit ${t.slug}"
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
											@click=${()=>this.handleDelete(t)}
											aria-label="Delete ${t.slug}"
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
							`))}
					</tbody>
				</table>
			</div>
		`}};t([dt({type:Array})],mt.prototype,"messages",void 0),t([dt({type:String})],mt.prototype,"sortOrder",void 0),t([dt({type:Boolean})],mt.prototype,"groupMessages",void 0),t([dt({type:Object})],mt.prototype,"hass",void 0),mt=t([ot("messages-store-list")],mt);let pt=class extends it{constructor(){super(...arguments),this.instructions="",this.quantity=5,this.taskName="",this.slug="",this.loading=!1,this.error="",this.initialSlug=""}createRenderRoot(){return this}firstUpdated(){var t;this.slug=null!==(t=this.initialSlug)&&void 0!==t?t:"",this.taskName=`AI Task ${this.initialSlug}`,this.instructions=this.initialSlug?"Generate messages for slug":"",this.focusInput()}focusInput(){const t=this.renderRoot.querySelector("textarea");t&&t.focus()}handleClose(){this.dispatchEvent(new CustomEvent("close"))}async handleGenerate(){var t;if(this.error="",this.instructions&&this.taskName&&this.quantity){this.loading=!0;try{const s=await e(this.hass,"messages_store","generate_ai_messages",{instructions:this.instructions,quantity:Number(this.quantity),task_name:this.taskName,slug:this.slug||void 0});if("error"===(null==s?void 0:s.status))throw new Error((null===(t=null==s?void 0:s.error)||void 0===t?void 0:t.message)||"Service call failed.");if(!(null==s?void 0:s.status))throw new Error((null==s?void 0:s.message)||"Unable to generate messages.");this.dispatchEvent(new CustomEvent("aiMessages",{detail:{slug:s.slug,messages:s.messages}})),this.handleClose()}catch(t){this.error=t instanceof Error?t.message:"Unable to generate messages."}finally{this.loading=!1}}else this.error="Fill all required fields."}handleSubmit(t){t.preventDefault(),this.handleGenerate()}handleBackdropClick(t){t.target===t.currentTarget&&this.handleClose()}render(){return P`
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
							${this.error?P`<p class="ms-form-error" role="alert">
										${this.error}
									</p>`:j}
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
		`}};t([ct()],pt.prototype,"instructions",void 0),t([ct()],pt.prototype,"quantity",void 0),t([ct()],pt.prototype,"taskName",void 0),t([ct()],pt.prototype,"slug",void 0),t([ct()],pt.prototype,"loading",void 0),t([ct()],pt.prototype,"error",void 0),t([dt({type:Object})],pt.prototype,"hass",void 0),t([dt({type:String})],pt.prototype,"initialSlug",void 0),pt=t([ot("messages-store-ai-modal")],pt);let gt=class extends it{constructor(){super(...arguments),this.messages=[],this.initialSlug="",this.initialMessages=[],this.slug="",this.messageList=[""],this.isAIModalOpen=!1,this.aiTaskConfigured=!1,this.handleKeyDown=t=>{if("Escape"===t.key){if(this.isAIModalOpen)return void(this.isAIModalOpen=!1);this.closeModal()}t.ctrlKey&&t.altKey&&"s"===t.key.toLowerCase()&&this.handleSave()}}createRenderRoot(){return this}connectedCallback(){var t,e;super.connectedCallback(),this.slug=null!==(t=this.initialSlug)&&void 0!==t?t:"",this.messageList=null!==(e=this.initialMessages)&&void 0!==e?e:[""],document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}firstUpdated(){this.checkAITaskConfiguration(),this.initialSlug?this.focusMessage(0):this.focusSlug()}async checkAITaskConfiguration(){try{const t=await e(this.hass,"messages_store","get_ai_task_configured");this.aiTaskConfigured=!0===(null==t?void 0:t.configured)}catch(t){this.aiTaskConfigured=!1}}handleAddMessage(){this.messageList=[...this.messageList,""],setTimeout((()=>this.focusMessage(this.messageList.length-1)),0)}handleRemoveMessage(t){this.messageList=this.messageList.filter(((e,s)=>s!==t))}handleSave(){const t=this.initialSlug?"edit_message":"add_message";this.dispatchEvent(new CustomEvent("save",{detail:{slug:this.slug,messages:this.messageList,service:t}}))}closeModal(){this.dispatchEvent(new CustomEvent("close"))}handleBackdropClick(t){t.target===t.currentTarget&&this.closeModal()}focusSlug(){const t=this.renderRoot.querySelector('input[type="text"]');t&&t.focus()}focusMessage(t){const e=this.renderRoot.querySelectorAll("textarea");e&&e[t]&&e[t].focus()}aiMessages(t){const{slug:e,messages:s}=t.detail;this.slug||(this.slug=e);let n=[...this.messageList,...s];n.length>0&&""===n[0]&&(n=n.slice(1)),this.messageList=n}previewMessage(t){return t.replace(/\(slug:([^)]+)\)/g,((t,e)=>{if(e===this.slug)return t;const s=this.messages.filter((t=>t.slug===e));if(0===s.length)return t;const n=s[0].message;return/\(slug:[^)]+\)/.test(n)?t:n})).replace(/\(state:([a-zA-Z0-9_\.]+)(?:\((.*?)\))?\)/g,((t,e,s)=>{const n=this.hass.states[e];if(!n)return t;let i=n.state;const a=n.attributes.unit_of_measurement||"";let o=i;const r=!isNaN(parseFloat(i))&&isFinite(i);if(s=s?s.split(",").map((t=>t.trim())):[],r)if(i=parseFloat(i),s.includes("round"))o=Math.round(i);else{const t=s.find((t=>t.startsWith("round")));if(t){const e=parseInt(t.replace("round",""),10);o=i.toFixed(e)}}return s.includes("unit")&&a&&(o=`${o} ${a}`),o}))}render(){return P`
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
								${this.initialSlug?"Edit message":"Add message"}
							</h2>
							<p>
								${this.initialSlug?"Update the messages stored under this slug.":"Create a reusable message for your automations."}
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
								@input=${t=>this.slug=t.target.value}
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
							${this.messageList.map(((t,e)=>P`
									<div class="ms-message-editor">
										<div class="ms-message-editor-top">
											<span>Message ${e+1}</span>
											${this.messageList.length>1?P`<button
														class="ms-inline-button ms-inline-button-danger"
														@click=${()=>this.handleRemoveMessage(e)}
														aria-label="Remove message ${e+1}"
													>
														Remove
													</button>`:j}
										</div>
										<textarea
											class="ms-textarea"
											aria-label="Message ${e+1}"
											.value=${t}
											@input=${t=>{this.messageList[e]=t.target.value,this.requestUpdate()}}
										></textarea>
										${/(\(slug:[^)]+\)|\(state:[^)]+\))/.test(t)?P`<div class="ms-preview">
													<strong>Preview</strong
													>${this.previewMessage(t)}
												</div>`:j}
									</div>
								`))}
						</div>
					${this.aiTaskConfigured?P`<button
								class="ms-button ms-button-secondary ms-ai-trigger"
								@click=${()=>this.isAIModalOpen=!0}
								aria-haspopup="dialog"
							>
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
									<path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
								</svg>
								<span>Generate with AI</span>
							</button>`:j}
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
				${this.isAIModalOpen?P`
							<messages-store-ai-modal
								.hass=${this.hass}
								.initialSlug=${this.initialSlug}
								@close=${()=>this.isAIModalOpen=!1}
								@aiMessages=${this.aiMessages}
							></messages-store-ai-modal>
						`:""}
			</div>
		`}};t([dt({type:Array})],gt.prototype,"messages",void 0),t([dt({type:String})],gt.prototype,"initialSlug",void 0),t([dt({type:Array})],gt.prototype,"initialMessages",void 0),t([dt({type:Object})],gt.prototype,"hass",void 0),t([dt({type:Object})],gt.prototype,"callService",void 0),t([ct()],gt.prototype,"slug",void 0),t([ct()],gt.prototype,"messageList",void 0),t([ct()],gt.prototype,"isAIModalOpen",void 0),t([ct()],gt.prototype,"aiTaskConfigured",void 0),gt=t([ot("messages-store-modal")],gt);let ut=class extends it{constructor(){super(...arguments),this.message="",this.type="success"}closeNotification(){this.dispatchEvent(new CustomEvent("close"))}createRenderRoot(){return this}render(){return P`
			${this.message?P`
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
		`}};t([dt({type:String})],ut.prototype,"message",void 0),t([dt({type:String})],ut.prototype,"type",void 0),ut=t([ot("messages-store-notification")],ut);let vt=class extends it{constructor(){super(...arguments),this.allMessages=[],this.messages=[],this.message={slug:"",message:"",originalMessage:[""]},this.isModalOpen=!1,this.notification=null,this.searchTerm="",this.sortOrder="asc",this.groupMessages=!0,this.isLoading=!0,this.loadError="",this.pendingDelete=null,this.handleKeyDown=t=>{"Escape"===t.key&&this.pendingDelete?this.cancelDelete():t.ctrlKey&&t.altKey&&"+"===t.key&&this.addModal()}}createRenderRoot(){return this}async connectedCallback(){super.connectedCallback(),this.loadConfig(),await this.loadMessages(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}loadConfig(){const t=localStorage.getItem("messages-store-config");t&&(this.groupMessages=JSON.parse(t).groupMessages)}saveConfig(){localStorage.setItem("messages-store-config",JSON.stringify({groupMessages:this.groupMessages}))}async loadMessages(){this.isLoading=!0,this.loadError="";try{const t=await this.callService("messages_store","get_messages");if(!t||!1===t.status)throw new Error((null==t?void 0:t.message)||"Unable to load messages.");this.allMessages=this.processMessages(t.data),this.filterMessages()}catch(t){this.loadError=t instanceof Error?t.message:"Unable to load messages.",this.allMessages=[],this.messages=[]}finally{this.isLoading=!1}}processMessages(t){let e=[];return Array.isArray(t)&&t.forEach((t=>{Array.isArray(t.message)&&(this.groupMessages?e.push({slug:t.slug,message:t.message[0],originalMessage:t.message}):t.message.forEach(((s,n)=>{e.push({slug:t.slug,message:s.trim(),originalMessage:t.message,messageIndex:n})})))})),e}sortMessages(){this.messages.sort(((t,e)=>{const s=t.slug.localeCompare(e.slug);return"asc"===this.sortOrder?s:-s}))}toggleSortOrder(){this.sortOrder="asc"===this.sortOrder?"desc":"asc",this.sortMessages()}toggleGroupMessages(){this.groupMessages=!this.groupMessages,this.saveConfig(),this.loadMessages()}async callService(t,s,n={},i={}){var a;const o=await e(this.hass,t,s,n,i);if("error"!=(null==o?void 0:o.status))return o;this.showNotification((null===(a=null==o?void 0:o.error)||void 0===a?void 0:a.message)||"Unknown error","error")}handleSearch(t){this.searchTerm=t.target.value,this.filterMessages()}filterMessages(){const t=this.searchTerm.toLowerCase();this.messages=t?this.allMessages.filter((e=>e.slug.toLowerCase().includes(t)||e.message.toLowerCase().includes(t)||this.groupMessages&&e.originalMessage.some((e=>e.toLowerCase().includes(t))))):[...this.allMessages],this.sortMessages()}editModal(t){t=t.detail,this.message=t,this.isModalOpen=!0}addModal(){this.message={slug:"",message:"",originalMessage:[""]},this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}async saveMessage(t){const{slug:e,messages:s,service:n}=t.detail,i=await this.callService("messages_store",n,{slug:e,message:s});this.showNotification((null==i?void 0:i.message)||"Unable to save the message.",(null==i?void 0:i.status)?"success":"error"),(null==i?void 0:i.status)&&(this.closeModal(),await this.loadMessages(),this.filterMessages())}async deleteMessage(t){const e=t.detail,s=await this.callService("messages_store","delete_message",{slug:e});this.showNotification((null==s?void 0:s.message)||"Unable to delete the message.",(null==s?void 0:s.status)?"success":"error"),(null==s?void 0:s.status)&&(await this.loadMessages(),this.filterMessages())}requestDelete(t){this.pendingDelete=t.detail}cancelDelete(){this.pendingDelete=null}async confirmDelete(){const t=this.pendingDelete;if(t)if(this.pendingDelete=null,t.removeSingleMessage){const e=t.originalMessage.filter(((e,s)=>s!==t.messageIndex));await this.saveMessage({detail:{slug:t.slug,messages:e,service:"edit_message"}})}else await this.deleteMessage({detail:t.slug})}showNotification(t,e){this.notification={message:t,type:e},setTimeout((()=>this.notification=null),1e4)}render(){return P`
			<div class="ms-page">
				<header class="ms-page-header">
					<div class="ms-heading-copy">
						<h1>Messages Store</h1>
						<p>
							Manage reusable messages for automations,
							notifications, and TTS.
						</p>
					</div>
					<button
						class="ms-button ms-button-primary"
						@click=${this.addModal}
					>
						<svg viewBox="0 0 24 24" aria-hidden="true">
							<path d="M12 5v14M5 12h14" />
						</svg>
						<span>Add message</span>
					</button>
				</header>

				<section class="ms-toolbar" aria-label="Message list controls">
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
					<label class="ms-group-toggle">
						<input
							type="checkbox"
							.checked=${this.groupMessages}
							@change=${this.toggleGroupMessages}
						/>
						<span>Group slugs</span>
					</label>
				</section>

				<div class="ms-list-heading">
					<h2>Messages</h2>
					${this.isLoading||this.loadError||!this.allMessages.length?"":P`<span class="ms-count"
								>${this.messages.length}
								${this.groupMessages?1===this.messages.length?"slug":"slugs":1===this.messages.length?"message":"messages"}</span
							>`}
				</div>

				${this.isLoading?P`<div class="ms-state-card" role="status">
							<span class="ms-spinner" aria-hidden="true"></span
							><span>Loading messages…</span>
						</div>`:this.loadError?P`<section
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
							</section>`:this.messages.length?P`<messages-store-list
									.hass=${this.hass}
									.messages=${this.messages}
									.groupMessages=${this.groupMessages}
									@edit=${this.editModal}
								@confirm-delete=${this.requestDelete}
									@save=${this.saveMessage}
									@sort=${this.toggleSortOrder}
									.sortOrder=${this.sortOrder}
								></messages-store-list>`:this.searchTerm?P`<section class="ms-state-card">
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
									</section>`:P`<section class="ms-state-card">
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
				${this.isModalOpen?P`
							<messages-store-modal
								.hass=${this.hass}
								.messages=${this.allMessages}
								.initialSlug=${this.message.slug}
								.initialMessages=${this.message.originalMessage}
								@save=${this.saveMessage}
								@close=${this.closeModal}
							></messages-store-modal>
						`:""}
				${this.notification?P`
							<messages-store-notification
								.message=${this.notification.message}
								.type=${this.notification.type}
								@close=${()=>this.notification=null}
							></messages-store-notification>
						`:""}
				${this.pendingDelete?P`<div
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
									${this.pendingDelete.removeSingleMessage?P`This message will be removed from
											<strong>${this.pendingDelete.slug}</strong>.`:P`<strong>${this.pendingDelete.slug}</strong>
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
		`}};t([ct()],vt.prototype,"allMessages",void 0),t([ct()],vt.prototype,"messages",void 0),t([ct()],vt.prototype,"message",void 0),t([ct()],vt.prototype,"isModalOpen",void 0),t([ct()],vt.prototype,"notification",void 0),t([ct()],vt.prototype,"searchTerm",void 0),t([ct()],vt.prototype,"sortOrder",void 0),t([ct()],vt.prototype,"groupMessages",void 0),t([ct()],vt.prototype,"isLoading",void 0),t([ct()],vt.prototype,"loadError",void 0),t([ct()],vt.prototype,"pendingDelete",void 0),t([dt({type:Object})],vt.prototype,"hass",void 0),vt=t([ot("messages-store")],vt);export{vt as MessagesStore};
