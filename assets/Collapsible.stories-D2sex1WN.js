import{j as r,r as n}from"./iframe-BU9XeNll.js";import{C as p}from"./Card-stv2NOTB.js";import{T as s}from"./Text-S4jdbwzp.js";import{C as i}from"./Collapsible-DYNri8js.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCvddFfW.js";import"./index-0BdI_jjD.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-BzEeHPtB.js";import"./index-CPY10YmI.js";import"./index-DOnOTPTu.js";import"./index-QruKamBe.js";import"./index-xctyYMGi.js";import"./YoutubeIcon-GaIYVdIv.js";import"./SearchIcon-PqBFO_2W.js";import"./proxy-DuiZAvvZ.js";import"./index-fTn0uovX.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
