import{j as g}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-DubqEmGm.js";import{c as y}from"./color-Cn0GlU5F.js";const a=["dark","light"],i="dark",l="data-theme",m="@sequence.theme",E=e=>a.includes(e),S=e=>typeof e=="object"&&e!==null&&!Array.isArray(e),f=e=>e?`${m}.${e}`:m,b=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),d=(e,t)=>{Object.entries(t).forEach(([n,s])=>{if(s){const c=b(n);e.style.setProperty(`--color-${c}`,s)}})},C=e=>{const t=localStorage.getItem(f(e));return t&&a.includes(t)?t:null},p=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":matchMedia("(prefers-color-scheme: dark)").matches?"dark":null,h=r.createContext(null),u=e=>{const[t,n]=r.useState(e.theme||i),[s,c]=r.useState(void 0);r.useEffect(()=>{/Mac/.test(window.navigator.userAgent)&&window.document.documentElement.classList.add("is-apple")},[]),r.useEffect(()=>{const o=e.theme||C(e.scope)||e.prefersColorScheme&&p()||i;n(o)},[e.theme,e.scope,e.prefersColorScheme]),r.useEffect(()=>{console.log("Updating...");const o=typeof e.root=="object"?e.root:document.querySelector(e.root||":root");o&&(console.log("has container"),E(t)?(o.setAttribute(l,t),d(o,y[t])):S(t)&&(o.setAttribute(l,"custom"),d(o,t)),e.root&&o.classList.add("seq-root"),c(e.root?o:document.body))},[t,e.root]);const T=r.useMemo(()=>({theme:t,container:s,setTheme:o=>{typeof o=="string"&&a.includes(o)&&localStorage.setItem(f(e.scope),o),n(o)}}),[t,s,e.scope]);return g.jsx(h.Provider,{value:T,children:e.children})},P=()=>{const e=r.useContext(h);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e};try{u.displayName="ThemeProvider",u.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:'"dark" | "light" | Partial<ColorTokens>'}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"string | HTMLElement"}},scope:{defaultValue:null,description:"",name:"scope",required:!1,type:{name:"string"}},prefersColorScheme:{defaultValue:null,description:"",name:"prefersColorScheme",required:!1,type:{name:"boolean"}}}}}catch{}export{u as T,P as u};
