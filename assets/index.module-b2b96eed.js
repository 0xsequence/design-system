import{_ as pt}from"./extends-98964cd2.js";import{r as x}from"./index-d8ade8ea.js";import{r as se}from"./index-ffd4619b.js";import{c as Q,$ as ce,a as Lt,e as K,g as ae}from"./index.module-d15610cf.js";import{$ as le}from"./index.module-45828978.js";function N(t){return t.split("-")[0]}function q(t){return t.split("-")[1]}function X(t){return["top","bottom"].includes(N(t))?"x":"y"}function ht(t){return t==="y"?"height":"width"}function At(t,e,n){let{reference:o,floating:r}=t;const i=o.x+o.width/2-r.width/2,s=o.y+o.height/2-r.height/2,c=X(e),l=ht(c),f=o[l]/2-r[l]/2,m=N(e),a=c==="x";let u;switch(m){case"top":u={x:i,y:o.y-r.height};break;case"bottom":u={x:i,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:s};break;case"left":u={x:o.x-r.width,y:s};break;default:u={x:o.x,y:o.y}}switch(q(e)){case"start":u[c]-=f*(n&&a?-1:1);break;case"end":u[c]+=f*(n&&a?-1:1);break}return u}const fe=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,c=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:m}=At(l,o,c),a=o,u={},d=0;for(let p=0;p<i.length;p++){const{name:h,fn:w}=i[p],{x:v,y:$,data:g,reset:y}=await w({x:f,y:m,initialPlacement:o,placement:a,strategy:r,middlewareData:u,rects:l,platform:s,elements:{reference:t,floating:e}});if(f=v??f,m=$??m,u={...u,[h]:{...u[h],...g}},y&&d<=50){d++,typeof y=="object"&&(y.placement&&(a=y.placement),y.rects&&(l=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:f,y:m}=At(l,a,c)),p=-1;continue}}return{x:f,y:m,placement:a,strategy:r,middlewareData:u}};function de(t){return{top:0,right:0,bottom:0,left:0,...t}}function Mt(t){return typeof t!="number"?de(t):{top:t,right:t,bottom:t,left:t}}function tt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function U(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:i,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:a="floating",altBoundary:u=!1,padding:d=0}=e,p=Mt(d),w=c[u?a==="floating"?"reference":"floating":a],v=tt(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(w)))==null||n?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(c.floating)),boundary:f,rootBoundary:m,strategy:l})),$=tt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:a==="floating"?{...s.floating,x:o,y:r}:s.reference,offsetParent:await(i.getOffsetParent==null?void 0:i.getOffsetParent(c.floating)),strategy:l}):s[a]);return{top:v.top-$.top+p.top,bottom:$.bottom-v.bottom+p.bottom,left:v.left-$.left+p.left,right:$.right-v.right+p.right}}const ue=Math.min,W=Math.max;function lt(t,e,n){return W(t,ue(e,n))}const Pt=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t??{},{x:r,y:i,placement:s,rects:c,platform:l}=e;if(n==null)return{};const f=Mt(o),m={x:r,y:i},a=X(s),u=q(s),d=ht(a),p=await l.getDimensions(n),h=a==="y"?"top":"left",w=a==="y"?"bottom":"right",v=c.reference[d]+c.reference[a]-m[a]-c.floating[d],$=m[a]-c.reference[a],g=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let y=g?a==="y"?g.clientHeight||0:g.clientWidth||0:0;y===0&&(y=c.floating[d]);const P=v/2-$/2,b=f[h],C=y-p[d]-f[w],A=y/2-p[d]/2+P,R=lt(b,A,C),V=(u==="start"?f[h]:f[w])>0&&A!==R&&c.reference[d]<=c.floating[d]?A<b?b-A:C-A:0;return{[a]:m[a]-V,data:{[a]:R,centerOffset:A-R}}}}),pe={left:"right",right:"left",bottom:"top",top:"bottom"};function et(t){return t.replace(/left|right|bottom|top/g,e=>pe[e])}function he(t,e,n){n===void 0&&(n=!1);const o=q(t),r=X(t),i=ht(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=et(s)),{main:s,cross:et(s)}}const me={start:"end",end:"start"};function Ct(t){return t.replace(/start|end/g,e=>me[e])}const ge=["top","right","bottom","left"];function we(t){const e=et(t);return[Ct(t),e,Ct(e)]}const xe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:r,rects:i,initialPlacement:s,platform:c,elements:l}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:a,fallbackStrategy:u="bestFit",flipAlignment:d=!0,...p}=t,h=N(o),v=a||(h===s||!d?[et(s)]:we(s)),$=[s,...v],g=await U(e,p),y=[];let P=((n=r.flip)==null?void 0:n.overflows)||[];if(f&&y.push(g[h]),m){const{main:R,cross:k}=he(o,i,await(c.isRTL==null?void 0:c.isRTL(l.floating)));y.push(g[R],g[k])}if(P=[...P,{placement:o,overflows:y}],!y.every(R=>R<=0)){var b,C;const R=((b=(C=r.flip)==null?void 0:C.index)!=null?b:0)+1,k=$[R];if(k)return{data:{index:R,overflows:P},reset:{placement:k}};let S="bottom";switch(u){case"bestFit":{var A;const V=(A=P.map(O=>[O,O.overflows.filter(H=>H>0).reduce((H,G)=>H+G,0)]).sort((O,H)=>O[1]-H[1])[0])==null?void 0:A[0].placement;V&&(S=V);break}case"initialPlacement":S=s;break}if(o!==S)return{reset:{placement:S}}}return{}}}};function Rt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Ot(t){return ge.some(e=>t[e]>=0)}const ye=function(t){let{strategy:e="referenceHidden",...n}=t===void 0?{}:t;return{name:"hide",async fn(o){const{rects:r}=o;switch(e){case"referenceHidden":{const i=await U(o,{...n,elementContext:"reference"}),s=Rt(i,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ot(s)}}}case"escaped":{const i=await U(o,{...n,altBoundary:!0}),s=Rt(i,r.floating);return{data:{escapedOffsets:s,escaped:Ot(s)}}}default:return{}}}}};async function ve(t,e){const{placement:n,platform:o,elements:r}=t,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=N(n),c=q(n),l=X(n)==="x",f=["left","top"].includes(s)?-1:1,m=i&&l?-1:1,a=typeof e=="function"?e(t):e;let{mainAxis:u,crossAxis:d,alignmentAxis:p}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return c&&typeof p=="number"&&(d=c==="end"?p*-1:p),l?{x:d*m,y:u*f}:{x:u*f,y:d*m}}const $e=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,r=await ve(e,t);return{x:n+r.x,y:o+r.y,data:r}}}};function Tt(t){return t==="x"?"y":"x"}const be=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:v,y:$}=w;return{x:v,y:$}}},...l}=t,f={x:n,y:o},m=await U(e,l),a=X(N(r)),u=Tt(a);let d=f[a],p=f[u];if(i){const w=a==="y"?"top":"left",v=a==="y"?"bottom":"right",$=d+m[w],g=d-m[v];d=lt($,d,g)}if(s){const w=u==="y"?"top":"left",v=u==="y"?"bottom":"right",$=p+m[w],g=p-m[v];p=lt($,p,g)}const h=c.fn({...e,[a]:d,[u]:p});return{...h,data:{x:h.x-n,y:h.y-o}}}}},Ae=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:c=0,mainAxis:l=!0,crossAxis:f=!0}=t,m={x:n,y:o},a=X(r),u=Tt(a);let d=m[a],p=m[u];const h=typeof c=="function"?c({...i,placement:r}):c,w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(l){const P=a==="y"?"height":"width",b=i.reference[a]-i.floating[P]+w.mainAxis,C=i.reference[a]+i.reference[P]-w.mainAxis;d<b?d=b:d>C&&(d=C)}if(f){var v,$,g,y;const P=a==="y"?"width":"height",b=["top","left"].includes(N(r)),C=i.reference[u]-i.floating[P]+(b&&(v=($=s.offset)==null?void 0:$[u])!=null?v:0)+(b?0:w.crossAxis),A=i.reference[u]+i.reference[P]+(b?0:(g=(y=s.offset)==null?void 0:y[u])!=null?g:0)-(b?w.crossAxis:0);p<C?p=C:p>A&&(p=A)}return{[a]:d,[u]:p}}}},Pe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:r,elements:i}=e,{apply:s,...c}=t,l=await U(e,c),f=N(n),m=q(n);let a,u;f==="top"||f==="bottom"?(a=f,u=m===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(u=f,a=m==="end"?"top":"bottom");const d=W(l.left,0),p=W(l.right,0),h=W(l.top,0),w=W(l.bottom,0),v={availableHeight:o.floating.height-(["left","right"].includes(n)?2*(h!==0||w!==0?h+w:W(l.top,l.bottom)):l[a]),availableWidth:o.floating.width-(["top","bottom"].includes(n)?2*(d!==0||p!==0?d+p:W(l.left,l.right)):l[u])},$=await r.getDimensions(i.floating);s==null||s({...e,...v});const g=await r.getDimensions(i.floating);return $.width!==g.width||$.height!==g.height?{reset:{rects:!0}}:{}}}};function kt(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function L(t){if(t==null)return window;if(!kt(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function Z(t){return L(t).getComputedStyle(t)}function D(t){return kt(t)?"":t?(t.nodeName||"").toLowerCase():""}function Ht(){const t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function E(t){return t instanceof L(t).HTMLElement}function M(t){return t instanceof L(t).Element}function Ce(t){return t instanceof L(t).Node}function mt(t){if(typeof ShadowRoot>"u")return!1;const e=L(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function it(t){const{overflow:e,overflowX:n,overflowY:o}=Z(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function Re(t){return["table","td","th"].includes(D(t))}function Wt(t){const e=/firefox/i.test(Ht()),n=Z(t);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||e&&n.willChange==="filter"||e&&(n.filter?n.filter!=="none":!1)}function Nt(){return!/^((?!chrome|android).)*safari/i.test(Ht())}const Et=Math.min,I=Math.max,nt=Math.round;function _(t,e,n){var o,r,i,s;e===void 0&&(e=!1),n===void 0&&(n=!1);const c=t.getBoundingClientRect();let l=1,f=1;e&&E(t)&&(l=t.offsetWidth>0&&nt(c.width)/t.offsetWidth||1,f=t.offsetHeight>0&&nt(c.height)/t.offsetHeight||1);const m=M(t)?L(t):window,a=!Nt()&&n,u=(c.left+(a&&(o=(r=m.visualViewport)==null?void 0:r.offsetLeft)!=null?o:0))/l,d=(c.top+(a&&(i=(s=m.visualViewport)==null?void 0:s.offsetTop)!=null?i:0))/f,p=c.width/l,h=c.height/f;return{width:p,height:h,top:d,right:u+p,bottom:d+h,left:u,x:u,y:d}}function T(t){return((Ce(t)?t.ownerDocument:t.document)||window.document).documentElement}function st(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Vt(t){return _(T(t)).left+st(t).scrollLeft}function Oe(t){const e=_(t);return nt(e.width)!==t.offsetWidth||nt(e.height)!==t.offsetHeight}function Ee(t,e,n){const o=E(e),r=T(e),i=_(t,o&&Oe(e),n==="fixed");let s={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(o||!o&&n!=="fixed")if((D(e)!=="body"||it(r))&&(s=st(e)),E(e)){const l=_(e,!0);c.x=l.x+e.clientLeft,c.y=l.y+e.clientTop}else r&&(c.x=Vt(r));return{x:i.left+s.scrollLeft-c.x,y:i.top+s.scrollTop-c.y,width:i.width,height:i.height}}function Ft(t){return D(t)==="html"?t:t.assignedSlot||t.parentNode||(mt(t)?t.host:null)||T(t)}function St(t){return!E(t)||getComputedStyle(t).position==="fixed"?null:t.offsetParent}function Se(t){let e=Ft(t);for(mt(e)&&(e=e.host);E(e)&&!["html","body"].includes(D(e));){if(Wt(e))return e;e=e.parentNode}return null}function ft(t){const e=L(t);let n=St(t);for(;n&&Re(n)&&getComputedStyle(n).position==="static";)n=St(n);return n&&(D(n)==="html"||D(n)==="body"&&getComputedStyle(n).position==="static"&&!Wt(n))?e:n||Se(t)||e}function Dt(t){if(E(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=_(t);return{width:e.width,height:e.height}}function De(t){let{rect:e,offsetParent:n,strategy:o}=t;const r=E(n),i=T(n);if(n===i)return e;let s={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if((r||!r&&o!=="fixed")&&((D(n)!=="body"||it(i))&&(s=st(n)),E(n))){const l=_(n,!0);c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return{...e,x:e.x-s.scrollLeft+c.x,y:e.y-s.scrollTop+c.y}}function _e(t,e){const n=L(t),o=T(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,c=0,l=0;if(r){i=r.width,s=r.height;const f=Nt();(f||!f&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:i,height:s,x:c,y:l}}function Le(t){var e;const n=T(t),o=st(t),r=(e=t.ownerDocument)==null?void 0:e.body,i=I(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=I(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let c=-o.scrollLeft+Vt(t);const l=-o.scrollTop;return Z(r||n).direction==="rtl"&&(c+=I(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:s,x:c,y:l}}function Bt(t){const e=Ft(t);return["html","body","#document"].includes(D(e))?t.ownerDocument.body:E(e)&&it(e)?e:Bt(e)}function ot(t,e){var n;e===void 0&&(e=[]);const o=Bt(t),r=o===((n=t.ownerDocument)==null?void 0:n.body),i=L(o),s=r?[i].concat(i.visualViewport||[],it(o)?o:[]):o,c=e.concat(s);return r?c:c.concat(ot(s))}function Me(t,e){const n=e.getRootNode==null?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&mt(n)){let o=e;do{if(o&&t===o)return!0;o=o.parentNode||o.host}while(o)}return!1}function Te(t,e){const n=_(t,!1,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft;return{top:o,left:r,x:r,y:o,right:r+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}function _t(t,e,n){return e==="viewport"?tt(_e(t,n)):M(e)?Te(e,n):tt(Le(T(t)))}function ke(t){const e=ot(t),o=["absolute","fixed"].includes(Z(t).position)&&E(t)?ft(t):t;return M(o)?e.filter(r=>M(r)&&Me(r,o)&&D(r)!=="body"):[]}function He(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const s=[...n==="clippingAncestors"?ke(e):[].concat(n),o],c=s[0],l=s.reduce((f,m)=>{const a=_t(e,m,r);return f.top=I(a.top,f.top),f.right=Et(a.right,f.right),f.bottom=Et(a.bottom,f.bottom),f.left=I(a.left,f.left),f},_t(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}const We={getClippingRect:He,convertOffsetParentRelativeRectToViewportRelativeRect:De,isElement:M,getDimensions:Dt,getOffsetParent:ft,getDocumentElement:T,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:Ee(e,ft(n),o),floating:{...Dt(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>Z(t).direction==="rtl"};function Ne(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=!0,animationFrame:c=!1}=o,l=r&&!c,f=i&&!c,m=l||f?[...M(t)?ot(t):[],...ot(e)]:[];m.forEach(h=>{l&&h.addEventListener("scroll",n,{passive:!0}),f&&h.addEventListener("resize",n)});let a=null;if(s){let h=!0;a=new ResizeObserver(()=>{h||n(),h=!1}),M(t)&&!c&&a.observe(t),a.observe(e)}let u,d=c?_(t):null;c&&p();function p(){const h=_(t);d&&(h.x!==d.x||h.y!==d.y||h.width!==d.width||h.height!==d.height)&&n(),d=h,u=requestAnimationFrame(p)}return n(),()=>{var h;m.forEach(w=>{l&&w.removeEventListener("scroll",n),f&&w.removeEventListener("resize",n)}),(h=a)==null||h.disconnect(),a=null,c&&cancelAnimationFrame(u)}}const Ve=(t,e,n)=>fe(t,e,{platform:We,...n});var dt=typeof document<"u"?x.useLayoutEffect:x.useEffect;function ut(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(o=n;o--!==0;)if(!ut(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&t.$$typeof)&&!ut(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function Fe(t){const e=x.useRef(t);return dt(()=>{e.current=t}),e}function Be(t){let{middleware:e,placement:n="bottom",strategy:o="absolute",whileElementsMounted:r}=t===void 0?{}:t;const i=x.useRef(null),s=x.useRef(null),c=Fe(r),l=x.useRef(null),[f,m]=x.useState({x:null,y:null,strategy:o,placement:n,middlewareData:{}}),[a,u]=x.useState(e);ut(a==null?void 0:a.map(g=>{let{options:y}=g;return y}),e==null?void 0:e.map(g=>{let{options:y}=g;return y}))||u(e);const d=x.useCallback(()=>{!i.current||!s.current||Ve(i.current,s.current,{middleware:a,placement:n,strategy:o}).then(g=>{p.current&&se.flushSync(()=>{m(g)})})},[a,n,o]);dt(()=>{p.current&&d()},[d]);const p=x.useRef(!1);dt(()=>(p.current=!0,()=>{p.current=!1}),[]);const h=x.useCallback(()=>{if(typeof l.current=="function"&&(l.current(),l.current=null),i.current&&s.current)if(c.current){const g=c.current(i.current,s.current,d);l.current=g}else d()},[d,c]),w=x.useCallback(g=>{i.current=g,h()},[h]),v=x.useCallback(g=>{s.current=g,h()},[h]),$=x.useMemo(()=>({reference:i,floating:s}),[]);return x.useMemo(()=>({...f,update:d,refs:$,reference:w,floating:v}),[f,d,$,w,v])}const ze=t=>{const{element:e,padding:n}=t;function o(r){return Object.prototype.hasOwnProperty.call(r,"current")}return{name:"arrow",options:t,fn(r){return o(e)?e.current!=null?Pt({element:e.current,padding:n}).fn(r):{}:e?Pt({element:e,padding:n}).fn(r):{}}}},je=x.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...i}=t;return x.createElement(Q.svg,pt({},i,{ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),t.asChild?n:x.createElement("polygon",{points:"0,0 30,0 15,10"}))}),Xe=je,zt="Popper",[gt,pn]=ce(zt),[Ye,jt]=gt(zt),Ie=t=>{const{__scopePopper:e,children:n}=t,[o,r]=x.useState(null);return x.createElement(Ye,{scope:e,anchor:o,onAnchorChange:r},n)},Ue="PopperAnchor",qe=x.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,i=jt(Ue,n),s=x.useRef(null),c=Lt(e,s);return x.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:x.createElement(Q.div,pt({},r,{ref:c}))}),rt="PopperContent",[Ze,Ge]=gt(rt),[Je,Ke]=gt(rt,{hasParent:!1,positionUpdateFns:new Set}),Qe=x.forwardRef((t,e)=>{var n,o,r,i,s,c,l,f;const{__scopePopper:m,side:a="bottom",sideOffset:u=0,align:d="center",alignOffset:p=0,arrowPadding:h=0,collisionBoundary:w=[],collisionPadding:v=0,sticky:$="partial",hideWhenDetached:g=!1,avoidCollisions:y=!0,onPlaced:P,...b}=t,C=jt(rt,m),[A,R]=x.useState(null),k=Lt(e,j=>R(j)),[S,V]=x.useState(null),O=le(S),H=(n=O==null?void 0:O.width)!==null&&n!==void 0?n:0,G=(o=O==null?void 0:O.height)!==null&&o!==void 0?o:0,Yt=a+(d!=="center"?"-"+d:""),It=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},wt=Array.isArray(w)?w:[w],Ut=wt.length>0,ct={padding:It,boundary:wt.filter(rn),altBoundary:Ut},{reference:xt,floating:qt,strategy:Zt,x:yt,y:vt,placement:Gt,middlewareData:F,update:at}=Be({strategy:"fixed",placement:Yt,whileElementsMounted:Ne,middleware:[sn(),$e({mainAxis:u+G,alignmentAxis:p}),y?be({mainAxis:!0,crossAxis:!1,limiter:$==="partial"?Ae():void 0,...ct}):void 0,S?ze({element:S,padding:h}):void 0,y?xe({...ct}):void 0,Pe({...ct,apply:({elements:j,availableWidth:re,availableHeight:ie})=>{j.floating.style.setProperty("--radix-popper-available-width",`${re}px`),j.floating.style.setProperty("--radix-popper-available-height",`${ie}px`)}}),cn({arrowWidth:H,arrowHeight:G}),g?ye({strategy:"referenceHidden"}):void 0].filter(on)});K(()=>{xt(C.anchor)},[xt,C.anchor]);const B=yt!==null&&vt!==null,[$t,Jt]=Xt(Gt),J=ae(P);K(()=>{B&&(J==null||J())},[B,J]);const Kt=(r=F.arrow)===null||r===void 0?void 0:r.x,Qt=(i=F.arrow)===null||i===void 0?void 0:i.y,te=((s=F.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[ee,ne]=x.useState();K(()=>{A&&ne(window.getComputedStyle(A).zIndex)},[A]);const{hasParent:oe,positionUpdateFns:z}=Ke(rt,m),Y=!oe;x.useLayoutEffect(()=>{if(!Y)return z.add(at),()=>{z.delete(at)}},[Y,z,at]),K(()=>{Y&&B&&Array.from(z).reverse().forEach(j=>requestAnimationFrame(j))},[Y,B,z]);const bt={"data-side":$t,"data-align":Jt,...b,ref:k,style:{...b.style,animation:B?void 0:"none",opacity:(c=F.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}};return x.createElement("div",{ref:qt,"data-radix-popper-content-wrapper":"",style:{position:Zt,left:0,top:0,transform:B?`translate3d(${Math.round(yt)}px, ${Math.round(vt)}px, 0)`:"translate3d(0, -200%, 0)",minWidth:"max-content",zIndex:ee,["--radix-popper-transform-origin"]:[(l=F.transformOrigin)===null||l===void 0?void 0:l.x,(f=F.transformOrigin)===null||f===void 0?void 0:f.y].join(" ")},dir:t.dir},x.createElement(Ze,{scope:m,placedSide:$t,onArrowChange:V,arrowX:Kt,arrowY:Qt,shouldHideArrow:te},Y?x.createElement(Je,{scope:m,hasParent:!0,positionUpdateFns:z},x.createElement(Q.div,bt)):x.createElement(Q.div,bt)))}),tn="PopperArrow",en={top:"bottom",right:"left",bottom:"top",left:"right"},nn=x.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,i=Ge(tn,o),s=en[i.placedSide];return x.createElement("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},x.createElement(Xe,pt({},r,{ref:n,style:{...r.style,display:"block"}})))});function on(t){return t!==void 0}function rn(t){return t!==null}const sn=()=>({name:"anchorCssProperties",fn(t){const{rects:e,elements:n}=t,{width:o,height:r}=e.reference;return n.floating.style.setProperty("--radix-popper-anchor-width",`${o}px`),n.floating.style.setProperty("--radix-popper-anchor-height",`${r}px`),{}}}),cn=t=>({name:"transformOrigin",options:t,fn(e){var n,o,r,i,s;const{placement:c,rects:l,middlewareData:f}=e,a=((n=f.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,u=a?0:t.arrowWidth,d=a?0:t.arrowHeight,[p,h]=Xt(c),w={start:"0%",center:"50%",end:"100%"}[h],v=((o=(r=f.arrow)===null||r===void 0?void 0:r.x)!==null&&o!==void 0?o:0)+u/2,$=((i=(s=f.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+d/2;let g="",y="";return p==="bottom"?(g=a?w:`${v}px`,y=`${-d}px`):p==="top"?(g=a?w:`${v}px`,y=`${l.floating.height+d}px`):p==="right"?(g=`${-d}px`,y=a?w:`${$}px`):p==="left"&&(g=`${l.floating.width+d}px`,y=a?w:`${$}px`),{data:{x:g,y}}}});function Xt(t){const[e,n="center"]=t.split("-");return[e,n]}const hn=Ie,mn=qe,gn=Qe,wn=nn;export{pn as $,hn as a,mn as b,gn as c,wn as d};
//# sourceMappingURL=index.module-b2b96eed.js.map