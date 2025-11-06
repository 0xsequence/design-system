import{j as e}from"./iframe-Br6yznQg.js";import{c as C,g as x,d as y,f as j,e as r,h as b}from"./YoutubeIcon-Bwn_lQZK.js";import"./SearchIcon-DFDNvj7J.js";import{a as S}from"./index-jbG8BFt3.js";import{c as u}from"./classnames-By7m_D43.js";import{B as p}from"./Button-BDhil9JP.js";import{t as m}from"./Text-BDWBT68b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7zMCLHX.js";import"./styles-S7yBqErU.js";const w=S([m({variant:"normal"}),"text-primary relative w-full rounded-lg border-1 overflow-hidden border-[var(--callout-header)]"],{variants:{variant:{info:["[--callout-header:var(--color-indigo-500)] dark:[--callout-header:var(--color-indigo-900)]","[--callout-content:var(--color-indigo-200)] dark:[--callout-content:var(--color-indigo-950)]","[--callout-button:var(--color-indigo-700)] dark:[--callout-button:var(--color-indigo-400)]"],success:["[--callout-header:var(--color-green-500)] dark:[--callout-header:var(--color-green-900)]","[--callout-content:var(--color-green-200)] dark:[--callout-content:var(--color-green-950)]","[--callout-button:var(--color-green-700)] dark:[--callout-button:var(--color-green-400)]"],warning:["[--callout-header:var(--color-yellow-500)] dark:[--callout-header:var(--color-yellow-900)]","[--callout-content:var(--color-yellow-100)] dark:[--callout-content:var(--color-yellow-950)]","[--callout-button:var(--color-yellow-700)] dark:[--callout-button:var(--color-yellow-400)]"],error:["[--callout-header:var(--color-red-500)] dark:[--callout-header:var(--color-red-900)]","[--callout-content:var(--color-red-200)] dark:[--callout-content:var(--color-red-950)]","[--callout-button:var(--color-red-700)] dark:[--callout-button:var(--color-red-400)]"]}},defaultVariants:{variant:"info"}}),B=a=>{switch(a){case"info":return j;case"success":return y;case"warning":case"error":return x}return null};function o({className:a,variant:n,title:v,children:d,onClose:f,...g}){const h=B(n);return e.jsxs("div",{"data-slot":"callout",role:"alert",className:u(w({variant:n}),a),...g,children:[e.jsxs("div",{"data-slot":"callout-header",className:"bg-[var(--callout-header)] flex items-center justify-between px-4 py-3",children:[e.jsxs("div",{className:u(m({variant:"normal-bold"}),"text-white dark:text-primary line-clamp-1 min-h-4 flex items-center gap-2"),children:[h&&e.jsx(h,{size:"xs"}),v]}),e.jsx(p,{variant:"ghost",size:"xs",shape:"square",iconOnly:!0,onClick:f,className:"text-white dark:text-primary",children:e.jsx(C,{})})]}),d&&e.jsx("div",{"data-slot":"callout-content",className:"bg-[var(--callout-content)] flex flex-col items-start gap-2 sm:items-center sm:flex-row sm:justify-between px-4 py-3",children:d})]})}function t({className:a,...n}){return e.jsx(p,{"data-slot":"callout-button",variant:"outline",size:"sm",shape:"circle",className:u(a,"text-[var(--callout-button)]"),...n})}try{o.displayName="Callout",o.__docgenInfo={description:"",displayName:"Callout",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"warning" | "info" | "success" | "error" | null'}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{t.displayName="CalloutButton",t.__docgenInfo={description:"",displayName:"CalloutButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"Components/Callout",component:o},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(o,{variant:"info",title:"Info Callout",children:["This is the content description of the callout.",e.jsxs(t,{children:[e.jsx(r,{}),"Configure"]})]}),e.jsxs(o,{variant:"success",title:"Success Callout",children:["This is the content description of the callout.",e.jsxs(t,{children:[e.jsx(r,{}),"Configure"]})]}),e.jsxs(o,{variant:"warning",title:"Warning Callout",children:["This is the content description of the callout.",e.jsxs(t,{children:[e.jsx(r,{}),"Configure"]})]}),e.jsxs(o,{variant:"error",title:"Error Callout",children:["This is the content description of the callout.",e.jsxs(t,{children:[e.jsx(r,{}),"Configure"]})]})]})},s={args:{title:"Success! Your changes have been saved",children:"This is an alert with icon, title and description.",variant:"info"}},i={args:{title:"Success! Your changes have been saved",variant:"info"}},c={args:{title:"Success! Your changes have been saved",variant:"info",children:e.jsxs(e.Fragment,{children:["This is the content description of the callout.",e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(t,{children:[e.jsx(r,{}),"Configure"]}),e.jsxs(t,{children:[e.jsx(b,{}),"Refresh"]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Callout variant="info" title="Info Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout>
      <Callout variant="success" title="Success Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout>
      <Callout variant="warning" title="Warning Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout>
      <Callout variant="error" title="Error Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout>
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success! Your changes have been saved',
    children: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success! Your changes have been saved',
    variant: 'info'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success! Your changes have been saved',
    variant: 'info',
    children: <>
        This is the content description of the callout.
        <div className="flex gap-2">
          <CalloutButton>
            <SettingsIcon />
            Configure
          </CalloutButton>
          <CalloutButton>
            <RefreshIcon />
            Refresh
          </CalloutButton>
        </div>
      </>
  }
}`,...c.parameters?.docs?.source}}};const E=["All","Default","WithoutChildren","MultipleButtons"];export{l as All,s as Default,c as MultipleButtons,i as WithoutChildren,E as __namedExportsOrder,W as default};
