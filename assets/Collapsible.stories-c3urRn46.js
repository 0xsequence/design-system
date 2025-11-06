import{j as r,r as i}from"./iframe-CZovvVxl.js";import{C as n}from"./Card-6p_erql1.js";import{T as l}from"./Text-C24SMF1i.js";import{C as p}from"./Collapsible-CIH_5I2a.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQjr31dN.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-CuD1DFAn.js";import"./index-DQt8Fo18.js";import"./index-CK_1DmQn.js";import"./index-BRvfRBB7.js";import"./index-LcH45TbJ.js";import"./index-B23SSS0v.js";import"./index-NnvjJKtb.js";import"./YoutubeIcon-CwFx9DMv.js";import"./SearchIcon-BUhX7EnK.js";import"./proxy-DVhwE6R7.js";import"./index-BLbL7dXs.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
