# 🌐 Multilingual Virtual Keyboard

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Size](https://img.shields.io/badge/gzipped-~18%20KB-blue)
![Dependencies](https://img.shields.io/badge/runtime%20dependencies-0-brightgreen)
![PRs](https://img.shields.io/badge/PRs-Welcome-brightgreen)

A free, open-source on-screen keyboard for **English, Hindi, Marathi, Telugu, Bengali and Tamil**. Attach it to any `<input>` or `<textarea>` with one line of code. It works on plain HTML pages and in React, Vue, Angular or any other framework.

I built it because I needed an on-screen keyboard for Indian languages in another project and couldn't find a free one. It's MIT-licensed, so you can use it in personal and commercial projects.

---

## ✨ Features

- 🌍 **Six languages**: English, Hindi, Marathi, Telugu, Bengali, Tamil, with an API to add your own
- 🔡 **Complete script coverage**: vowel signs, virama/halant for conjuncts (क्ष, స్త, தமிழ்), anusvara, visarga, chandrabindu, nukta and language-specific letters (ळ, ఱ, ড়, ৎ, ஃ, ஜ…)
- ⇧ **Shift layer** with standalone vowels, conjuncts, native and Western digits, and punctuation
- 🖱 **Draggable** by its header (mouse and touch); double-click to dock it again
- 🎯 **Works with many fields**: types into whichever attached field is focused, at the cursor
- ⚛️ **Framework-friendly**: fires real `input` events, so React/Vue state stays in sync
- ⌨ **Works alongside a physical keyboard**, and respects `maxlength`, `readonly` and `disabled`
- 📦 **One file, no dependencies to install**: about 18 KB gzipped, with CSS included
- ♿ **Accessible**: labelled controls; Escape closes the keyboard
- 🎨 **Themeable** with CSS variables

---

## 🚀 Quick start (plain HTML)

Add one script tag and call `attach()`:

```html
<input id="name">
<textarea id="message"></textarea>

<script src="https://cdn.jsdelivr.net/gh/gaurav190901/Opensource-Multilingual-Virtual-Keyboard@v1.0.0/dist/multilingual-keyboard.min.js"></script>
<script>
  MultilingualKeyboard.attach("#name, #message", { language: "hi" });
</script>
```

The keyboard opens when one of those fields is focused. Users choose the language from the menu in the keyboard's header.

> **Tip:** keep the version in the URL (`@v1.0.0`) so an update can't change your site without you knowing.

You can also download [`dist/multilingual-keyboard.min.js`](dist/multilingual-keyboard.min.js) and host it yourself.

---

## 📦 Using with npm (React, Vue, Angular…)

Install straight from GitHub:

```bash
npm install github:gaurav190901/Opensource-Multilingual-Virtual-Keyboard#v1.0.0
```

```js
import MultilingualKeyboard from "multilingual-virtual-keyboard";

const kb = MultilingualKeyboard.attach("#name", { language: "mr" });
```

### React

```jsx
import { useEffect, useRef, useState } from "react";
import MultilingualKeyboard from "multilingual-virtual-keyboard";

export default function NameField() {
  const ref = useRef(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const kb = MultilingualKeyboard.attach(ref.current, { language: "hi" });
    return () => kb.destroy();
  }, []);

  return <input ref={ref} value={name} onChange={e => setName(e.target.value)} />;
}
```

### Vue

```vue
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MultilingualKeyboard from "multilingual-virtual-keyboard";

const field = ref(null);
const text = ref("");
let kb;
onMounted(() => (kb = MultilingualKeyboard.attach(field.value, { language: "ta" })));
onBeforeUnmount(() => kb.destroy());
</script>

<template>
  <input ref="field" v-model="text" />
</template>
```

In Next.js or other server-rendered apps, call `attach()` inside `useEffect` (or mark the component `"use client"`). Importing the package on the server is safe.

TypeScript types are included.

---

## ⚙️ Options

```js
MultilingualKeyboard.attach(target, options);
```

`target` can be a CSS selector, a single element, or a list of elements. Only text fields (`input` of type text/search/url/tel/email/password, and `textarea`) are used.

| Option | Type | Default | Description |
|---|---|---|---|
| `language` | string | last used, else first | Starting language: `"en"`, `"hi"`, `"mr"`, `"te"`, `"bn"`, `"ta"` |
| `languages` | string[] | all | Which languages to offer, in menu order. With one language the menu is hidden |
| `layouts` | object | `{}` | Add or override layouts (see [Custom layouts](#-custom-layouts)) |
| `draggable` | boolean | `true` | Allow dragging the keyboard by its header |
| `openOnFocus` | boolean | `true` | Open when an attached field is focused or clicked. Set `false` to open it yourself |
| `loadFonts` | boolean | `true` | Load Noto Sans fonts from Google Fonts. Set `false` to use your own fonts |
| `rememberLanguage` | boolean | `true` | Remember the chosen language in `localStorage` |
| `suppressNativeKeyboard` | boolean | `false` | Stop the phone's own keyboard from popping up on attached fields |
| `onChange` | `(value, field) => void` | | Called after each on-screen key press changes a field |
| `onLanguageChange` | `(lang) => void` | | Called when the user switches language |
| `onOpen` / `onClose` | `() => void` | | Called when the keyboard opens or closes |
| `onEnter` | `(field) => void` | | Handle ↵ yourself. By default it adds a new line in a textarea and closes the keyboard in an input |

## 🧰 Methods

`attach()` returns a keyboard object:

| Method | Description |
|---|---|
| `open(field?)` | Show the keyboard, optionally for a specific attached field |
| `close()` | Hide the keyboard |
| `toggle()` | Show or hide it |
| `isOpen()` | `true` if it is showing |
| `setLanguage(code)` | Switch language |
| `getLanguage()` | Current language code |
| `dock()` | Move a dragged keyboard back to the bottom of the screen |
| `destroy()` | Remove the keyboard and all its event listeners |

Example: open the keyboard from your own button.

```js
const kb = MultilingualKeyboard.attach("#search", { openOnFocus: false });
document.querySelector("#kbButton").addEventListener("click", () => kb.toggle());
```

---

## 🧩 Custom layouts

Add a language (or replace a built-in one) with the `layouts` option. Keys are space-separated. The special keys are `{shift}`, `{bksp}`, `{space}` and `{enter}`.

```js
MultilingualKeyboard.attach("input", {
  languages: ["gu", "en"],
  layouts: {
    gu: {
      name: "Gujarati",
      default: [
        "ા િ ી ુ ૂ ૃ ે ૈ ો ૌ ્",
        "ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ",
        "ટ ઠ ડ ઢ ણ ત થ દ ધ ન",
        "પ ફ બ ભ મ ય ર લ વ",
        "{shift} શ ષ સ હ ં ઃ ઁ {bksp}",
        "{space} {enter}"
      ],
      shift: [
        "અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ",
        "{shift} . , ? ! {bksp}",
        "{space} {enter}"
      ]
    }
  }
});
```

Vowel signs automatically get a dotted-circle label (◌ા). Set `oneShotShift: true` if shift should switch off after one key, as in the English layout. The built-in layouts are in [`src/layouts.js`](src/layouts.js).

---

## 🎨 Theming

Override these CSS variables on `.mlk-panel`:

```css
.mlk-panel {
  --mlk-bg: #1f1f1f;        /* panel background */
  --mlk-key-bg: #333;       /* key background */
  --mlk-fn-key-bg: #444;    /* shift, backspace, etc. */
  --mlk-text: #f1f1f1;
  --mlk-muted: #aaa;        /* header text, grip */
  --mlk-accent: #3b5bdb;    /* active shift key */
  --mlk-radius: 10px;
  --mlk-width: 900px;       /* maximum width */
  --mlk-z: 2147483000;      /* z-index */
  --mlk-font: "Your Font", sans-serif;
}
```

---

## 🖥 Demo

Open [`index.html`](index.html) in a browser to try it locally.

---

## 🛠 Development

```bash
npm install        # installs esbuild and simple-keyboard (build-time only)
npm run build      # bundles src/ into dist/
```

    ├── src/
    │   ├── index.js      Library: attach() API and keyboard logic
    │   ├── layouts.js    Built-in language layouts
    │   ├── styles.css    Panel styles (bundled into the JS)
    │   └── global.js     Entry for the <script> build (window.MultilingualKeyboard)
    ├── dist/             Built files: .min.js / .js (script tag), .mjs / .cjs (npm), .d.ts
    ├── index.html        Demo page
    ├── build.mjs         Build script
    └── package.json

Browser support: current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile.

---

## 🛣 Roadmap

- [ ] More languages (Gujarati, Kannada, Malayalam, Punjabi, Odia)
- [ ] Physical-keyboard layout mapping (InScript)
- [ ] Built-in dark theme
- [ ] `contenteditable` support
- [ ] Publish to the npm registry

---

## 🤝 Contributing

Contributions are welcome, especially layout fixes and new languages from native speakers.

1. Fork the repository
2. Create a branch
3. Make your changes and run `npm run build`
4. Open a pull request

For major changes, please open an issue first.

---

## 📜 License

[MIT](LICENSE) © 2026 Gourav Gore

The built files include [simple-keyboard](https://github.com/hodgef/simple-keyboard) (MIT, © Francisco Hodge and contributors). Its licence notice is kept at the top of each file in `dist/`.

Fonts are loaded from Google Fonts unless you set `loadFonts: false`.
