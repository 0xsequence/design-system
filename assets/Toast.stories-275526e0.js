import{j as a}from"./jsx-runtime-a9c13c85.js";import{R as y}from"./WarningIcon-60d06b1a.js";import{B as D}from"./Button-c055484d.js";import{C as v}from"./Card-4eb0dff8.js";import{T as E,a as C,u as I}from"./Toast-4a391284.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-9e9f1e0d.js";import"./atoms-53256ec3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Text-755617cc.js";import"./typography-f274f330.js";/* empty css                              */import"./extends-98964cd2.js";import"./index-6cf4ba34.js";import"./index.module-99b258bb.js";import"./index.module-4456f0d6.js";import"./index.module-a3790cd2.js";import"./index.module-f536abc8.js";import"./index.module-5c3234a3.js";import"./index.module-cacec922.js";import"./index.module-ba9cd207.js";import"./IconButton-fd570a0d.js";const X={title:"Components/Toast",component:E},n=r=>a(C,{swipeDirection:"right",children:a(b,{...r})}),b=r=>{const W=I();return a(v,{position:"relative",children:a(D,{label:"Raise a Toast",onClick:()=>{W({...r,title:r.title+" "+new Date().getMilliseconds()})}})})},e={render:n,args:{title:"Title",description:"Description"}},t={render:n,args:{icon:y,title:"Transaction Sent",description:"Waiting for confirmation"}},o={render:n,args:{title:"Success",description:"Description",variant:"success"}},s={render:n,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    title: 'Title',
    description: 'Description'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    icon: TransactionIcon,
    title: 'Transaction Sent',
    description: 'Waiting for confirmation'
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Y=["Default","WithIcon","Success","Error"];export{e as Default,s as Error,o as Success,t as WithIcon,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Toast.stories-275526e0.js.map
