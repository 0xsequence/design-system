import{j as r,r as i}from"./iframe-CTFfaRek.js";import{C as n}from"./Card-Bj1bh1l9.js";import{T as l}from"./Text-DR9k2mot.js";import{C as p}from"./Collapsible-BjVttmkg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4TKdrc8d.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-Bmt3yUSx.js";import"./index-Bt2RGWft.js";import"./index-Bnp4PRvS.js";import"./index-BCS6wv80.js";import"./index-DDvZkNFF.js";import"./index-CKUwTZ8D.js";import"./index-DdlDeUdc.js";import"./YoutubeIcon-kM38GyGz.js";import"./SearchIcon-Cw3HZ8Js.js";import"./proxy-Dxk86Fas.js";import"./index-DeF7AC_o.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
