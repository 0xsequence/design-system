import{j as r,r as p}from"./iframe-W8CQ_rwF.js";import{T as i}from"./Text-CL-e_B5y.js";import{C as l}from"./Collapsible-DwLujEmg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-b2LdNEc6.js";import"./index-jbG8BFt3.js";import"./classnames-By7m_D43.js";import"./index-_3qKWR99.js";import"./index-CD2wX62V.js";import"./index-wI-UwU1v.js";import"./index-BhMQtcnu.js";import"./index-D-sGg7I3.js";import"./index-B4Uac-qr.js";import"./index-DCD3uEP6.js";import"./YoutubeIcon-DgCWk8-E.js";import"./SearchIcon-Bxp8lzZ2.js";import"./styles-S7yBqErU.js";import"./proxy-Cdfi5OGW.js";import"./index-B_c8BHbR.js";const M={title:"Components/Collapsible",component:l},n=()=>{const[e,a]=p.useState(!1);return p.useEffect(()=>{a(!0)},[]),r.jsx(l,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(n,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...s.parameters?.docs?.source}}};const _=["Default","Controlled"];export{s as Controlled,t as Default,_ as __namedExportsOrder,M as default};
