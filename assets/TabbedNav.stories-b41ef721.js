import{j as e}from"./jsx-runtime-5c44f2f2.js";import{r as T}from"./index-32f9f3e1.js";import{B as h}from"./Badge-288bb621.js";import{B as o}from"./Box-2976c0bf.js";import{T as S}from"./Text-ee7d813c.js";import{c as y,d as j}from"./WarningIcon-3f6f3ec5.js";import{T as b}from"./TabbedNav-698c71ce.js";import"./atoms-8c839198.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./typography-f274f330.js";import"./Button-b6c8e747.js";const _={title:"Components/TabbedNav",component:b},l=t=>new Promise(n=>setTimeout(n,t*1e3)),g=[{label:"Wallet",value:"wallet",onLoad:()=>!0},{label:"Simple",value:"simple"},{label:"Another Tab",value:"another",onLoad:()=>!0},{label:e.jsxs(o,{gap:"1",alignItems:"center",children:["History",e.jsx(h,{value:"3"})]}),leftIcon:y,value:"history",onLoad:async()=>(console.log("processing..."),await l(1),!0)},{label:"Contacts (Fails to load)",leftIcon:j,value:"contacts",onLoad:async()=>(console.log("expecting fail..."),await l(1),!1)},{label:"Disabled",value:"disabled",disabled:!0}],f=t=>{const[n,x]=T.useState("wallet"),v=s=>{x(s)};return e.jsxs(o,{flexDirection:"column",gap:"4",children:[e.jsx(o,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e.jsx(b,{...t,onTabChange:s=>v(s)})}),e.jsx(o,{background:"backgroundSecondary",padding:"4",borderRadius:"md",children:e.jsx(S,{variant:"normal",color:"text100",children:n})})]})},a={render:f,args:{defaultValue:"wallet",size:"sm",tabs:g}},r={render:f,args:{defaultValue:"wallet",variant:"line",tabs:g}};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    defaultValue: 'wallet',
    size: 'sm',
    tabs
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    defaultValue: 'wallet',
    variant: 'line',
    tabs
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const z=["Pill","LineTabs"];export{r as LineTabs,a as Pill,z as __namedExportsOrder,_ as default};
//# sourceMappingURL=TabbedNav.stories-b41ef721.js.map
