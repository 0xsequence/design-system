import{j as a}from"./jsx-runtime-DoxjgJx5.js";import{r as n}from"./index-Cu9bd8lq.js";import{T as x}from"./Text-zHnUHxix.js";import{C as u}from"./Collapsible-1pxGqKmw.js";import"./Box-CUGYRZXa.js";/* empty css                            */import"./atoms-BU5rKxdr.js";import"./typography-BClcJN8w.js";/* empty css                              */import"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import"./index-BUipU-ak.js";import"./index-Ckls47V4.js";import"./index-BdmuMSao.js";import"./index-DMoNf_Sx.js";import"./index-Dg3K3zqj.js";import"./WarningIcon-DSPev2ex.js";import"./motion-DWzcalHj.js";import"./index-BEAc4zX4.js";const q={title:"Components/Collapsible",component:u},f=()=>{const[r,s]=n.useState(!1);return n.useEffect(()=>{s(!0)},[]),a.jsx(u,{open:r,label:"My Heading",onOpenChange:e=>s(e),children:[1,2,3,4,5].map(e=>a.jsxs(x,{variant:"normal",as:"p",color:"text80",children:["Item ",e]},e))})},o={args:{label:"My Heading",children:[1,2,3,4,5].map(r=>a.jsxs(x,{variant:"normal",as:"p",color:"text80",children:["Item ",r]},r))}},t={render:()=>a.jsx(f,{})};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" as="p" color="text80" key={x}>
        Item {x}
      </Text>)
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["Default","Controlled"];export{t as Controlled,o as Default,w as __namedExportsOrder,q as default};
