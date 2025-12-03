import{j as r,r as n}from"./iframe-Bog5ZZmr.js";import{C as p}from"./Card-C2yth_jo.js";import{T as s}from"./Text-xmCXQ-nJ.js";import{C as i}from"./Collapsible-4Ry_7MnP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6-7_pNp.js";import"./index-pGT3UMXN.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-CCpw5eAz.js";import"./index-BY0e2orR.js";import"./index-C6UBWOEH.js";import"./index-B1afnZxL.js";import"./index-DBqhniV5.js";import"./YoutubeIcon-Dn91rJtc.js";import"./SearchIcon-C8eRPNpK.js";import"./index-pHidCp8Z.js";import"./proxy-BfYJJNJL.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
