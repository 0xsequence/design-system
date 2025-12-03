import{j as r,r as n}from"./iframe-D00-goLr.js";import{C as p}from"./Card-Cs8pA5nE.js";import{T as s}from"./Text-DDMnqWt5.js";import{C as i}from"./Collapsible-BHmquiY1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CkZCWXXn.js";import"./index-Dp9UmCQa.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-BmQ4nnUe.js";import"./index-B0Y7ZKGB.js";import"./index-CXuwO4pW.js";import"./index-BqbtULG0.js";import"./index-CZVGZ1TJ.js";import"./YoutubeIcon-B6FNeEVh.js";import"./SearchIcon-DmZBuCwJ.js";import"./index-BSe4z7ny.js";import"./proxy-B2xqkrZJ.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
