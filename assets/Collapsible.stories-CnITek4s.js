import{j as r,r as i}from"./iframe-DJ_XphsX.js";import{C as n}from"./Card-CQvEsQRC.js";import{T as l}from"./Text-Boqmi4mg.js";import{C as p}from"./Collapsible-CD_rF4X4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvHFviMa.js";import"./index-jbG8BFt3.js";import"./styles-S7yBqErU.js";import"./classnames-By7m_D43.js";import"./index-BGoT_aDD.js";import"./index-D_GheK-M.js";import"./index-CN181aYm.js";import"./index-Diy23PQM.js";import"./index-CI3BnOve.js";import"./index-C0arutR-.js";import"./index-Zh5foV5Z.js";import"./YoutubeIcon-Bt_Qs2gG.js";import"./SearchIcon-CPEWugsp.js";import"./proxy-DfSGokOI.js";import"./index-CqURsko_.js";const D={title:"Components/Collapsible",component:p},m=()=>{const[e,s]=i.useState(!1);return i.useEffect(()=>{s(!0)},[]),r.jsx(p,{open:e,label:"My Heading",onOpenChange:o=>s(o),children:[1,2,3,4,5].map(o=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:r.jsx(n,{children:[1,2,3,4,5].map(e=>r.jsx(l,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},a={render:()=>r.jsx(m,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
