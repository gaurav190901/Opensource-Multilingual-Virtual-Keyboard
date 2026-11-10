// Type definitions for multilingual-virtual-keyboard

export type BuiltInLanguage = "en" | "hi" | "mr" | "te" | "bn" | "ta";

export interface LayoutDefinition {
  /** Name shown in the language menu */
  name: string;
  /** Main layer: rows of space-separated keys. Special keys: {shift} {bksp} {space} {enter} */
  default: string[];
  /** Layer reached with {shift} */
  shift?: string[];
  /** true: shift applies to one key then turns off (phone-style). false: stays on until pressed again */
  oneShotShift?: boolean;
}

export type FieldTarget =
  | string
  | HTMLInputElement
  | HTMLTextAreaElement
  | ArrayLike<HTMLInputElement | HTMLTextAreaElement>;

export interface KeyboardOptions {
  /** Starting language. Default: last used (if remembered), otherwise the first in `languages` */
  language?: BuiltInLanguage | string;
  /** Languages to offer, in menu order. Default: all */
  languages?: Array<BuiltInLanguage | string>;
  /** Add new layouts or override built-in ones, keyed by language code */
  layouts?: Record<string, LayoutDefinition>;
  /** Let users drag the keyboard by its header. Default: true */
  draggable?: boolean;
  /** Open the keyboard when an attached field is focused or clicked. Default: true */
  openOnFocus?: boolean;
  /** Load Noto Sans fonts from Google Fonts. Set false to use your own fonts. Default: true */
  loadFonts?: boolean;
  /** Remember the chosen language in localStorage. Default: true */
  rememberLanguage?: boolean;
  /** Hide the phone/tablet's own keyboard on attached fields (inputmode="none"). Default: false */
  suppressNativeKeyboard?: boolean;
  /** Called after each on-screen key changes a field's value */
  onChange?: (value: string, field: HTMLInputElement | HTMLTextAreaElement) => void;
  /** Called when the user switches language */
  onLanguageChange?: (language: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
  /** Handle the ↵ key yourself. Default: newline in a textarea, close the keyboard in an input */
  onEnter?: (field: HTMLInputElement | HTMLTextAreaElement | null) => void;
}

export interface KeyboardInstance {
  /** Show the keyboard, optionally targeting a specific attached field */
  open(field?: HTMLInputElement | HTMLTextAreaElement): this;
  close(): this;
  toggle(): this;
  isOpen(): boolean;
  setLanguage(language: BuiltInLanguage | string): this;
  getLanguage(): string;
  /** Move a dragged keyboard back to the bottom of the screen */
  dock(): this;
  /** Remove the keyboard and all its event listeners */
  destroy(): void;
}

export declare function attach(target: FieldTarget, options?: KeyboardOptions): KeyboardInstance;
export declare const layouts: Record<BuiltInLanguage, LayoutDefinition>;
export declare const version: string;

declare const MultilingualKeyboard: {
  attach: typeof attach;
  layouts: typeof layouts;
  version: typeof version;
};
export default MultilingualKeyboard;
