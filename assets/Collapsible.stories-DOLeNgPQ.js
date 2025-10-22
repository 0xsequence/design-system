import{j as r,r as i}from"./iframe-CxIZLGd-.js";import{C as n}from"./Card-BLORbSOj.js";import{T as l}from"./Text-BOs7ehxF.js";import{C as p}from"./Collapsible-BdKnkiB3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ox3BE-N1.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-jmbDK7iK.js";import"./index-CNvnWZ4k.js";import"./index-CIZ6ZHUS.js";import"./index-D-Rn7EMs.js";import"./index-CcRdAyIG.js";import"./index-CNZQFDUn.js";import"./index-CFBp0knh.js";import"./YoutubeIcon-BxBnnScD.js";import"./SearchIcon-CGD7RK_M.js";import"./proxy-CCA2Zxrk.js";import"./index-DatLXGq8.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
