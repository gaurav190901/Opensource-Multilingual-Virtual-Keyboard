const Keyboard = window.SimpleKeyboard.default;

/* =========================
   Keyboard Layouts
   default: vowel signs + consonants
   shift:   independent vowels, conjuncts, digits, punctuation
========================= */

const LATIN_DIGITS = "1 2 3 4 5 6 7 8 9 0";
const PUNCT_ROW = "{shift} . , ? ! - ( ) {bksp}";

/* Hindi and Marathi share Devanagari; Marathi adds a few letters. */
function devanagari({ extraConsonants = "", extraVowels = "" } = {}) {
  return {
    default: [
      "ा ि ी ु ू ृ े ै ो ौ ्",
      "क ख ग घ ङ च छ ज झ ञ",
      "ट ठ ड ढ ण त थ द ध न",
      `प फ ब भ म य र ल व${extraConsonants}`,
      "{shift} श ष स ह ं ः ँ {bksp}",
      "{space} ।"
    ],
    shift: [
      `अ आ इ ई उ ऊ ऋ ए ऐ ओ औ${extraVowels}`,
      "क्ष त्र ज्ञ श्र ़ ॐ ॥",
      "१ २ ३ ४ ५ ६ ७ ८ ९ ०",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} ।"
    ]
  };
}

const layouts = {
  en: {
    default: [
      "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "q w e r t y u i o p [ ] \\",
      "a s d f g h j k l ; '",
      "{shift} z x c v b n m , . / {shift}",
      "{space}"
    ],
    shift: [
      "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "Q W E R T Y U I O P { } |",
      'A S D F G H J K L : "',
      "{shift} Z X C V B N M < > ? {shift}",
      "{space}"
    ]
  },

  hi: devanagari(),

  mr: devanagari({ extraConsonants: " ळ ऱ", extraVowels: " ॲ ऑ" }),

  te: {
    default: [
      "ా ి ీ ు ూ ృ ె ే ై ొ ో ౌ",
      "క ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ",
      "ట ఠ డ ఢ ణ త థ ద ధ న",
      "ప ఫ బ భ మ య ర ల వ ళ",
      "{shift} శ ష స హ ఱ ం ః ్ {bksp}",
      "{space}"
    ],
    shift: [
      "అ ఆ ఇ ఈ ఉ ఊ ఋ ఎ ఏ ఐ ఒ ఓ ఔ",
      "క్ష శ్రీ జ్ఞ ఁ",
      "౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯ ౦",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space}"
    ]
  },

  bn: {
    default: [
      "া ি ী ু ূ ৃ ে ৈ ো ৌ ্",
      "ক খ গ ঘ ঙ চ ছ জ ঝ ঞ",
      "ট ঠ ড ঢ ণ ত থ দ ধ ন",
      "প ফ ব ভ ম য র ল শ ষ",
      "{shift} স হ ড় ঢ় য় ৎ ং ঃ ঁ {bksp}",
      "{space} ।"
    ],
    shift: [
      "অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ",
      "ক্ষ জ্ঞ ় ৳ ॥",
      "১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} ।"
    ]
  },

  ta: {
    default: [
      "ா ி ீ ு ூ ெ ே ை ொ ோ ௌ ்",
      "க ங ச ஞ ட ண த ந ப ம",
      "ய ர ல வ ழ ள ற ன",
      "{shift} ஜ ஷ ஸ ஹ ஃ {bksp}",
      "{space}"
    ],
    shift: [
      "அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ",
      "க்ஷ ஸ்ரீ ௐ",
      "௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯ ௦",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space}"
    ]
  }
};

const LANG_NAMES = {
  en: "English",
  hi: "Hindi",
  mr: "Marathi",
  te: "Telugu",
  bn: "Bengali",
  ta: "Tamil"
};

/* =========================
   Key labels
   Vowel signs / virama are combining marks; show them on a dotted
   circle so they're readable on their own.
========================= */

function buildDisplay() {
  const display = {
    "{shift}": "⇧",
    "{bksp}": "⌫",
    "{space}": "space"
  };
  const isCombining = /^\p{M}/u;
  Object.values(layouts).forEach(layout =>
    Object.values(layout).forEach(rows =>
      rows.forEach(row =>
        row.split(" ").forEach(key => {
          if (isCombining.test(key)) display[key] = "◌" + key;
        })
      )
    )
  );
  return display;
}

/* =========================
   Elements
========================= */

const textInput = document.getElementById("textInput");
const langSelect = document.getElementById("langSelect");
const kbBtn = document.getElementById("kbBtn");
const kbClose = document.getElementById("kbClose");
const kbContainer = document.getElementById("keyboardContainer");
const kbLangLabel = document.getElementById("kbLangLabel");

/* =========================
   Keyboard Init
========================= */

