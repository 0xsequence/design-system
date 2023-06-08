import{j as a}from"./jsx-runtime-5c44f2f2.js";import{X as x}from"./WarningIcon-c6b3c3c5.js";import{B as y}from"./Button-aaf5029e.js";import{C as D}from"./Card-0003b5bd.js";import{T as v,a as j,u as E}from"./Toast-0d40c491.js";import"./index-32f9f3e1.js";import"./Box-28194fa5.js";import"./atoms-f7bcb57b.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Text-693338cf.js";import"./typography-f274f330.js";/* empty css                              */import"./extends-98964cd2.js";import"./index-81ed4395.js";import"./index-da5321b3.js";import"./index-2790c83a.js";import"./index-8bfc7175.js";import"./index-955fdaf1.js";import"./index-1d46ede9.js";import"./index-bfda3ddd.js";import"./index-0d771675.js";import"./IconButton-049d46f1.js";import"./index-8301207e.js";import"./motion-2413b055.js";const Y={title:"Components/Toast",component:v},i=r=>a.jsx(j,{swipeDirection:"right",children:a.jsx(C,{...r})}),C=r=>{const W=E();return a.jsx(D,{position:"relative",children:a.jsx(y,{label:"Raise a Toast",onClick:()=>{W({...r,title:r.title+" "+new Date().getMilliseconds()})}})})},e={render:i,args:{title:"Title",description:"Description"}},t={render:i,args:{icon:x,title:"Transaction Sent",description:"Waiting for confirmation"}},o={render:i,args:{title:"Success",description:"Description",variant:"success"}},s={render:i,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Z=["Default","WithIcon","Success","Error"];export{e as Default,s as Error,o as Success,t as WithIcon,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Toast.stories-2db19a51.js.map
