import{j as r,r as p}from"./iframe-CWsCIOC4.js";import{T as i}from"./Text-Bgv7srEr.js";import{C as l}from"./Collapsible-DKaUxaB-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bYQteW89.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./classnames-BpotA9kf.js";import"./index-yAjtcYmb.js";import"./index-BsWQS2MN.js";import"./index-BJ6BJlDV.js";import"./index-Cp2fMzlg.js";import"./index-CXYEY19K.js";import"./index-hTr9mg94.js";import"./YoutubeIcon-UIJKttLK.js";import"./SearchIcon-fX70cDTj.js";import"./styles-xWsADqyq.js";import"./proxy-tFu36HfK.js";import"./index-Cch5hzrm.js";const M={title:"Components/Collapsible",component:l},n=()=>{const[e,a]=p.useState(!1);return p.useEffect(()=>{a(!0)},[]),r.jsx(l,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(n,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...s.parameters?.docs?.source}}};const _=["Default","Controlled"];export{s as Controlled,t as Default,_ as __namedExportsOrder,M as default};
