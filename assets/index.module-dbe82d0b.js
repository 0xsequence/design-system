import{r}from"./index-d8ade8ea.js";import{_ as m}from"./extends-98964cd2.js";import{r as y}from"./index-6cf4ba34.js";function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},x.apply(this,arguments)}function P(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function b(...e){return t=>e.forEach(n=>P(n,t))}function H(...e){return r.useCallback(b(...e),e)}function M(e,t=[]){let n=[];function o(i,c){const l=r.createContext(c),a=n.length;n=[...n,c];function p(u){const{scope:f,children:$,...d}=u,E=(f==null?void 0:f[e][a])||l,S=r.useMemo(()=>d,Object.values(d));return r.createElement(E.Provider,{value:S},$)}function v(u,f){const $=(f==null?void 0:f[e][a])||l,d=r.useContext($);if(d)return d;if(c!==void 0)return c;throw new Error(`\`${u}\` must be used within \`${i}\``)}return p.displayName=i+"Provider",[p,v]}const s=()=>{const i=n.map(c=>r.createContext(c));return function(l){const a=(l==null?void 0:l[e])||i;return r.useMemo(()=>({[`__scope${e}`]:{...l,[e]:a}}),[l,a])}};return s.scopeName=e,[o,w(s,...t)]}function w(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const c=o.reduce((l,{useScope:a,scopeName:p})=>{const u=a(i)[`__scope${p}`];return{...l,...u}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}const C=r.forwardRef((e,t)=>{const{children:n,...o}=e,s=r.Children.toArray(n),i=s.find(g);if(i){const c=i.props.children,l=s.map(a=>a===i?r.Children.count(c)>1?r.Children.only(null):r.isValidElement(c)?c.props.children:null:a);return r.createElement(h,m({},o,{ref:t}),r.isValidElement(c)?r.cloneElement(c,void 0,l):null)}return r.createElement(h,m({},o,{ref:t}),n)});C.displayName="Slot";const h=r.forwardRef((e,t)=>{const{children:n,...o}=e;return r.isValidElement(n)?r.cloneElement(n,{...N(o,n.props),ref:b(t,n.ref)}):r.Children.count(n)>1?r.Children.only(null):null});h.displayName="SlotClone";const _=({children:e})=>r.createElement(r.Fragment,null,e);function g(e){return r.isValidElement(e)&&e.type===_}function N(e,t){const n={...t};for(const o in t){const s=e[o],i=t[o];/^on[A-Z]/.test(o)?s&&i?n[o]=(...l)=>{i(...l),s(...l)}:s&&(n[o]=s):o==="style"?n[o]={...s,...i}:o==="className"&&(n[o]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}const O=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],R=O.reduce((e,t)=>{const n=r.forwardRef((o,s)=>{const{asChild:i,...c}=o,l=i?C:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(l,m({},c,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function B(e,t){e&&y.flushSync(()=>e.dispatchEvent(t))}export{M as $,x as _,H as a,R as b,_ as c,C as d,B as e,b as f};
//# sourceMappingURL=index.module-dbe82d0b.js.map
