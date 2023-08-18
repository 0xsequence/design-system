import{j as l}from"./jsx-runtime-69eee039.js";import{B as ke}from"./Button-48a02c83.js";import{C as ye}from"./Card-3644cb4b.js";import{c as ae,h as Me,a0 as Oe}from"./WarningIcon-54dbaf58.js";import{$ as Le,_ as C,a as he,c as A,d as Ve}from"./index-c0383151.js";import{r as t}from"./index-7c191284.js";import{r as je}from"./index-ecbee218.js";import{a as Ke,b as X,c as g,$ as We}from"./index-006d63ff.js";import{$ as He}from"./index-b785e197.js";import{a as qe,b as Be}from"./index-44d15e57.js";import{$ as Ue}from"./index-baa34397.js";import{$ as Xe}from"./index-57d43a4b.js";import{$ as ge}from"./index-9713685f.js";import{B as K}from"./Box-64e6f390.js";import{I as Ye}from"./IconButton-30f9ce6b.js";import{T as ie}from"./Text-23aecd3e.js";import"./atoms-27ff9aca.js";import{c as ze}from"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import{m as Ge}from"./motion-cc45ae8c.js";import{A as Qe}from"./index-686b454f.js";/* empty css                              */import"./typography-f274f330.js";const Ce="ToastProvider",[ne,Je,Ze]=He("Toast"),[Se,er]=Le("Toast",[Ze]),[et,z]=Se(Ce),_e=e=>{const{__scopeToast:o,label:n="Notification",duration:r=5e3,swipeDirection:a="right",swipeThreshold:d=50,children:f}=e,[m,b]=t.useState(null),[i,y]=t.useState(0),x=t.useRef(!1),N=t.useRef(!1);return t.createElement(ne.Provider,{scope:o},t.createElement(et,{scope:o,label:n,duration:r,swipeDirection:a,swipeThreshold:d,toastCount:i,viewport:m,onViewportChange:b,onToastAdd:t.useCallback(()=>y(P=>P+1),[]),onToastRemove:t.useCallback(()=>y(P=>P-1),[]),isFocusedToastEscapeKeyDownRef:x,isClosePausedRef:N},f))};_e.propTypes={label(e){if(e.label&&typeof e.label=="string"&&!e.label.trim()){const o=`Invalid prop \`label\` supplied to \`${Ce}\`. Expected non-empty \`string\`.`;return new Error(o)}return null}};const tt="ToastViewport",rt=["F8"],te="toast.viewportPause",re="toast.viewportResume",ot=t.forwardRef((e,o)=>{const{__scopeToast:n,hotkey:r=rt,label:a="Notifications ({hotkey})",...d}=e,f=z(tt,n),m=Je(n),b=t.useRef(null),i=t.useRef(null),y=t.useRef(null),x=t.useRef(null),N=he(o,x,f.onViewportChange),P=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),R=f.toastCount>0;t.useEffect(()=>{const c=E=>{var p;r.every($=>E[$]||E.code===$)&&((p=x.current)===null||p===void 0||p.focus())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r]),t.useEffect(()=>{const c=b.current,E=x.current;if(R&&c&&E){const p=()=>{if(!f.isClosePausedRef.current){const w=new CustomEvent(te);E.dispatchEvent(w),f.isClosePausedRef.current=!0}},v=()=>{if(f.isClosePausedRef.current){const w=new CustomEvent(re);E.dispatchEvent(w),f.isClosePausedRef.current=!1}},$=w=>{!c.contains(w.relatedTarget)&&v()},T=()=>{c.contains(document.activeElement)||v()};return c.addEventListener("focusin",p),c.addEventListener("focusout",$),c.addEventListener("pointermove",p),c.addEventListener("pointerleave",T),window.addEventListener("blur",p),window.addEventListener("focus",v),()=>{c.removeEventListener("focusin",p),c.removeEventListener("focusout",$),c.removeEventListener("pointermove",p),c.removeEventListener("pointerleave",T),window.removeEventListener("blur",p),window.removeEventListener("focus",v)}}},[R,f.isClosePausedRef]);const u=t.useCallback(({tabbingDirection:c})=>{const p=m().map(v=>{const $=v.ref.current,T=[$,...xt($)];return c==="forwards"?T:T.reverse()});return(c==="forwards"?p.reverse():p).flat()},[m]);return t.useEffect(()=>{const c=x.current;if(c){const E=p=>{const v=p.altKey||p.ctrlKey||p.metaKey;if(p.key==="Tab"&&!v){const k=document.activeElement,D=p.shiftKey;if(p.target===c&&D){var T;(T=i.current)===null||T===void 0||T.focus();return}const I=u({tabbingDirection:D?"backwards":"forwards"}),L=I.findIndex(s=>s===k);if(ee(I.slice(L+1)))p.preventDefault();else{var w,S;D?(w=i.current)===null||w===void 0||w.focus():(S=y.current)===null||S===void 0||S.focus()}}};return c.addEventListener("keydown",E),()=>c.removeEventListener("keydown",E)}},[m,u]),t.createElement(Be,{ref:b,role:"region","aria-label":a.replace("{hotkey}",P),tabIndex:-1,style:{pointerEvents:R?void 0:"none"}},R&&t.createElement(ce,{ref:i,onFocusFromOutsideViewport:()=>{const c=u({tabbingDirection:"forwards"});ee(c)}}),t.createElement(ne.Slot,{scope:n},t.createElement(A.ol,C({tabIndex:-1},d,{ref:N}))),R&&t.createElement(ce,{ref:y,onFocusFromOutsideViewport:()=>{const c=u({tabbingDirection:"backwards"});ee(c)}}))}),nt="ToastFocusProxy",ce=t.forwardRef((e,o)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...a}=e,d=z(nt,n);return t.createElement(ge,C({"aria-hidden":!0,tabIndex:0},a,{ref:o,style:{position:"fixed"},onFocus:f=>{var m;const b=f.relatedTarget;!((m=d.viewport)!==null&&m!==void 0&&m.contains(b))&&r()}}))}),G="Toast",st="toast.swipeStart",at="toast.swipeMove",it="toast.swipeCancel",ct="toast.swipeEnd",dt=t.forwardRef((e,o)=>{const{forceMount:n,open:r,defaultOpen:a,onOpenChange:d,...f}=e,[m=!0,b]=Ke({prop:r,defaultProp:a,onChange:d});return t.createElement(Xe,{present:n||m},t.createElement(Pe,C({open:m},f,{ref:o,onClose:()=>b(!1),onPause:X(e.onPause),onResume:X(e.onResume),onSwipeStart:g(e.onSwipeStart,i=>{i.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:g(e.onSwipeMove,i=>{const{x:y,y:x}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","move"),i.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${y}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${x}px`)}),onSwipeCancel:g(e.onSwipeCancel,i=>{i.currentTarget.setAttribute("data-swipe","cancel"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:g(e.onSwipeEnd,i=>{const{x:y,y:x}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","end"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${y}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${x}px`),b(!1)})})))}),[lt,ut]=Se(G,{onClose(){}}),Pe=t.forwardRef((e,o)=>{const{__scopeToast:n,type:r="foreground",duration:a,open:d,onClose:f,onEscapeKeyDown:m,onPause:b,onResume:i,onSwipeStart:y,onSwipeMove:x,onSwipeCancel:N,onSwipeEnd:P,...R}=e,u=z(G,n),[c,E]=t.useState(null),p=he(o,s=>E(s)),v=t.useRef(null),$=t.useRef(null),T=a||u.duration,w=t.useRef(0),S=t.useRef(T),k=t.useRef(0),{onToastAdd:D,onToastRemove:J}=u,F=X(()=>{var s;(c==null?void 0:c.contains(document.activeElement))&&((s=u.viewport)===null||s===void 0||s.focus()),f()}),I=t.useCallback(s=>{!s||s===1/0||(window.clearTimeout(k.current),w.current=new Date().getTime(),k.current=window.setTimeout(F,s))},[F]);t.useEffect(()=>{const s=u.viewport;if(s){const h=()=>{I(S.current),i==null||i()},_=()=>{const M=new Date().getTime()-w.current;S.current=S.current-M,window.clearTimeout(k.current),b==null||b()};return s.addEventListener(te,_),s.addEventListener(re,h),()=>{s.removeEventListener(te,_),s.removeEventListener(re,h)}}},[u.viewport,T,b,i,I]),t.useEffect(()=>{d&&!u.isClosePausedRef.current&&I(T)},[d,T,u.isClosePausedRef,I]),t.useEffect(()=>(D(),()=>J()),[D,J]);const L=t.useMemo(()=>c?De(c):null,[c]);return u.viewport?t.createElement(t.Fragment,null,L&&t.createElement(pt,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0},L),t.createElement(lt,{scope:n,onClose:F},je.createPortal(t.createElement(ne.ItemSlot,{scope:n},t.createElement(qe,{asChild:!0,onEscapeKeyDown:g(m,()=>{u.isFocusedToastEscapeKeyDownRef.current||F(),u.isFocusedToastEscapeKeyDownRef.current=!1})},t.createElement(A.li,C({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":u.swipeDirection},R,{ref:p,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:g(e.onKeyDown,s=>{s.key==="Escape"&&(m==null||m(s.nativeEvent),s.nativeEvent.defaultPrevented||(u.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:g(e.onPointerDown,s=>{s.button===0&&(v.current={x:s.clientX,y:s.clientY})}),onPointerMove:g(e.onPointerMove,s=>{if(!v.current)return;const h=s.clientX-v.current.x,_=s.clientY-v.current.y,M=!!$.current,O=["left","right"].includes(u.swipeDirection),V=["left","up"].includes(u.swipeDirection)?Math.min:Math.max,Ae=O?V(0,h):0,Ne=O?0:V(0,_),Z=s.pointerType==="touch"?10:2,j={x:Ae,y:Ne},se={originalEvent:s,delta:j};M?($.current=j,W(at,x,se,{discrete:!1})):de(j,u.swipeDirection,Z)?($.current=j,W(st,y,se,{discrete:!1}),s.target.setPointerCapture(s.pointerId)):(Math.abs(h)>Z||Math.abs(_)>Z)&&(v.current=null)}),onPointerUp:g(e.onPointerUp,s=>{const h=$.current,_=s.target;if(_.hasPointerCapture(s.pointerId)&&_.releasePointerCapture(s.pointerId),$.current=null,v.current=null,h){const M=s.currentTarget,O={originalEvent:s,delta:h};de(h,u.swipeDirection,u.swipeThreshold)?W(ct,P,O,{discrete:!0}):W(it,N,O,{discrete:!0}),M.addEventListener("click",V=>V.preventDefault(),{once:!0})}})})))),u.viewport))):null});Pe.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){const o=`Invalid prop \`type\` supplied to \`${G}\`. Expected \`foreground | background\`.`;return new Error(o)}return null}};const pt=e=>{const{__scopeToast:o,children:n,...r}=e,a=z(G,o),[d,f]=t.useState(!1),[m,b]=t.useState(!1);return Tt(()=>f(!0)),t.useEffect(()=>{const i=window.setTimeout(()=>b(!0),1e3);return()=>window.clearTimeout(i)},[]),m?null:t.createElement(Ue,{asChild:!0},t.createElement(ge,r,d&&t.createElement(t.Fragment,null,a.label," ",n)))},ft=t.forwardRef((e,o)=>{const{__scopeToast:n,...r}=e;return t.createElement(A.div,C({},r,{ref:o}))}),mt=t.forwardRef((e,o)=>{const{__scopeToast:n,...r}=e;return t.createElement(A.div,C({},r,{ref:o}))}),bt="ToastAction",vt=t.forwardRef((e,o)=>{const{altText:n,...r}=e;return n?t.createElement(Ie,{altText:n,asChild:!0},t.createElement(Re,C({},r,{ref:o}))):null});vt.propTypes={altText(e){return e.altText?null:new Error(`Missing prop \`altText\` expected on \`${bt}\``)}};const $t="ToastClose",Re=t.forwardRef((e,o)=>{const{__scopeToast:n,...r}=e,a=ut($t,n);return t.createElement(Ie,{asChild:!0},t.createElement(A.button,C({type:"button"},r,{ref:o,onClick:g(e.onClick,a.onClose)})))}),Ie=t.forwardRef((e,o)=>{const{__scopeToast:n,altText:r,...a}=e;return t.createElement(A.div,C({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0},a,{ref:o}))});function De(e){const o=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&o.push(r.textContent),wt(r)){const a=r.ariaHidden||r.hidden||r.style.display==="none",d=r.dataset.radixToastAnnounceExclude==="";if(!a)if(d){const f=r.dataset.radixToastAnnounceAlt;f&&o.push(f)}else o.push(...De(r))}}),o}function W(e,o,n,{discrete:r}){const a=n.originalEvent.currentTarget,d=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});o&&a.addEventListener(e,o,{once:!0}),r?Ve(a,d):a.dispatchEvent(d)}const de=(e,o,n=0)=>{const r=Math.abs(e.x),a=Math.abs(e.y),d=r>a;return o==="left"||o==="right"?d&&r>n:!d&&a>n};function Tt(e=()=>{}){const o=X(e);We(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(o)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[o])}function wt(e){return e.nodeType===e.ELEMENT_NODE}function xt(e){const o=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)o.push(n.currentNode);return o}function ee(e){const o=document.activeElement;return e.some(n=>n===o?!0:(n.focus(),document.activeElement!==o))}const Et=_e,yt=ot,ht=dt,gt=ft,Ct=mt,St=Re;var _t=ze({defaultClassName:"_6wut8v3",variantClassNames:{variant:{normal:"_6wut8v4",success:"_6wut8v5",error:"_6wut8v6"}},defaultVariants:{},compoundVariants:[]}),Pt="_6wut8v1 fyvr12vh fyvr12vb fyvr11hs fyvr1qo fyvr1mo fyvr128 fyvr118g fyvr11i4 fyvr11h0";const Fe=t.createContext(null),oe=e=>{const{children:o,...n}=e,[r,a]=t.useState(new Set);return l.jsxs(Et,{...n,children:[l.jsxs(Fe.Provider,{value:a,children:[o,l.jsx(Qe,{children:Array.from(r).map(d=>l.jsx(Y,{...d},d.id))})]}),l.jsx(Rt,{})]})},Rt=()=>l.jsx(yt,{className:Pt}),Y=e=>{const{id:o,variant:n,title:r,description:a,icon:d,isDismissible:f=!0,...m}=e,b=()=>{if(d)return l.jsx(d,{});switch(n){case"success":return l.jsx(K,{background:"positive",color:"black",borderRadius:"circle",width:"8",height:"8",placeItems:"center",minWidth:"0",flexShrink:"0",children:l.jsx(Me,{})});case"error":return l.jsx(K,{background:"negative",color:"black",borderRadius:"circle",width:"8",height:"8",placeItems:"center",minWidth:"0",flexShrink:"0",children:l.jsx(ae,{})});default:return null}};return l.jsx(ht,{className:_t({variant:n}),open:!0,forceMount:!0,asChild:!0,duration:n==="error"?1/0:5e3,...m,children:l.jsxs(ye,{as:Ge.li,layoutId:o,layout:!0,initial:{x:"100%"},animate:{x:0},exit:{y:"100%",opacity:0},borderRadius:"md",background:"buttonGlass",backdropFilter:"blur",position:"relative",width:"full",justifyContent:"space-between",children:[l.jsxs(K,{gap:"3",alignItems:"center",children:[b(),l.jsxs(K,{flexDirection:"column",gap:"1",children:[r&&l.jsx(gt,{children:l.jsx(ie,{as:"div",variant:"normal",fontWeight:"bold",color:"text80",children:r})}),l.jsx(Ct,{children:l.jsx(ie,{as:"div",variant:"normal",fontWeight:"medium",color:"text50",children:a})})]})]}),f&&l.jsx(St,{"aria-label":"Close",asChild:!0,children:l.jsx(Ye,{icon:ae,size:"xs"})})]})})},It=()=>{const e=t.useContext(Fe);return o=>{const n={...o,id:Math.random().toString(36).slice(2,12),onOpenChange:r=>{r||e(a=>(a.delete(n),new Set([...a])))}};e(r=>new Set([...r,n]))}};try{oe.displayName="ToastProvider",oe.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}try{Y.displayName="Toast",Y.__docgenInfo={description:"",displayName:"Toast",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"success"'},{value:'"error"'}]}},isDismissible:{defaultValue:null,description:"",name:"isDismissible",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ComponentType<VariantSelection<{ size: { xs: { height: CSSVarFunction; width: CSSVarFunction; }; sm: { height: CSSVarFunction; width: CSSVarFunction; }; md: { ...; }; lg: { ...; }; xl: { ...; }; }; }> & ... 4 more ... & ChildSprinkleProps<...>>"}}}}}catch{}const tr={title:"Components/Toast",component:Y},Q=e=>l.jsx(oe,{swipeDirection:"right",children:l.jsx(Dt,{...e})}),Dt=e=>{const o=It();return l.jsx(ye,{position:"relative",children:l.jsx(ke,{label:"Raise a Toast",onClick:()=>{o({...e,title:e.title+" "+new Date().getMilliseconds()})}})})},H={render:Q,args:{title:"Title",description:"Description"}},q={render:Q,args:{icon:Oe,title:"Transaction Sent",description:"Waiting for confirmation"}},B={render:Q,args:{title:"Success",description:"Description",variant:"success"}},U={render:Q,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var le,ue,pe;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    title: 'Title',
    description: 'Description'
  }
}`,...(pe=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,me,be;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    icon: TransactionIcon,
    title: 'Transaction Sent',
    description: 'Waiting for confirmation'
  }
}`,...(be=(me=q.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ve,$e,Te;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    title: 'Success',
    description: 'Description',
    variant: 'success'
  }
}`,...(Te=($e=B.parameters)==null?void 0:$e.docs)==null?void 0:Te.source}}};var we,xe,Ee;U.parameters={...U.parameters,docs:{...(we=U.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    title: 'Error',
    description: 'The transaction failed to send because the relayer encountered an error. "Not enough gas"',
    variant: 'error'
  }
}`,...(Ee=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};const rr=["Default","WithIcon","Success","Error"];export{H as Default,U as Error,B as Success,q as WithIcon,rr as __namedExportsOrder,tr as default};
//# sourceMappingURL=Toast.stories-9dcb327f.js.map
