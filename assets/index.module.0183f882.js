var K=Object.defineProperty;var p=(e,o)=>K(e,"name",{value:o,configurable:!0});import{$ as B,_,a as Y,b as V,g as z,c as P,d as $}from"./index.module.1afbe699.js";import{r as t}from"./jsx-runtime.53f893fc.js";import{a as H,$ as j}from"./index.module.36105670.js";import{$ as q}from"./index.module.435853a6.js";const w="rovingFocusGroup.onEntryFocus",J={bubbles:!1,cancelable:!0},S="RovingFocusGroup",[C,G,Q]=H(S),[W,le]=B(S,[Q]),[X,Z]=W(S),ee=t.exports.forwardRef((e,o)=>t.exports.createElement(C.Provider,{scope:e.__scopeRovingFocusGroup},t.exports.createElement(C.Slot,{scope:e.__scopeRovingFocusGroup},t.exports.createElement(te,_({},e,{ref:o}))))),te=t.exports.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:c,orientation:r,loop:v=!1,dir:x,currentTabStopId:i,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:I,onEntryFocus:F,...m}=e,l=t.exports.useRef(null),f=Y(o,l),u=j(x),[g=null,a]=V({prop:i,defaultProp:s,onChange:I}),[d,A]=t.exports.useState(!1),E=z(F),O=G(c),R=t.exports.useRef(!1),[N,h]=t.exports.useState(0);return t.exports.useEffect(()=>{const n=l.current;if(n)return n.addEventListener(w,E),()=>n.removeEventListener(w,E)},[E]),t.exports.createElement(X,{scope:c,orientation:r,dir:u,loop:v,currentTabStopId:g,onItemFocus:t.exports.useCallback(n=>a(n),[a]),onItemShiftTab:t.exports.useCallback(()=>A(!0),[]),onFocusableItemAdd:t.exports.useCallback(()=>h(n=>n+1),[]),onFocusableItemRemove:t.exports.useCallback(()=>h(n=>n-1),[])},t.exports.createElement(P.div,_({tabIndex:d||N===0?-1:0,"data-orientation":r},m,{ref:f,style:{outline:"none",...e.style},onMouseDown:$(e.onMouseDown,()=>{R.current=!0}),onFocus:$(e.onFocus,n=>{const M=!R.current;if(n.target===n.currentTarget&&M&&!d){const D=new CustomEvent(w,J);if(n.currentTarget.dispatchEvent(D),!D.defaultPrevented){const T=O().filter(b=>b.focusable),L=T.find(b=>b.active),U=T.find(b=>b.id===g),k=[L,U,...T].filter(Boolean).map(b=>b.ref.current);y(k)}}R.current=!1}),onBlur:$(e.onBlur,()=>A(!1))})))}),oe="RovingFocusGroupItem",re=t.exports.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:c,focusable:r=!0,active:v=!1,...x}=e,i=q(),s=Z(oe,c),I=s.currentTabStopId===i,F=G(c),{onFocusableItemAdd:m,onFocusableItemRemove:l}=s;return t.exports.useEffect(()=>{if(r)return m(),()=>l()},[r,m,l]),t.exports.createElement(C.ItemSlot,{scope:c,id:i,focusable:r,active:v},t.exports.createElement(P.span,_({tabIndex:I?0:-1,"data-orientation":s.orientation},x,{ref:o,onMouseDown:$(e.onMouseDown,f=>{r?s.onItemFocus(i):f.preventDefault()}),onFocus:$(e.onFocus,()=>s.onItemFocus(i)),onKeyDown:$(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){s.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const u=se(f,s.orientation,s.dir);if(u!==void 0){f.preventDefault();let a=F().filter(d=>d.focusable).map(d=>d.ref.current);if(u==="last")a.reverse();else if(u==="prev"||u==="next"){u==="prev"&&a.reverse();const d=a.indexOf(f.currentTarget);a=s.loop?fe(a,d+1):a.slice(d+1)}setTimeout(()=>y(a))}})})))}),ne={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ce(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}p(ce,"$d7bdfb9eb0fdf311$var$getDirectionAwareKey");function se(e,o,c){const r=ce(e.key,c);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return ne[r]}p(se,"$d7bdfb9eb0fdf311$var$getFocusIntent");function y(e){const o=document.activeElement;for(const c of e)if(c===o||(c.focus(),document.activeElement!==o))return}p(y,"$d7bdfb9eb0fdf311$var$focusFirst");function fe(e,o){return e.map((c,r)=>e[(o+r)%e.length])}p(fe,"$d7bdfb9eb0fdf311$var$wrapArray");const pe=ee,me=re;export{le as $,pe as a,me as b};
//# sourceMappingURL=index.module.0183f882.js.map