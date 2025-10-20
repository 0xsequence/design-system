import{j as r,r as p}from"./iframe-Cl2_sPGO.js";import{T as i}from"./Text-Cm33UXDq.js";import{C as l}from"./Collapsible-C_6o1LTY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHTpT2tX.js";import"./index-jbG8BFt3.js";import"./classnames-By7m_D43.js";import"./index-CW9leUiE.js";import"./index-DVN1Ucj3.js";import"./index-C-0pdBG7.js";import"./index-FSVptkDK.js";import"./index-C1qlk7jn.js";import"./index-512678Tw.js";import"./index-s7iFmre4.js";import"./YoutubeIcon-gIJFUimF.js";import"./SearchIcon-OaXi2OyC.js";import"./styles-S7yBqErU.js";import"./proxy-DQ5Ee-gt.js";import"./index-CRkD5PBJ.js";const M={title:"Components/Collapsible",component:l},n=()=>{const[e,a]=p.useState(!1);return p.useEffect(()=>{a(!0)},[]),r.jsx(l,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(n,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...s.parameters?.docs?.source}}};const _=["Default","Controlled"];export{s as Controlled,t as Default,_ as __namedExportsOrder,M as default};
