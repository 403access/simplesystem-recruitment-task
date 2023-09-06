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
    className: ["storybook-button", `storybook-button--${size}`, mode].join(" "),
    style: {
      backgroundColor
    }
  }, props), label);
};

// src/Accordion/Accordion.tsx
import React2, { useState } from "react";
var Accordion = ({ title, children, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ React2.createElement("div", {
    className: "accordion"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "accordion-header"
  }, /* @__PURE__ */ React2.createElement("span", {
    className: "accordion-title"
  }, title), /* @__PURE__ */ React2.createElement("span", {
    className: "accordion-expander",
    onClick: () => {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      onClick == null ? void 0 : onClick(newIsOpen);
    }
  }, isOpen === true ? "\u{1F53C}" : "\u{1F53D}")), isOpen && /* @__PURE__ */ React2.createElement("div", {
    className: "accordion-content"
  }, children));
};

// src/Separator/Separator.tsx
import React3 from "react";
var Separator = ({ kind, size }) => {
  return /* @__PURE__ */ React3.createElement("div", {
    style: {
      width: kind === "horizontal" ? size : "1px",
      height: kind === "vertical" ? size : "1px"
    }
  });
};

// src/Input/Input.tsx
import React4 from "react";
var Input = ({ placeholder, value, onChange }) => {
  return /* @__PURE__ */ React4.createElement("input", {
    className: "input",
    type: "text",
    placeholder,
    value,
    onChange: (e) => onChange(e.target.value)
  });
};

// src/RepositoryView/RepositoryView.tsx
import React5 from "react";
var RepositoryView = ({ repository }) => {
  return /* @__PURE__ */ React5.createElement("div", {
    className: "repository"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "repository-header"
  }, /* @__PURE__ */ React5.createElement("span", {
    className: "repository-header-name"
  }, repository.name), /* @__PURE__ */ React5.createElement("span", {
    className: "repository-header-star"
  }, "\u2B50"), /* @__PURE__ */ React5.createElement("span", {
    className: "repository-header-stars"
  }, repository.stars)), /* @__PURE__ */ React5.createElement("div", {
    className: "repository-content"
  }, repository.description));
};
export {
  Accordion,
  Button,
  Input,
  RepositoryView,
  Separator
};
