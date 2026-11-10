/*!
 * Multilingual Virtual Keyboard
 * https://github.com/gaurav190901/Opensource-Multilingual-Virtual-Keyboard
 * MIT License (c) 2026 Gourav Gore
 */

// Modern-browser build (no legacy polyfills): less than half the size
import SimpleKeyboard from "simple-keyboard/build/index.modern.esm.js";
import simpleKeyboardCss from "simple-keyboard/build/css/index.css";
import panelCss from "./styles.css";
import { LAYOUTS } from "./layouts.js";

/* global __VERSION__ */
export const version = typeof __VERSION__ !== "undefined" ? __VERSION__ : "dev";

export const layouts = LAYOUTS;

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600" +
  "&family=Noto+Sans+Devanagari:wght@400;600&family=Noto+Sans+Telugu:wght@400;600" +
  "&family=Noto+Sans+Bengali:wght@400;600&family=Noto+Sans+Tamil:wght@400;600&display=swap";

const STORAGE_KEY = "mlk-language";
const FUNCTION_KEY = /^\{\w+\}$/;
const COMBINING_MARK = /^\p{M}/u;
const TEXT_INPUT_TYPES = ["text", "search", "url", "tel", "email", "password"];

const DEFAULTS = {
  language: null, // starting language; falls back to remembered, then first
  languages: null, // which languages to offer (default: all)
  layouts: {}, // extra/overriding layouts: { code: { name, default, shift } }
  draggable: true,
  openOnFocus: true,
  loadFonts: true,
  rememberLanguage: true,
  suppressNativeKeyboard: false,
  onChange: null, // (value, field) => void
  onLanguageChange: null, // (language) => void
  onOpen: null,
  onClose: null,
  onEnter: null // (field) => void; default: newline in textarea, close in input
};

/* ---------- helpers ---------- */

function injectAssets(loadFonts) {
  if (!document.getElementById("mlk-styles")) {
    const style = document.createElement("style");
    style.id = "mlk-styles";
    style.textContent = simpleKeyboardCss + "\n" + panelCss;
    document.head.appendChild(style);
  }
  if (loadFonts && !document.getElementById("mlk-fonts")) {
    const link = document.createElement("link");
    link.id = "mlk-fonts";
    link.rel = "stylesheet";
    link.href = FONT_URL;
    document.head.appendChild(link);
  }
}

function buildDisplay(allLayouts) {
  const display = {
    "{shift}": "⇧",
    "{bksp}": "⌫",
    "{space}": "space",
    "{enter}": "↵"
  };
  // Vowel signs / virama are combining marks; show them on a dotted circle
  Object.values(allLayouts).forEach(layout =>
    ["default", "shift"].forEach(layer =>
      (layout[layer] || []).forEach(row =>
        row.split(" ").forEach(key => {
          if (COMBINING_MARK.test(key)) display[key] = "◌" + key;
        })
      )
    )
  );
  return display;
}

function storageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function storageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (_) {
    /* storage unavailable: ignore */
  }
}

function isTextField(el) {
  if (!el || el.nodeType !== 1) return false;
  if (el.tagName === "TEXTAREA") return true;
  return el.tagName === "INPUT" && TEXT_INPUT_TYPES.includes(el.type || "text");
}

/* Set .value through the native setter so frameworks that track the value
   (React, Vue, etc.) notice the change when we fire the input event. */
function setNativeValue(field, value) {
  const proto =
    field.tagName === "TEXTAREA"
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(proto, "value");
  if (descriptor && descriptor.set) descriptor.set.call(field, value);
  else field.value = value;
}

function getCaret(field) {
  try {
    return field.selectionStart;
  } catch (_) {
    return null; // e.g. type="email" doesn't expose a selection
  }
}

function setCaret(field, pos) {
  try {
    field.setSelectionRange(pos, pos);
  } catch (_) {
    /* not supported for this input type */
  }
}

function makeMatcher(target) {
  if (typeof target === "string") {
    return el => isTextField(el) && el.matches(target);
  }
  const set = new Set(
    target && typeof target.length === "number" && !target.tagName
      ? Array.from(target)
      : [target]
  );
  return el => set.has(el) && isTextField(el);
}

