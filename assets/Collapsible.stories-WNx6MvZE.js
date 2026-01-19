import{j as r,r as n}from"./iframe-CZP4gHtd.js";import{C as p}from"./Card-3QlxZTDd.js";import{T as s}from"./Text-DBRH2Wtc.js";import{C as i}from"./Collapsible-DjCRQzW_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CmkXS-XQ.js";import"./index-BjpyX3w7.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-Dke3-6Bf.js";import"./index-B7GFucF3.js";import"./index-BVEsDh0j.js";import"./index-BjKNahXz.js";import"./index-CKN7XpJf.js";import"./YoutubeIcon-DlAcv6wA.js";import"./SearchIcon-DTMAJTP4.js";import"./index-C79UbppQ.js";import"./proxy-COAjS1Qe.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
