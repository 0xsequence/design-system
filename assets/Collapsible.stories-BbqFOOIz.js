import{j as r,r as p}from"./iframe-CSRESmTU.js";import{T as i}from"./Text-p2GckUrS.js";import{C as l}from"./Collapsible-BDjYcVyz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0mFSTc1.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./classnames-BpotA9kf.js";import"./index-Bg7DSv7z.js";import"./index-CidDDlG4.js";import"./index-BzSE7Bg2.js";import"./index-e9u-PbPq.js";import"./index-BnqVf4-Z.js";import"./index-C6IXM18y.js";import"./YoutubeIcon-DR-OtC2F.js";import"./SearchIcon-D6Bv8Jcr.js";import"./styles-xWsADqyq.js";import"./proxy-CfrBVk1i.js";import"./index-BmrJg13i.js";const M={title:"Components/Collapsible",component:l},n=()=>{const[e,a]=p.useState(!1);return p.useEffect(()=>{a(!0)},[]),r.jsx(l,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(i,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(n,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...s.parameters?.docs?.source}}};const _=["Default","Controlled"];export{s as Controlled,t as Default,_ as __namedExportsOrder,M as default};
