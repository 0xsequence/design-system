import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as l}from"./index-CrPz3I2A.js";import{M as d,C as n,c as i}from"./DocsRenderer-CFRXHY34-IcRlM2tb.js";import{c as a}from"./color-Cn0GlU5F.js";import"./index-C9rmetsa.js";import"./index-D1TSixAU.js";import"./iframe-rny_iO8e.js";import"./index-BY86uCXS.js";import"./index-BNXY6jv6.js";import"./index-wgz3LQUQ.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./react-18-CIBuchmS.js";const h=o=>o===""?"":o[0].toUpperCase()+o.slice(1);function c(o){const t={code:"code",h1:"h1",h3:"h3",p:"p",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Design System/Colors"}),`
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
