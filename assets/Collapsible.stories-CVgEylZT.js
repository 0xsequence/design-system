import{j as r,r as n}from"./iframe-CObX0h75.js";import{C as p}from"./Card-C4t8Q3cu.js";import{T as s}from"./Text-DvQ1GGki.js";import{C as i}from"./Collapsible-CWxDrcTj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HMQzK9n8.js";import"./index-CD9tcZCH.js";import"./classnames-DhbneTZY.js";import"./styles-B8EbM403.js";import"./index-B2UFK8CB.js";import"./index-DKgMmEcO.js";import"./index-DYpVTSUo.js";import"./index-CTZ0LpFG.js";import"./index-DNoheCvn.js";import"./YoutubeIcon-D_F8O1L0.js";import"./SearchIcon-DtZFU47O.js";import"./proxy-DEuBTj6y.js";import"./index-CGrdQZEU.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
