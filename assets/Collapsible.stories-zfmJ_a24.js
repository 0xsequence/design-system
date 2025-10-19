import{j as r,r as p}from"./iframe-mWsy5DIL.js";import{T as i}from"./Text-Bs-C56kQ.js";import{C as l}from"./Collapsible-CkBJBdcn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mk93tz1X.js";import"./index-jbG8BFt3.js";import"./classnames-By7m_D43.js";import"./index-D_NaJRpB.js";import"./index-DqqKcv3J.js";import"./index-CX0gOfQL.js";import"./index-Cr1yEiP_.js";import"./index-Bl1FvNUW.js";import"./index-BExzVwq1.js";import"./index-1p7VBw0K.js";import"./YoutubeIcon-DiA7ak3v.js";import"./SearchIcon-CMepZbkZ.js";import"./styles-S7yBqErU.js";import"./proxy-VLzjTa2_.js";import"./index-B_--NpCl.js";const M={title:"Components/Collapsible",component:l},n=()=>{const[e,a]=p.useState(!1);return p.useEffect(()=>{a(!0)},[]),r.jsx(l,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(n,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...s.parameters?.docs?.source}}};const _=["Default","Controlled"];export{s as Controlled,t as Default,_ as __namedExportsOrder,M as default};
