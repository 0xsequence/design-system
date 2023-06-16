import{j as m}from"./jsx-runtime-5c44f2f2.js";import{b as ve,$ as se,a as A,_ as g,d as we}from"./index-6f43092a.js";import{r as t}from"./index-32f9f3e1.js";import{r as Te}from"./index-81ed4395.js";import{a as xe,b as H,c as C,$ as Ee}from"./index-b52b8797.js";import{$ as ye}from"./index-8f4e5a65.js";import{a as he,b as Ce}from"./index-7b73788f.js";import{$ as ge}from"./index-f4397dff.js";import{$ as _e}from"./index-71218d5e.js";import{$ as ae}from"./index-3d0a8b6c.js";import{g as ee,k as Pe}from"./WarningIcon-c24e1ac7.js";import{B as K}from"./Box-8b392f57.js";import{C as Se}from"./Card-a5e759ae.js";import{I as Re}from"./IconButton-d7084d5a.js";import{T as te}from"./Text-8dd4a94a.js";import"./atoms-8c839198.js";import{c as Ie}from"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import{A as De}from"./index-f81d6c2b.js";import{m as Fe}from"./motion-4bf1f684.js";const ie="ToastProvider",[J,Ae,ke]=ye("Toast"),[ce,It]=ve("Toast",[ke]),[Ne,q]=ce(ie),de=e=>{const{__scopeToast:r,label:n="Notification",duration:o=5e3,swipeDirection:a="right",swipeThreshold:d=50,children:p}=e,[f,b]=t.useState(null),[i,y]=t.useState(0),x=t.useRef(!1),k=t.useRef(!1);return t.createElement(J.Provider,{scope:r},t.createElement(Ne,{scope:r,label:n,duration:o,swipeDirection:a,swipeThreshold:d,toastCount:i,viewport:f,onViewportChange:b,onToastAdd:t.useCallback(()=>y(S=>S+1),[]),onToastRemove:t.useCallback(()=>y(S=>S-1),[]),isFocusedToastEscapeKeyDownRef:x,isClosePausedRef:k},p))};de.propTypes={label(e){if(e.label&&typeof e.label=="string"&&!e.label.trim()){const r=`Invalid prop \`label\` supplied to \`${ie}\`. Expected non-empty \`string\`.`;return new Error(r)}return null}};const Me="ToastViewport",Oe=["F8"],z="toast.viewportPause",G="toast.viewportResume",Le=t.forwardRef((e,r)=>{const{__scopeToast:n,hotkey:o=Oe,label:a="Notifications ({hotkey})",...d}=e,p=q(Me,n),f=Ae(n),b=t.useRef(null),i=t.useRef(null),y=t.useRef(null),x=t.useRef(null),k=se(r,x,p.onViewportChange),S=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),R=p.toastCount>0;t.useEffect(()=>{const c=E=>{var u;o.every(v=>E[v]||E.code===v)&&((u=x.current)===null||u===void 0||u.focus())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[o]),t.useEffect(()=>{const c=b.current,E=x.current;if(R&&c&&E){const u=()=>{if(!p.isClosePausedRef.current){const T=new CustomEvent(z);E.dispatchEvent(T),p.isClosePausedRef.current=!0}},$=()=>{if(p.isClosePausedRef.current){const T=new CustomEvent(G);E.dispatchEvent(T),p.isClosePausedRef.current=!1}},v=T=>{!c.contains(T.relatedTarget)&&$()},w=()=>{c.contains(document.activeElement)||$()};return c.addEventListener("focusin",u),c.addEventListener("focusout",v),c.addEventListener("pointermove",u),c.addEventListener("pointerleave",w),window.addEventListener("blur",u),window.addEventListener("focus",$),()=>{c.removeEventListener("focusin",u),c.removeEventListener("focusout",v),c.removeEventListener("pointermove",u),c.removeEventListener("pointerleave",w),window.removeEventListener("blur",u),window.removeEventListener("focus",$)}}},[R,p.isClosePausedRef]);const l=t.useCallback(({tabbingDirection:c})=>{const u=f().map($=>{const v=$.ref.current,w=[v,...tt(v)];return c==="forwards"?w:w.reverse()});return(c==="forwards"?u.reverse():u).flat()},[f]);return t.useEffect(()=>{const c=x.current;if(c){const E=u=>{const $=u.altKey||u.ctrlKey||u.metaKey;if(u.key==="Tab"&&!$){const N=document.activeElement,D=u.shiftKey;if(u.target===c&&D){var w;(w=i.current)===null||w===void 0||w.focus();return}const I=l({tabbingDirection:D?"backwards":"forwards"}),L=I.findIndex(s=>s===N);if(Y(I.slice(L+1)))u.preventDefault();else{var T,_;D?(T=i.current)===null||T===void 0||T.focus():(_=y.current)===null||_===void 0||_.focus()}}};return c.addEventListener("keydown",E),()=>c.removeEventListener("keydown",E)}},[f,l]),t.createElement(he,{ref:b,role:"region","aria-label":a.replace("{hotkey}",S),tabIndex:-1,style:{pointerEvents:R?void 0:"none"}},R&&t.createElement(oe,{ref:i,onFocusFromOutsideViewport:()=>{const c=l({tabbingDirection:"forwards"});Y(c)}}),t.createElement(J.Slot,{scope:n},t.createElement(A.ol,g({tabIndex:-1},d,{ref:k}))),R&&t.createElement(oe,{ref:y,onFocusFromOutsideViewport:()=>{const c=l({tabbingDirection:"backwards"});Y(c)}}))}),Ve="ToastFocusProxy",oe=t.forwardRef((e,r)=>{const{__scopeToast:n,onFocusFromOutsideViewport:o,...a}=e,d=q(Ve,n);return t.createElement(ae,g({"aria-hidden":!0,tabIndex:0},a,{ref:r,style:{position:"fixed"},onFocus:p=>{var f;const b=p.relatedTarget;!((f=d.viewport)!==null&&f!==void 0&&f.contains(b))&&o()}}))}),U="Toast",je="toast.swipeStart",Ke="toast.swipeMove",We="toast.swipeCancel",He="toast.swipeEnd",qe=t.forwardRef((e,r)=>{const{forceMount:n,open:o,defaultOpen:a,onOpenChange:d,...p}=e,[f=!0,b]=xe({prop:o,defaultProp:a,onChange:d});return t.createElement(_e,{present:n||f},t.createElement(le,g({open:f},p,{ref:r,onClose:()=>b(!1),onPause:H(e.onPause),onResume:H(e.onResume),onSwipeStart:C(e.onSwipeStart,i=>{i.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:C(e.onSwipeMove,i=>{const{x:y,y:x}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","move"),i.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${y}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${x}px`)}),onSwipeCancel:C(e.onSwipeCancel,i=>{i.currentTarget.setAttribute("data-swipe","cancel"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:C(e.onSwipeEnd,i=>{const{x:y,y:x}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","end"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${y}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${x}px`),b(!1)})})))}),[Ue,Xe]=ce(U,{onClose(){}}),le=t.forwardRef((e,r)=>{const{__scopeToast:n,type:o="foreground",duration:a,open:d,onClose:p,onEscapeKeyDown:f,onPause:b,onResume:i,onSwipeStart:y,onSwipeMove:x,onSwipeCancel:k,onSwipeEnd:S,...R}=e,l=q(U,n),[c,E]=t.useState(null),u=se(r,s=>E(s)),$=t.useRef(null),v=t.useRef(null),w=a||l.duration,T=t.useRef(0),_=t.useRef(w),N=t.useRef(0),{onToastAdd:D,onToastRemove:X}=l,F=H(()=>{var s;(c==null?void 0:c.contains(document.activeElement))&&((s=l.viewport)===null||s===void 0||s.focus()),p()}),I=t.useCallback(s=>{!s||s===1/0||(window.clearTimeout(N.current),T.current=new Date().getTime(),N.current=window.setTimeout(F,s))},[F]);t.useEffect(()=>{const s=l.viewport;if(s){const h=()=>{I(_.current),i==null||i()},P=()=>{const M=new Date().getTime()-T.current;_.current=_.current-M,window.clearTimeout(N.current),b==null||b()};return s.addEventListener(z,P),s.addEventListener(G,h),()=>{s.removeEventListener(z,P),s.removeEventListener(G,h)}}},[l.viewport,w,b,i,I]),t.useEffect(()=>{d&&!l.isClosePausedRef.current&&I(w)},[d,w,l.isClosePausedRef,I]),t.useEffect(()=>(D(),()=>X()),[D,X]);const L=t.useMemo(()=>c?fe(c):null,[c]);return l.viewport?t.createElement(t.Fragment,null,L&&t.createElement(Be,{__scopeToast:n,role:"status","aria-live":o==="foreground"?"assertive":"polite","aria-atomic":!0},L),t.createElement(Ue,{scope:n,onClose:F},Te.createPortal(t.createElement(J.ItemSlot,{scope:n},t.createElement(Ce,{asChild:!0,onEscapeKeyDown:C(f,()=>{l.isFocusedToastEscapeKeyDownRef.current||F(),l.isFocusedToastEscapeKeyDownRef.current=!1})},t.createElement(A.li,g({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":l.swipeDirection},R,{ref:u,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:C(e.onKeyDown,s=>{s.key==="Escape"&&(f==null||f(s.nativeEvent),s.nativeEvent.defaultPrevented||(l.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:C(e.onPointerDown,s=>{s.button===0&&($.current={x:s.clientX,y:s.clientY})}),onPointerMove:C(e.onPointerMove,s=>{if(!$.current)return;const h=s.clientX-$.current.x,P=s.clientY-$.current.y,M=!!v.current,O=["left","right"].includes(l.swipeDirection),V=["left","up"].includes(l.swipeDirection)?Math.min:Math.max,be=O?V(0,h):0,$e=O?0:V(0,P),B=s.pointerType==="touch"?10:2,j={x:be,y:$e},Z={originalEvent:s,delta:j};M?(v.current=j,W(Ke,x,Z,{discrete:!1})):re(j,l.swipeDirection,B)?(v.current=j,W(je,y,Z,{discrete:!1}),s.target.setPointerCapture(s.pointerId)):(Math.abs(h)>B||Math.abs(P)>B)&&($.current=null)}),onPointerUp:C(e.onPointerUp,s=>{const h=v.current,P=s.target;if(P.hasPointerCapture(s.pointerId)&&P.releasePointerCapture(s.pointerId),v.current=null,$.current=null,h){const M=s.currentTarget,O={originalEvent:s,delta:h};re(h,l.swipeDirection,l.swipeThreshold)?W(He,S,O,{discrete:!0}):W(We,k,O,{discrete:!0}),M.addEventListener("click",V=>V.preventDefault(),{once:!0})}})})))),l.viewport))):null});le.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){const r=`Invalid prop \`type\` supplied to \`${U}\`. Expected \`foreground | background\`.`;return new Error(r)}return null}};const Be=e=>{const{__scopeToast:r,children:n,...o}=e,a=q(U,r),[d,p]=t.useState(!1),[f,b]=t.useState(!1);return Ze(()=>p(!0)),t.useEffect(()=>{const i=window.setTimeout(()=>b(!0),1e3);return()=>window.clearTimeout(i)},[]),f?null:t.createElement(ge,{asChild:!0},t.createElement(ae,o,d&&t.createElement(t.Fragment,null,a.label," ",n)))},Ye=t.forwardRef((e,r)=>{const{__scopeToast:n,...o}=e;return t.createElement(A.div,g({},o,{ref:r}))}),ze=t.forwardRef((e,r)=>{const{__scopeToast:n,...o}=e;return t.createElement(A.div,g({},o,{ref:r}))}),Ge="ToastAction",Qe=t.forwardRef((e,r)=>{const{altText:n,...o}=e;return n?t.createElement(pe,{altText:n,asChild:!0},t.createElement(ue,g({},o,{ref:r}))):null});Qe.propTypes={altText(e){return e.altText?null:new Error(`Missing prop \`altText\` expected on \`${Ge}\``)}};const Je="ToastClose",ue=t.forwardRef((e,r)=>{const{__scopeToast:n,...o}=e,a=Xe(Je,n);return t.createElement(pe,{asChild:!0},t.createElement(A.button,g({type:"button"},o,{ref:r,onClick:C(e.onClick,a.onClose)})))}),pe=t.forwardRef((e,r)=>{const{__scopeToast:n,altText:o,...a}=e;return t.createElement(A.div,g({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0},a,{ref:r}))});function fe(e){const r=[];return Array.from(e.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&r.push(o.textContent),et(o)){const a=o.ariaHidden||o.hidden||o.style.display==="none",d=o.dataset.radixToastAnnounceExclude==="";if(!a)if(d){const p=o.dataset.radixToastAnnounceAlt;p&&r.push(p)}else r.push(...fe(o))}}),r}function W(e,r,n,{discrete:o}){const a=n.originalEvent.currentTarget,d=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});r&&a.addEventListener(e,r,{once:!0}),o?we(a,d):a.dispatchEvent(d)}const re=(e,r,n=0)=>{const o=Math.abs(e.x),a=Math.abs(e.y),d=o>a;return r==="left"||r==="right"?d&&o>n:!d&&a>n};function Ze(e=()=>{}){const r=H(e);Ee(()=>{let n=0,o=0;return n=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(r)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(o)}},[r])}function et(e){return e.nodeType===e.ELEMENT_NODE}function tt(e){const r=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const a=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||a?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)r.push(n.currentNode);return r}function Y(e){const r=document.activeElement;return e.some(n=>n===r?!0:(n.focus(),document.activeElement!==r))}const ot=de,rt=Le,nt=qe,st=Ye,at=ze,it=ue;var ct=Ie({defaultClassName:"_6wut8v3",variantClassNames:{variant:{normal:"_6wut8v4",success:"_6wut8v5",error:"_6wut8v6"}},defaultVariants:{},compoundVariants:[]}),dt="_6wut8v1 fyvr12vh fyvr12vb fyvr11hs fyvr1qo fyvr1mo fyvr128 fyvr118g fyvr11i4 fyvr11h0";const me=t.createContext(null),ne=e=>{const{children:r,...n}=e,[o,a]=t.useState(new Set);return m.jsxs(ot,{...n,children:[m.jsxs(me.Provider,{value:a,children:[r,m.jsx(De,{children:Array.from(o).map(d=>m.jsx(Q,{...d},d.id))})]}),m.jsx(lt,{})]})},lt=()=>m.jsx(rt,{className:dt}),Q=e=>{const{id:r,variant:n,title:o,description:a,icon:d,isDismissible:p=!0,...f}=e,b=()=>{if(d)return m.jsx(d,{});switch(n){case"success":return m.jsx(K,{background:"positive",color:"black",borderRadius:"circle",width:"8",height:"8",placeItems:"center",minWidth:"0",flexShrink:"0",children:m.jsx(Pe,{})});case"error":return m.jsx(K,{background:"negative",color:"black",borderRadius:"circle",width:"8",height:"8",placeItems:"center",minWidth:"0",flexShrink:"0",children:m.jsx(ee,{})});default:return null}};return m.jsx(nt,{className:ct({variant:n}),open:!0,forceMount:!0,asChild:!0,duration:n==="error"?1/0:5e3,...f,children:m.jsxs(Se,{as:Fe.li,layoutId:r,layout:!0,initial:{x:"100%"},animate:{x:0},exit:{y:"100%",opacity:0},borderRadius:"md",background:"buttonGlass",backdropFilter:"blur",position:"relative",width:"full",justifyContent:"space-between",children:[m.jsxs(K,{gap:"3",alignItems:"center",children:[b(),m.jsxs(K,{flexDirection:"column",gap:"1",children:[o&&m.jsx(st,{children:m.jsx(te,{as:"div",variant:"normal",fontWeight:"bold",color:"text80",children:o})}),m.jsx(at,{children:m.jsx(te,{as:"div",variant:"normal",fontWeight:"medium",color:"text50",children:a})})]})]}),p&&m.jsx(it,{"aria-label":"Close",asChild:!0,children:m.jsx(Re,{icon:ee,size:"xs"})})]})})},Dt=()=>{const e=t.useContext(me);return r=>{const n={...r,id:Math.random().toString(36).slice(2,12),onOpenChange:o=>{o||e(a=>(a.delete(n),new Set([...a])))}};e(o=>new Set([...o,n]))}};try{ne.displayName="ToastProvider",ne.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}try{Q.displayName="Toast",Q.__docgenInfo={description:"",displayName:"Toast",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"error"'},{value:'"success"'}]}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ComponentType<VariantSelection<{ size: { xs: { height: CSSVarFunction; width: CSSVarFunction; }; sm: { height: CSSVarFunction; width: CSSVarFunction; }; md: { ...; }; lg: { ...; }; xl: { ...; }; }; }> & ... 4 more ... & ChildSprinkleProps<...>>"}}}}}catch{}export{Q as T,ne as a,Dt as u};
//# sourceMappingURL=Toast-25128a34.js.map
