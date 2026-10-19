window.__ModuleLoader__.load({id: 'dsh-skills-master', factory: function(require) {
const module = {exports: {}};
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.tsx
var client_exports = {};
__export(client_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(client_exports);

// src/client/drafts.tsx
var import_react = require("react");
var pendingDraftKey = "dsh-skills-master.pending-skill-task-draft";
var skillTaskDrafts = {
  create: "/dsh-skills-master-skill-creator \u8BF7\u5E2E\u6211\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u5B9E\u73B0\u300C\u2026\u2026\u300D\u7684 skill"
};
function skillManagementDraft(kind, name2) {
  const actions = {
    edit: `\u8BF7\u8BFB\u53D6\u5E76\u7F16\u8F91\u5171\u4EAB\u6280\u80FD\u300C${name2}\u300D\u3002\u5148\u5C55\u793A\u5F53\u524D SKILL.md \u4E0E\u8D44\u6E90\u6E05\u5355\uFF0C\u6536\u96C6\u4FEE\u6539\u8981\u6C42\uFF0C\u5199\u5165\u524D\u68C0\u67E5\u51B2\u7A81\u5E76\u8BA9\u6211\u786E\u8BA4\u3002`,
    open: `\u8BF7\u5B9A\u4F4D\u5171\u4EAB\u6280\u80FD\u300C${name2}\u300D\u7684\u5B98\u65B9\u6280\u80FD\u76EE\u5F55\u5E76\u4F7F\u7528\u53EF\u7528\u7684\u539F\u751F\u6253\u5F00\u80FD\u529B\u6253\u5F00\u5B83\uFF1B\u5982\u679C\u5F53\u524D\u73AF\u5883\u4E0D\u80FD\u6253\u5F00\uFF0C\u8BF7\u8FD4\u56DE\u7ECF\u8FC7\u6821\u9A8C\u7684\u76EE\u5F55\u8DEF\u5F84\u3002`,
    disable: `\u8BF7\u505C\u7528\u5171\u4EAB\u6280\u80FD\u300C${name2}\u300D\uFF0C\u4E0D\u8981\u4FEE\u6539\u5B83\u7684 SKILL.md\u3002\u5148\u8BF4\u660E\u5F71\u54CD\u8303\u56F4\u5E76\u786E\u8BA4\uFF0C\u518D\u4F7F\u7528 Skills Master \u6280\u80FD\u7BA1\u7406\u80FD\u529B\u5B8C\u6210\u5E76\u9A8C\u8BC1\u65B0\u4EFB\u52A1\u4E0D\u518D\u52A0\u8F7D\u5B83\u3002`,
    enable: `\u8BF7\u91CD\u65B0\u542F\u7528\u5171\u4EAB\u6280\u80FD\u300C${name2}\u300D\uFF0C\u4E0D\u8981\u4FEE\u6539\u5B83\u7684 SKILL.md\uFF0C\u5E76\u9A8C\u8BC1 Harness \u5B98\u65B9\u6280\u80FD\u76EE\u5F55\u80FD\u91CD\u65B0\u53D1\u73B0\u5B83\u3002`,
    uninstall: `\u8BF7\u5378\u8F7D\u5171\u4EAB\u6280\u80FD\u300C${name2}\u300D\u3002\u5148\u8BFB\u53D6\u8D44\u6E90\u548C\u4F9D\u8D56\u5F71\u54CD\u5E76\u8BA9\u6211\u786E\u8BA4\uFF1B\u4F7F\u7528\u53EF\u6062\u590D\u79FB\u9664\uFF0C\u4E0D\u8981\u76F4\u63A5\u6C38\u4E45\u5220\u9664\uFF0C\u7136\u540E\u9A8C\u8BC1 Harness \u5B98\u65B9\u76EE\u5F55\u4E0D\u518D\u52A0\u8F7D\u5B83\u3002`
  };
  return `/dsh-skills-master-skill-creator ${actions[kind]}`;
}
function PendingSkillDraft({ inputActions }) {
  (0, import_react.useEffect)(() => {
    const draft = window.sessionStorage.getItem(pendingDraftKey);
    if (!draft) return;
    const timer = window.setTimeout(() => {
      inputActions.setDraft(draft);
      window.sessionStorage.removeItem(pendingDraftKey);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [inputActions]);
  return null;
}

// src/ui/components/Icon.tsx
var React = __toESM(require("react"), 1);
var paths = {
  panel: "M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zM9 4v16",
  search: "M16 16l5 5M18 10a8 8 0 11-16 0 8 8 0 0116 0",
  plus: "M12 5v14M5 12h14",
  chevron: "M7 10l5 5 5-5",
  back: "M15 19l-7-7 7-7",
  task: "M6 19l-3 2V9a9 9 0 119 9H6zM12 5v8M8 9h8",
  assistant: "M9 3h6M12 1v2M7 6h10a3 3 0 013 3v9a3 3 0 01-3 3H7a3 3 0 01-3-3V9a3 3 0 013-3zM9 10h.01M15 10h.01M8 17a4 4 0 018 0",
  project: "M8 9l8-4M8 12l8 6M8 11a3 3 0 11-6 0 3 3 0 016 0M21 4a3 3 0 11-6 0 3 3 0 016 0M21 19a3 3 0 11-6 0 3 3 0 016 0",
  experts: "M5 4h12a4 4 0 014 4v6a7 7 0 01-14 0v-3H5a3 3 0 010-6M13 11a2 2 0 11-4 0 2 2 0 014 0M19 11a2 2 0 11-4 0 2 2 0 014 0M11 17h5",
  skills: "M8 5L2 12l6 7M16 5l6 7-6 7M14 3l-4 18",
  connectors: "M9 15l6-6M9 6l2-2a4 4 0 016 6l-2 2M15 18l-2 2a4 4 0 01-6-6l2-2",
  library: "M12 5v16M12 5C8 2 4 3 2 4v15c4-2 7-1 10 2 3-3 6-4 10-2V4c-2-1-6-2-10 1",
  automation: "M5 3L2 6M19 3l3 3M6 19l-2 3M18 19l2 3M12 8v5l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0",
  apps: "M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3zM15 15h6v6h-6z",
  more: "M3 3h6v6H3zM17 2v8M13 6h8M6 14l4 7H2zM21 18a4 4 0 11-8 0 4 4 0 018 0",
  settings: "M9 3l1-2h4l1 2 3 2 2 0 2 4-1 2v3l1 2-2 4h-2l-3 2h-6l-3-2H4l-2-4 1-2v-3L2 9l2-4h2zM16 12a4 4 0 11-8 0 4 4 0 018 0",
  folder: "M3 5h6l2 3h10v12H3z",
  close: "M6 6l12 12M18 6L6 18"
};
function Icon({ name: name2, size = 20 }) {
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, focusable: false }, /* @__PURE__ */ React.createElement("path", { d: paths[name2] }));
}

// src/ui/components/LogoMark.tsx
var React2 = __toESM(require("react"), 1);

// src/ui/components/Navigation.tsx
var React3 = __toESM(require("react"), 1);

// src/ui/components/Modal.tsx
var React4 = __toESM(require("react"), 1);
var import_react2 = require("react");
function Modal({ open, label, children, className = "", onClose }) {
  const dialog = (0, import_react2.useRef)(null);
  const returnFocus = (0, import_react2.useRef)(null);
  const onCloseRef = (0, import_react2.useRef)(onClose);
  onCloseRef.current = onClose;
  (0, import_react2.useEffect)(() => {
    if (!open) return;
    returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => dialog.current?.focus());
    const onKeyDown = (event) => {
      if (event.key === "Escape") onCloseRef.current();
      if (event.key !== "Tab" || !dialog.current) return;
      const focusable = [...dialog.current.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),textarea:not(:disabled),select:not(:disabled),[tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) {
        event.preventDefault();
        dialog.current.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = previousOverflow;
      returnFocus.current?.focus();
    };
  }, [open]);
  if (!open) return null;
  return /* @__PURE__ */ React4.createElement("div", { className: "dsm-dialog-backdrop", onMouseDown: (event) => {
    if (event.target === event.currentTarget) onClose();
  } }, /* @__PURE__ */ React4.createElement("div", { ref: dialog, className: `dsm-dialog ${className}`.trim(), role: "dialog", "aria-modal": "true", "aria-label": label, tabIndex: -1 }, /* @__PURE__ */ React4.createElement("button", { type: "button", className: "dsm-dialog-close", "aria-label": "\u5173\u95ED", onClick: onClose }, /* @__PURE__ */ React4.createElement("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" }, /* @__PURE__ */ React4.createElement("path", { d: "m6 6 12 12M18 6 6 18" }))), children));
}

// src/ui/styles/modal.ts
var modalCss = `
.dsm-dialog-backdrop{position:fixed;inset:0;z-index:1200;display:grid;place-items:center;padding:24px;background:var(--dsw-alias-bg-mask-2)}
.dsm-dialog{position:relative;box-sizing:border-box;width:min(720px,calc(100vw - 48px));max-height:calc(100dvh - 48px);overflow:auto;scrollbar-width:thin;scrollbar-color:var(--dsw-alias-border-l2) transparent;border:0;border-radius:16px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);box-shadow:var(--dsw-elevation-prominent);outline:none;font:14px/22px "PingFang SC","Microsoft YaHei",sans-serif;animation:dsm-dialog-enter .16s ease-out}
.dsm-dialog *{box-sizing:border-box}
.dsm-dialog button{font:inherit;white-space:nowrap}
.dsm-dialog>.dsm-dialog-close{position:absolute;z-index:2;right:16px;top:16px;width:32px;height:32px;min-height:32px;padding:0;display:grid;place-items:center;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-tertiary);cursor:pointer}
.dsm-dialog-close svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round}
.dsm-dialog-close:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.dsm-dialog-close:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
@keyframes dsm-dialog-enter{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.dsm-dialog{animation:none}}
@media(max-width:640px){.dsm-dialog-backdrop{padding:12px}.dsm-dialog{width:calc(100vw - 24px);max-height:calc(100dvh - 24px);height:auto;border-radius:12px}.dsm-dialog>.dsm-dialog-close{right:8px;top:8px;width:44px;height:44px;min-height:44px}}
`;

// src/ui/styles/tokens.ts
var tokens = {
  canvas: "#121212",
  sidebar: "#202020",
  card: "#242424",
  selected: "#3a3a3a",
  border: "#343434",
  text: "#e7e7e7",
  secondary: "#a5a5a5"
};

// src/ui/styles/navigation.ts
var navigationCss = `
.wd-sidebar{height:100%;min-width:0;background:${tokens.sidebar};color:${tokens.text};font:14px/22px "PingFang SC","Microsoft YaHei",sans-serif;display:flex;flex-direction:column;overflow:hidden;border-right:1px solid ${tokens.border}}
.wd-sidebar *{box-sizing:border-box}.wd-sidebar button,.wd-sidebar input{font:inherit;color:inherit}
.wd-sidebar button{cursor:pointer}.wd-sidebar :focus-visible{outline:2px solid #ddd;outline-offset:-2px}
.wd-sidebar .wd-top-tools{height:46px;display:flex;align-items:center;justify-content:flex-end;padding:0 14px;gap:8px;flex:none}
.wd-icon-button{border:0;background:transparent;width:32px;height:32px;display:inline-grid;place-items:center;color:#aaa;border-radius:6px;flex:none}
.wd-sidebar .wd-brand-row{height:48px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;margin-bottom:20px;flex:none}
.wd-sidebar .wd-brand-row strong{font-size:18px;font-weight:600}.wd-sidebar .wd-discover{background:#343434;border:0;border-radius:18px;padding:4px 10px;display:flex;gap:3px;align-items:center;font-size:12px;color:#aaa}
.wd-sidebar .wd-main-nav{padding:0 10px;flex:none}.wd-nav-item{width:100%;display:flex;align-items:center;gap:4px;border:0;background:transparent;border-radius:8px;min-height:36px;margin:0 0 2px;padding:6px 8px;text-align:left;white-space:nowrap}
.wd-icon-slot{width:26px;display:inline-flex;align-items:center;flex:none;color:#b9b9b9}.wd-nav-item.is-active{background:${tokens.selected};font-weight:500}.wd-nav-item small{margin-left:auto;color:#a5a5a5;font-size:10px;font-weight:400}.wd-nav-item:disabled{cursor:not-allowed}.wd-sidebar button:hover:not(:disabled){background:#383838}
.wd-sidebar .wd-list-scroll{overflow:auto;min-height:0;flex:1;padding:0 10px 20px;scrollbar-width:thin}.wd-nav-group{margin-top:26px}.wd-nav-group summary{list-style:none;display:flex;align-items:center;gap:6px;color:#a5a5a5;font-size:12px;padding:0 10px 12px;cursor:pointer}.wd-nav-group summary::-webkit-details-marker{display:none}.wd-nav-group:not([open]) summary svg{transform:rotate(-90deg)}
.wd-sidebar .wd-task-row{border:0;background:transparent;border-radius:6px;width:100%;display:flex;align-items:center;text-align:left;gap:8px;padding:8px 10px;min-height:36px}.wd-task-row span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wd-task-row.is-active{background:#343434}.wd-sidebar .wd-help{font-size:12px;line-height:20px;color:#a5a5a5;padding:0 10px;margin:0}.wd-sidebar .wd-filter{margin:0 12px 12px;display:flex;gap:4px}.wd-filter input{min-width:0;width:100%;background:#292929;border:1px solid #454545;border-radius:6px;padding:6px 8px}.wd-sidebar .wd-footer{padding:12px 10px;flex:none}.wd-sidebar.is-collapsed .wd-top-tools{padding:0;justify-content:center}.wd-sidebar.is-collapsed .wd-main-nav{padding:0 8px}.wd-sidebar.is-collapsed .wd-footer{padding:8px}.wd-sidebar.is-collapsed .wd-nav-item{justify-content:center;padding:6px}.wd-sidebar.is-collapsed .wd-icon-slot{width:auto}
.wd-modal-backdrop{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:24px;background:rgba(0,0,0,.68);backdrop-filter:blur(2px)}
.wd-settings-modal{width:min(560px,calc(100vw - 32px));border:1px solid #444;border-radius:20px;background:#202020;color:${tokens.text};box-shadow:0 24px 80px rgba(0,0,0,.5);overflow:hidden}.wd-settings-modal header{display:flex;align-items:flex-start;justify-content:space-between;padding:28px 30px 18px}.wd-settings-modal h2{font-size:24px;line-height:32px;margin:3px 0 0}.wd-eyebrow{font-size:10px;letter-spacing:.18em;color:#777}.wd-modal-intro{margin:0;padding:0 30px 22px;color:#aaa;line-height:24px}.wd-setting-list{margin:0 30px;border:1px solid #3b3b3b;border-radius:12px;overflow:hidden}.wd-setting-list>div{display:flex;align-items:center;gap:14px;padding:16px}.wd-setting-list>div+div{border-top:1px solid #383838}.wd-setting-list svg{color:#aaa;flex:none}.wd-setting-list span{display:flex;flex-direction:column;gap:2px}.wd-setting-list strong{font-size:14px}.wd-setting-list small{color:#8f8f8f;font-size:12px}.wd-modal-note{margin:20px 30px 0;color:#888;font-size:12px;line-height:20px}.wd-settings-modal footer{display:flex;justify-content:flex-end;gap:10px;margin-top:26px;padding:18px 30px;border-top:1px solid #343434}.wd-button{border-radius:9px;padding:9px 16px;border:1px solid #464646}.wd-button-secondary{background:transparent;color:#ddd}.wd-button-primary{background:#eee;color:#171717;border-color:#eee;font-weight:600}.wd-button:hover{filter:brightness(1.08)}
@media(max-width:560px){.wd-sidebar .wd-nav-item,.wd-sidebar .wd-task-row,.wd-sidebar .wd-icon-button{min-height:44px}.wd-sidebar .wd-brand-row{margin-bottom:8px}.wd-sidebar .wd-main-nav{padding:0 6px}}
.wd-sidebar .wd-settings-modal .wd-button{flex:0 0 auto;width:auto}.wd-sidebar .wd-settings-modal .wd-button-secondary{background:transparent;color:#ddd}.wd-sidebar .wd-settings-modal .wd-button-primary{min-width:196px;background:#eee;color:#171717;border-color:#eee;font-weight:600}.wd-sidebar .wd-settings-modal .wd-button-primary:hover:not(:disabled){background:#fff;color:#111}
`;

// src/ui/components/Controls.tsx
var React5 = __toESM(require("react"), 1);
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
var Button = React5.forwardRef(
  function Button2({ variant = "outline", type = "button", tone, size = "md", id: suppliedId, ...props }, ref) {
    const generatedId = React5.useId();
    const id = suppliedId ?? generatedId;
    React5.useImperativeHandle(ref, () => document.getElementById(id), [id]);
    return /* @__PURE__ */ React5.createElement(import_dsh_client_ui_primitives.Button, { id, type, variant, size, "data-dsm-control": "button", "data-size": size, "data-tone": tone, ...props });
  }
);
var Input = React5.forwardRef(
  function Input2({ className = "", id: suppliedId, ...props }, ref) {
    const generatedId = React5.useId();
    const id = suppliedId ?? generatedId;
    React5.useImperativeHandle(ref, () => document.getElementById(id), [id]);
    return /* @__PURE__ */ React5.createElement(import_dsh_client_ui_primitives.Input, { id, "data-dsm-control": "input", className: `dsm-form-input ${className}`, ...props });
  }
);
function Select({ className = "", ...props }) {
  return /* @__PURE__ */ React5.createElement("select", { "data-dsm-control": "select", className: `dsm-form-select ${className}`, ...props });
}
function Textarea({ className = "", ...props }) {
  return /* @__PURE__ */ React5.createElement("textarea", { "data-dsm-control": "textarea", className: `dsm-form-textarea ${className}`, ...props });
}

// src/ui/styles/controls.ts
var controlsCss = `
[data-dsm-control="button"]{box-sizing:border-box;height:36px;min-height:36px;white-space:nowrap;flex-shrink:0}
[data-dsm-control="button"][data-size="sm"]{height:28px;min-height:28px}


[data-dsm-control="button"][data-tone="danger"]{color:var(--dsw-alias-state-error-primary)}
.dsm-form-input{min-width:0;max-width:100%;box-sizing:border-box;height:36px}
.dsm-form-input input{box-sizing:border-box;min-width:0;height:100%;min-height:0;font-size:14px;line-height:20px}
.dsm-form-select,.dsm-form-textarea{box-sizing:border-box;max-width:100%;min-width:0;border:0;border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);box-shadow:var(--dsw-elevation-soft);font:inherit;font-size:14px;line-height:20px}
.dsm-form-select{height:36px;min-height:36px;padding:0 12px;cursor:pointer;color-scheme:inherit}
.dsm-form-textarea{display:block;width:100%;min-height:100px;padding:10px 12px;resize:vertical}
.dsm-form-textarea::placeholder{color:var(--dsw-alias-label-tertiary)}
.dsm-form-select:focus-visible,.dsm-form-textarea:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.dsm-form-select:disabled,.dsm-form-textarea:disabled{opacity:.5;cursor:not-allowed}
.dsm-form-select[aria-invalid=true],.dsm-form-textarea[aria-invalid=true]{outline:1px solid var(--dsw-alias-state-error-primary)}
`;

// src/client/SkillsPanel.tsx
var React8 = __toESM(require("react"), 1);
var import_react5 = require("react");

// src/client/ImportSkillModal.tsx
var React6 = __toESM(require("react"), 1);
var import_react3 = require("react");

// node_modules/fflate/esm/browser.js
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = (function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flm = /* @__PURE__ */ hMap(flt, 9, 0);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  // determined by compression function
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var wbits = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
  d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i])
      t.push({ s: i, f: d[i] });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s)
    return { t: et, l: 0 };
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return { t: v, l: 1 };
  }
  t.sort(function(a, b) {
    return a.f - b.f;
  });
  t.push({ s: -1, f: 25001 });
  var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
  t[0] = { s: -1, f: l.f + r.f, l, r };
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = { s: -1, f: l.f + r.f, l, r };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym)
      maxSym = t2[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return { t: new u8(tr), l: mbt };
};
var ln = function(n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
  var s = c.length;
  while (s && !c[--s])
    ;
  var cl = new u16(++s);
  var cli = 0, cln = c[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return { c: cl.subarray(0, cli), n: s };
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i)
    l += cf[i] * cl[i];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
  var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
  var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
  var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    ++lcfreq[lclt[i] & 31];
  for (var i = 0; i < lcdt.length; ++i)
    ++lcfreq[lcdt[i] & 31];
  var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
  if (bs >= 0 && flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    var sym = syms[i];
    if (sym > 255) {
      var len = sym >> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, sym >> 23 & 31), p += fleb[len];
      var dst = sym & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[sym]), p += ll[sym];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
  var s = st.z || dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
  var w = o.subarray(pre, o.length - post);
  var lst = st.l;
  var pos = (st.r || 0) & 7;
  if (lvl) {
    if (pos)
      w[0] = st.r >> 3;
    var opt = deo[lvl - 1];
    var n = opt >> 13, c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new i32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
    for (; i + 2 < s; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s - i;
        if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    for (i = Math.max(i, wi); i < s; ++i) {
      syms[li++] = dat[i];
      ++lf[dat[i]];
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst) {
      st.r = pos & 7 | w[pos / 8 | 0] << 3;
      pos -= 7;
      st.h = head, st.p = prev, st.i = i, st.w = wi;
    }
  } else {
    for (var i = st.w || 0; i < s + lst; i += 65535) {
      var e = i + 65535;
      if (e >= s) {
        w[pos / 8 | 0] = lst;
        e = s;
      }
      pos = wfblk(w, pos + 1, dat.subarray(i, e));
    }
    st.i = s;
  }
  return slc(o, 0, pre + shft(pos) + post);
};
var crct = /* @__PURE__ */ (function() {
  var t = new Int32Array(256);
  for (var i = 0; i < 256; ++i) {
    var c = i, k = 9;
    while (--k)
      c = (c & 1 && -306674912) ^ c >>> 1;
    t[i] = c;
  }
  return t;
})();
var crc = function() {
  var c = -1;
  return {
    p: function(d) {
      var cr = c;
      for (var i = 0; i < d.length; ++i)
        cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
      c = cr;
    },
    d: function() {
      return ~c;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  if (!st) {
    st = { l: 1 };
    if (opt.dictionary) {
      var dict = opt.dictionary.subarray(-32768);
      var newDat = new u8(dict.length + dat.length);
      newDat.set(dict);
      newDat.set(dat, dict.length);
      dat = newDat;
      st.w = dict.length;
    }
  }
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a, b) {
  var o = {};
  for (var k in a)
    o[k] = a[k];
  for (var k in b)
    o[k] = b[k];
  return o;
};
var wbytes = function(d, b, v) {
  for (; v; ++b)
    d[b] = v, v >>>= 8;
};
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
var fltn = function(d, p, t, o) {
  for (var k in d) {
    var val = d[k], n = p + k, op = o;
    if (Array.isArray(val))
      op = mrg(o, val[1]), val = val[0];
    if (ArrayBuffer.isView(val))
      t[n] = [val, op];
    else {
      t[n += "/"] = [new u8(0), op];
      fltn(val, n, t, o);
    }
  }
};
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535)
        err(9);
      le += l + 4;
    }
  }
  return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
  var fl2 = fn.length, ex = f.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
  if (ce != null)
    d[b++] = 20, d[b++] = f.os;
  d[b] = 20, b += 2;
  d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
  d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119)
    err(10);
  wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
  if (c != -1) {
    wbytes(d, b, f.crc);
    wbytes(d, b + 4, c < 0 ? -c - 2 : c);
    wbytes(d, b + 8, f.size);
  }
  wbytes(d, b + 12, fl2);
  wbytes(d, b + 14, exl), b += 16;
  if (ce != null) {
    wbytes(d, b, col);
    wbytes(d, b + 6, f.attrs);
    wbytes(d, b + 10, ce), b += 14;
  }
  d.set(fn, b);
  b += fl2;
  if (exl) {
    for (var k in ex) {
      var exf = ex[k], l = exf.length;
      wbytes(d, b, +k);
      wbytes(d, b + 2, l);
      d.set(exf, b + 4), b += 4 + l;
    }
  }
  if (col)
    d.set(co, b), b += col;
  return b;
};
var wzf = function(o, b, c, d, e) {
  wbytes(o, b, 101010256);
  wbytes(o, b + 8, c);
  wbytes(o, b + 10, c);
  wbytes(o, b + 12, d);
  wbytes(o, b + 16, e);
};
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r = {};
  var files = [];
  fltn(data, "", r, opts);
  var o = 0;
  var tot = 0;
  for (var fn in r) {
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var compression = p.level == 0 ? 0 : 8;
    var f = strToU8(fn), s = f.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    if (s > 65535)
      err(11);
    var d = compression ? deflateSync(file, p) : file, l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f,
      m,
      u: s != fn.length || m && com.length != ms,
      o,
      compression
    }));
    o += 30 + s + exl + l;
    tot += 76 + 2 * (s + exl) + (ms || 0) + l;
  }
  var out = new u8(tot + 22), oe = o, cdl = tot - o;
  for (var i = 0; i < files.length; ++i) {
    var f = files[i];
    wzh(out, f.o, f, f.f, f.u, f.c.length);
    var badd = 30 + f.f.length + exfl(f.extra);
    out.set(f.c, f.o + badd);
    wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
  }
  wzf(out, o, files.length, cdl, oe);
  return out;
}

