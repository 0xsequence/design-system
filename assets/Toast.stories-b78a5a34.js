import{j as a}from"./jsx-runtime-5c44f2f2.js";import{X as x}from"./WarningIcon-50a98c13.js";import{B as y}from"./Button-385abe5e.js";import{C as D}from"./Card-13ff0e3d.js";import{T as v,a as j,u as E}from"./Toast-0f269ec1.js";import"./index-32f9f3e1.js";import"./Box-d2820196.js";import"./atoms-c8fed878.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Text-13c0f3dc.js";import"./typography-f274f330.js";/* empty css                              */import"./index.module-c4cb74e4.js";import"./index-81ed4395.js";import"./index.module-da5321b3.js";import"./index.module-3f6d28be.js";import"./index.module-7f5f77c0.js";import"./index.module-065ada07.js";import"./index.module-87cbc37c.js";import"./index.module-e6d5be4a.js";import"./IconButton-6e3f5233.js";import"./index-8301207e.js";import"./motion-2413b055.js";const V={title:"Components/Toast",component:v},n=r=>a.jsx(j,{swipeDirection:"right",children:a.jsx(C,{...r})}),C=r=>{const W=E();return a.jsx(D,{position:"relative",children:a.jsx(y,{label:"Raise a Toast",onClick:()=>{W({...r,title:r.title+" "+new Date().getMilliseconds()})}})})},e={render:n,args:{title:"Title",description:"Description"}},t={render:n,args:{icon:x,title:"Transaction Sent",description:"Waiting for confirmation"}},o={render:n,args:{title:"Success",description:"Description",variant:"success"}},s={render:n,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    title: 'Title',
    description: 'Description'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    icon: TransactionIcon,
    title: 'Transaction Sent',
    description: 'Waiting for confirmation'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,g,S;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    title: 'Success',
    description: 'Description',
    variant: 'success'
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var T,f,h;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    title: 'Error',
    description: 'The transaction failed to send because the relayer encountered an error. "Not enough gas"',
    variant: 'error'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Y=["Default","WithIcon","Success","Error"];export{e as Default,s as Error,o as Success,t as WithIcon,Y as __namedExportsOrder,V as default};
//# sourceMappingURL=Toast.stories-b78a5a34.js.map
