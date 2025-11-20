import{j as r,r as n}from"./iframe-CHBHj3kw.js";import{C as p}from"./Card-FCXCJxul.js";import{T as s}from"./Text-D915IJiq.js";import{C as i}from"./Collapsible-29yJwcC4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mXZaKy0B.js";import"./index-BaK8Khk_.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-D40SJu4h.js";import"./index-zr3GIdRv.js";import"./index-w1d6ISs3.js";import"./index-D7goAHtA.js";import"./index-BTJbZXbg.js";import"./YoutubeIcon-VoF5lEbF.js";import"./SearchIcon-188ELr__.js";import"./proxy-CRdVve5T.js";import"./index-BwVWqnBW.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
