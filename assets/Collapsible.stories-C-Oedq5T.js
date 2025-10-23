import{j as r,r as i}from"./iframe-DgyolkDS.js";import{C as n}from"./Card-DvBuyWgU.js";import{T as l}from"./Text-BU01Fa7s.js";import{C as p}from"./Collapsible-Bh7B2uqe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JTaURogY.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-BGXRtDb_.js";import"./index-CcBkhRQ6.js";import"./index-CB7HYmGZ.js";import"./index-Dpummi8r.js";import"./index-EsELf3pL.js";import"./index-Bf3nOecq.js";import"./index-BY5egROi.js";import"./YoutubeIcon-BjZHFoqq.js";import"./SearchIcon-ndz-FauO.js";import"./proxy-C3KAnVGx.js";import"./index-Cc0d-4VG.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
