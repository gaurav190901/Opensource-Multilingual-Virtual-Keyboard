# 🌐 Virtual Keyboard (Multi-Language Indian Layout)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![JavaScript](https://img.shields.io/badge/Vanilla-JS-yellow)
![Status](https://img.shields.io/badge/status-Active-success)
![PRs](https://img.shields.io/badge/PRs-Welcome-brightgreen)

A fully customizable, draggable, multi-language Virtual Keyboard built using Vanilla JavaScript.

Supports Indian language layouts with hardware keyboard sync and professional drag behavior.

---

## 🎥 Demo

> Add your demo GIF inside `/assets/demo.gif`

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

- 🔤 Shift & CapsLock toggle
- ⌨ Hardware keyboard sync
- ↵ Functional Enter & Tab
- 🖱 Draggable (grip-only)
- 🧲 Boundary-limited drag
- 🎯 Centered space key
- ⚡ Dynamic re-rendering
- 🧩 Modular architecture
- 📦 Lightweight (No dependencies)

---

## 📦 Installation

### NPM

indian-virtual-keyboard/
│
├── src/
│   ├── keyboard.js
│   ├── keyboard.css
│
├── dist/
│   └── keyboard.js (compiled version)
│
├── assets/
│   └── demo.gif
│
├── package.json
├── README.md
├── LICENSE

```bash
npm install indian-virtual-keyboard
```
### CDN
<script src="https://unpkg.com/indian-virtual-keyboard"></script>

### Usage
## Using ES Modules
import VirtualKeyboard from "indian-virtual-keyboard";

VirtualKeyboard.attach("input, textarea", {
  language: "EN_IN",
  draggable: true,
  hardwareSync: true
});

## Using script tags
<link rel="stylesheet" href="keyboard.css">
<script src="keyboard.js"></script>

<input id="input" placeholder="Click me" />

<script>
VirtualKeyboard.attach("#input", {
  language: "HI_IN"
});
</script>
