var v=Object.defineProperty;var a=(o,s)=>v(o,"name",{value:s,configurable:!0});import{R as t,r as $}from"./jsx-runtime.8d91a771.js";import{$ as O,a as m,g as C}from"./index.module.a9d22047.js";function g(o){const s=o+"CollectionProvider",[x,R]=O(s),[M,d]=x(s,{collectionRef:{current:null},itemMap:new Map}),b=a(n=>{const{scope:e,children:i}=n,c=t.useRef(null),r=t.useRef(new Map).current;return t.createElement(M,{scope:e,itemMap:r,collectionRef:c},i)},"CollectionProvider"),I=o+"CollectionSlot",E=t.forwardRef((n,e)=>{const{scope:i,children:c}=n,r=d(I,i),l=m(e,r.collectionRef);return t.createElement(C,{ref:l},c)}),S=o+"CollectionItemSlot",u="data-radix-collection-item",A=t.forwardRef((n,e)=>{const{scope:i,children:c,...r}=n,l=t.useRef(null),p=m(e,l),f=d(S,i);return t.useEffect(()=>(f.itemMap.set(l,{ref:l,...r}),()=>void f.itemMap.delete(l))),t.createElement(C,{[u]:"",ref:p},c)});function _(n){const e=d(o+"CollectionConsumer",n);return t.useCallback(()=>{const c=e.collectionRef.current;if(!c)return[];const r=Array.from(c.querySelectorAll(`[${u}]`));return Array.from(e.itemMap.values()).sort((f,T)=>r.indexOf(f.ref.current)-r.indexOf(T.ref.current))},[e.collectionRef,e.itemMap])}return a(_,"useCollection"),[{Provider:b,Slot:E,ItemSlot:A},_,R]}a(g,"$e02a7d9cb1dc128c$export$c74125a8e3af6bb2");const h=$.exports.createContext(void 0);function w(o){const s=$.exports.useContext(h);return o||s||"ltr"}a(w,"$f631663db3294ace$export$b39126d51d94e6f3");export{g as $,w as a};
//# sourceMappingURL=index.module.cadee659.js.map