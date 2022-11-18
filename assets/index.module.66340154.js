var v=Object.defineProperty;var c=(e,n)=>v(e,"name",{value:n,configurable:!0});import{r as s,$ as x}from"./jsx-runtime.8e743ddb.js";import{r as O}from"./index.c7b82938.js";import{d as b,e as $}from"./index.module.e2a34bd5.js";function M(e,n){return s.exports.useReducer((r,t)=>{const a=n[r][t];return a!=null?a:r},e)}c(M,"$fe963b355347cc68$export$3e6543de14f8614f");const T=c(e=>{const{present:n,children:r}=e,t=E(n),a=typeof r=="function"?r({present:t.isPresent}):s.exports.Children.only(r),u=b(t.ref,a.ref);return typeof r=="function"||t.isPresent?s.exports.cloneElement(a,{ref:u}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");T.displayName="Presence";function E(e){const[n,r]=s.exports.useState(),t=s.exports.useRef({}),a=s.exports.useRef(e),u=s.exports.useRef("none"),p=e?"mounted":"unmounted",[N,i]=M(p,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.exports.useEffect(()=>{const o=l(t.current);u.current=N==="mounted"?o:"none"},[N]),$(()=>{const o=t.current,d=a.current;if(d!==e){const A=u.current,f=l(o);e?i("MOUNT"):f==="none"||(o==null?void 0:o.display)==="none"?i("UNMOUNT"):i(d&&A!==f?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,i]),$(()=>{if(n){const o=c(m=>{const f=l(t.current).includes(m.animationName);m.target===n&&f&&O.exports.flushSync(()=>i("ANIMATION_END"))},"handleAnimationEnd"),d=c(m=>{m.target===n&&(u.current=l(t.current))},"handleAnimationStart");return n.addEventListener("animationstart",d),n.addEventListener("animationcancel",o),n.addEventListener("animationend",o),()=>{n.removeEventListener("animationstart",d),n.removeEventListener("animationcancel",o),n.removeEventListener("animationend",o)}}else i("ANIMATION_END")},[n,i]),{isPresent:["mounted","unmountSuspended"].includes(N),ref:s.exports.useCallback(o=>{o&&(t.current=getComputedStyle(o)),r(o)},[])}}c(E,"$921a889cee6df7e8$var$usePresence");function l(e){return(e==null?void 0:e.animationName)||"none"}c(l,"$921a889cee6df7e8$var$getAnimationName");const S=x["useId".toString()]||(()=>{});let h=0;function y(e){const[n,r]=s.exports.useState(S());return $(()=>{e||r(t=>t!=null?t:String(h++))},[e]),e||(n?`radix-${n}`:"")}c(y,"$1746a345f3d73bb7$export$f680877a34711e37");export{y as $,T as a};
//# sourceMappingURL=index.module.66340154.js.map
