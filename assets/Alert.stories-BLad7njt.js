import{j as t}from"./iframe-Da4M60Pm.js";import{f as A,d as g,g as v,c as x}from"./YoutubeIcon-h9RsJGM1.js";import"./SearchIcon-B39Jxi2k.js";import{a as m}from"./index-jbG8BFt3.js";import{c as p}from"./classnames-By7m_D43.js";import{B as f}from"./Button-C8brzJia.js";import{t as u}from"./Text-CbT9jUU2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CXXpuJUT.js";import"./styles-S7yBqErU.js";const _=m([u({variant:"normal"}),"text-primary relative w-full rounded-xl border-1 px-4 py-3 grid gap-y-0.5 items-center grid-cols-[auto_1fr_auto]","has-[>svg]:gap-x-2 [&>svg]:size-4"],{variants:{variant:{info:["bg-indigo-200  border-indigo-500 [&>svg]:text-indigo-700 [&_[data-slot=alert-button]]:text-indigo-700","dark:bg-indigo-950 dark:border-indigo-900 dark:[&>svg]:text-indigo-400 dark:[&_[data-slot=alert-button]]:text-indigo-400"],success:["bg-green-200 border-green-500 [&>svg]:text-green-700 [&_[data-slot=alert-button]]:text-green-700","dark:bg-green-950 dark:border-green-900 dark:[&>svg]:text-green-400 dark:[&_[data-slot=alert-button]]:text-green-400"],warning:["bg-yellow-100 border-yellow-500 [&>svg]:text-yellow-700 [&_[data-slot=alert-button]]:text-yellow-700","dark:bg-yellow-950 dark:border-yellow-900 dark:[&>svg]:text-yellow-400 dark:[&_[data-slot=alert-button]]:text-yellow-400"],error:["bg-red-200 border-red-500 [&>svg]:text-red-700 [&_[data-slot=alert-button]]:text-red-700","dark:bg-red-950 dark:border-red-900 dark:[&>svg]:text-red-400 dark:[&_[data-slot=alert-button]]:text-red-400"]}},defaultVariants:{variant:"info"}});function r({className:e,variant:a,...h}){return t.jsx("div",{"data-slot":"alert",role:"alert",className:p(_({variant:a}),e),...h})}function n({className:e,...a}){return t.jsx("div",{"data-slot":"alert-title",className:p(u({variant:"normal-bold"}),"text-current col-start-2 line-clamp-1 min-h-4",e),...a})}function i({className:e,...a}){return t.jsx("div",{"data-slot":"alert-description",className:p(u({variant:"normal"}),"text-current col-start-2 grid justify-items-start gap-1 [&_p]:leading-relaxed",e),...a})}function s({className:e,...a}){return t.jsx(f,{"data-slot":"alert-button",variant:"outline",size:"sm",shape:"square",className:p("row-start-1 row-span-2 col-start-3",e),...a})}try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"warning" | "info" | "success" | "error" | null'}}}}}catch{}try{s.displayName="AlertButton",s.__docgenInfo={description:"",displayName:"AlertButton",props:{}}}catch{}try{i.displayName="AlertDescription",i.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}try{n.displayName="AlertTitle",n.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}const S={title:"Components/Alert",component:r},o={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs(r,{variant:"info",children:[t.jsx(A,{}),t.jsx(n,{children:"Info Alert"}),t.jsx(i,{children:"This is an alert with icon, title and description."}),t.jsx(s,{children:"Configure"})]}),t.jsxs(r,{variant:"success",children:[t.jsx(g,{}),t.jsx(n,{children:"Success Alert"}),t.jsx(i,{children:"This is an alert with icon, title and description."}),t.jsx(s,{children:"Configure"})]}),t.jsxs(r,{variant:"warning",children:[t.jsx(v,{}),t.jsx(n,{children:"Warning Alert"}),t.jsx(i,{children:"This is an alert with icon, title and description."}),t.jsx(s,{children:"Configure"})]}),t.jsxs(r,{variant:"error",children:[t.jsx(x,{}),t.jsx(n,{children:"Error Alert"}),t.jsx(i,{children:"This is an alert with icon, title and description."}),t.jsx(s,{children:"Configure"})]})]})},l={render:e=>t.jsxs(r,{variant:e.variant,children:[t.jsx(g,{}),t.jsx(n,{children:e.title}),t.jsx(i,{children:e.description}),t.jsx(s,{children:"Configure"})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},c={render:e=>t.jsxs(r,{variant:e.variant,children:[t.jsx(g,{}),t.jsx(n,{children:e.title}),t.jsx(i,{children:e.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},d={render:e=>t.jsxs(r,{variant:e.variant,children:[t.jsx(n,{children:e.title}),t.jsx(i,{children:e.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>Configure</AlertButton>
      </Alert>
      <Alert variant="success">
        <CheckmarkIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>Configure</AlertButton>
      </Alert>
      <Alert variant="warning">
        <WarningIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>Configure</AlertButton>
      </Alert>
      <Alert variant="error">
        <CloseIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
        <AlertButton>Configure</AlertButton>
      </Alert>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <CheckmarkIcon />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
      <AlertButton>Configure</AlertButton>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...d.parameters?.docs?.source}}};const N=["All","Default","WithoutButton","WithoutIcon"];export{o as All,l as Default,c as WithoutButton,d as WithoutIcon,N as __namedExportsOrder,S as default};
