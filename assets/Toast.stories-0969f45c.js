import{j as a}from"./jsx-runtime-5c44f2f2.js";import{c as x}from"./WarningIcon-e31c29b3.js";import{B as y}from"./Button-6c430e4b.js";import{C as D}from"./Card-4d82cb2e.js";import{T as v,a as j,u as E}from"./Toast-744cde3a.js";import"./index-32f9f3e1.js";import"./Box-5f378019.js";import"./atoms-f7bcb57b.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Text-31e33532.js";import"./typography-f274f330.js";/* empty css                              */import"./extends-98964cd2.js";import"./index-81ed4395.js";import"./index-b52b8797.js";import"./index-d90f8428.js";import"./index-c70d388c.js";import"./index-5c3fca77.js";import"./index-bde05f19.js";import"./index-6d3ab4f1.js";import"./index-af760e26.js";import"./IconButton-eac36191.js";import"./index-f81d6c2b.js";import"./motion-4bf1f684.js";const Y={title:"Components/Toast",component:v},i=r=>a.jsx(j,{swipeDirection:"right",children:a.jsx(C,{...r})}),C=r=>{const W=E();return a.jsx(D,{position:"relative",children:a.jsx(y,{label:"Raise a Toast",onClick:()=>{W({...r,title:r.title+" "+new Date().getMilliseconds()})}})})},e={render:i,args:{title:"Title",description:"Description"}},t={render:i,args:{icon:x,title:"Transaction Sent",description:"Waiting for confirmation"}},o={render:i,args:{title:"Success",description:"Description",variant:"success"}},s={render:i,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=Toast.stories-0969f45c.js.map
