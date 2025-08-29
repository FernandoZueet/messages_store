function t(t,e,n,s){var i,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o}"function"==typeof SuppressedError&&SuppressedError;!function(t,e){void 0===e&&(e={});var n=e.insertAt;if("undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}("/*\n! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\r\n.fixed {\n  position: fixed;\n}\r\n.relative {\n  position: relative;\n}\r\n.inset-0 {\n  inset: 0px;\n}\r\n.bottom-4 {\n  bottom: 1rem;\n}\r\n.right-4 {\n  right: 1rem;\n}\r\n.z-50 {\n  z-index: 50;\n}\r\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.ml-2 {\n  margin-left: 0.5rem;\n}\r\n.ml-4 {\n  margin-left: 1rem;\n}\r\n.mr-2 {\n  margin-right: 0.5rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.block {\n  display: block;\n}\r\n.flex {\n  display: flex;\n}\r\n.inline-flex {\n  display: inline-flex;\n}\r\n.table {\n  display: table;\n}\r\n.min-h-screen {\n  min-height: 100vh;\n}\r\n.w-1\\/5 {\n  width: 20%;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.min-w-full {\n  min-width: 100%;\n}\r\n.max-w-lg {\n  max-width: 32rem;\n}\r\n.flex-grow {\n  flex-grow: 1;\n}\r\n.border-collapse {\n  border-collapse: collapse;\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-end {\n  justify-content: flex-end;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.overflow-x-auto {\n  overflow-x: auto;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.border-\\[1px\\] {\n  border-width: 1px;\n}\r\n.border-b {\n  border-bottom-width: 1px;\n}\r\n.border-b-2 {\n  border-bottom-width: 2px;\n}\r\n.border-zinc-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(82 82 91 / var(--tw-border-opacity));\n}\r\n.border-zinc-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(63 63 70 / var(--tw-border-opacity));\n}\r\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\r\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\r\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\r\n.bg-zinc-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(113 113 122 / var(--tw-bg-opacity));\n}\r\n.bg-zinc-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(82 82 91 / var(--tw-bg-opacity));\n}\r\n.bg-zinc-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 63 70 / var(--tw-bg-opacity));\n}\r\n.bg-zinc-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity));\n}\r\n.bg-zinc-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 24 27 / var(--tw-bg-opacity));\n}\r\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\r\n.p-0 {\n  padding: 0px;\n}\r\n.p-1 {\n  padding: 0.25rem;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.p-6 {\n  padding: 1.5rem;\n}\r\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\r\n.text-left {\n  text-align: left;\n}\r\n.text-right {\n  text-align: right;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\r\n.text-red-300 {\n  --tw-text-opacity: 1;\n  color: rgb(252 165 165 / var(--tw-text-opacity));\n}\r\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.text-zinc-300 {\n  --tw-text-opacity: 1;\n  color: rgb(212 212 216 / var(--tw-text-opacity));\n}\r\n.text-zinc-400 {\n  --tw-text-opacity: 1;\n  color: rgb(161 161 170 / var(--tw-text-opacity));\n}\r\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\r\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\r\n.hover\\:bg-zinc-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity));\n}\r\n.hover\\:text-red-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}\r\n.hover\\:text-zinc-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(161 161 170 / var(--tw-text-opacity));\n}\r\n.focus\\:border-zinc-400:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(161 161 170 / var(--tw-border-opacity));\n}\r\n.focus\\:border-zinc-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(113 113 122 / var(--tw-border-opacity));\n}\r\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n@media (min-width: 640px) {\n\n  .sm\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n\n  .sm\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .sm\\:mr-4 {\n    margin-right: 1rem;\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:items-center {\n    align-items: center;\n  }\n\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .lg\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n}\r\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:bg-zinc-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(24 24 27 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n}\r\n");var e=async(t,e,n,s={},i={})=>{try{return(await t.connection.sendMessagePromise({type:"execute_script",sequence:[{service:`${e}.${n}`,data:s,target:i,response_variable:"service_result"},{stop:"done",response_variable:"service_result"}]})).response}catch(t){return{status:"error",error:t}}};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=window,s=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let o=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&r.set(e,t))}return t}toString(){return this.cssText}};const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",p=d.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},g=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:g},b="finalized";let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const s=this._$Ep(n,e);void 0!==s&&(this._$Ev.set(s,n),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,n,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),i=n.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=m){var s;const i=this.constructor._$Ep(t,n);if(void 0!==i&&!0===n.reflect){const r=(void 0!==(null===(s=n.converter)||void 0===s?void 0:s.toAttribute)?n.converter:u).toAttribute(e,n.type);this._$El=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(n=t.converter)||void 0===n?void 0:n.fromAttribute)?t.converter:u;this._$El=i,this[i]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,n){let s=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;f[b]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:f}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const w=window,y=w.trustedTypes,x=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,k="?"+_,A=`<${k}>`,S=document,M=()=>S.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,C="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,N=/>/g,U=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,T=/"/g,L=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),H=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),D=new WeakMap,q=S.createTreeWalker(S,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const F=(t,e)=>{const n=t.length-1,s=[];let i,r=2===e?"<svg>":"",o=O;for(let e=0;e<n;e++){const n=t[e];let a,l,d=-1,c=0;for(;c<n.length&&(o.lastIndex=c,l=o.exec(n),null!==l);)c=o.lastIndex,o===O?"!--"===l[1]?o=R:void 0!==l[1]?o=N:void 0!==l[2]?(L.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=U):void 0!==l[3]&&(o=U):o===U?">"===l[0]?(o=null!=i?i:O,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?U:'"'===l[3]?T:P):o===T||o===P?o=U:o===R||o===N?o=O:(o=U,i=void 0);const h=o===U&&t[e+1].startsWith("/>")?" ":"";r+=o===O?n+A:d>=0?(s.push(a),n.slice(0,d)+$+n.slice(d)+_+h):n+_+(-2===d?(s.push(void 0),e):h)}return[B(t,r+(t[n]||"<?>")+(2===e?"</svg>":"")),s]};class K{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let i=0,r=0;const o=t.length-1,a=this.parts,[l,d]=F(t,e);if(this.el=K.createElement(l,n),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith($)||e.startsWith(_)){const n=d[r++];if(t.push(e),void 0!==n){const t=s.getAttribute(n.toLowerCase()+$).split(_),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?X:"@"===e[1]?Y:J})}else a.push({type:6,index:i})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split(_),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let n=0;n<e;n++)s.append(t[n],M()),q.nextNode(),a.push({type:2,index:++i});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(_,t+1));)a.push({type:7,index:i}),t+=_.length-1}i++}}static createElement(t,e){const n=S.createElement("template");return n.innerHTML=t,n}}function G(t,e,n=t,s){var i,r,o,a;if(e===H)return e;let l=void 0!==s?null===(i=n._$Co)||void 0===i?void 0:i[s]:n._$Cl;const d=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,n,s)),void 0!==s?(null!==(o=(a=n)._$Co)&&void 0!==o?o:a._$Co=[])[s]=l:n._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,s)),e}class V{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:s}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(n,!0);q.currentNode=i;let r=q.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new W(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tt(r,this,t)),this._$AV.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=q.nextNode(),o++)}return q.currentNode=S,i}v(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class W{constructor(t,e,n,s){var i;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cp=null===(i=null==s?void 0:s.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),E(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==H&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>z(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==I&&E(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.v(n);else{const t=new V(i,this),e=t.u(this.options);t.v(n),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new K(t)),e}T(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const i of t)s===e.length?e.push(n=new W(this.k(M()),this.k(M()),this,this.options)):n=e[s],n._$AI(i),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,n,s,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,s){const i=this.strings;let r=!1;if(void 0===i)t=G(this,t,e,0),r=!E(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else{const s=t;let o,a;for(t=i[0],o=0;o<i.length-1;o++)a=G(this,s[n+o],e,o),a===H&&(a=this._$AH[o]),r||(r=!E(a)||a!==this._$AH[o]),a===I?t=I:t!==I&&(t+=(null!=a?a:"")+i[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const Q=y?y.emptyScript:"";class X extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Y extends J{constructor(t,e,n,s,i){super(t,e,n,s,i),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=G(this,t,e,0))&&void 0!==n?n:I)===H)return;const s=this._$AH,i=t===I&&s!==I||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==I&&(s===I||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const et=w.litHtmlPolyfillSupport;null==et||et(K,W),(null!==(v=w.litHtmlVersions)&&void 0!==v?v:w.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,st;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{var s,i;const r=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;r._$litPart$=o=new W(e.insertBefore(M(),t),t,void 0,null!=n?n:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}}it.finalized=!0,it._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:it});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:it}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}},lt=(t,e,n)=>{e.constructor.createProperty(n,t)};function dt(t){return(e,n)=>void 0!==n?lt(t,e,n):at(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return dt({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;let pt=class extends it{constructor(){super(...arguments),this.messages=[],this.sortOrder="asc",this.groupMessages=!0}createRenderRoot(){return this}handleEdit(t){this.dispatchEvent(new CustomEvent("edit",{detail:t}))}loadConfig(){const t=localStorage.getItem("messages-store-config");t&&(this.groupMessages=JSON.parse(t).groupMessages)}handleDelete(t){this.loadConfig();const e=t.originalMessage.length>1;if(confirm(`Are you sure you want to delete the message with slug "${t.slug}"?`))if(e&&!this.groupMessages){const e=t.originalMessage.filter((e=>e!==t.message));this.dispatchEvent(new CustomEvent("save",{detail:{slug:t.slug,messages:e,service:"edit_message"}}))}else this.dispatchEvent(new CustomEvent("delete",{detail:t.slug}))}formatMessage(t){const e="bg-zinc-700 p-0 px-0 font-semibold rounded shadow";return t.replace(/\(state:[^)]+\)/g,(t=>`<span class="${e}">${t}</span>`)).replace(/\(slug:[^)]+\)/g,(t=>`<span class="${e}">${t}</span>`)).replace(/%s/g,(t=>`<span class="${e}">${t}</span>`))}handleSortClick(){this.sortOrder="asc"===this.sortOrder?"desc":"asc",this.dispatchEvent(new CustomEvent("sort",{detail:this.sortOrder}))}render(){return j`
			<table class="min-w-full text-sm border-collapse">
				<thead>
					<tr>
						<th
							class="px-4 py-3 text-left border-b border-zinc-600 w-1/5 cursor-pointer"
							@click=${this.handleSortClick}
						>
							Slug ${"asc"===this.sortOrder?"↑":"↓"}
						</th>
						<th
							class="px-4 py-3 text-left border-b border-zinc-600"
						>
							Message
						</th>
						<th
							class="px-4 py-3 text-left border-b border-zinc-600"
						></th>
					</tr>
				</thead>
				<tbody>
					${this.messages.map(((t,e)=>j`
							<tr
								class="hover:bg-zinc-800"
								key="${t.slug+e}"
							>
								<td class="border-b border-zinc-600 px-4 py-3">
									<span
										class="bg-zinc-700 p-1 px-3 font-semibold rounded shadow"
									>
										${t.slug}
									</span>
								</td>
								<td class="border-b border-zinc-600 px-4 py-3">
									${t.message.split("| ").map((t=>j`
												<div
													.innerHTML=${this.formatMessage(t)}
												></div>
											`))}
								</td>
								<td
									class="border-b border-zinc-600 px-4 py-3 text-right"
								>
									<button
										class="text-zinc-300 hover:text-zinc-400 px-2 py-1"
										@click=${()=>this.handleEdit(t)}
										title="Edit Message"
									>
										Edit
									</button>
									<button
										class="text-red-300 hover:text-red-400 ml-4 px-2 py-1"
										@click=${()=>this.handleDelete(t)}
										title="Delete Message"
									>
										Delete
									</button>
								</td>
							</tr>
						`))}
				</tbody>
			</table>
		`}};t([dt({type:Array})],pt.prototype,"messages",void 0),t([dt({type:String})],pt.prototype,"sortOrder",void 0),t([ct()],pt.prototype,"groupMessages",void 0),pt=t([ot("messages-store-list")],pt);let ut=class extends it{constructor(){super(...arguments),this.instructions="",this.quantity=5,this.taskName="",this.slug="",this.loading=!1,this.error="",this.initialSlug=""}createRenderRoot(){return this}firstUpdated(){var t;this.focusInput(),this.slug=null!==(t=this.initialSlug)&&void 0!==t?t:"",this.taskName=`AI Task ${this.initialSlug}`,this.instructions=this.initialSlug?"Generate messages for slug":""}focusInput(){if(this.initialSlug){const t=this.renderRoot.querySelector("#save");t&&t.focus()}else{const t=this.renderRoot.querySelector("textarea");t&&t.focus()}}handleClose(){this.dispatchEvent(new CustomEvent("close"))}async handleGenerate(){var t;if(this.error="",!this.instructions||!this.taskName||!this.quantity)return void(this.error="Fill all required fields.");this.loading=!0;const n=await e(this.hass,"messages_store","generate_ai_messages",{instructions:this.instructions,quantity:Number(this.quantity),task_name:this.taskName,slug:this.slug||void 0});return"error"==(null==n?void 0:n.status)?(this.error=(null===(t=null==n?void 0:n.error)||void 0===t?void 0:t.message)||"Service call failed",void(this.loading=!1)):n&&!n.status?(this.error=(null==n?void 0:n.message)||"Unknown error",void(this.loading=!1)):void(n&&n.status&&(this.dispatchEvent(new CustomEvent("aiMessages",{detail:{slug:n.slug,messages:n.messages}})),this.handleClose(),this.loading=!1))}render(){return j`
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
							@input=${t=>this.taskName=t.target.value}
						/>
                    </div>    
                    <div class="mb-3">
                        <label class="block mb-1 text-sm">Instructions *</label>
						<textarea
							class="w-full p-2 bg-zinc-700 border-b-2 border-zinc-600 text-white"
							.value=${this.instructions}
							@input=${t=>this.instructions=t.target.value}
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
							@input=${t=>this.quantity=t.target.value}
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
							@input=${t=>this.slug=t.target.value}
						/>
					</div>
					${this.error?j`<div class="text-red-400 mb-2">
								${this.error}
							</div>`:""}
					<div class="flex justify-end mt-4">
						<button id="save"
							class="bg-green-500 text-white font-bold px-6 py-2 rounded mr-2"
							@click=${this.handleGenerate}
							?disabled=${this.loading}
						>
							${this.loading?"Generating...":"Generate"}
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
		`}};t([ct()],ut.prototype,"instructions",void 0),t([ct()],ut.prototype,"quantity",void 0),t([ct()],ut.prototype,"taskName",void 0),t([ct()],ut.prototype,"slug",void 0),t([ct()],ut.prototype,"loading",void 0),t([ct()],ut.prototype,"error",void 0),t([dt({type:Object})],ut.prototype,"hass",void 0),t([dt({type:String})],ut.prototype,"initialSlug",void 0),ut=t([ot("messages-store-ai-modal")],ut);let gt=class extends it{constructor(){super(...arguments),this.messages=[],this.initialSlug="",this.initialMessages=[],this.slug="",this.messageList=[""],this.isAIModalOpen=!1,this.handleKeyDown=t=>{"Escape"===t.key&&this.closeModal(),t.ctrlKey&&t.altKey&&"s"===t.key.toLowerCase()&&this.handleSave()}}createRenderRoot(){return this}connectedCallback(){var t,e;super.connectedCallback(),this.slug=null!==(t=this.initialSlug)&&void 0!==t?t:"",this.messageList=null!==(e=this.initialMessages)&&void 0!==e?e:[""],document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}firstUpdated(){this.initialSlug?this.focusMessage(0):this.focusSlug()}handleAddMessage(){this.messageList=[...this.messageList,""],setTimeout((()=>this.focusMessage(this.messageList.length-1)),0)}handleRemoveMessage(t){this.messageList=this.messageList.filter(((e,n)=>n!==t))}handleSave(){const t=this.initialSlug?"edit_message":"add_message";this.dispatchEvent(new CustomEvent("save",{detail:{slug:this.slug,messages:this.messageList,service:t}}))}closeModal(){this.dispatchEvent(new CustomEvent("close"))}focusSlug(){const t=this.renderRoot.querySelector('input[type="text"]');t&&t.focus()}focusMessage(t){const e=this.renderRoot.querySelectorAll("textarea");e&&e[t]&&e[t].focus()}aiMessages(t){const{slug:e,messages:n}=t.detail;this.slug||(this.slug=e);let s=[...this.messageList,...n];s.length>0&&""===s[0]&&(s=s.slice(1)),this.messageList=s}previewMessage(t){return t.replace(/\(slug:([^)]+)\)/g,((t,e)=>{if(e===this.slug)return t;const n=this.messages.filter((t=>t.slug===e));if(0===n.length)return t;const s=n[0].message;return/\(slug:[^)]+\)/.test(s)?t:s})).replace(/\(state:([a-zA-Z0-9_\.]+)(?:\((.*?)\))?\)/g,((t,e,n)=>{const s=this.hass.states[e];if(!s)return t;let i=s.state;const r=s.attributes.unit_of_measurement||"";let o=i;const a=!isNaN(parseFloat(i))&&isFinite(i);if(n=n?n.split(",").map((t=>t.trim())):[],a)if(i=parseFloat(i),n.includes("round"))o=Math.round(i);else{const t=n.find((t=>t.startsWith("round")));if(t){const e=parseInt(t.replace("round",""),10);o=i.toFixed(e)}}return n.includes("unit")&&r&&(o=`${o} ${r}`),o}))}render(){return j`
			<div
				class="fixed inset-0 flex items-center justify-center z-50 bg-zinc-900 bg-opacity-50 backdrop-blur-sm"
			>
				<div
					class="bg-zinc-800 text-white p-6 rounded-lg shadow-2xl w-full max-w-lg mx-4 sm:mx-6 md:w-2/3 lg:w-1/3 border-[1px] border-zinc-700 relative"
				>
					<h2 class="text-xl mb-5 font-bold flex justify-between items-center">
						${this.initialSlug?"Edit Message":"Add Message"}
						<button
							class="bg-blue-600 text-white font-bold px-3 py-1 rounded ml-2 text-sm"
							style="position:absolute;top:18px;right:18px;"
							@click=${()=>this.isAIModalOpen=!0}
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
							@input=${t=>this.slug=t.target.value}
							?disabled=${!!this.initialSlug}
						/>
					</div>
					<div class="mb-4">
						<label class="block mb-2 text-sm">Message</label>
						${this.messageList.map(((t,e)=>j`
								<div class="flex flex-col mb-2">
									<div class="flex items-center">
										<textarea
											class="text-sm outline-none border-b-2 border-zinc-600 bg-zinc-700 focus:border-zinc-400 focus:outline-none w-full p-2 text-white mr-2"
											.value=${t}
											@input=${t=>{this.messageList[e]=t.target.value,this.requestUpdate()}}
										></textarea>
										${this.messageList.length>1?j`
													<button
														class="bg-zinc-600 text-white px-3 py-1 font-bold rounded"
														@click=${()=>this.handleRemoveMessage(e)}
													>
														x
													</button>
												`:""}
									</div>
									${/\(slug:[^)]+\)/.test(t)||/\(state:[^)]+\)/.test(t)?j`
												<div
													class="text-sm text-zinc-400 mt-2 mb-2"
												>
													<span class="text-zinc-300"
														>Preview:</span
													>
													${this.previewMessage(t)}
												</div>
											`:""}
								</div>
							`))}
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
				${this.isAIModalOpen?j`
						<messages-store-ai-modal
							.hass=${this.hass}
							.initialSlug=${this.initialSlug}
							@close=${()=>this.isAIModalOpen=!1}
							@aiMessages=${this.aiMessages}
						></messages-store-ai-modal>
					`:""}
			</div>
		`}};t([dt({type:Array})],gt.prototype,"messages",void 0),t([dt({type:String})],gt.prototype,"initialSlug",void 0),t([dt({type:Array})],gt.prototype,"initialMessages",void 0),t([dt({type:Object})],gt.prototype,"hass",void 0),t([dt({type:Object})],gt.prototype,"callService",void 0),t([ct()],gt.prototype,"slug",void 0),t([ct()],gt.prototype,"messageList",void 0),t([ct()],gt.prototype,"isAIModalOpen",void 0),gt=t([ot("messages-store-modal")],gt);let mt=class extends it{constructor(){super(...arguments),this.message="",this.type="success"}closeNotification(){this.dispatchEvent(new CustomEvent("close"))}createRenderRoot(){return this}render(){return j`
			${this.message?j`
						<div
							class="fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg z-50 ${"error"===this.type?"bg-red-500":"bg-green-500"} text-white"
						>
							<div class="flex items-center">
								<span class="flex-grow">${this.message}</span>
								<button
									@click=${this.closeNotification}
									class="ml-4 text-white"
								>
									x
								</button>
							</div>
						</div>
					`:""}
		`}};t([dt({type:String})],mt.prototype,"message",void 0),t([dt({type:String})],mt.prototype,"type",void 0),mt=t([ot("messages-store-notification")],mt);let bt=class extends it{constructor(){super(...arguments),this.allMessages=[],this.messages=[],this.message={slug:"",message:"",originalMessage:[""]},this.isModalOpen=!1,this.notification=null,this.searchTerm="",this.sortOrder="asc",this.groupMessages=!0,this.handleKeyDown=t=>{t.ctrlKey&&t.altKey&&"+"===t.key&&this.addModal()}}createRenderRoot(){return this}async connectedCallback(){super.connectedCallback(),this.loadConfig(),await this.loadMessages(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.handleKeyDown),super.disconnectedCallback()}loadConfig(){const t=localStorage.getItem("messages-store-config");t&&(this.groupMessages=JSON.parse(t).groupMessages)}saveConfig(){localStorage.setItem("messages-store-config",JSON.stringify({groupMessages:this.groupMessages}))}async loadMessages(){const t=await this.callService("messages_store","get_messages");this.allMessages=this.processMessages(null==t?void 0:t.data),this.filterMessages()}processMessages(t){let e=[];return Array.isArray(t)&&t.forEach((t=>{Array.isArray(t.message)&&(this.groupMessages?e.push({slug:t.slug,message:t.message[0],originalMessage:t.message}):t.message.forEach((n=>{e.push({slug:t.slug,message:n.trim(),originalMessage:t.message})})))})),e}sortMessages(){this.messages.sort(((t,e)=>{const n=t.slug.localeCompare(e.slug);return"asc"===this.sortOrder?n:-n}))}toggleSortOrder(){this.sortOrder="asc"===this.sortOrder?"desc":"asc",this.sortMessages()}toggleGroupMessages(){this.groupMessages=!this.groupMessages,this.saveConfig(),this.loadMessages()}async callService(t,n,s={},i={}){var r;const o=await e(this.hass,t,n,s,i);if("error"!=(null==o?void 0:o.status))return o;this.showNotification((null===(r=null==o?void 0:o.error)||void 0===r?void 0:r.message)||"Unknown error","error")}handleSearch(t){this.searchTerm=t.target.value,this.filterMessages()}filterMessages(){const t=this.searchTerm.toLowerCase();this.messages=t?this.allMessages.filter((e=>e.slug.toLowerCase().includes(t)||e.message.toLowerCase().includes(t))):[...this.allMessages],this.sortMessages()}editModal(t){t=t.detail,this.message=t,this.isModalOpen=!0}addModal(){this.message={slug:"",message:"",originalMessage:[""]},this.isModalOpen=!0}closeModal(){this.isModalOpen=!1}async saveMessage(t){const{slug:e,messages:n,service:s}=t.detail,i=await this.callService("messages_store",s,{slug:e,message:n});this.showNotification(i.message,i.status?"success":"error"),i.status&&(this.closeModal(),await this.loadMessages(),this.filterMessages())}async deleteMessage(t){const e=t.detail,n=await this.callService("messages_store","delete_message",{slug:e});this.showNotification(n.message,n.status?"success":"error"),n.status&&(await this.loadMessages(),this.filterMessages())}showNotification(t,e){this.notification={message:t,type:e},setTimeout((()=>this.notification=null),1e4)}render(){return j`
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
					${this.messages.length>0?j`
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
							`:j`
								<div class="mt-4 text-sm text-gray-500">
									No messages found.
								</div>
							`}
				</div>
				${this.isModalOpen?j`
							<messages-store-modal
								.hass=${this.hass}
								.messages=${this.allMessages}
								.initialSlug=${this.message.slug}
								.initialMessages=${this.message.originalMessage}
								@save=${this.saveMessage}
								@close=${this.closeModal}
							></messages-store-modal>
						`:""}
				${this.notification?j`
							<messages-store-notification
								.message=${this.notification.message}
								.type=${this.notification.type}
								@close=${()=>this.notification=null}
							></messages-store-notification>
						`:""}
			</div>
		`}};t([ct()],bt.prototype,"allMessages",void 0),t([ct()],bt.prototype,"messages",void 0),t([ct()],bt.prototype,"message",void 0),t([ct()],bt.prototype,"isModalOpen",void 0),t([ct()],bt.prototype,"notification",void 0),t([ct()],bt.prototype,"searchTerm",void 0),t([ct()],bt.prototype,"sortOrder",void 0),t([ct()],bt.prototype,"groupMessages",void 0),t([dt({type:Object})],bt.prototype,"hass",void 0),bt=t([ot("messages-store")],bt);export{bt as MessagesStore};
