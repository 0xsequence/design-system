var k=function(e){if(typeof document>"u")return null;var v=Array.isArray(e)?e[0]:e;return v.ownerDocument.body},s=new WeakMap,c=new WeakMap,h={},y=0,S=function(e,v,a,u){var f=Array.isArray(e)?e:[e];h[a]||(h[a]=new WeakMap);var n=h[a],A=[],p=new Set,b=new Set(f),l=function(r){!r||p.has(r)||(p.add(r),l(r.parentNode))};f.forEach(l);var o=function(r){!r||b.has(r)||Array.prototype.forEach.call(r.children,function(t){if(p.has(t))o(t);else{var i=t.getAttribute(u),w=i!==null&&i!=="false",M=(s.get(t)||0)+1,W=(n.get(t)||0)+1;s.set(t,M),n.set(t,W),A.push(t),M===1&&w&&c.set(t,!0),W===1&&t.setAttribute(a,"true"),w||t.setAttribute(u,"true")}})};return o(v),p.clear(),y++,function(){A.forEach(function(r){var t=s.get(r)-1,i=n.get(r)-1;s.set(r,t),n.set(r,i),t||(c.has(r)||r.removeAttribute(u),c.delete(r)),i||r.removeAttribute(a)}),y--,y||(s=new WeakMap,s=new WeakMap,c=new WeakMap,h={})}},d=function(e,v,a){a===void 0&&(a="data-aria-hidden");var u=Array.from(Array.isArray(e)?e:[e]),f=v||k(e);return f?(u.push.apply(u,Array.from(f.querySelectorAll("[aria-live]"))),S(u,f,a,"aria-hidden")):function(){return null}};export{d as h};
//# sourceMappingURL=index-807b81f6.js.map
