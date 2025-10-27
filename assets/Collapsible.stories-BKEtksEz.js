import{j as r,r as i}from"./iframe-s-kIoF9H.js";import{C as n}from"./Card-SLJ84feQ.js";import{T as l}from"./Text-D4C02bpd.js";import{C as p}from"./Collapsible-BJLTXLg0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fcn99G8-.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-DEBfU4rm.js";import"./index-Db5Xy3OH.js";import"./index-BBsGOxKX.js";import"./index-Cha83598.js";import"./index-DqSpHxVf.js";import"./index--CzHI6kl.js";import"./index-DluJVAe0.js";import"./YoutubeIcon-B9CADWIx.js";import"./SearchIcon-DvR1i_eM.js";import"./proxy-C9bkIQVa.js";import"./index-DDYduC9E.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
