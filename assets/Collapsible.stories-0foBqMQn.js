import{j as r,r as n}from"./iframe-DszenvOL.js";import{C as p}from"./Card-C0etEu52.js";import{T as s}from"./Text-BlCnRIaL.js";import{C as i}from"./Collapsible-BXvlQq6c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8_A7gE66.js";import"./index-B0mc_bB0.js";import"./classnames-edArjE0v.js";import"./styles-kp6XyECN.js";import"./index-CDEPDLZp.js";import"./index-BfOoZjKr.js";import"./index-DscbnGsJ.js";import"./index-B3uvN0z0.js";import"./index-WGVc9eaH.js";import"./YoutubeIcon-DU3j_Fmn.js";import"./SearchIcon-BNnfaVMc.js";import"./proxy-CBsnIypo.js";import"./index-5O9ogaSf.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
