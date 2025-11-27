import{j as r,r as n}from"./iframe-BdNJ3tS_.js";import{C as p}from"./Card-B7JvHbFm.js";import{T as s}from"./Text-0pqb9V3N.js";import{C as i}from"./Collapsible-Tj-C5V22.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFBpQ4u7.js";import"./index-DhWVUv1C.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-BEXvY1IK.js";import"./index-DAX1YB6G.js";import"./index-Bmp3b_ZE.js";import"./index-Dw1YjwRx.js";import"./index-DNGmTdtY.js";import"./YoutubeIcon-DEJBtFXw.js";import"./SearchIcon-CS4SWwZk.js";import"./index-CV6oM7Jk.js";import"./proxy-aqHX3dUG.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
