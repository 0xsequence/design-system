import{j as r,r as i}from"./iframe-imqmADb9.js";import{C as n}from"./Card-BF3FKXNM.js";import{T as l}from"./Text-DN-nxdD3.js";import{C as p}from"./Collapsible-C7q0Dkgo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dur2dp5G.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-C1hu9QE5.js";import"./index-BvjwvPri.js";import"./index-LrZt08z2.js";import"./index-CHYKvDgA.js";import"./index-Bj_bDbZu.js";import"./index-D60cBVkY.js";import"./index-CHgs41qu.js";import"./YoutubeIcon-B518judn.js";import"./SearchIcon-B0ztPS5D.js";import"./proxy-BOR9VSKs.js";import"./index-Dt-nP7k1.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
