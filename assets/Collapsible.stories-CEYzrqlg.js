import{j as r}from"./jsx-runtime-z8MfsBtr.js";import{r as l}from"./index-D1TSixAU.js";import{T as u}from"./Text-CD99E7ow.js";import{C as x}from"./Collapsible-BO1HPinv.js";import"./index-C9rmetsa.js";import"./index-DEvaI7vP.js";import"./index-DKHC-OhD.js";import"./clsx-B-dksMZM.js";import"./classnames-Dx2cly0x.js";import"./index-BWtkTp-R.js";import"./index-CuZtKiOG.js";import"./index-Dcf1nc42.js";import"./index-D2m0ySOf.js";import"./index-DogTl_U1.js";import"./index-VR-_z_Zs.js";import"./WarningIcon-CNboakl5.js";import"./proxy-CYprtF8D.js";import"./index-C3i99lKw.js";const q={title:"Components/Collapsible",component:x},C=()=>{const[e,a]=l.useState(!1);return l.useEffect(()=>{a(!0)},[]),r.jsx(x,{open:e,label:"My Heading",onOpenChange:o=>a(o),children:[1,2,3,4,5].map(o=>r.jsx(u,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",o]})},o))})},t={args:{label:"My Heading",children:[1,2,3,4,5].map(e=>r.jsx(u,{variant:"normal",color:"secondary",asChild:!0,children:r.jsxs("p",{children:["Item ",e]})},e))}},s={render:()=>r.jsx(C,{})};var p,i,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>)
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <CollapsibleStory />
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["Default","Controlled"];export{s as Controlled,t as Default,w as __namedExportsOrder,q as default};
