var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/Button/Button.tsx
import {
  createElement
} from "react";
var Button = (_a) => {
  var _b = _a, {
    primary = false,
    size = "medium",
    backgroundColor,
    label
  } = _b, props = __objRest(_b, [
    "primary",
    "size",
    "backgroundColor",
    "label"
  ]);
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ createElement("button", __spreadValues({
    type: "button",
    className: ["storybook-button", `storybook-button--${size}`, mode].join(" ")
  }, props), label, /* @__PURE__ */ createElement("style", {
    jsx: "true"
  }, `
        button {
          background-color: ${backgroundColor};
        }
      `));
};
export {
  Button
};
