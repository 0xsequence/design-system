import{j as d}from"./jsx-runtime-69eee039.js";import{b as F,_ as f,c as I,a as C,$ as E}from"./index-7928010f.js";import{r as o}from"./index-7c191284.js";import{a as N,c as v}from"./index-14f6abe2.js";import{$ as g}from"./index-42006365.js";import{$ as V}from"./index-483e5ee9.js";import{$ as w,h as j,a as q,b as L}from"./Combination-94d08748.js";import{$ as S}from"./index-a4cfa2c4.js";import{$ as _}from"./index-73913900.js";import{B as x}from"./Box-64e6f390.js";import{d as z}from"./WarningIcon-70ed10e0.js";import{I as T}from"./IconButton-30f9ce6b.js";import{S as H}from"./Scroll-8b329036.js";import"./atoms-27ff9aca.js";import{c as B}from"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import{m as D}from"./motion-cc45ae8c.js";const O="Dialog",[R,Re]=F(O),[K,u]=R(O),G=t=>{const{__scopeDialog:s,children:c,open:a,defaultOpen:r,onOpenChange:e,modal:n=!0}=t,l=o.useRef(null),i=o.useRef(null),[p=!1,m]=N({prop:a,defaultProp:r,onChange:e});return o.createElement(K,{scope:s,triggerRef:l,contentRef:i,contentId:g(),titleId:g(),descriptionId:g(),open:p,onOpenChange:m,onOpenToggle:o.useCallback(()=>m($=>!$),[m]),modal:n},c)},P="DialogPortal",[U,M]=R(P,{forceMount:void 0}),Y=t=>{const{__scopeDialog:s,forceMount:c,children:a,container:r}=t,e=u(P,s);return o.createElement(U,{scope:s,forceMount:c},o.Children.map(a,n=>o.createElement(_,{present:c||e.open},o.createElement(S,{asChild:!0,container:r},n))))},y="DialogOverlay",Z=o.forwardRef((t,s)=>{const c=M(y,t.__scopeDialog),{forceMount:a=c.forceMount,...r}=t,e=u(y,t.__scopeDialog);return e.modal?o.createElement(_,{present:a||e.open},o.createElement(J,f({},r,{ref:s}))):null}),J=o.forwardRef((t,s)=>{const{__scopeDialog:c,...a}=t,r=u(y,c);return o.createElement(w,{as:I,allowPinchZoom:!0,shards:[r.contentRef]},o.createElement(C.div,f({"data-state":A(r.open)},a,{ref:s,style:{pointerEvents:"auto",...a.style}})))}),b="DialogContent",Q=o.forwardRef((t,s)=>{const c=M(b,t.__scopeDialog),{forceMount:a=c.forceMount,...r}=t,e=u(b,t.__scopeDialog);return o.createElement(_,{present:a||e.open},e.modal?o.createElement(W,f({},r,{ref:s})):o.createElement(X,f({},r,{ref:s})))}),W=o.forwardRef((t,s)=>{const c=u(b,t.__scopeDialog),a=o.useRef(null),r=E(s,c.contentRef,a);return o.useEffect(()=>{const e=a.current;if(e)return j(e)},[]),o.createElement(k,f({},t,{ref:r,trapFocus:c.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(t.onCloseAutoFocus,e=>{var n;e.preventDefault(),(n=c.triggerRef.current)===null||n===void 0||n.focus()}),onPointerDownOutside:v(t.onPointerDownOutside,e=>{const n=e.detail.originalEvent,l=n.button===0&&n.ctrlKey===!0;(n.button===2||l)&&e.preventDefault()}),onFocusOutside:v(t.onFocusOutside,e=>e.preventDefault())}))}),X=o.forwardRef((t,s)=>{const c=u(b,t.__scopeDialog),a=o.useRef(!1),r=o.useRef(!1);return o.createElement(k,f({},t,{ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:e=>{var n;if((n=t.onCloseAutoFocus)===null||n===void 0||n.call(t,e),!e.defaultPrevented){var l;a.current||(l=c.triggerRef.current)===null||l===void 0||l.focus(),e.preventDefault()}a.current=!1,r.current=!1},onInteractOutside:e=>{var n,l;(n=t.onInteractOutside)===null||n===void 0||n.call(t,e),e.defaultPrevented||(a.current=!0,e.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const i=e.target;((l=c.triggerRef.current)===null||l===void 0?void 0:l.contains(i))&&e.preventDefault(),e.detail.originalEvent.type==="focusin"&&r.current&&e.preventDefault()}}))}),k=o.forwardRef((t,s)=>{const{__scopeDialog:c,trapFocus:a,onOpenAutoFocus:r,onCloseAutoFocus:e,...n}=t,l=u(b,c),i=o.useRef(null),p=E(s,i);return q(),o.createElement(o.Fragment,null,o.createElement(L,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:r,onUnmountAutoFocus:e},o.createElement(V,f({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":A(l.open)},n,{ref:p,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),ee="DialogClose",te=o.forwardRef((t,s)=>{const{__scopeDialog:c,...a}=t,r=u(ee,c);return o.createElement(C.button,f({type:"button"},a,{ref:s,onClick:v(t.onClick,()=>r.onOpenChange(!1))}))});function A(t){return t?"open":"closed"}const oe=G,re=Y,ne=Z,ae=Q,ce=te;var se="fyvr110o fyvr112o fyvr114o fyvr116o fyvr11ho fyvr1qo fyvr1ko fyvr11ni",le=B({defaultClassName:"_5b32m95 fyvr11d8 fyvr11dw fyvr11bg fyvr11by fyvr11c4 fyvr11cm fyvr11ls fyvr11m8 fyvr12vk fyvr12ve fyvr11h0 fyvr11i4 fyvr11hs fyvr11pn fyvr1mo fyvr1om",variantClassNames:{size:{sm:"_5b32m96",lg:"_5b32m97"},autoHeight:{true:"_5b32m98"}},defaultVariants:{},compoundVariants:[[{autoHeight:!0,size:"lg"},"_5b32m99"]]}),ie="fyvr11hs fyvr1ko fyvr1oo fyvr1qo fyvr1mo",de="fyvr11jg fyvr11ko fyvr11h0 fyvr11hs fyvr11ni fyvr1ko fyvr1oo fyvr1qo fyvr1mo";const h=t=>{const{autoHeight:s=!1,backdropColor:c="backgroundBackdrop",children:a,disableAnimation:r=!1,isDismissible:e=!0,onClose:n,scroll:l=!0,size:i="lg",overlayProps:p,contentProps:m}=t;return d.jsx(oe,{modal:!0,defaultOpen:!0,onOpenChange:n,children:d.jsx(re,{forceMount:!0,children:d.jsxs(x,{className:de,children:[d.jsx(x,{as:ne,asChild:!0,background:c,className:ie,forceMount:!0,children:d.jsx(D.div,{initial:r?!1:{opacity:0},animate:r?!1:{opacity:1},exit:r?void 0:{opacity:0},transition:{type:"tween",ease:"linear"},...p},"modal-overlay")}),d.jsx(ae,{asChild:!0,className:le({autoHeight:s,size:i}),forceMount:!0,onEscapeKeyDown:$=>{e?n==null||n():$.preventDefault()},onInteractOutside:$=>{e||$.preventDefault()},children:d.jsxs(D.div,{initial:r?!1:{y:"100%",opacity:i==="sm"?0:1},animate:r?!1:{y:0,opacity:1},exit:r?void 0:{y:"100%",opacity:i==="sm"?0:1},transition:{type:"tween",ease:"easeOut"},...m,children:[l?d.jsx(H,{children:a}):a,e&&d.jsx(ce,{asChild:!0,children:d.jsx(T,{icon:z,backdropFilter:"blur",size:"xs",className:se,"aria-label":"Close"})})]},"modal-content")})]})})})};try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{backdropColor:{defaultValue:null,description:"",name:"backdropColor",required:!1,type:{name:'ConditionalStyle<Values<MapLeafNodes<{ arbitrumDark: string; avalanceDark: string; bscDark: string; ethereumDark: string; gnosisDark: string; polygonDark: string; arbitrumLight: string; avalanceLight: string; bscLight: string; ... 30 more ...; transparent: "transparent"; }, CSSVarFunction>, { ...; }>>'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disableAnimation:{defaultValue:null,description:"",name:"disableAnimation",required:!1,type:{name:"boolean"}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:null,description:"",name:"overlayProps",required:!1,type:{name:"MotionProps"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:"MotionProps"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},autoHeight:{defaultValue:null,description:"",name:"autoHeight",required:!1,type:{name:"boolean"}}}}}catch{}export{h as M};
//# sourceMappingURL=Modal-d1044ecc.js.map
