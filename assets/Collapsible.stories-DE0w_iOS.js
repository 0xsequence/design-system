import{j as r,r as i}from"./iframe-2uuOjrwR.js";import{C as n}from"./Card-z2140P0p.js";import{T as l}from"./Text-DSghpYI7.js";import{C as p}from"./Collapsible-2cnJHwrE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cg8SEnER.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-TV5KJd5D.js";import"./index-2NRgSM5o.js";import"./index-PtKs1_El.js";import"./index-exfw6ICk.js";import"./index-DGidq-N8.js";import"./index-DkCi-uV1.js";import"./index-BkqpKlvM.js";import"./YoutubeIcon-B7uQdtQG.js";import"./SearchIcon-kfaN_skh.js";import"./proxy-CmXDgRd9.js";import"./index-D7RNTMkl.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
