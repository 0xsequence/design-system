import{r as s}from"./index-BP8_t0zE.js";import{a as H,b as V,c as p}from"./index-Bs37d09a.js";import{c as z}from"./index-D9BCMdC1.js";import{c as q,u as J,P as D}from"./index-BEGV7LFS.js";import{u as Q}from"./index-BISih6-y.js";import{u as W}from"./index-0utPunYv.js";import{j as d}from"./jsx-runtime-CexXSJP5.js";var _="rovingFocusGroup.onEntryFocus",X={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[h,G,Z]=z(b),[$,ve]=q(b,[Z]),[ee,oe]=$(b),N=s.forwardRef((e,r)=>d.jsx(h.Provider,{scope:e.__scopeRovingFocusGroup,children:d.jsx(h.Slot,{scope:e.__scopeRovingFocusGroup,children:d.jsx(te,{...e,ref:r})})}));N.displayName=b;var te=s.forwardRef((e,r)=>{const{__scopeRovingFocusGroup:c,orientation:o,loop:F=!1,dir:g,currentTabStopId:R,defaultCurrentTabStopId:E,onCurrentTabStopIdChange:m,onEntryFocus:a,preventScrollOnEntryFocus:w=!1,...C}=e,v=s.useRef(null),I=J(r,v),t=W(g),[l=null,T]=H({prop:R,defaultProp:E,onChange:m}),[u,i]=s.useState(!1),S=V(a),M=G(c),x=s.useRef(!1),[k,y]=s.useState(0);return s.useEffect(()=>{const n=v.current;if(n)return n.addEventListener(_,S),()=>n.removeEventListener(_,S)},[S]),d.jsx(ee,{scope:c,orientation:o,dir:t,loop:F,currentTabStopId:l,onItemFocus:s.useCallback(n=>T(n),[T]),onItemShiftTab:s.useCallback(()=>i(!0),[]),onFocusableItemAdd:s.useCallback(()=>y(n=>n+1),[]),onFocusableItemRemove:s.useCallback(()=>y(n=>n-1),[]),children:d.jsx(D.div,{tabIndex:u||k===0?-1:0,"data-orientation":o,...C,ref:I,style:{outline:"none",...e.style},onMouseDown:p(e.onMouseDown,()=>{x.current=!0}),onFocus:p(e.onFocus,n=>{const L=!x.current;if(n.target===n.currentTarget&&L&&!u){const P=new CustomEvent(_,X);if(n.currentTarget.dispatchEvent(P),!P.defaultPrevented){const A=M().filter(f=>f.focusable),U=A.find(f=>f.active),B=A.find(f=>f.id===l),Y=[U,B,...A].filter(Boolean).map(f=>f.ref.current);j(Y,w)}}x.current=!1}),onBlur:p(e.onBlur,()=>i(!1))})})}),O="RovingFocusGroupItem",K=s.forwardRef((e,r)=>{const{__scopeRovingFocusGroup:c,focusable:o=!0,active:F=!1,tabStopId:g,...R}=e,E=Q(),m=g||E,a=oe(O,c),w=a.currentTabStopId===m,C=G(c),{onFocusableItemAdd:v,onFocusableItemRemove:I}=a;return s.useEffect(()=>{if(o)return v(),()=>I()},[o,v,I]),d.jsx(h.ItemSlot,{scope:c,id:m,focusable:o,active:F,children:d.jsx(D.span,{tabIndex:w?0:-1,"data-orientation":a.orientation,...R,ref:r,onMouseDown:p(e.onMouseDown,t=>{o?a.onItemFocus(m):t.preventDefault()}),onFocus:p(e.onFocus,()=>a.onItemFocus(m)),onKeyDown:p(e.onKeyDown,t=>{if(t.key==="Tab"&&t.shiftKey){a.onItemShiftTab();return}if(t.target!==t.currentTarget)return;const l=se(t,a.orientation,a.dir);if(l!==void 0){if(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)return;t.preventDefault();let u=C().filter(i=>i.focusable).map(i=>i.ref.current);if(l==="last")u.reverse();else if(l==="prev"||l==="next"){l==="prev"&&u.reverse();const i=u.indexOf(t.currentTarget);u=a.loop?ce(u,i+1):u.slice(i+1)}setTimeout(()=>j(u))}})})})});K.displayName=O;var re={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ne(e,r){return r!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function se(e,r,c){const o=ne(e.key,c);if(!(r==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(r==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return re[o]}function j(e,r=!1){const c=document.activeElement;for(const o of e)if(o===c||(o.focus({preventScroll:r}),document.activeElement!==c))return}function ce(e,r){return e.map((c,o)=>e[(r+o)%e.length])}var Ie=N,be=K;export{be as I,Ie as R,ve as c};
