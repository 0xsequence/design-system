import{j as r,r as p}from"./iframe-Bb5AA7BS.js";import{C as n}from"./Card-ixvJXB32.js";import{T as s}from"./Text-8eGyP5de.js";import{C as i}from"./Collapsible-BGiZ89ea.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_miVlwDn.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-CvyCw9rZ.js";import"./index-CpN96pFX.js";import"./index-BTP0XKsj.js";import"./index-B5Ylg49e.js";import"./index-DW0c_34N.js";import"./index-DNtsenoI.js";import"./index-Vcf6MEhN.js";import"./YoutubeIcon-BZIS_--j.js";import"./SearchIcon-C7a8_jES.js";import"./proxy-BR0wNput.js";import"./index-XfWbTGJe.js";const D={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=p.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
