/*
 * Built-in keyboard layouts.
 *
 * Each language has:
 *   name          Display name shown in the language menu
 *   default       Main layer (rows of space-separated keys)
 *   shift         Second layer reached with {shift}
 *   oneShotShift  true = shift applies to one key, then returns (like a
 *                 phone keyboard); false = shift stays on until pressed again
 *
 * Special keys: {shift} {bksp} {space} {enter}
 */

const LATIN_DIGITS = "1 2 3 4 5 6 7 8 9 0";
const PUNCT_ROW = "{shift} . , ? ! - ( ) {bksp}";

/* Hindi and Marathi share Devanagari; Marathi adds a few letters. */
function devanagari(name, { extraConsonants = "", extraVowels = "" } = {}) {
  return {
    name,
    oneShotShift: false,
    default: [
      "ा ि ी ु ू ृ े ै ो ौ ्",
      "क ख ग घ ङ च छ ज झ ञ",
      "ट ठ ड ढ ण त थ द ध न",
      `प फ ब भ म य र ल व${extraConsonants}`,
      "{shift} श ष स ह ं ः ँ {bksp}",
      "{space} । {enter}"
    ],
    shift: [
      `अ आ इ ई उ ऊ ऋ ए ऐ ओ औ${extraVowels}`,
      "क्ष त्र ज्ञ श्र ़ ॐ ॥",
      "१ २ ३ ४ ५ ६ ७ ८ ९ ०",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} । {enter}"
    ]
  };
}

export const LAYOUTS = {
  en: {
    name: "English",
    oneShotShift: true,
    default: [
      "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "q w e r t y u i o p [ ] \\",
      "a s d f g h j k l ; ' {enter}",
      "{shift} z x c v b n m , . / {shift}",
      "{space}"
    ],
    shift: [
      "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "Q W E R T Y U I O P { } |",
      'A S D F G H J K L : " {enter}',
      "{shift} Z X C V B N M < > ? {shift}",
      "{space}"
    ]
  },

  hi: devanagari("Hindi"),

  mr: devanagari("Marathi", { extraConsonants: " ळ ऱ", extraVowels: " ॲ ऑ" }),

  te: {
    name: "Telugu",
    oneShotShift: false,
    default: [
      "ా ి ీ ు ూ ృ ె ే ై ొ ో ౌ",
      "క ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ",
      "ట ఠ డ ఢ ణ త థ ద ధ న",
      "ప ఫ బ భ మ య ర ల వ ళ",
      "{shift} శ ష స హ ఱ ం ః ్ {bksp}",
      "{space} {enter}"
    ],
    shift: [
      "అ ఆ ఇ ఈ ఉ ఊ ఋ ఎ ఏ ఐ ఒ ఓ ఔ",
      "క్ష శ్రీ జ్ఞ ఁ",
      "౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯ ౦",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} {enter}"
    ]
  },

  bn: {
    name: "Bengali",
    oneShotShift: false,
    default: [
      "া ি ী ু ূ ৃ ে ৈ ো ৌ ্",
      "ক খ গ ঘ ঙ চ ছ জ ঝ ঞ",
      "ট ঠ ড ঢ ণ ত থ দ ধ ন",
      "প ফ ব ভ ম য র ল শ ষ",
      "{shift} স হ ড় ঢ় য় ৎ ং ঃ ঁ {bksp}",
      "{space} । {enter}"
    ],
    shift: [
      "অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ",
      "ক্ষ জ্ঞ ় ৳ ॥",
      "১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ০",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} । {enter}"
    ]
  },

  ta: {
    name: "Tamil",
    oneShotShift: false,
    default: [
      "ா ி ீ ு ூ ெ ே ை ொ ோ ௌ ்",
      "க ங ச ஞ ட ண த ந ப ம",
      "ய ர ல வ ழ ள ற ன",
      "{shift} ஜ ஷ ஸ ஹ ஃ {bksp}",
      "{space} {enter}"
    ],
    shift: [
      "அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ",
      "க்ஷ ஸ்ரீ ௐ",
      "௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯ ௦",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} {enter}"
    ]
  }
};
