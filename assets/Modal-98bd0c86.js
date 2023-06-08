import{j as i}from"./jsx-runtime-5c44f2f2.js";import{_ as f}from"./extends-98964cd2.js";import{r as o}from"./index-32f9f3e1.js";import{$ as F,a as v}from"./index-da5321b3.js";import{$ as I,d as N,b as C,a as E}from"./index-2790c83a.js";import{$ as g}from"./index-feb9e7f3.js";import{$ as V}from"./index-955fdaf1.js";import{b as w,h as j,$ as q,a as L}from"./Combination-2ed00a58.js";import{$ as S}from"./index-1d46ede9.js";import{$ as _}from"./index-bfda3ddd.js";import{B as x}from"./Box-28194fa5.js";import{i as z}from"./WarningIcon-c6b3c3c5.js";import{I as T}from"./IconButton-049d46f1.js";import{S as H}from"./Scroll-b72462fb.js";import"./atoms-f7bcb57b.js";import{c as B}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{m as D}from"./motion-2413b055.js";const O="Dialog",[R,Pe]=I(O),[K,u]=R(O),G=t=>{const{__scopeDialog:s,children:c,open:a,defaultOpen:n,onOpenChange:e,modal:r=!0}=t,l=o.useRef(null),d=o.useRef(null),[p=!1,m]=F({prop:a,defaultProp:n,onChange:e});return o.createElement(K,{scope:s,triggerRef:l,contentRef:d,contentId:g(),titleId:g(),descriptionId:g(),open:p,onOpenChange:m,onOpenToggle:o.useCallback(()=>m($=>!$),[m]),modal:r},c)},P="DialogPortal",[U,M]=R(P,{forceMount:void 0}),Y=t=>{const{__scopeDialog:s,forceMount:c,children:a,container:n}=t,e=u(P,s);return o.createElement(U,{scope:s,forceMount:c},o.Children.map(a,r=>o.createElement(_,{present:c||e.open},o.createElement(S,{asChild:!0,container:n},r))))},y="DialogOverlay",Z=o.forwardRef((t,s)=>{const c=M(y,t.__scopeDialog),{forceMount:a=c.forceMount,...n}=t,e=u(y,t.__scopeDialog);return e.modal?o.createElement(_,{present:a||e.open},o.createElement(J,f({},n,{ref:s}))):null}),J=o.forwardRef((t,s)=>{const{__scopeDialog:c,...a}=t,n=u(y,c);return o.createElement(w,{as:N,allowPinchZoom:!0,shards:[n.contentRef]},o.createElement(C.div,f({"data-state":A(n.open)},a,{ref:s,style:{pointerEvents:"auto",...a.style}})))}),b="DialogContent",Q=o.forwardRef((t,s)=>{const c=M(b,t.__scopeDialog),{forceMount:a=c.forceMount,...n}=t,e=u(b,t.__scopeDialog);return o.createElement(_,{present:a||e.open},e.modal?o.createElement(W,f({},n,{ref:s})):o.createElement(X,f({},n,{ref:s})))}),W=o.forwardRef((t,s)=>{const c=u(b,t.__scopeDialog),a=o.useRef(null),n=E(s,c.contentRef,a);return o.useEffect(()=>{const e=a.current;if(e)return j(e)},[]),o.createElement(k,f({},t,{ref:n,trapFocus:c.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(t.onCloseAutoFocus,e=>{var r;e.preventDefault(),(r=c.triggerRef.current)===null||r===void 0||r.focus()}),onPointerDownOutside:v(t.onPointerDownOutside,e=>{const r=e.detail.originalEvent,l=r.button===0&&r.ctrlKey===!0;(r.button===2||l)&&e.preventDefault()}),onFocusOutside:v(t.onFocusOutside,e=>e.preventDefault())}))}),X=o.forwardRef((t,s)=>{const c=u(b,t.__scopeDialog),a=o.useRef(!1),n=o.useRef(!1);return o.createElement(k,f({},t,{ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:e=>{var r;if((r=t.onCloseAutoFocus)===null||r===void 0||r.call(t,e),!e.defaultPrevented){var l;a.current||(l=c.triggerRef.current)===null||l===void 0||l.focus(),e.preventDefault()}a.current=!1,n.current=!1},onInteractOutside:e=>{var r,l;(r=t.onInteractOutside)===null||r===void 0||r.call(t,e),e.defaultPrevented||(a.current=!0,e.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const d=e.target;((l=c.triggerRef.current)===null||l===void 0?void 0:l.contains(d))&&e.preventDefault(),e.detail.originalEvent.type==="focusin"&&n.current&&e.preventDefault()}}))}),k=o.forwardRef((t,s)=>{const{__scopeDialog:c,trapFocus:a,onOpenAutoFocus:n,onCloseAutoFocus:e,...r}=t,l=u(b,c),d=o.useRef(null),p=E(s,d);return q(),o.createElement(o.Fragment,null,o.createElement(L,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:n,onUnmountAutoFocus:e},o.createElement(V,f({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":A(l.open)},r,{ref:p,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),ee="DialogClose",te=o.forwardRef((t,s)=>{const{__scopeDialog:c,...a}=t,n=u(ee,c);return o.createElement(C.button,f({type:"button"},a,{ref:s,onClick:v(t.onClick,()=>n.onOpenChange(!1))}))});function A(t){return t?"open":"closed"}const oe=G,re=Y,ne=Z,ae=Q,ce=te;var se="fyvr110o fyvr112o fyvr114o fyvr116o fyvr11ho fyvr1qo fyvr1ko fyvr11ni",le=B({defaultClassName:"_5b32m95 fyvr11d8 fyvr11dw fyvr11bg fyvr11by fyvr11c4 fyvr11cm fyvr11ls fyvr11m8 fyvr12uk fyvr12ue fyvr11h0 fyvr11i4 fyvr11hs fyvr11pn fyvr1mo fyvr1om",variantClassNames:{size:{sm:"_5b32m96",lg:"_5b32m97"},autoHeight:{true:"_5b32m98"}},defaultVariants:{},compoundVariants:[[{autoHeight:!0,size:"lg"},"_5b32m99"]]}),ie="fyvr11hs fyvr1ko fyvr1oo fyvr1qo fyvr1mo",de="fyvr11jg fyvr11ko fyvr11h0 fyvr11hs fyvr11ni fyvr1ko fyvr1oo fyvr1qo fyvr1mo";const h=t=>{const{autoHeight:s=!1,backdropColor:c="backgroundBackdrop",children:a,disableAnimation:n=!1,isDismissible:e=!0,onClose:r,scroll:l=!0,size:d="lg",overlayProps:p,contentProps:m}=t;return i.jsx(oe,{defaultOpen:!0,onOpenChange:r,children:i.jsx(re,{forceMount:!0,children:i.jsxs(x,{className:de,children:[i.jsx(x,{as:ne,asChild:!0,background:c,className:ie,forceMount:!0,children:i.jsx(D.div,{initial:n?!1:{opacity:0},animate:n?!1:{opacity:1},exit:n?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},...p},"modal-overlay")}),i.jsx(ae,{asChild:!0,className:le({autoHeight:s,size:d}),forceMount:!0,onEscapeKeyDown:$=>{e?r==null||r():$.preventDefault()},onInteractOutside:$=>{e?r==null||r():$.preventDefault()},children:i.jsxs(D.div,{initial:n?!1:{y:"100%"},animate:n?!1:{y:0},exit:n?void 0:{y:"100%"},transition:{type:"tween",ease:"easeOut"},...m,children:[l?i.jsx(H,{children:a}):a,e&&i.jsx(ce,{asChild:!0,children:i.jsx(T,{icon:z,backdropFilter:"blur",size:"xs",className:se,"aria-label":"Close"})})]},"modal-content")})]})})})};try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 29 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}}}catch{}export{h as M};
//# sourceMappingURL=Modal-98bd0c86.js.map
