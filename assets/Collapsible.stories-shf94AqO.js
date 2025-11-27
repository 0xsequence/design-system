import{j as r,r as n}from"./iframe-G3L-J_dS.js";import{C as p}from"./Card-D3AYbSKL.js";import{T as s}from"./Text-CTAJ6xdG.js";import{C as i}from"./Collapsible-CfUoG7Db.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D7qZL5Sf.js";import"./index-CYg41-m8.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-D1T7iklg.js";import"./index-CC3JdRBX.js";import"./index-BxOPpKOk.js";import"./index-B-Mh9GO1.js";import"./index-BHiDyPgh.js";import"./YoutubeIcon-DH9V2PGM.js";import"./SearchIcon-CtixcPZ3.js";import"./index-CSY1MS54.js";import"./proxy-DIq3_eBN.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: <Card>
        {[1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
            <p>Item {x}</p>
          </Text>)}
      </Card>,
    variant: 'default'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...t.parameters?.docs?.source}}};const _=["Default","Controlled"];export{t as Controlled,a as Default,_ as __namedExportsOrder,M as default};
