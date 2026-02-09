import{j as r,r as n}from"./iframe-De7NVgFr.js";import{C as p}from"./Card-DMUNRQcs.js";import{T as s}from"./Text-CJZY4yfP.js";import{C as i}from"./Collapsible-CpW3ei5k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7CftIXn.js";import"./index-C3I5MdAp.js";import"./classnames-DK8XftlJ.js";import"./styles-C6k-R51j.js";import"./index-BkyEAflG.js";import"./index-CbkeZYx9.js";import"./index-BIMi7cii.js";import"./index-DS8uiBBu.js";import"./index-c9nVHYYu.js";import"./YoutubeIcon-BNZOWepH.js";import"./SearchIcon-CMx0bd85.js";import"./proxy-60bRN4Ec.js";import"./index-YQDsOx0F.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
