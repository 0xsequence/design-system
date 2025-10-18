import{j as r,r as p}from"./iframe-B3kpiyOD.js";import{T as i}from"./Text-e_ltjFRZ.js";import{C as l}from"./Collapsible-DqMzE-3d.js";import"./preload-helper-PPVm8Dsz.js";import"./index-gx0kLIla.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./classnames-BpotA9kf.js";import"./index-DasyDd3f.js";import"./index-CbqgXv7s.js";import"./index-cMV1Efct.js";import"./index-ZtGoU9Ie.js";import"./index-iKnLInOP.js";import"./index-CXlh3Dc8.js";import"./YoutubeIcon-AjlfygPu.js";import"./SearchIcon-DdwnY7nY.js";import"./styles-xWsADqyq.js";import"./proxy-BzOJybYE.js";import"./index-orKq-jA3.js";const M={title:"Components/Collapsible",component:l},n=()=>{const[e,a]=p.useState(!1);return p.useEffect(()=>{a(!0)},[]),r.jsx(l,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(n,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...s.parameters?.docs?.source}}};const _=["Default","Controlled"];export{s as Controlled,t as Default,_ as __namedExportsOrder,M as default};