// src/client/ImportSkillModal.tsx
var maximumBytes = 50 * 1024 * 1024;
function messageOf(cause) {
  return cause instanceof Error ? cause.message : "\u6280\u80FD\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002";
}
function sizeOf(bytes) {
  return bytes < 1024 ? `${bytes} B` : bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KiB` : `${(bytes / 1024 / 1024).toFixed(1)} MiB`;
}
async function packageSelection(files, signal) {
  signal.throwIfAborted();
  const selected = [...files];
  if (!selected.length) throw new Error("\u8BF7\u9009\u62E9\u6280\u80FD\u6587\u4EF6\u3002");
  if (selected.length === 1 && !selected[0].webkitRelativePath) return selected[0];
  if (selected.length > 400) throw new Error("\u6280\u80FD\u76EE\u5F55\u6700\u591A\u5305\u542B 400 \u4E2A\u6587\u4EF6\u3002");
  const total = selected.reduce((sum, file) => sum + file.size, 0);
  if (total > maximumBytes) throw new Error("\u6280\u80FD\u76EE\u5F55\u4E0D\u5F97\u8D85\u8FC7 50 MiB\u3002");
  const entries = {};
  for (const file of selected) {
    signal.throwIfAborted();
    const path2 = file.webkitRelativePath || file.name;
    entries[path2] = new Uint8Array(await file.arrayBuffer());
  }
  signal.throwIfAborted();
  return new File([zipSync(entries, { level: 6 })], "skill-directory.zip", { type: "application/zip" });
}
function ImportSkillModal({ open, management, onClose, onInstalled }) {
  const [staged, setStaged] = (0, import_react3.useState)();
  const [scope, setScope] = (0, import_react3.useState)("shared-agents");
  const [busy, setBusy] = (0, import_react3.useState)(false);
  const [dragging, setDragging] = (0, import_react3.useState)(false);
  const [error, setError] = (0, import_react3.useState)("");
  const fileInput = (0, import_react3.useRef)(null);
  const folderInput = (0, import_react3.useRef)(null);
  const operationAbort = (0, import_react3.useRef)(void 0);
  const discard = async () => {
    const current = staged;
    setStaged(void 0);
    setError("");
    setBusy(false);
    setDragging(false);
    setScope("shared-agents");
    if (current) await management.discardImport(current.id).catch(() => {
    });
  };
  const close = () => {
    operationAbort.current?.abort();
    void discard();
    onClose();
  };
  (0, import_react3.useEffect)(() => () => {
    operationAbort.current?.abort();
    if (staged) void management.discardImport(staged.id).catch(() => {
    });
  }, [management, staged]);
  const inspect = async (files) => {
    setBusy(true);
    setError("");
    const controller = new AbortController();
    operationAbort.current?.abort();
    operationAbort.current = controller;
    try {
      if (staged) await management.discardImport(staged.id).catch(() => {
      });
      const upload = await packageSelection(files, controller.signal);
      if (upload.size > maximumBytes) throw new Error("\u6280\u80FD\u5305\u4E0D\u5F97\u8D85\u8FC7 50 MiB\u3002");
      setStaged(await management.stageImport(upload, controller.signal));
    } catch (cause) {
      setStaged(void 0);
      if (!(cause instanceof DOMException && cause.name === "AbortError")) setError(messageOf(cause));
    } finally {
      if (operationAbort.current === controller) operationAbort.current = void 0;
      setBusy(false);
    }
  };
  const install = async () => {
    if (!staged) return;
    setBusy(true);
    setError("");
    const controller = new AbortController();
    operationAbort.current?.abort();
    operationAbort.current = controller;
    try {
      const receipt = await management.commitImport(staged.id, scope, controller.signal);
      setStaged(void 0);
      onClose();
      await onInstalled(receipt.name);
    } catch (cause) {
      setError(messageOf(cause));
    } finally {
      if (operationAbort.current === controller) operationAbort.current = void 0;
      setBusy(false);
    }
  };
  return /* @__PURE__ */ React6.createElement(Modal, { open, label: "\u5BFC\u5165\u6280\u80FD", className: "import-skill-dialog", onClose: close }, /* @__PURE__ */ React6.createElement("header", { className: "import-header" }, /* @__PURE__ */ React6.createElement("h2", null, "\u5BFC\u5165\u6280\u80FD"), /* @__PURE__ */ React6.createElement("p", null, "\u6DFB\u52A0\u6280\u80FD\u5305\uFF0C\u6269\u5C55\u4F60\u7684\u5DE5\u4F5C\u80FD\u529B\u3002")), /* @__PURE__ */ React6.createElement("div", { className: "import-content" }, !staged ? /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(
    "button",
    {
      type: "button",
      className: `import-dropzone${dragging ? " dragging" : ""}`,
      disabled: busy,
      onClick: () => fileInput.current?.click(),
      onDragEnter: (event) => {
        event.preventDefault();
        setDragging(true);
      },
      onDragOver: (event) => event.preventDefault(),
      onDragLeave: (event) => {
        if (event.currentTarget === event.target) setDragging(false);
      },
      onDrop: (event) => {
        event.preventDefault();
        setDragging(false);
        void inspect(event.dataTransfer.files);
      }
    },
    /* @__PURE__ */ React6.createElement("span", { className: "upload-glyph", "aria-hidden": true }, "\u21A5"),
    /* @__PURE__ */ React6.createElement("strong", null, busy ? "\u6B63\u5728\u4E0A\u4F20\u5E76\u9884\u68C0\u2026" : "\u62D6\u62FD\u6587\u4EF6\u6216\u70B9\u51FB\u4E0A\u4F20"),
    /* @__PURE__ */ React6.createElement("small", null, ".zip \u6280\u80FD\u5305\u6216 SKILL.md")
  ), busy && /* @__PURE__ */ React6.createElement(Button, { type: "button", className: "folder-picker", onClick: () => operationAbort.current?.abort() }, "\u53D6\u6D88\u4E0A\u4F20"), /* @__PURE__ */ React6.createElement("input", { ref: fileInput, className: "visually-hidden", type: "file", accept: ".zip,.md,text/markdown,application/zip", onChange: (event) => {
    if (event.currentTarget.files) void inspect(event.currentTarget.files);
    event.currentTarget.value = "";
  } }), /* @__PURE__ */ React6.createElement("input", { ref: folderInput, className: "visually-hidden", type: "file", multiple: true, ...{ webkitdirectory: "", directory: "" }, onChange: (event) => {
    if (event.currentTarget.files) void inspect(event.currentTarget.files);
    event.currentTarget.value = "";
  } }), /* @__PURE__ */ React6.createElement(Button, { type: "button", className: "folder-picker", disabled: busy, onClick: () => folderInput.current?.click() }, "\u9009\u62E9\u6280\u80FD\u6587\u4EF6\u5939"), /* @__PURE__ */ React6.createElement("section", { className: "import-requirements" }, /* @__PURE__ */ React6.createElement("h3", null, "\u6587\u4EF6\u8981\u6C42"), /* @__PURE__ */ React6.createElement("ul", null, /* @__PURE__ */ React6.createElement("li", null, "\u538B\u7F29\u5305\u6216\u6587\u4EF6\u5939\u5185\u5FC5\u987B\u4E14\u53EA\u80FD\u5305\u542B\u4E00\u4E2A SKILL.md"), /* @__PURE__ */ React6.createElement("li", null, "SKILL.md \u7684 YAML frontmatter \u5FC5\u987B\u5305\u542B\u5408\u6CD5\u7684 name \u548C description"), /* @__PURE__ */ React6.createElement("li", null, "\u6700\u591A 50 MiB\u3001400 \u4E2A\u6587\u4EF6\u30016 \u5C42\u8D44\u6E90\u76EE\u5F55"), /* @__PURE__ */ React6.createElement("li", null, "\u8DEF\u5F84\u7A7F\u8D8A\u548C\u7B26\u53F7\u94FE\u63A5\u4F1A\u88AB\u62D2\u7EDD\uFF1B\u811A\u672C\u4EC5\u4F5C\u4E3A\u8D44\u6E90\u4FDD\u5B58\uFF0C\u4E0D\u4F1A\u5728\u5BFC\u5165\u65F6\u6267\u884C")))) : /* @__PURE__ */ React6.createElement("section", { className: "import-review", "data-testid": "skill-import-review" }, /* @__PURE__ */ React6.createElement("div", { className: "import-review-title" }, /* @__PURE__ */ React6.createElement("span", { className: "skill-mark", "aria-hidden": true }, staged.inspection.name[0]), /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("h3", null, staged.inspection.name), /* @__PURE__ */ React6.createElement("p", null, staged.inspection.description))), /* @__PURE__ */ React6.createElement("dl", null, /* @__PURE__ */ React6.createElement("dt", null, "\u6765\u6E90\u6587\u4EF6"), /* @__PURE__ */ React6.createElement("dd", null, staged.fileName), /* @__PURE__ */ React6.createElement("dt", null, "\u6587\u4EF6"), /* @__PURE__ */ React6.createElement("dd", null, staged.inspection.files.length, " \u4E2A\uFF0C", sizeOf(staged.inspection.totalBytes)), /* @__PURE__ */ React6.createElement("dt", null, "\u5B89\u88C5\u8303\u56F4"), /* @__PURE__ */ React6.createElement("dd", null, /* @__PURE__ */ React6.createElement(Select, { value: scope, onChange: (event) => setScope(event.currentTarget.value) }, /* @__PURE__ */ React6.createElement("option", { value: "shared-agents" }, "\u6240\u6709 Skills Master \u4EFB\u52A1\uFF08\u5171\u4EAB\uFF09"), /* @__PURE__ */ React6.createElement("option", { value: "profile" }, "\u5F53\u524D Harness Profile")))), /* @__PURE__ */ React6.createElement("details", null, /* @__PURE__ */ React6.createElement("summary", null, "\u67E5\u770B\u6587\u4EF6\u6E05\u5355"), /* @__PURE__ */ React6.createElement("ul", { className: "import-file-list" }, staged.inspection.files.map((path2) => /* @__PURE__ */ React6.createElement("li", { key: path2 }, path2)))), /* @__PURE__ */ React6.createElement("p", { className: "import-note" }, "\u9884\u68C0\u5DF2\u901A\u8FC7\u3002\u786E\u8BA4\u540E\u624D\u4F1A\u5199\u5165 Harness \u5B98\u65B9\u6280\u80FD\u76EE\u5F55\uFF1B\u82E5\u5DF2\u5B58\u5728\u540C\u540D\u6280\u80FD\uFF0C\u5B89\u88C5\u4F1A\u505C\u6B62\u4E14\u4E0D\u4F1A\u8986\u76D6\u3002")), error && /* @__PURE__ */ React6.createElement("p", { className: "error", role: "alert" }, error)), staged && /* @__PURE__ */ React6.createElement("footer", { className: "import-footer" }, /* @__PURE__ */ React6.createElement("div", { className: "import-actions" }, /* @__PURE__ */ React6.createElement(Button, { type: "button", onClick: () => busy ? operationAbort.current?.abort() : void discard() }, busy ? "\u53D6\u6D88\u5B89\u88C5" : "\u91CD\u65B0\u9009\u62E9"), /* @__PURE__ */ React6.createElement(Button, { variant: "primary", type: "button", className: "install", disabled: busy, onClick: () => void install() }, busy ? "\u6B63\u5728\u5B89\u88C5\u2026" : "\u786E\u8BA4\u5B89\u88C5"))));
}

// src/client/SkillHubPanel.tsx
var React7 = __toESM(require("react"), 1);
var import_react4 = require("react");
var PAGE_SIZE = 24;
function SkillHubIcon({ card }) {
  const iconUrl = card.iconUrl && /^https:\/\//i.test(card.iconUrl) ? card.iconUrl : void 0;
  return /* @__PURE__ */ React7.createElement("span", { className: "skillhub-icon", "aria-hidden": "true" }, card.name.slice(0, 1).toUpperCase(), iconUrl && /* @__PURE__ */ React7.createElement("img", { src: iconUrl, alt: "", loading: "lazy", decoding: "async", referrerPolicy: "no-referrer", onError: (event) => {
    event.currentTarget.hidden = true;
  } }));
}
async function skillHub(method, payload, signal) {
  const response = await fetch("/api/dsh-skills-master/market", {
    method: "POST",
    credentials: "same-origin",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ method, ...payload }),
    signal
  });
  const result = await response.json();
  if (!response.ok || !result.ok) throw new Error(result.error || `SkillHub \u8BF7\u6C42\u5931\u8D25 (${response.status})`);
  return result;
}
function SkillHubPanel({ query, onInstalled, onOpenInstalled, management, refreshToken }) {
  const [cards, setCards] = (0, import_react4.useState)([]);
  const [total, setTotal] = (0, import_react4.useState)(0);
  const [busy, setBusy] = (0, import_react4.useState)(true);
  const [error, setError] = (0, import_react4.useState)("");
  const [installing, setInstalling] = (0, import_react4.useState)("");
  const [installedName, setInstalledName] = (0, import_react4.useState)("");
  const [page, setPage] = (0, import_react4.useState)(0);
  const [review, setReview] = (0, import_react4.useState)();
  (0, import_react4.useEffect)(() => {
    setPage(0);
  }, [query]);
  (0, import_react4.useEffect)(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      setBusy(true);
      setError("");
      void skillHub("search", { query: query.trim(), limit: PAGE_SIZE, offset: page * PAGE_SIZE }, controller.signal).then((result) => {
        setCards([...new Map((result.items ?? []).map((item) => [item.slug, item])).values()]);
        setTotal(result.total ?? 0);
      }).catch((cause) => {
        if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : "SkillHub \u6682\u4E0D\u53EF\u7528");
      }).finally(() => {
        if (!controller.signal.aborted) setBusy(false);
      });
    }, 250);
    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query, page, refreshToken]);
  const install = async (card) => {
    setInstalling(card.slug);
    setError("");
    try {
      const result = await skillHub("prepare-install", { slug: card.slug, version: card.version });
      setReview({ card, staged: result.staged });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "\u5B89\u88C5\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002");
    } finally {
      setInstalling("");
    }
  };
  const cancelReview = async () => {
    if (!review || installing) return;
    try {
      await management.discardImport(review.staged.id);
      setReview(void 0);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "\u53D6\u6D88\u5931\u8D25");
    }
  };
  const confirmInstall = async () => {
    if (!review || installing) return;
    setInstalling(review.card.slug);
    setError("");
    try {
      await management.commitImport(review.staged.id, "profile");
      setCards((current) => current.map((item) => item.slug === review.card.slug ? { ...item, installed: true } : item));
      setInstalledName(review.staged.inspection.name);
      setReview(void 0);
      await onInstalled();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "\u5B89\u88C5\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002");
    } finally {
      setInstalling("");
    }
  };
  const pageCount = Math.ceil(total / PAGE_SIZE);
  const firstPage = Math.max(0, Math.min(page - 2, pageCount - 5));
  const pageNumbers = Array.from({ length: Math.min(5, pageCount) }, (_, index) => firstPage + index);
  return /* @__PURE__ */ React7.createElement("section", { className: "skillhub-market", "aria-label": "SkillHub \u6280\u80FD\u76EE\u5F55" }, /* @__PURE__ */ React7.createElement("div", { className: "market-head" }, /* @__PURE__ */ React7.createElement("h2", null, "SkillHub ", /* @__PURE__ */ React7.createElement("span", { className: "market-count" }, total)), /* @__PURE__ */ React7.createElement("span", { className: "muted" }, "\u6765\u6E90\uFF1ASkillHub \xB7 \u5B89\u88C5\u5230\u672C\u673A DSH \u6280\u80FD\u76EE\u5F55")), installedName && /* @__PURE__ */ React7.createElement("div", { className: "skillhub-success", role: "status" }, /* @__PURE__ */ React7.createElement("span", null, "\u5DF2\u5B89\u88C5\u300C", installedName, "\u300D\u3002"), /* @__PURE__ */ React7.createElement(Button, { onClick: onOpenInstalled }, "\u67E5\u770B\u5DF2\u5B89\u88C5"), /* @__PURE__ */ React7.createElement("button", { className: "skillhub-dismiss", "aria-label": "\u5173\u95ED\u5B89\u88C5\u63D0\u793A", onClick: () => setInstalledName("") }, "\xD7")), error && /* @__PURE__ */ React7.createElement("p", { className: "catalog-note", role: "alert" }, error), busy ? /* @__PURE__ */ React7.createElement("p", { className: "muted", role: "status" }, "\u6B63\u5728\u8BFB\u53D6 SkillHub\u2026") : cards.length ? /* @__PURE__ */ React7.createElement("div", { className: "grid" }, cards.map((card) => /* @__PURE__ */ React7.createElement("article", { className: "card market-card", key: card.slug }, /* @__PURE__ */ React7.createElement("div", { className: "card-top" }, /* @__PURE__ */ React7.createElement("a", { className: "card-open", href: card.pageUrl?.startsWith("https://skillhub.cn/skills/") ? card.pageUrl : `https://skillhub.cn/skills/${encodeURIComponent(card.slug)}`, target: "_blank", rel: "noopener noreferrer", "aria-label": `\u67E5\u770B ${card.name} \u7684\u6765\u6E90\u9875` }, /* @__PURE__ */ React7.createElement(SkillHubIcon, { card }), /* @__PURE__ */ React7.createElement("span", { className: "card-title" }, /* @__PURE__ */ React7.createElement("strong", { title: card.name }, card.name), /* @__PURE__ */ React7.createElement("small", null, card.categoryLabel || card.owner || card.slug))), /* @__PURE__ */ React7.createElement(Button, { className: `install${card.installed || installing === card.slug ? " is-status" : ""}${card.installed ? " is-installed" : ""}`, disabled: card.installed || Boolean(installing), "aria-label": card.installed ? `\u5DF2\u5B89\u88C5 ${card.name}` : `\u5B89\u88C5 ${card.name}`, onClick: () => void install(card) }, card.installed ? "\u5DF2\u5B89\u88C5" : installing === card.slug ? "\u5B89\u88C5\u4E2D\u2026" : "\uFF0B")), /* @__PURE__ */ React7.createElement("p", { className: "muted" }, card.description), /* @__PURE__ */ React7.createElement("small", { className: "skillhub-meta" }, "\u7248\u672C ", card.version || "\u672A\u6807\u6CE8", " \xB7 \u8BB8\u53EF\u8BC1\u8BF7\u67E5\u770B\u6765\u6E90\u9875")))) : !error && /* @__PURE__ */ React7.createElement("p", { className: "muted" }, "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u6280\u80FD\u3002"), /* @__PURE__ */ React7.createElement(Modal, { className: "market-install-dialog", open: Boolean(review), label: "\u786E\u8BA4\u5B89\u88C5 SkillHub \u6280\u80FD", onClose: () => void cancelReview() }, review && /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement("h2", { className: "market-install-title" }, "\u5B89\u88C5 ", review.card.name), /* @__PURE__ */ React7.createElement("div", { className: "market-install-body" }, /* @__PURE__ */ React7.createElement("p", { className: "market-install-description" }, review.staged.inspection.description), /* @__PURE__ */ React7.createElement("p", null, "\u7248\u672C\uFF1A", review.card.version || "\u6765\u6E90\u672A\u6807\u6CE8", " \xB7 \u5B89\u88C5\u5230\u5F53\u524D Harness \u6280\u80FD\u76EE\u5F55"), /* @__PURE__ */ React7.createElement("p", null, "\u6280\u80FD\u540D\u79F0\uFF1A", review.staged.inspection.name, " \xB7 ", review.staged.inspection.files.length, " \u4E2A\u6587\u4EF6 \xB7 ", Math.ceil(review.staged.inspection.totalBytes / 1024), " KiB"), /* @__PURE__ */ React7.createElement("a", { href: review.card.pageUrl, target: "_blank", rel: "noopener noreferrer" }, "\u67E5\u770B\u6765\u6E90\u4E0E\u8BB8\u53EF\u8BC1"), /* @__PURE__ */ React7.createElement("details", null, /* @__PURE__ */ React7.createElement("summary", null, "\u6587\u4EF6\u6E05\u5355"), /* @__PURE__ */ React7.createElement("ul", null, review.staged.inspection.files.map((path2) => /* @__PURE__ */ React7.createElement("li", { key: path2 }, path2)))), error && /* @__PURE__ */ React7.createElement("p", { role: "alert" }, error)), /* @__PURE__ */ React7.createElement("div", { className: "market-install-actions" }, /* @__PURE__ */ React7.createElement(Button, { disabled: Boolean(installing), onClick: () => void cancelReview() }, "\u53D6\u6D88"), /* @__PURE__ */ React7.createElement(Button, { variant: "primary", disabled: Boolean(installing), onClick: () => void confirmInstall() }, installing ? "\u5B89\u88C5\u4E2D\u2026" : "\u786E\u8BA4\u5B89\u88C5")))), !busy && pageCount > 1 && /* @__PURE__ */ React7.createElement("nav", { className: "skillhub-pagination", "aria-label": "SkillHub \u5206\u9875" }, /* @__PURE__ */ React7.createElement(Button, { disabled: page === 0, onClick: () => setPage((value) => value - 1) }, "\u4E0A\u4E00\u9875"), firstPage > 0 && /* @__PURE__ */ React7.createElement("span", { "aria-hidden": "true" }, "\u2026"), pageNumbers.map((number) => /* @__PURE__ */ React7.createElement("button", { key: number, "aria-current": page === number ? "page" : void 0, className: page === number ? "active" : "", onClick: () => setPage(number) }, number + 1)), firstPage + pageNumbers.length < pageCount && /* @__PURE__ */ React7.createElement("span", { "aria-hidden": "true" }, "\u2026"), /* @__PURE__ */ React7.createElement(Button, { disabled: page + 1 >= pageCount, onClick: () => setPage((value) => value + 1) }, "\u4E0B\u4E00\u9875"), /* @__PURE__ */ React7.createElement("span", { className: "muted" }, "\u7B2C ", page + 1, " / ", pageCount, " \u9875")));
}

