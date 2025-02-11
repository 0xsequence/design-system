import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as t}from"./index-CrPz3I2A.js";import{M as r}from"./DocsRenderer-CFRXHY34-DrWkjvxC.js";import"./index-C9rmetsa.js";import"./index-D1TSixAU.js";import"./iframe-DeKMHqwE.js";import"./index-BY86uCXS.js";import"./index-BNXY6jv6.js";import"./index-wgz3LQUQ.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./react-18-CIBuchmS.js";function s(o){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"sequence-design-system",children:"Sequence Design System"}),`
`,e.jsx(n.p,{children:"Sequence Design System is a reusable component library uses across the Sequence product suite."}),`
`,e.jsxs(n.p,{children:["Components are written in ",e.jsx(n.a,{href:"https://reactjs.org/",rel:"nofollow",children:"React"})," with ",e.jsx(n.a,{href:"https://tailwindcss.com/",rel:"nofollow",children:"Tailwind"}),", and its stories are written in ",e.jsx(n.a,{href:"https://medium.com/storybookjs/component-story-format-66f4c32366df",rel:"nofollow",children:"Component Story Format"}),"."]}),`
`,e.jsx(n.h3,{id:"install",children:"Install"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`pnpm add @0xsequence/design-system
`})}),`
`,e.jsx(n.h3,{id:"use",children:"Use"}),`
`,e.jsx(n.p,{children:"Import components you want into your UI"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"import { Button, Badge } from '@0xsequence/design-system'"})}),`
`,e.jsx(n.p,{children:"and use them like so"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`const example = () => (

<div>
  <Button appearance="primary" onClick={() => 0}>
    Do something
  </Button>
  <Badge onClick={this.clear}>Cool</Badge>
</div>
)

`})}),`
`,e.jsx(n.h3,{id:"run-and-develop-locally",children:"Run and Develop Locally"}),`
`,e.jsxs(n.p,{children:["Clone the ",e.jsx(n.a,{href:"https://github.com/0xsequence/design-system",rel:"nofollow",children:"Sequence Design System GitHub Project"})," then start Storybook."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`pnpm install && pnpm storybook
`})}),`
`,e.jsx(n.h3,{id:"used-by",children:"Used by"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://sequence.app/",rel:"nofollow",children:"Sequence Wallet"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://sequence.dev/",rel:"nofollow",children:"Sequence Console"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://status.sequence.info/",rel:"nofollow",children:"Sequence Status"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/0xsequence/demo-dapp",rel:"nofollow",children:"Sequence Demo Dapp Github Project"})}),`
`]}),`
`,e.jsx(n.p,{children:"Note: this package is not used in Storybook's UI, but the visual design is identical."}),`
`,e.jsx(n.h3,{id:"resources",children:e.jsx(n.strong,{children:"Resources"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://storybook.js.org/docs/react/get-started/introduction",rel:"nofollow",children:"Storybook Documentation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/0xsequence/design-system",rel:"nofollow",children:"GitHub Repository"})}),`
`]})]})}function y(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{y as default};
