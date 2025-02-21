import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as l}from"./index-s_7BDCjm.js";import{M as d,C as n,c as i}from"./DocsRenderer-CFRXHY34-5UgrEsnf.js";import{c as a}from"./color-Cn0GlU5F.js";import"./index-yBjzXJbu.js";import"./index-DubqEmGm.js";import"./iframe-BligKCsD.js";import"./index-BhZk4qNV.js";import"./index-DCU19ADU.js";import"./index-IE9ObSwG.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./react-18-CS3ie_DE.js";const h=o=>o===""?"":o[0].toUpperCase()+o.slice(1);function c(o){const t={code:"code",h1:"h1",h3:"h3",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Design System/Colors"}),`
`,e.jsx(t.h1,{id:"colors",children:"Colors"}),`
`,e.jsx(t.p,{children:"Color schemes, scales, accents, and gradients."}),`
`,e.jsx(t.h3,{id:"base-colors",children:"Base Colors"}),`
`,e.jsx(n,{children:e.jsx(i,{title:"Base",subtitle:"--seq-color-[name]",colors:{black:"#000000",white:"#ffffff",transparent:"transparent"}})}),`
`,e.jsx(t.h3,{id:"palettes",children:"Palettes"}),`
`,e.jsxs(t.p,{children:["All colors are defined in palettes. Each palette has a name and a scale. The scale is a number that represents the intensity of the color. For example, ",e.jsx(t.code,{children:"--seq-red-100"})," is a light shade of the red color, while ",e.jsx(t.code,{children:"--seq-red-900"})," is a dark shade of the brand color."]}),`
`,e.jsx(n,{children:Object.entries(a.palettes).map(([s,r])=>e.jsx(i,{title:h(s),subtitle:`--seq-${s}-[scale]`,colors:r},s))}),`
`,e.jsx(t.h3,{id:"gradients",children:"Gradients"}),`
`,e.jsx(t.h3,{id:"semantic-colors",children:"Semantic Colors"}),`
`,e.jsxs(t.p,{children:["Semantic colors point to color palettes and are used to give a name to a color that is used in a specific context. For example, ",e.jsx(t.code,{children:"primary"})," is a semantic color that points to a color in the ",e.jsx(t.code,{children:"brand"})," palette. This way, if the brand color changes, the ",e.jsx(t.code,{children:"primary"})," color will change as well."]}),`
`,e.jsx(n,{children:Object.entries(a.dark).map(([s,r])=>e.jsx(i,{title:s,subtitle:`--seq-color-${s}`,colors:{[s]:r}},s))})]})}function F(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(c,{...o})}):c(o)}export{F as default};
