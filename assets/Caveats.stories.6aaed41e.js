var i=Object.defineProperty;var r=(t,a)=>i(t,"name",{value:a,configurable:!0});import"./jsx-runtime.94cfab9b.js";import{c as e,A as m,M as c}from"./Props.2640ad0f.js";import"./iframe.19676db2.js";import"./string.f103b295.js";import"./index.213afb5d.js";import"./es.map.constructor.ea07a0e0.js";import"./es.number.to-fixed.9a86b601.js";function l(){return l=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l.apply(this,arguments)}r(l,"_extends");const d={},u="wrapper";function p({components:t,...a}){return e(u,l({},d,a,{components:t,mdxType:"MDXLayout"}),e(c,{title:"Caveats",mdxType:"Meta"}),e("h1",null,"Caveats for Developers"),e("p",null,"Sequence Design System uses ",e("a",{parentName:"p",href:"https://vanilla-extract.style/documentation/packages/sprinkles/"},"Vanilla Extract Sprinkles"),` package to create reusable atomic classes.
Atomic classes is a paradigm first created by `,e("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwindcss"),` which create a single css rule per class.
The reusable native of these atomics means that the generated css will be of fixed size and will not grow unless you add your own custom styling rules.`),e("p",null,"eg."),e("pre",null,e("code",{parentName:"pre",className:"language-css"},`.pl-1 {
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
`)),e("h3",null,"Examples of Breakage"),e("p",null,"Assuming we have design tokens for ",e("inlineCode",{parentName:"p"},"fontSizes")," with properties ordered:"),e("pre",null,e("code",{parentName:"pre",className:"language-typescript"},`export const fontSizes = {
  xsmall: '0.625rem', // 10px
  small: '0.75rem', // 12px
  normal: '0.875rem', // 14px
  medium: '1rem', // 16px
  large: '1.25rem', // 20px
  xlarge: '1.875rem', // 30px
}
`)),e("p",null,"The following example will break in unexpected ways"),e("pre",null,e("code",{parentName:"pre",className:"language-typescript"},`import { recipe } from '@vanilla-extract/recipes'

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
          fontSize: 'xsmall', // Has lower precedence than 'normal' \u274C
        }),
      ],
      small: [
        atoms({
          fontSize: 'small', // Has lower precedence than 'normal' \u274C
        }),
      ],

      medium: [
        atoms({
          fontSize: 'medium', // Has higher precedence than 'normal' \u2714
        }),
      ],

      large: [
        atoms({
          fontSize: 'large', // Has higher precedence than 'normal' \u2714
        }),
      ],

      xlarge: [
        atoms({
          fontSize: 'xlarge', // Has higher precedence than 'normal' \u2714
        }),
      ],
    },
  },
})
`)),e("p",null,`Mixing atoms and non-atomic css rules will be even more dangerous when overlapping properties.
This is because atomic classes are always included in the top of the css document and custom styles
will be included below giving them a higher precedence.`),e("pre",null,e("code",{parentName:"pre",className:"language-typescript"},`export const myStyle = recipe({
  base: {
    fontSize: '1rem'
  },

  variants: {
    size: {
      xsmall: [
        atoms({
          fontSize: 'xsmall' // Has lower precedence than base style \u274C
        })
      ],
      ...
    }
  }
)

`)))}r(p,"MDXContent");p.isMDXComponent=!0;const g=r(()=>{throw new Error("Docs-only story")},"__page");g.parameters={docsOnly:!0};const s={title:"Caveats",includeStories:["__page"]},h={};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(m,{mdxStoryNameToKey:h,mdxComponentAnnotations:s},e(p,null))};const N=["__page"];export{N as __namedExportsOrder,g as __page,s as default};
//# sourceMappingURL=Caveats.stories.6aaed41e.js.map
