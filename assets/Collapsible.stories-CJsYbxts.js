import{j as r,r as n}from"./iframe-CUSag4u4.js";import{C as p}from"./Card-Bxx04bGv.js";import{T as s}from"./Text-Cdh_VRlU.js";import{C as i}from"./Collapsible-DjZ0QLtU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dw3Bx-1L.js";import"./index-D0kymvZo.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-BR0sTVj3.js";import"./index-RxIxxF-A.js";import"./index-Cgx-K1ZL.js";import"./index-Dj8lCInr.js";import"./index-bbTonODN.js";import"./YoutubeIcon-DZDbp5xG.js";import"./SearchIcon-DQPXmYi6.js";import"./proxy-CjiGHyFm.js";import"./index-HOpklraf.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: <Card>
        {[1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
            <p>Item {x}</p>
          </Text>)}
      </Card>,
    variant: 'default'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...t.parameters?.docs?.source}}};const _=["Default","Controlled"];export{t as Controlled,a as Default,_ as __namedExportsOrder,M as default};
