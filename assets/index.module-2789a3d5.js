import{_ as ue}from"./extends-9cd95192.js";import{r as y}from"./index-d8ade8ea.js";import{r as ct}from"./index-6cf4ba34.js";import{b as J,$ as lt,a as Te}from"./index.module-4456f0d6.js";import{b as G,c as st}from"./index.module-99b258bb.js";import{$ as ft}from"./index.module-f6547125.js";function k(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function j(e){return["top","bottom"].includes(k(e))?"x":"y"}function pe(e){return e==="y"?"height":"width"}function Pe(e,t,n){let{reference:o,floating:a}=e;const r=o.x+o.width/2-a.width/2,c=o.y+o.height/2-a.height/2,i=j(t),l=pe(i),d=o[l]/2-a[l]/2,p=i==="x";let s;switch(k(t)){case"top":s={x:r,y:o.y-a.height};break;case"bottom":s={x:r,y:o.y+o.height};break;case"right":s={x:o.x+o.width,y:c};break;case"left":s={x:o.x-a.width,y:c};break;default:s={x:o.x,y:o.y}}switch(U(t)){case"start":s[i]-=d*(n&&p?-1:1);break;case"end":s[i]+=d*(n&&p?-1:1)}return s}const dt=async(e,t,n)=>{const{placement:o="bottom",strategy:a="absolute",middleware:r=[],platform:c}=n,i=await(c.isRTL==null?void 0:c.isRTL(t));let l=await c.getElementRects({reference:e,floating:t,strategy:a}),{x:d,y:p}=Pe(l,o,i),s=o,h={},f=0;for(let u=0;u<r.length;u++){const{name:m,fn:g}=r[u],{x:$,y:v,data:w,reset:x}=await g({x:d,y:p,initialPlacement:o,placement:s,strategy:a,middlewareData:h,rects:l,platform:c,elements:{reference:e,floating:t}});d=$??d,p=v??p,h={...h,[m]:{...h[m],...w}},x&&f<=50&&(f++,typeof x=="object"&&(x.placement&&(s=x.placement),x.rects&&(l=x.rects===!0?await c.getElementRects({reference:e,floating:t,strategy:a}):x.rects),{x:d,y:p}=Pe(l,s,i)),u=-1)}return{x:d,y:p,placement:s,strategy:a,middlewareData:h}};function He(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function K(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function I(e,t){var n;t===void 0&&(t={});const{x:o,y:a,platform:r,rects:c,elements:i,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:s="floating",altBoundary:h=!1,padding:f=0}=t,u=He(f),m=i[h?s==="floating"?"reference":"floating":s],g=K(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(m)))==null||n?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(i.floating)),boundary:d,rootBoundary:p,strategy:l})),$=K(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:s==="floating"?{...c.floating,x:o,y:a}:c.reference,offsetParent:await(r.getOffsetParent==null?void 0:r.getOffsetParent(i.floating)),strategy:l}):c[s]);return{top:g.top-$.top+u.top,bottom:$.bottom-g.bottom+u.bottom,left:g.left-$.left+u.left,right:$.right-g.right+u.right}}const ut=Math.min,W=Math.max;function le(e,t,n){return W(e,ut(t,n))}const Ae=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:o=0}=e??{},{x:a,y:r,placement:c,rects:i,platform:l}=t;if(n==null)return{};const d=He(o),p={x:a,y:r},s=j(c),h=U(c),f=pe(s),u=await l.getDimensions(n),m=s==="y"?"top":"left",g=s==="y"?"bottom":"right",$=i.reference[f]+i.reference[s]-p[s]-i.floating[f],v=p[s]-i.reference[s],w=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let x=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0;x===0&&(x=i.floating[f]);const E=$/2-v/2,P=d[m],A=x-u[f]-d[g],b=x/2-u[f]/2+E,R=le(P,b,A),S=(h==="start"?d[m]:d[g])>0&&b!==R&&i.reference[f]<=i.floating[f];return{[s]:p[s]-(S?b<P?P-b:A-b:0),data:{[s]:R,centerOffset:b-R}}}}),pt={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,t=>pt[t])}function ht(e,t,n){n===void 0&&(n=!1);const o=U(e),a=j(e),r=pe(a);let c=a==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(c=Q(c)),{main:c,cross:Q(c)}}const mt={start:"end",end:"start"};function Re(e){return e.replace(/start|end/g,t=>mt[t])}const We=["top","right","bottom","left"];We.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const gt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:a,rects:r,initialPlacement:c,platform:i,elements:l}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:s,fallbackStrategy:h="bestFit",flipAlignment:f=!0,...u}=e,m=k(o),g=s||(m===c||!f?[Q(c)]:function(b){const R=Q(b);return[Re(b),R,Re(R)]}(c)),$=[c,...g],v=await I(t,u),w=[];let x=((n=a.flip)==null?void 0:n.overflows)||[];if(d&&w.push(v[m]),p){const{main:b,cross:R}=ht(o,r,await(i.isRTL==null?void 0:i.isRTL(l.floating)));w.push(v[b],v[R])}if(x=[...x,{placement:o,overflows:w}],!w.every(b=>b<=0)){var E,P;const b=((E=(P=a.flip)==null?void 0:P.index)!=null?E:0)+1,R=$[b];if(R)return{data:{index:b,overflows:x},reset:{placement:R}};let S="bottom";switch(h){case"bestFit":{var A;const M=(A=x.map(N=>[N,N.overflows.filter(C=>C>0).reduce((C,ie)=>C+ie,0)]).sort((N,C)=>N[1]-C[1])[0])==null?void 0:A[0].placement;M&&(S=M);break}case"initialPlacement":S=c}if(o!==S)return{reset:{placement:S}}}return{}}}};function Ee(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ce(e){return We.some(t=>e[t]>=0)}const wt=function(e){let{strategy:t="referenceHidden",...n}=e===void 0?{}:e;return{name:"hide",async fn(o){const{rects:a}=o;switch(t){case"referenceHidden":{const r=Ee(await I(o,{...n,elementContext:"reference"}),a.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Ce(r)}}}case"escaped":{const r=Ee(await I(o,{...n,altBoundary:!0}),a.floating);return{data:{escapedOffsets:r,escaped:Ce(r)}}}default:return{}}}}},yt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,a=await async function(r,c){const{placement:i,platform:l,elements:d}=r,p=await(l.isRTL==null?void 0:l.isRTL(d.floating)),s=k(i),h=U(i),f=j(i)==="x",u=["left","top"].includes(s)?-1:1,m=p&&f?-1:1,g=typeof c=="function"?c(r):c;let{mainAxis:$,crossAxis:v,alignmentAxis:w}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return h&&typeof w=="number"&&(v=h==="end"?-1*w:w),f?{x:v*m,y:$*u}:{x:$*u,y:v*m}}(t,e);return{x:n+a.x,y:o+a.y,data:a}}}};function ke(e){return e==="x"?"y":"x"}const xt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:a}=t,{mainAxis:r=!0,crossAxis:c=!1,limiter:i={fn:g=>{let{x:$,y:v}=g;return{x:$,y:v}}},...l}=e,d={x:n,y:o},p=await I(t,l),s=j(k(a)),h=ke(s);let f=d[s],u=d[h];if(r){const g=s==="y"?"bottom":"right";f=le(f+p[s==="y"?"top":"left"],f,f-p[g])}if(c){const g=h==="y"?"bottom":"right";u=le(u+p[h==="y"?"top":"left"],u,u-p[g])}const m=i.fn({...t,[s]:f,[h]:u});return{...m,data:{x:m.x-n,y:m.y-o}}}}},$t=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:a,rects:r,middlewareData:c}=t,{offset:i=0,mainAxis:l=!0,crossAxis:d=!0}=e,p={x:n,y:o},s=j(a),h=ke(s);let f=p[s],u=p[h];const m=typeof i=="function"?i({...r,placement:a}):i,g=typeof m=="number"?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const E=s==="y"?"height":"width",P=r.reference[s]-r.floating[E]+g.mainAxis,A=r.reference[s]+r.reference[E]-g.mainAxis;f<P?f=P:f>A&&(f=A)}if(d){var $,v,w,x;const E=s==="y"?"width":"height",P=["top","left"].includes(k(a)),A=r.reference[h]-r.floating[E]+(P&&($=(v=c.offset)==null?void 0:v[h])!=null?$:0)+(P?0:g.crossAxis),b=r.reference[h]+r.reference[E]+(P?0:(w=(x=c.offset)==null?void 0:x[h])!=null?w:0)-(P?g.crossAxis:0);u<A?u=A:u>b&&(u=b)}return{[s]:f,[h]:u}}}},vt=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:a,elements:r}=t,{apply:c,...i}=e,l=await I(t,i),d=k(n),p=U(n);let s,h;d==="top"||d==="bottom"?(s=d,h=p===(await(a.isRTL==null?void 0:a.isRTL(r.floating))?"start":"end")?"left":"right"):(h=d,s=p==="end"?"top":"bottom");const f=W(l.left,0),u=W(l.right,0),m=W(l.top,0),g=W(l.bottom,0),$={availableHeight:o.floating.height-(["left","right"].includes(n)?2*(m!==0||g!==0?m+g:W(l.top,l.bottom)):l[s]),availableWidth:o.floating.width-(["top","bottom"].includes(n)?2*(f!==0||u!==0?f+u:W(l.left,l.right)):l[h])},v=await a.getDimensions(r.floating);c==null||c({...t,...$});const w=await a.getDimensions(r.floating);return v.width!==w.width||v.height!==w.height?{reset:{rects:!0}}:{}}}};function Me(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function L(e){if(e==null)return window;if(!Me(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function q(e){return L(e).getComputedStyle(e)}function O(e){return Me(e)?"":e?(e.nodeName||"").toLowerCase():""}function Ne(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function D(e){return e instanceof L(e).HTMLElement}function H(e){return e instanceof L(e).Element}function he(e){return typeof ShadowRoot>"u"?!1:e instanceof L(e).ShadowRoot||e instanceof ShadowRoot}function oe(e){const{overflow:t,overflowX:n,overflowY:o}=q(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function bt(e){return["table","td","th"].includes(O(e))}function De(e){const t=/firefox/i.test(Ne()),n=q(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"}function Fe(){return!/^((?!chrome|android).)*safari/i.test(Ne())}const Oe=Math.min,X=Math.max,ee=Math.round;function _(e,t,n){var o,a,r,c;t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect();let l=1,d=1;t&&D(e)&&(l=e.offsetWidth>0&&ee(i.width)/e.offsetWidth||1,d=e.offsetHeight>0&&ee(i.height)/e.offsetHeight||1);const p=H(e)?L(e):window,s=!Fe()&&n,h=(i.left+(s&&(o=(a=p.visualViewport)==null?void 0:a.offsetLeft)!=null?o:0))/l,f=(i.top+(s&&(r=(c=p.visualViewport)==null?void 0:c.offsetTop)!=null?r:0))/d,u=i.width/l,m=i.height/d;return{width:u,height:m,top:f,right:h+u,bottom:f+m,left:h,x:h,y:f}}function T(e){return(t=e,(t instanceof L(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function re(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ze(e){return _(T(e)).left+re(e).scrollLeft}function Pt(e,t,n){const o=D(t),a=T(t),r=_(e,o&&function(l){const d=_(l);return ee(d.width)!==l.offsetWidth||ee(d.height)!==l.offsetHeight}(t),n==="fixed");let c={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(o||!o&&n!=="fixed")if((O(t)!=="body"||oe(a))&&(c=re(t)),D(t)){const l=_(t,!0);i.x=l.x+t.clientLeft,i.y=l.y+t.clientTop}else a&&(i.x=ze(a));return{x:r.left+c.scrollLeft-i.x,y:r.top+c.scrollTop-i.y,width:r.width,height:r.height}}function Be(e){return O(e)==="html"?e:e.assignedSlot||e.parentNode||(he(e)?e.host:null)||T(e)}function _e(e){return D(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function se(e){const t=L(e);let n=_e(e);for(;n&&bt(n)&&getComputedStyle(n).position==="static";)n=_e(n);return n&&(O(n)==="html"||O(n)==="body"&&getComputedStyle(n).position==="static"&&!De(n))?t:n||function(o){let a=Be(o);for(he(a)&&(a=a.host);D(a)&&!["html","body"].includes(O(a));){if(De(a))return a;a=a.parentNode}return null}(e)||t}function Le(e){if(D(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=_(e);return{width:t.width,height:t.height}}function Ye(e){const t=Be(e);return["html","body","#document"].includes(O(t))?e.ownerDocument.body:D(t)&&oe(t)?t:Ye(t)}function te(e,t){var n;t===void 0&&(t=[]);const o=Ye(e),a=o===((n=e.ownerDocument)==null?void 0:n.body),r=L(o),c=a?[r].concat(r.visualViewport||[],oe(o)?o:[]):o,i=t.concat(c);return a?i:i.concat(te(c))}function Se(e,t,n){return t==="viewport"?K(function(o,a){const r=L(o),c=T(o),i=r.visualViewport;let l=c.clientWidth,d=c.clientHeight,p=0,s=0;if(i){l=i.width,d=i.height;const h=Fe();(h||!h&&a==="fixed")&&(p=i.offsetLeft,s=i.offsetTop)}return{width:l,height:d,x:p,y:s}}(e,n)):H(t)?function(o,a){const r=_(o,!1,a==="fixed"),c=r.top+o.clientTop,i=r.left+o.clientLeft;return{top:c,left:i,x:i,y:c,right:i+o.clientWidth,bottom:c+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}(t,n):K(function(o){var a;const r=T(o),c=re(o),i=(a=o.ownerDocument)==null?void 0:a.body,l=X(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),d=X(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let p=-c.scrollLeft+ze(o);const s=-c.scrollTop;return q(i||r).direction==="rtl"&&(p+=X(r.clientWidth,i?i.clientWidth:0)-l),{width:l,height:d,x:p,y:s}}(T(e)))}function At(e){const t=te(e),n=["absolute","fixed"].includes(q(e).position)&&D(e)?se(e):e;return H(n)?t.filter(o=>H(o)&&function(a,r){const c=r.getRootNode==null?void 0:r.getRootNode();if(a.contains(r))return!0;if(c&&he(c)){let i=r;do{if(i&&a===i)return!0;i=i.parentNode||i.host}while(i)}return!1}(o,n)&&O(o)!=="body"):[]}const Rt={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:a}=e;const r=[...n==="clippingAncestors"?At(t):[].concat(n),o],c=r[0],i=r.reduce((l,d)=>{const p=Se(t,d,a);return l.top=X(p.top,l.top),l.right=Oe(p.right,l.right),l.bottom=Oe(p.bottom,l.bottom),l.left=X(p.left,l.left),l},Se(t,c,a));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const a=D(n),r=T(n);if(n===r)return t;let c={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((a||!a&&o!=="fixed")&&((O(n)!=="body"||oe(r))&&(c=re(n)),D(n))){const l=_(n,!0);i.x=l.x+n.clientLeft,i.y=l.y+n.clientTop}return{...t,x:t.x-c.scrollLeft+i.x,y:t.y-c.scrollTop+i.y}},isElement:H,getDimensions:Le,getOffsetParent:se,getDocumentElement:T,getElementRects:e=>{let{reference:t,floating:n,strategy:o}=e;return{reference:Pt(t,se(n),o),floating:{...Le(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>q(e).direction==="rtl"};function Et(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:a=!0,ancestorResize:r=!0,elementResize:c=!0,animationFrame:i=!1}=o,l=a&&!i,d=r&&!i,p=l||d?[...H(e)?te(e):[],...te(t)]:[];p.forEach(u=>{l&&u.addEventListener("scroll",n,{passive:!0}),d&&u.addEventListener("resize",n)});let s,h=null;if(c){let u=!0;h=new ResizeObserver(()=>{u||n(),u=!1}),H(e)&&!i&&h.observe(e),h.observe(t)}let f=i?_(e):null;return i&&function u(){const m=_(e);!f||m.x===f.x&&m.y===f.y&&m.width===f.width&&m.height===f.height||n(),f=m,s=requestAnimationFrame(u)}(),n(),()=>{var u;p.forEach(m=>{l&&m.removeEventListener("scroll",n),d&&m.removeEventListener("resize",n)}),(u=h)==null||u.disconnect(),h=null,i&&cancelAnimationFrame(s)}}const Ct=(e,t,n)=>dt(e,t,{platform:Rt,...n});var fe=typeof document<"u"?y.useLayoutEffect:y.useEffect;function de(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,a;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!de(e[o],t[o]))return!1;return!0}if(a=Object.keys(e),n=a.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[o]))return!1;for(o=n;o--!==0;){const r=a[o];if(!(r==="_owner"&&e.$$typeof)&&!de(e[r],t[r]))return!1}return!0}return e!==e&&t!==t}function Dt(e){const t=y.useRef(e);return fe(()=>{t.current=e}),t}function Ot(e){let{middleware:t,placement:n="bottom",strategy:o="absolute",whileElementsMounted:a}=e===void 0?{}:e;const r=y.useRef(null),c=y.useRef(null),i=Dt(a),l=y.useRef(null),[d,p]=y.useState({x:null,y:null,strategy:o,placement:n,middlewareData:{}}),[s,h]=y.useState(t);de(s==null?void 0:s.map(w=>{let{options:x}=w;return x}),t==null?void 0:t.map(w=>{let{options:x}=w;return x}))||h(t);const f=y.useCallback(()=>{!r.current||!c.current||Ct(r.current,c.current,{middleware:s,placement:n,strategy:o}).then(w=>{u.current&&ct.flushSync(()=>{p(w)})})},[s,n,o]);fe(()=>{u.current&&f()},[f]);const u=y.useRef(!1);fe(()=>(u.current=!0,()=>{u.current=!1}),[]);const m=y.useCallback(()=>{if(typeof l.current=="function"&&(l.current(),l.current=null),r.current&&c.current)if(i.current){const w=i.current(r.current,c.current,f);l.current=w}else f()},[f,i]),g=y.useCallback(w=>{r.current=w,m()},[m]),$=y.useCallback(w=>{c.current=w,m()},[m]),v=y.useMemo(()=>({reference:r,floating:c}),[]);return y.useMemo(()=>({...d,update:f,refs:v,reference:g,floating:$}),[d,f,v,g,$])}const _t=e=>{const{element:t,padding:n}=e;function o(a){return Object.prototype.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){return o(t)?t.current!=null?Ae({element:t.current,padding:n}).fn(a):{}:t?Ae({element:t,padding:n}).fn(a):{}}}},Lt=y.forwardRef((e,t)=>{const{children:n,width:o=10,height:a=5,...r}=e;return y.createElement(J.svg,ue({},r,{ref:t,width:o,height:a,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:y.createElement("polygon",{points:"0,0 30,0 15,10"}))}),St=Lt,je="Popper",[me,tn]=lt(je),[Tt,Ve]=me(je),Ht=e=>{const{__scopePopper:t,children:n}=e,[o,a]=y.useState(null);return y.createElement(Tt,{scope:t,anchor:o,onAnchorChange:a},n)},Wt="PopperAnchor",kt=y.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...a}=e,r=Ve(Wt,n),c=y.useRef(null),i=Te(t,c);return y.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||c.current)}),o?null:y.createElement(J.div,ue({},a,{ref:i}))}),ne="PopperContent",[Mt,Nt]=me(ne),[Ft,zt]=me(ne,{hasParent:!1,positionUpdateFns:new Set}),Bt=y.forwardRef((e,t)=>{var n,o,a,r,c,i,l,d;const{__scopePopper:p,side:s="bottom",sideOffset:h=0,align:f="center",alignOffset:u=0,arrowPadding:m=0,collisionBoundary:g=[],collisionPadding:$=0,sticky:v="partial",hideWhenDetached:w=!1,avoidCollisions:x=!0,onPlaced:E,...P}=e,A=Ve(ne,p),[b,R]=y.useState(null),S=Te(t,Y=>R(Y)),[M,N]=y.useState(null),C=ft(M),ie=(n=C==null?void 0:C.width)!==null&&n!==void 0?n:0,ge=(o=C==null?void 0:C.height)!==null&&o!==void 0?o:0,Ie=s+(f!=="center"?"-"+f:""),Ue=typeof $=="number"?$:{top:0,right:0,bottom:0,left:0,...$},we=Array.isArray(g)?g:[g],qe=we.length>0,ae={padding:Ue,boundary:we.filter(It),altBoundary:qe},{reference:ye,floating:Ze,strategy:Ge,x:xe,y:$e,placement:Je,middlewareData:F,update:ce}=Ot({strategy:"fixed",placement:Ie,whileElementsMounted:Et,middleware:[Ut(),yt({mainAxis:h+ge,alignmentAxis:u}),x?xt({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?$t():void 0,...ae}):void 0,M?_t({element:M,padding:m}):void 0,x?gt({...ae}):void 0,vt({...ae,apply:({elements:Y,availableWidth:it,availableHeight:at})=>{Y.floating.style.setProperty("--radix-popper-available-width",`${it}px`),Y.floating.style.setProperty("--radix-popper-available-height",`${at}px`)}}),qt({arrowWidth:ie,arrowHeight:ge}),w?wt({strategy:"referenceHidden"}):void 0].filter(Xt)});G(()=>{ye(A.anchor)},[ye,A.anchor]);const z=xe!==null&&$e!==null,[ve,Ke]=Xe(Je),Z=st(E);G(()=>{z&&(Z==null||Z())},[z,Z]);const Qe=(a=F.arrow)===null||a===void 0?void 0:a.x,et=(r=F.arrow)===null||r===void 0?void 0:r.y,tt=((c=F.arrow)===null||c===void 0?void 0:c.centerOffset)!==0,[nt,ot]=y.useState();G(()=>{b&&ot(window.getComputedStyle(b).zIndex)},[b]);const{hasParent:rt,positionUpdateFns:B}=zt(ne,p),V=!rt;y.useLayoutEffect(()=>{if(!V)return B.add(ce),()=>{B.delete(ce)}},[V,B,ce]),G(()=>{V&&z&&Array.from(B).reverse().forEach(Y=>requestAnimationFrame(Y))},[V,z,B]);const be={"data-side":ve,"data-align":Ke,...P,ref:S,style:{...P.style,animation:z?void 0:"none",opacity:(i=F.hide)!==null&&i!==void 0&&i.referenceHidden?0:void 0}};return y.createElement("div",{ref:Ze,"data-radix-popper-content-wrapper":"",style:{position:Ge,left:0,top:0,transform:z?`translate3d(${Math.round(xe)}px, ${Math.round($e)}px, 0)`:"translate3d(0, -200%, 0)",minWidth:"max-content",zIndex:nt,["--radix-popper-transform-origin"]:[(l=F.transformOrigin)===null||l===void 0?void 0:l.x,(d=F.transformOrigin)===null||d===void 0?void 0:d.y].join(" ")},dir:e.dir},y.createElement(Mt,{scope:p,placedSide:ve,onArrowChange:N,arrowX:Qe,arrowY:et,shouldHideArrow:tt},V?y.createElement(Ft,{scope:p,hasParent:!0,positionUpdateFns:B},y.createElement(J.div,be)):y.createElement(J.div,be)))}),Yt="PopperArrow",jt={top:"bottom",right:"left",bottom:"top",left:"right"},Vt=y.forwardRef(function(t,n){const{__scopePopper:o,...a}=t,r=Nt(Yt,o),c=jt[r.placedSide];return y.createElement("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[c]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0}},y.createElement(St,ue({},a,{ref:n,style:{...a.style,display:"block"}})))});function Xt(e){return e!==void 0}function It(e){return e!==null}const Ut=()=>({name:"anchorCssProperties",fn(e){const{rects:t,elements:n}=e,{width:o,height:a}=t.reference;return n.floating.style.setProperty("--radix-popper-anchor-width",`${o}px`),n.floating.style.setProperty("--radix-popper-anchor-height",`${a}px`),{}}}),qt=e=>({name:"transformOrigin",options:e,fn(t){var n,o,a,r,c;const{placement:i,rects:l,middlewareData:d}=t,s=((n=d.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=s?0:e.arrowWidth,f=s?0:e.arrowHeight,[u,m]=Xe(i),g={start:"0%",center:"50%",end:"100%"}[m],$=((o=(a=d.arrow)===null||a===void 0?void 0:a.x)!==null&&o!==void 0?o:0)+h/2,v=((r=(c=d.arrow)===null||c===void 0?void 0:c.y)!==null&&r!==void 0?r:0)+f/2;let w="",x="";return u==="bottom"?(w=s?g:`${$}px`,x=`${-f}px`):u==="top"?(w=s?g:`${$}px`,x=`${l.floating.height+f}px`):u==="right"?(w=`${-f}px`,x=s?g:`${v}px`):u==="left"&&(w=`${l.floating.width+f}px`,x=s?g:`${v}px`),{data:{x:w,y:x}}}});function Xe(e){const[t,n="center"]=e.split("-");return[t,n]}const nn=Ht,on=kt,rn=Bt,an=Vt;export{tn as $,nn as a,on as b,rn as c,an as d};
//# sourceMappingURL=index.module-2789a3d5.js.map
