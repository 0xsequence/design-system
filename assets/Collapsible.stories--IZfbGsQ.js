import{j as r,r as n}from"./iframe-uoxntj-Z.js";import{C as p}from"./Card-Khn8VxRP.js";import{T as s}from"./Text-CcuVsEwl.js";import{C as i}from"./Collapsible-jN_pSLa3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-IA3VG_tv.js";import"./index-Ct9Q6ypg.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-C9GFgHnm.js";import"./index-CFSXrYWg.js";import"./index-bOAALblM.js";import"./index-CGv-7R_9.js";import"./index-CA616C_R.js";import"./YoutubeIcon-BjzvAQFA.js";import"./SearchIcon-ChDZKgjF.js";import"./proxy-CDDNEeo_.js";import"./index-DnrPCJfk.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
