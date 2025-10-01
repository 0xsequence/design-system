import{j as o,c as l}from"./iframe-f-zG5TfG.js";import{useMDXComponents as i}from"./index-WcgAlyld.js";import"./DocsRenderer-3PZUHFFL-BG3DYVEN.js";import{M as d,C as n,a as r}from"./blocks-DpHZtc_l.js";import"./react-18-Cjmx4d3f.js";import"./index-Y7tqfuAd.js";import"./index-CqWp9rAi.js";function c(t){const e={code:"code",h1:"h1",h3:"h3",p:"p",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{title:"Design System/Colors"}),`
`,o.jsx(e.h1,{id:"colors",children:"Colors"}),`
`,o.jsx(e.p,{children:"Color schemes, scales, accents, and gradients."}),`
`,o.jsx(e.h3,{id:"base-colors",children:"Base Colors"}),`
`,o.jsx(n,{children:o.jsx(r,{title:"Base",subtitle:"--seq-color-[name]",colors:{black:"#000000",white:"#ffffff"}})}),`
`,o.jsx(e.h3,{id:"semantic-colors",children:"Semantic Colors"}),`
`,o.jsxs(e.p,{children:["Semantic colors point to color palettes and are used to give a name to a color that is used in a specific context. For example, ",o.jsx(e.code,{children:"primary"})," is a semantic color that points to a color in the ",o.jsx(e.code,{children:"brand"})," palette. This way, if the brand color changes, the ",o.jsx(e.code,{children:"primary"})," color will change as well."]}),`
`,o.jsx(n,{children:Object.entries(l.dark).map(([s,a])=>o.jsx(r,{title:s,subtitle:`--seq-color-${s}`,colors:{[s]:a}},s))})]})}function C(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(c,{...t})}):c(t)}export{C as default};
