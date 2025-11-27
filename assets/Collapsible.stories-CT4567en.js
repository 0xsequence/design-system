import{j as r,r as n}from"./iframe-CMgbVWV4.js";import{C as p}from"./Card-DhV7x-OO.js";import{T as s}from"./Text-D7c6mk1m.js";import{C as i}from"./Collapsible-DAAGy7Ij.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKOW0YeZ.js";import"./index-CBHCA7CB.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-DxXhwsSw.js";import"./index-1zZ4u4T0.js";import"./index-CDLyCFok.js";import"./index-BCSO6woJ.js";import"./index-DCxCCFq9.js";import"./YoutubeIcon-Cfn1Ohrm.js";import"./SearchIcon-DEwhfNSL.js";import"./index-BstgOCPz.js";import"./proxy-BmclA403.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
