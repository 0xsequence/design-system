import{r as c}from"./index-D1TSixAU.js";function S(t,e,{checkForDefaultPrevented:o=!0}={}){return function(u){if(t==null||t(u),o===!1||!u.defaultPrevented)return e==null?void 0:e(u)}}function l(t){const e=c.useRef(t);return c.useEffect(()=>{e.current=t}),c.useMemo(()=>(...o)=>{var s;return(s=e.current)==null?void 0:s.call(e,...o)},[])}function b({prop:t,defaultProp:e,onChange:o=()=>{}}){const[s,u]=h({defaultProp:e,onChange:o}),n=t!==void 0,d=n?t:s,r=l(o),i=c.useCallback(f=>{if(n){const a=typeof f=="function"?f(t):f;a!==t&&r(a)}else u(f)},[n,t,u,r]);return[d,i]}function h({defaultProp:t,onChange:e}){const o=c.useState(t),[s]=o,u=c.useRef(s),n=l(e);return c.useEffect(()=>{u.current!==s&&(n(s),u.current=s)},[s,u,n]),o}var y=globalThis!=null&&globalThis.document?c.useLayoutEffect:()=>{};export{b as a,l as b,S as c,y as u};
