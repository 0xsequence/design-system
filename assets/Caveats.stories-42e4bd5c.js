import{M as o}from"./chunk-S4VUQJ4A-b3382682.js";import{j as e}from"./jsx-runtime-69eee039.js";import{u as a}from"./index-abfde3b8.js";import"./iframe-5f221cd0.js";import"../sb-preview/runtime.js";import"./index-7c191284.js";import"./index-256d532d.js";import"./index-ecbee218.js";import"./chunk-6P7RB4HF-938b085e.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-5597f873.js";import"./index-c0383151.js";import"./index-006d63ff.js";import"./index-b785e197.js";import"./index-df712b54.js";import"./index-44d15e57.js";import"./Combination-8e1dcb03.js";import"./index-8f163998.js";import"./index-c19d8107.js";import"./index-3842af66.js";import"./index-baa34397.js";import"./index-555f5aa0.js";import"./index-9713685f.js";import"./index-d385e314.js";import"./index-356e4a49.js";function t(r){const n=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h3:"h3"},a(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Caveats"}),`
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

`})})]})}function i(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}const l=()=>{throw new Error("Docs-only story")};l.parameters={docsOnly:!0};const s={title:"Caveats",tags:["stories-mdx"],includeStories:["__page"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:i};const X=["__page"];export{X as __namedExportsOrder,l as __page,s as default};
//# sourceMappingURL=Caveats.stories-42e4bd5c.js.map
