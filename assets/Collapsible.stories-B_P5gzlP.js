import{j as r,r as i}from"./iframe-CEc74Aey.js";import{C as n}from"./Card-BMit-ezb.js";import{T as l}from"./Text-BieRBBs0.js";import{C as p}from"./Collapsible-Cmb_133N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzVjdh5E.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-CyGB67j_.js";import"./index-Cug0aO2_.js";import"./index-B5nXqCfp.js";import"./index-BhcwGl1h.js";import"./index-ChwC0xMh.js";import"./index-BDhicWVv.js";import"./index-DLj2INgT.js";import"./YoutubeIcon-Cn2eaAxW.js";import"./SearchIcon-iDTZ97Sl.js";import"./proxy-B5FI_9mE.js";import"./index-DhT5g1kO.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
