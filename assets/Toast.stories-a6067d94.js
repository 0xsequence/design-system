import{a as D,j as r}from"./jsx-runtime-a9c13c85.js";import{r as E}from"./index-d8ade8ea.js";import{R as x}from"./WarningIcon-60d06b1a.js";import{B as C}from"./Button-c055484d.js";import{C as b}from"./Card-4eb0dff8.js";import{T as W,a as I,b as j}from"./Toast-3aa22492.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-9e9f1e0d.js";import"./atoms-53256ec3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Text-755617cc.js";import"./typography-f274f330.js";/* empty css                              */import"./extends-9cd95192.js";import"./index-6cf4ba34.js";import"./index.module-99b258bb.js";import"./index.module-4456f0d6.js";import"./index.module-a3790cd2.js";import"./index.module-8c8c5ddb.js";import"./index.module-5c3234a3.js";import"./index.module-cacec922.js";import"./index.module-ba9cd207.js";import"./IconButton-fd570a0d.js";const Z={title:"Components/Toast",component:W},a=v=>{const[y,n]=E.useState(!0);return D(I,{swipeDirection:"right",children:[r(b,{position:"relative",children:r(C,{label:"Raise a Toast",onClick:()=>{n(!1),setTimeout(()=>{n(!0)},250)}})}),r(j,{}),r(W,{...v,open:y,onOpenChange:n})]})},e={render:a,args:{title:"Title",description:"Description"}},t={render:a,args:{icon:x,title:"Transaction Sent",description:"Waiting for confirmation"}},o={render:a,args:{title:"Success",description:"Description",variant:"success"}},s={render:a,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,T,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    title: 'Error',
    description: 'The transaction failed to send because the relayer encountered an error. "Not enough gas"',
    variant: 'error'
  }
}`,...(h=(T=s.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const $=["Default","WithIcon","Success","Error"];export{e as Default,s as Error,o as Success,t as WithIcon,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Toast.stories-a6067d94.js.map
