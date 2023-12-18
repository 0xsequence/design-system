import{c as xt,_ as pt,a as pe,$ as Nt}from"./index-DNxOJn_G.js";import{r as $}from"./index-PzSkSLoa.js";import{r as me}from"./index-5zxyQtc3.js";import{b as ge,$ as St}from"./index-t2YIoniJ.js";import{$ as he}from"./index-0JmSVHRm.js";const we=["top","right","bottom","left"],Y=Math.min,L=Math.max,at=Math.round,ct=Math.floor,X=t=>({x:t,y:t}),xe={left:"right",right:"left",bottom:"top",top:"bottom"},ye={start:"end",end:"start"};function ht(t,e,n){return L(t,Y(e,n))}function B(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function G(t){return t.split("-")[1]}function yt(t){return t==="x"?"y":"x"}function vt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(V(t))?"y":"x"}function bt(t){return yt(J(t))}function ve(t,e,n){n===void 0&&(n=!1);const o=G(t),i=bt(t),r=vt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=ft(s)),[s,ft(s)]}function be(t){const e=ft(t);return[wt(t),e,wt(e)]}function wt(t){return t.replace(/start|end/g,e=>ye[e])}function $e(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Ae(t,e,n,o){const i=G(t);let r=$e(V(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(wt)))),r}function ft(t){return t.replace(/left|right|bottom|top/g,e=>xe[e])}function Re(t){return{top:0,right:0,bottom:0,left:0,...t}}function Bt(t){return typeof t!="number"?Re(t):{top:t,right:t,bottom:t,left:t}}function dt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Dt(t,e,n){let{reference:o,floating:i}=t;const r=J(e),s=bt(e),l=vt(s),c=V(e),a=r==="y",p=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,m=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:p,y:o.y-i.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(G(e)){case"start":f[s]-=m*(n&&a?-1:1);break;case"end":f[s]+=m*(n&&a?-1:1);break}return f}const Pe=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:d}=Dt(a,o,c),m=o,f={},u=0;for(let h=0;h<l.length;h++){const{name:w,fn:g}=l[h],{x:v,y:x,data:y,reset:b}=await g({x:p,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:f,rects:a,platform:s,elements:{reference:t,floating:e}});if(p=v??p,d=x??d,f={...f,[w]:{...f[w],...y}},b&&u<=50){u++,typeof b=="object"&&(b.placement&&(m=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:p,y:d}=Dt(a,m,c)),h=-1;continue}}return{x:p,y:d,placement:m,strategy:i,middlewareData:f}};async function tt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:m=!1,padding:f=0}=B(e,t),u=Bt(f),w=l[m?d==="floating"?"reference":"floating":d],g=dt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:p,strategy:c})),v=d==="floating"?{...s.floating,x:o,y:i}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),y=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},b=dt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:x,strategy:c}):v);return{top:(g.top-b.top+u.top)/y.y,bottom:(b.bottom-g.bottom+u.bottom)/y.y,left:(g.left-b.left+u.left)/y.x,right:(b.right-g.right+u.right)/y.x}}const Tt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:c}=e,{element:a,padding:p=0}=B(t,e)||{};if(a==null)return{};const d=Bt(p),m={x:n,y:o},f=bt(i),u=vt(f),h=await s.getDimensions(a),w=f==="y",g=w?"top":"left",v=w?"bottom":"right",x=w?"clientHeight":"clientWidth",y=r.reference[u]+r.reference[f]-m[f]-r.floating[u],b=m[f]-r.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let C=A?A[x]:0;(!C||!await(s.isElement==null?void 0:s.isElement(A)))&&(C=l.floating[x]||r.floating[u]);const E=y/2-b/2,S=C/2-h[u]/2-1,H=Y(d[g],S),_=Y(d[v],S),O=H,F=C-h[u]-_,P=C/2-h[u]/2+E,T=ht(O,P,F),R=!c.arrow&&G(i)!=null&&P!=T&&r.reference[u]/2-(P<O?H:_)-h[u]/2<0,D=R?P<O?P-O:P-F:0;return{[f]:m[f]+D,data:{[f]:T,centerOffset:P-T-D,...R&&{alignmentOffset:D}},reset:R}}}),Ce=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:h=!0,...w}=B(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const g=V(i),v=V(l)===l,x=await(c.isRTL==null?void 0:c.isRTL(a.floating)),y=m||(v||!h?[ft(l)]:be(l));!m&&u!=="none"&&y.push(...Ae(l,h,u,x));const b=[l,...y],A=await tt(e,w),C=[];let E=((o=r.flip)==null?void 0:o.overflows)||[];if(p&&C.push(A[g]),d){const O=ve(i,s,x);C.push(A[O[0]],A[O[1]])}if(E=[...E,{placement:i,overflows:C}],!C.every(O=>O<=0)){var S,H;const O=(((S=r.flip)==null?void 0:S.index)||0)+1,F=b[O];if(F)return{data:{index:O,overflows:E},reset:{placement:F}};let P=(H=E.filter(T=>T.overflows[0]<=0).sort((T,R)=>T.overflows[1]-R.overflows[1])[0])==null?void 0:H.placement;if(!P)switch(f){case"bestFit":{var _;const T=(_=E.map(R=>[R.placement,R.overflows.filter(D=>D>0).reduce((D,W)=>D+W,0)]).sort((R,D)=>R[1]-D[1])[0])==null?void 0:_[0];T&&(P=T);break}case"initialPlacement":P=l;break}if(i!==P)return{reset:{placement:P}}}return{}}}};function _t(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Lt(t){return we.some(e=>t[e]>=0)}const Oe=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=B(t,e);switch(o){case"referenceHidden":{const r=await tt(e,{...i,elementContext:"reference"}),s=_t(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Lt(s)}}}case"escaped":{const r=await tt(e,{...i,altBoundary:!0}),s=_t(r,n.floating);return{data:{escapedOffsets:s,escaped:Lt(s)}}}default:return{}}}}};async function Ee(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=V(n),l=G(n),c=J(n)==="y",a=["left","top"].includes(s)?-1:1,p=r&&c?-1:1,d=B(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:u}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof u=="number"&&(f=l==="end"?u*-1:u),c?{x:f*p,y:m*a}:{x:m*a,y:f*p}}const Se=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Ee(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},De=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:g,y:v}=w;return{x:g,y:v}}},...c}=B(t,e),a={x:n,y:o},p=await tt(e,c),d=J(V(i)),m=yt(d);let f=a[m],u=a[d];if(r){const w=m==="y"?"top":"left",g=m==="y"?"bottom":"right",v=f+p[w],x=f-p[g];f=ht(v,f,x)}if(s){const w=d==="y"?"top":"left",g=d==="y"?"bottom":"right",v=u+p[w],x=u-p[g];u=ht(v,u,x)}const h=l.fn({...e,[m]:f,[d]:u});return{...h,data:{x:h.x-n,y:h.y-o}}}}},Te=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=B(t,e),p={x:n,y:o},d=J(i),m=yt(d);let f=p[m],u=p[d];const h=B(l,e),w=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const x=m==="y"?"height":"width",y=r.reference[m]-r.floating[x]+w.mainAxis,b=r.reference[m]+r.reference[x]-w.mainAxis;f<y?f=y:f>b&&(f=b)}if(a){var g,v;const x=m==="y"?"width":"height",y=["top","left"].includes(V(i)),b=r.reference[d]-r.floating[x]+(y&&((g=s.offset)==null?void 0:g[d])||0)+(y?0:w.crossAxis),A=r.reference[d]+r.reference[x]+(y?0:((v=s.offset)==null?void 0:v[d])||0)-(y?w.crossAxis:0);u<b?u=b:u>A&&(u=A)}return{[m]:f,[d]:u}}}},_e=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:r}=e,{apply:s=()=>{},...l}=B(t,e),c=await tt(e,l),a=V(n),p=G(n),d=J(n)==="y",{width:m,height:f}=o.floating;let u,h;a==="top"||a==="bottom"?(u=a,h=p===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(h=a,u=p==="end"?"top":"bottom");const w=f-c[u],g=m-c[h],v=!e.middlewareData.shift;let x=w,y=g;if(d){const A=m-c.left-c.right;y=p||v?Y(g,A):A}else{const A=f-c.top-c.bottom;x=p||v?Y(w,A):A}if(v&&!p){const A=L(c.left,0),C=L(c.right,0),E=L(c.top,0),S=L(c.bottom,0);d?y=m-2*(A!==0||C!==0?A+C:L(c.left,c.right)):x=f-2*(E!==0||S!==0?E+S:L(c.top,c.bottom))}await s({...e,availableWidth:y,availableHeight:x});const b=await i.getDimensions(r.floating);return m!==b.width||f!==b.height?{reset:{rects:!0}}:{}}}};function j(t){return Vt(t)?(t.nodeName||"").toLowerCase():"#document"}function M(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(Vt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Vt(t){return t instanceof Node||t instanceof M(t).Node}function z(t){return t instanceof Element||t instanceof M(t).Element}function N(t){return t instanceof HTMLElement||t instanceof M(t).HTMLElement}function Mt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof M(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Le(t){return["table","td","th"].includes(j(t))}function $t(t){const e=At(),n=k(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Me(t){let e=K(t);for(;N(e)&&!mt(e);){if($t(e))return e;e=K(e)}return null}function At(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function mt(t){return["html","body","#document"].includes(j(t))}function k(t){return M(t).getComputedStyle(t)}function gt(t){return z(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function K(t){if(j(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Mt(t)&&t.host||I(t);return Mt(e)?e.host:e}function zt(t){const e=K(t);return mt(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&nt(e)?e:zt(e)}function et(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=zt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=M(i);return r?e.concat(s,s.visualViewport||[],nt(i)?i:[],s.frameElement&&n?et(s.frameElement):[]):e.concat(i,et(i,[],n))}function It(t){const e=k(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=at(n)!==r||at(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Rt(t){return z(t)?t:t.contextElement}function Z(t){const e=Rt(t);if(!N(e))return X(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=It(e);let s=(r?at(n.width):n.width)/o,l=(r?at(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ke=X(0);function Yt(t){const e=M(t);return!At()||!e.visualViewport?ke:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function He(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==M(t)?!1:e}function q(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Rt(t);let s=X(1);e&&(o?z(o)&&(s=Z(o)):s=Z(t));const l=He(r,n,o)?Yt(r):X(0);let c=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,p=i.width/s.x,d=i.height/s.y;if(r){const m=M(r),f=o&&z(o)?M(o):o;let u=m.frameElement;for(;u&&o&&f!==m;){const h=Z(u),w=u.getBoundingClientRect(),g=k(u),v=w.left+(u.clientLeft+parseFloat(g.paddingLeft))*h.x,x=w.top+(u.clientTop+parseFloat(g.paddingTop))*h.y;c*=h.x,a*=h.y,p*=h.x,d*=h.y,c+=v,a+=x,u=M(u).frameElement}}return dt({width:p,height:d,x:c,y:a})}function Fe(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=N(n),r=I(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},l=X(1);const c=X(0);if((i||!i&&o!=="fixed")&&((j(n)!=="body"||nt(r))&&(s=gt(n)),N(n))){const a=q(n);l=Z(n),c.x=a.x+n.clientLeft,c.y=a.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+c.x,y:e.y*l.y-s.scrollTop*l.y+c.y}}function We(t){return Array.from(t.getClientRects())}function Xt(t){return q(I(t)).left+gt(t).scrollLeft}function Ne(t){const e=I(t),n=gt(t),o=t.ownerDocument.body,i=L(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=L(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Xt(t);const l=-n.scrollTop;return k(o).direction==="rtl"&&(s+=L(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Be(t,e){const n=M(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,c=0;if(i){r=i.width,s=i.height;const a=At();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:l,y:c}}function Ve(t,e){const n=q(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=N(t)?Z(t):X(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,c=i*r.x,a=o*r.y;return{width:s,height:l,x:c,y:a}}function kt(t,e,n){let o;if(e==="viewport")o=Be(t,n);else if(e==="document")o=Ne(I(t));else if(z(e))o=Ve(e,n);else{const i=Yt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return dt(o)}function jt(t,e){const n=K(t);return n===e||!z(n)||mt(n)?!1:k(n).position==="fixed"||jt(n,e)}function ze(t,e){const n=e.get(t);if(n)return n;let o=et(t,[],!1).filter(l=>z(l)&&j(l)!=="body"),i=null;const r=k(t).position==="fixed";let s=r?K(t):t;for(;z(s)&&!mt(s);){const l=k(s),c=$t(s);!c&&l.position==="fixed"&&(i=null),(r?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(s)&&!c&&jt(t,s))?o=o.filter(p=>p!==s):i=l,s=K(s)}return e.set(t,o),o}function Ie(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ze(e,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,p)=>{const d=kt(e,p,i);return a.top=L(d.top,a.top),a.right=Y(d.right,a.right),a.bottom=Y(d.bottom,a.bottom),a.left=L(d.left,a.left),a},kt(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ye(t){return It(t)}function Xe(t,e,n){const o=N(e),i=I(e),r=n==="fixed",s=q(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const c=X(0);if(o||!o&&!r)if((j(e)!=="body"||nt(i))&&(l=gt(e)),o){const a=q(e,!0,r,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else i&&(c.x=Xt(i));return{x:s.left+l.scrollLeft-c.x,y:s.top+l.scrollTop-c.y,width:s.width,height:s.height}}function Ht(t,e){return!N(t)||k(t).position==="fixed"?null:e?e(t):t.offsetParent}function qt(t,e){const n=M(t);if(!N(t))return n;let o=Ht(t,e);for(;o&&Le(o)&&k(o).position==="static";)o=Ht(o,e);return o&&(j(o)==="html"||j(o)==="body"&&k(o).position==="static"&&!$t(o))?n:o||Me(t)||n}const je=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||qt,r=this.getDimensions;return{reference:Xe(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function qe(t){return k(t).direction==="rtl"}const Ue={convertOffsetParentRelativeRectToViewportRelativeRect:Fe,getDocumentElement:I,getClippingRect:Ie,getOffsetParent:qt,getElementRects:je,getClientRects:We,getDimensions:Ye,getScale:Z,isElement:z,isRTL:qe};function Ze(t,e){let n=null,o;const i=I(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),r();const{left:a,top:p,width:d,height:m}=t.getBoundingClientRect();if(l||e(),!d||!m)return;const f=ct(p),u=ct(i.clientWidth-(a+d)),h=ct(i.clientHeight-(p+m)),w=ct(a),v={rootMargin:-f+"px "+-u+"px "+-h+"px "+-w+"px",threshold:L(0,Y(1,c))||1};let x=!0;function y(b){const A=b[0].intersectionRatio;if(A!==c){if(!x)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}x=!1}try{n=new IntersectionObserver(y,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(y,v)}n.observe(t)}return s(!0),r}function Ke(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Rt(t),p=i||r?[...a?et(a):[],...et(e)]:[];p.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});const d=a&&l?Ze(a,n):null;let m=-1,f=null;s&&(f=new ResizeObserver(g=>{let[v]=g;v&&v.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let u,h=c?q(t):null;c&&w();function w(){const g=q(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&n(),h=g,u=requestAnimationFrame(w)}return n(),()=>{p.forEach(g=>{i&&g.removeEventListener("scroll",n),r&&g.removeEventListener("resize",n)}),d&&d(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const Ge=(t,e,n)=>{const o=new Map,i={platform:Ue,...n},r={...i.platform,_c:o};return Pe(t,e,{...i,platform:r})},Je=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Tt({element:o.current,padding:i}).fn(n):{}:o?Tt({element:o,padding:i}).fn(n):{}}}};var lt=typeof document<"u"?$.useLayoutEffect:$.useEffect;function ut(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(o=n;o--!==0;)if(!ut(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!ut(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Ut(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Ft(t,e){const n=Ut(t);return Math.round(e*n)/n}function Wt(t){const e=$.useRef(t);return lt(()=>{e.current=t}),e}function Qe(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:l=!0,whileElementsMounted:c,open:a}=t,[p,d]=$.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,f]=$.useState(o);ut(m,o)||f(o);const[u,h]=$.useState(null),[w,g]=$.useState(null),v=$.useCallback(R=>{R!=A.current&&(A.current=R,h(R))},[h]),x=$.useCallback(R=>{R!==C.current&&(C.current=R,g(R))},[g]),y=r||u,b=s||w,A=$.useRef(null),C=$.useRef(null),E=$.useRef(p),S=Wt(c),H=Wt(i),_=$.useCallback(()=>{if(!A.current||!C.current)return;const R={placement:e,strategy:n,middleware:m};H.current&&(R.platform=H.current),Ge(A.current,C.current,R).then(D=>{const W={...D,isPositioned:!0};O.current&&!ut(E.current,W)&&(E.current=W,me.flushSync(()=>{d(W)}))})},[m,e,n,H]);lt(()=>{a===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,d(R=>({...R,isPositioned:!1})))},[a]);const O=$.useRef(!1);lt(()=>(O.current=!0,()=>{O.current=!1}),[]),lt(()=>{if(y&&(A.current=y),b&&(C.current=b),y&&b){if(S.current)return S.current(y,b,_);_()}},[y,b,_,S]);const F=$.useMemo(()=>({reference:A,floating:C,setReference:v,setFloating:x}),[v,x]),P=$.useMemo(()=>({reference:y,floating:b}),[y,b]),T=$.useMemo(()=>{const R={position:n,left:0,top:0};if(!P.floating)return R;const D=Ft(P.floating,p.x),W=Ft(P.floating,p.y);return l?{...R,transform:"translate("+D+"px, "+W+"px)",...Ut(P.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:D,top:W}},[n,l,P.floating,p.x,p.y]);return $.useMemo(()=>({...p,update:_,refs:F,elements:P,floatingStyles:T}),[p,_,F,P,T])}const tn=$.forwardRef((t,e)=>{const{children:n,width:o=10,height:i=5,...r}=t;return $.createElement(xt.svg,pt({},r,{ref:e,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),t.asChild?n:$.createElement("polygon",{points:"0,0 30,0 15,10"}))}),en=tn,Zt="Popper",[Kt,vn]=pe(Zt),[nn,Gt]=Kt(Zt),on=t=>{const{__scopePopper:e,children:n}=t,[o,i]=$.useState(null);return $.createElement(nn,{scope:e,anchor:o,onAnchorChange:i},n)},rn="PopperAnchor",sn=$.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...i}=t,r=Gt(rn,n),s=$.useRef(null),l=Nt(e,s);return $.useEffect(()=>{r.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:$.createElement(xt.div,pt({},i,{ref:l}))}),Jt="PopperContent",[cn,ln]=Kt(Jt),an=$.forwardRef((t,e)=>{var n,o,i,r,s,l,c,a;const{__scopePopper:p,side:d="bottom",sideOffset:m=0,align:f="center",alignOffset:u=0,arrowPadding:h=0,avoidCollisions:w=!0,collisionBoundary:g=[],collisionPadding:v=0,sticky:x="partial",hideWhenDetached:y=!1,updatePositionStrategy:b="optimized",onPlaced:A,...C}=t,E=Gt(Jt,p),[S,H]=$.useState(null),_=Nt(e,Q=>H(Q)),[O,F]=$.useState(null),P=he(O),T=(n=P==null?void 0:P.width)!==null&&n!==void 0?n:0,R=(o=P==null?void 0:P.height)!==null&&o!==void 0?o:0,D=d+(f!=="center"?"-"+f:""),W=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},Pt=Array.isArray(g)?g:[g],te=Pt.length>0,ot={padding:W,boundary:Pt.filter(pn),altBoundary:te},{refs:ee,floatingStyles:Ct,placement:ne,isPositioned:it,middlewareData:U}=Qe({strategy:"fixed",placement:D,whileElementsMounted:(...Q)=>Ke(...Q,{animationFrame:b==="always"}),elements:{reference:E.anchor},middleware:[Se({mainAxis:m+R,alignmentAxis:u}),w&&De({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?Te():void 0,...ot}),w&&Ce({...ot}),_e({...ot,apply:({elements:Q,rects:Et,availableWidth:ae,availableHeight:fe})=>{const{width:de,height:ue}=Et.reference,st=Q.floating.style;st.setProperty("--radix-popper-available-width",`${ae}px`),st.setProperty("--radix-popper-available-height",`${fe}px`),st.setProperty("--radix-popper-anchor-width",`${de}px`),st.setProperty("--radix-popper-anchor-height",`${ue}px`)}}),O&&Je({element:O,padding:h}),mn({arrowWidth:T,arrowHeight:R}),y&&Oe({strategy:"referenceHidden",...ot})]}),[Ot,oe]=Qt(ne),rt=ge(A);St(()=>{it&&(rt==null||rt())},[it,rt]);const ie=(i=U.arrow)===null||i===void 0?void 0:i.x,re=(r=U.arrow)===null||r===void 0?void 0:r.y,se=((s=U.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[ce,le]=$.useState();return St(()=>{S&&le(window.getComputedStyle(S).zIndex)},[S]),$.createElement("div",{ref:ee.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ct,transform:it?Ct.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[(l=U.transformOrigin)===null||l===void 0?void 0:l.x,(c=U.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:t.dir},$.createElement(cn,{scope:p,placedSide:Ot,onArrowChange:F,arrowX:ie,arrowY:re,shouldHideArrow:se},$.createElement(xt.div,pt({"data-side":Ot,"data-align":oe},C,{ref:_,style:{...C.style,animation:it?void 0:"none",opacity:(a=U.hide)!==null&&a!==void 0&&a.referenceHidden?0:void 0}}))))}),fn="PopperArrow",dn={top:"bottom",right:"left",bottom:"top",left:"right"},un=$.forwardRef(function(e,n){const{__scopePopper:o,...i}=e,r=ln(fn,o),s=dn[r.placedSide];return $.createElement("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0}},$.createElement(en,pt({},i,{ref:n,style:{...i.style,display:"block"}})))});function pn(t){return t!==null}const mn=t=>({name:"transformOrigin",options:t,fn(e){var n,o,i,r,s;const{placement:l,rects:c,middlewareData:a}=e,d=((n=a.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,m=d?0:t.arrowWidth,f=d?0:t.arrowHeight,[u,h]=Qt(l),w={start:"0%",center:"50%",end:"100%"}[h],g=((o=(i=a.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+m/2,v=((r=(s=a.arrow)===null||s===void 0?void 0:s.y)!==null&&r!==void 0?r:0)+f/2;let x="",y="";return u==="bottom"?(x=d?w:`${g}px`,y=`${-f}px`):u==="top"?(x=d?w:`${g}px`,y=`${c.floating.height+f}px`):u==="right"?(x=`${-f}px`,y=d?w:`${v}px`):u==="left"&&(x=`${c.floating.width+f}px`,y=d?w:`${v}px`),{data:{x,y}}}});function Qt(t){const[e,n="center"]=t.split("-");return[e,n]}const bn=on,$n=sn,An=an,Rn=un;export{vn as $,bn as a,$n as b,An as c,Rn as d};