function el(tag, className, attrs = {}) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  return node;
}

/* ---------- keyboard instance ---------- */

class KeyboardInstance {
  constructor(target, options) {
    if (typeof document === "undefined") {
      throw new Error("MultilingualKeyboard.attach() must be called in a browser.");
    }
    if (!target) {
      throw new Error("MultilingualKeyboard.attach() needs a target: a CSS selector, element or list of elements.");
    }

    this.options = { ...DEFAULTS, ...options };
    this.layouts = { ...LAYOUTS, ...this.options.layouts };
    this.languages = (this.options.languages || Object.keys(this.layouts)).filter(
      code => this.layouts[code]
    );
    if (!this.languages.length) {
      throw new Error("MultilingualKeyboard: none of the requested languages exist.");
    }

    this.target = target;
    this.matches = makeMatcher(target);
    this.field = null;
    this.moved = false;
    this.drag = null;
    this.writing = false;
    this.listeners = [];
    this.inputModeChanged = new Map();

    injectAssets(this.options.loadFonts);
    this.buildPanel();

    const startLang = [
      this.options.language,
      this.options.rememberLanguage ? storageGet(STORAGE_KEY) : null,
      this.languages[0]
    ].find(code => code && this.languages.includes(code));

    this.keyboard = new SimpleKeyboard(this.keysEl, {
      layout: this.layerSet(startLang),
      layoutName: "default",
      display: buildDisplay(this.layouts),
      mergeDisplay: false,
      preventMouseDownDefault: true, // keep focus and caret in the field
      onChange: value => this.handleKeyboardChange(value),
      onKeyPress: button => this.handleKeyPress(button)
    });

    this.bindEvents();
    this.setLanguage(startLang, { silent: true });

    if (this.options.suppressNativeKeyboard) this.eachCurrentField(f => this.suppress(f));
  }

  /* ----- DOM ----- */

  buildPanel() {
    const panel = el("div", "mlk-panel", { role: "region", "aria-label": "On-screen keyboard" });
    panel.hidden = true;
    if (this.options.draggable) panel.classList.add("mlk-draggable");

    const header = el("div", "mlk-header");
    const grip = el("span", "mlk-grip", { "aria-hidden": "true" });
    grip.textContent = "⠿";

    const select = el("select", "mlk-lang", { "aria-label": "Keyboard language" });
    this.languages.forEach(code => {
      const opt = el("option", "", { value: code });
      opt.textContent = this.layouts[code].name || code;
      select.appendChild(opt);
    });
    if (this.languages.length < 2) select.hidden = true;

    const spacer = el("span", "mlk-spacer");
    const close = el("button", "mlk-close", { type: "button", "aria-label": "Close keyboard" });
    close.textContent = "✕";

    header.append(grip, select, spacer, close);
    const keys = el("div", "simple-keyboard");
    panel.append(header, keys);
    document.body.appendChild(panel);

    if (this.options.draggable) header.title = "Drag to move · double-click to dock";

    this.panel = panel;
    this.header = header;
    this.select = select;
    this.closeBtn = close;
    this.keysEl = keys;
  }

  layerSet(code) {
    const layout = this.layouts[code];
    return { default: layout.default, shift: layout.shift || layout.default };
  }

  /* ----- events ----- */

  on(target, type, handler, opts) {
    target.addEventListener(type, handler, opts);
    this.listeners.push(() => target.removeEventListener(type, handler, opts));
  }

  bindEvents() {
    // Fields: activate on focus, reopen on click, sync physical typing
    this.on(document, "focusin", e => {
      if (!this.matches(e.target)) return;
      this.activate(e.target);
      if (this.options.openOnFocus) this.open();
    });
    this.on(document, "click", e => {
      if (this.options.openOnFocus && this.matches(e.target) && !this.isOpen()) {
        this.activate(e.target);
        this.open();
      }
    });
    this.on(document, "input", e => {
      if (!this.writing && e.target === this.field) {
        // Physical typing or paste: sync both the text and the caret
        this.keyboard.setInput(this.field.value);
        const caret = getCaret(this.field);
        if (caret !== null && caret !== undefined) this.keyboard.setCaretPosition(caret);
      }
    });
    this.on(document, "keydown", e => {
      if (e.key === "Escape" && this.isOpen()) this.close();
    });
    this.on(window, "resize", () => this.clampToViewport());

    // Panel controls
    this.on(this.closeBtn, "click", () => this.close());
    this.on(this.select, "change", () => {
      this.setLanguage(this.select.value);
      this.refocus();
    });

    if (this.options.draggable) this.bindDrag();
  }