const keyboard = new Keyboard({
  layout: layouts.hi,
  layoutName: "default",
  display: buildDisplay(),
  mergeDisplay: false,
  // Keep focus (and the caret) in the text field when tapping keys
  preventMouseDownDefault: true,
  onChange: input => {
    textInput.value = input;
    const caret = keyboard.getCaretPosition();
    if (caret !== null && caret !== undefined) {
      textInput.setSelectionRange(caret, caret);
    }
    textInput.focus();
  },
  onKeyPress: button => {
    // {bksp} and {space} are handled natively by simple-keyboard
    if (button === "{shift}") {
      toggleShift();
    } else if (
      // English: Shift applies to one character, like a phone keyboard
      langSelect.value === "en" &&
      keyboard.options.layoutName === "shift" &&
      !/^\{\w+\}$/.test(button) // ignore function keys like {space}
    ) {
      // Defer so the shifted character is inserted before switching back
      setTimeout(toggleShift, 0);
    }
  }
});

function toggleShift() {
  const next = keyboard.options.layoutName === "default" ? "shift" : "default";
  keyboard.setOptions({ layoutName: next });
  if (next === "shift") {
    keyboard.addButtonTheme("{shift}", "shift-active");
  } else {
    keyboard.removeButtonTheme("{shift}", "shift-active");
  }
  updateBodyPadding(); // layers differ in height
}

/* Keep the virtual keyboard in sync with physical typing / pasting */
textInput.addEventListener("input", e => {
  keyboard.setInput(e.target.value);
});

/* =========================
   Language Switch
========================= */

function setLanguage(lang) {
  if (!layouts[lang]) lang = "hi";
  langSelect.value = lang;
  keyboard.removeButtonTheme("{shift}", "shift-active");
  keyboard.setOptions({ layout: layouts[lang], layoutName: "default" });
  textInput.lang = lang;
  kbContainer.lang = lang;
  kbLangLabel.textContent = LANG_NAMES[lang];
  try {
    localStorage.setItem("kbLang", lang);
  } catch (_) {
    /* storage unavailable — ignore */
  }
  updateBodyPadding();
}

langSelect.addEventListener("change", e => setLanguage(e.target.value));

/* =========================
   Show / Hide Keyboard
========================= */

/* While docked at the bottom, pad the page so nothing hides behind the
   keyboard. Once the user drags it somewhere else, no padding is needed. */
function updateBodyPadding() {
  const docked = kbContainer.classList.contains("open") && !kbMoved;
  document.body.style.paddingBottom = docked
    ? kbContainer.offsetHeight + 20 + "px"
    : "";
  if (kbMoved) clampToViewport();
}

/* =========================
   Dragging (by the header bar)
========================= */

const kbHandle = document.getElementById("kbHandle");
let kbMoved = false;
let drag = null;

function moveTo(x, y) {
  const maxX = Math.max(0, window.innerWidth - kbContainer.offsetWidth);
  const maxY = Math.max(0, window.innerHeight - kbContainer.offsetHeight);
  kbContainer.style.left = Math.min(Math.max(0, x), maxX) + "px";
  kbContainer.style.top = Math.min(Math.max(0, y), maxY) + "px";
}

function clampToViewport() {
  if (!kbContainer.classList.contains("open")) return;
  moveTo(kbContainer.offsetLeft, kbContainer.offsetTop);
}

kbHandle.addEventListener("pointerdown", e => {
  if (e.button !== 0 || e.target.closest("button")) return;
  const rect = kbContainer.getBoundingClientRect();
  // Switch from the centred/bottom-docked CSS position to explicit coordinates
  kbContainer.style.transform = "none";
  kbContainer.style.bottom = "auto";
  kbContainer.style.left = rect.left + "px";
  kbContainer.style.top = rect.top + "px";
  drag = { dx: e.clientX - rect.left, dy: e.clientY - rect.top };
  kbHandle.setPointerCapture(e.pointerId);
  kbContainer.classList.add("dragging");
  e.preventDefault();
});

kbHandle.addEventListener("pointermove", e => {
  if (!drag) return;
  if (!kbMoved) {
    kbMoved = true;
    updateBodyPadding();
  }
  moveTo(e.clientX - drag.dx, e.clientY - drag.dy);
});

function endDrag(e) {
  if (!drag) return;
  drag = null;
  kbContainer.classList.remove("dragging");
  if (kbHandle.hasPointerCapture(e.pointerId)) {
    kbHandle.releasePointerCapture(e.pointerId);
  }
}
kbHandle.addEventListener("pointerup", endDrag);
kbHandle.addEventListener("pointercancel", endDrag);

/* Double-click the header to dock the keyboard back at the bottom */
kbHandle.addEventListener("dblclick", e => {
  if (e.target.closest("button")) return;
  kbMoved = false;
  kbContainer.style.cssText = "";
  updateBodyPadding();
});

function setKeyboardOpen(open) {
  kbContainer.classList.toggle("open", open);
  kbBtn.setAttribute("aria-expanded", String(open));
  kbBtn.setAttribute(
    "aria-label",
    open ? "Hide on-screen keyboard" : "Show on-screen keyboard"
  );
  updateBodyPadding();
  if (open) textInput.focus();
}

kbBtn.addEventListener("click", () =>
  setKeyboardOpen(!kbContainer.classList.contains("open"))
);
kbClose.addEventListener("click", () => setKeyboardOpen(false));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") setKeyboardOpen(false);
});
window.addEventListener("resize", updateBodyPadding);

/* =========================
   Restore saved language
========================= */

let savedLang = null;
try {
  savedLang = localStorage.getItem("kbLang");
} catch (_) {
  /* storage unavailable — ignore */
}
setLanguage(savedLang || "hi");
