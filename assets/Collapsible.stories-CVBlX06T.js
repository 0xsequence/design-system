import{j as a}from"./jsx-runtime-CexXSJP5.js";import{r as n}from"./index-BP8_t0zE.js";import{T as x}from"./Text-D7WiMjUB.js";import{C as u}from"./Collapsible-bQKaY9TQ.js";import"./Box-Cj61Dz8D.js";import"./helpers.css.ts.vanilla-CPoYynXN.js";/* empty css                            */import"./typography-BClcJN8w.js";/* empty css                              */import"./createRuntimeFn-62c9670f.esm-UsP-ae2O.js";import"./index-CeXBLvNc.js";import"./index-BxmsGmlx.js";import"./index-C-LszQ6e.js";import"./index-CnD1ylEj.js";import"./index-1rhZt4VZ.js";import"./WarningIcon-B1ZRyEXn.js";import"./motion-Djta419p.js";import"./index-cqZfV_1m.js";const q={title:"Components/Collapsible",component:u},f=()=>{const[r,s]=n.useState(!1);return n.useEffect(()=>{s(!0)},[]),a.jsx(u,{open:r,label:"My Heading",onOpenChange:e=>s(e),children:[1,2,3,4,5].map(e=>a.jsxs(x,{variant:"normal",as:"p",color:"text80",children:["Item ",e]},e))})},o={args:{label:"My Heading",children:[1,2,3,4,5].map(r=>a.jsxs(x,{variant:"normal",as:"p",color:"text80",children:["Item ",r]},r))}},t={render:()=>a.jsx(f,{})};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" as="p" color="text80" key={x}>
        Item {x}
      </Text>)
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["Default","Controlled"];export{t as Controlled,o as Default,w as __namedExportsOrder,q as default};