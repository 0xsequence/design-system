var k=Object.defineProperty;var u=(t,e)=>k(t,"name",{value:e,configurable:!0});import{g as O,d as _,b as U,_ as z,c as h,i as A}from"./index.module.c89c0a26.js";import{r}from"./jsx-runtime.7dfe9fe8.js";function K(t,e=globalThis==null?void 0:globalThis.document){const i=O(t);r.exports.useEffect(()=>{const o=u(n=>{n.key==="Escape"&&i(n)},"handleKeyDown");return e.addEventListener("keydown",o),()=>e.removeEventListener("keydown",o)},[i,e])}u(K,"$addc16e1bbe58fd0$export$3a72a57244d6e765");const y="dismissableLayer.update",N="dismissableLayer.pointerDownOutside",H="dismissableLayer.focusOutside";let w;const X=r.exports.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Q=r.exports.forwardRef((t,e)=>{var i;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:n,onPointerDownOutside:c,onFocusOutside:v,onInteractOutside:l,onDismiss:f,...E}=t,a=r.exports.useContext(X),[d,L]=r.exports.useState(null),b=(i=d==null?void 0:d.ownerDocument)!==null&&i!==void 0?i:globalThis==null?void 0:globalThis.document,[,F]=r.exports.useState({}),I=_(e,s=>L(s)),D=Array.from(a.layers),[R]=[...a.layersWithOutsidePointerEventsDisabled].slice(-1),W=D.indexOf(R),x=d?D.indexOf(d):-1,B=a.layersWithOutsidePointerEventsDisabled.size>0,P=x>=W,S=j(s=>{const p=s.target,m=[...a.branches].some($=>$.contains(p));!P||m||(c==null||c(s),l==null||l(s),s.defaultPrevented||f==null||f())},b),g=q(s=>{const p=s.target;[...a.branches].some($=>$.contains(p))||(v==null||v(s),l==null||l(s),s.defaultPrevented||f==null||f())},b);return K(s=>{x===a.layers.size-1&&(n==null||n(s),!s.defaultPrevented&&f&&(s.preventDefault(),f()))},b),r.exports.useEffect(()=>{if(!!d)return o&&(a.layersWithOutsidePointerEventsDisabled.size===0&&(w=b.body.style.pointerEvents,b.body.style.pointerEvents="none"),a.layersWithOutsidePointerEventsDisabled.add(d)),a.layers.add(d),T(),()=>{o&&a.layersWithOutsidePointerEventsDisabled.size===1&&(b.body.style.pointerEvents=w)}},[d,b,o,a]),r.exports.useEffect(()=>()=>{!d||(a.layers.delete(d),a.layersWithOutsidePointerEventsDisabled.delete(d),T())},[d,a]),r.exports.useEffect(()=>{const s=u(()=>F({}),"handleUpdate");return document.addEventListener(y,s),()=>document.removeEventListener(y,s)},[]),r.exports.createElement(U.div,z({},E,{ref:I,style:{pointerEvents:B?P?"auto":"none":void 0,...t.style},onFocusCapture:h(t.onFocusCapture,g.onFocusCapture),onBlurCapture:h(t.onBlurCapture,g.onBlurCapture),onPointerDownCapture:h(t.onPointerDownCapture,S.onPointerDownCapture)}))});function j(t,e=globalThis==null?void 0:globalThis.document){const i=O(t),o=r.exports.useRef(!1),n=r.exports.useRef(()=>{});return r.exports.useEffect(()=>{const c=u(l=>{if(l.target&&!o.current){let E=function(){C(N,i,f,{discrete:!0})};u(E,"handleAndDispatchPointerDownOutsideEvent");const f={originalEvent:l};l.pointerType==="touch"?(e.removeEventListener("click",n.current),n.current=E,e.addEventListener("click",n.current,{once:!0})):E()}o.current=!1},"handlePointerDown"),v=window.setTimeout(()=>{e.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(v),e.removeEventListener("pointerdown",c),e.removeEventListener("click",n.current)}},[e,i]),{onPointerDownCapture:()=>o.current=!0}}u(j,"$5cb92bef7577960e$var$usePointerDownOutside");function q(t,e=globalThis==null?void 0:globalThis.document){const i=O(t),o=r.exports.useRef(!1);return r.exports.useEffect(()=>{const n=u(c=>{c.target&&!o.current&&C(H,i,{originalEvent:c},{discrete:!1})},"handleFocus");return e.addEventListener("focusin",n),()=>e.removeEventListener("focusin",n)},[e,i]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}u(q,"$5cb92bef7577960e$var$useFocusOutside");function T(){const t=new CustomEvent(y);document.dispatchEvent(t)}u(T,"$5cb92bef7577960e$var$dispatchUpdate");function C(t,e,i,{discrete:o}){const n=i.originalEvent.target,c=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:i});e&&n.addEventListener(t,e,{once:!0}),o?A(n,c):n.dispatchEvent(c)}u(C,"$5cb92bef7577960e$var$handleAndDispatchCustomEvent");export{Q as $};
//# sourceMappingURL=index.module.81efd9f0.js.map
