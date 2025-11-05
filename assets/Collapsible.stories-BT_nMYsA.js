import{j as r,r as i}from"./iframe-Da4M60Pm.js";import{C as n}from"./Card-CgcgNHv7.js";import{T as l}from"./Text-CbT9jUU2.js";import{C as p}from"./Collapsible-C27YLALz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXXpuJUT.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-BiUP8D5E.js";import"./index-C4Amj-p8.js";import"./index-Cakqwd1O.js";import"./index-DqdTB7QA.js";import"./index-4Tqp9Mei.js";import"./index-B5vaS4pK.js";import"./index-FO3j98MH.js";import"./YoutubeIcon-h9RsJGM1.js";import"./SearchIcon-B39Jxi2k.js";import"./proxy-CFMibwCJ.js";import"./index-BW6iuJ3W.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
