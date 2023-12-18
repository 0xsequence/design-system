import{M as o}from"./chunk-HLWAVYOI-TtQaxxPv.js";import{j as e}from"./jsx-runtime-baBBSKBE.js";import{u as t}from"./index-iRk-Ly90.js";import"./iframe-7CYEnLqB.js";import"../sb-preview/runtime.js";import"./index-PzSkSLoa.js";import"./react-18-tIfyGRTp.js";import"./index-5zxyQtc3.js";import"./chunk-ZGA76URP-PfrU0Dmb.js";import"./index-ogXoivrg.js";import"./index-whQ-FlRS.js";import"./index-PPLHz8o0.js";function a(s){const n=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h3:"h3"},t(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Caveats"}),`
`,e.jsx(n.h1,{id:"caveats-for-developers",children:"Caveats for Developers"}),`
`,e.jsxs(n.p,{children:["Sequence Design System uses ",e.jsx(n.a,{href:"https://vanilla-extract.style/documentation/packages/sprinkles/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vanilla Extract Sprinkles"}),` package to create reusable atomic classes.
Atomic classes is a paradigm first created by `,e.jsx(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwindcss"}),` which create a single css rule per class.
The reusable native of these atomics means that the generated css will be of fixed size and will not grow unless you add your own custom styling rules.`]}),`
`,e.jsx(n.p,{children:"eg."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.pl-1 {
  padding-left: 4px;
}

.pl-2 {
  padding-left: 8px;
}

.pos-a {
  position: absolute;
}

.pos-r {
  position: relative;
}
`})}),`
`,e.jsx(n.h3,{id:"examples-of-breakage",children:"Examples of Breakage"}),`
`,e.jsxs(n.p,{children:["Assuming we have design tokens for ",e.jsx(n.code,{children:"fontSizes"})," with properties ordered:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const fontSizes = {
  xsmall: '0.625rem', // 10px
  small: '0.75rem', // 12px
  normal: '0.875rem', // 14px
  medium: '1rem', // 16px
  large: '1.25rem', // 20px
  xlarge: '1.875rem', // 30px
}
`})}),`
`,e.jsx(n.p,{children:"The following example will break in unexpected ways"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const myStyle = recipe({
  base: [
    atoms({
      fontSize: 'normal',
    }),
  ],

  variants: {
    size: {
      xsmall: [
        atoms({
          fontSize: 'xsmall', // Has lower precedence than 'normal' ❌
        }),
      ],
      small: [
        atoms({
          fontSize: 'small', // Has lower precedence than 'normal' ❌
        }),
      ],

      medium: [
        atoms({
          fontSize: 'medium', // Has higher precedence than 'normal' ✔
        }),
      ],

      large: [
        atoms({
          fontSize: 'large', // Has higher precedence than 'normal' ✔
        }),
      ],

      xlarge: [
        atoms({
          fontSize: 'xlarge', // Has higher precedence than 'normal' ✔
        }),
      ],
    },
  },
})
`})}),`
`,e.jsx(n.p,{children:`Mixing atoms and non-atomic css rules will be even more dangerous when overlapping properties.
This is because atomic classes are always included in the top of the css document and custom styles
will be included below giving them a higher precedence.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export const myStyle = recipe({
  base: {
    fontSize: '1rem'
  },

  variants: {
    size: {
      xsmall: [
        atoms({
          fontSize: 'xsmall' // Has lower precedence than base style ❌
        })
      ],
      ...
    }
  }
)

`})})]})}function l(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const r={title:"Caveats",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:l};const b=["__page"];export{b as __namedExportsOrder,i as __page,r as default};
