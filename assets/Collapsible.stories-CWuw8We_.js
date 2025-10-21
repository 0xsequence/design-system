import{j as r,r as i}from"./iframe-CXXZZJqO.js";import{C as n}from"./Card-CafvBe4y.js";import{T as l}from"./Text-gsUq4eMD.js";import{C as p}from"./Collapsible-B3TITeE5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgpCyxu5.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-Ctkf9eHa.js";import"./index-BuH6q0zo.js";import"./index-D7elmsTS.js";import"./index-aJesWW4G.js";import"./index-DlIrXTL3.js";import"./index-C4zvOB4k.js";import"./index-DWI2GbA2.js";import"./YoutubeIcon-CQZNXsaH.js";import"./SearchIcon-2vz8hXfd.js";import"./proxy-DiQYc7-E.js";import"./index-b7BdIMf6.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