  bindDrag() {
    const header = this.header;
    const isControl = t => t.closest("button, select");

    this.on(header, "pointerdown", e => {
      if (e.button !== 0 || isControl(e.target)) return;
      const rect = this.panel.getBoundingClientRect();
      // Switch from the centred/docked CSS position to explicit coordinates
      Object.assign(this.panel.style, {
        transform: "none",
        bottom: "auto",
        left: rect.left + "px",
        top: rect.top + "px"
      });
      this.drag = { dx: e.clientX - rect.left, dy: e.clientY - rect.top };
      if (header.setPointerCapture) header.setPointerCapture(e.pointerId);
      this.panel.classList.add("mlk-dragging");
      e.preventDefault();
    });

    this.on(header, "pointermove", e => {
      if (!this.drag) return;
      this.moved = true;
      this.moveTo(e.clientX - this.drag.dx, e.clientY - this.drag.dy);
    });

    const end = e => {
      if (!this.drag) return;
      this.drag = null;
      this.panel.classList.remove("mlk-dragging");
      if (header.hasPointerCapture && header.hasPointerCapture(e.pointerId)) {
        header.releasePointerCapture(e.pointerId);
      }
    };
    this.on(header, "pointerup", end);
    this.on(header, "pointercancel", end);

    this.on(header, "dblclick", e => {
      if (!isControl(e.target)) this.dock();
    });
  }

  moveTo(x, y) {
    const maxX = Math.max(0, window.innerWidth - this.panel.offsetWidth);
    const maxY = Math.max(0, window.innerHeight - this.panel.offsetHeight);
    this.panel.style.left = Math.min(Math.max(0, x), maxX) + "px";
    this.panel.style.top = Math.min(Math.max(0, y), maxY) + "px";
  }

  clampToViewport() {
    if (this.moved && this.isOpen()) {
      this.moveTo(this.panel.offsetLeft, this.panel.offsetTop);
    }
  }

  /* ----- field handling ----- */

  eachCurrentField(fn) {
    if (typeof this.target === "string") {
      document.querySelectorAll(this.target).forEach(f => this.matches(f) && fn(f));
    } else {
      const list =
        typeof this.target.length === "number" && !this.target.tagName
          ? Array.from(this.target)
          : [this.target];
      list.forEach(f => this.matches(f) && fn(f));
    }
  }

  suppress(field) {
    if (this.inputModeChanged.has(field)) return;
    this.inputModeChanged.set(field, field.getAttribute("inputmode"));
    field.setAttribute("inputmode", "none");
  }

  activate(field) {
    this.field = field;
    if (this.options.suppressNativeKeyboard) this.suppress(field);
    this.keyboard.setInput(field.value);
    const caret = getCaret(field);
    if (caret !== null && caret !== undefined) this.keyboard.setCaretPosition(caret);
  }

  refocus() {
    if (!this.field || !this.field.isConnected) return;
    const caret = this.keyboard.getCaretPosition();
    this.field.focus({ preventScroll: true });
    if (caret !== null && caret !== undefined) setCaret(this.field, caret);
  }

  handleKeyboardChange(value) {
    const field = this.field;
    if (!field || !field.isConnected) return;

    // Respect readonly/disabled/maxlength on the host field
    const tooLong = field.maxLength > 0 && value.length > field.maxLength;
    if (field.readOnly || field.disabled || tooLong) {
      this.keyboard.setInput(field.value);
      return;
    }

    this.writing = true;
    setNativeValue(field, value);
    field.dispatchEvent(new Event("input", { bubbles: true }));
    this.writing = false;

    this.refocus();
    if (this.options.onChange) this.options.onChange(value, field);
  }

