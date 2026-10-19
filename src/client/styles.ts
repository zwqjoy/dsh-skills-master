import { controlsCss, modalCss } from '../ui/index.js';

export const skillsCss = `${modalCss}
@layer dsh-skills-master-business {


.dsm-skills{overflow:auto;box-sizing:border-box}.dsm-skills{height:100%;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:14px/22px "PingFang SC","Microsoft YaHei",sans-serif;padding:24px}.dsm-skills *{box-sizing:border-box}.dsm-skills .nav-toggle{display:none}.dsm-skills button,.dsm-skills input{font:inherit;color:inherit;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-2);min-height:36px;padding:6px 12px}.dsm-skills button{cursor:pointer}.dsm-skills button:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}.dsm-skills button:disabled{cursor:not-allowed}.dsm-skills button:disabled{color:var(--dsw-alias-label-dimmed)}.dsm-skills :focus-visible{outline-offset:3px}.dsm-skills :focus-visible{outline:2px solid var(--dsw-alias-brand-primary)}.dsm-skills .cap-header{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:28px}.dsm-skills .cap-tab{display:flex;align-items:center;gap:7px;white-space:nowrap}.dsm-skills .cap-tab{border:0;background:transparent}.dsm-skills .cap-tab.active{background:var(--dsw-alias-interactive-bg-hover)}.dsm-skills .cap-tab:disabled{cursor:default}.dsm-skills .cap-tab:disabled{color:var(--dsw-alias-label-tertiary)}.dsm-skills .search{margin-left:auto;width:250px;min-width:150px}.dsm-skills .installed-count,.dsm-skills .add-skill{white-space:nowrap}.dsm-skills .installed-count{display:inline-flex;align-items:center}.dsm-skills .installed-count{min-height:36px;padding:6px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary)}.dsm-skills .add-menu-wrap,.dsm-skills .card-actions{position:relative}.dsm-skills .add-skill,.dsm-skills .try{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-inverted);border-color:var(--dsw-alias-border-l2);font-weight:600}.dsm-skills .add-menu,.dsm-skills .card-menu{position:absolute;z-index:20;right:0;top:calc(100% + 8px);width:164px}.dsm-skills .add-menu,.dsm-skills .card-menu{padding:8px;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:14px;box-shadow:0 14px 36px var(--dsw-alias-bg-mask-2)}.dsm-skills .add-menu button,.dsm-skills .card-menu button{display:block;width:100%;text-align:left}.dsm-skills .add-menu button,.dsm-skills .card-menu button{border:0;background:transparent;min-height:40px;padding:8px 12px}.dsm-skills .card-menu .danger{color:var(--dsw-alias-state-error-primary)}.dsm-skills .section-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px;border-bottom:1px solid var(--dsw-alias-border-l2)}.dsm-skills .section-head{padding-bottom:18px}.dsm-skills h1{margin:0}.dsm-skills h1{font-size:25px;line-height:34px;font-weight:600}.dsm-skills .muted{color:var(--dsw-alias-label-tertiary)}.dsm-skills .counts{margin:0 0 16px}.dsm-skills .counts{font-size:12px}.dsm-skills .counts:not(.error):not(.notice){position:absolute;width:1px;overflow:hidden;clip-path:inset(50%)}.dsm-skills .counts:not(.error):not(.notice){height:1px}.dsm-skills .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:22px}.dsm-skills .card{position:relative;min-width:0;display:flex;flex-direction:column}.dsm-skills .card{border-radius:18px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);min-height:128px;padding:14px}.dsm-skills .card:hover{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}.dsm-skills .card-top{display:flex;align-items:center;gap:14px;min-width:0}.dsm-skills .card-open{display:flex;align-items:center;gap:14px;min-width:0;flex:1;text-align:left}.dsm-skills .card-open{padding:0;border:0;background:transparent}.dsm-skills .card-open:hover:not(:disabled){background:transparent}.dsm-skills .card-open strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsm-skills .card-open strong{font-weight:600;font-size:15px}.dsm-skills .card p{overflow:hidden;margin:6px 0 0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.dsm-skills .card p{font-size:15px;line-height:24px;height:48px}.dsm-skills .skill-mark{display:inline-grid;place-items:center;width:46px;flex:none;text-transform:uppercase}.dsm-skills .skill-mark{background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-brand-text);border-radius:50%;height:46px;font-weight:700;font-size:19px}.dsm-skills .more-button{width:36px}.dsm-skills .more-button{padding:0;border:0;font-size:20px}.dsm-skills .switch{width:34px;flex:none}.dsm-skills .switch{min-height:20px;height:20px;padding:2px;border:0;border-radius:999px;background:var(--dsw-alias-state-success-primary)}.dsm-skills .switch::after{content:"";display:block;width:16px;margin-left:14px}.dsm-skills .switch::after{height:16px;border-radius:50%;background:white}.dsm-skills .empty{text-align:center}.dsm-skills .empty{padding:64px 20px}.dsm-skills .empty strong{display:block;margin-bottom:8px}.dsm-skills .empty strong{font-size:16px}.skill-detail-dialog{padding:24px}.skill-detail-dialog .detail-hero{display:grid;grid-template-columns:48px minmax(0,1fr) auto;gap:16px;align-items:center}.skill-detail-dialog .detail-hero{padding-right:64px}.skill-detail-dialog .skill-mark{display:inline-grid;place-items:center;width:48px;text-transform:uppercase}.skill-detail-dialog .skill-mark{height:48px;border-radius:12px;background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-brand-text);font-size:22px;font-weight:700}.skill-detail-dialog .detail-title h1{margin:0 0 10px;overflow-wrap:anywhere}.skill-detail-dialog .detail-title h1{font-size:20px;line-height:28px}.skill-detail-dialog .detail-title p{margin:16px 0 0}.skill-detail-dialog .detail-title p{font-size:14px;line-height:23px;color:var(--dsw-alias-label-primary)}.skill-detail-dialog .detail-actions{display:flex;gap:9px;align-items:center}.skill-detail-dialog button{cursor:pointer}.skill-detail-dialog button{font:inherit;min-height:36px;padding:6px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}.skill-detail-dialog .try{background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-inverted);border-color:var(--dsw-alias-border-l2);font-weight:600}.skill-detail-dialog .detail-section-title{display:flex;align-items:center;gap:9px;margin:24px 0 12px}.skill-detail-dialog .detail-section-title{font-size:15px}.skill-detail-dialog .detail-body{white-space:normal;overflow-wrap:anywhere}.skill-detail-dialog .detail-body{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l2);border-radius:10px;padding:16px}.skill-detail-dialog .detail-body dl{display:grid;grid-template-columns:80px minmax(0,1fr);gap:12px;margin:0}.skill-detail-dialog .detail-body dt{margin:0}.skill-detail-dialog .detail-body dt{color:var(--dsw-alias-label-tertiary)}.skill-detail-dialog .detail-body dd{margin:0;min-width:0}.skill-detail-dialog .command{display:block;overflow-wrap:anywhere}.skill-detail-dialog .command{padding:12px;background:var(--dsw-alias-bg-layer-1);border-radius:8px}.dsm-skills svg,.skill-detail-dialog svg{width:20px;stroke:currentColor;stroke-width:1.7;fill:none;stroke-linecap:round}.dsm-skills svg,.skill-detail-dialog svg{height:20px}.dsm-skills .error,.skill-detail-dialog .error{color:var(--dsw-alias-state-error-primary)}@media(max-width:1400px){.dsm-skills .grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:900px){.dsm-skills .grid{grid-template-columns:repeat(2,minmax(0,1fr))}.dsm-skills .search{order:2;margin-left:0;flex:1}.skill-detail-dialog .detail-hero{grid-template-columns:48px minmax(0,1fr)}.skill-detail-dialog .skill-mark{width:48px}.skill-detail-dialog .skill-mark{height:48px;font-size:22px}.skill-detail-dialog .detail-actions{grid-column:1/-1}}@media(max-width:560px){.dsm-skills{padding:16px}.dsm-skills .nav-toggle{display:block}.dsm-skills .grid{grid-template-columns:1fr}.dsm-skills .add-menu{right:auto;left:0}.skill-detail-dialog{padding:24px 20px}.skill-detail-dialog .detail-body{padding:16px}.skill-detail-dialog button{min-height:44px}.skill-detail-dialog .detail-actions{flex-wrap:wrap}.skill-detail-dialog .detail-title h1{font-size:20px}}
}
${controlsCss}
.dsm-form-textarea.skill-editor{min-height:430px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
`;

export const skillsActionsCss = `${modalCss}
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

export const skillsMarketCss = `${modalCss}
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
/* 我安装的页面视图：从市场头部「我安装的」入口进入，返回链接回到市场。 */
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
/* 技能弹框沿用公共 Modal（.dsm-dialog）外壳；用更高特异性只收窄技能相关弹框并紧凑化内部，不改公共默认值。 */
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

/** Keep the search field usable when the desktop panel becomes narrow. */
export const standaloneCss = `
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
