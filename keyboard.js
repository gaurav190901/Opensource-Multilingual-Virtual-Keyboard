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
    if (button === "{shift}") toggleShift();
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

function updateBodyPadding() {
  document.body.style.paddingBottom = kbContainer.classList.contains("open")
    ? kbContainer.offsetHeight + 20 + "px"
    : "";
}

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