  handleKeyPress(button) {
    if (button === "{shift}") {
      this.setLayer(this.keyboard.options.layoutName === "default" ? "shift" : "default");
      return;
    }

    if (button === "{enter}") {
      this.handleEnter();
      return;
    }

    const layout = this.layouts[this.language];
    if (
      layout.oneShotShift &&
      this.keyboard.options.layoutName === "shift" &&
      !FUNCTION_KEY.test(button)
    ) {
      // Defer so the shifted character is inserted before switching back
      setTimeout(() => this.setLayer("default"), 0);
    }
  }

  handleEnter() {
    const field = this.field;
    if (this.options.onEnter) {
      this.options.onEnter(field);
    } else if (field && field.tagName === "TEXTAREA") {
      // Insert a newline at the caret
      const caret = this.keyboard.getCaretPosition();
      const value = this.keyboard.getInput();
      const pos = caret === null || caret === undefined ? value.length : caret;
      const next = value.slice(0, pos) + "\n" + value.slice(pos);
      this.keyboard.setInput(next);
      this.keyboard.setCaretPosition(pos + 1);
      this.handleKeyboardChange(next);
    } else {
      this.close();
    }
  }

  setLayer(name) {
    this.keyboard.setOptions({ layoutName: name });
    if (name === "shift") this.keyboard.addButtonTheme("{shift}", "mlk-shift-active");
    else this.keyboard.removeButtonTheme("{shift}", "mlk-shift-active");
    this.clampToViewport(); // layers differ in height
  }

  /* ----- public API ----- */

  setLanguage(code, { silent = false } = {}) {
    if (!this.languages.includes(code)) {
      console.warn(`MultilingualKeyboard: unknown language "${code}".`);
      return this;
    }
    this.language = code;
    this.select.value = code;
    this.panel.lang = code;
    this.keyboard.removeButtonTheme("{shift}", "mlk-shift-active");
    this.keyboard.setOptions({ layout: this.layerSet(code), layoutName: "default" });
    if (this.options.rememberLanguage) storageSet(STORAGE_KEY, code);
    this.clampToViewport();
    if (!silent && this.options.onLanguageChange) this.options.onLanguageChange(code);
    return this;
  }

  getLanguage() {
    return this.language;
  }

  open(field) {
    if (field) {
      if (!this.matches(field)) {
        console.warn("MultilingualKeyboard: open() was given a field this keyboard isn't attached to.");
      } else {
        this.activate(field);
        this.refocus();
      }
    }
    if (this.isOpen()) return this;
    this.panel.hidden = false;
    this.clampToViewport();
    this.revealField();
    if (this.options.onOpen) this.options.onOpen();
    return this;
  }

  close() {
    if (!this.isOpen()) return this;
    this.panel.hidden = true;
    if (this.options.onClose) this.options.onClose();
    return this;
  }

  toggle() {
    return this.isOpen() ? this.close() : this.open();
  }

  isOpen() {
    return !this.panel.hidden;
  }

  /* Put the keyboard back in its default spot at the bottom of the screen */
  dock() {
    this.moved = false;
    this.panel.style.cssText = "";
    this.revealField();
    return this;
  }

  /* If the docked keyboard covers the active field, scroll the page */
  revealField() {
    if (this.moved || !this.field || !this.isOpen()) return;
    const f = this.field.getBoundingClientRect();
    const p = this.panel.getBoundingClientRect();
    const overlap = f.bottom - p.top + 16;
    if (overlap > 16 && f.top < p.top) window.scrollBy({ top: overlap, behavior: "smooth" });
  }

  destroy() {
    this.listeners.forEach(off => off());
    this.listeners = [];
    this.inputModeChanged.forEach((original, field) => {
      if (original === null) field.removeAttribute("inputmode");
      else field.setAttribute("inputmode", original);
    });
    this.inputModeChanged.clear();
    if (this.keyboard) this.keyboard.destroy();
    this.panel.remove();
    this.field = null;
  }
}

/**
 * Attach an on-screen keyboard to text fields.
 * @param {string|Element|Element[]|NodeList} target CSS selector, element, or list of elements
 * @param {object} [options]
 */
export function attach(target, options = {}) {
  return new KeyboardInstance(target, options);
}

export default { attach, layouts, version };