// src/client/styles.ts
var skillsCss = `${modalCss}
@layer dsh-skills-master-business {


.dsm-skills{overflow:auto;box-sizing:border-box}.dsm-skills{height:100%;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:14px/22px "PingFang SC","Microsoft YaHei",sans-serif;padding:24px}.dsm-skills *{box-sizing:border-box}.dsm-skills .nav-toggle{display:none}.dsm-skills button,.dsm-skills input{font:inherit;color:inherit;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-2);min-height:36px;padding:6px 12px}.dsm-skills button{cursor:pointer}.dsm-skills button:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.dsm-skills button:disabled{cursor:not-allowed}.dsm-skills button:disabled{color:var(--dsw-alias-label-dimmed)}.dsm-skills :focus-visible{outline-offset:3px}.dsm-skills :focus-visible{outline:2px solid var(--dsw-alias-brand-primary)}.dsm-skills .cap-header{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:28px}.dsm-skills .cap-tab{display:flex;align-items:center;gap:7px;white-space:nowrap}.dsm-skills .cap-tab{border:0;background:transparent}.dsm-skills .cap-tab.active{background:var(--dsw-alias-interactive-bg-hover)}.dsm-skills .cap-tab:disabled{cursor:default}.dsm-skills .cap-tab:disabled{color:var(--dsw-alias-label-tertiary)}.dsm-skills .search{margin-left:auto;width:250px;min-width:150px}.dsm-skills .installed-count,.dsm-skills .add-skill{white-space:nowrap}.dsm-skills .installed-count{display:inline-flex;align-items:center}.dsm-skills .installed-count{min-height:36px;padding:6px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary)}.dsm-skills .add-menu-wrap,.dsm-skills .card-actions{position:relative}.dsm-skills .add-skill,.dsm-skills .try{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-inverted);border-color:var(--dsw-alias-border-l2);font-weight:600}.dsm-skills .add-menu,.dsm-skills .card-menu{position:absolute;z-index:20;right:0;top:calc(100% + 8px);width:164px}.dsm-skills .add-menu,.dsm-skills .card-menu{padding:8px;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:14px;box-shadow:0 14px 36px var(--dsw-alias-bg-mask-2)}.dsm-skills .add-menu button,.dsm-skills .card-menu button{display:block;width:100%;text-align:left}.dsm-skills .add-menu button,.dsm-skills .card-menu button{border:0;background:transparent;min-height:40px;padding:8px 12px}.dsm-skills .card-menu .danger{color:var(--dsw-alias-state-error-primary)}.dsm-skills .section-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px;border-bottom:1px solid var(--dsw-alias-border-l2)}.dsm-skills .section-head{padding-bottom:18px}.dsm-skills h1{margin:0}.dsm-skills h1{font-size:25px;line-height:34px;font-weight:600}.dsm-skills .muted{color:var(--dsw-alias-label-tertiary)}.dsm-skills .counts{margin:0 0 16px}.dsm-skills .counts{font-size:12px}.dsm-skills .counts:not(.error):not(.notice){position:absolute;width:1px;overflow:hidden;clip-path:inset(50%)}.dsm-skills .counts:not(.error):not(.notice){height:1px}.dsm-skills .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px}.dsm-skills .card{position:relative;min-width:0;display:flex;flex-direction:column}.dsm-skills .card{border-radius:18px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);min-height:128px;padding:14px}.dsm-skills .card:hover{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}.dsm-skills .card-top{display:flex;align-items:center;gap:14px;min-width:0}.dsm-skills .card-open{display:flex;align-items:center;gap:14px;min-width:0;flex:1;text-align:left}.dsm-skills .card-open{padding:0;border:0;background:transparent}.dsm-skills .card-open:hover:not(:disabled){background:transparent}.dsm-skills .card-open strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsm-skills .card-open strong{font-weight:600;font-size:15px}.dsm-skills .card p{overflow:hidden;margin:6px 0 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.dsm-skills .card p{font-size:15px;line-height:24px;height:48px}.dsm-skills .skill-mark{display:inline-grid;place-items:center;width:46px;flex:none;text-transform:uppercase}.dsm-skills .skill-mark{background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-brand-text);border-radius:50%;height:46px;font-weight:700;font-size:19px}.dsm-skills .more-button{width:36px}.dsm-skills .more-button{padding:0;border:0;font-size:20px}.dsm-skills .switch{width:34px;flex:none}.dsm-skills .switch{min-height:20px;height:20px;padding:2px;border:0;border-radius:999px;background:var(--dsw-alias-state-success-primary)}.dsm-skills .switch::after{content:"";display:block;width:16px;margin-left:14px}.dsm-skills .switch::after{height:16px;border-radius:50%;background:white}.dsm-skills .empty{text-align:center}.dsm-skills .empty{padding:64px 20px}.dsm-skills .empty strong{display:block;margin-bottom:8px}.dsm-skills .empty strong{font-size:16px}.skill-detail-dialog{padding:24px}.skill-detail-dialog .detail-hero{display:grid;grid-template-columns:48px minmax(0,1fr) auto;gap:16px;align-items:center}.skill-detail-dialog .detail-hero{padding-right:64px}.skill-detail-dialog .skill-mark{display:inline-grid;place-items:center;width:48px;text-transform:uppercase}.skill-detail-dialog .skill-mark{height:48px;border-radius:12px;background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-brand-text);font-size:22px;font-weight:700}.skill-detail-dialog .detail-title h1{margin:0 0 10px;overflow-wrap:anywhere}.skill-detail-dialog .detail-title h1{font-size:20px;line-height:28px}.skill-detail-dialog .detail-title p{margin:16px 0 0}.skill-detail-dialog .detail-title p{font-size:14px;line-height:23px;color:var(--dsw-alias-label-primary)}.skill-detail-dialog .detail-actions{display:flex;gap:9px;align-items:center}.skill-detail-dialog button{cursor:pointer}.skill-detail-dialog button{font:inherit;min-height:36px;padding:6px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}.skill-detail-dialog .try{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-inverted);border-color:var(--dsw-alias-border-l2);font-weight:600}.skill-detail-dialog .detail-section-title{display:flex;align-items:center;gap:9px;margin:24px 0 12px}.skill-detail-dialog .detail-section-title{font-size:15px}.skill-detail-dialog .detail-body{white-space:normal;overflow-wrap:anywhere}.skill-detail-dialog .detail-body{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:10px;padding:16px}.skill-detail-dialog .detail-body dl{display:grid;grid-template-columns:80px minmax(0,1fr);gap:12px;margin:0}.skill-detail-dialog .detail-body dt{margin:0}.skill-detail-dialog .detail-body dt{color:var(--dsw-alias-label-tertiary)}.skill-detail-dialog .detail-body dd{margin:0;min-width:0}.skill-detail-dialog .command{display:block;overflow-wrap:anywhere}.skill-detail-dialog .command{padding:12px;background:var(--dsw-alias-bg-layer-1);border-radius:8px}.dsm-skills svg,.skill-detail-dialog svg{width:20px;stroke:currentColor;stroke-width:1.7;fill:none;stroke-linecap:round}.dsm-skills svg,.skill-detail-dialog svg{height:20px}.dsm-skills .error,.skill-detail-dialog .error{color:var(--dsw-alias-state-error-primary)}@media(max-width:1400px){.dsm-skills .grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:900px){.dsm-skills .grid{grid-template-columns:repeat(2,minmax(0,1fr))}.dsm-skills .search{order:2;margin-left:0;flex:1}.skill-detail-dialog .detail-hero{grid-template-columns:48px minmax(0,1fr)}.skill-detail-dialog .skill-mark{width:48px}.skill-detail-dialog .skill-mark{height:48px;font-size:22px}.skill-detail-dialog .detail-actions{grid-column:1/-1}}@media(max-width:560px){.dsm-skills{padding:16px}.dsm-skills .nav-toggle{display:block}.dsm-skills .grid{grid-template-columns:1fr}.dsm-skills .add-menu{right:auto;left:0}.skill-detail-dialog{padding:24px 20px}.skill-detail-dialog .detail-body{padding:16px}.skill-detail-dialog button{min-height:44px}.skill-detail-dialog .detail-actions{flex-wrap:wrap}.skill-detail-dialog .detail-title h1{font-size:20px}}
}
${controlsCss}
.dsm-form-textarea.skill-editor{min-height:430px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
`;
var skillsActionsCss = `${modalCss}
@layer dsh-skills-master-business {

.dsm-skills .category-tabs{display:flex;gap:7px;align-items:center;overflow:auto;scrollbar-width:none;margin:0 0 22px}

.dsm-skills .category-tabs{padding:0 0 2px}.dsm-skills .category-tabs::-webkit-scrollbar{display:none}.dsm-skills .category-tabs button{white-space:nowrap}.dsm-skills .category-tabs button{border:0;background:transparent}.dsm-skills .category-tabs button.active{background:var(--dsw-alias-interactive-bg-hover)}.dsm-skills .category-tabs button:disabled{color:var(--dsw-alias-label-dimmed)}
.dsm-skills .batch-toggle.active{background:var(--dsw-alias-interactive-bg-hover)}.dsm-skills .batch-bar{display:flex;align-items:center;justify-content:flex-end;gap:8px;margin:0 0 16px}.dsm-skills .batch-bar{padding:10px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}.dsm-skills .batch-bar span{margin-right:auto}.dsm-skills .batch-bar span{color:var(--dsw-alias-label-secondary)}.dsm-skills .batch-check{display:grid;place-items:center;width:24px}.dsm-skills .batch-check{min-height:24px;height:24px;padding:0;border-radius:6px;background:var(--dsw-alias-bg-layer-1)}.dsm-skills .batch-check[aria-checked="true"]{background:var(--dsw-alias-state-success-primary);color:var(--dsw-alias-label-primary-inverted);border-color:var(--dsw-alias-state-success-primary);font-weight:700}
.dsm-skills .refresh{margin-left:auto}.dsm-skills .card.disabled{opacity:.56}.dsm-skills .card.invalid{border-color:var(--dsw-alias-state-warn-primary)}.dsm-skills .diagnostic{display:block;margin-top:10px}.dsm-skills .diagnostic{color:var(--dsw-alias-state-error-primary);font-size:12px;line-height:18px}.dsm-skills .switch[aria-checked="false"]{background:var(--dsw-alias-interactive-bg-hover)}.dsm-skills .switch[aria-checked="false"]::after{margin-left:0}.dsm-skills .switch:disabled{opacity:.38}.dsm-skills .danger,.skill-detail-dialog .danger{color:var(--dsw-alias-state-error-primary)}.skill-detail-dialog .validation-errors{margin:0 0 24px}.skill-detail-dialog .validation-errors{padding:18px;border:1px solid var(--dsw-alias-state-warn-primary);border-radius:12px;background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 10%,var(--dsw-alias-bg-layer-1))}.skill-detail-dialog .validation-errors h3{margin:0 0 8px}.skill-detail-dialog .validation-errors h3{color:var(--dsw-alias-state-error-primary)}.skill-detail-dialog .validation-errors ul{margin:0 0 14px}.skill-detail-dialog .validation-errors ul{padding-left:20px}.skill-detail-dialog .skill-document{margin:20px 0 0;border-top:1px solid var(--dsw-alias-border-l2);white-space:pre-wrap}.skill-detail-dialog .skill-document{padding:16px 0;font:13px/21px ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--dsw-alias-label-primary)}.skill-detail-dialog .editor-label{display:block;margin-bottom:10px}.skill-detail-dialog .editor-label{font-weight:600}.skill-detail-dialog .skill-editor{display:block;width:100%;resize:vertical}.skill-detail-dialog .skill-editor{min-height:430px;padding:18px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:13px/21px ui-monospace,SFMono-Regular,Menlo,monospace}.skill-detail-dialog .editor-actions,.confirm-dialog .confirm-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:16px}.skill-detail-dialog .save{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-inverted)}.confirm-dialog{width:min(480px,calc(100vw - 32px))}.confirm-dialog{padding:24px}.confirm-dialog h2{margin:0 52px 12px 0}.confirm-dialog p{color:var(--dsw-alias-label-tertiary);line-height:1.7}.confirm-dialog button{cursor:pointer}.confirm-dialog button{min-height:40px;padding:8px 16px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}.confirm-dialog .danger.solid{background:var(--dsw-alias-state-error-primary);border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-label-primary-foreground)}
.dsm-skills .card.menu-open{z-index:25}
.confirm-dialog .dependency-impact{margin:18px 0}
.confirm-dialog .dependency-impact{padding:14px 16px;border:1px solid var(--dsw-alias-state-warn-primary);border-radius:10px;background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 10%,var(--dsw-alias-bg-layer-1))}.confirm-dialog .dependency-impact ul{margin:8px 0 0}.confirm-dialog .dependency-impact ul{padding-left:20px}.confirm-dialog .dependency-clear{padding:12px 14px;border-radius:9px;background:var(--dsw-alias-bg-layer-2)}.confirm-dialog .danger.solid:disabled{cursor:not-allowed}.confirm-dialog .danger.solid:disabled{background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 10%,var(--dsw-alias-bg-layer-1));border-color:var(--dsw-alias-state-error-secondary);color:var(--dsw-alias-label-tertiary)}
.skill-detail-dialog .resource-section{margin:20px 0;border-top:1px solid var(--dsw-alias-border-l2)}
.skill-detail-dialog .resource-section{padding:16px 0;border:0;border-radius:0}.skill-detail-dialog .resource-section h3{margin:0 0 12px}.skill-detail-dialog .resource-list{display:grid;grid-template-columns:minmax(0,1fr);gap:4px}.skill-detail-dialog .resource-list button{text-align:left;white-space:normal;overflow-wrap:anywhere;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}.skill-detail-dialog .resource-list button{min-height:32px;padding:6px 10px;border:0;background:transparent;font-size:12px}.skill-detail-dialog .new-resource{display:flex;gap:8px;margin-top:14px}.skill-detail-dialog .new-resource :is(input,.dsm-form-input){flex:1;min-width:0}.skill-detail-dialog .new-resource input{padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}.skill-detail-dialog .resource-editor-head{display:flex;align-items:center;gap:14px;margin-bottom:20px}.skill-detail-dialog .resource-editor-head strong{overflow-wrap:anywhere}.trash-dialog{width:min(600px,calc(100vw - 32px))}.trash-dialog{padding:24px}.trash-dialog h2{margin:0 52px 20px 0}.trash-dialog .trash-list{display:grid;gap:10px}.trash-dialog .trash-list>div{display:flex;align-items:center;justify-content:space-between;gap:18px}.trash-dialog .trash-list>div{padding:14px 16px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-2)}.trash-dialog small{display:block;margin-top:4px}.trash-dialog small{color:var(--dsw-alias-label-tertiary)}.trash-dialog button{cursor:pointer}.trash-dialog button{min-height:36px;padding:6px 14px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
/* Import dialog: one bounded content scroller, compact neutral visual hierarchy. */
.dsm-dialog.import-skill-dialog{width:min(600px,calc(100vw - 32px));display:flex;flex-direction:column;overflow:hidden}
/* Import dialog: one bounded content scroller, compact neutral visual hierarchy. */
.dsm-dialog.import-skill-dialog{max-height:calc(100dvh - 48px);height:auto;padding:0;border-radius:16px;background:var(--dsw-alias-bg-layer-1);font:14px/22px "PingFang SC","Microsoft YaHei",sans-serif}
.import-skill-dialog *{box-sizing:border-box}
.dsm-dialog.import-skill-dialog:focus-visible{outline:none}
.import-skill-dialog .dsm-dialog-close{top:16px;right:16px;width:32px;flex:none}
.import-skill-dialog .dsm-dialog-close{height:32px;min-height:0;padding:0;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-tertiary)}
.import-skill-dialog .dsm-dialog-close span{font-size:25px;line-height:1}
.import-skill-dialog .dsm-dialog-close:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.import-skill-dialog .import-header{flex:none}
.import-skill-dialog .import-header{padding:24px 64px 20px 24px}
.import-skill-dialog .import-header h2{margin:0 0 4px}
.import-skill-dialog .import-header h2{font-size:20px;line-height:28px;font-weight:600}
.import-skill-dialog .import-header p{margin:0}
.import-skill-dialog .import-header p{font-size:13px;color:var(--dsw-alias-label-tertiary)}
.import-skill-dialog .import-content{overflow:auto;scrollbar-width:thin;scrollbar-color:var(--dsw-alias-border-l2) transparent}
.import-skill-dialog .import-content{min-height:0;padding:0 24px 24px}
.import-skill-dialog button,.import-skill-dialog select{font:inherit;color:inherit}
.import-skill-dialog .import-dropzone{width:100%;display:grid;place-content:center;justify-items:center;gap:8px;cursor:pointer}
.import-skill-dialog .import-dropzone{min-height:170px;border:1px dashed var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}
.import-skill-dialog .import-dropzone:hover,.import-skill-dialog .import-dropzone.dragging{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}
.import-skill-dialog .import-dropzone:disabled{cursor:wait}
.import-skill-dialog .import-dropzone:disabled{opacity:.7}
.import-skill-dialog .upload-glyph{font-size:26px;color:var(--dsw-alias-label-tertiary)}
.import-skill-dialog .import-dropzone strong{font-size:15px;font-weight:500}
.import-skill-dialog .import-dropzone small{color:var(--dsw-alias-label-tertiary);font-size:12px}
.import-skill-dialog .folder-picker{display:block;margin:12px auto 0;cursor:pointer}
.import-skill-dialog .folder-picker{min-height:36px;padding:6px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:transparent}
.import-skill-dialog .visually-hidden{position:absolute;width:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}
.import-skill-dialog .visually-hidden{height:1px;padding:0;border:0}
.import-skill-dialog .import-requirements{margin-top:24px}
.import-skill-dialog .import-requirements h3{margin:0 0 8px}
.import-skill-dialog .import-requirements h3{font-size:14px;font-weight:500}
.import-skill-dialog .import-requirements ul{margin:0}
.import-skill-dialog .import-requirements ul{padding-left:20px;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:22px}
.import-skill-dialog .import-review-title{display:flex;gap:12px;align-items:flex-start}
.import-skill-dialog .import-review-title{padding:16px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-2)}
.import-skill-dialog .skill-mark{width:40px;display:grid;place-items:center;text-transform:uppercase;flex:none}
.import-skill-dialog .skill-mark{height:40px;border-radius:10px;background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);font-size:18px;font-weight:500}
.import-skill-dialog .import-review-title>div{min-width:0}
.import-skill-dialog .import-review-title h3{margin:0 0 6px;overflow-wrap:anywhere}
.import-skill-dialog .import-review-title h3{font-size:15px;line-height:22px;font-weight:600}
.import-skill-dialog .import-review-title p{margin:0;overflow-wrap:anywhere}
.import-skill-dialog .import-review-title p{font-size:13px;line-height:21px;color:var(--dsw-alias-label-tertiary)}
.import-skill-dialog dl{display:grid;grid-template-columns:80px minmax(0,1fr);gap:12px 16px;margin:20px 0}
.import-skill-dialog dt{color:var(--dsw-alias-label-tertiary);font-size:13px}
.import-skill-dialog dd{margin:0;min-width:0;overflow-wrap:anywhere}
.import-skill-dialog dd{font-size:13px}
.import-skill-dialog select{width:100%}
.import-skill-dialog select{min-height:36px;padding:6px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-layer-2);font-size:13px}
.import-skill-dialog details{border-top:1px solid var(--dsw-alias-border-l2)}
.import-skill-dialog details{padding-top:12px}
.import-skill-dialog summary{cursor:pointer}
.import-skill-dialog summary{font-size:13px;color:var(--dsw-alias-label-secondary)}
.import-skill-dialog .import-file-list{margin:12px 0 0;overflow-wrap:anywhere}
.import-skill-dialog .import-file-list{padding-left:20px;font:12px/22px ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--dsw-alias-label-tertiary)}
.import-skill-dialog .import-note{margin:16px 0 0}
.import-skill-dialog .import-note{font-size:12px;line-height:20px;color:var(--dsw-alias-label-tertiary)}
.import-skill-dialog .import-footer{flex:none;border-top:1px solid var(--dsw-alias-border-l2)}
.import-skill-dialog .import-footer{padding:16px 24px;background:var(--dsw-alias-bg-layer-1)}
.import-skill-dialog .import-actions{display:flex;justify-content:flex-end;gap:8px}
.import-skill-dialog .import-actions button{width:auto;min-width:96px;flex:0 0 auto;white-space:nowrap;cursor:pointer}
.import-skill-dialog .import-actions button{height:36px;min-height:36px;padding:0 14px;border:1px solid var(--dsw-alias-border-l2);border-radius:6px;background:var(--dsw-alias-bg-layer-2);font-size:13px;line-height:20px;font-weight:500}
.import-skill-dialog .import-actions .install{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-inverted);border-color:var(--dsw-alias-border-l2)}
.import-skill-dialog button:disabled{cursor:default}
.import-skill-dialog button:disabled{opacity:.5}
.import-skill-dialog button:focus-visible,.import-skill-dialog select:focus-visible,.import-skill-dialog summary:focus-visible{outline-offset:2px}
.import-skill-dialog button:focus-visible,.import-skill-dialog select:focus-visible,.import-skill-dialog summary:focus-visible{outline:2px solid var(--dsw-alias-brand-primary)}
.import-skill-dialog .error{margin:16px 0 0}
.import-skill-dialog .error{color:var(--dsw-alias-state-error-primary);font-size:13px}
@media(max-width:640px){.dsm-dialog.import-skill-dialog{width:calc(100vw - 24px)}.dsm-dialog.import-skill-dialog{max-height:calc(100dvh - 24px);height:auto;border:1px solid var(--dsw-alias-border-l2);border-radius:12px}.import-skill-dialog .import-header{padding:20px 64px 16px 20px}.import-skill-dialog .import-content{padding:0 20px 20px}.import-skill-dialog .import-footer{padding:16px 20px}.import-skill-dialog .dsm-dialog-close{width:44px;top:8px;right:8px}.import-skill-dialog .dsm-dialog-close{height:44px}.import-skill-dialog dl{grid-template-columns:1fr;gap:4px}.import-skill-dialog dd{margin-bottom:8px}.import-skill-dialog .import-actions button{height:44px;min-height:44px}}



}
${controlsCss}
`;
var skillsMarketCss = `${modalCss}
@layer dsh-skills-master-business {

.dsm-skills .section-head:has(+ .skill-source-tabs){margin-bottom:0;border-bottom:0}
.dsm-skills .skill-source-tabs{display:flex;gap:24px;margin:0 0 20px;border-bottom:1px solid var(--dsw-alias-border-l2)}
.dsm-skills .skill-source-tabs button{padding:10px 2px;border:0;border-bottom:2px solid transparent;border-radius:0;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;font:inherit}
.dsm-skills .skill-source-tabs button:hover:not(:disabled){background:transparent;color:var(--dsw-alias-label-primary)}
.dsm-skills .skill-source-tabs button.active{border-bottom-color:var(--dsw-alias-brand-primary);background:transparent;color:var(--dsw-alias-label-primary);font-weight:600}
.dsm-skills .skillhub-market .card-open{text-decoration:none;color:inherit}
.dsm-skills .skillhub-icon{position:relative;display:grid;place-items:center;width:46px;height:46px;flex:none;overflow:hidden;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-brand-text);font-weight:700;font-size:19px}
.dsm-skills .skillhub-icon img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:var(--dsw-alias-bg-layer-2)}
.dsm-skills .skillhub-icon img[hidden]{display:none}
.dsm-skills .skillhub-meta{display:block;margin-top:8px;color:var(--dsw-alias-label-tertiary);font-size:11px}
.dsm-skills .skillhub-market .install.is-status{width:auto;min-width:58px;padding:0 8px;border-radius:8px;font-size:12px}
.dsm-skills .skillhub-market .install.is-installed:disabled{color:var(--dsw-alias-state-success-primary);opacity:1}
.dsm-skills .skillhub-success{display:flex;align-items:center;gap:12px;margin:0 0 18px;padding:10px 14px;border:1px solid var(--dsw-alias-state-success-primary);border-radius:10px;background:var(--dsw-alias-bg-layer-2);font-size:13px}
.dsm-skills .skillhub-success span{flex:1}
.dsm-skills .skillhub-success .skillhub-dismiss{border:0;background:transparent;font-size:18px}
.dsm-skills .skillhub-pagination{display:flex;justify-content:center;align-items:center;gap:8px;flex-wrap:wrap;margin:28px 0 12px}
.dsm-skills .skillhub-pagination button{min-width:36px;background:transparent}
.dsm-skills .skillhub-pagination button.active{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-text);font-weight:600}

.dsm-skills .skill-icon{width:46px;flex:none;object-fit:cover}




.dsm-skills .skill-icon{height:46px;border-radius:12px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2)}
.dsm-skills .skill-icon.large,.skill-detail-dialog .skill-icon.large{width:48px}
.dsm-skills .skill-icon.large,.skill-detail-dialog .skill-icon.large{height:48px;border-radius:12px}
.dsm-skills .skill-mark.large{width:48px}
.dsm-skills .skill-mark.large{height:48px;border-radius:12px;font-size:44px}
.dsm-skills .card-title{display:flex;flex-direction:column;gap:3px;min-width:0}
.dsm-skills .card-title strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsm-skills .card-title strong{font-weight:600;font-size:17px}
.dsm-skills .card-title small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsm-skills .card-title small{color:var(--dsw-alias-label-tertiary);font-size:12px}
.dsm-skills .card-title small.slug{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.dsm-skills .card-title small.slug{font-size:11px;color:var(--dsw-alias-label-dimmed)}
.dsm-skills .install{display:grid;place-items:center;width:40px}
.dsm-skills .install{min-height:40px;height:40px;padding:0;border-radius:50%;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);font-size:20px;line-height:1}
.dsm-skills .install:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);border-color:var(--dsw-alias-border-l2)}
.dsm-skills .install:disabled{opacity:.45}
.dsm-skills .market-section{margin:0 0 30px}
.dsm-skills .market-head{display:flex;align-items:baseline;gap:10px;margin:0 0 14px;flex-wrap:wrap}
.dsm-skills .market-head h2{display:flex;align-items:center;gap:8px;margin:0}
.dsm-skills .market-head h2{font-size:17px;font-weight:600}
.dsm-skills .market-count{display:inline-grid;place-items:center;min-width:26px}
.dsm-skills .market-count{height:22px;padding:0 8px;border-radius:999px;background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500}
.dsm-skills .market-head .muted{font-size:12px}
.dsm-skills .market-card{border-style:dashed}
.dsm-skills .market-card:hover{border-style:solid}
.dsm-skills .catalog-note{margin:0 0 16px}
.dsm-skills .catalog-note{padding:10px 14px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:20px}
.dsm-skills .notice{color:var(--dsw-alias-state-success-primary)}
.dsm-skills .empty .muted{display:block;margin-top:6px}
.dsm-skills .empty .muted{font-size:12px}
/* \u6211\u5B89\u88C5\u7684\u9875\u9762\u89C6\u56FE\uFF1A\u4ECE\u5E02\u573A\u5934\u90E8\u300C\u6211\u5B89\u88C5\u7684\u300D\u5165\u53E3\u8FDB\u5165\uFF0C\u8FD4\u56DE\u94FE\u63A5\u56DE\u5230\u5E02\u573A\u3002 */
.dsm-skills .installed-back-row{display:flex;align-items:center;gap:6px;margin:0 0 10px}
.dsm-skills .back-to-market{display:inline-flex;align-items:center;gap:5px;margin-left:-10px}
.dsm-skills .back-to-market{border:0;background:transparent;color:var(--dsw-alias-label-secondary);padding:6px 10px}
.dsm-skills .back-to-market:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2)}
.dsm-skills .back-to-market svg{width:18px}
.dsm-skills .back-to-market svg{height:18px}
.dsm-skills .installed-head{flex-wrap:wrap;row-gap:12px}
.dsm-skills .installed-head h1{display:flex;align-items:center;gap:10px}
.dsm-skills .installed-tools{display:flex;align-items:center;justify-content:flex-end;gap:8px;flex-wrap:wrap;min-width:0}
.dsm-skills .installed-tools .search{margin-left:0;width:250px;min-width:150px}
@media(max-width:900px){.dsm-skills .installed-tools{width:100%;justify-content:flex-start}.dsm-skills .installed-tools .search{width:100%}}
.skill-detail-dialog .detail-title .slug,.catalog-dialog .detail-title .slug{margin:0 0 12px}
.skill-detail-dialog .detail-title .slug,.catalog-dialog .detail-title .slug{font:13px/20px ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--dsw-alias-label-tertiary)}
/* \u6280\u80FD\u5F39\u6846\u6CBF\u7528\u516C\u5171 Modal\uFF08.dsm-dialog\uFF09\u5916\u58F3\uFF1B\u7528\u66F4\u9AD8\u7279\u5F02\u6027\u53EA\u6536\u7A84\u6280\u80FD\u76F8\u5173\u5F39\u6846\u5E76\u7D27\u51D1\u5316\u5185\u90E8\uFF0C\u4E0D\u6539\u516C\u5171\u9ED8\u8BA4\u503C\u3002 */
.dsm-dialog.skill-detail-dialog{width:min(820px,calc(100vw - 40px))}
.dsm-dialog.catalog-dialog{width:min(720px,calc(100vw - 40px))}
.dsm-dialog.confirm-dialog{width:min(480px,calc(100vw - 40px))}
.dsm-dialog.trash-dialog{width:min(560px,calc(100vw - 40px))}

.skill-detail-dialog .detail-summary{margin:20px 0 0}

.skill-detail-dialog .detail-summary{color:var(--dsw-alias-label-secondary);font-size:14px;line-height:23px}
.catalog-dialog .install.solid{display:inline-flex;align-items:center;justify-content:center;gap:6px;width:auto}
.catalog-dialog .install.solid{height:auto;min-height:36px;padding:7px 16px;border-radius:8px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-inverted);font-weight:600;font-size:14px;line-height:1}
.catalog-dialog .install.solid:disabled{opacity:.5}
.catalog-dialog .example-list{margin:0}
.catalog-dialog .example-list{padding-left:22px;color:var(--dsw-alias-label-secondary);line-height:1.9}
.catalog-dialog .validation-errors .muted{margin:0}
.catalog-dialog .validation-errors .muted{color:var(--dsw-alias-label-tertiary)}
@media(max-width:1400px){.dsm-skills .market-card .muted{font-size:12px}}




}
${controlsCss}
`;
var standaloneCss = `
.dsm-skills .readonly-badge,.skill-detail-dialog .readonly-badge{display:inline-flex;align-items:center;flex:none;white-space:nowrap;padding:4px 8px;min-height:28px;border:1px solid var(--dsw-alias-border-l2);border-radius:7px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary,var(--dsw-alias-label-primary));font-family:inherit;font-size:12px;line-height:18px}
.dsm-skills button.readonly-badge{cursor:pointer}
.dsm-skills button.readonly-badge:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.skill-detail-dialog .readonly-badge[hidden]{display:none}
.skill-detail-dialog .readonly-note{padding:12px 16px;border-radius:8px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);line-height:1.7}

.dsm-dialog.market-install-dialog{display:flex;flex-direction:column;overflow:hidden;width:min(720px,calc(100vw - 48px));padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC",sans-serif}
.market-install-dialog .market-install-title{flex:none;margin:0;padding:24px 64px 16px 24px;font-family:inherit;font-size:22px;font-weight:600;line-height:1.4;overflow-wrap:anywhere}
.market-install-dialog .market-install-body{min-height:0;overflow:auto;padding:0 24px 24px;overflow-wrap:anywhere;line-height:1.75}
.market-install-dialog .market-install-body p{margin:0 0 16px}
.market-install-dialog .market-install-description{color:var(--dsw-alias-label-secondary,var(--dsw-alias-label-primary))}
.market-install-dialog .market-install-body a{display:inline-block;margin:0 0 16px;color:var(--dsw-alias-brand-text);text-underline-offset:3px}
.market-install-dialog details{padding:12px 16px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-layer-2)}
.market-install-dialog summary{cursor:pointer;font-weight:500}
.market-install-dialog ul{margin:12px 0 0;padding-left:20px;font:12px/1.8 ui-monospace,SFMono-Regular,monospace}
.market-install-dialog .market-install-actions{flex:none;display:flex;justify-content:flex-end;gap:12px;padding:16px 24px;border-top:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1)}
.market-install-dialog .market-install-actions button{min-height:40px;min-width:88px}
@media(max-width:640px){.dsm-dialog.market-install-dialog{width:calc(100vw - 24px)}.market-install-dialog .market-install-title{padding:20px 60px 16px 20px;font-size:20px}.market-install-dialog .market-install-body{padding:0 20px 20px}.market-install-dialog .market-install-actions{padding:16px 20px}.market-install-dialog .market-install-actions button{min-height:44px}}

@media(max-width:560px){.dsm-skills .cap-header .search{order:2;flex:1 0 100%;width:100%;max-width:none}}
@media(prefers-reduced-motion:reduce){.dsm-dialog{animation:none}}
`;

