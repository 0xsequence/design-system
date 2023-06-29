import{j as a}from"./jsx-runtime-5c44f2f2.js";import{c as x}from"./WarningIcon-3f6f3ec5.js";import{B as y}from"./Button-b6c8e747.js";import{C as D}from"./Card-3764afae.js";import{T as v,a as j,u as E}from"./Toast-a83b4f60.js";import"./index-32f9f3e1.js";import"./Box-2976c0bf.js";import"./atoms-8c839198.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./Text-ee7d813c.js";import"./typography-f274f330.js";/* empty css                              */import"./index-6f43092a.js";import"./index-81ed4395.js";import"./index-b52b8797.js";import"./index-8f4e5a65.js";import"./index-7b73788f.js";import"./index-f4397dff.js";import"./index-71218d5e.js";import"./index-3d0a8b6c.js";import"./IconButton-f3cd9676.js";import"./index-f81d6c2b.js";import"./motion-4bf1f684.js";const X={title:"Components/Toast",component:v},n=r=>a.jsx(j,{swipeDirection:"right",children:a.jsx(C,{...r})}),C=r=>{const W=E();return a.jsx(D,{position:"relative",children:a.jsx(y,{label:"Raise a Toast",onClick:()=>{W({...r,title:r.title+" "+new Date().getMilliseconds()})}})})},e={render:n,args:{title:"Title",description:"Description"}},t={render:n,args:{icon:x,title:"Transaction Sent",description:"Waiting for confirmation"}},o={render:n,args:{title:"Success",description:"Description",variant:"success"}},s={render:n,args:{title:"Error",description:'The transaction failed to send because the relayer encountered an error. "Not enough gas"',variant:"error"}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
//# sourceMappingURL=Toast.stories-019654a6.js.map
