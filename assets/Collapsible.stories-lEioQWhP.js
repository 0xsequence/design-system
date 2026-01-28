import{j as r,r as n}from"./iframe-DGRragEl.js";import{C as p}from"./Card-C5YORt9n.js";import{T as s}from"./Text-BBnnG5Ni.js";import{C as i}from"./Collapsible-DLz5sivv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIRmKe4O.js";import"./index-DDA3UnYo.js";import"./classnames-Cf5f3TJi.js";import"./styles-D3VuZg3D.js";import"./index-2S6m326A.js";import"./index-CRD4-0oN.js";import"./index-pHviz2CM.js";import"./index-DYcakxSQ.js";import"./index-BuqScHpa.js";import"./YoutubeIcon-CQIEBzMJ.js";import"./SearchIcon-DJrCE013.js";import"./proxy-Bt8rOWfG.js";import"./index-K58aGH6_.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
