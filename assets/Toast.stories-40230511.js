import{j as a}from"./jsx-runtime-69eee039.js";import{S as x}from"./WarningIcon-70ed10e0.js";import{B as y}from"./Button-48a02c83.js";import{C as D}from"./Card-3644cb4b.js";import{T as v,a as j,u as E}from"./Toast-8e7c89be.js";import"./index-7c191284.js";import"./Box-64e6f390.js";import"./atoms-27ff9aca.js";import"./createRuntimeFn-f8e161c6.esm-526ef7c2.js";import"./Text-23aecd3e.js";import"./typography-f274f330.js";/* empty css                              */import"./index-7928010f.js";import"./index-ecbee218.js";import"./index-14f6abe2.js";import"./index-089b5fa1.js";import"./index-483e5ee9.js";import"./index-a4cfa2c4.js";import"./index-73913900.js";import"./index-686fc997.js";import"./IconButton-30f9ce6b.js";import"./index-686b454f.js";import"./motion-cc45ae8c.js";const X={title:"Components/Toast",component:v},n=r=>a.jsx(j,{swipeDirection:"right",children:a.jsx(C,{...r})}),C=r=>{const W=E();return a.jsx(D,{position:"relative",children:a.jsx(y,{label:"Raise a Toast",onClick:()=>{W({...r,title:r.title+" "+new Date().getMilliseconds()})}})})},e={render:n,args:{title:"Title",description:"Description"}},t={render:n,args:{icon:x,title:"Transaction Sent",description:"Waiting for confirmation"}},o={render:n,args:{title:"Success",description:"Description",variant:"success"}},s={render:n,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Y=["Default","WithIcon","Success","Error"];export{e as Default,s as Error,o as Success,t as WithIcon,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Toast.stories-40230511.js.map
