var ke=Object.defineProperty;var c=(e,t)=>ke(e,"name",{value:t,configurable:!0});import{r as a,j as $,a as F,F as U}from"./jsx-runtime.7dfe9fe8.js";import{B as Pe}from"./Button.79210f66.js";/* empty css                              *//* empty css                              */import{T as ce}from"./Text.b5f03237.js";import{b as ne,_ as w,g as se,d as re,$ as Fe,a as Ne,f as Ie,c as X}from"./index.module.c89c0a26.js";import{$ as j,a as oe}from"./index.module.fff96a1f.js";import{$ as Le}from"./index.module.81efd9f0.js";import{R as Be}from"./index.03eb3243.js";import{_,a as be,b as We,m as ie,A as Ke}from"./index.66b909c7.js";import{g as Ye}from"./TransactionIcon.4da46f7f.js";import{B as le}from"./Box.042e240a.js";import"./iframe.aff18420.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.68759f6a.js";const Ue=a.exports.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?Be.createPortal(a.exports.createElement(ne.div,w({},o,{ref:t})),r):null}),q="focusScope.autoFocusOnMount",G="focusScope.autoFocusOnUnmount",ue={bubbles:!1,cancelable:!0},Ve=a.exports.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:l,...u}=e,[s,b]=a.exports.useState(null),h=se(o),p=se(l),f=a.exports.useRef(null),m=re(t,i=>b(i)),g=a.exports.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.exports.useEffect(()=>{if(r){let i=function(v){if(g.paused||!s)return;const x=v.target;s.contains(x)?f.current=x:M(f.current,{select:!0})},d=function(v){g.paused||!s||s.contains(v.relatedTarget)||M(f.current,{select:!0})};return c(i,"handleFocusIn"),c(d,"handleFocusOut"),document.addEventListener("focusin",i),document.addEventListener("focusout",d),()=>{document.removeEventListener("focusin",i),document.removeEventListener("focusout",d)}}},[r,s,g.paused]),a.exports.useEffect(()=>{if(s){fe.add(g);const i=document.activeElement;if(!s.contains(i)){const v=new CustomEvent(q,ue);s.addEventListener(q,h),s.dispatchEvent(v),v.defaultPrevented||(He(Ze($e(s)),{select:!0}),document.activeElement===i&&M(s))}return()=>{s.removeEventListener(q,h),setTimeout(()=>{const v=new CustomEvent(G,ue);s.addEventListener(G,p),s.dispatchEvent(v),v.defaultPrevented||M(i!=null?i:document.body,{select:!0}),s.removeEventListener(G,p),fe.remove(g)},0)}}},[s,h,p,g]);const S=a.exports.useCallback(i=>{if(!n&&!r||g.paused)return;const d=i.key==="Tab"&&!i.altKey&&!i.ctrlKey&&!i.metaKey,v=document.activeElement;if(d&&v){const x=i.currentTarget,[y,E]=Xe(x);y&&E?!i.shiftKey&&v===E?(i.preventDefault(),n&&M(y,{select:!0})):i.shiftKey&&v===y&&(i.preventDefault(),n&&M(E,{select:!0})):v===x&&i.preventDefault()}},[n,r,g.paused]);return a.exports.createElement(ne.div,w({tabIndex:-1},u,{ref:m,onKeyDown:S}))});function He(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(M(r,{select:t}),document.activeElement!==n)return}c(He,"$d3863c46a17e8a28$var$focusFirst");function Xe(e){const t=$e(e),n=de(t,e),r=de(t.reverse(),e);return[n,r]}c(Xe,"$d3863c46a17e8a28$var$getTabbableEdges");function $e(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}c($e,"$d3863c46a17e8a28$var$getTabbableCandidates");function de(e,t){for(const n of e)if(!je(n,{upTo:t}))return n}c(de,"$d3863c46a17e8a28$var$findVisible");function je(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}c(je,"$d3863c46a17e8a28$var$isHidden");function qe(e){return e instanceof HTMLInputElement&&"select"in e}c(qe,"$d3863c46a17e8a28$var$isSelectableInput");function M(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&qe(e)&&t&&e.select()}}c(M,"$d3863c46a17e8a28$var$focus");const fe=Ge();function Ge(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ve(e,t),e.unshift(t)},remove(t){var n;e=ve(e,t),(n=e[0])===null||n===void 0||n.resume()}}}c(Ge,"$d3863c46a17e8a28$var$createFocusScopesStack");function ve(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}c(ve,"$d3863c46a17e8a28$var$arrayRemove");function Ze(e){return e.filter(t=>t.tagName!=="A")}c(Ze,"$d3863c46a17e8a28$var$removeLinks");let Z=0;function ze(){a.exports.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:pe()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:pe()),Z++,()=>{Z===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Z--}},[])}c(ze,"$3db38b7d1fb3fe6a$export$b7ece24a22aeda8c");function pe(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}c(pe,"$3db38b7d1fb3fe6a$var$createFocusGuard");var K="right-scroll-bar-position",Y="width-before-scroll-bar",Qe="with-scroll-bars-hidden",Je="--removed-body-scroll-bar-size";function et(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}c(et,"assignRef");function tt(e,t){var n=a.exports.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}c(tt,"useCallbackRef");function nt(e,t){return tt(t||null,function(n){return e.forEach(function(r){return et(r,n)})})}c(nt,"useMergeRefs");function rt(e){return e}c(rt,"ItoI");function ot(e,t){t===void 0&&(t=rt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(l){var u=t(l,r);return n.push(u),function(){n=n.filter(function(s){return s!==u})}},assignSyncMedium:function(l){for(r=!0;n.length;){var u=n;n=[],u.forEach(l)}n={push:function(s){return l(s)},filter:function(){return n}}},assignMedium:function(l){r=!0;var u=[];if(n.length){var s=n;n=[],s.forEach(l),u=n}var b=c(function(){var p=u;u=[],p.forEach(l)},"executeQueue"),h=c(function(){return Promise.resolve().then(b)},"cycle");h(),n={push:function(p){u.push(p),h()},filter:function(p){return u=u.filter(p),n}}}};return o}c(ot,"innerCreateMedium");function at(e){e===void 0&&(e={});var t=ot(null);return t.options=_({async:!0,ssr:!1},e),t}c(at,"createSidecarMedium");var xe=c(function(e){var t=e.sideCar,n=be(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return $(r,{..._({},n)})},"SideCar$1");xe.isSideCarExport=!0;function ct(e,t){return e.useMedium(t),xe}c(ct,"exportSidecar");var ye=at(),z=c(function(){},"nothing"),V=a.exports.forwardRef(function(e,t){var n=a.exports.useRef(null),r=a.exports.useState({onScrollCapture:z,onWheelCapture:z,onTouchMoveCapture:z}),o=r[0],l=r[1],u=e.forwardProps,s=e.children,b=e.className,h=e.removeScrollBar,p=e.enabled,f=e.shards,m=e.sideCar,g=e.noIsolation,S=e.inert,i=e.allowPinchZoom,d=e.as,v=d===void 0?"div":d,x=be(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=m,E=nt([n,t]),C=_(_({},x),o);return F(U,{children:[p&&$(y,{sideCar:ye,removeScrollBar:h,shards:f,noIsolation:g,inert:S,setCallbacks:l,allowPinchZoom:!!i,lockRef:n}),u?a.exports.cloneElement(a.exports.Children.only(s),_(_({},C),{ref:E})):$(v,{..._({},C,{className:b,ref:E}),children:s})]})});V.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};V.classNames={fullWidth:Y,zeroRight:K};var st=c(function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__},"getNonce");function it(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=st();return t&&e.setAttribute("nonce",t),e}c(it,"makeStyleTag");function lt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}c(lt,"injectStyles");function ut(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}c(ut,"insertStyleTag");var dt=c(function(){var e=0,t=null;return{add:function(n){e==0&&(t=it())&&(lt(t,n),ut(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},"stylesheetSingleton"),ft=c(function(){var e=dt();return function(t,n){a.exports.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},"styleHookSingleton"),Ce=c(function(){var e=ft(),t=c(function(n){var r=n.styles,o=n.dynamic;return e(r,o),null},"Sheet");return t},"styleSingleton"),vt={left:0,top:0,right:0,gap:0},Q=c(function(e){return parseInt(e||"",10)||0},"parse"),pt=c(function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Q(n),Q(r),Q(o)]},"getOffset"),mt=c(function(e){if(e===void 0&&(e="margin"),typeof window>"u")return vt;var t=pt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},"getGapWidth"),ht=Ce(),gt=c(function(e,t,n,r){var o=e.left,l=e.top,u=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Qe,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(l,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(K,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(Y,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(K," .").concat(K,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Y," .").concat(Y,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(Je,": ").concat(s,`px;
  }
`)},"getStyles"),bt=c(function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,l=a.exports.useMemo(function(){return mt(o)},[o]);return $(ht,{styles:gt(l,!t,o,n?"":"!important")})},"RemoveScrollBar"),ee=!1;if(typeof window<"u")try{var I=Object.defineProperty({},"passive",{get:function(){return ee=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch{ee=!1}var O=ee?{passive:!1}:!1,$t=c(function(e){return e.tagName==="TEXTAREA"},"alwaysContainsScroll"),Ee=c(function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!$t(e)&&n[t]==="visible")},"elementCanBeScrolled"),xt=c(function(e){return Ee(e,"overflowY")},"elementCouldBeVScrolled"),yt=c(function(e){return Ee(e,"overflowX")},"elementCouldBeHScrolled"),me=c(function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=Se(e,n);if(r){var o=we(e,n),l=o[1],u=o[2];if(l>u)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},"locationCouldBeScrolled"),Ct=c(function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},"getVScrollVariables"),Et=c(function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},"getHScrollVariables"),Se=c(function(e,t){return e==="v"?xt(t):yt(t)},"elementCouldBeScrolled"),we=c(function(e,t){return e==="v"?Ct(t):Et(t)},"getScrollVariables"),St=c(function(e,t){return e==="h"&&t==="rtl"?-1:1},"getDirectionFactor"),wt=c(function(e,t,n,r,o){var l=St(e,window.getComputedStyle(t).direction),u=l*r,s=n.target,b=t.contains(s),h=!1,p=u>0,f=0,m=0;do{var g=we(e,s),S=g[0],i=g[1],d=g[2],v=i-d-l*S;(S||v)&&Se(e,s)&&(f+=v,m+=S),s=s.parentNode}while(!b&&s!==document.body||b&&(t.contains(s)||t===s));return(p&&(o&&f===0||!o&&u>f)||!p&&(o&&m===0||!o&&-u>m))&&(h=!0),h},"handleScroll"),L=c(function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},"getTouchXY"),he=c(function(e){return[e.deltaX,e.deltaY]},"getDeltaXY"),ge=c(function(e){return e&&"current"in e?e.current:e},"extractRef"),_t=c(function(e,t){return e[0]===t[0]&&e[1]===t[1]},"deltaCompare"),Mt=c(function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},"generateStyle"),Rt=0,T=[];function Ot(e){var t=a.exports.useRef([]),n=a.exports.useRef([0,0]),r=a.exports.useRef(),o=a.exports.useState(Rt++)[0],l=a.exports.useState(function(){return Ce()})[0],u=a.exports.useRef(e);a.exports.useEffect(function(){u.current=e},[e]),a.exports.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var i=We([e.lockRef.current],(e.shards||[]).map(ge),!0).filter(Boolean);return i.forEach(function(d){return d.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),i.forEach(function(d){return d.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=a.exports.useCallback(function(i,d){if("touches"in i&&i.touches.length===2)return!u.current.allowPinchZoom;var v=L(i),x=n.current,y="deltaX"in i?i.deltaX:x[0]-v[0],E="deltaY"in i?i.deltaY:x[1]-v[1],C,H=i.target,D=Math.abs(y)>Math.abs(E)?"h":"v";if("touches"in i&&D==="h"&&H.type==="range")return!1;var N=me(D,H);if(!N)return!0;if(N?C=D:(C=D==="v"?"h":"v",N=me(D,H)),!N)return!1;if(!r.current&&"changedTouches"in i&&(y||E)&&(r.current=C),!C)return!0;var ae=r.current||C;return wt(ae,d,i,ae==="h"?y:E,!0)},[]),b=a.exports.useCallback(function(i){var d=i;if(!(!T.length||T[T.length-1]!==l)){var v="deltaY"in d?he(d):L(d),x=t.current.filter(function(C){return C.name===d.type&&C.target===d.target&&_t(C.delta,v)})[0];if(x&&x.should){d.cancelable&&d.preventDefault();return}if(!x){var y=(u.current.shards||[]).map(ge).filter(Boolean).filter(function(C){return C.contains(d.target)}),E=y.length>0?s(d,y[0]):!u.current.noIsolation;E&&d.cancelable&&d.preventDefault()}}},[]),h=a.exports.useCallback(function(i,d,v,x){var y={name:i,delta:d,target:v,should:x};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(E){return E!==y})},1)},[]),p=a.exports.useCallback(function(i){n.current=L(i),r.current=void 0},[]),f=a.exports.useCallback(function(i){h(i.type,he(i),i.target,s(i,e.lockRef.current))},[]),m=a.exports.useCallback(function(i){h(i.type,L(i),i.target,s(i,e.lockRef.current))},[]);a.exports.useEffect(function(){return T.push(l),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:m}),document.addEventListener("wheel",b,O),document.addEventListener("touchmove",b,O),document.addEventListener("touchstart",p,O),function(){T=T.filter(function(i){return i!==l}),document.removeEventListener("wheel",b,O),document.removeEventListener("touchmove",b,O),document.removeEventListener("touchstart",p,O)}},[]);var g=e.removeScrollBar,S=e.inert;return F(U,{children:[S?$(l,{styles:Mt(o)}):null,g?$(bt,{gapMode:"margin"}):null]})}c(Ot,"RemoveScrollSideCar");const Tt=ct(ye,Ot);var _e=a.exports.forwardRef(function(e,t){return $(V,{..._({},e,{ref:t,sideCar:Tt})})});_e.classNames=V.classNames;const At=_e;var Dt=c(function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},"getDefaultParent"),A=new WeakMap,B=new WeakMap,W={},J=0,kt=c(function(e,t,n,r){var o=Array.isArray(e)?e:[e];W[n]||(W[n]=new WeakMap);var l=W[n],u=[],s=new Set,b=new Set(o),h=c(function(f){!f||s.has(f)||(s.add(f),h(f.parentNode))},"keep");o.forEach(h);var p=c(function(f){!f||b.has(f)||Array.prototype.forEach.call(f.children,function(m){if(s.has(m))p(m);else{var g=m.getAttribute(r),S=g!==null&&g!=="false",i=(A.get(m)||0)+1,d=(l.get(m)||0)+1;A.set(m,i),l.set(m,d),u.push(m),i===1&&S&&B.set(m,!0),d===1&&m.setAttribute(n,"true"),S||m.setAttribute(r,"true")}})},"deep");return p(t),s.clear(),J++,function(){u.forEach(function(f){var m=A.get(f)-1,g=l.get(f)-1;A.set(f,m),l.set(f,g),m||(B.has(f)||f.removeAttribute(r),B.delete(f)),g||f.removeAttribute(n)}),J--,J||(A=new WeakMap,A=new WeakMap,B=new WeakMap,W={})}},"applyAttributeToOthers"),Pt=c(function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||Dt(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),kt(r,o,n,"aria-hidden")):function(){return null}},"hideOthers");const Me="Dialog",[Re,gn]=Fe(Me),[Ft,R]=Re(Me),Nt=c(e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:l,modal:u=!0}=e,s=a.exports.useRef(null),b=a.exports.useRef(null),[h=!1,p]=Ne({prop:r,defaultProp:o,onChange:l});return a.exports.createElement(Ft,{scope:t,triggerRef:s,contentRef:b,contentId:j(),titleId:j(),descriptionId:j(),open:h,onOpenChange:p,onOpenToggle:a.exports.useCallback(()=>p(f=>!f),[p]),modal:u},n)},"$5d3850c4d0b4e6c7$export$3ddf2d174ce01153"),Oe="DialogPortal",[It,Te]=Re(Oe,{forceMount:void 0}),Lt=c(e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,l=R(Oe,t);return a.exports.createElement(It,{scope:t,forceMount:n},a.exports.Children.map(r,u=>a.exports.createElement(oe,{present:n||l.open},a.exports.createElement(Ue,{asChild:!0,container:o},u))))},"$5d3850c4d0b4e6c7$export$dad7c95542bacce0"),te="DialogOverlay",Bt=a.exports.forwardRef((e,t)=>{const n=Te(te,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,l=R(te,e.__scopeDialog);return l.modal?a.exports.createElement(oe,{present:r||l.open},a.exports.createElement(Wt,w({},o,{ref:t}))):null}),Wt=a.exports.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(te,n);return a.exports.createElement(At,{as:Ie,allowPinchZoom:!0,shards:[o.contentRef]},a.exports.createElement(ne.div,w({"data-state":De(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),P="DialogContent",Kt=a.exports.forwardRef((e,t)=>{const n=Te(P,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,l=R(P,e.__scopeDialog);return a.exports.createElement(oe,{present:r||l.open},l.modal?a.exports.createElement(Yt,w({},o,{ref:t})):a.exports.createElement(Ut,w({},o,{ref:t})))}),Yt=a.exports.forwardRef((e,t)=>{const n=R(P,e.__scopeDialog),r=a.exports.useRef(null),o=re(t,n.contentRef,r);return a.exports.useEffect(()=>{const l=r.current;if(l)return Pt(l)},[]),a.exports.createElement(Ae,w({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:X(e.onCloseAutoFocus,l=>{var u;l.preventDefault(),(u=n.triggerRef.current)===null||u===void 0||u.focus()}),onPointerDownOutside:X(e.onPointerDownOutside,l=>{const u=l.detail.originalEvent,s=u.button===0&&u.ctrlKey===!0;(u.button===2||s)&&l.preventDefault()}),onFocusOutside:X(e.onFocusOutside,l=>l.preventDefault())}))}),Ut=a.exports.forwardRef((e,t)=>{const n=R(P,e.__scopeDialog),r=a.exports.useRef(!1);return a.exports.createElement(Ae,w({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var l;if((l=e.onCloseAutoFocus)===null||l===void 0||l.call(e,o),!o.defaultPrevented){var u;r.current||(u=n.triggerRef.current)===null||u===void 0||u.focus(),o.preventDefault()}r.current=!1},onInteractOutside:o=>{var l,u;(l=e.onInteractOutside)===null||l===void 0||l.call(e,o),o.defaultPrevented||(r.current=!0);const s=o.target;((u=n.triggerRef.current)===null||u===void 0?void 0:u.contains(s))&&o.preventDefault()}}))}),Ae=a.exports.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:l,...u}=e,s=R(P,n),b=a.exports.useRef(null),h=re(t,b);return ze(),a.exports.createElement(a.exports.Fragment,null,a.exports.createElement(Ve,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:l},a.exports.createElement(Le,w({role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":De(s.open)},u,{ref:h,onDismiss:()=>s.onOpenChange(!1)}))),!1)});function De(e){return e?"open":"closed"}c(De,"$5d3850c4d0b4e6c7$var$getState");const Vt=Nt,Ht=Lt,Xt=Bt,jt=Kt;var qt="_5b32m96",Gt="_5b32m95 tnw2ben4 tnw2beng tnw2be80 tnw2be90 tnw2bea0 tnw2beb0 tnw2bek0 tnw2bepp",Zt="_5b32m93 tnw2bek0 tnw2bepf",zt="_5b32m91 tnw2bekw tnw2bem0 tnw2bej8 tnw2bek0 tnw2beo9";const k=c(e=>{const{children:t,onClose:n,closeOnOverlayClick:r=!0,closeOnEscape:o=!0}=e;return $(Vt,{defaultOpen:!0,onOpenChange:n,children:$(Ht,{forceMount:!0,children:F(le,{className:zt,children:[$(Xt,{className:Zt,forceMount:!0,asChild:!0,children:$(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"linear"},children:r&&$(le,{className:qt,children:$(Ye,{})})},"modal-overlay")}),$(jt,{className:Gt,onEscapeKeyDown:()=>{o&&(n==null||n())},forceMount:!0,asChild:!0,children:$(ie.div,{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"tween",ease:"easeOut"},children:t},"modal-content")})]})})})},"Modal");try{k.displayName="Modal",k.__docgenInfo={description:"",displayName:"Modal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},closeOnOverlayClick:{defaultValue:null,description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:null,description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:k.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch{}const bn={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Button } from '../Button'
import { Text } from '../Text'

import { Modal } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => {
  const [isOpen, toggleModal] = useState(true)

  return (
    <>
      <Button onClick={() => toggleModal(!isOpen)}>Open Modal</Button>
      <AnimatePresence>
        {isOpen && <Modal {...args} onClose={() => toggleModal(false)} />}
      </AnimatePresence>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      <Text variant="medium" color="textBody">
        New Dapp
      </Text>
      <Text variant="normal" color="textFaded">
        You can always change these settings later
      </Text>
    </>
  ),
}
`,locationsMap:{default:{startLoc:{col:47,line:15},endLoc:{col:1,line:26},startBody:{col:47,line:15},endBody:{col:1,line:26}}}}},title:"Components/Modal",component:k},Qt=c(e=>{const[t,n]=a.exports.useState(!0);return F(U,{children:[$(Pe,{onClick:()=>n(!t),children:"Open Modal"}),$(Ke,{children:t&&$(k,{...e,onClose:()=>n(!1)})})]})},"Template"),Jt=Qt.bind({});Jt.args={children:F(U,{children:[$(ce,{variant:"medium",color:"textBody",children:"New Dapp"}),$(ce,{variant:"normal",color:"textFaded",children:"You can always change these settings later"})]})};const $n=["Default"];export{Jt as Default,$n as __namedExportsOrder,bn as default};
//# sourceMappingURL=Modal.stories.f531a867.js.map