// src/client/SkillsPanel.tsx
var ALL = "\u5168\u90E8";
function icon(kind) {
  return /* @__PURE__ */ React8.createElement(Icon, { name: kind });
}
function messageOf2(cause) {
  return cause instanceof Error ? cause.message : "\u6280\u80FD\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002";
}
function toneOf(name2) {
  let hue = 0;
  for (const char of name2) hue = (hue * 31 + (char.codePointAt(0) ?? 0)) % 360;
  return { background: `hsl(${hue} 36% 25%)`, color: `hsl(${hue} 84% 78%)` };
}
function SkillMark({ name: name2, title, iconUrl, large }) {
  const label = (title ?? name2).trim().charAt(0).toUpperCase() || name2.charAt(0).toUpperCase();
  if (iconUrl) return /* @__PURE__ */ React8.createElement("img", { className: `skill-icon${large ? " large" : ""}`, src: iconUrl, alt: "", loading: "lazy", decoding: "async" });
  return /* @__PURE__ */ React8.createElement("span", { className: `skill-mark${large ? " large" : ""}`, "aria-hidden": true, style: toneOf(name2) }, label);
}
function SkillsPanel({ toggleNavigation, management, startSkillTask, startSkillTrial, openCapability, hasCapability }) {
  const [skills, setSkills] = (0, import_react5.useState)([]);
  const [catalog, setCatalog] = (0, import_react5.useState)();
  const [category, setCategory] = (0, import_react5.useState)(ALL);
  const [query, setQuery] = (0, import_react5.useState)("");
  const [busy, setBusy] = (0, import_react5.useState)(true);
  const [error, setError] = (0, import_react5.useState)("");
  const [notice, setNotice] = (0, import_react5.useState)("");
  const [installBusy, setInstallBusy] = (0, import_react5.useState)("");
  const [preview, setPreview] = (0, import_react5.useState)();
  const [selected, setSelected] = (0, import_react5.useState)();
  const [editing, setEditing] = (0, import_react5.useState)(false);
  const [skillDocument, setSkillDocument] = (0, import_react5.useState)("");
  const [resource, setResource] = (0, import_react5.useState)();
  const [resourceDocument, setResourceDocument] = (0, import_react5.useState)("");
  const [newResourcePath, setNewResourcePath] = (0, import_react5.useState)("");
  const [trash, setTrash] = (0, import_react5.useState)([]);
  const [trashOpen, setTrashOpen] = (0, import_react5.useState)(false);
  const [confirmUninstall, setConfirmUninstall] = (0, import_react5.useState)();
  const [creating, setCreating] = (0, import_react5.useState)(false);
  const [importOpen, setImportOpen] = (0, import_react5.useState)(false);
  const [addMenuOpen, setAddMenuOpen] = (0, import_react5.useState)(false);
  const [actionMenu, setActionMenu] = (0, import_react5.useState)();
  const [batchMode, setBatchMode] = (0, import_react5.useState)(false);
  const [selectedNames, setSelectedNames] = (0, import_react5.useState)([]);
  const [confirmBatchUninstall, setConfirmBatchUninstall] = (0, import_react5.useState)(false);
  const [view, setView] = (0, import_react5.useState)("market");
  const [refreshToken, setRefreshToken] = (0, import_react5.useState)(0);
  const [marketSource, setMarketSource] = (0, import_react5.useState)("local");
  const [installedQuery, setInstalledQuery] = (0, import_react5.useState)("");
  const search = (0, import_react5.useRef)(null);
  const addMenu = (0, import_react5.useRef)(null);
  const panel = (0, import_react5.useRef)(null);
  const installedEntry = (0, import_react5.useRef)(null);
  const backLink = (0, import_react5.useRef)(null);
  const firstView = (0, import_react5.useRef)(true);
  const refresh = (0, import_react5.useCallback)(async () => {
    setBusy(true);
    setError("");
    try {
      const [rows, summary] = await Promise.all([
        management.list(),
        management.catalog().catch((cause) => {
          console.error("[dsh-skills-master:skills:catalog]", cause);
          return void 0;
        })
      ]);
      setSkills(rows);
      if (summary) setCatalog(summary);
    } catch (cause) {
      console.error("[dsh-skills-master:skills:list]", cause);
      setError(messageOf2(cause));
    } finally {
      setBusy(false);
    }
  }, [management]);
  (0, import_react5.useEffect)(() => {
    void refresh();
  }, [refresh]);
  (0, import_react5.useEffect)(() => {
    const revalidate = () => {
      if (document.visibilityState === "visible") void refresh();
    };
    window.addEventListener("focus", revalidate);
    document.addEventListener("visibilitychange", revalidate);
    return () => {
      window.removeEventListener("focus", revalidate);
      document.removeEventListener("visibilitychange", revalidate);
    };
  }, [refresh]);
  (0, import_react5.useEffect)(() => {
    if (!addMenuOpen) return;
    const outside = (event) => {
      if (!addMenu.current?.contains(event.target)) setAddMenuOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [addMenuOpen]);
  (0, import_react5.useEffect)(() => {
    if (!actionMenu) return;
    const outside = (event) => {
      if (!(event.target instanceof Element) || !event.target.closest(".card-actions")) setActionMenu(void 0);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [actionMenu]);
  (0, import_react5.useEffect)(() => {
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    panel.current?.scrollTo({ top: 0 });
    (view === "installed" ? backLink : installedEntry).current?.focus();
  }, [view]);
  const install = async (entry) => {
    setError("");
    setNotice("");
    setInstallBusy(entry.name);
    try {
      await management.installFromCatalog(entry.name);
      setPreview(void 0);
      setNotice(`\u5DF2\u5B89\u88C5\u300C${entry.title}\u300D`);
      await refresh();
    } catch (cause) {
      setError(messageOf2(cause));
    } finally {
      setInstallBusy("");
    }
  };
  const openDetail = async (name2) => {
    setActionMenu(void 0);
    setError("");
    try {
      const detail = await management.detail(name2);
      setSelected(detail);
      setSkillDocument(detail.document ?? "");
      setEditing(false);
      setResource(void 0);
    } catch (cause) {
      setError(messageOf2(cause));
    }
  };
  const beginSkillTask = async (kind) => {
    setCreating(true);
    setAddMenuOpen(false);
    setError("");
    try {
      await startSkillTask(kind);
    } catch (cause) {
      setError(messageOf2(cause));
      setCreating(false);
    }
  };
  const trial = async (name2) => {
    setCreating(true);
    try {
      await startSkillTrial(name2);
    } catch (cause) {
      setError(messageOf2(cause));
      setCreating(false);
    }
  };
  const setEnabled = async (skill, enabled) => {
    setActionMenu(void 0);
    setError("");
    try {
      await management.setEnabled(skill.name, enabled);
      await refresh();
      if (selected?.name === skill.name) await openDetail(skill.name);
    } catch (cause) {
      setError(messageOf2(cause));
    }
  };
  const openDirectory = async (skill) => {
    setActionMenu(void 0);
    setError("");
    try {
      const detail = selected?.name === skill.name ? selected : await management.detail(skill.name);
      if (!detail.directoryPath) throw new Error("\u8BE5\u6280\u80FD\u6765\u6E90\u4E0D\u63D0\u4F9B\u53EF\u6253\u5F00\u7684\u672C\u5730\u76EE\u5F55\u3002");
      await management.openDirectory(detail.directoryPath);
    } catch (cause) {
      setError(messageOf2(cause));
    }
  };
  const save = async () => {
    if (!selected?.revision) return;
    setBusy(true);
    setError("");
    try {
      const next = await management.update({ name: selected.name, document: skillDocument, expectedRevision: selected.revision });
      setSelected(next);
      setSkillDocument(next.document ?? "");
      setEditing(false);
      await refresh();
    } catch (cause) {
      setError(messageOf2(cause));
      setBusy(false);
    }
  };
  const uninstall = async () => {
    if (!confirmUninstall) return;
    setBusy(true);
    setError("");
    try {
      await management.uninstall(confirmUninstall.skill.name, confirmUninstall.impact.revision);
      if (selected?.name === confirmUninstall.skill.name) setSelected(void 0);
      setConfirmUninstall(void 0);
      await refresh();
    } catch (cause) {
      setError(messageOf2(cause));
      setBusy(false);
      setConfirmUninstall(void 0);
    }
  };
  const prepareUninstall = async (skill) => {
    setActionMenu(void 0);
    setError("");
    try {
      setConfirmUninstall({ skill, impact: await management.dependencyImpact(skill.name) });
    } catch (cause) {
      setError(messageOf2(cause));
    }
  };
  const openTrash = async () => {
    setError("");
    try {
      setTrash(await management.listTrash());
      setTrashOpen(true);
    } catch (cause) {
      setError(messageOf2(cause));
    }
  };
  const restore = async (entry) => {
    setBusy(true);
    setError("");
    try {
      await management.restore(entry.id);
      setTrash(await management.listTrash());
      await refresh();
    } catch (cause) {
      setError(messageOf2(cause));
      setBusy(false);
    }
  };
  const openResource = async (path2) => {
    if (!selected) return;
    setError("");
    try {
      const next = await management.resource(selected.name, path2);
      setResource(next);
      setResourceDocument(next.document);
    } catch (cause) {
      setError(messageOf2(cause));
    }
  };
  const beginResource = () => {
    const path2 = newResourcePath.trim();
    if (!path2) return;
    setResource({ path: path2, document: "", revision: "", isNew: true });
    setResourceDocument("");
    setNewResourcePath("");
  };
  const saveResource = async () => {
    if (!selected || !resource) return;
    setBusy(true);
    setError("");
    try {
      const next = await management.writeResource({ name: selected.name, path: resource.path, document: resourceDocument, expectedRevision: resource.isNew ? void 0 : resource.revision });
      const detail = await management.detail(selected.name);
      setSelected(detail);
      setResource(next);
      setResourceDocument(next.document);
      await refresh();
    } catch (cause) {
      setError(messageOf2(cause));
      setBusy(false);
    }
  };
  const toggleBatchSelection = (name2) => setSelectedNames((current) => current.includes(name2) ? current.filter((item) => item !== name2) : [...current, name2]);
  const toggleBatch = () => {
    setBatchMode((value) => !value);
    setSelectedNames([]);
  };
  const openInstalled = () => {
    setActionMenu(void 0);
    setError("");
    setView("installed");
  };
  const returnToMarket = () => {
    setActionMenu(void 0);
    setView("market");
  };
  const runBatch = async (action) => {
    if (!selectedNames.length) return;
    setBusy(true);
    setError("");
    try {
      const result = await management.batch(selectedNames, action);
      const failed = result.results.filter((item) => !item.ok);
      await refresh();
      setSelectedNames(failed.map((item) => item.name));
      if (failed.length) setError(`${result.results.length - failed.length} \u9879\u6210\u529F\uFF0C${failed.length} \u9879\u5931\u8D25\uFF1A${failed.map((item) => `${item.name}\uFF08${item.error}\uFF09`).join("\uFF1B")}`);
      else {
        setBatchMode(false);
        setSelectedNames([]);
      }
      setConfirmBatchUninstall(false);
    } catch (cause) {
      setError(messageOf2(cause));
      setBusy(false);
      setConfirmBatchUninstall(false);
    }
  };
  const entries = catalog?.entries ?? [];
  const normalized = query.trim().toLowerCase();
  const matches = (text) => text.toLowerCase().includes(normalized);
  const matchingEntries = entries.filter((entry) => !entry.installed && (matches(entry.name) || matches(entry.title) || matches(entry.description)));
  const matchingSkills = skills.filter((skill) => matches(`${skill.name} ${skill.title ?? ""} ${skill.localizedDescription ?? skill.description} ${skill.whenToUse ?? ""}`));
  const categories = [...new Set([...matchingEntries, ...matchingSkills].flatMap((item) => item.categories ?? []))].sort((a, b) => a.localeCompare(b, "zh-CN"));
  const selectedCategory = categories.includes(category) ? category : ALL;
  const inCategory = (values) => selectedCategory === ALL || Boolean(values?.includes(selectedCategory));
  const available = matchingEntries.filter((entry) => inCategory(entry.categories));
  const filtered = matchingSkills.filter((skill) => inCategory(skill.categories));
  const installedFiltered = skills.filter((skill) => `${skill.name} ${skill.title ?? ""} ${skill.localizedDescription ?? skill.description} ${skill.whenToUse ?? ""}`.toLowerCase().includes(installedQuery.trim().toLowerCase()));
  const capabilityTabs = [["skills", "\u6280\u80FD\u5E02\u573A"]];
  const capabilityKey = { experts: "dsh-skills-master-experts", skills: "dsh-skills-master-skills", connectors: "dsh-skills-master-connectors" };
  const countsLine = /* @__PURE__ */ React8.createElement("div", { role: "status", "aria-live": "polite", className: error ? "error counts" : notice ? "notice counts" : "muted counts" }, busy ? "\u6B63\u5728\u8BFB\u53D6\u2026" : error || notice || `\u5171 ${skills.length} \u4E2A\u5DF2\u5B89\u88C5\u6280\u80FD \xB7 \u5F53\u524D\u663E\u793A ${view === "installed" ? installedFiltered.length : filtered.length} \u4E2A`);
  const batchBar = /* @__PURE__ */ React8.createElement("div", { className: "batch-bar", role: "toolbar", "aria-label": "\u6279\u91CF\u7BA1\u7406\u6280\u80FD" }, /* @__PURE__ */ React8.createElement("span", null, "\u5DF2\u9009\u62E9 ", selectedNames.length, " \u9879"), /* @__PURE__ */ React8.createElement(Button, { disabled: !selectedNames.length || busy, onClick: () => void runBatch("enable") }, "\u542F\u7528"), /* @__PURE__ */ React8.createElement(Button, { disabled: !selectedNames.length || busy, onClick: () => void runBatch("disable") }, "\u505C\u7528"), /* @__PURE__ */ React8.createElement(Button, { tone: "danger", className: "danger", disabled: !selectedNames.length || busy, onClick: () => setConfirmBatchUninstall(true) }, "\u5378\u8F7D"));
  const renderSkillCard = (skill) => /* @__PURE__ */ React8.createElement("article", { className: `card ${skill.state === "disabled" ? "disabled" : skill.state === "invalid" ? "invalid" : ""} ${actionMenu === skill.name ? "menu-open" : ""}`, key: skill.name }, /* @__PURE__ */ React8.createElement("div", { className: "card-top" }, batchMode && skill.manageable ? /* @__PURE__ */ React8.createElement("button", { className: "batch-check", role: "checkbox", "aria-checked": selectedNames.includes(skill.name), "aria-label": `\u9009\u62E9\u6280\u80FD ${skill.name}`, onClick: () => toggleBatchSelection(skill.name) }, selectedNames.includes(skill.name) ? "\u2713" : "") : null, /* @__PURE__ */ React8.createElement("button", { className: "card-open", "aria-label": `\u67E5\u770B\u6280\u80FD ${skill.name}`, onClick: () => batchMode && skill.manageable ? toggleBatchSelection(skill.name) : void openDetail(skill.name) }, /* @__PURE__ */ React8.createElement(SkillMark, { name: skill.name, title: skill.title, iconUrl: skill.iconUrl }), /* @__PURE__ */ React8.createElement("span", { className: "card-title" }, /* @__PURE__ */ React8.createElement("strong", { title: skill.name }, skill.title ?? skill.name), skill.title && skill.title !== skill.name ? /* @__PURE__ */ React8.createElement("small", { className: "slug" }, skill.name) : null)), !batchMode && skill.manageable && /* @__PURE__ */ React8.createElement("div", { className: "card-actions" }, /* @__PURE__ */ React8.createElement(Button, { variant: "ghost", size: "sm", className: "more-button", "aria-label": `\u7BA1\u7406\u6280\u80FD ${skill.name}`, "aria-haspopup": "menu", "aria-expanded": actionMenu === skill.name, onClick: () => setActionMenu((current) => current === skill.name ? void 0 : skill.name) }, "\u2022\u2022\u2022"), actionMenu === skill.name && /* @__PURE__ */ React8.createElement("div", { className: "card-menu", role: "menu" }, /* @__PURE__ */ React8.createElement("button", { role: "menuitem", disabled: skill.state !== "enabled", onClick: () => void trial(skill.name) }, "\u53BB\u8BD5\u8BD5"), /* @__PURE__ */ React8.createElement("button", { role: "menuitem", onClick: () => void openDetail(skill.name) }, "\u7F16\u8F91"), /* @__PURE__ */ React8.createElement("button", { role: "menuitem", onClick: () => void openDirectory(skill) }, "\u6253\u5F00\u6587\u4EF6\u5939"), /* @__PURE__ */ React8.createElement("button", { className: "danger", role: "menuitem", onClick: () => void prepareUninstall(skill) }, "\u5378\u8F7D"))), !skill.manageable ? /* @__PURE__ */ React8.createElement("button", { className: "readonly-badge", "aria-label": `\u67E5\u770B\u6280\u80FD ${skill.name} \u7684\u53EA\u8BFB\u8BF4\u660E`, title: "\u7531\u5BBF\u4E3B\u6216\u6240\u5C5E\u63D2\u4EF6\u7BA1\u7406\uFF0C\u70B9\u51FB\u67E5\u770B\u8BF4\u660E", onClick: () => void openDetail(skill.name) }, "\u5185\u7F6E \xB7 \u53EA\u8BFB") : !batchMode && /* @__PURE__ */ React8.createElement("button", { className: "switch", role: "switch", disabled: skill.state === "invalid", "aria-checked": skill.state === "enabled", "aria-label": `${skill.state === "enabled" ? "\u505C\u7528" : "\u542F\u7528"}\u6280\u80FD ${skill.name}`, onClick: () => void setEnabled(skill, skill.state !== "enabled") })), /* @__PURE__ */ React8.createElement("p", { className: "muted" }, skill.localizedDescription ?? skill.description), skill.state === "invalid" && /* @__PURE__ */ React8.createElement("small", { className: "diagnostic" }, "\u9700\u8981\u4FEE\u590D \xB7 ", skill.diagnostics?.[0]?.message));
  return /* @__PURE__ */ React8.createElement("section", { ref: panel, className: "dsm-skills", "data-testid": "dsh-skills-master-skills" }, /* @__PURE__ */ React8.createElement("style", null, skillsCss + skillsActionsCss + skillsMarketCss + standaloneCss), view === "installed" ? /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("div", { className: "installed-back-row" }, /* @__PURE__ */ React8.createElement("button", { className: "nav-toggle", onClick: toggleNavigation, "aria-label": "\u5207\u6362\u5BFC\u822A" }, "\u5BFC\u822A"), /* @__PURE__ */ React8.createElement(Button, { variant: "ghost", size: "sm", ref: backLink, className: "back-to-market", "aria-label": "\u8FD4\u56DE\u5168\u90E8\u6280\u80FD", onClick: returnToMarket }, icon("back"), "\u5168\u90E8\u6280\u80FD")), /* @__PURE__ */ React8.createElement("div", { className: "section-head installed-head", "data-testid": "skills-installed" }, /* @__PURE__ */ React8.createElement("h1", null, "\u6211\u5B89\u88C5\u7684 ", /* @__PURE__ */ React8.createElement("span", { className: "market-count" }, skills.length)), /* @__PURE__ */ React8.createElement("div", { className: "installed-tools" }, /* @__PURE__ */ React8.createElement(Button, { className: batchMode ? "batch-toggle active" : "batch-toggle", onClick: toggleBatch }, batchMode ? "\u9000\u51FA\u6279\u91CF" : "\u6279\u91CF\u7BA1\u7406"), /* @__PURE__ */ React8.createElement(Input, { className: "search", "aria-label": "\u641C\u7D22\u5DF2\u5B89\u88C5\u7684\u6280\u80FD", placeholder: "\u641C\u7D22\u5DF2\u5B89\u88C5\u7684\u6280\u80FD", value: installedQuery, onChange: (event) => setInstalledQuery(event.currentTarget.value) }))), batchMode && batchBar, countsLine, !busy && !installedFiltered.length ? /* @__PURE__ */ React8.createElement("div", { className: "empty" }, /* @__PURE__ */ React8.createElement("strong", null, skills.length ? "\u6CA1\u6709\u5339\u914D\u7684\u6280\u80FD" : "\u5C1A\u672A\u53D1\u73B0\u5DF2\u5B89\u88C5\u6280\u80FD"), /* @__PURE__ */ React8.createElement("span", { className: "muted" }, skills.length ? "\u6362\u4E2A\u5173\u952E\u8BCD\uFF0C\u6216\u6E05\u7A7A\u641C\u7D22\u3002" : "\u8FD4\u56DE\u300C\u5168\u90E8\u6280\u80FD\u300D\u5373\u53EF\u5B89\u88C5\u6216\u4E0A\u4F20\u6280\u80FD\u3002")) : null, installedFiltered.length ? /* @__PURE__ */ React8.createElement("div", { className: "grid" }, installedFiltered.map(renderSkillCard)) : null) : /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("header", { className: "cap-header" }, /* @__PURE__ */ React8.createElement("button", { className: "nav-toggle", onClick: toggleNavigation, "aria-label": "\u5207\u6362\u5BFC\u822A" }, "\u5BFC\u822A"), capabilityTabs.map(([key, label]) => {
    const active = key === "skills";
    const target = capabilityKey[key];
    const enabled = active || target !== void 0 && hasCapability(target);
    return /* @__PURE__ */ React8.createElement(
      "button",
      {
        key,
        className: `cap-tab ${active ? "active" : ""}`,
        disabled: !enabled,
        "aria-current": active ? "page" : void 0,
        onClick: () => {
          if (!active && target) openCapability(target);
        }
      },
      icon(key),
      label
    );
  }), /* @__PURE__ */ React8.createElement(Input, { ref: search, className: "search", "aria-label": "\u641C\u7D22\u6280\u80FD", placeholder: "\u641C\u7D22\u6280\u80FD", value: query, onChange: (event) => setQuery(event.currentTarget.value) }), /* @__PURE__ */ React8.createElement(Button, { ref: installedEntry, className: "installed-count", "aria-label": `\u67E5\u770B\u6211\u5B89\u88C5\u7684 ${skills.length} \u4E2A\u6280\u80FD`, onClick: openInstalled }, "\u6211\u5B89\u88C5\u7684 ", skills.length), /* @__PURE__ */ React8.createElement(Button, { className: batchMode ? "batch-toggle active" : "batch-toggle", onClick: toggleBatch }, batchMode ? "\u9000\u51FA\u6279\u91CF" : "\u6279\u91CF\u7BA1\u7406"), /* @__PURE__ */ React8.createElement(Button, { className: "trash-button", onClick: () => void openTrash() }, "\u6700\u8FD1\u5378\u8F7D"), /* @__PURE__ */ React8.createElement("div", { className: "add-menu-wrap", ref: addMenu }, /* @__PURE__ */ React8.createElement(Button, { variant: "primary", className: "add-skill", disabled: creating, "aria-haspopup": "menu", "aria-expanded": addMenuOpen, onClick: () => setAddMenuOpen((open) => !open) }, "\uFF0B \u6DFB\u52A0\u6280\u80FD"), addMenuOpen && /* @__PURE__ */ React8.createElement("div", { className: "add-menu", role: "menu" }, /* @__PURE__ */ React8.createElement("button", { role: "menuitem", onClick: () => {
    setAddMenuOpen(false);
    search.current?.focus();
  } }, "\u67E5\u627E\u6280\u80FD"), /* @__PURE__ */ React8.createElement("button", { role: "menuitem", onClick: () => {
    setAddMenuOpen(false);
    setImportOpen(true);
  } }, "\u4E0A\u4F20\u6280\u80FD"), /* @__PURE__ */ React8.createElement("button", { role: "menuitem", onClick: () => void beginSkillTask("create") }, "\u521B\u5EFA\u6280\u80FD")))), /* @__PURE__ */ React8.createElement("div", { className: "section-head" }, /* @__PURE__ */ React8.createElement("h1", null, "\u6280\u80FD\u5E02\u573A"), /* @__PURE__ */ React8.createElement(Button, { className: "refresh", onClick: () => {
    setRefreshToken((value) => value + 1);
    void refresh();
  }, disabled: busy }, "\u5237\u65B0")), /* @__PURE__ */ React8.createElement("nav", { className: "skill-source-tabs", "aria-label": "\u6280\u80FD\u6765\u6E90" }, /* @__PURE__ */ React8.createElement("button", { className: marketSource === "local" ? "active" : "", "aria-current": marketSource === "local" ? "page" : void 0, onClick: () => setMarketSource("local") }, "\u672C\u5730\u6280\u80FD"), /* @__PURE__ */ React8.createElement("button", { className: marketSource === "skillhub" ? "active" : "", "aria-current": marketSource === "skillhub" ? "page" : void 0, onClick: () => setMarketSource("skillhub") }, "SkillHub")), marketSource === "skillhub" ? /* @__PURE__ */ React8.createElement(SkillHubPanel, { management, refreshToken, query, onInstalled: refresh, onOpenInstalled: openInstalled }) : /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("nav", { className: "category-tabs", "aria-label": "\u6280\u80FD\u5206\u7C7B" }, /* @__PURE__ */ React8.createElement("button", { className: selectedCategory === ALL ? "active" : "", "aria-current": selectedCategory === ALL ? "page" : void 0, onClick: () => setCategory(ALL) }, "\u5168\u90E8"), categories.map((label) => /* @__PURE__ */ React8.createElement("button", { key: label, className: selectedCategory === label ? "active" : "", "aria-current": selectedCategory === label ? "page" : void 0, onClick: () => setCategory((current) => current === label ? ALL : label) }, label))), catalog?.status === "invalid" && /* @__PURE__ */ React8.createElement("p", { className: "catalog-note", role: "note" }, "\u6280\u80FD\u76EE\u5F55\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u5DF2\u5B89\u88C5\u7684\u6280\u80FD\u4ECD\u53EF\u4F7F\u7528\u3002"), batchMode && batchBar, countsLine, !busy && available.length ? /* @__PURE__ */ React8.createElement("section", { className: "market-section", "aria-label": "\u53EF\u5B89\u88C5\u6280\u80FD" }, /* @__PURE__ */ React8.createElement("div", { className: "market-head" }, /* @__PURE__ */ React8.createElement("h2", null, "\u53EF\u5B89\u88C5 ", /* @__PURE__ */ React8.createElement("span", { className: "market-count" }, available.length)), /* @__PURE__ */ React8.createElement("span", { className: "muted" }, "\u6765\u81EA\u672C\u5730\u6280\u80FD\u76EE\u5F55\uFF0C\u70B9\u51FB \uFF0B \u76F4\u63A5\u5B89\u88C5")), /* @__PURE__ */ React8.createElement("div", { className: "grid" }, available.map((entry) => /* @__PURE__ */ React8.createElement("article", { className: "card market-card", key: entry.name }, /* @__PURE__ */ React8.createElement("div", { className: "card-top" }, /* @__PURE__ */ React8.createElement("button", { className: "card-open", "aria-label": `\u67E5\u770B\u6280\u80FD ${entry.name}`, onClick: () => {
    setError("");
    setPreview(entry);
  } }, /* @__PURE__ */ React8.createElement(SkillMark, { name: entry.name, title: entry.title, iconUrl: entry.iconUrl }), /* @__PURE__ */ React8.createElement("span", { className: "card-title" }, /* @__PURE__ */ React8.createElement("strong", { title: entry.name }, entry.title), entry.categories.length ? /* @__PURE__ */ React8.createElement("small", null, entry.categories.slice(0, 2).join(" \xB7 ")) : null)), /* @__PURE__ */ React8.createElement(Button, { className: "install", disabled: !entry.installable || Boolean(installBusy), "aria-label": `\u5B89\u88C5\u6280\u80FD ${entry.title}`, title: entry.installable ? `\u5B89\u88C5 ${entry.title}` : `\u6682\u4E0D\u53EF\u5B89\u88C5\uFF1A${entry.installLimits?.join("\uFF1B") ?? "\u8D85\u51FA\u5B89\u88C5\u9650\u5236"}`, onClick: () => void install(entry) }, installBusy === entry.name ? "\u2026" : "\uFF0B")), /* @__PURE__ */ React8.createElement("p", { className: "muted" }, entry.description))))) : null, !busy && !filtered.length ? /* @__PURE__ */ React8.createElement("div", { className: "empty" }, /* @__PURE__ */ React8.createElement("strong", null, skills.length ? "\u6CA1\u6709\u5339\u914D\u7684\u6280\u80FD" : "\u5C1A\u672A\u53D1\u73B0\u5DF2\u5B89\u88C5\u6280\u80FD"), /* @__PURE__ */ React8.createElement("span", { className: "muted" }, "\u53EF\u7528\u4E0A\u65B9\u300C\uFF0B \u6DFB\u52A0\u6280\u80FD\u300D\u4E0A\u4F20\uFF0C\u6216\u4ECE\u4E0B\u65B9\u76EE\u5F55\u5B89\u88C5\u3002")) : null, filtered.length ? /* @__PURE__ */ React8.createElement("section", { className: "market-section", "aria-label": "\u5DF2\u5B89\u88C5\u6280\u80FD" }, available.length ? /* @__PURE__ */ React8.createElement("div", { className: "market-head" }, /* @__PURE__ */ React8.createElement("h2", null, "\u5DF2\u5B89\u88C5 ", /* @__PURE__ */ React8.createElement("span", { className: "market-count" }, filtered.length))) : null, /* @__PURE__ */ React8.createElement("div", { className: "grid" }, filtered.map(renderSkillCard))) : null)), /* @__PURE__ */ React8.createElement(Modal, { open: Boolean(preview), label: preview ? `${preview.title} \u6280\u80FD\u9884\u89C8` : "\u6280\u80FD\u9884\u89C8", className: "skill-detail-dialog catalog-dialog", onClose: () => setPreview(void 0) }, preview && /* @__PURE__ */ React8.createElement("article", { "data-testid": "skill-catalog-preview" }, /* @__PURE__ */ React8.createElement("div", { className: "detail-hero" }, /* @__PURE__ */ React8.createElement(SkillMark, { large: true, name: preview.name, title: preview.title, iconUrl: preview.iconUrl }), /* @__PURE__ */ React8.createElement("div", { className: "detail-title" }, /* @__PURE__ */ React8.createElement("h1", null, preview.title), /* @__PURE__ */ React8.createElement("p", { className: "slug" }, preview.name), /* @__PURE__ */ React8.createElement("div", { className: "detail-actions" }, /* @__PURE__ */ React8.createElement(Button, { variant: "primary", className: "install solid", disabled: !preview.installable || Boolean(installBusy), onClick: () => void install(preview) }, installBusy === preview.name ? "\u6B63\u5728\u5B89\u88C5\u2026" : "\uFF0B \u5B89\u88C5"), /* @__PURE__ */ React8.createElement(Button, { onClick: () => setPreview(void 0) }, "\u7A0D\u540E\u518D\u8BF4")))), /* @__PURE__ */ React8.createElement("p", { className: "detail-summary" }, preview.description), preview.installLimits?.length ? /* @__PURE__ */ React8.createElement("section", { className: "validation-errors" }, /* @__PURE__ */ React8.createElement("h3", null, "\u6682\u4E0D\u53EF\u76F4\u63A5\u5B89\u88C5"), /* @__PURE__ */ React8.createElement("ul", null, preview.installLimits.map((item) => /* @__PURE__ */ React8.createElement("li", { key: item }, item))), /* @__PURE__ */ React8.createElement("p", { className: "muted" }, "\u53EF\u901A\u8FC7\u300C\uFF0B \u6DFB\u52A0\u6280\u80FD \u2192 \u4E0A\u4F20\u6280\u80FD\u300D\u624B\u52A8\u5BFC\u5165\u6574\u7406\u540E\u7684\u526F\u672C\u3002")) : null, /* @__PURE__ */ React8.createElement("h2", { className: "detail-section-title" }, icon("library"), "\u57FA\u672C\u4FE1\u606F"), /* @__PURE__ */ React8.createElement("div", { className: "detail-body" }, /* @__PURE__ */ React8.createElement("dl", null, /* @__PURE__ */ React8.createElement("dt", null, "\u6280\u80FD\u6807\u8BC6"), /* @__PURE__ */ React8.createElement("dd", null, /* @__PURE__ */ React8.createElement("code", { className: "command" }, "/", preview.name)), /* @__PURE__ */ React8.createElement("dt", null, "\u5206\u7C7B"), /* @__PURE__ */ React8.createElement("dd", null, preview.categories.join(" \xB7 ") || "\u672A\u5206\u7C7B"), /* @__PURE__ */ React8.createElement("dt", null, "\u7248\u672C"), /* @__PURE__ */ React8.createElement("dd", null, preview.version ?? "\u672A\u6807\u6CE8")), preview.examples?.length ? /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B"), /* @__PURE__ */ React8.createElement("ul", { className: "example-list" }, preview.examples.map((item) => /* @__PURE__ */ React8.createElement("li", { key: item }, item)))) : null))), /* @__PURE__ */ React8.createElement(Modal, { open: Boolean(selected), label: selected ? `${selected.name} \u6280\u80FD\u8BE6\u60C5` : "\u6280\u80FD\u8BE6\u60C5", className: "skill-detail-dialog", onClose: () => {
    setSelected(void 0);
    setEditing(false);
    setResource(void 0);
  } }, selected && /* @__PURE__ */ React8.createElement("article", { "data-testid": "skill-detail" }, /* @__PURE__ */ React8.createElement("div", { className: "detail-hero" }, /* @__PURE__ */ React8.createElement(SkillMark, { large: true, name: selected.name, title: selected.title, iconUrl: selected.iconUrl }), /* @__PURE__ */ React8.createElement("div", { className: "detail-title" }, /* @__PURE__ */ React8.createElement("h1", null, selected.title ?? selected.name), selected.title && selected.title !== selected.name ? /* @__PURE__ */ React8.createElement("p", { className: "slug" }, selected.name) : null, /* @__PURE__ */ React8.createElement("div", { className: "detail-actions" }, selected.manageable && /* @__PURE__ */ React8.createElement(Button, { className: "try", disabled: selected.state !== "enabled", onClick: () => void trial(selected.name) }, "\u53BB\u8BD5\u8BD5"), selected.manageable && /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement(Button, { onClick: () => setEditing(true) }, "\u7F16\u8F91"), /* @__PURE__ */ React8.createElement(Button, { onClick: () => void openDirectory(selected) }, "\u6253\u5F00\u6587\u4EF6\u5939"), /* @__PURE__ */ React8.createElement(Button, { tone: "danger", className: "danger", onClick: () => void prepareUninstall(selected) }, "\u5378\u8F7D")))), /* @__PURE__ */ React8.createElement("span", { className: "readonly-badge", hidden: selected.manageable }, "\u5185\u7F6E \xB7 \u53EA\u8BFB"), selected.manageable && /* @__PURE__ */ React8.createElement("button", { className: "switch", role: "switch", disabled: selected.state === "invalid", "aria-checked": selected.state === "enabled", onClick: () => void setEnabled(selected, selected.state !== "enabled") })), /* @__PURE__ */ React8.createElement("p", { className: "detail-summary" }, selected.localizedDescription ?? selected.description), !selected.manageable && /* @__PURE__ */ React8.createElement("p", { className: "readonly-note" }, "\u7531\u5BBF\u4E3B\u6216\u6240\u5C5E\u63D2\u4EF6\u63D0\u4F9B\uFF0C\u672C\u9875\u4EC5\u67E5\u770B\u8BF4\u660E\uFF1B\u5982\u9700\u505C\u7528\u6216\u79FB\u9664\uFF0C\u8BF7\u5230\u5BF9\u5E94\u63D2\u4EF6\u8BBE\u7F6E\u4E2D\u64CD\u4F5C\u3002\u53EA\u8BFB\u4E0D\u4EE3\u8868\u5DF2\u505C\u7528\u3002"), /* @__PURE__ */ React8.createElement("h2", { className: "detail-section-title" }, icon("library"), "\u6982\u8FF0"), /* @__PURE__ */ React8.createElement("div", { className: "detail-body" }, resource ? /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("div", { className: "resource-editor-head" }, /* @__PURE__ */ React8.createElement(Button, { onClick: () => setResource(void 0) }, "\u8FD4\u56DE\u6982\u8FF0"), /* @__PURE__ */ React8.createElement("strong", null, resource.path)), /* @__PURE__ */ React8.createElement("label", { className: "editor-label", htmlFor: "resource-document" }, "\u8D44\u6E90\u6587\u4EF6"), /* @__PURE__ */ React8.createElement(Textarea, { id: "resource-document", className: "skill-editor", value: resourceDocument, onChange: (event) => setResourceDocument(event.currentTarget.value), spellCheck: false }), /* @__PURE__ */ React8.createElement("div", { className: "editor-actions" }, /* @__PURE__ */ React8.createElement(Button, { onClick: () => {
    setResourceDocument(resource.document);
    setResource(void 0);
  } }, "\u53D6\u6D88"), /* @__PURE__ */ React8.createElement(Button, { variant: "primary", className: "save", disabled: busy || !resource.isNew && resourceDocument === resource.document, onClick: () => void saveResource() }, "\u4FDD\u5B58\u8D44\u6E90"))) : editing ? /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("label", { className: "editor-label", htmlFor: "skill-document" }, "SKILL.md"), /* @__PURE__ */ React8.createElement(Textarea, { id: "skill-document", className: "skill-editor", value: skillDocument, onChange: (event) => setSkillDocument(event.currentTarget.value), spellCheck: false }), /* @__PURE__ */ React8.createElement("div", { className: "editor-actions" }, /* @__PURE__ */ React8.createElement(Button, { onClick: () => {
    setSkillDocument(selected.document ?? "");
    setEditing(false);
  } }, "\u53D6\u6D88"), /* @__PURE__ */ React8.createElement(Button, { variant: "primary", className: "save", disabled: busy || skillDocument === selected.document, onClick: () => void save() }, "\u4FDD\u5B58\u5E76\u91CD\u65B0\u53D1\u73B0"))) : /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("dl", null, /* @__PURE__ */ React8.createElement("dt", null, "\u540D\u79F0"), /* @__PURE__ */ React8.createElement("dd", null, selected.name), /* @__PURE__ */ React8.createElement("dt", null, "\u72B6\u6001"), /* @__PURE__ */ React8.createElement("dd", null, selected.state === "enabled" ? "\u5DF2\u542F\u7528" : selected.state === "disabled" ? "\u5DF2\u505C\u7528" : selected.state === "invalid" ? "\u9700\u8981\u4FEE\u590D" : "\u53EA\u8BFB"), /* @__PURE__ */ React8.createElement("dt", null, "\u8C03\u7528\u65B9\u5F0F"), /* @__PURE__ */ React8.createElement("dd", null, /* @__PURE__ */ React8.createElement("code", { className: "command" }, "/", selected.name))), selected.diagnostics?.length ? /* @__PURE__ */ React8.createElement("section", { className: "validation-errors" }, /* @__PURE__ */ React8.createElement("h3", null, "\u6821\u9A8C\u95EE\u9898"), /* @__PURE__ */ React8.createElement("ul", null, selected.diagnostics.map((item) => /* @__PURE__ */ React8.createElement("li", { key: `${item.code}-${item.path ?? ""}` }, item.message))), /* @__PURE__ */ React8.createElement(Button, { onClick: () => setEditing(true) }, "\u4FEE\u590D SKILL.md")) : null, selected.manageable && /* @__PURE__ */ React8.createElement("section", { className: "resource-section" }, /* @__PURE__ */ React8.createElement("h3", null, "\u8D44\u6E90\u6587\u4EF6"), selected.resources.length ? /* @__PURE__ */ React8.createElement("div", { className: "resource-list" }, selected.resources.map((path2) => /* @__PURE__ */ React8.createElement(Button, { key: path2, onClick: () => void openResource(path2) }, path2))) : /* @__PURE__ */ React8.createElement("p", { className: "muted" }, "\u6682\u65E0\u9644\u52A0\u8D44\u6E90"), /* @__PURE__ */ React8.createElement("div", { className: "new-resource" }, /* @__PURE__ */ React8.createElement(Input, { "aria-label": "\u65B0\u8D44\u6E90\u8DEF\u5F84", placeholder: "\u4F8B\u5982 references/guide.md", value: newResourcePath, onChange: (event) => setNewResourcePath(event.currentTarget.value) }), /* @__PURE__ */ React8.createElement(Button, { disabled: !newResourcePath.trim(), onClick: beginResource }, "\u65B0\u5EFA\u8D44\u6E90"))), /* @__PURE__ */ React8.createElement("pre", { className: "skill-document" }, selected.document ?? selected.whenToUse ?? selected.description)), error && /* @__PURE__ */ React8.createElement("p", { className: "error", role: "alert" }, error)))), /* @__PURE__ */ React8.createElement(Modal, { open: Boolean(confirmUninstall), label: "\u786E\u8BA4\u5378\u8F7D\u6280\u80FD", className: "confirm-dialog", onClose: () => setConfirmUninstall(void 0) }, confirmUninstall && /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement("h2", null, "\u5378\u8F7D ", confirmUninstall.skill.name, "\uFF1F"), /* @__PURE__ */ React8.createElement("p", null, "\u6280\u80FD\u5C06\u79FB\u5165 Skills Master \u56DE\u6536\u76EE\u5F55\uFF0C\u5E76\u4ECE\u6240\u6709\u4EFB\u52A1\u7684\u53EF\u8C03\u7528\u6280\u80FD\u4E2D\u79FB\u9664\u3002"), confirmUninstall.impact.dependents.length ? /* @__PURE__ */ React8.createElement("div", { className: "dependency-impact" }, /* @__PURE__ */ React8.createElement("strong", null, "\u4F9D\u8D56\u5F71\u54CD"), /* @__PURE__ */ React8.createElement("ul", null, confirmUninstall.impact.dependents.map((item) => /* @__PURE__ */ React8.createElement("li", { key: `${item.kind}-${item.id}` }, item.label, item.blocking ? "\uFF08\u9700\u5148\u89E3\u9664\uFF09" : "")))) : /* @__PURE__ */ React8.createElement("p", { className: "dependency-clear" }, "\u672A\u53D1\u73B0 Skills Master \u5BF9\u8C61\u4F9D\u8D56\u6B64\u6280\u80FD\u3002"), /* @__PURE__ */ React8.createElement("div", { className: "confirm-actions" }, /* @__PURE__ */ React8.createElement(Button, { onClick: () => setConfirmUninstall(void 0) }, "\u53D6\u6D88"), /* @__PURE__ */ React8.createElement(Button, { tone: "danger", className: "danger solid", disabled: confirmUninstall.impact.dependents.some((item) => item.blocking), onClick: () => void uninstall() }, "\u786E\u8BA4\u5378\u8F7D")))), /* @__PURE__ */ React8.createElement(Modal, { open: confirmBatchUninstall, label: "\u786E\u8BA4\u6279\u91CF\u5378\u8F7D\u6280\u80FD", className: "confirm-dialog", onClose: () => setConfirmBatchUninstall(false) }, /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement("h2", null, "\u5378\u8F7D\u6240\u9009 ", selectedNames.length, " \u4E2A\u6280\u80FD\uFF1F"), /* @__PURE__ */ React8.createElement("p", null, "\u6BCF\u4E2A\u6210\u529F\u5378\u8F7D\u7684\u6280\u80FD\u4F1A\u5206\u522B\u8FDB\u5165\u53EF\u6062\u590D\u76EE\u5F55\uFF1B\u5931\u8D25\u9879\u4F1A\u4FDD\u7559\u9009\u62E9\u5E76\u663E\u793A\u539F\u56E0\u3002"), /* @__PURE__ */ React8.createElement("div", { className: "confirm-actions" }, /* @__PURE__ */ React8.createElement(Button, { onClick: () => setConfirmBatchUninstall(false) }, "\u53D6\u6D88"), /* @__PURE__ */ React8.createElement(Button, { tone: "danger", className: "danger solid", onClick: () => void runBatch("uninstall") }, "\u786E\u8BA4\u5378\u8F7D")))), /* @__PURE__ */ React8.createElement(Modal, { open: trashOpen, label: "\u6700\u8FD1\u5378\u8F7D\u7684\u6280\u80FD", className: "trash-dialog", onClose: () => setTrashOpen(false) }, /* @__PURE__ */ React8.createElement("h2", null, "\u6700\u8FD1\u5378\u8F7D"), trash.length ? /* @__PURE__ */ React8.createElement("div", { className: "trash-list" }, trash.map((entry) => /* @__PURE__ */ React8.createElement("div", { key: entry.id }, /* @__PURE__ */ React8.createElement("div", null, /* @__PURE__ */ React8.createElement("strong", null, entry.name), /* @__PURE__ */ React8.createElement("small", null, new Date(entry.removedAt).toLocaleString(), " \xB7 ", entry.previousState === "enabled" ? "\u539F\u4E3A\u542F\u7528" : "\u539F\u4E3A\u505C\u7528")), /* @__PURE__ */ React8.createElement(Button, { disabled: busy, onClick: () => void restore(entry) }, "\u6062\u590D")))) : /* @__PURE__ */ React8.createElement("p", { className: "muted" }, "\u6CA1\u6709\u53EF\u6062\u590D\u7684\u6280\u80FD\u3002"), error && /* @__PURE__ */ React8.createElement("p", { className: "error", role: "alert" }, error)), /* @__PURE__ */ React8.createElement(ImportSkillModal, { open: importOpen, management, onClose: () => setImportOpen(false), onInstalled: async (name2) => {
    await refresh();
    await openDetail(name2);
  } }));
}

