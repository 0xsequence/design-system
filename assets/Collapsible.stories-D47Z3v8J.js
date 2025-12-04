import{j as r,r as n}from"./iframe-DVpTyOqq.js";import{C as p}from"./Card-DoUhL54f.js";import{T as s}from"./Text-CXv7c80j.js";import{C as i}from"./Collapsible-BOToiRp9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dr8QvyYb.js";import"./index-CJezIvJD.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-X_SM0Ghf.js";import"./index-BKHnpAHy.js";import"./index-CSVmpO1B.js";import"./index-CnBcfIUi.js";import"./index-CTt9Oopj.js";import"./YoutubeIcon-CCib6wCt.js";import"./SearchIcon-B13Dck_7.js";import"./index-uRDxcuCd.js";import"./proxy-BiI0eA5t.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
