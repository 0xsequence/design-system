import{j as e}from"./iframe-B-gXriIV.js";import{d as x,c5 as y,c as _,aA as j,e as n,br as I}from"./YoutubeIcon-BN67stKu.js";import"./SearchIcon-BSAeUHNh.js";import{b as d,a as S}from"./classnames-Cf5f3TJi.js";import{B as m}from"./Button-vQIGopDi.js";import{t as g}from"./Text-Ckj9d3Gq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Du0pXh8g.js";import"./index-JMJ8yCtq.js";import"./styles-D3VuZg3D.js";const w=S([g({variant:"normal"}),"text-primary relative w-full rounded-lg border-1 overflow-hidden bg-(--callout-header) border-(--callout-header)"],{variants:{variant:{info:["[--callout-header:var(--color-indigo-500)] dark:[--callout-header:var(--color-indigo-900)]","[--callout-content:var(--color-indigo-200)] dark:[--callout-content:var(--color-indigo-950)]","[--callout-accent:var(--color-indigo-700)] dark:[--callout-accent:var(--color-indigo-400)]"],success:["[--callout-header:var(--color-green-500)] dark:[--callout-header:var(--color-green-900)]","[--callout-content:var(--color-green-200)] dark:[--callout-content:var(--color-green-950)]","[--callout-accent:var(--color-green-700)] dark:[--callout-accent:var(--color-green-400)]"],warning:["[--callout-header:var(--color-yellow-500)] dark:[--callout-header:var(--color-yellow-900)]","[--callout-content:var(--color-yellow-100)] dark:[--callout-content:var(--color-yellow-950)]","[--callout-accent:var(--color-yellow-700)] dark:[--callout-accent:var(--color-yellow-400)]"],error:["[--callout-header:var(--color-red-500)] dark:[--callout-header:var(--color-red-900)]","[--callout-content:var(--color-red-200)] dark:[--callout-content:var(--color-red-950)]","[--callout-accent:var(--color-red-700)] dark:[--callout-accent:var(--color-red-400)]"]}},defaultVariants:{variant:"info"}});function l({className:t,variant:a,...r}){return e.jsx("div",{"data-slot":"callout",role:"alert",className:d(w({variant:a}),t),...r})}function p({className:t,...a}){return e.jsx("div",{"data-slot":"callout-header",className:d(g({variant:"normal-bold"}),"bg-(--callout-header) text-white flex items-center justify-between px-4 py-3",t),...a})}function h({className:t,...a}){return e.jsx("div",{"data-slot":"callout-content",className:d("bg-(--callout-content) flex flex-col items-start gap-2 sm:items-center sm:flex-row sm:justify-between px-4 py-3",t),...a})}function o({className:t,...a}){return e.jsx(m,{"data-slot":"callout-button",variant:"outline",size:"sm",shape:"circle",className:d(t,"text-(--callout-accent)"),...a})}function f({variant:t,size:a="xs",...r}){switch(t){case"info":return e.jsx(j,{size:a,...r});case"success":return e.jsx(_,{size:a,...r});case"warning":case"error":return e.jsx(y,{size:a,...r});default:return null}}function N({variant:t,title:a,children:r,onClose:v,...C}){return e.jsxs(l,{variant:t,...C,children:[e.jsxs(p,{children:[e.jsxs("div",{className:"line-clamp-1 min-h-4 flex items-center gap-2",children:[e.jsx(f,{variant:t}),a]}),e.jsx(m,{variant:"text",size:"xs",shape:"square",iconOnly:!0,onClick:v,className:"text-white",children:e.jsx(x,{})})]}),r&&e.jsx(h,{children:r})]})}l.Helper=N;try{l.displayName="Callout",l.__docgenInfo={description:"",displayName:"Callout",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"info" | "warning" | "success" | "error" | null'}}}}}catch{}try{l.Helper.displayName="Callout.Helper",l.Helper.__docgenInfo={description:"",displayName:"Callout.Helper",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"info" | "warning" | "success" | "error" | null'}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{o.displayName="CalloutButton",o.__docgenInfo={description:"",displayName:"CalloutButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"destructive" | "primary" | "secondary" | "text" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="CalloutContent",h.__docgenInfo={description:"",displayName:"CalloutContent",props:{}}}catch{}try{p.displayName="CalloutHeader",p.__docgenInfo={description:"",displayName:"CalloutHeader",props:{}}}catch{}try{f.displayName="CalloutIcon",f.__docgenInfo={description:"",displayName:"CalloutIcon",props:{size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:'"default" | "xs" | "sm" | "md" | "lg" | "xxs" | "xl" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"info" | "warning" | "success" | "error" | null | undefined'}}}}}catch{}const z={title:"Components/Callout",component:l.Helper},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(l.Helper,{variant:"info",title:"Info Callout",children:["This is the content description of the callout.",e.jsxs(o,{children:[e.jsx(n,{}),"Configure"]})]}),e.jsxs(l.Helper,{variant:"success",title:"Success Callout",children:["This is the content description of the callout.",e.jsxs(o,{children:[e.jsx(n,{}),"Configure"]})]}),e.jsxs(l.Helper,{variant:"warning",title:"Warning Callout",children:["This is the content description of the callout.",e.jsxs(o,{children:[e.jsx(n,{}),"Configure"]})]}),e.jsxs(l.Helper,{variant:"error",title:"Error Callout",children:["This is the content description of the callout.",e.jsxs(o,{children:[e.jsx(n,{}),"Configure"]})]})]})},c={args:{title:"Success! Your changes have been saved",children:"This is an alert with icon, title and description.",variant:"info"}},i={args:{title:"Success! Your changes have been saved",variant:"info"}},u={args:{title:"Success! Your changes have been saved",variant:"info",children:e.jsxs(e.Fragment,{children:["This is the content description of the callout.",e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(o,{children:[e.jsx(n,{}),"Configure"]}),e.jsxs(o,{children:[e.jsx(I,{}),"Refresh"]})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Callout.Helper variant="info" title="Info Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout.Helper>
      <Callout.Helper variant="success" title="Success Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout.Helper>
      <Callout.Helper variant="warning" title="Warning Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout.Helper>
      <Callout.Helper variant="error" title="Error Callout">
        This is the content description of the callout.
        <CalloutButton>
          <SettingsIcon />
          Configure
        </CalloutButton>
      </Callout.Helper>
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success! Your changes have been saved',
    children: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Success! Your changes have been saved',
    variant: 'info'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const E=["All","Default","WithoutChildren","MultipleButtons"];export{s as All,c as Default,u as MultipleButtons,i as WithoutChildren,E as __namedExportsOrder,z as default};
