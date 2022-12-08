var F=Object.defineProperty;var f=(e,a)=>F(e,"name",{value:a,configurable:!0});import{c as w,_ as d,$ as N,b as k,g as S,a as E,d as b}from"./index.module.554e1fc7.js";import{r as t,j as i,a as O}from"./jsx-runtime.43c8dc3d.js";import{$ as g}from"./index.module.a73d31e7.js";import{$ as T}from"./index.module.aa0c78f9.js";import{b as j,h as L,$ as V,a as q}from"./Combination.bd5284c7.js";import{R as B}from"./index.d39f2c51.js";import{$ as C}from"./index.module.585f1646.js";import{c as K}from"./WarningIcon.b58aea42.js";import{B as Y}from"./Box.27f7cd84.js";import{I as z}from"./IconButton.2c3fb8a0.js";import{S as G}from"./Scroll.9bfa014e.js";/* empty css                             */import{m as h}from"./index.9cb1647f.js";const U=t.exports.forwardRef((e,a)=>{var r;const{container:c=globalThis==null||(r=globalThis.document)===null||r===void 0?void 0:r.body,...n}=e;return c?B.createPortal(t.exports.createElement(w.div,d({},n,{ref:a})),c):null}),D="Dialog",[R,ye]=N(D),[Z,u]=R(D),H=f(e=>{const{__scopeDialog:a,children:r,open:c,defaultOpen:n,onOpenChange:o,modal:s=!0}=e,l=t.exports.useRef(null),p=t.exports.useRef(null),[m=!1,x]=k({prop:c,defaultProp:n,onChange:o});return t.exports.createElement(Z,{scope:a,triggerRef:l,contentRef:p,contentId:g(),titleId:g(),descriptionId:g(),open:m,onOpenChange:x,onOpenToggle:t.exports.useCallback(()=>x(I=>!I),[x]),modal:s},r)},"$5d3850c4d0b4e6c7$export$3ddf2d174ce01153"),y="DialogPortal",[J,M]=R(y,{forceMount:void 0}),Q=f(e=>{const{__scopeDialog:a,forceMount:r,children:c,container:n}=e,o=u(y,a);return t.exports.createElement(J,{scope:a,forceMount:r},t.exports.Children.map(c,s=>t.exports.createElement(C,{present:r||o.open},t.exports.createElement(U,{asChild:!0,container:n},s))))},"$5d3850c4d0b4e6c7$export$dad7c95542bacce0"),v="DialogOverlay",W=t.exports.forwardRef((e,a)=>{const r=M(v,e.__scopeDialog),{forceMount:c=r.forceMount,...n}=e,o=u(v,e.__scopeDialog);return o.modal?t.exports.createElement(C,{present:c||o.open},t.exports.createElement(X,d({},n,{ref:a}))):null}),X=t.exports.forwardRef((e,a)=>{const{__scopeDialog:r,...c}=e,n=u(v,r);return t.exports.createElement(j,{as:S,allowPinchZoom:!0,shards:[n.contentRef]},t.exports.createElement(w.div,d({"data-state":P(n.open)},c,{ref:a,style:{pointerEvents:"auto",...c.style}})))}),$="DialogContent",ee=t.exports.forwardRef((e,a)=>{const r=M($,e.__scopeDialog),{forceMount:c=r.forceMount,...n}=e,o=u($,e.__scopeDialog);return t.exports.createElement(C,{present:c||o.open},o.modal?t.exports.createElement(te,d({},n,{ref:a})):t.exports.createElement(oe,d({},n,{ref:a})))}),te=t.exports.forwardRef((e,a)=>{const r=u($,e.__scopeDialog),c=t.exports.useRef(null),n=E(a,r.contentRef,c);return t.exports.useEffect(()=>{const o=c.current;if(o)return L(o)},[]),t.exports.createElement(A,d({},e,{ref:n,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:b(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=r.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:b(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0;(s.button===2||l)&&o.preventDefault()}),onFocusOutside:b(e.onFocusOutside,o=>o.preventDefault())}))}),oe=t.exports.forwardRef((e,a)=>{const r=u($,e.__scopeDialog),c=t.exports.useRef(!1);return t.exports.createElement(A,d({},e,{ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{var o;if((o=e.onCloseAutoFocus)===null||o===void 0||o.call(e,n),!n.defaultPrevented){var s;c.current||(s=r.triggerRef.current)===null||s===void 0||s.focus(),n.preventDefault()}c.current=!1},onInteractOutside:n=>{var o,s;(o=e.onInteractOutside)===null||o===void 0||o.call(e,n),n.defaultPrevented||(c.current=!0);const l=n.target;((s=r.triggerRef.current)===null||s===void 0?void 0:s.contains(l))&&n.preventDefault()}}))}),A=t.exports.forwardRef((e,a)=>{const{__scopeDialog:r,trapFocus:c,onOpenAutoFocus:n,onCloseAutoFocus:o,...s}=e,l=u($,r),p=t.exports.useRef(null),m=E(a,p);return V(),t.exports.createElement(t.exports.Fragment,null,t.exports.createElement(q,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:n,onUnmountAutoFocus:o},t.exports.createElement(T,d({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":P(l.open)},s,{ref:m,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),ne="DialogClose",ce=t.exports.forwardRef((e,a)=>{const{__scopeDialog:r,...c}=e,n=u(ne,r);return t.exports.createElement(w.button,d({type:"button"},c,{ref:a,onClick:b(e.onClick,()=>n.onOpenChange(!1))}))});function P(e){return e?"open":"closed"}f(P,"$5d3850c4d0b4e6c7$var$getState");const re=H,ae=Q,se=W,le=ee,de=ce;var ie="tnw2bexk tnw2bezc tnw2be114 tnw2be12w tnw2be1dg tnw2beoo tnw2bejc tnw2be1ii",ue="_5b32m95 tnw2be1h4 tnw2be1hg tnw2be1dk tnw2be1ke tnw2be30 tnw2bel4 tnw2be23t",pe="tnw2be1dk tnw2be1jw tnw2bejc tnw2bemw tnw2beoo tnw2bel4",fe="tnw2be1ew tnw2be1g0 tnw2be1cs tnw2be1dk tnw2be1ii tnw2bejc tnw2bemw tnw2beoo tnw2bel4";const _=f(e=>{const{children:a,scroll:r=!0,onClose:c,closeOnOverlayClick:n=!0,closeOnEscape:o=!0}=e;return i(re,{defaultOpen:!0,onOpenChange:c,children:i(ae,{forceMount:!0,children:O(Y,{className:fe,children:[i(se,{className:pe,forceMount:!0,asChild:!0,children:i(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"linear"}},"modal-overlay")}),i(le,{className:ue,onEscapeKeyDown:()=>{o&&(c==null||c())},forceMount:!0,asChild:!0,children:O(h.div,{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"tween",ease:"easeOut"},children:[r?i(G,{children:a}):a,n&&i(de,{asChild:!0,children:i(z,{icon:K,size:"xs",className:ie,"aria-label":"Close"})})]},"modal-content")})]})})})},"Modal");try{_.displayName="Modal",_.__docgenInfo={description:"",displayName:"Modal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},closeOnOverlayClick:{defaultValue:null,description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:null,description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:_.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch{}export{U as $,_ as M};
//# sourceMappingURL=Modal.7fc781f9.js.map
