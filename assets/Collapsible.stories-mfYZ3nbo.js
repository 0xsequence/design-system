import{j as r,r as n}from"./iframe-DluXL14b.js";import{C as p}from"./Card-2d4LjqYU.js";import{T as s}from"./Text-BGKnrZW7.js";import{C as i}from"./Collapsible-kWHtE27h.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DuLccRNF.js";import"./index-tl8OBpwC.js";import"./index-Cn1xQXcm.js";import"./styles-DSBOcsIh.js";import"./index-C7u8Io0a.js";import"./index-D1SxhvZb.js";import"./index-4mP4HuaF.js";import"./index-amj0uRAA.js";import"./index-C-JiqeXe.js";import"./YoutubeIcon-DXIEzWcP.js";import"./SearchIcon-B-kjMXvf.js";import"./index-O3hoZABl.js";import"./proxy-CJLu-NYr.js";const M={title:"Components/Collapsible",component:i},m=()=>{const[e,l]=n.useState(!0);return r.jsx(i,{open:e,label:"My Heading",onOpenChange:o=>l(o),children:[1,2,3,4,5].map(o=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},a={args:{label:"My Heading",children:r.jsx(p,{children:[1,2,3,4,5].map(e=>r.jsx(s,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}),variant:"default"}},t={render:()=>r.jsx(m,{})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
