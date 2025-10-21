import{j as r,r as i}from"./iframe-CnAZqjJQ.js";import{C as n}from"./Card-Bk_PEAiL.js";import{T as l}from"./Text-jyGqcgId.js";import{C as p}from"./Collapsible-Dh0xN2pr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9AHWryW.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-yhJx9RQT.js";import"./index-V-7hV6qw.js";import"./index-CWCeqCkq.js";import"./index-BMAcEV1u.js";import"./index-zbSwSSBC.js";import"./index-oTnd0MhS.js";import"./index-BS3CxtFk.js";import"./YoutubeIcon-CNLqNLfL.js";import"./SearchIcon-C8MYC0zN.js";import"./proxy-DiEKXNd_.js";import"./index-B_FkwCuY.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: <Card>
        {[1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
            <p>Item {x}</p>
          </Text>)}
      </Card>,
    variant: 'default'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...a.parameters?.docs?.source}}};const k=["Default","Controlled"];export{a as Controlled,t as Default,k as __namedExportsOrder,D as default};