// src/client/management.ts
var path = "/api/dsh-skills-master-skills";
function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function failure(value) {
  if (isRecord(value) && typeof value.message === "string") return Object.assign(new Error(value.message), { code: typeof value.code === "string" ? value.code : "skill/request-failed" });
  return new Error("\u6280\u80FD\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002");
}
function transportFailure(cause) {
  if (cause instanceof DOMException && cause.name === "TimeoutError") return Object.assign(new Error("\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u68C0\u67E5\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002"), { code: "skill/request-timeout" });
  if (cause instanceof DOMException && cause.name === "AbortError") return Object.assign(new Error("\u64CD\u4F5C\u5DF2\u53D6\u6D88\u3002"), { code: "skill/request-cancelled" });
  return cause instanceof Error ? cause : new Error("\u65E0\u6CD5\u8FDE\u63A5\u6280\u80FD\u7BA1\u7406\u670D\u52A1\uFF0C\u8BF7\u91CD\u8BD5\u3002");
}
async function request(url, init, timeoutMs, signal) {
  const timeout = AbortSignal.timeout(timeoutMs);
  const requestSignal = signal ? AbortSignal.any([signal, timeout]) : timeout;
  try {
    const response = await fetch(url, { ...init, signal: requestSignal });
    const result = await response.json();
    if (!result.ok) throw failure(result.error);
    return result.value;
  } catch (cause) {
    throw transportFailure(cause);
  }
}
async function call(ctx, endpoint, payload, signal) {
  void ctx;
  return request(path, {
    method: "POST",
    credentials: "same-origin",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ endpoint, payload })
  }, endpoint === "commit-import" || endpoint === "install-catalog" ? 6e4 : 3e4, signal);
}
function createSkillManagementClient(ctx, lifetime) {
  const scoped = (signal) => lifetime && signal ? AbortSignal.any([lifetime, signal]) : lifetime ?? signal;
  const invoke = (endpoint, payload, signal) => call(ctx, endpoint, payload, scoped(signal));
  return {
    list: () => invoke("list", {}),
    catalog: () => invoke("catalog", {}),
    installFromCatalog: (name2) => invoke("install-catalog", { name: name2 }),
    detail: (name2) => invoke("detail", { name: name2 }),
    update: (request2) => invoke("update", request2),
    resource: (name2, resourcePath) => invoke("resource", { name: name2, path: resourcePath }),
    writeResource: (request2) => invoke("write-resource", request2),
    setEnabled: (name2, enabled) => invoke("set-enabled", { name: name2, enabled }),
    dependencyImpact: (name2) => invoke("dependency-impact", { name: name2 }),
    uninstall: (name2, expectedImpactRevision) => invoke("uninstall", { name: name2, expectedImpactRevision }),
    batch: (names, action) => invoke("batch", { names, action }),
    listTrash: () => invoke("trash-list", {}),
    restore: (id) => invoke("restore", { id }),
    stageImport: async (file, signal) => {
      return request(`${path}/import`, {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": file.type || "application/octet-stream", "x-dsh-skills-master-file-name": encodeURIComponent(file.name) },
        body: file
      }, 12e4, scoped(signal));
    },
    commitImport: (id, scope, signal) => invoke("commit-import", { id, scope }, signal),
    discardImport: (id) => invoke("discard-import", { id }),
    openDirectory: async (path2) => {
      lifetime?.throwIfAborted();
      const result = await ctx.remote.session.openWorkspacePath({ path: path2, action: "reveal" });
      if (!result.ok) throw failure(result.error);
    }
  };
}

