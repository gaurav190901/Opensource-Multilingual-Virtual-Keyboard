var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  attach: () => attach,
  default: () => index_default,
  layouts: () => layouts,
  version: () => version
});
module.exports = __toCommonJS(index_exports);

// node_modules/simple-keyboard/build/index.modern.esm.js
/*!
 * 
 *   simple-keyboard v3.8.192 (index.modern.esm.js - Modern Browsers bundle, ESM output)
 *   https://github.com/hodgef/simple-keyboard
 *
 *   NOTE: This modern browsers bundle (index.modern.esm.js) removes all polyfills
 *   included in the standard version. Use this if you are supporting
 *   modern browsers only. Otherwise, use the standard version (index.js).
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
function t(t2) {
  return (function(t3) {
    if (Array.isArray(t3)) return n(t3);
  })(t2) || (function(t3) {
    if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"]) return Array.from(t3);
  })(t2) || e(t2) || (function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  })();
}
function e(t2, e2) {
  if (t2) {
    if ("string" == typeof t2) return n(t2, e2);
    var o2 = {}.toString.call(t2).slice(8, -1);
    return "Object" === o2 && t2.constructor && (o2 = t2.constructor.name), "Map" === o2 || "Set" === o2 ? Array.from(t2) : "Arguments" === o2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o2) ? n(t2, e2) : void 0;
  }
}
function n(t2, e2) {
  (null == e2 || e2 > t2.length) && (e2 = t2.length);
  for (var n2 = 0, o2 = Array(e2); n2 < e2; n2++) o2[n2] = t2[n2];
  return o2;
}
function o(t2) {
  return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  }, o(t2);
}
function i(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var o2 = e2[n2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t2, a(o2.key), o2);
  }
}
function s(t2, e2, n2) {
  return (e2 = a(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
}
function a(t2) {
  var e2 = (function(t3, e3) {
    if ("object" != o(t3) || !t3) return t3;
    var n2 = t3[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var i2 = n2.call(t3, e3 || "default");
      if ("object" != o(i2)) return i2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e3 ? String : Number)(t3);
  })(t2, "string");
  return "symbol" == o(e2) ? e2 : e2 + "";
}
var r = (function() {
  return n2 = function t2(e2) {
    var n3 = e2.getOptions, o2 = e2.getCaretPosition, i2 = e2.getCaretPositionEnd, a3 = e2.dispatch;
    !(function(t3, e3) {
      if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
    })(this, t2), s(this, "getOptions", void 0), s(this, "getCaretPosition", void 0), s(this, "getCaretPositionEnd", void 0), s(this, "dispatch", void 0), s(this, "maxLengthReached", void 0), s(this, "isStandardButton", function(t3) {
      return t3 && !("{" === t3[0] && "}" === t3[t3.length - 1]);
    }), this.getOptions = n3, this.getCaretPosition = o2, this.getCaretPositionEnd = i2, this.dispatch = a3, t2.bindMethods(t2, this);
  }, a2 = [{ key: "getButtonType", value: function(t2) {
    return t2.includes("{") && t2.includes("}") && "{//}" !== t2 ? "functionBtn" : "standardBtn";
  } }, { key: "getButtonClass", value: function(t2) {
    var e2 = this.getButtonType(t2), n3 = t2.replace("{", "").replace("}", ""), o2 = "";
    return "standardBtn" !== e2 && (o2 = " hg-button-".concat(n3)), "hg-".concat(e2).concat(o2);
  } }, { key: "getDefaultDiplay", value: function() {
    return { "{bksp}": "backspace", "{backspace}": "backspace", "{enter}": "< enter", "{shift}": "shift", "{shiftleft}": "shift", "{shiftright}": "shift", "{alt}": "alt", "{s}": "shift", "{tab}": "tab", "{lock}": "caps", "{capslock}": "caps", "{accept}": "Submit", "{space}": " ", "{//}": " ", "{esc}": "esc", "{escape}": "esc", "{f1}": "f1", "{f2}": "f2", "{f3}": "f3", "{f4}": "f4", "{f5}": "f5", "{f6}": "f6", "{f7}": "f7", "{f8}": "f8", "{f9}": "f9", "{f10}": "f10", "{f11}": "f11", "{f12}": "f12", "{numpaddivide}": "/", "{numlock}": "lock", "{arrowup}": "\u2191", "{arrowleft}": "\u2190", "{arrowdown}": "\u2193", "{arrowright}": "\u2192", "{prtscr}": "print", "{scrolllock}": "scroll", "{pause}": "pause", "{insert}": "ins", "{home}": "home", "{pageup}": "up", "{delete}": "del", "{forwarddelete}": "del", "{end}": "end", "{pagedown}": "down", "{numpadmultiply}": "*", "{numpadsubtract}": "-", "{numpadadd}": "+", "{numpadenter}": "enter", "{period}": ".", "{numpaddecimal}": ".", "{numpad0}": "0", "{numpad1}": "1", "{numpad2}": "2", "{numpad3}": "3", "{numpad4}": "4", "{numpad5}": "5", "{numpad6}": "6", "{numpad7}": "7", "{numpad8}": "8", "{numpad9}": "9" };
  } }, { key: "getButtonDisplayName", value: function(t2, e2) {
    return (e2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? Object.assign({}, this.getDefaultDiplay(), e2) : e2 || this.getDefaultDiplay())[t2] || t2;
  } }, { key: "getUpdatedInput", value: function(t2, e2, n3) {
    var o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n3, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = this.getOptions(), a3 = [n3, o2, i2], r3 = e2;
    return ("{bksp}" === t2 || "{backspace}" === t2) && r3.length > 0 ? r3 = this.removeAt.apply(this, [r3].concat(a3)) : ("{delete}" === t2 || "{forwarddelete}" === t2) && r3.length > 0 ? r3 = this.removeForwardsAt.apply(this, [r3].concat(a3)) : "{space}" === t2 ? r3 = this.addStringAt.apply(this, [r3, " "].concat(a3)) : "{tab}" !== t2 || "boolean" == typeof s2.tabCharOnTab && false === s2.tabCharOnTab ? "{enter}" !== t2 && "{numpadenter}" !== t2 || !s2.newLineOnEnter ? t2.includes("numpad") && Number.isInteger(Number(t2[t2.length - 2])) ? r3 = this.addStringAt.apply(this, [r3, t2[t2.length - 2]].concat(a3)) : "{numpaddivide}" === t2 ? r3 = this.addStringAt.apply(this, [r3, "/"].concat(a3)) : "{numpadmultiply}" === t2 ? r3 = this.addStringAt.apply(this, [r3, "*"].concat(a3)) : "{numpadsubtract}" === t2 ? r3 = this.addStringAt.apply(this, [r3, "-"].concat(a3)) : "{numpadadd}" === t2 ? r3 = this.addStringAt.apply(this, [r3, "+"].concat(a3)) : "{numpaddecimal}" === t2 ? r3 = this.addStringAt.apply(this, [r3, "."].concat(a3)) : "{" === t2 || "}" === t2 ? r3 = this.addStringAt.apply(this, [r3, t2].concat(a3)) : t2.includes("{") || t2.includes("}") || (r3 = this.addStringAt.apply(this, [r3, t2].concat(a3))) : r3 = this.addStringAt.apply(this, [r3, "\n"].concat(a3)) : r3 = this.addStringAt.apply(this, [r3, "	"].concat(a3)), s2.debug && console.log("Input will be: " + r3), r3;
  } }, { key: "updateCaretPos", value: function(t2) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = this.updateCaretPosAction(t2, e2);
    this.dispatch(function(t3) {
      t3.setCaretPosition(n3);
    });
  } }, { key: "updateCaretPosAction", value: function(t2) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = this.getOptions(), o2 = this.getCaretPosition();
    return null != o2 && (e2 ? o2 > 0 && (o2 -= t2) : o2 += t2), n3.debug && console.log("Caret at:", o2), o2;
  } }, { key: "addStringAt", value: function(t2, e2) {
    var n3, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t2.length, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t2.length, s2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return o2 || 0 === o2 ? (n3 = [t2.slice(0, o2), e2, t2.slice(i2)].join(""), this.isMaxLengthReached() || s2 && this.updateCaretPos(e2.length)) : n3 = t2 + e2, n3;
  } }, { key: "removeAt", value: function(t2) {
    var e2, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t2.length, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t2.length, i2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (0 === n3 && 0 === o2) return t2;
    if (n3 === o2) {
      var s2 = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
      n3 && n3 >= 0 ? t2.substring(n3 - 2, n3).match(s2) ? (e2 = t2.substr(0, n3 - 2) + t2.substr(n3), i2 && this.updateCaretPos(2, true)) : (e2 = t2.substr(0, n3 - 1) + t2.substr(n3), i2 && this.updateCaretPos(1, true)) : t2.slice(-2).match(s2) ? (e2 = t2.slice(0, -2), i2 && this.updateCaretPos(2, true)) : (e2 = t2.slice(0, -1), i2 && this.updateCaretPos(1, true));
    } else e2 = t2.slice(0, n3) + t2.slice(o2), i2 && this.dispatch(function(t3) {
      t3.setCaretPosition(n3);
    });
    return e2;
  } }, { key: "removeForwardsAt", value: function(t2) {
    var e2, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t2.length, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t2.length, i2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return null != t2 && t2.length && null !== n3 ? (n3 === o2 ? e2 = t2.substring(n3, n3 + 2).match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g) ? t2.substr(0, n3) + t2.substr(n3 + 2) : t2.substr(0, n3) + t2.substr(n3 + 1) : (e2 = t2.slice(0, n3) + t2.slice(o2), i2 && this.dispatch(function(t3) {
      t3.setCaretPosition(n3);
    })), e2) : t2;
  } }, { key: "handleMaxLength", value: function(t2, e2) {
    var n3 = this.getOptions(), i2 = n3.maxLength, s2 = t2[n3.inputName || "default"], a3 = e2.length - 1 >= i2;
    if (e2.length <= s2.length) return false;
    if (Number.isInteger(i2)) return n3.debug && console.log("maxLength (num) reached:", a3), a3 ? (this.maxLengthReached = true, true) : (this.maxLengthReached = false, false);
    if ("object" === o(i2)) {
      var r3 = e2.length - 1 >= i2[n3.inputName || "default"];
      return n3.debug && console.log("maxLength (obj) reached:", r3), r3 ? (this.maxLengthReached = true, true) : (this.maxLengthReached = false, false);
    }
  } }, { key: "isMaxLengthReached", value: function() {
    return Boolean(this.maxLengthReached);
  } }, { key: "isTouchDevice", value: function() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  } }, { key: "pointerEventsSupported", value: function() {
    return !!window.PointerEvent;
  } }, { key: "camelCase", value: function(t2) {
    return t2 ? t2.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(t3, e2) {
      return e2.length ? t3 + e2[0].toUpperCase() + e2.slice(1) : t3;
    }) : "";
  } }, { key: "chunkArray", value: function(e2, n3) {
    return t(Array(Math.ceil(e2.length / n3))).map(function(t2, o2) {
      return e2.slice(n3 * o2, n3 + n3 * o2);
    });
  } }, { key: "escapeRegex", value: function(t2) {
    return t2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  } }, { key: "getRtlOffset", value: function(t2, e2) {
    var n3 = t2, o2 = e2.indexOf("\u202B");
    return o2 < t2 && -1 != o2 && n3--, e2.indexOf("\u202C") < t2 && -1 != o2 && n3--, n3 < 0 ? 0 : n3;
  } }, { key: "isConstructor", value: function(t2) {
    try {
      Reflect.construct(String, [], t2);
    } catch (t3) {
      return false;
    }
    return true;
  } }], r2 = [{ key: "bindMethods", value: function(t2, n3) {
    var o2, i2 = (function(t3, n4) {
      var o3 = "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
      if (!o3) {
        if (Array.isArray(t3) || (o3 = e(t3)) || n4 && t3 && "number" == typeof t3.length) {
          o3 && (t3 = o3);
          var i3 = 0, s3 = function() {
          };
          return { s: s3, n: function() {
            return i3 >= t3.length ? { done: true } : { done: false, value: t3[i3++] };
          }, e: function(t4) {
            throw t4;
          }, f: s3 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var a3, r3 = true, u2 = false;
      return { s: function() {
        o3 = o3.call(t3);
      }, n: function() {
        var t4 = o3.next();
        return r3 = t4.done, t4;
      }, e: function(t4) {
        u2 = true, a3 = t4;
      }, f: function() {
        try {
          r3 || null == o3.return || o3.return();
        } finally {
          if (u2) throw a3;
        }
      } };
    })(Object.getOwnPropertyNames(t2.prototype));
    try {
      for (i2.s(); !(o2 = i2.n()).done; ) {
        var s2 = o2.value;
        "constructor" === s2 || "bindMethods" === s2 || (n3[s2] = n3[s2].bind(n3));
      }
    } catch (t3) {
      i2.e(t3);
    } finally {
      i2.f();
    }
  } }], a2 && i(n2.prototype, a2), r2 && i(n2, r2), Object.defineProperty(n2, "prototype", { writable: false }), n2;
  var n2, a2, r2;
})();
s(r, "noop", function() {
});
var u = r;
function l(t2) {
  return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  }, l(t2);
}
function c(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var o2 = e2[n2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t2, h(o2.key), o2);
  }
}
function d(t2, e2, n2) {
  return (e2 = h(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
}
function h(t2) {
  var e2 = (function(t3, e3) {
    if ("object" != l(t3) || !t3) return t3;
    var n2 = t3[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var o2 = n2.call(t3, e3 || "default");
      if ("object" != l(o2)) return o2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e3 ? String : Number)(t3);
  })(t2, "string");
  return "symbol" == l(e2) ? e2 : e2 + "";
}
var p = (function() {
  return t2 = function t3(e3) {
    var n3 = this, o2 = e3.dispatch, i2 = e3.getOptions;
    !(function(t4, e4) {
      if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
    })(this, t3), d(this, "getOptions", void 0), d(this, "dispatch", void 0), d(this, "isModifierKey", function(t4) {
      return t4.altKey || t4.ctrlKey || t4.shiftKey || ["Tab", "CapsLock", "Esc", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(t4.code || t4.key || n3.keyCodeToKey(null == t4 ? void 0 : t4.keyCode));
    }), this.dispatch = o2, this.getOptions = i2, u.bindMethods(t3, this);
  }, e2 = [{ key: "handleHighlightKeyDown", value: function(t3) {
    var e3 = this.getOptions();
    e3.physicalKeyboardHighlightPreventDefault && this.isModifierKey(t3) && (t3.preventDefault(), t3.stopImmediatePropagation());
    var n3 = this.getSimpleKeyboardLayoutKey(t3);
    this.dispatch(function(o2) {
      var i2, s2, a2 = o2.getButtonElement(n3), r2 = o2.getButtonElement("{".concat(n3, "}"));
      if (a2) i2 = a2, s2 = n3;
      else {
        if (!r2) return;
        i2 = r2, s2 = "{".concat(n3, "}");
      }
      var u2, l2, c2, d2, h2 = function(t4) {
        t4.style.background = e3.physicalKeyboardHighlightBgColor || "#dadce4", t4.style.color = e3.physicalKeyboardHighlightTextColor || "black";
      };
      if (i2) if (Array.isArray(i2)) {
        if (i2.forEach(function(t4) {
          return h2(t4);
        }), e3.physicalKeyboardHighlightPress) if (e3.physicalKeyboardHighlightPressUsePointerEvents) null === (u2 = i2[0]) || void 0 === u2 || null === (l2 = u2.onpointerdown) || void 0 === l2 || l2.call(u2, t3);
        else if (e3.physicalKeyboardHighlightPressUseClick) {
          var p2;
          null === (p2 = i2[0]) || void 0 === p2 || p2.click();
        } else o2.handleButtonClicked(s2, t3);
      } else h2(i2), e3.physicalKeyboardHighlightPress && (e3.physicalKeyboardHighlightPressUsePointerEvents ? null === (c2 = i2) || void 0 === c2 || null === (d2 = c2.onpointerdown) || void 0 === d2 || d2.call(c2, t3) : e3.physicalKeyboardHighlightPressUseClick ? i2.click() : o2.handleButtonClicked(s2, t3));
    });
  } }, { key: "handleHighlightKeyUp", value: function(t3) {
    var e3 = this.getOptions();
    e3.physicalKeyboardHighlightPreventDefault && this.isModifierKey(t3) && (t3.preventDefault(), t3.stopImmediatePropagation());
    var n3 = this.getSimpleKeyboardLayoutKey(t3);
    this.dispatch(function(o2) {
      var i2, s2, a2, r2 = o2.getButtonElement(n3) || o2.getButtonElement("{".concat(n3, "}")), u2 = function(t4) {
        t4.removeAttribute && t4.removeAttribute("style");
      };
      r2 && (Array.isArray(r2) ? (r2.forEach(function(t4) {
        return u2(t4);
      }), e3.physicalKeyboardHighlightPressUsePointerEvents && (null === (i2 = r2[0]) || void 0 === i2 || null === (s2 = i2.onpointerup) || void 0 === s2 || s2.call(i2, t3))) : (u2(r2), e3.physicalKeyboardHighlightPressUsePointerEvents && (null == r2 || null === (a2 = r2.onpointerup) || void 0 === a2 || a2.call(r2, t3))));
    });
  } }, { key: "getSimpleKeyboardLayoutKey", value: function(t3) {
    var e3, n3 = "", o2 = t3.code || t3.key || this.keyCodeToKey(null == t3 ? void 0 : t3.keyCode);
    return (n3 = null != o2 && o2.includes("Numpad") || null != o2 && o2.includes("Shift") || null != o2 && o2.includes("Space") || null != o2 && o2.includes("Backspace") || null != o2 && o2.includes("Control") || null != o2 && o2.includes("Alt") || null != o2 && o2.includes("Meta") ? t3.code || "" : t3.key || this.keyCodeToKey(null == t3 ? void 0 : t3.keyCode) || "").length > 1 ? null === (e3 = n3) || void 0 === e3 ? void 0 : e3.toLowerCase() : n3;
  } }, { key: "keyCodeToKey", value: function(t3) {
    return { 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 91: "Meta", 96: "Numpad0", 97: "Numpad1", 98: "Numpad2", 99: "Numpad3", 100: "Numpad4", 101: "Numpad5", 102: "Numpad6", 103: "Numpad7", 104: "Numpad8", 105: "Numpad9", 106: "NumpadMultiply", 107: "NumpadAdd", 109: "NumpadSubtract", 110: "NumpadDecimal", 111: "NumpadDivide", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }[t3] || "";
  } }], e2 && c(t2.prototype, e2), n2 && c(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
  var t2, e2, n2;
})();
function f(t2) {
  return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  }, f(t2);
}
function y(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var o2 = e2[n2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t2, g(o2.key), o2);
  }
}
function v(t2, e2, n2) {
  return (e2 = g(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
}
function g(t2) {
  var e2 = (function(t3, e3) {
    if ("object" != f(t3) || !t3) return t3;
    var n2 = t3[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var o2 = n2.call(t3, e3 || "default");
      if ("object" != f(o2)) return o2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e3 ? String : Number)(t3);
  })(t2, "string");
  return "symbol" == f(e2) ? e2 : e2 + "";
}
var m = (function() {
  return t2 = function t3(e3) {
    var n3 = e3.utilities, o2 = e3.options;
    !(function(t4, e4) {
      if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
    })(this, t3), v(this, "utilities", void 0), v(this, "options", void 0), v(this, "candidateBoxElement", void 0), v(this, "pageIndex", 0), v(this, "pageSize", void 0), this.utilities = n3, this.options = o2, u.bindMethods(t3, this), this.pageSize = this.utilities.getOptions().layoutCandidatesPageSize || 5;
  }, e2 = [{ key: "destroy", value: function() {
    this.candidateBoxElement && (this.candidateBoxElement.remove(), this.pageIndex = 0);
  } }, { key: "show", value: function(t3) {
    var e3 = this, n3 = t3.candidateValue, o2 = t3.targetElement, i2 = t3.onSelect;
    if (n3 && n3.length) {
      var s2 = this.utilities.chunkArray(n3.split(" "), this.pageSize);
      this.renderPage({ candidateListPages: s2, targetElement: o2, pageIndex: this.pageIndex, nbPages: s2.length, onItemSelected: function(t4, n4) {
        i2(t4, n4), e3.destroy();
      } });
    }
  } }, { key: "renderPage", value: function(t3) {
    var e3, n3 = this, o2 = t3.candidateListPages, i2 = t3.targetElement, s2 = t3.pageIndex, a2 = t3.nbPages, r2 = t3.onItemSelected;
    null === (e3 = this.candidateBoxElement) || void 0 === e3 || e3.remove(), this.candidateBoxElement = document.createElement("div"), this.candidateBoxElement.className = "hg-candidate-box";
    var u2 = document.createElement("ul");
    u2.className = "hg-candidate-box-list", o2[s2].forEach(function(t4) {
      var e4, o3 = document.createElement("li"), i3 = function() {
        var t5 = new (n3.options.useTouchEvents ? TouchEvent : MouseEvent)("click");
        return Object.defineProperty(t5, "target", { value: o3 }), t5;
      };
      o3.className = "hg-candidate-box-list-item", o3.innerHTML = (null === (e4 = n3.options.display) || void 0 === e4 ? void 0 : e4[t4]) || t4, n3.options.useTouchEvents ? o3.ontouchstart = function(e5) {
        return r2(t4, e5 || i3());
      } : o3.onclick = function() {
        var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i3();
        return r2(t4, e5);
      }, u2.appendChild(o3);
    });
    var l2 = s2 > 0, c2 = document.createElement("div");
    c2.classList.add("hg-candidate-box-prev"), l2 && c2.classList.add("hg-candidate-box-btn-active");
    var d2 = function() {
      l2 && n3.renderPage({ candidateListPages: o2, targetElement: i2, pageIndex: s2 - 1, nbPages: a2, onItemSelected: r2 });
    };
    this.options.useTouchEvents ? c2.ontouchstart = d2 : c2.onclick = d2, this.candidateBoxElement.appendChild(c2), this.candidateBoxElement.appendChild(u2);
    var h2 = s2 < a2 - 1, p2 = document.createElement("div");
    p2.classList.add("hg-candidate-box-next"), h2 && p2.classList.add("hg-candidate-box-btn-active");
    var f2 = function() {
      h2 && n3.renderPage({ candidateListPages: o2, targetElement: i2, pageIndex: s2 + 1, nbPages: a2, onItemSelected: r2 });
    };
    this.options.useTouchEvents ? p2.ontouchstart = f2 : p2.onclick = f2, this.candidateBoxElement.appendChild(p2), i2.prepend(this.candidateBoxElement);
  } }], e2 && y(t2.prototype, e2), n2 && y(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
  var t2, e2, n2;
})();
function b(t2) {
  return (function(t3) {
    if (Array.isArray(t3)) return k(t3);
  })(t2) || (function(t3) {
    if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"]) return Array.from(t3);
  })(t2) || (function(t3, e2) {
    if (t3) {
      if ("string" == typeof t3) return k(t3, e2);
      var n2 = {}.toString.call(t3).slice(8, -1);
      return "Object" === n2 && t3.constructor && (n2 = t3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? k(t3, e2) : void 0;
    }
  })(t2) || (function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  })();
}
function k(t2, e2) {
  (null == e2 || e2 > t2.length) && (e2 = t2.length);
  for (var n2 = 0, o2 = Array(e2); n2 < e2; n2++) o2[n2] = t2[n2];
  return o2;
}
function w(t2) {
  return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  }, w(t2);
}
function E(t2, e2) {
  var n2 = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(t2);
    e2 && (o2 = o2.filter(function(e3) {
      return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
    })), n2.push.apply(n2, o2);
  }
  return n2;
}
function C(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var o2 = e2[n2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t2, I(o2.key), o2);
  }
}
function P(t2, e2, n2) {
  return (e2 = I(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
}
function I(t2) {
  var e2 = (function(t3, e3) {
    if ("object" != w(t3) || !t3) return t3;
    var n2 = t3[Symbol.toPrimitive];
    if (void 0 !== n2) {
      var o2 = n2.call(t3, e3 || "default");
      if ("object" != w(o2)) return o2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e3 ? String : Number)(t3);
  })(t2, "string");
  return "symbol" == w(e2) ? e2 : e2 + "";
}
var O = (function() {
  return t2 = function t3(e3, n3) {
    var o2 = this;
    if ((function(t4, e4) {
      if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
    })(this, t3), P(this, "input", void 0), P(this, "options", void 0), P(this, "utilities", void 0), P(this, "caretPosition", void 0), P(this, "caretPositionEnd", void 0), P(this, "keyboardDOM", void 0), P(this, "keyboardPluginClasses", void 0), P(this, "keyboardDOMClass", void 0), P(this, "buttonElements", void 0), P(this, "currentInstanceName", void 0), P(this, "allKeyboardInstances", void 0), P(this, "keyboardInstanceNames", void 0), P(this, "isFirstKeyboardInstance", void 0), P(this, "physicalKeyboard", void 0), P(this, "modules", void 0), P(this, "activeButtonClass", void 0), P(this, "holdInteractionTimeout", void 0), P(this, "holdTimeout", void 0), P(this, "isMouseHold", void 0), P(this, "initialized", void 0), P(this, "candidateBox", void 0), P(this, "keyboardRowsDOM", void 0), P(this, "defaultName", "default"), P(this, "activeInputElement", null), P(this, "handleParams", function(t4, e4) {
      var n4, o3, i3;
      if ("string" == typeof t4) n4 = t4.split(".").join(""), o3 = document.querySelector(".".concat(n4)), i3 = e4;
      else if (t4 instanceof HTMLDivElement) {
        if (!t4.className) throw console.warn("Any DOM element passed as parameter must have a class."), new Error("KEYBOARD_DOM_CLASS_ERROR");
        n4 = t4.className.split(" ")[0], o3 = t4, i3 = e4;
      } else n4 = "simple-keyboard", o3 = document.querySelector(".".concat(n4)), i3 = t4;
      return { keyboardDOMClass: n4, keyboardDOM: o3, options: i3 };
    }), P(this, "getOptions", function() {
      return o2.options;
    }), P(this, "getCaretPosition", function() {
      return o2.caretPosition;
    }), P(this, "getCaretPositionEnd", function() {
      return o2.caretPositionEnd;
    }), P(this, "registerModule", function(t4, e4) {
      o2.modules[t4] || (o2.modules[t4] = {}), e4(o2.modules[t4]);
    }), P(this, "getKeyboardClassString", function() {
      for (var t4 = arguments.length, e4 = new Array(t4), n4 = 0; n4 < t4; n4++) e4[n4] = arguments[n4];
      return [o2.keyboardDOMClass].concat(e4).filter(function(t5) {
        return !!t5;
      }).join(" ");
    }), "undefined" != typeof window) {
      var i2 = this.handleParams(e3, n3), s2 = i2.keyboardDOMClass, a2 = i2.keyboardDOM, r2 = i2.options, l2 = void 0 === r2 ? {} : r2;
      this.utilities = new u({ getOptions: this.getOptions, getCaretPosition: this.getCaretPosition, getCaretPositionEnd: this.getCaretPositionEnd, dispatch: this.dispatch }), this.caretPosition = null, this.caretPositionEnd = null, this.keyboardDOM = a2, this.options = (function(t4) {
        for (var e4 = 1; e4 < arguments.length; e4++) {
          var n4 = null != arguments[e4] ? arguments[e4] : {};
          e4 % 2 ? E(Object(n4), true).forEach(function(e5) {
            P(t4, e5, n4[e5]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t4, Object.getOwnPropertyDescriptors(n4)) : E(Object(n4)).forEach(function(e5) {
            Object.defineProperty(t4, e5, Object.getOwnPropertyDescriptor(n4, e5));
          });
        }
        return t4;
      })({ layoutName: "default", theme: "hg-theme-default", inputName: "default", preventMouseDownDefault: false, enableLayoutCandidates: true, excludeFromLayout: {} }, l2), this.keyboardPluginClasses = "", u.bindMethods(t3, this);
      var c2 = this.options.inputName, d2 = void 0 === c2 ? this.defaultName : c2;
      if (this.input = {}, this.input[d2] = "", this.keyboardDOMClass = s2, this.buttonElements = {}, window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), this.currentInstanceName = this.utilities.camelCase(this.keyboardDOMClass), window.SimpleKeyboardInstances[this.currentInstanceName] = this, this.allKeyboardInstances = window.SimpleKeyboardInstances, this.keyboardInstanceNames = Object.keys(window.SimpleKeyboardInstances), this.isFirstKeyboardInstance = this.keyboardInstanceNames[0] === this.currentInstanceName, this.physicalKeyboard = new p({ dispatch: this.dispatch, getOptions: this.getOptions }), this.candidateBox = this.options.enableLayoutCandidates ? new m({ utilities: this.utilities, options: this.options }) : null, !this.keyboardDOM) throw console.warn('".'.concat(s2, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
      this.render(), this.modules = {}, this.loadModules();
    }
  }, e2 = [{ key: "setCaretPosition", value: function(t3) {
    var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t3;
    this.caretPosition = t3, this.caretPositionEnd = e3;
  } }, { key: "getInputCandidates", value: function(t3) {
    var e3 = this, n3 = this.options, o2 = n3.layoutCandidates, i2 = n3.layoutCandidatesCaseSensitiveMatch;
    if (!o2 || "object" !== w(o2)) return {};
    var s2 = Object.keys(o2).filter(function(n4) {
      var o3 = t3.substring(0, e3.getCaretPositionEnd() || 0) || t3, s3 = new RegExp("".concat(e3.utilities.escapeRegex(n4), "$"), i2 ? "g" : "gi");
      return !!b(o3.matchAll(s3)).length;
    });
    if (s2.length > 1) {
      var a2 = s2.sort(function(t4, e4) {
        return e4.length - t4.length;
      })[0];
      return { candidateKey: a2, candidateValue: o2[a2] };
    }
    if (s2.length) {
      var r2 = s2[0];
      return { candidateKey: r2, candidateValue: o2[r2] };
    }
    return {};
  } }, { key: "showCandidatesBox", value: function(t3, e3, n3) {
    var o2 = this;
    this.candidateBox && this.candidateBox.show({ candidateValue: e3, targetElement: n3, onSelect: function(e4, n4) {
      var i2 = o2.options, s2 = i2.layoutCandidatesCaseSensitiveMatch, a2 = i2.disableCandidateNormalization, r2 = i2.enableLayoutCandidatesKeyPress, u2 = e4;
      a2 || (u2 = e4.normalize("NFD")), "function" == typeof o2.options.beforeInputUpdate && o2.options.beforeInputUpdate(o2);
      var l2 = o2.getInput(o2.options.inputName, true), c2 = o2.getCaretPositionEnd() || 0, d2 = l2.substring(0, c2 || 0) || l2, h2 = new RegExp("".concat(o2.utilities.escapeRegex(t3), "$"), s2 ? "g" : "gi"), p2 = d2.replace(h2, u2), f2 = l2.replace(d2, p2), y2 = p2.length - d2.length, v2 = (c2 || l2.length) + y2;
      v2 < 0 && (v2 = 0), o2.setInput(f2, o2.options.inputName, true), o2.setCaretPosition(v2), r2 && "function" == typeof o2.options.onKeyPress && o2.options.onKeyPress(e4, n4), "function" == typeof o2.options.onChange && o2.options.onChange(o2.getInput(o2.options.inputName, true), n4), "function" == typeof o2.options.onChangeAll && o2.options.onChangeAll(o2.getAllInputs(), n4);
    } });
  } }, { key: "handleButtonClicked", value: function(t3, e3) {
    var n3 = this.options, o2 = n3.inputName, i2 = void 0 === o2 ? this.defaultName : o2, s2 = n3.debug;
    if ("{//}" !== t3) {
      this.input[i2] || (this.input[i2] = ""), "function" == typeof this.options.beforeInputUpdate && this.options.beforeInputUpdate(this);
      var a2 = this.utilities.getUpdatedInput(t3, this.input[i2], this.caretPosition, this.caretPositionEnd);
      if (this.utilities.isStandardButton(t3) && this.activeInputElement && this.input[i2] && this.input[i2] === a2 && 0 === this.caretPosition && this.caretPositionEnd === a2.length) return this.setInput("", this.options.inputName, true), this.setCaretPosition(0), this.activeInputElement.value = "", this.activeInputElement.setSelectionRange(0, 0), void this.handleButtonClicked(t3, e3);
      if ("function" == typeof this.options.onKeyPress && this.options.onKeyPress(t3, e3), this.input[i2] !== a2 && (!this.options.inputPattern || this.options.inputPattern && this.inputPatternIsValid(a2))) {
        if (this.options.maxLength && this.utilities.handleMaxLength(this.input, a2)) return;
        var r2 = this.utilities.getUpdatedInput(t3, this.input[i2], this.caretPosition, this.caretPositionEnd, true);
        if (this.setInput(r2, this.options.inputName, true), s2 && console.log("Input changed:", this.getAllInputs()), this.options.debug && console.log("Caret at: ", this.getCaretPosition(), this.getCaretPositionEnd(), "(".concat(this.keyboardDOMClass, ")"), null == e3 ? void 0 : e3.type), this.options.syncInstanceInputs && this.syncInstanceInputs(), "function" == typeof this.options.onChange && this.options.onChange(this.getInput(this.options.inputName, true), e3), "function" == typeof this.options.onChangeAll && this.options.onChangeAll(this.getAllInputs(), e3), null != e3 && e3.target && this.options.enableLayoutCandidates) {
          var u2, l2 = this.getInputCandidates(a2), c2 = l2.candidateKey, d2 = l2.candidateValue;
          c2 && d2 ? this.showCandidatesBox(c2, d2, this.keyboardDOM) : null === (u2 = this.candidateBox) || void 0 === u2 || u2.destroy();
        }
      }
      this.caretPositionEnd && this.caretPosition !== this.caretPositionEnd && (this.setCaretPosition(this.caretPositionEnd, this.caretPositionEnd), this.activeInputElement && this.activeInputElement.setSelectionRange(this.caretPositionEnd, this.caretPositionEnd), this.options.debug && console.log("Caret position aligned", this.caretPosition)), s2 && console.log("Key pressed:", t3);
    }
  } }, { key: "getMouseHold", value: function() {
    return this.isMouseHold;
  } }, { key: "setMouseHold", value: function(t3) {
    this.options.syncInstanceInputs ? this.dispatch(function(e3) {
      e3.isMouseHold = t3;
    }) : this.isMouseHold = t3;
  } }, { key: "handleButtonMouseDown", value: function(t3, e3) {
    var n3 = this;
    e3 && (this.options.preventMouseDownDefault && e3.preventDefault(), this.options.stopMouseDownPropagation && e3.stopPropagation(), e3.target.classList.add(this.activeButtonClass)), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdTimeout && clearTimeout(this.holdTimeout), this.setMouseHold(true), this.options.disableButtonHold || (this.holdTimeout = window.setTimeout(function() {
      (n3.getMouseHold() && (!t3.includes("{") && !t3.includes("}") || "{delete}" === t3 || "{backspace}" === t3 || "{bksp}" === t3 || "{space}" === t3 || "{tab}" === t3) || "{arrowright}" === t3 || "{arrowleft}" === t3 || "{arrowup}" === t3 || "{arrowdown}" === t3) && (n3.options.debug && console.log("Button held:", t3), n3.handleButtonHold(t3)), clearTimeout(n3.holdTimeout);
    }, 500));
  } }, { key: "handleButtonMouseUp", value: function(t3, e3) {
    var n3 = this;
    e3 && (this.options.preventMouseUpDefault && e3.preventDefault && e3.preventDefault(), this.options.stopMouseUpPropagation && e3.stopPropagation && e3.stopPropagation(), !(e3.target === this.keyboardDOM || e3.target && this.keyboardDOM.contains(e3.target) || this.candidateBox && this.candidateBox.candidateBoxElement && (e3.target === this.candidateBox.candidateBoxElement || e3.target && this.candidateBox.candidateBoxElement.contains(e3.target))) && this.candidateBox && this.candidateBox.destroy()), this.recurseButtons(function(t4) {
      t4.classList.remove(n3.activeButtonClass);
    }), this.setMouseHold(false), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), t3 && "function" == typeof this.options.onKeyReleased && this.options.onKeyReleased(t3, e3);
  } }, { key: "handleKeyboardContainerMouseDown", value: function(t3) {
    this.options.preventMouseDownDefault && t3.preventDefault();
  } }, { key: "handleButtonHold", value: function(t3) {
    var e3 = this;
    this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdInteractionTimeout = window.setTimeout(function() {
      e3.getMouseHold() ? (e3.handleButtonClicked(t3), e3.handleButtonHold(t3)) : clearTimeout(e3.holdInteractionTimeout);
    }, 100);
  } }, { key: "syncInstanceInputs", value: function() {
    var t3 = this;
    this.dispatch(function(e3) {
      e3.replaceInput(t3.input), e3.setCaretPosition(t3.caretPosition, t3.caretPositionEnd);
    });
  } }, { key: "clearInput", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.inputName || this.defaultName;
    this.input[t3] = "", this.setCaretPosition(0), this.options.syncInstanceInputs && this.syncInstanceInputs();
  } }, { key: "getInput", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.inputName || this.defaultName, e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.options.syncInstanceInputs && !e3 && this.syncInstanceInputs(), this.options.rtl ? "\u202B" + this.input[t3].replace("\u202B", "").replace("\u202C", "") + "\u202C" : this.input[t3];
  } }, { key: "getAllInputs", value: function() {
    var t3 = this, e3 = {};
    return Object.keys(this.input).forEach(function(n3) {
      e3[n3] = t3.getInput(n3, true);
    }), e3;
  } }, { key: "setInput", value: function(t3) {
    var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.options.inputName || this.defaultName, n3 = arguments.length > 2 ? arguments[2] : void 0;
    this.input[e3] = t3, !n3 && this.options.syncInstanceInputs && this.syncInstanceInputs();
  } }, { key: "replaceInput", value: function(t3) {
    this.input = t3;
  } }, { key: "setOptions", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e3 = this.changedOptions(t3);
    this.options = Object.assign(this.options, t3), e3.length && (this.options.debug && console.log("changedOptions", e3), this.onSetOptions(e3), this.render());
  } }, { key: "changedOptions", value: function(t3) {
    var e3 = this;
    return Object.keys(t3).filter(function(n3) {
      return JSON.stringify(t3[n3]) !== JSON.stringify(e3.options[n3]);
    });
  } }, { key: "onSetOptions", value: function() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    t3.includes("layoutName") && this.candidateBox && this.candidateBox.destroy(), (t3.includes("layoutCandidatesPageSize") || t3.includes("layoutCandidates")) && this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = new m({ utilities: this.utilities, options: this.options }));
  } }, { key: "resetRows", value: function() {
    this.keyboardRowsDOM && this.keyboardRowsDOM.remove(), this.keyboardDOM.className = this.keyboardDOMClass, this.keyboardDOM.setAttribute("data-skInstance", this.currentInstanceName), this.buttonElements = {};
  } }, { key: "dispatch", value: function(t3) {
    if (!window.SimpleKeyboardInstances) throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR");
    return Object.keys(window.SimpleKeyboardInstances).forEach(function(e3) {
      t3(window.SimpleKeyboardInstances[e3], e3);
    });
  } }, { key: "addButtonTheme", value: function(t3, e3) {
    var n3 = this;
    e3 && t3 && (t3.split(" ").forEach(function(o2) {
      e3.split(" ").forEach(function(e4) {
        n3.options.buttonTheme || (n3.options.buttonTheme = []);
        var i2 = false;
        n3.options.buttonTheme.map(function(t4) {
          if (null != t4 && t4.class.split(" ").includes(e4)) {
            i2 = true;
            var n4 = t4.buttons.split(" ");
            n4.includes(o2) || (i2 = true, n4.push(o2), t4.buttons = n4.join(" "));
          }
          return t4;
        }), i2 || n3.options.buttonTheme.push({ class: e4, buttons: t3 });
      });
    }), this.render());
  } }, { key: "removeButtonTheme", value: function(t3, e3) {
    var n3 = this;
    if (!t3 && !e3) return this.options.buttonTheme = [], void this.render();
    t3 && Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.length && (t3.split(" ").forEach(function(t4) {
      var o2;
      null === (o2 = n3.options) || void 0 === o2 || null === (o2 = o2.buttonTheme) || void 0 === o2 || o2.map(function(o3, i2) {
        if (o3 && e3 && e3.includes(o3.class) || !e3) {
          var s2, a2, r2 = null === (s2 = o3) || void 0 === s2 ? void 0 : s2.buttons.split(" ").filter(function(e4) {
            return e4 !== t4;
          });
          o3 && null != r2 && r2.length ? o3.buttons = r2.join(" ") : (null === (a2 = n3.options.buttonTheme) || void 0 === a2 || a2.splice(i2, 1), o3 = null);
        }
        return o3;
      });
    }), this.render());
  } }, { key: "getButtonElement", value: function(t3) {
    var e3, n3 = this.buttonElements[t3];
    return n3 && (e3 = n3.length > 1 ? n3 : n3[0]), e3;
  } }, { key: "inputPatternIsValid", value: function(t3) {
    var e3, n3 = this.options.inputPattern;
    if ((e3 = n3 instanceof RegExp ? n3 : n3[this.options.inputName || this.defaultName]) && t3) {
      var o2 = e3.test(t3);
      return this.options.debug && console.log('inputPattern ("'.concat(e3, '"): ').concat(o2 ? "passed" : "did not pass!")), o2;
    }
    return true;
  } }, { key: "setEventListeners", value: function() {
    if (this.isFirstKeyboardInstance || !this.allKeyboardInstances) {
      this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")"));
      var t3 = this.options.physicalKeyboardHighlightPreventDefault, e3 = void 0 !== t3 && t3;
      document.addEventListener("keyup", this.handleKeyUp, e3), document.addEventListener("keydown", this.handleKeyDown, e3), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("touchend", this.handleTouchEnd), this.options.updateCaretOnSelectionChange && document.addEventListener("selectionchange", this.handleSelectionChange), document.addEventListener("select", this.handleSelect);
    }
  } }, { key: "handleKeyUp", value: function(t3) {
    this.caretEventHandler(t3), this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyUp(t3);
  } }, { key: "handleKeyDown", value: function(t3) {
    this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyDown(t3);
  } }, { key: "handleMouseUp", value: function(t3) {
    this.caretEventHandler(t3);
  } }, { key: "handleTouchEnd", value: function(t3) {
    this.caretEventHandler(t3);
  } }, { key: "handleSelect", value: function(t3) {
    this.caretEventHandler(t3);
  } }, { key: "handleSelectionChange", value: function(t3) {
    navigator.userAgent.includes("Firefox") || this.caretEventHandler(t3);
  } }, { key: "caretEventHandler", value: function(t3) {
    var e3, n3 = this;
    t3.target.tagName && (e3 = t3.target.tagName.toLowerCase()), this.dispatch(function(o2) {
      var i2 = t3.target === o2.keyboardDOM || t3.target && o2.keyboardDOM.contains(t3.target);
      if (n3.options.syncInstanceInputs) {
        var s2 = "function" == typeof t3.composedPath ? t3.composedPath() : t3.path;
        Array.isArray(s2) && (i2 = s2.some(function(t4) {
          var e4;
          return null == t4 || null === (e4 = t4.hasAttribute) || void 0 === e4 ? void 0 : e4.call(t4, "data-skInstance");
        }));
      }
      if (("textarea" === e3 || "input" === e3 && ["text", "search", "url", "tel", "password"].includes(t3.target.type)) && !o2.options.disableCaretPositioning) {
        var a2 = t3.target.selectionStart, r2 = t3.target.selectionEnd;
        o2.options.rtl && (a2 = o2.utilities.getRtlOffset(a2, o2.getInput()), r2 = o2.utilities.getRtlOffset(r2, o2.getInput())), o2.setCaretPosition(a2, r2), o2.activeInputElement = t3.target, o2.options.debug && console.log("Caret at: ", o2.getCaretPosition(), o2.getCaretPositionEnd(), t3 && t3.target.tagName.toLowerCase(), "(".concat(o2.keyboardDOMClass, ")"), null == t3 ? void 0 : t3.type);
      } else !o2.options.disableCaretPositioning && i2 || "selectionchange" === (null == t3 ? void 0 : t3.type) || (o2.setCaretPosition(null), o2.activeInputElement = null, o2.options.debug && console.log('Caret position reset due to "'.concat(null == t3 ? void 0 : t3.type, '" event'), t3));
    });
  } }, { key: "recurseButtons", value: function(t3) {
    var e3 = this;
    t3 && Object.keys(this.buttonElements).forEach(function(n3) {
      return e3.buttonElements[n3].forEach(t3);
    });
  } }, { key: "destroy", value: function() {
    this.options.debug && console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName));
    var t3 = this.options.physicalKeyboardHighlightPreventDefault, e3 = void 0 !== t3 && t3;
    document.removeEventListener("keyup", this.handleKeyUp, e3), document.removeEventListener("keydown", this.handleKeyDown, e3), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchend", this.handleTouchEnd), document.removeEventListener("select", this.handleSelect), this.options.updateCaretOnSelectionChange && document.removeEventListener("selectionchange", this.handleSelectionChange), document.onpointerup = null, document.ontouchend = null, document.ontouchcancel = null, document.onmouseup = null, this.recurseButtons(function(t4) {
      t4 && (t4.onpointerdown = null, t4.onpointerup = null, t4.onpointercancel = null, t4.ontouchstart = null, t4.ontouchend = null, t4.ontouchcancel = null, t4.onclick = null, t4.onmousedown = null, t4.onmouseup = null, t4.remove(), t4 = null);
    }), this.keyboardDOM.onpointerdown = null, this.keyboardDOM.ontouchstart = null, this.keyboardDOM.onmousedown = null, this.resetRows(), this.candidateBox && (this.candidateBox.destroy(), this.candidateBox = null), this.activeInputElement = null, this.keyboardDOM.removeAttribute("data-skInstance"), this.keyboardDOM.innerHTML = "", window.SimpleKeyboardInstances[this.currentInstanceName] = null, delete window.SimpleKeyboardInstances[this.currentInstanceName], this.initialized = false;
  } }, { key: "getButtonThemeClasses", value: function(t3) {
    var e3 = this.options.buttonTheme, n3 = [];
    return Array.isArray(e3) && e3.forEach(function(e4) {
      if (e4 && e4.class && "string" == typeof e4.class && e4.buttons && "string" == typeof e4.buttons) {
        var o2 = e4.class.split(" ");
        e4.buttons.split(" ").includes(t3) && (n3 = [].concat(b(n3), b(o2)));
      } else console.warn('Incorrect "buttonTheme". Please check the documentation.', e4);
    }), n3;
  } }, { key: "setDOMButtonAttributes", value: function(t3, e3) {
    var n3 = this.options.buttonAttributes;
    Array.isArray(n3) && n3.forEach(function(n4) {
      n4.attribute && "string" == typeof n4.attribute && n4.value && "string" == typeof n4.value ? n4.buttons && "string" == typeof n4.buttons ? n4.buttons.split(" ").includes(t3) && e3(n4.attribute, n4.value) : e3(n4.attribute, n4.value) : console.warn('Incorrect "buttonAttributes". Please check the documentation.', n4);
    });
  } }, { key: "onTouchDeviceDetected", value: function() {
    this.processAutoTouchEvents(), this.disableContextualWindow();
  } }, { key: "disableContextualWindow", value: function() {
    window.oncontextmenu = function(t3) {
      var e3;
      if (null !== (e3 = t3.target.classList) && void 0 !== e3 && e3.contains("hg-button")) return t3.preventDefault(), t3.stopPropagation(), false;
    };
  } }, { key: "processAutoTouchEvents", value: function() {
    this.options.autoUseTouchEvents && (this.options.useTouchEvents = true, this.options.debug && console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."));
  } }, { key: "onInit", value: function() {
    this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")), this.setEventListeners(), "function" == typeof this.options.onInit && this.options.onInit(this);
  } }, { key: "beforeFirstRender", value: function() {
    this.utilities.isTouchDevice() && this.onTouchDeviceDetected(), "function" == typeof this.options.beforeFirstRender && this.options.beforeFirstRender(this), this.isFirstKeyboardInstance && this.utilities.pointerEventsSupported() && !this.options.useTouchEvents && !this.options.useMouseEvents && this.options.debug && console.log("Using PointerEvents as it is supported by this browser"), this.options.useTouchEvents && this.options.debug && console.log("useTouchEvents has been enabled. Only touch events will be used.");
  } }, { key: "beforeRender", value: function() {
    "function" == typeof this.options.beforeRender && this.options.beforeRender(this);
  } }, { key: "onRender", value: function() {
    "function" == typeof this.options.onRender && this.options.onRender(this);
  } }, { key: "onModulesLoaded", value: function() {
    "function" == typeof this.options.onModulesLoaded && this.options.onModulesLoaded(this);
  } }, { key: "loadModules", value: function() {
    var t3 = this;
    Array.isArray(this.options.modules) && (this.options.modules.forEach(function(e3) {
      var n3 = t3.utilities.isConstructor(e3) ? new e3(t3) : e3(t3);
      n3.init && n3.init(t3);
    }), this.keyboardPluginClasses = "modules-loaded", this.render(), this.onModulesLoaded());
  } }, { key: "getModuleProp", value: function(t3, e3) {
    return !!this.modules[t3] && this.modules[t3][e3];
  } }, { key: "getModulesList", value: function() {
    return Object.keys(this.modules);
  } }, { key: "parseRowDOMContainers", value: function(t3, e3, n3, o2) {
    var i2 = this, s2 = Array.from(t3.children), a2 = 0;
    return s2.length && n3.forEach(function(n4, r2) {
      var u2 = o2[r2];
      if (!(u2 && u2 > n4)) return false;
      var l2 = n4 - a2, c2 = u2 - a2, d2 = document.createElement("div");
      d2.className += "hg-button-container";
      var h2 = "".concat(i2.options.layoutName, "-r").concat(e3, "c").concat(r2);
      d2.setAttribute("data-skUID", h2);
      var p2 = s2.splice(l2, c2 - l2 + 1);
      a2 += c2 - l2, p2.forEach(function(t4) {
        return d2.appendChild(t4);
      }), s2.splice(l2, 0, d2), t3.innerHTML = "", s2.forEach(function(e4) {
        return t3.appendChild(e4);
      }), i2.options.debug && console.log("rowDOMContainer", p2, l2, c2, a2 + 1);
    }), t3;
  } }, { key: "render", value: function() {
    var t3 = this;
    this.resetRows(), this.initialized || this.beforeFirstRender(), this.beforeRender();
    var e3 = "hg-layout-".concat(this.options.layoutName), n3 = this.options.layout || { default: ["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}", "{tab} q w e r t y u i o p [ ] \\", "{lock} a s d f g h j k l ; ' {enter}", "{shift} z x c v b n m , . / {shift}", ".com @ {space}"], shift: ["~ ! @ # $ % ^ & * ( ) _ + {bksp}", "{tab} Q W E R T Y U I O P { } |", '{lock} A S D F G H J K L : " {enter}', "{shift} Z X C V B N M < > ? {shift}", ".com @ {space}"] }, o2 = this.options.useTouchEvents || false, i2 = o2 ? "hg-touch-events" : "", s2 = this.options.useMouseEvents || false, a2 = this.options.disableRowButtonContainers;
    this.keyboardDOM.className = this.getKeyboardClassString(this.options.theme, e3, this.keyboardPluginClasses, i2), this.keyboardDOM.setAttribute("data-skInstance", this.currentInstanceName), this.keyboardRowsDOM = document.createElement("div"), this.keyboardRowsDOM.className = "hg-rows", n3[this.options.layoutName || this.defaultName].forEach(function(e4, n4) {
      var i3 = e4.split(" ");
      t3.options.excludeFromLayout && t3.options.excludeFromLayout[t3.options.layoutName || t3.defaultName] && (i3 = i3.filter(function(e5) {
        return t3.options.excludeFromLayout && !t3.options.excludeFromLayout[t3.options.layoutName || t3.defaultName].includes(e5);
      }));
      var r2 = document.createElement("div");
      r2.className += "hg-row";
      var u2 = [], l2 = [];
      i3.forEach(function(e5, i4) {
        var c2, d2 = !a2 && "string" == typeof e5 && e5.length > 1 && 0 === e5.indexOf("["), h2 = !a2 && "string" == typeof e5 && e5.length > 1 && e5.indexOf("]") === e5.length - 1;
        d2 && (u2.push(i4), e5 = e5.replace(/\[/g, "")), h2 && (l2.push(i4), e5 = e5.replace(/\]/g, ""));
        var p2 = t3.utilities.getButtonClass(e5), f2 = t3.utilities.getButtonDisplayName(e5, t3.options.display, t3.options.mergeDisplay), y2 = t3.options.useButtonTag ? "button" : "div", v2 = document.createElement(y2);
        v2.className += "hg-button ".concat(p2), (c2 = v2.classList).add.apply(c2, b(t3.getButtonThemeClasses(e5))), t3.setDOMButtonAttributes(e5, function(t4, e6) {
          v2.setAttribute(t4, e6);
        }), t3.activeButtonClass = "hg-activeButton", !t3.utilities.pointerEventsSupported() || o2 || s2 ? o2 ? (v2.ontouchstart = function(n5) {
          t3.handleButtonClicked(e5, n5), t3.handleButtonMouseDown(e5, n5);
        }, v2.ontouchend = function(n5) {
          t3.handleButtonMouseUp(e5, n5);
        }, v2.ontouchcancel = function(n5) {
          t3.handleButtonMouseUp(e5, n5);
        }) : (v2.onclick = function(n5) {
          t3.setMouseHold(false), "function" == typeof t3.options.onKeyReleased || t3.options.useMouseEvents && t3.options.clickOnMouseDown || t3.handleButtonClicked(e5, n5);
        }, v2.onmousedown = function(n5) {
          ("function" == typeof t3.options.onKeyReleased || t3.options.useMouseEvents && t3.options.clickOnMouseDown) && !t3.isMouseHold && t3.handleButtonClicked(e5, n5), t3.handleButtonMouseDown(e5, n5);
        }, v2.onmouseup = function(n5) {
          t3.handleButtonMouseUp(e5, n5);
        }) : (v2.onpointerdown = function(n5) {
          t3.handleButtonClicked(e5, n5), t3.handleButtonMouseDown(e5, n5);
        }, v2.onpointerup = function(n5) {
          t3.handleButtonMouseUp(e5, n5);
        }, v2.onpointercancel = function(n5) {
          t3.handleButtonMouseUp(e5, n5);
        }), v2.setAttribute("data-skBtn", e5);
        var g2 = "".concat(t3.options.layoutName, "-r").concat(n4, "b").concat(i4);
        v2.setAttribute("data-skBtnUID", g2);
        var m2 = document.createElement("span");
        m2.innerHTML = f2, v2.appendChild(m2), t3.buttonElements[e5] || (t3.buttonElements[e5] = []), t3.buttonElements[e5].push(v2), r2.appendChild(v2);
      }), r2 = t3.parseRowDOMContainers(r2, n4, u2, l2), t3.keyboardRowsDOM.appendChild(r2);
    }), this.keyboardDOM.appendChild(this.keyboardRowsDOM), this.onRender(), this.initialized || (this.initialized = true, !this.utilities.pointerEventsSupported() || o2 || s2 ? o2 ? (document.ontouchend = function(e4) {
      return t3.handleButtonMouseUp(void 0, e4);
    }, document.ontouchcancel = function(e4) {
      return t3.handleButtonMouseUp(void 0, e4);
    }, this.keyboardDOM.ontouchstart = function(e4) {
      return t3.handleKeyboardContainerMouseDown(e4);
    }) : o2 || (document.onmouseup = function(e4) {
      return t3.handleButtonMouseUp(void 0, e4);
    }, this.keyboardDOM.onmousedown = function(e4) {
      return t3.handleKeyboardContainerMouseDown(e4);
    }) : (document.onpointerup = function(e4) {
      return t3.handleButtonMouseUp(void 0, e4);
    }, this.keyboardDOM.onpointerdown = function(e4) {
      return t3.handleKeyboardContainerMouseDown(e4);
    }), this.onInit());
  } }], e2 && C(t2.prototype, e2), n2 && C(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
  var t2, e2, n2;
})();
var M = O;

// node_modules/simple-keyboard/build/css/index.css
var css_default = '/*!\n * \n *   simple-keyboard v3.8.192\n *   https://github.com/hodgef/simple-keyboard\n *\n *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.\n *\n *   This source code is licensed under the MIT license found in the\n *   LICENSE file in the root directory of this source tree.\n *\n */.hg-theme-default{background-color:#ececec;border-radius:5px;box-sizing:border-box;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;overflow:hidden;padding:5px;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.hg-theme-default .hg-button span,.hg-theme-default .hg-button span svg{pointer-events:none}.hg-theme-default button.hg-button{border-width:0;font-size:inherit}.hg-theme-default .hg-button{display:inline-block;flex-grow:1}.hg-theme-default .hg-row{display:flex}.hg-theme-default .hg-row:not(:last-child){margin-bottom:5px}.hg-theme-default .hg-row .hg-button-container,.hg-theme-default .hg-row .hg-button:not(:last-child){margin-right:5px}.hg-theme-default .hg-row>div:last-child{margin-right:0}.hg-theme-default .hg-row .hg-button-container{display:flex}.hg-theme-default .hg-button{align-items:center;background:#fff;border-bottom:1px solid #b5b5b5;border-radius:5px;box-shadow:0 0 3px -1px rgba(0,0,0,.3);box-sizing:border-box;cursor:pointer;display:flex;height:40px;justify-content:center;padding:5px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.hg-theme-default .hg-button.hg-standardBtn{width:20px}.hg-theme-default .hg-button.hg-activeButton{background:#efefef}.hg-theme-default.hg-layout-numeric .hg-button{align-items:center;display:flex;height:60px;justify-content:center;width:33.3%}.hg-theme-default .hg-button.hg-button-numpadadd,.hg-theme-default .hg-button.hg-button-numpadenter{height:85px}.hg-theme-default .hg-button.hg-button-numpad0{width:105px}.hg-theme-default .hg-button.hg-button-com{max-width:85px}.hg-theme-default .hg-button.hg-standardBtn.hg-button-at{max-width:45px}.hg-theme-default .hg-button.hg-selectedButton{background:rgba(5,25,70,.53);color:#fff}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=".com"]{max-width:82px}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn="@"]{max-width:60px}.hg-candidate-box{background:#ececec;border-bottom:2px solid #b5b5b5;border-radius:5px;display:inline-flex;margin-top:-10px;position:absolute;transform:translateY(-100%);-webkit-user-select:none;-moz-user-select:none;user-select:none}ul.hg-candidate-box-list{display:flex;flex:1;list-style:none;margin:0;padding:0}li.hg-candidate-box-list-item{align-items:center;display:flex;height:40px;justify-content:center;width:40px}li.hg-candidate-box-list-item:hover{background:rgba(0,0,0,.03);cursor:pointer}li.hg-candidate-box-list-item:active{background:rgba(0,0,0,.1)}.hg-candidate-box-prev:before{content:"\u25C4"}.hg-candidate-box-next:before{content:"\u25BA"}.hg-candidate-box-next,.hg-candidate-box-prev{align-items:center;color:#969696;cursor:pointer;display:flex;padding:0 10px}.hg-candidate-box-next{border-bottom-right-radius:5px;border-top-right-radius:5px}.hg-candidate-box-prev{border-bottom-left-radius:5px;border-top-left-radius:5px}.hg-candidate-box-btn-active{color:#444}';

// src/styles.css
var styles_default = '/* Multilingual Virtual Keyboard: panel styles.\n   Override the --mlk-* variables on .mlk-panel to theme it. */\n\n.mlk-panel {\n  --mlk-bg: #ececec;\n  --mlk-key-bg: #ffffff;\n  --mlk-fn-key-bg: #e2e2e2;\n  --mlk-text: #222222;\n  --mlk-muted: #666666;\n  --mlk-accent: #cfe0ff;\n  --mlk-radius: 10px;\n  --mlk-z: 2147483000;\n  --mlk-width: 900px;\n  --mlk-font: "Noto Sans", "Noto Sans Devanagari", "Noto Sans Telugu",\n    "Noto Sans Bengali", "Noto Sans Tamil", Arial, sans-serif;\n\n  position: fixed;\n  left: 50%;\n  bottom: 8px;\n  transform: translateX(-50%);\n  width: min(var(--mlk-width), calc(100vw - 16px));\n  box-sizing: border-box;\n  padding: 0 4px 4px;\n  background: var(--mlk-bg);\n  color: var(--mlk-text);\n  border-radius: var(--mlk-radius);\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);\n  z-index: var(--mlk-z);\n  font-family: var(--mlk-font);\n}\n\n.mlk-panel[hidden] {\n  display: none;\n}\n\n.mlk-panel *,\n.mlk-panel *::before,\n.mlk-panel *::after {\n  box-sizing: border-box;\n}\n\n.mlk-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 2px;\n  font-size: 14px;\n  color: var(--mlk-muted);\n  user-select: none;\n}\n\n.mlk-panel.mlk-draggable .mlk-header {\n  cursor: grab;\n  touch-action: none; /* let pointer events drive dragging on touch screens */\n}\n\n.mlk-panel.mlk-dragging .mlk-header {\n  cursor: grabbing;\n}\n\n.mlk-grip {\n  font-size: 18px;\n  line-height: 1;\n  color: var(--mlk-muted);\n}\n\n.mlk-panel:not(.mlk-draggable) .mlk-grip {\n  display: none;\n}\n\n.mlk-lang {\n  font: inherit;\n  font-size: 14px;\n  padding: 2px 4px;\n  color: var(--mlk-text);\n  background: var(--mlk-key-bg);\n  border: 1px solid #bbb;\n  border-radius: 6px;\n}\n\n.mlk-lang[hidden] {\n  display: none;\n}\n\n.mlk-spacer {\n  flex: 1;\n}\n\n.mlk-close {\n  background: none;\n  border: none;\n  color: var(--mlk-text);\n  font-size: 18px;\n  padding: 2px 8px;\n  cursor: pointer;\n}\n\n.mlk-panel .simple-keyboard.hg-theme-default {\n  padding: 0;\n  background: transparent;\n  font-family: var(--mlk-font);\n}\n\n.mlk-panel .hg-theme-default .hg-button {\n  font-size: 20px;\n  height: 44px;\n  color: var(--mlk-text);\n  background: var(--mlk-key-bg);\n}\n\n.mlk-panel .hg-theme-default .hg-button.hg-functionBtn {\n  font-size: 15px;\n  background: var(--mlk-fn-key-bg);\n}\n\n.mlk-panel .hg-theme-default .hg-button.mlk-shift-active {\n  background: var(--mlk-accent);\n}\n\n@media (max-width: 600px) {\n  .mlk-panel .hg-theme-default .hg-button {\n    font-size: 16px;\n    height: 40px;\n    padding: 2px;\n  }\n}\n';

// src/layouts.js
var LATIN_DIGITS = "1 2 3 4 5 6 7 8 9 0";
var PUNCT_ROW = "{shift} . , ? ! - ( ) {bksp}";
function devanagari(name, { extraConsonants = "", extraVowels = "" } = {}) {
  return {
    name,
    oneShotShift: false,
    default: [
      "\u093E \u093F \u0940 \u0941 \u0942 \u0943 \u0947 \u0948 \u094B \u094C \u094D",
      "\u0915 \u0916 \u0917 \u0918 \u0919 \u091A \u091B \u091C \u091D \u091E",
      "\u091F \u0920 \u0921 \u0922 \u0923 \u0924 \u0925 \u0926 \u0927 \u0928",
      `\u092A \u092B \u092C \u092D \u092E \u092F \u0930 \u0932 \u0935${extraConsonants}`,
      "{shift} \u0936 \u0937 \u0938 \u0939 \u0902 \u0903 \u0901 {bksp}",
      "{space} \u0964 {enter}"
    ],
    shift: [
      `\u0905 \u0906 \u0907 \u0908 \u0909 \u090A \u090B \u090F \u0910 \u0913 \u0914${extraVowels}`,
      "\u0915\u094D\u0937 \u0924\u094D\u0930 \u091C\u094D\u091E \u0936\u094D\u0930 \u093C \u0950 \u0965",
      "\u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} \u0964 {enter}"
    ]
  };
}
var LAYOUTS = {
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
  mr: devanagari("Marathi", { extraConsonants: " \u0933 \u0931", extraVowels: " \u0972 \u0911" }),
  te: {
    name: "Telugu",
    oneShotShift: false,
    default: [
      "\u0C3E \u0C3F \u0C40 \u0C41 \u0C42 \u0C43 \u0C46 \u0C47 \u0C48 \u0C4A \u0C4B \u0C4C",
      "\u0C15 \u0C16 \u0C17 \u0C18 \u0C19 \u0C1A \u0C1B \u0C1C \u0C1D \u0C1E",
      "\u0C1F \u0C20 \u0C21 \u0C22 \u0C23 \u0C24 \u0C25 \u0C26 \u0C27 \u0C28",
      "\u0C2A \u0C2B \u0C2C \u0C2D \u0C2E \u0C2F \u0C30 \u0C32 \u0C35 \u0C33",
      "{shift} \u0C36 \u0C37 \u0C38 \u0C39 \u0C31 \u0C02 \u0C03 \u0C4D {bksp}",
      "{space} {enter}"
    ],
    shift: [
      "\u0C05 \u0C06 \u0C07 \u0C08 \u0C09 \u0C0A \u0C0B \u0C0E \u0C0F \u0C10 \u0C12 \u0C13 \u0C14",
      "\u0C15\u0C4D\u0C37 \u0C36\u0C4D\u0C30\u0C40 \u0C1C\u0C4D\u0C1E \u0C01",
      "\u0C67 \u0C68 \u0C69 \u0C6A \u0C6B \u0C6C \u0C6D \u0C6E \u0C6F \u0C66",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} {enter}"
    ]
  },
  bn: {
    name: "Bengali",
    oneShotShift: false,
    default: [
      "\u09BE \u09BF \u09C0 \u09C1 \u09C2 \u09C3 \u09C7 \u09C8 \u09CB \u09CC \u09CD",
      "\u0995 \u0996 \u0997 \u0998 \u0999 \u099A \u099B \u099C \u099D \u099E",
      "\u099F \u09A0 \u09A1 \u09A2 \u09A3 \u09A4 \u09A5 \u09A6 \u09A7 \u09A8",
      "\u09AA \u09AB \u09AC \u09AD \u09AE \u09AF \u09B0 \u09B2 \u09B6 \u09B7",
      "{shift} \u09B8 \u09B9 \u09A1\u09BC \u09A2\u09BC \u09AF\u09BC \u09CE \u0982 \u0983 \u0981 {bksp}",
      "{space} \u0964 {enter}"
    ],
    shift: [
      "\u0985 \u0986 \u0987 \u0988 \u0989 \u098A \u098B \u098F \u0990 \u0993 \u0994",
      "\u0995\u09CD\u09B7 \u099C\u09CD\u099E \u09BC \u09F3 \u0965",
      "\u09E7 \u09E8 \u09E9 \u09EA \u09EB \u09EC \u09ED \u09EE \u09EF \u09E6",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} \u0964 {enter}"
    ]
  },
  ta: {
    name: "Tamil",
    oneShotShift: false,
    default: [
      "\u0BBE \u0BBF \u0BC0 \u0BC1 \u0BC2 \u0BC6 \u0BC7 \u0BC8 \u0BCA \u0BCB \u0BCC \u0BCD",
      "\u0B95 \u0B99 \u0B9A \u0B9E \u0B9F \u0BA3 \u0BA4 \u0BA8 \u0BAA \u0BAE",
      "\u0BAF \u0BB0 \u0BB2 \u0BB5 \u0BB4 \u0BB3 \u0BB1 \u0BA9",
      "{shift} \u0B9C \u0BB7 \u0BB8 \u0BB9 \u0B83 {bksp}",
      "{space} {enter}"
    ],
    shift: [
      "\u0B85 \u0B86 \u0B87 \u0B88 \u0B89 \u0B8A \u0B8E \u0B8F \u0B90 \u0B92 \u0B93 \u0B94",
      "\u0B95\u0BCD\u0BB7 \u0BB8\u0BCD\u0BB0\u0BC0 \u0BD0",
      "\u0BE7 \u0BE8 \u0BE9 \u0BEA \u0BEB \u0BEC \u0BED \u0BEE \u0BEF \u0BE6",
      LATIN_DIGITS,
      PUNCT_ROW,
      "{space} {enter}"
    ]
  }
};

