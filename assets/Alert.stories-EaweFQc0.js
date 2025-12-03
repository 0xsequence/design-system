import{j as e}from"./iframe-Djrw-iJT.js";import{f as _,d as y,g as T,e as o,h as w}from"./YoutubeIcon-C1f2gIFt.js";import"./SearchIcon-CzbUQgHE.js";import{b as A,a as b}from"./index-Cn1xQXcm.js";import{B as I}from"./Button--4usfRhH.js";import{t as f}from"./Text-DtXaNAdf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-gCA5zlsB.js";import"./index-9EgrqQcw.js";import"./styles-DSBOcsIh.js";const S=b([f({variant:"normal"}),"text-primary relative w-full rounded-lg border-1 border-(--alert-border) bg-(--alert-background) p-4 grid gap-y-2 items-center grid-cols-[auto_1fr_auto]","[&>svg]:mr-2 [&>svg]:text-(--alert-accent) [&>svg]:self-start [&_[data-slot=alert-button]]:text-(--alert-accent)"],{variants:{variant:{info:["[--alert-background:var(--color-indigo-200)] dark:[--alert-background:var(--color-indigo-950)]","[--alert-border:var(--color-indigo-500)] dark:[--alert-border:var(--color-indigo-900)]","[--alert-accent:var(--color-indigo-700)] dark:[--alert-accent:var(--color-indigo-400)]"],success:["[--alert-background:var(--color-green-200)] dark:[--alert-background:var(--color-green-950)]","[--alert-border:var(--color-green-500)] dark:[--alert-border:var(--color-green-900)]","[--alert-accent:var(--color-green-700)] dark:[--alert-accent:var(--color-green-400)]"],warning:["[--alert-background:var(--color-yellow-100)] dark:[--alert-background:var(--color-yellow-950)]","[--alert-border:var(--color-yellow-500)] dark:[--alert-border:var(--color-yellow-900)]","[--alert-accent:var(--color-yellow-700)] dark:[--alert-accent:var(--color-yellow-400)]"],error:["[--alert-background:var(--color-red-200)] dark:[--alert-background:var(--color-red-950)]","[--alert-border:var(--color-red-500)] dark:[--alert-border:var(--color-red-900)]","[--alert-accent:var(--color-red-700)] dark:[--alert-accent:var(--color-red-400)]"]}},defaultVariants:{variant:"info"}});function t({className:r,variant:n,...c}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:A(S({variant:n}),r),...c})}function a({className:r,...n}){return e.jsx("div",{"data-slot":"alert-title",className:A(f({variant:"normal-bold"}),"text-(--alert-accent) col-start-2 col-end-4 min-h-4 sm:col-end-3",r),...n})}function s({className:r,...n}){return e.jsx("div",{"data-slot":"alert-description",className:A(f({variant:"normal"}),"text-current col-start-2 col-end-4 grid justify-items-start gap-1 sm:col-end-3",r),...n})}function i({className:r,...n}){return e.jsx(I,{"data-slot":"alert-button",variant:"outline",size:"sm",shape:"square",className:A("row-start-3 col-start-3 mt-2 sm:mt-0 sm:row-start-1 sm:row-end-3 sm:col-start-3",r),...n})}function l({variant:r,size:n="sm",...c}){switch(r){case"info":return e.jsx(T,{size:n,...c});case"success":return e.jsx(y,{size:n,...c});case"warning":case"error":return e.jsx(_,{size:n,...c});default:return null}}function B({variant:r,title:n,description:c,children:x,...j}){return e.jsxs(t,{variant:r,...j,children:[e.jsx(l,{variant:r}),e.jsx(a,{children:n}),c&&e.jsx(s,{children:c}),x]})}t.Helper=B;try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"warning" | "info" | "success" | "error" | null'}}}}}catch{}try{t.Helper.displayName="Alert.Helper",t.Helper.__docgenInfo={description:"",displayName:"Alert.Helper",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"warning" | "info" | "success" | "error" | null'}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}}}}}catch{}try{i.displayName="AlertButton",i.__docgenInfo={description:"",displayName:"AlertButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "secondary" | "text" | "destructive" | "outline" | "ghost" | "emphasis" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:'"circle" | "square" | null'}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="AlertDescription",s.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}try{l.displayName="AlertIcon",l.__docgenInfo={description:"",displayName:"AlertIcon",props:{size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:'"default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxs" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"warning" | "info" | "success" | "error" | null | undefined'}}}}}catch{}try{a.displayName="AlertTitle",a.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}const E={title:"Components/Alert",component:t},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(t,{variant:"info",children:[e.jsx(l,{variant:"info"}),e.jsx(a,{children:"Info Alert"}),e.jsx(s,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"success",children:[e.jsx(l,{variant:"success"}),e.jsx(a,{children:"Success Alert"}),e.jsx(s,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"warning",children:[e.jsx(l,{variant:"warning"}),e.jsx(a,{children:"Warning Alert"}),e.jsx(s,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),e.jsxs(t,{variant:"error",children:[e.jsx(l,{variant:"error"}),e.jsx(a,{children:"Error Alert"}),e.jsx(s,{children:"This is an alert with icon, title and description."}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]})]})},u={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(l,{variant:r.variant}),e.jsx(a,{children:r.title}),e.jsx(s,{children:r.description}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},p={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(l,{variant:r.variant}),e.jsx(a,{children:r.title}),e.jsx(s,{children:r.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},v={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(a,{children:r.title}),e.jsx(s,{children:r.description}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},g={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(l,{variant:r.variant}),e.jsx(a,{children:r.title}),e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})]}),args:{title:"Success! Your changes have been saved. This is a long title that should wrap.",variant:"info"}},h={render:r=>e.jsxs(t,{variant:r.variant,children:[e.jsx(l,{variant:r.variant}),e.jsx(a,{children:r.title}),e.jsx(s,{children:r.description}),e.jsxs("div",{className:"col-start-2 flex gap-2",children:[e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]}),e.jsxs(i,{children:[e.jsx(w,{}),"Reset"]})]})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}},m={render:r=>e.jsx(t.Helper,{variant:r.variant,title:r.title,description:r.description,children:e.jsxs(i,{children:[e.jsx(o,{}),"Configure"]})}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"info"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert variant="info">
        <AlertIcon variant="info" />
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
        <AlertIcon variant="success" />
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
        <AlertIcon variant="warning" />
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
        <AlertIcon variant="error" />
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
      <AlertIcon variant={args.variant} />
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
      <AlertIcon variant={args.variant} />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'info'
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <AlertIcon variant={args.variant} />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertButton>
        <SettingsIcon />
        Configure
      </AlertButton>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved. This is a long title that should wrap.',
    variant: 'info'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Alert variant={args.variant}>
      <AlertIcon variant={args.variant} />
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const z=["All","Default","WithoutButton","WithoutIcon","WithoutDescription","BottomButtons","Helper"];export{d as All,h as BottomButtons,u as Default,m as Helper,p as WithoutButton,g as WithoutDescription,v as WithoutIcon,z as __namedExportsOrder,E as default};
