import{j as a}from"./jsx-runtime-a9c13c85.js";import{W as y}from"./WarningIcon-90ab5d0b.js";import{B as D}from"./Button-ffcda75d.js";import{C as v}from"./Card-30cec54e.js";import{T as E,a as C,u as I}from"./Toast-0a085969.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./Box-bf594931.js";import"./atoms-c8fed878.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Text-9dc723e0.js";import"./typography-f274f330.js";/* empty css                              */import"./extends-98964cd2.js";import"./index-6cf4ba34.js";import"./index.module-99b258bb.js";import"./index.module-dbe82d0b.js";import"./index.module-25c2402a.js";import"./index.module-67c2286f.js";import"./index.module-cfb5ab71.js";import"./index.module-f5e7966b.js";import"./index.module-3cdd84d6.js";import"./IconButton-6a9773e1.js";import"./index-e15af79d.js";import"./motion-bd85eac6.js";const Z={title:"Components/Toast",component:E},i=r=>a(C,{swipeDirection:"right",children:a(b,{...r})}),b=r=>{const W=I();return a(v,{position:"relative",children:a(D,{label:"Raise a Toast",onClick:()=>{W({...r,title:r.title+" "+new Date().getMilliseconds()})}})})},e={render:i,args:{title:"Title",description:"Description"}},t={render:i,args:{icon:y,title:"Transaction Sent",description:"Waiting for confirmation"}},o={render:i,args:{title:"Success",description:"Description",variant:"success"}},s={render:i,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const $=["Default","WithIcon","Success","Error"];export{e as Default,s as Error,o as Success,t as WithIcon,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Toast.stories-147b418c.js.map