// src/index.js
/*!
 * Multilingual Virtual Keyboard
 * https://github.com/gaurav190901/Opensource-Multilingual-Virtual-Keyboard
 * MIT License (c) 2026 Gourav Gore
 */
var version = true ? "1.0.0" : "dev";
var layouts = LAYOUTS;
var FONT_URL = "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600&family=Noto+Sans+Devanagari:wght@400;600&family=Noto+Sans+Telugu:wght@400;600&family=Noto+Sans+Bengali:wght@400;600&family=Noto+Sans+Tamil:wght@400;600&display=swap";
var STORAGE_KEY = "mlk-language";
var FUNCTION_KEY = /^\{\w+\}$/;
var COMBINING_MARK = /^\p{M}/u;
var TEXT_INPUT_TYPES = ["text", "search", "url", "tel", "email", "password"];
var DEFAULTS = {
  language: null,
  // starting language; falls back to remembered, then first
  languages: null,
  // which languages to offer (default: all)
  layouts: {},
  // extra/overriding layouts: { code: { name, default, shift } }
  draggable: true,
  openOnFocus: true,
  loadFonts: true,
  rememberLanguage: true,
  suppressNativeKeyboard: false,
  onChange: null,
  // (value, field) => void
  onLanguageChange: null,
  // (language) => void
  onOpen: null,
  onClose: null,
  onEnter: null
  // (field) => void; default: newline in textarea, close in input
};
function injectAssets(loadFonts) {
  if (!document.getElementById("mlk-styles")) {
    const style = document.createElement("style");
    style.id = "mlk-styles";
    style.textContent = css_default + "\n" + styles_default;
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
    "{shift}": "\u21E7",
    "{bksp}": "\u232B",
    "{space}": "space",
    "{enter}": "\u21B5"
  };
  Object.values(allLayouts).forEach(
    (layout) => ["default", "shift"].forEach(
      (layer) => (layout[layer] || []).forEach(
        (row) => row.split(" ").forEach((key) => {
          if (COMBINING_MARK.test(key)) display[key] = "\u25CC" + key;
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
  }
}
function isTextField(el2) {
  if (!el2 || el2.nodeType !== 1) return false;
  if (el2.tagName === "TEXTAREA") return true;
  return el2.tagName === "INPUT" && TEXT_INPUT_TYPES.includes(el2.type || "text");
}
function setNativeValue(field, value) {
  const proto = field.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(proto, "value");
  if (descriptor && descriptor.set) descriptor.set.call(field, value);
  else field.value = value;
}
function getCaret(field) {
  try {
    return field.selectionStart;
  } catch (_) {
    return null;
  }
}
function setCaret(field, pos) {
  try {
    field.setSelectionRange(pos, pos);
  } catch (_) {
  }
}
function makeMatcher(target) {
  if (typeof target === "string") {
    return (el2) => isTextField(el2) && el2.matches(target);
  }
  const set = new Set(
    target && typeof target.length === "number" && !target.tagName ? Array.from(target) : [target]
  );
  return (el2) => set.has(el2) && isTextField(el2);
}
function el(tag, className, attrs = {}) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  Object.entries(attrs).forEach(([k2, v2]) => node.setAttribute(k2, v2));
  return node;
}
var KeyboardInstance = class {
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
      (code) => this.layouts[code]
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
    this.inputModeChanged = /* @__PURE__ */ new Map();
    injectAssets(this.options.loadFonts);
    this.buildPanel();
    const startLang = [
      this.options.language,
      this.options.rememberLanguage ? storageGet(STORAGE_KEY) : null,
      this.languages[0]
    ].find((code) => code && this.languages.includes(code));
    this.keyboard = new M(this.keysEl, {
      layout: this.layerSet(startLang),
      layoutName: "default",
      display: buildDisplay(this.layouts),
      mergeDisplay: false,
      preventMouseDownDefault: true,
      // keep focus and caret in the field
      onChange: (value) => this.handleKeyboardChange(value),
      onKeyPress: (button) => this.handleKeyPress(button)
    });
    this.bindEvents();
    this.setLanguage(startLang, { silent: true });
    if (this.options.suppressNativeKeyboard) this.eachCurrentField((f2) => this.suppress(f2));
  }
  /* ----- DOM ----- */
  buildPanel() {
    const panel = el("div", "mlk-panel", { role: "region", "aria-label": "On-screen keyboard" });
    panel.hidden = true;
    if (this.options.draggable) panel.classList.add("mlk-draggable");
    const header = el("div", "mlk-header");
    const grip = el("span", "mlk-grip", { "aria-hidden": "true" });
    grip.textContent = "\u283F";
    const select = el("select", "mlk-lang", { "aria-label": "Keyboard language" });
    this.languages.forEach((code) => {
      const opt = el("option", "", { value: code });
      opt.textContent = this.layouts[code].name || code;
      select.appendChild(opt);
    });
    if (this.languages.length < 2) select.hidden = true;
    const spacer = el("span", "mlk-spacer");
    const close = el("button", "mlk-close", { type: "button", "aria-label": "Close keyboard" });
    close.textContent = "\u2715";
    header.append(grip, select, spacer, close);
    const keys = el("div", "simple-keyboard");
    panel.append(header, keys);
    document.body.appendChild(panel);
    if (this.options.draggable) header.title = "Drag to move \xB7 double-click to dock";
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
    this.on(document, "focusin", (e2) => {
      if (!this.matches(e2.target)) return;
      this.activate(e2.target);
      if (this.options.openOnFocus) this.open();
    });
    this.on(document, "click", (e2) => {
      if (this.options.openOnFocus && this.matches(e2.target) && !this.isOpen()) {
        this.activate(e2.target);
        this.open();
      }
    });
    this.on(document, "input", (e2) => {
      if (!this.writing && e2.target === this.field) {
        this.keyboard.setInput(this.field.value);
        const caret = getCaret(this.field);
        if (caret !== null && caret !== void 0) this.keyboard.setCaretPosition(caret);
      }
    });
    this.on(document, "keydown", (e2) => {
      if (e2.key === "Escape" && this.isOpen()) this.close();
    });
    this.on(window, "resize", () => this.clampToViewport());
    this.on(this.closeBtn, "click", () => this.close());
    this.on(this.select, "change", () => {
      this.setLanguage(this.select.value);
      this.refocus();
    });
    if (this.options.draggable) this.bindDrag();
  }
  bindDrag() {
    const header = this.header;
    const isControl = (t2) => t2.closest("button, select");
    this.on(header, "pointerdown", (e2) => {
      if (e2.button !== 0 || isControl(e2.target)) return;
      const rect = this.panel.getBoundingClientRect();
      Object.assign(this.panel.style, {
        transform: "none",
        bottom: "auto",
        left: rect.left + "px",
        top: rect.top + "px"
      });
      this.drag = { dx: e2.clientX - rect.left, dy: e2.clientY - rect.top };
      if (header.setPointerCapture) header.setPointerCapture(e2.pointerId);
      this.panel.classList.add("mlk-dragging");
      e2.preventDefault();
    });
    this.on(header, "pointermove", (e2) => {
      if (!this.drag) return;
      this.moved = true;
      this.moveTo(e2.clientX - this.drag.dx, e2.clientY - this.drag.dy);
    });
    const end = (e2) => {
      if (!this.drag) return;
      this.drag = null;
      this.panel.classList.remove("mlk-dragging");
      if (header.hasPointerCapture && header.hasPointerCapture(e2.pointerId)) {
        header.releasePointerCapture(e2.pointerId);
      }
    };
    this.on(header, "pointerup", end);
    this.on(header, "pointercancel", end);
    this.on(header, "dblclick", (e2) => {
      if (!isControl(e2.target)) this.dock();
    });
  }
  moveTo(x, y2) {
    const maxX = Math.max(0, window.innerWidth - this.panel.offsetWidth);
    const maxY = Math.max(0, window.innerHeight - this.panel.offsetHeight);
    this.panel.style.left = Math.min(Math.max(0, x), maxX) + "px";
    this.panel.style.top = Math.min(Math.max(0, y2), maxY) + "px";
  }
  clampToViewport() {
    if (this.moved && this.isOpen()) {
      this.moveTo(this.panel.offsetLeft, this.panel.offsetTop);
    }
  }
  /* ----- field handling ----- */
  eachCurrentField(fn) {
    if (typeof this.target === "string") {
      document.querySelectorAll(this.target).forEach((f2) => this.matches(f2) && fn(f2));
    } else {
      const list = typeof this.target.length === "number" && !this.target.tagName ? Array.from(this.target) : [this.target];
      list.forEach((f2) => this.matches(f2) && fn(f2));
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
    if (caret !== null && caret !== void 0) this.keyboard.setCaretPosition(caret);
  }
  refocus() {
    if (!this.field || !this.field.isConnected) return;
    const caret = this.keyboard.getCaretPosition();
    this.field.focus({ preventScroll: true });
    if (caret !== null && caret !== void 0) setCaret(this.field, caret);
  }
  handleKeyboardChange(value) {
    const field = this.field;
    if (!field || !field.isConnected) return;
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
    if (layout.oneShotShift && this.keyboard.options.layoutName === "shift" && !FUNCTION_KEY.test(button)) {
      setTimeout(() => this.setLayer("default"), 0);
    }
  }
  handleEnter() {
    const field = this.field;
    if (this.options.onEnter) {
      this.options.onEnter(field);
    } else if (field && field.tagName === "TEXTAREA") {
      const caret = this.keyboard.getCaretPosition();
      const value = this.keyboard.getInput();
      const pos = caret === null || caret === void 0 ? value.length : caret;
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
    this.clampToViewport();
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
    const f2 = this.field.getBoundingClientRect();
    const p2 = this.panel.getBoundingClientRect();
    const overlap = f2.bottom - p2.top + 16;
    if (overlap > 16 && f2.top < p2.top) window.scrollBy({ top: overlap, behavior: "smooth" });
  }
  destroy() {
    this.listeners.forEach((off) => off());
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
};
function attach(target, options = {}) {
  return new KeyboardInstance(target, options);
}
var index_default = { attach, layouts, version };
