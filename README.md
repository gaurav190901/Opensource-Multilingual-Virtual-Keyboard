# 🌐 Multilingual Virtual Keyboard

![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/Vanilla-JS-yellow)
![PRs](https://img.shields.io/badge/PRs-Welcome-brightgreen)

An on-screen keyboard for typing in English and Indian languages in the browser. Pick a language, open the keyboard, and type with the mouse or by touch. No build step and no installation: it is plain HTML, CSS and JavaScript, built on [simple-keyboard](https://github.com/hodgef/simple-keyboard).

---

## ✨ Features

- 🌍 **Six languages**: English, Hindi, Marathi, Telugu, Bengali, Tamil
- 🔡 **Complete script coverage**: consonants, vowel signs, virama/halant for conjuncts (क्ष, స్త, தமிழ்), anusvara, visarga, chandrabindu, nukta and language-specific letters (ळ, ఱ, ড়, ৎ, ஃ, ஜ…)
- ⇧ **Shift layer** with standalone vowels, common conjuncts, native and Western digits, and punctuation
- ◌ **Readable vowel-sign keys**: combining marks are drawn on a dotted circle (◌ा)
- ⌨ **Works alongside a physical keyboard**: text you type or paste stays in sync with the on-screen keyboard
- 🖱 **Draggable**: move the keyboard anywhere by its header bar (works with touch too); double-click the header to dock it back at the bottom
- 📍 **Inserts at the cursor** and keeps focus in the text field while you tap keys
- 💾 **Remembers your language** between visits
- 📱 **Responsive** layout for phones and tablets
- ♿ **Accessible**: labelled controls, `aria-expanded`, a close button, and Escape to close
- 🔤 **Proper fonts**: Noto Sans for every script, so text renders the same on every device

---

## 🚀 Getting started

1. Clone the repository:

       git clone https://github.com/gaurav190901/Opensource-Multilingual-Virtual-Keyboard.git

2. Open `index.html` in a browser.

That's all. The keyboard library and fonts load from CDNs, so you need an internet connection.

### Using it

- Choose a language from the **Language** menu.
- Click ⌨️ to open the keyboard. Click it again, press ✕ or press **Escape** to close it.
- Drag the bar at the top of the keyboard (⠿) to move it. Double-click the bar to dock it at the bottom again.
- Press **⇧** to switch between the letters layer and the vowels/digits/punctuation layer. In English, ⇧ capitalises the next character only.

---

## 📁 Project structure

    ├── index.html    Page markup, font and library links
    ├── keyboard.js   Language layouts and keyboard behaviour
    ├── style.css     Page and keyboard styling
    ├── LICENSE
    └── README.md

---

## 🧩 Adding a language

Layouts live in the `layouts` object in [`keyboard.js`](keyboard.js). Each language has two layers, written as rows of space-separated keys:

```js
layouts.gu = {
  default: [
    "ા િ ી ુ ૂ ૃ ે ૈ ો ૌ ્",
    "ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ",
    // ...
    "{shift} શ ષ સ હ ં ઃ ઁ {bksp}",
    "{space}"
  ],
  shift: [
    "અ આ ઇ ઈ ઉ ઊ ઋ એ ઐ ઓ ઔ",
    // ...
  ]
};
```

Then:

1. Add `<option value="gu">Gujarati</option>` to the language menu in `index.html`.
2. Add `gu: "Gujarati"` to `LANG_NAMES` in `keyboard.js`.
3. Add the script's Noto Sans font to the Google Fonts link in `index.html` and to `--indic-fonts` in `style.css`.

Vowel signs get their dotted-circle label automatically.

---

## 🛣 Roadmap

- [ ] More languages (Gujarati, Kannada, Malayalam, Punjabi, Odia)
- [ ] Physical-keyboard layout mapping (InScript)
- [ ] Dark theme
- [ ] Offline use (bundle the library and fonts locally)

---

## 🤝 Contributing

Contributions are welcome, especially layout fixes from native speakers.

1. Fork the repository
2. Create a branch
3. Commit your changes
4. Open a pull request

For major changes, please open an issue first.

---

## 📜 License

[MIT](LICENSE) © 2026 Gourav Gore
