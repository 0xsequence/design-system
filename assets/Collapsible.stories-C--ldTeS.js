import{j as r,r as i}from"./iframe-PraEDYtv.js";import{C as n}from"./Card-Csu-oPua.js";import{T as l}from"./Text-DFW0qT39.js";import{C as p}from"./Collapsible-DO7tE8L6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CNN8ziOl.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-CZq0IdwY.js";import"./index-RIrJ9vUx.js";import"./index-DvUALpVK.js";import"./index-Op_NiLtJ.js";import"./index-VVcGUtwz.js";import"./index-SMpoecPk.js";import"./index-xKPRByH5.js";import"./YoutubeIcon-0cMEZV85.js";import"./SearchIcon-5EnGycls.js";import"./proxy-BfXnwmfL.js";import"./index-BNLrRIrB.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