// src/client/SkillNavigationIcon.tsx
var React9 = __toESM(require("react"), 1);
function SkillNavigationIcon() {
  return /* @__PURE__ */ React9.createElement(Icon, { name: "experts" });
}

// src/client.tsx
var name = "dsh-skills-master-skills-client";
var inject = ["slots", "layout", "sessions", "workspaces", "remote", "remote.session", "connection", "uiWorkspace"];
function apply(ctx) {
  const lifetime = new AbortController();
  ctx.effect(() => () => lifetime.abort(), "dsh-skills-master.skills.client");
  const waitForInput = (milliseconds) => new Promise((resolve, reject) => {
    lifetime.signal.throwIfAborted();
    const abort = () => {
      window.clearTimeout(timer);
      reject(lifetime.signal.reason);
    };
    const timer = window.setTimeout(() => {
      lifetime.signal.removeEventListener("abort", abort);
      resolve();
    }, milliseconds);
    lifetime.signal.addEventListener("abort", abort, { once: true });
  });
  const sessions = ctx.sessions;
  const management = createSkillManagementClient(ctx, lifetime.signal);
  const resolveWorkspace = () => {
    const state = sessions.list.getSnapshot();
    const currentId = Object.values(state.byId).find((row) => (row.retainedBy.mainView ?? 0) > 0)?.id;
    const workspaces = ctx.workspaces.list.getSnapshot().items;
    return (currentId ? workspaces.find((row) => row.sessionIds.includes(currentId)) : void 0) ?? workspaces.find((row) => row.path === (currentId ? state.byId[currentId]?.cwd : void 0)) ?? workspaces[0];
  };
  const startSkillTask = async (kind, name2) => {
    lifetime.signal.throwIfAborted();
    const workspace = resolveWorkspace();
    if (!workspace) throw new Error("workspace required");
    const draft = kind === "create" ? skillTaskDrafts[kind] : skillManagementDraft(kind, name2);
    const sessionId = await sessions.create({ workspaceId: workspace.workspaceId, cwd: workspace.path });
    lifetime.signal.throwIfAborted();
    window.sessionStorage.setItem(pendingDraftKey, draft);
    ctx.uiWorkspace.openSession(sessionId);
    ctx.layout.selectPanel(null);
    await waitForInput(150);
    for (let attempt = 0; attempt < 40; attempt++) {
      const scope = sessions.scope(sessionId), conversation = scope?.get("conversation");
      if (scope && conversation) {
        try {
          conversation.input.for(scope).setDraft(draft);
          return;
        } catch {
        }
      }
      await waitForInput(25);
    }
  };
  const startSkillTrial = async (skillName) => {
    lifetime.signal.throwIfAborted();
    const draft = `/${skillName} `;
    const workspace = resolveWorkspace();
    if (!workspace) throw new Error("workspace required");
    const sessionId = await sessions.create({ workspaceId: workspace.workspaceId, cwd: workspace.path });
    lifetime.signal.throwIfAborted();
    window.sessionStorage.setItem(pendingDraftKey, draft);
    ctx.uiWorkspace.openSession(sessionId);
    ctx.layout.selectPanel(null);
  };
  const openCapability = (key) => {
    ctx.layout.selectPanel(key);
  };
  const hasCapability = (key) => ctx.slots.entriesOfSlot("main").some((entry) => entry.options.key === key);
  ctx.slots.inject("main", () => ctx.slots.register({ name: "main", key: "dsh-skills-master-skills", inject: () => ({ toggleNavigation: () => ctx.layout.toggleSidebar(), management, startSkillTask, startSkillTrial, openCapability, hasCapability }) }, SkillsPanel));
  ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({
    name: "sidebar.panellist",
    id: "dsh-skills-master-skills",
    label: "\u6280\u80FD\u5E02\u573A",
    order: 30
  }, SkillNavigationIcon));
  ctx.slots.inject("conversation.input.overlay", () => ctx.slots.register({ name: "conversation.input.overlay", id: "dsh-skills-master-skill-draft" }, PendingSkillDraft));
}

return module.exports;
}});
