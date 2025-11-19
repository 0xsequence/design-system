import{j as r,r as n}from"./iframe-BjUI5uWL.js";import{C as p}from"./Card-Csum6rOM.js";import{T as s}from"./Text-D49JAn10.js";import{C as i}from"./Collapsible-BHL38Zmj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnB3R0t7.js";import"./index-lxtFlX6j.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-BsSeTfr9.js";import"./index-SURaURbQ.js";import"./index-Y9S_7g4a.js";import"./index-CxlVzmd4.js";import"./index-CDHa8WQD.js";import"./YoutubeIcon-o6fkbXE1.js";import"./SearchIcon-BtuEidnu.js";import"./proxy-CGS996nl.js";import"./index-CKZQg96L.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
