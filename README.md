# 🌐 Indian Virtual Keyboard

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/Vanilla-JS-yellow)
![Status](https://img.shields.io/badge/status-Active-success)
![PRs](https://img.shields.io/badge/PRs-Welcome-brightgreen)

A lightweight, multi-language Indian Virtual Keyboard built using Vanilla JavaScript.

Designed to support multiple Indian language layouts with hardware keyboard synchronization, smooth dragging, and modular architecture.

---

## 🎥 Demo

Place your demo GIF inside:

assets/
└── demo.gif

![Virtual Keyboard Demo](./assets/demo.gif)

---

## ✨ Features

- 🌍 Multi-language support  
  - English (EN_IN)  
  - Hindi (HI_IN)  
  - Marathi (MR_IN)  
  - Bengali (BN_IN)  
  - Tamil (TA_IN)  
  - Telugu (TE_IN)

- 🔤 Shift & Caps Lock toggle  
- ⌨ Hardware keyboard sync  
- ↵ Functional Enter & Tab support  
- 🖱 Draggable (grip-only drag area)  
- 🧲 Viewport boundary restrictions  
- 🎯 Centered space key  
- ⚡ Dynamic state-based rendering  
- 🧩 Modular and extendable design  
- 📦 Zero external dependencies  

---

## 📦 Installation

### Install via NPM

    npm install indian-virtual-keyboard

---

### Use via CDN

    <script src="https://unpkg.com/indian-virtual-keyboard"></script>

---

## 🚀 Usage

### ES Module Usage

    import VirtualKeyboard from "indian-virtual-keyboard";

    VirtualKeyboard.attach("input, textarea", {
      language: "EN_IN",
      draggable: true,
      hardwareSync: true
    });

---

### Script Tag Usage

    <link rel="stylesheet" href="keyboard.css">
    <script src="keyboard.js"></script>

    <input id="input" placeholder="Click me" />

    <script>
      VirtualKeyboard.attach("#input", {
        language: "HI_IN"
      });
    </script>

---

## ⚙️ Configuration Options

| Option        | Type    | Default | Description |
|--------------|---------|---------|-------------|
| language     | String  | EN_IN   | Default keyboard language |
| draggable    | Boolean | true    | Enable or disable drag functionality |
| hardwareSync | Boolean | true    | Sync Shift and CapsLock with hardware keyboard |

---

## 🧠 Architecture

The keyboard is built around a modular design:

- Dynamic layout engine
- Language cycling system
- State-driven rendering (shift, caps, activeInput)
- Hardware event synchronization
- Viewport drag constraint logic

The keyboard re-renders dynamically when state changes.

---

## 📁 Project Structure

    indian-virtual-keyboard/
    │
    ├── src/
    │   ├── keyboard.js
    │   ├── keyboard.css
    │
    ├── dist/
    │   └── keyboard.js
    │
    ├── assets/
    │   └── demo.gif
    │
    ├── package.json
    ├── README.md
    ├── LICENSE

---

## 🛣 Roadmap

- [ ] Cursor position support
- [ ] Arrow key navigation
- [ ] Mobile touch drag support
- [ ] Theme switcher
- [ ] Custom layout API
- [ ] TypeScript support
- [ ] Minified production build

---

## 🤝 Contributing

Contributions are welcome.

To contribute:

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Open a Pull Request  

For major changes, please open an issue first.

---

## 📦 Publishing to NPM

    npm login
    npm publish --access public

Ensure:
- Unique package name
- Version updated
- Logged into npm

---

## 📜 License

MIT © 2026

This project is licensed under the MIT License — you are free to use, modify, and distribute it.

---

## ⭐ Support

If you found this useful:

- ⭐ Star the repository  
- 🍴 Fork it  
- 💡 Suggest improvements  
- 🧩 Add new language layouts  

---

Built with ❤️ using Vanilla JavaScript
