var he=Object.defineProperty;var o=(e,t)=>he(e,"name",{value:t,configurable:!0});import{g as G,d as me,b as pe,_ as ge}from"./index.module.1e6815e9.js";import{r as s,j as R,a as ne,F as ae}from"./jsx-runtime.e9e872a3.js";import{a as x,_ as oe,b as be}from"./tslib.es6.03b483f6.js";const D="focusScope.autoFocusOnMount",U="focusScope.autoFocusOnUnmount",z={bubbles:!1,cancelable:!0},lt=s.exports.forwardRef((e,t)=>{const{loop:r=!1,trapped:n=!1,onMountAutoFocus:u,onUnmountAutoFocus:d,...l}=e,[c,y]=s.exports.useState(null),g=G(u),p=G(d),f=s.exports.useRef(null),h=me(t,a=>y(a)),m=s.exports.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.exports.useEffect(()=>{if(n){let a=function(v){if(m.paused||!c)return;const b=v.target;c.contains(b)?f.current=b:C(f.current,{select:!0})},i=function(v){m.paused||!c||c.contains(v.relatedTarget)||C(f.current,{select:!0})};return o(a,"handleFocusIn"),o(i,"handleFocusOut"),document.addEventListener("focusin",a),document.addEventListener("focusout",i),()=>{document.removeEventListener("focusin",a),document.removeEventListener("focusout",i)}}},[n,c,m.paused]),s.exports.useEffect(()=>{if(c){q.add(m);const a=document.activeElement;if(!c.contains(a)){const v=new CustomEvent(D,z);c.addEventListener(D,g),c.dispatchEvent(v),v.defaultPrevented||(ye(xe(ce(c)),{select:!0}),document.activeElement===a&&C(c))}return()=>{c.removeEventListener(D,g),setTimeout(()=>{const v=new CustomEvent(U,z);c.addEventListener(U,p),c.dispatchEvent(v),v.defaultPrevented||C(a!=null?a:document.body,{select:!0}),c.removeEventListener(U,p),q.remove(m)},0)}}},[c,g,p,m]);const w=s.exports.useCallback(a=>{if(!r&&!n||m.paused)return;const i=a.key==="Tab"&&!a.altKey&&!a.ctrlKey&&!a.metaKey,v=document.activeElement;if(i&&v){const b=a.currentTarget,[S,$]=Se(b);S&&$?!a.shiftKey&&v===$?(a.preventDefault(),r&&C(S,{select:!0})):a.shiftKey&&v===S&&(a.preventDefault(),r&&C($,{select:!0})):v===b&&a.preventDefault()}},[r,n,m.paused]);return s.exports.createElement(pe.div,ge({tabIndex:-1},l,{ref:h,onKeyDown:w}))});function ye(e,{select:t=!1}={}){const r=document.activeElement;for(const n of e)if(C(n,{select:t}),document.activeElement!==r)return}o(ye,"$d3863c46a17e8a28$var$focusFirst");function Se(e){const t=ce(e),r=Z(t,e),n=Z(t.reverse(),e);return[r,n]}o(Se,"$d3863c46a17e8a28$var$getTabbableEdges");function ce(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const u=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||u?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}o(ce,"$d3863c46a17e8a28$var$getTabbableCandidates");function Z(e,t){for(const r of e)if(!Ee(r,{upTo:t}))return r}o(Z,"$d3863c46a17e8a28$var$findVisible");function Ee(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}o(Ee,"$d3863c46a17e8a28$var$isHidden");function $e(e){return e instanceof HTMLInputElement&&"select"in e}o($e,"$d3863c46a17e8a28$var$isSelectableInput");function C(e,{select:t=!1}={}){if(e&&e.focus){const r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&$e(e)&&t&&e.select()}}o(C,"$d3863c46a17e8a28$var$focus");const q=we();function we(){let e=[];return{add(t){const r=e[0];t!==r&&(r==null||r.pause()),e=Q(e,t),e.unshift(t)},remove(t){var r;e=Q(e,t),(r=e[0])===null||r===void 0||r.resume()}}}o(we,"$d3863c46a17e8a28$var$createFocusScopesStack");function Q(e,t){const r=[...e],n=r.indexOf(t);return n!==-1&&r.splice(n,1),r}o(Q,"$d3863c46a17e8a28$var$arrayRemove");function xe(e){return e.filter(t=>t.tagName!=="A")}o(xe,"$d3863c46a17e8a28$var$removeLinks");let K=0;function dt(){s.exports.useEffect(()=>{var e,t;const r=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=r[0])!==null&&e!==void 0?e:J()),document.body.insertAdjacentElement("beforeend",(t=r[1])!==null&&t!==void 0?t:J()),K++,()=>{K===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(n=>n.remove()),K--}},[])}o(dt,"$3db38b7d1fb3fe6a$export$b7ece24a22aeda8c");function J(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}o(J,"$3db38b7d1fb3fe6a$var$createFocusGuard");var W="right-scroll-bar-position",_="width-before-scroll-bar",Ce="with-scroll-bars-hidden",Re="--removed-body-scroll-bar-size";function Te(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}o(Te,"assignRef");function ke(e,t){var r=s.exports.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var u=r.value;u!==n&&(r.value=n,r.callback(n,u))}}}})[0];return r.callback=t,r.facade}o(ke,"useCallbackRef");function Ae(e,t){return ke(t||null,function(r){return e.forEach(function(n){return Te(n,r)})})}o(Ae,"useMergeRefs");function Fe(e){return e}o(Fe,"ItoI");function Ne(e,t){t===void 0&&(t=Fe);var r=[],n=!1,u={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(d){var l=t(d,n);return r.push(l),function(){r=r.filter(function(c){return c!==l})}},assignSyncMedium:function(d){for(n=!0;r.length;){var l=r;r=[],l.forEach(d)}r={push:function(c){return d(c)},filter:function(){return r}}},assignMedium:function(d){n=!0;var l=[];if(r.length){var c=r;r=[],c.forEach(d),l=r}var y=o(function(){var p=l;l=[],p.forEach(d)},"executeQueue"),g=o(function(){return Promise.resolve().then(y)},"cycle");g(),r={push:function(p){l.push(p),g()},filter:function(p){return l=l.filter(p),r}}}};return u}o(Ne,"innerCreateMedium");function Le(e){e===void 0&&(e={});var t=Ne(null);return t.options=x({async:!0,ssr:!1},e),t}o(Le,"createSidecarMedium");var ue=o(function(e){var t=e.sideCar,r=oe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return R(n,{...x({},r)})},"SideCar$1");ue.isSideCarExport=!0;function Pe(e,t){return e.useMedium(t),ue}o(Pe,"exportSidecar");var ie=Le(),H=o(function(){},"nothing"),B=s.exports.forwardRef(function(e,t){var r=s.exports.useRef(null),n=s.exports.useState({onScrollCapture:H,onWheelCapture:H,onTouchMoveCapture:H}),u=n[0],d=n[1],l=e.forwardProps,c=e.children,y=e.className,g=e.removeScrollBar,p=e.enabled,f=e.shards,h=e.sideCar,m=e.noIsolation,w=e.inert,a=e.allowPinchZoom,i=e.as,v=i===void 0?"div":i,b=oe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),S=h,$=Ae([r,t]),E=x(x({},b),u);return ne(ae,{children:[p&&R(S,{sideCar:ie,removeScrollBar:g,shards:f,noIsolation:m,inert:w,setCallbacks:d,allowPinchZoom:!!a,lockRef:r}),l?s.exports.cloneElement(s.exports.Children.only(c),x(x({},E),{ref:$})):R(v,{...x({},E,{className:y,ref:$}),children:c})]})});B.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};B.classNames={fullWidth:_,zeroRight:W};var Ie=o(function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__},"getNonce");function Me(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ie();return t&&e.setAttribute("nonce",t),e}o(Me,"makeStyleTag");function We(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}o(We,"injectStyles");function _e(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}o(_e,"insertStyleTag");var Be=o(function(){var e=0,t=null;return{add:function(r){e==0&&(t=Me())&&(We(t,r),_e(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},"stylesheetSingleton"),Oe=o(function(){var e=Be();return function(t,r){s.exports.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},"styleHookSingleton"),se=o(function(){var e=Oe(),t=o(function(r){var n=r.styles,u=r.dynamic;return e(n,u),null},"Sheet");return t},"styleSingleton"),De={left:0,top:0,right:0,gap:0},X=o(function(e){return parseInt(e||"",10)||0},"parse"),Ue=o(function(e){var t=window.getComputedStyle(document.body),r=t[e==="padding"?"paddingLeft":"marginLeft"],n=t[e==="padding"?"paddingTop":"marginTop"],u=t[e==="padding"?"paddingRight":"marginRight"];return[X(r),X(n),X(u)]},"getOffset"),Ke=o(function(e){if(e===void 0&&(e="margin"),typeof window>"u")return De;var t=Ue(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},"getGapWidth"),He=se(),Xe=o(function(e,t,r,n){var u=e.left,d=e.top,l=e.right,c=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(Ce,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(c,"px ").concat(n,`;
  }
  body {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),r==="margin"&&`
    padding-left: `.concat(u,`px;
    padding-top: `).concat(d,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(n,`;
    `),r==="padding"&&"padding-right: ".concat(c,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(W,` {
    right: `).concat(c,"px ").concat(n,`;
  }
  
  .`).concat(_,` {
    margin-right: `).concat(c,"px ").concat(n,`;
  }
  
  .`).concat(W," .").concat(W,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(_," .").concat(_,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body {
    `).concat(Re,": ").concat(c,`px;
  }
`)},"getStyles"),Ye=o(function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,u=n===void 0?"margin":n,d=s.exports.useMemo(function(){return Ke(u)},[u]);return R(He,{styles:Xe(d,!t,u,r?"":"!important")})},"RemoveScrollBar"),j=!1;if(typeof window<"u")try{var L=Object.defineProperty({},"passive",{get:function(){return j=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch{j=!1}var T=j?{passive:!1}:!1,je=o(function(e){return e.tagName==="TEXTAREA"},"alwaysContainsScroll"),le=o(function(e,t){var r=window.getComputedStyle(e);return r[t]!=="hidden"&&!(r.overflowY===r.overflowX&&!je(e)&&r[t]==="visible")},"elementCanBeScrolled"),Ve=o(function(e){return le(e,"overflowY")},"elementCouldBeVScrolled"),Ge=o(function(e){return le(e,"overflowX")},"elementCouldBeHScrolled"),ee=o(function(e,t){var r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var n=de(e,r);if(n){var u=fe(e,r),d=u[1],l=u[2];if(d>l)return!0}r=r.parentNode}while(r&&r!==document.body);return!1},"locationCouldBeScrolled"),ze=o(function(e){var t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;return[t,r,n]},"getVScrollVariables"),Ze=o(function(e){var t=e.scrollLeft,r=e.scrollWidth,n=e.clientWidth;return[t,r,n]},"getHScrollVariables"),de=o(function(e,t){return e==="v"?Ve(t):Ge(t)},"elementCouldBeScrolled"),fe=o(function(e,t){return e==="v"?ze(t):Ze(t)},"getScrollVariables"),qe=o(function(e,t){return e==="h"&&t==="rtl"?-1:1},"getDirectionFactor"),Qe=o(function(e,t,r,n,u){var d=qe(e,window.getComputedStyle(t).direction),l=d*n,c=r.target,y=t.contains(c),g=!1,p=l>0,f=0,h=0;do{var m=fe(e,c),w=m[0],a=m[1],i=m[2],v=a-i-d*w;(w||v)&&de(e,c)&&(f+=v,h+=w),c=c.parentNode}while(!y&&c!==document.body||y&&(t.contains(c)||t===c));return(p&&(u&&f===0||!u&&l>f)||!p&&(u&&h===0||!u&&-l>h))&&(g=!0),g},"handleScroll"),P=o(function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},"getTouchXY"),te=o(function(e){return[e.deltaX,e.deltaY]},"getDeltaXY"),re=o(function(e){return e&&"current"in e?e.current:e},"extractRef"),Je=o(function(e,t){return e[0]===t[0]&&e[1]===t[1]},"deltaCompare"),et=o(function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},"generateStyle"),tt=0,k=[];function rt(e){var t=s.exports.useRef([]),r=s.exports.useRef([0,0]),n=s.exports.useRef(),u=s.exports.useState(tt++)[0],d=s.exports.useState(function(){return se()})[0],l=s.exports.useRef(e);s.exports.useEffect(function(){l.current=e},[e]),s.exports.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(u));var a=be([e.lockRef.current],(e.shards||[]).map(re),!0).filter(Boolean);return a.forEach(function(i){return i.classList.add("allow-interactivity-".concat(u))}),function(){document.body.classList.remove("block-interactivity-".concat(u)),a.forEach(function(i){return i.classList.remove("allow-interactivity-".concat(u))})}}},[e.inert,e.lockRef.current,e.shards]);var c=s.exports.useCallback(function(a,i){if("touches"in a&&a.touches.length===2)return!l.current.allowPinchZoom;var v=P(a),b=r.current,S="deltaX"in a?a.deltaX:b[0]-v[0],$="deltaY"in a?a.deltaY:b[1]-v[1],E,O=a.target,F=Math.abs(S)>Math.abs($)?"h":"v";if("touches"in a&&F==="h"&&O.type==="range")return!1;var N=ee(F,O);if(!N)return!0;if(N?E=F:(E=F==="v"?"h":"v",N=ee(F,O)),!N)return!1;if(!n.current&&"changedTouches"in a&&(S||$)&&(n.current=E),!E)return!0;var V=n.current||E;return Qe(V,i,a,V==="h"?S:$,!0)},[]),y=s.exports.useCallback(function(a){var i=a;if(!(!k.length||k[k.length-1]!==d)){var v="deltaY"in i?te(i):P(i),b=t.current.filter(function(E){return E.name===i.type&&E.target===i.target&&Je(E.delta,v)})[0];if(b&&b.should){i.cancelable&&i.preventDefault();return}if(!b){var S=(l.current.shards||[]).map(re).filter(Boolean).filter(function(E){return E.contains(i.target)}),$=S.length>0?c(i,S[0]):!l.current.noIsolation;$&&i.cancelable&&i.preventDefault()}}},[]),g=s.exports.useCallback(function(a,i,v,b){var S={name:a,delta:i,target:v,should:b};t.current.push(S),setTimeout(function(){t.current=t.current.filter(function($){return $!==S})},1)},[]),p=s.exports.useCallback(function(a){r.current=P(a),n.current=void 0},[]),f=s.exports.useCallback(function(a){g(a.type,te(a),a.target,c(a,e.lockRef.current))},[]),h=s.exports.useCallback(function(a){g(a.type,P(a),a.target,c(a,e.lockRef.current))},[]);s.exports.useEffect(function(){return k.push(d),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",y,T),document.addEventListener("touchmove",y,T),document.addEventListener("touchstart",p,T),function(){k=k.filter(function(a){return a!==d}),document.removeEventListener("wheel",y,T),document.removeEventListener("touchmove",y,T),document.removeEventListener("touchstart",p,T)}},[]);var m=e.removeScrollBar,w=e.inert;return ne(ae,{children:[w?R(d,{styles:et(u)}):null,m?R(Ye,{gapMode:"margin"}):null]})}o(rt,"RemoveScrollSideCar");const nt=Pe(ie,rt);var ve=s.exports.forwardRef(function(e,t){return R(B,{...x({},e,{ref:t,sideCar:nt})})});ve.classNames=B.classNames;const ft=ve;var at=o(function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},"getDefaultParent"),A=new WeakMap,I=new WeakMap,M={},Y=0,ot=o(function(e,t,r,n){var u=Array.isArray(e)?e:[e];M[r]||(M[r]=new WeakMap);var d=M[r],l=[],c=new Set,y=new Set(u),g=o(function(f){!f||c.has(f)||(c.add(f),g(f.parentNode))},"keep");u.forEach(g);var p=o(function(f){!f||y.has(f)||Array.prototype.forEach.call(f.children,function(h){if(c.has(h))p(h);else{var m=h.getAttribute(n),w=m!==null&&m!=="false",a=(A.get(h)||0)+1,i=(d.get(h)||0)+1;A.set(h,a),d.set(h,i),l.push(h),a===1&&w&&I.set(h,!0),i===1&&h.setAttribute(r,"true"),w||h.setAttribute(n,"true")}})},"deep");return p(t),c.clear(),Y++,function(){l.forEach(function(f){var h=A.get(f)-1,m=d.get(f)-1;A.set(f,h),d.set(f,m),h||(I.has(f)||f.removeAttribute(n),I.delete(f)),m||f.removeAttribute(r)}),Y--,Y||(A=new WeakMap,A=new WeakMap,I=new WeakMap,M={})}},"applyAttributeToOthers"),vt=o(function(e,t,r){r===void 0&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),u=t||at(e);return u?(n.push.apply(n,Array.from(u.querySelectorAll("[aria-live]"))),ot(n,u,r,"aria-hidden")):function(){return null}},"hideOthers");export{ft as $,dt as a,lt as b,vt as h};
//# sourceMappingURL=index.482e2958.js.map
