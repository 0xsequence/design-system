import{j as r,r as p}from"./iframe-Bz-ddAwC.js";import{T as i}from"./Text-wkuvRbVB.js";import{C as l}from"./Collapsible-DnWy5mSh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPSoPwAt.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./classnames-BpotA9kf.js";import"./index-fhBrc-RH.js";import"./index-DqH2Vqe3.js";import"./index-CP3xbHDO.js";import"./index-CGiU0jV8.js";import"./index-cp1sPRg6.js";import"./index-CPI-mtpY.js";import"./YoutubeIcon-9O3mJvHi.js";import"./SearchIcon-B_2DtYKZ.js";import"./styles-xWsADqyq.js";import"./proxy-Bdze1vuI.js";import"./index-B1-O55cI.js";const M={title:"Components/Collapsible",component:l},n=()=>{const[e,a]=p.useState(!1);return p.useEffect(()=>{a(!0)},[]),r.jsx(l,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(n,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...s.parameters?.docs?.source}}};const _=["Default","Controlled"];export{s as Controlled,t as Default,_ as __namedExportsOrder,M as default};
