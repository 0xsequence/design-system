import{j as r,r as i}from"./iframe-CEBGsxht.js";import{C as n}from"./Card-D-18x28q.js";import{T as l}from"./Text-C1CTKZYh.js";import{C as p}from"./Collapsible-D92R1NMt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3n5f5AG.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-B_ewnVLa.js";import"./index-BgYWh0mh.js";import"./index-BOw7vfM6.js";import"./index-Co5Ovxbk.js";import"./index-C6O-H2UX.js";import"./index-DxOa_yPB.js";import"./index-Dr7tSuFd.js";import"./YoutubeIcon-CXHvyj1-.js";import"./SearchIcon-DVyE4Q8D.js";import"./proxy-B8PbKp_-.js";import"./index-58qcgVZi.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
