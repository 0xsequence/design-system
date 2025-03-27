import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CFahbR6w.js";import{T as u}from"./Text-Vf0bTgHv.js";import{C as x}from"./Collapsible-C6ONBdtZ.js";import"./index-AemB5ySP.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./classnames-Dx2cly0x.js";import"./index-By4xKCrq.js";import"./index-uKUYdOYu.js";import"./index-BHL8jL0s.js";import"./index-chp1rBSu.js";import"./index-DYKS6Wkw.js";import"./index-C-MTDzn3.js";import"./YoutubeIcon-B6kS4e99.js";import"./proxy-BNSlCH7V.js";import"./index-VpsClNuv.js";const R={title:"Components/Collapsible",component:x},C=()=>{const[e,a]=l.useState(!1);return l.useEffect(()=>{a(!0)},[]),r.jsx(x,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(u,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(u,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(C,{})};var p,i,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const q=["Default","Controlled"];export{s as Controlled,t as Default,q as __namedExportsOrder,R as default};
