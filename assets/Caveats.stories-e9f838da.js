import{M as l}from"./chunk-PCJTTTQV-0416efdd.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{j as e,a as s,F as c}from"./jsx-runtime-a9c13c85.js";import{u as i}from"./index-f3daabb9.js";import"./iframe-556623b4.js";import"../sb-preview/runtime.mjs";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2b7ca8d1.js";import"./index-6cf4ba34.js";import"./index-9c518322.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-9cd95192.js";import"./index-356e4a49.js";function p(a={}){const{wrapper:t}=Object.assign({},i(),a.components);return t?e(t,{...a,children:e(o,{})}):o();function o(){const n=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h3:"h3"},i(),a.components);return s(c,{children:[e(l,{title:"Caveats"}),`
`,e(n.h1,{id:"caveats-for-developers",children:"Caveats for Developers"}),`
`,s(n.p,{children:["Sequence Design System uses ",e(n.a,{href:"https://vanilla-extract.style/documentation/packages/sprinkles/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Vanilla Extract Sprinkles"}),` package to create reusable atomic classes.
Atomic classes is a paradigm first created by `,e(n.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tailwindcss"}),` which create a single css rule per class.
The reusable native of these atomics means that the generated css will be of fixed size and will not grow unless you add your own custom styling rules.`]}),`
`,e(n.p,{children:"eg."}),`
`,e(n.pre,{children:e(n.code,{className:"language-css",children:`.pl-1 {
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
`,e(n.h3,{id:"examples-of-breakage",children:"Examples of Breakage"}),`
`,s(n.p,{children:["Assuming we have design tokens for ",e(n.code,{children:"fontSizes"})," with properties ordered:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:`export const fontSizes = {
  xsmall: '0.625rem', // 10px
  small: '0.75rem', // 12px
  normal: '0.875rem', // 14px
  medium: '1rem', // 16px
  large: '1.25rem', // 20px
  xlarge: '1.875rem', // 30px
}
`})}),`
`,e(n.p,{children:"The following example will break in unexpected ways"}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:`import { recipe } from '@vanilla-extract/recipes'

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
`,e(n.p,{children:`Mixing atoms and non-atomic css rules will be even more dangerous when overlapping properties.
This is because atomic classes are always included in the top of the css document and custom styles
will be included below giving them a higher precedence.`}),`
`,e(n.pre,{children:e(n.code,{className:"language-typescript",children:`export const myStyle = recipe({
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

`})})]})}}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const r={title:"Caveats",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:p};const C=["__page"];export{C as __namedExportsOrder,m as __page,r as default};
//# sourceMappingURL=Caveats.stories-e9f838da.js.map
