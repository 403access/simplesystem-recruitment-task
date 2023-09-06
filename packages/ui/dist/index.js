var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.tsx
__export(exports, {
  Accordion: () => Accordion,
  Button: () => Button,
  Input: () => Input,
  RepositoryView: () => RepositoryView,
  Separator: () => Separator
});

// src/Button/Button.tsx
var React = __toModule(require("react"));
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
  return /* @__PURE__ */ React.createElement("button", __spreadValues({
    type: "button",
    className: ["storybook-button", `storybook-button--${size}`, mode].join(" "),
    style: {
      backgroundColor
    }
  }, props), label);
};

// src/Accordion/Accordion.tsx
var import_react = __toModule(require("react"));
var Accordion = ({ title, children, onClick }) => {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "accordion"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "accordion-header"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "accordion-title"
  }, title), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "accordion-expander",
    onClick: () => {
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      onClick == null ? void 0 : onClick(newIsOpen);
    }
  }, isOpen === true ? "\u{1F53C}" : "\u{1F53D}")), isOpen && /* @__PURE__ */ import_react.default.createElement("div", {
    className: "accordion-content"
  }, children));
};

// src/Separator/Separator.tsx
var import_react2 = __toModule(require("react"));
var Separator = ({ kind, size }) => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    style: {
      width: kind === "horizontal" ? size : "1px",
      height: kind === "vertical" ? size : "1px"
    }
  });
};

// src/Input/Input.tsx
var import_react3 = __toModule(require("react"));
var Input = ({ placeholder, value, onChange }) => {
  return /* @__PURE__ */ import_react3.default.createElement("input", {
    className: "input",
    type: "text",
    placeholder,
    value,
    onChange: (e) => onChange(e.target.value)
  });
};

// src/RepositoryView/RepositoryView.tsx
var import_react4 = __toModule(require("react"));
var RepositoryView = ({ repository }) => {
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "repository"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "repository-header"
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "repository-header-name"
  }, repository.name), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "repository-header-star"
  }, "\u2B50"), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "repository-header-stars"
  }, repository.stars)), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "repository-content"
  }, repository.description));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Button,
  Input,
  RepositoryView,
  Separator
});
