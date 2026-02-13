import{j as r,r as n}from"./iframe-CfmiJJDU.js";import{C as p}from"./Card-CC7zWDhm.js";import{T as s}from"./Text-C1JjgtEQ.js";import{C as i}from"./Collapsible-DNMV5-2D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C02vWU17.js";import"./index-bSrywljg.js";import"./classnames-DK8XftlJ.js";import"./styles-C6k-R51j.js";import"./index-D7T5ypQk.js";import"./index-BPe2op5l.js";import"./index-9lrrrfWI.js";import"./index-DYL1ZBaF.js";import"./index-DSCU8g9t.js";import"./YoutubeIcon-B1Ge9jXB.js";import"./SearchIcon-PYtCSQ2k.js";import"./proxy-DXPMYRbx.js";import"./index-BOSHlPtq.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
