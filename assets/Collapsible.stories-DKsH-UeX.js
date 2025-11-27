import{j as r,r as n}from"./iframe-DWZ6803v.js";import{C as p}from"./Card-JvEZwloF.js";import{T as s}from"./Text-8ePFkGZq.js";import{C as i}from"./Collapsible-CLEbLrvH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHvd6LVR.js";import"./index-D48evu4i.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-CSZiDRsP.js";import"./index-BOhbb7KG.js";import"./index-CeB7r270.js";import"./index-FiV2zKCE.js";import"./index-49B1NjFE.js";import"./YoutubeIcon-mJN6XAxS.js";import"./SearchIcon-B51szMED.js";import"./proxy-DSgD5g_h.js";import"./index-AlnYuhX9.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
