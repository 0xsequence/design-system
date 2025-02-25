import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as c}from"./index-s_7BDCjm.js";import"./index-BQ_PBI2X.js";import{c as l}from"./color-Cn0GlU5F.js";import{M as m,C as s,a as n}from"./DocsRenderer-CFRXHY34-BT5EXj6S.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./preview-0xAt36_M.js";import"./iframe-C252ecSP.js";import"./index-BQhnwxuj.js";import"./index-e5epXPAg.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./react-18-DbvqzeU0.js";function i(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",...c(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Design System/Colors"}),`
`,o.jsx(t.h1,{id:"colors",children:"Colors"}),`
`,o.jsx(t.p,{children:"Color schemes, scales, accents, and gradients."}),`
`,o.jsx(t.h3,{id:"base-colors",children:"Base Colors"}),`
`,o.jsx(s,{children:o.jsx(n,{title:"Base",subtitle:"--color-[name]",colors:{black:"#000000",white:"#ffffff"}})}),`
`,o.jsx(t.h3,{id:"semantic-colors",children:"Semantic Colors"}),`
`,o.jsxs(t.p,{children:["Semantic colors point to color palettes and are used to give a name to a color that is used in a specific context. For example, ",o.jsx(t.code,{children:"primary"})," is a semantic color that points to a color in the ",o.jsx(t.code,{children:"brand"})," palette. This way, if the brand color changes, the ",o.jsx(t.code,{children:"primary"})," color will change as well."]}),`
`,o.jsx(s,{children:Object.entries(l.dark).map(([r,a])=>o.jsx(n,{title:r,subtitle:`--color-${r}`,colors:{[r]:a}},r))})]})}function y(e={}){const{wrapper:t}={...c(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(i,{...e})}):i(e)}export{y as default};
