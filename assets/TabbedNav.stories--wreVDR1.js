import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as b}from"./index-D1TSixAU.js";import{B}from"./Badge-CBP9zc-4.js";import{T as P}from"./Text-3Q8ouUOS.js";import{g as W,h as E}from"./WarningIcon-C89T6cr0.js";import{c as A}from"./index-DKHC-OhD.js";import{B as D}from"./Button-ClSY7IPB.js";import{c as V}from"./classnames-D6E8UiG_.js";import"./index-C9rmetsa.js";import"./clsx-B-dksMZM.js";import"./index-DEvaI7vP.js";const O=A([""],{variants:{variant:{pill:"",line:"leading-5 text-[0.625rem] tracking-[0.8px]"},active:{true:"hover:opacity-100",false:""},disabled:{true:"opacity-50"}},compoundVariants:[{variant:"pill",active:!0,className:"bg-button-inverse text-inverse"},{variant:"pill",active:!1,className:"bg-transparent text-secondary"},{variant:"line",active:!0,className:"text-primary"},{variant:"line",active:!1,className:"text-secondary"}],defaultVariants:{variant:"pill"}}),u=r=>{const{className:t,defaultValue:m,onTabChange:s,size:n="sm",tabs:p,variant:i="pill",...q}=r,[C,g]=b.useState(!1),[v,x]=b.useState(m??p[0].value),k=async(l,a,o)=>{var y;l.preventDefault();const f=v;if(v===a.value)return;x(p[o].value),g(!0);const z=a.onLoad?await((y=a.onLoad)==null?void 0:y.call(a)):!0;g(!1),z?s==null||s(a.value):x(f)};return e.jsx("nav",{...q,children:e.jsx("ul",{className:"flex gap-2 list-none",children:p.map((l,a)=>{const o=l.value===v;return e.jsx("li",{className:V(i==="line"?o?"border-t-2 border-t-primary":"border-t-2 border-t-transparent":void 0),children:e.jsx(D,{className:V(O({active:o,variant:i}),t,i==="line"?"px-2":void 0,l.leftIcon?"pl-1":"pl-2","rounded-full"),variant:i==="line"?"text":"base",disabled:C||l.disabled,label:l.label,leftIcon:l.leftIcon??void 0,size:n,onClick:f=>k(f,l,a)})},a)})})})};try{u.displayName="TabbedNav",u.__docgenInfo={description:"",displayName:"TabbedNav",props:{defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"xs"'}]}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabOption[]"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((value: string) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | null"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"line" | "pill" | null'}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | null"}}}}}catch{}const Z={title:"Components/TabbedNav",component:u},h=r=>new Promise(t=>setTimeout(t,r*1e3)),L=[{label:"Wallet",value:"wallet",onLoad:()=>!0},{label:"Simple",value:"simple"},{label:"Another Tab",value:"another",onLoad:()=>!0},{label:e.jsxs("div",{className:"flex gap-1 items-center",children:["History",e.jsx(B,{value:"3"})]}),leftIcon:W,value:"history",onLoad:async()=>(console.log("processing..."),await h(1),!0)},{label:"Contacts (Fails to load)",leftIcon:E,value:"contacts",onLoad:async()=>(console.log("expecting fail..."),await h(1),!1)},{label:"Disabled",value:"disabled",disabled:!0}],I=r=>{const[t,m]=b.useState("wallet"),s=n=>{m(n)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"bg-background-secondary p-4 rounded-xl",children:e.jsx(u,{...r,onTabChange:n=>s(n)})}),e.jsx("div",{className:"bg-background-secondary p-4 rounded-xl",children:e.jsxs(P,{variant:"normal",color:"secondary",children:[t," content"]})})]})},d={render:I,args:{defaultValue:"wallet",size:"sm",tabs:L}},c={render:I,args:{defaultValue:"wallet",variant:"line",tabs:L}};var N,T,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    defaultValue: 'wallet',
    size: 'sm',
    tabs
  }
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var S,_,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: StoryWrapper,
  args: {
    defaultValue: 'wallet',
    variant: 'line',
    tabs
  }
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const $=["Pill","LineTabs"];export{c as LineTabs,d as Pill,$ as __namedExportsOrder,Z as default};
