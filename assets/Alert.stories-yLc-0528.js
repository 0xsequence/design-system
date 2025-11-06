import{j as e}from"./iframe-CZovvVxl.js";import{f as A,e as o,d as v,g as f,c as x,h as j}from"./YoutubeIcon-CwFx9DMv.js";import"./SearchIcon-BUhX7EnK.js";import{a as _}from"./index-jbG8BFt3.js";import{c as g}from"./classnames-By7m_D43.js";import{B as y}from"./Button-BRuIlbUL.js";import{t as h}from"./Text-C24SMF1i.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQjr31dN.js";import"./styles-S7yBqErU.js";const T=_([h({variant:"normal"}),"text-primary relative w-full rounded-lg border-1 border-[var(--alert-border)] bg-[var(--alert-background)] p-4 grid gap-y-2 items-center grid-cols-[auto_1fr_auto]","[&>svg]:size-4 [&>svg]:mr-2 [&>svg]:text-[var(--alert-accent)] [&_[data-slot=alert-button]]:text-[var(--alert-accent)]"],{variants:{variant:{info:["[--alert-background:var(--color-indigo-200)] dark:[--alert-background:var(--color-indigo-950)]","[--alert-border:var(--color-indigo-500)] dark:[--alert-border:var(--color-indigo-900)]","[--alert-accent:var(--color-indigo-700)] dark:[--alert-accent:var(--color-indigo-400)]"],success:["[--alert-background:var(--color-green-200)] dark:[--alert-background:var(--color-green-950)]","[--alert-border:var(--color-green-500)] dark:[--alert-border:var(--color-green-900)]","[--alert-accent:var(--color-green-700)] dark:[--alert-accent:var(--color-green-400)]"],warning:["[--alert-background:var(--color-yellow-100)] dark:[--alert-background:var(--color-yellow-950)]","[--alert-border:var(--color-yellow-500)] dark:[--alert-border:var(--color-yellow-900)]","[--alert-accent:var(--color-yellow-700)] dark:[--alert-accent:var(--color-yellow-400)]"],error:["[--alert-background:var(--color-red-200)] dark:[--alert-background:var(--color-red-950)]","[--alert-border:var(--color-red-500)] dark:[--alert-border:var(--color-red-900)]","[--alert-accent:var(--color-red-700)] dark:[--alert-accent:var(--color-red-400)]"]}},defaultVariants:{variant:"info"}});function t({className:r,variant:s,...m}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:g(T({variant:s}),r),...m})}function n({className:r,...s}){return e.jsx("div",{"data-slot":"alert-title",className:g(h({variant:"normal-bold"}),"text-[var(--alert-accent)] col-start-2 col-end-4 line-clamp-1 min-h-4 sm:col-end-3",r),...s})}function a({className:r,...s}){return e.jsx("div",{"data-slot":"alert-description",className:g(h({variant:"normal"}),"text-current col-start-2 col-end-4 grid justify-items-start gap-1 sm:col-end-3",r),...s})}function i({className:r,...s}){return e.jsx(y,{"data-slot":"alert-button",variant:"outline",size:"sm",shape:"square",className:g("row-start-3 col-start-3 sm:row-start-1 sm:col-start-3 sm:row-span-2",r),...s})}try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"warning" | "info" | "success" | "error" | null'}}}}}catch{}try{i.displayName="AlertButton",i.__docgenInfo={description:"",displayName:"AlertButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'"square" | "circle" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="AlertDescription",a.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}try{n.displayName="AlertTitle",n.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}const q={title:"Components/Alert",component:t},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(t,{variant:"info",children:[e.jsx(A,{}),e.jsx(n,{children:"Info Alert"}),e.jsx(a,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"success",children:[e.jsx(v,{}),e.jsx(n,{children:"Success Alert"}),e.jsx(a,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"warning",children:[e.jsx(f,{}),e.jsx(n,{children:"Warning Alert"}),e.jsx(a,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"error",children:[e.jsx(x,{}),e.jsx(n,{children:"Error Alert"}),e.jsx(a,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]})]})},c={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(v,{}),e.jsx(n,{children:r.title}),e.jsx(a,{children:r.description}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},d={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(v,{}),e.jsx(n,{children:r.title}),e.jsx(a,{children:r.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},p={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(n,{children:r.title}),e.jsx(a,{children:r.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},u={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(v,{}),e.jsx(n,{children:r.title}),e.jsx(a,{children:r.description}),e.jsxs("div",{className:"col-start-2 flex gap-2",children:[e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]}),e.jsxs(i,{children:[e.jsx(j,{}),"Reset"]})]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const W=["All","Default","WithoutButton","WithoutIcon","BottomButtons"];export{l as All,u as BottomButtons,c as Default,d as WithoutButton,p as WithoutIcon,W as __namedExportsOrder,q as default};
