import{r as u}from"./index-d8ade8ea.js";function v(e,c,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return c==null?void 0:c(o)}}function a(e){const c=u.useRef(e);return u.useEffect(()=>{c.current=e}),u.useMemo(()=>(...n)=>{var t;return(t=c.current)===null||t===void 0?void 0:t.call(c,...n)},[])}function p({prop:e,defaultProp:c,onChange:n=()=>{}}){const[t,o]=$({defaultProp:c,onChange:n}),f=e!==void 0,d=f?e:t,s=a(n),i=u.useCallback(r=>{if(f){const l=typeof r=="function"?r(e):r;l!==e&&s(l)}else o(r)},[f,e,o,s]);return[d,i]}function $({defaultProp:e,onChange:c}){const n=u.useState(e),[t]=n,o=u.useRef(t),f=a(c);return u.useEffect(()=>{o.current!==t&&(f(t),o.current=t)},[t,o,f]),n}const P=Boolean(globalThis==null?void 0:globalThis.document)?u.useLayoutEffect:()=>{};export{p as $,v as a,P as b,a as c};
//# sourceMappingURL=index.module-99b258bb.js.map
