import{j as r,r as i}from"./iframe-BT_eNjI9.js";import{C as n}from"./Card-tVl-woHi.js";import{T as l}from"./Text-B6o-xqBJ.js";import{C as p}from"./Collapsible-B3HCCgtV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DME2NG1I.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-CN6BMK7v.js";import"./index-7Bay_DFq.js";import"./index-DKFAAE95.js";import"./index-BJ6iad6G.js";import"./index-CWpK_TFY.js";import"./index-52wxphp5.js";import"./index-D2ZULIUC.js";import"./YoutubeIcon-BlxO4CXo.js";import"./SearchIcon-BeyqN_Yv.js";import"./proxy-DZgLR6Tf.js";import"./index-ByNinW3t.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
