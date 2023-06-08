import{r as u}from"./index-32f9f3e1.js";import{_ as de}from"./extends-98964cd2.js";import{a as ve,b as he}from"./index-2790c83a.js";import{c as Y}from"./index-da5321b3.js";let _=0;function it(){u.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:V()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:V()),_++,()=>{_===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),_--}},[])}function V(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const B="focusScope.autoFocusOnMount",D="focusScope.autoFocusOnUnmount",G={bubbles:!1,cancelable:!0},lt=u.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:c,onUnmountAutoFocus:i,...s}=e,[o,S]=u.useState(null),b=Y(c),g=Y(i),f=u.useRef(null),d=ve(t,a=>S(a)),h=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(r){let a=function(p){if(h.paused||!o)return;const m=p.target;o.contains(m)?f.current=m:C(f.current,{select:!0})},l=function(p){if(h.paused||!o)return;const m=p.relatedTarget;m!==null&&(o.contains(m)||C(f.current,{select:!0}))},v=function(p){const m=document.activeElement;for(const y of p)y.removedNodes.length>0&&(o!=null&&o.contains(m)||C(o))};document.addEventListener("focusin",a),document.addEventListener("focusout",l);const E=new MutationObserver(v);return o&&E.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",a),document.removeEventListener("focusout",l),E.disconnect()}}},[r,o,h.paused]),u.useEffect(()=>{if(o){Z.add(h);const a=document.activeElement;if(!o.contains(a)){const v=new CustomEvent(B,G);o.addEventListener(B,b),o.dispatchEvent(v),v.defaultPrevented||(me(Ee(ne(o)),{select:!0}),document.activeElement===a&&C(o))}return()=>{o.removeEventListener(B,b),setTimeout(()=>{const v=new CustomEvent(D,G);o.addEventListener(D,g),o.dispatchEvent(v),v.defaultPrevented||C(a??document.body,{select:!0}),o.removeEventListener(D,g),Z.remove(h)},0)}}},[o,b,g,h]);const w=u.useCallback(a=>{if(!n&&!r||h.paused)return;const l=a.key==="Tab"&&!a.altKey&&!a.ctrlKey&&!a.metaKey,v=document.activeElement;if(l&&v){const E=a.currentTarget,[p,m]=pe(E);p&&m?!a.shiftKey&&v===m?(a.preventDefault(),n&&C(p,{select:!0})):a.shiftKey&&v===p&&(a.preventDefault(),n&&C(m,{select:!0})):v===E&&a.preventDefault()}},[n,r,h.paused]);return u.createElement(he.div,de({tabIndex:-1},s,{ref:d,onKeyDown:w}))});function me(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(C(r,{select:t}),document.activeElement!==n)return}function pe(e){const t=ne(e),n=z(t,e),r=z(t.reverse(),e);return[n,r]}function ne(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const c=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||c?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function z(e,t){for(const n of e)if(!ge(n,{upTo:t}))return n}function ge(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function be(e){return e instanceof HTMLInputElement&&"select"in e}function C(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&be(e)&&t&&e.select()}}const Z=ye();function ye(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=q(e,t),e.unshift(t)},remove(t){var n;e=q(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function q(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Ee(e){return e.filter(t=>t.tagName!=="A")}var Se=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},T=new WeakMap,N=new WeakMap,F={},U=0,re=function(e){return e&&(e.host||re(e.parentNode))},we=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=re(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return Boolean(n)})},$e=function(e,t,n,r){var c=we(t,Array.isArray(e)?e:[e]);F[n]||(F[n]=new WeakMap);var i=F[n],s=[],o=new Set,S=new Set(c),b=function(f){!f||o.has(f)||(o.add(f),b(f.parentNode))};c.forEach(b);var g=function(f){!f||S.has(f)||Array.prototype.forEach.call(f.children,function(d){if(o.has(d))g(d);else{var h=d.getAttribute(r),w=h!==null&&h!=="false",a=(T.get(d)||0)+1,l=(i.get(d)||0)+1;T.set(d,a),i.set(d,l),s.push(d),a===1&&w&&N.set(d,!0),l===1&&d.setAttribute(n,"true"),w||d.setAttribute(r,"true")}})};return g(t),o.clear(),U++,function(){s.forEach(function(f){var d=T.get(f)-1,h=i.get(f)-1;T.set(f,d),i.set(f,h),d||(N.has(f)||f.removeAttribute(r),N.delete(f)),h||f.removeAttribute(n)}),U--,U||(T=new WeakMap,T=new WeakMap,N=new WeakMap,F={})}},st=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),c=t||Se(e);return c?(r.push.apply(r,Array.from(c.querySelectorAll("[aria-live]"))),$e(r,c,n,"aria-hidden")):function(){return null}},$=function(){return $=Object.assign||function(t){for(var n,r=1,c=arguments.length;r<c;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$.apply(this,arguments)};function ae(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]]);return n}function Ce(e,t,n){if(n||arguments.length===2)for(var r=0,c=t.length,i;r<c;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var M="right-scroll-bar-position",O="width-before-scroll-bar",Te="with-scroll-bars-hidden",Re="--removed-body-scroll-bar-size";function ke(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ae(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var c=n.value;c!==r&&(n.value=r,n.callback(r,c))}}}})[0];return n.callback=t,n.facade}function xe(e,t){return Ae(t||null,function(n){return e.forEach(function(r){return ke(r,n)})})}function Ne(e){return e}function Fe(e,t){t===void 0&&(t=Ne);var n=[],r=!1,c={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var s=t(i,r);return n.push(s),function(){n=n.filter(function(o){return o!==s})}},assignSyncMedium:function(i){for(r=!0;n.length;){var s=n;n=[],s.forEach(i)}n={push:function(o){return i(o)},filter:function(){return n}}},assignMedium:function(i){r=!0;var s=[];if(n.length){var o=n;n=[],o.forEach(i),s=n}var S=function(){var g=s;s=[],g.forEach(i)},b=function(){return Promise.resolve().then(S)};b(),n={push:function(g){s.push(g),b()},filter:function(g){return s=s.filter(g),n}}}};return c}function Pe(e){e===void 0&&(e={});var t=Fe(null);return t.options=$({async:!0,ssr:!1},e),t}var oe=function(e){var t=e.sideCar,n=ae(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,$({},n))};oe.isSideCarExport=!0;function Le(e,t){return e.useMedium(t),oe}var ce=Pe(),j=function(){},I=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:j,onWheelCapture:j,onTouchMoveCapture:j}),c=r[0],i=r[1],s=e.forwardProps,o=e.children,S=e.className,b=e.removeScrollBar,g=e.enabled,f=e.shards,d=e.sideCar,h=e.noIsolation,w=e.inert,a=e.allowPinchZoom,l=e.as,v=l===void 0?"div":l,E=ae(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),p=d,m=xe([n,t]),y=$($({},E),c);return u.createElement(u.Fragment,null,g&&u.createElement(p,{sideCar:ce,removeScrollBar:b,shards:f,noIsolation:h,inert:w,setCallbacks:i,allowPinchZoom:!!a,lockRef:n}),s?u.cloneElement(u.Children.only(o),$($({},y),{ref:m})):u.createElement(v,$({},y,{className:S,ref:m}),o))});I.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};I.classNames={fullWidth:O,zeroRight:M};var Q,Me=function(){if(Q)return Q;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Oe(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Me();return t&&e.setAttribute("nonce",t),e}function Ie(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function We(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var _e=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Oe())&&(Ie(t,n),We(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Be=function(){var e=_e();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ue=function(){var e=Be(),t=function(n){var r=n.styles,c=n.dynamic;return e(r,c),null};return t},De={left:0,top:0,right:0,gap:0},H=function(e){return parseInt(e||"",10)||0},Ue=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],c=t[e==="padding"?"paddingRight":"marginRight"];return[H(n),H(r),H(c)]},je=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return De;var t=Ue(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},He=ue(),Ke=function(e,t,n,r){var c=e.left,i=e.top,s=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Te,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(M,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(O,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(M," .").concat(M,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(O," .").concat(O,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(Re,": ").concat(o,`px;
  }
