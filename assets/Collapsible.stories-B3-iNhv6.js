import{j as r,r as n}from"./iframe-x9Az_wX2.js";import{C as p}from"./Card-DZ1qaUtC.js";import{T as s}from"./Text-t31Q8yHK.js";import{C as i}from"./Collapsible-BAeww_Va.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BXl-T_92.js";import"./index-DFxNDzw9.js";import"./classnames-DK8XftlJ.js";import"./styles-C6k-R51j.js";import"./index-C8u8ly2C.js";import"./index-Cvde6zCp.js";import"./index-B51yllUl.js";import"./index-BfOgRs1c.js";import"./index-DM-yDsNN.js";import"./YoutubeIcon-BWsm5fua.js";import"./SearchIcon-BbXkwZN0.js";import"./proxy-FlOrKV41.js";import"./index-CVsQf0ub.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
