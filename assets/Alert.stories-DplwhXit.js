import{j as e}from"./iframe-Bb5AA7BS.js";import{f as j,d as c,g as _,e as o,c as b,h as I}from"./YoutubeIcon-BZIS_--j.js";import"./SearchIcon-C7a8_jES.js";import{a as S}from"./index-jbG8BFt3.js";import{c as A}from"./classnames-By7m_D43.js";import{B as w}from"./Button-CuhCZgfp.js";import{t as x}from"./Text-8eGyP5de.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_miVlwDn.js";import"./styles-S7yBqErU.js";const k=S([x({variant:"normal"}),"text-primary relative w-full rounded-lg border-1 border-(--alert-border) bg-(--alert-background) p-4 grid gap-y-2 items-center grid-cols-[auto_1fr_auto]","[&>svg]:size-4 [&>svg]:mr-2 [&>svg]:text-(--alert-accent) [&_[data-slot=alert-button]]:text-(--alert-accent)"],{variants:{variant:{info:["[--alert-background:var(--color-indigo-200)] dark:[--alert-background:var(--color-indigo-950)]","[--alert-border:var(--color-indigo-500)] dark:[--alert-border:var(--color-indigo-900)]","[--alert-accent:var(--color-indigo-700)] dark:[--alert-accent:var(--color-indigo-400)]"],success:["[--alert-background:var(--color-green-200)] dark:[--alert-background:var(--color-green-950)]","[--alert-border:var(--color-green-500)] dark:[--alert-border:var(--color-green-900)]","[--alert-accent:var(--color-green-700)] dark:[--alert-accent:var(--color-green-400)]"],warning:["[--alert-background:var(--color-yellow-100)] dark:[--alert-background:var(--color-yellow-950)]","[--alert-border:var(--color-yellow-500)] dark:[--alert-border:var(--color-yellow-900)]","[--alert-accent:var(--color-yellow-700)] dark:[--alert-accent:var(--color-yellow-400)]"],error:["[--alert-background:var(--color-red-200)] dark:[--alert-background:var(--color-red-950)]","[--alert-border:var(--color-red-500)] dark:[--alert-border:var(--color-red-900)]","[--alert-accent:var(--color-red-700)] dark:[--alert-accent:var(--color-red-400)]"]}},defaultVariants:{variant:"info"}});function t({className:r,variant:n,...l}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:A(k({variant:n}),r),...l})}function a({className:r,...n}){return e.jsx("div",{"data-slot":"alert-title",className:A(x({variant:"normal-bold"}),"text-(--alert-accent) col-start-2 col-end-4 line-clamp-1 min-h-4 sm:col-end-3",r),...n})}function s({className:r,...n}){return e.jsx("div",{"data-slot":"alert-description",className:A(x({variant:"normal"}),"text-current col-start-2 col-end-4 grid justify-items-start gap-1 sm:col-end-3",r),...n})}function i({className:r,...n}){return e.jsx(w,{"data-slot":"alert-button",variant:"outline",size:"sm",shape:"square",className:A("row-start-3 col-start-3 mt-2 sm:mt-0 sm:row-start-1 sm:row-end-3 sm:col-start-3",r),...n})}function f({variant:r,size:n="xs",...l}){switch(r){case"info":return e.jsx(_,{size:n,...l});case"success":return e.jsx(c,{size:n,...l});case"warning":case"error":return e.jsx(j,{size:n,...l});default:return null}}function B({variant:r,title:n,description:l,children:y,...T}){return e.jsxs(t,{variant:r,...T,children:[e.jsx(f,{variant:r}),e.jsx(a,{children:n}),l&&e.jsx(s,{children:l}),y]})}t.Helper=B;try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"info" | "warning" | "success" | "error" | null'}}}}}catch{}try{t.Helper.displayName="Alert.Helper",t.Helper.__docgenInfo={description:"",displayName:"Alert.Helper",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"info" | "warning" | "success" | "error" | null'}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}}}}}catch{}try{i.displayName="AlertButton",i.__docgenInfo={description:"",displayName:"AlertButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"destructive" | "primary" | "secondary" | "text" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | "xs" | null'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'"square" | "circle" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="AlertDescription",s.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}try{f.displayName="AlertIcon",f.__docgenInfo={description:"",displayName:"AlertIcon",props:{size:{defaultValue:{value:"xs"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "md" | "lg" | "xxs" | "xs" | "xl" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"info" | "warning" | "success" | "error" | null | undefined'}}}}}catch{}try{a.displayName="AlertTitle",a.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}const E={title:"Components/Alert",component:t},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(t,{variant:"info",children:[e.jsx(_,{}),e.jsx(a,{children:"Info Alert"}),e.jsx(s,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"success",children:[e.jsx(c,{}),e.jsx(a,{children:"Success Alert"}),e.jsx(s,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"warning",children:[e.jsx(j,{}),e.jsx(a,{children:"Warning Alert"}),e.jsx(s,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"error",children:[e.jsx(b,{}),e.jsx(a,{children:"Error Alert"}),e.jsx(s,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]})]})},u={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(c,{}),e.jsx(a,{children:r.title}),e.jsx(s,{children:r.description}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},p={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(c,{}),e.jsx(a,{children:r.title}),e.jsx(s,{children:r.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},g={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(a,{children:r.title}),e.jsx(s,{children:r.description}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},h={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(a,{children:r.title}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),args:{title:"Success! Your changes have been saved",variant:"info"}},v={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(c,{}),e.jsx(a,{children:r.title}),e.jsx(s,{children:r.description}),e.jsxs("div",{className:"col-start-2 flex gap-2",children:[e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]}),e.jsxs(i,{children:[e.jsx(I,{}),"Reset"]})]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},m={render:r=>e.jsx(t.Helper,{variant:r.variant,title:r.title,description:r.description,children:e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
      <Alert variant="success">
        <CheckmarkIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
      <Alert variant="warning">
        <WarningIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
      <Alert variant="error">
        <CloseIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
      </Alert>
    </div>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <CheckmarkIcon />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <CheckmarkIcon />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <AlertTitle>{args.title}</AlertTitle>
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    variant: 'info'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <CheckmarkIcon />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
      <div className="col-start-2 flex gap-2">
        <AlertButton>
          <SettingsIcon />
          Configure
        </AlertButton>
        <AlertButton>
          <RefreshIcon />
          Reset
        </AlertButton>
      </div>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Alert.Helper variant={args.variant} title={args.title} description={args.description}>
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert.Helper>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...m.parameters?.docs?.source}}};const O=["All","Default","WithoutButton","WithoutIcon","WithouDescription","BottomButtons","Helper"];export{d as All,v as BottomButtons,u as Default,m as Helper,h as WithouDescription,p as WithoutButton,g as WithoutIcon,O as __namedExportsOrder,E as default};
