import{j as t}from"./iframe-D7WOhObb.js";import{f as x,e as o,d as u,g as m,c as f,h as j}from"./YoutubeIcon-DsE8gJpB.js";import"./SearchIcon-CUco_NoP.js";import{a as _}from"./index-jbG8BFt3.js";import{c as h}from"./classnames-By7m_D43.js";import{B as b}from"./Button-B2doiYwJ.js";import{t as A}from"./Text-CCm-1Q2c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dw9-BL_x.js";import"./styles-S7yBqErU.js";const T=_([A({variant:"normal"}),"text-primary relative w-full rounded-xl border-1 p-4 grid gap-y-2 items-center grid-cols-[auto_1fr_auto]","[&>svg]:size-4 [&>svg]:mr-2"],{variants:{variant:{info:["bg-indigo-200  border-indigo-500 [&>svg]:text-indigo-700 [&_[data-slot=alert-button]]:text-indigo-700","dark:bg-indigo-950 dark:border-indigo-900 dark:[&>svg]:text-indigo-400 dark:[&_[data-slot=alert-button]]:text-indigo-400"],success:["bg-green-200 border-green-500 [&>svg]:text-green-700 [&_[data-slot=alert-button]]:text-green-700","dark:bg-green-950 dark:border-green-900 dark:[&>svg]:text-green-400 dark:[&_[data-slot=alert-button]]:text-green-400"],warning:["bg-yellow-100 border-yellow-500 [&>svg]:text-yellow-700 [&_[data-slot=alert-button]]:text-yellow-700","dark:bg-yellow-950 dark:border-yellow-900 dark:[&>svg]:text-yellow-400 dark:[&_[data-slot=alert-button]]:text-yellow-400"],error:["bg-red-200 border-red-500 [&>svg]:text-red-700 [&_[data-slot=alert-button]]:text-red-700","dark:bg-red-950 dark:border-red-900 dark:[&>svg]:text-red-400 dark:[&_[data-slot=alert-button]]:text-red-400"]}},defaultVariants:{variant:"info"}});function r({className:e,variant:a,...v}){return t.jsx("div",{"data-slot":"alert",role:"alert",className:h(T({variant:a}),e),...v})}function n({className:e,...a}){return t.jsx("div",{"data-slot":"alert-title",className:h(A({variant:"normal-bold"}),"text-current col-start-2 col-end-4 line-clamp-1 min-h-4 sm:col-end-3",e),...a})}function i({className:e,...a}){return t.jsx("div",{"data-slot":"alert-description",className:h(A({variant:"normal"}),"text-current col-start-2 col-end-4 grid justify-items-start gap-1 sm:col-end-3",e),...a})}function s({className:e,...a}){return t.jsx(b,{"data-slot":"alert-button",variant:"outline",size:"sm",shape:"square",className:h("row-start-3 col-start-3 sm:row-start-1 sm:col-start-3 sm:row-span-2",e),...a})}try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"warning" | "info" | "success" | "error" | null'}}}}}catch{}try{s.displayName="AlertButton",s.__docgenInfo={description:"",displayName:"AlertButton",props:{}}}catch{}try{i.displayName="AlertDescription",i.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}try{n.displayName="AlertTitle",n.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}const Y={title:"Components/Alert",component:r},l={render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsxs(r,{variant:"info",children:[t.jsx(x,{}),t.jsx(n,{children:"Info Alert"}),t.jsx(i,{children:"This is an alert with icon, title and description."}),t.jsxs(s,{children:[t.jsx(o,{}),"Configure"]})]}),t.jsxs(r,{variant:"success",children:[t.jsx(u,{}),t.jsx(n,{children:"Success Alert"}),t.jsx(i,{children:"This is an alert with icon, title and description."}),t.jsxs(s,{children:[t.jsx(o,{}),"Configure"]})]}),t.jsxs(r,{variant:"warning",children:[t.jsx(m,{}),t.jsx(n,{children:"Warning Alert"}),t.jsx(i,{children:"This is an alert with icon, title and description."}),t.jsxs(s,{children:[t.jsx(o,{}),"Configure"]})]}),t.jsxs(r,{variant:"error",children:[t.jsx(f,{}),t.jsx(n,{children:"Error Alert"}),t.jsx(i,{children:"This is an alert with icon, title and description."}),t.jsxs(s,{children:[t.jsx(o,{}),"Configure"]})]})]})},c={render:e=>t.jsxs(r,{variant:e.variant,children:[t.jsx(u,{}),t.jsx(n,{children:e.title}),t.jsx(i,{children:e.description}),t.jsxs(s,{children:[t.jsx(o,{}),"Configure"]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},d={render:e=>t.jsxs(r,{variant:e.variant,children:[t.jsx(u,{}),t.jsx(n,{children:e.title}),t.jsx(i,{children:e.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},p={render:e=>t.jsxs(r,{variant:e.variant,children:[t.jsx(n,{children:e.title}),t.jsx(i,{children:e.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},g={render:e=>t.jsxs(r,{variant:e.variant,children:[t.jsx(u,{}),t.jsx(n,{children:e.title}),t.jsx(i,{children:e.description}),t.jsxs("div",{className:"col-start-2 flex gap-2",children:[t.jsxs(s,{children:[t.jsx(o,{}),"Configure"]}),t.jsxs(s,{children:[t.jsx(j,{}),"Reset"]})]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const R=["All","Default","WithoutButton","WithoutIcon","BottomButtons"];export{l as All,g as BottomButtons,c as Default,d as WithoutButton,p as WithoutIcon,R as __namedExportsOrder,Y as default};
