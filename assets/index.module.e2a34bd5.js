var y=Object.defineProperty;var l=(e,t)=>y(e,"name",{value:t,configurable:!0});import{r}from"./jsx-runtime.8e743ddb.js";import{r as g}from"./index.c7b82938.js";function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},x.apply(this,arguments)}l(x,"_extends");function B(e,t,{checkForDefaultPrevented:n=!0}={}){return l(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}l(B,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function D(e,t=[]){let n=[];function o(s,u){const f=r.exports.createContext(u),a=n.length;n=[...n,u];function i(p){const{scope:d,children:h,...$}=p,P=(d==null?void 0:d[e][a])||f,E=r.exports.useMemo(()=>$,Object.values($));return r.exports.createElement(P.Provider,{value:E},h)}l(i,"Provider");function m(p,d){const h=(d==null?void 0:d[e][a])||f,$=r.exports.useContext(h);if($)return $;if(u!==void 0)return u;throw new Error(`\`${p}\` must be used within \`${s}\``)}return l(m,"useContext"),i.displayName=s+"Provider",[i,m]}l(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=l(()=>{const s=n.map(u=>r.exports.createContext(u));return l(function(f){const a=(f==null?void 0:f[e])||s;return r.exports.useMemo(()=>({[`__scope${e}`]:{...f,[e]:a}}),[f,a])},"useScope")},"createScope");return c.scopeName=e,[o,w(c,...t)]}l(D,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function w(...e){const t=e[0];if(e.length===1)return t;const n=l(()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return l(function(s){const u=o.reduce((f,{useScope:a,scopeName:i})=>{const p=a(s)[`__scope${i}`];return{...f,...p}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}l(w,"$c512c27ab02ef895$var$composeContextScopes");function b(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}l(b,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function T({prop:e,defaultProp:t,onChange:n=l(()=>{},"onChange")}){const[o,c]=N({defaultProp:t,onChange:n}),s=e!==void 0,u=s?e:o,f=b(n),a=r.exports.useCallback(i=>{if(s){const p=typeof i=="function"?i(e):i;p!==e&&f(p)}else c(i)},[s,e,c,f]);return[u,a]}l(T,"$71cd76cc60e0454e$export$6f32135080cb4c3");function N({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,c=r.exports.useRef(o),s=b(t);return r.exports.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}l(N,"$71cd76cc60e0454e$var$useUncontrolledState");const F=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function _(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}l(_,"$6ed0406888f73fc4$var$setRef");function C(...e){return t=>e.forEach(n=>_(n,t))}l(C,"$6ed0406888f73fc4$export$43e446d32b3d21af");function U(...e){return r.exports.useCallback(C(...e),e)}l(U,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const S=r.exports.forwardRef((e,t)=>{const{children:n,...o}=e,c=r.exports.Children.toArray(n),s=c.find(O);if(s){const u=s.props.children,f=c.map(a=>a===s?r.exports.Children.count(u)>1?r.exports.Children.only(null):r.exports.isValidElement(u)?u.props.children:null:a);return r.exports.createElement(v,x({},o,{ref:t}),r.exports.isValidElement(u)?r.exports.cloneElement(u,void 0,f):null)}return r.exports.createElement(v,x({},o,{ref:t}),n)});S.displayName="Slot";const v=r.exports.forwardRef((e,t)=>{const{children:n,...o}=e;return r.exports.isValidElement(n)?r.exports.cloneElement(n,{...j(o,n.props),ref:C(t,n.ref)}):r.exports.Children.count(n)>1?r.exports.Children.only(null):null});v.displayName="SlotClone";const R=l(({children:e})=>r.exports.createElement(r.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function O(e){return r.exports.isValidElement(e)&&e.type===R}l(O,"$5e63c961fc1ce211$var$isSlottable");function j(e,t){const n={...t};for(const o in t){const c=e[o],s=t[o];/^on[A-Z]/.test(o)?c&&s?n[o]=(...f)=>{s(...f),c(...f)}:c&&(n[o]=c):o==="style"?n[o]={...c,...s}:o==="className"&&(n[o]=[c,s].filter(Boolean).join(" "))}return{...e,...n}}l(j,"$5e63c961fc1ce211$var$mergeProps");const V=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],L=V.reduce((e,t)=>{const n=r.exports.forwardRef((o,c)=>{const{asChild:s,...u}=o,f=s?S:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(f,x({},u,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Z(e,t){e&&g.exports.flushSync(()=>e.dispatchEvent(t))}l(Z,"$8927f6f2acc4f386$export$6d1a0317bde7de7f");export{D as $,x as _,T as a,L as b,B as c,U as d,F as e,S as f,b as g,R as h,Z as i};
//# sourceMappingURL=index.module.e2a34bd5.js.map