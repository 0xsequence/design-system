import{j as r,r as n}from"./iframe-B9jufxq_.js";import{C as p}from"./Card-lRkQMnVv.js";import{T as s}from"./Text-DpREocI-.js";import{C as i}from"./Collapsible-BacxqcsM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cl3T4KxX.js";import"./index-Dbn9g3EI.js";import"./classnames-DK8XftlJ.js";import"./styles-C6k-R51j.js";import"./index-DlS0rI_d.js";import"./index-8gTRn2Ok.js";import"./index-BWQwilOI.js";import"./index-C1m46oaf.js";import"./index-C_5gRzt5.js";import"./YoutubeIcon-B1ZxPFLX.js";import"./SearchIcon-CzQdd1tx.js";import"./proxy-C0xMH0QD.js";import"./index-jsX3ueKN.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