`)},Xe=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,c=r===void 0?"margin":r,i=u.useMemo(function(){return je(c)},[c]);return u.createElement(He,{styles:Ke(i,!t,c,n?"":"!important")})},K=!1;if(typeof window<"u")try{var P=Object.defineProperty({},"passive",{get:function(){return K=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch{K=!1}var R=K?{passive:!1}:!1,Ye=function(e){return e.tagName==="TEXTAREA"},ie=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Ye(e)&&n[t]==="visible")},Ve=function(e){return ie(e,"overflowY")},Ge=function(e){return ie(e,"overflowX")},J=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=le(e,n);if(r){var c=se(e,n),i=c[1],s=c[2];if(i>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},ze=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ze=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},le=function(e,t){return e==="v"?Ve(t):Ge(t)},se=function(e,t){return e==="v"?ze(t):Ze(t)},qe=function(e,t){return e==="h"&&t==="rtl"?-1:1},Qe=function(e,t,n,r,c){var i=qe(e,window.getComputedStyle(t).direction),s=i*r,o=n.target,S=t.contains(o),b=!1,g=s>0,f=0,d=0;do{var h=se(e,o),w=h[0],a=h[1],l=h[2],v=a-l-i*w;(w||v)&&le(e,o)&&(f+=v,d+=w),o=o.parentNode}while(!S&&o!==document.body||S&&(t.contains(o)||t===o));return(g&&(c&&f===0||!c&&s>f)||!g&&(c&&d===0||!c&&-s>d))&&(b=!0),b},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ee=function(e){return[e.deltaX,e.deltaY]},te=function(e){return e&&"current"in e?e.current:e},Je=function(e,t){return e[0]===t[0]&&e[1]===t[1]},et=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},tt=0,k=[];function nt(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),c=u.useState(tt++)[0],i=u.useState(function(){return ue()})[0],s=u.useRef(e);u.useEffect(function(){s.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var a=Ce([e.lockRef.current],(e.shards||[]).map(te),!0).filter(Boolean);return a.forEach(function(l){return l.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),a.forEach(function(l){return l.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var o=u.useCallback(function(a,l){if("touches"in a&&a.touches.length===2)return!s.current.allowPinchZoom;var v=L(a),E=n.current,p="deltaX"in a?a.deltaX:E[0]-v[0],m="deltaY"in a?a.deltaY:E[1]-v[1],y,W=a.target,A=Math.abs(p)>Math.abs(m)?"h":"v";if("touches"in a&&A==="h"&&W.type==="range")return!1;var x=J(A,W);if(!x)return!0;if(x?y=A:(y=A==="v"?"h":"v",x=J(A,W)),!x)return!1;if(!r.current&&"changedTouches"in a&&(p||m)&&(r.current=y),!y)return!0;var X=r.current||y;return Qe(X,l,a,X==="h"?p:m,!0)},[]),S=u.useCallback(function(a){var l=a;if(!(!k.length||k[k.length-1]!==i)){var v="deltaY"in l?ee(l):L(l),E=t.current.filter(function(y){return y.name===l.type&&y.target===l.target&&Je(y.delta,v)})[0];if(E&&E.should){l.cancelable&&l.preventDefault();return}if(!E){var p=(s.current.shards||[]).map(te).filter(Boolean).filter(function(y){return y.contains(l.target)}),m=p.length>0?o(l,p[0]):!s.current.noIsolation;m&&l.cancelable&&l.preventDefault()}}},[]),b=u.useCallback(function(a,l,v,E){var p={name:a,delta:l,target:v,should:E};t.current.push(p),setTimeout(function(){t.current=t.current.filter(function(m){return m!==p})},1)},[]),g=u.useCallback(function(a){n.current=L(a),r.current=void 0},[]),f=u.useCallback(function(a){b(a.type,ee(a),a.target,o(a,e.lockRef.current))},[]),d=u.useCallback(function(a){b(a.type,L(a),a.target,o(a,e.lockRef.current))},[]);u.useEffect(function(){return k.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",S,R),document.addEventListener("touchmove",S,R),document.addEventListener("touchstart",g,R),function(){k=k.filter(function(a){return a!==i}),document.removeEventListener("wheel",S,R),document.removeEventListener("touchmove",S,R),document.removeEventListener("touchstart",g,R)}},[]);var h=e.removeScrollBar,w=e.inert;return u.createElement(u.Fragment,null,w?u.createElement(i,{styles:et(c)}):null,h?u.createElement(Xe,{gapMode:"margin"}):null)}const rt=Le(ce,nt);var fe=u.forwardRef(function(e,t){return u.createElement(I,$({},e,{ref:t,sideCar:rt}))});fe.classNames=I.classNames;const ft=fe;export{it as $,lt as a,ft as b,st as h};
//# sourceMappingURL=Combination-2ed00a58.js.map
