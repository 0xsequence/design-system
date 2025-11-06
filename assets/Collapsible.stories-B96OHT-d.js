import{j as r,r as i}from"./iframe-Br6yznQg.js";import{C as n}from"./Card-DHv2-BA7.js";import{T as l}from"./Text-BDWBT68b.js";import{C as p}from"./Collapsible-ClSJUZyy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7zMCLHX.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-tL2NZB0p.js";import"./index-BAIqtF9o.js";import"./index-9FMtJNNf.js";import"./index-BKUbgjvf.js";import"./index-CB0QlW5k.js";import"./index-BySmyako.js";import"./index-_V90_Vq8.js";import"./YoutubeIcon-Bwn_lQZK.js";import"./SearchIcon-DFDNvj7J.js";import"./proxy-BoXgQJUu.js";import"./index-CoKK43fq.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: <Card>
        {[1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
            <p>Item {x}</p>
          </Text>)}
      </Card>,
    variant: 'default'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...a.parameters?.docs?.source}}};const k=["Default","Controlled"];export{a as Controlled,t as Default,k as __namedExportsOrder,D as default};
