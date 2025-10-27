import{j as r}from"./iframe-DJ_XphsX.js";import{f as A,g as h,d,h as g,c as u}from"./YoutubeIcon-Bt_Qs2gG.js";import"./SearchIcon-CPEWugsp.js";import{a as m}from"./index-jbG8BFt3.js";import{c}from"./classnames-By7m_D43.js";import{t as o}from"./Text-Boqmi4mg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvHFviMa.js";const v=m([o({variant:"normal"}),"relative w-full rounded-xl border-2 px-4 py-3 grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current text-white *:data-[slot=alert-description]:text-current/80"],{variants:{variant:{default:"bg-primary text-background-primary border-primary",info:"bg-info/80 border-info",success:"bg-success/80 border-success",warning:"bg-warning/80 border-warning",error:"bg-destructive/80 border-destructive"}},defaultVariants:{variant:"default"}});function t({className:e,variant:a,...p}){return r.jsx("div",{"data-slot":"alert",role:"alert",className:c(v({variant:a}),e),...p})}function i({className:e,...a}){return r.jsx("div",{"data-slot":"alert-title",className:c(o({variant:"normal-bold"}),"col-start-2 line-clamp-1 min-h-4",e),...a})}function n({className:e,...a}){return r.jsx("div",{"data-slot":"alert-description",className:c(o({variant:"normal"}),"col-start-2 grid justify-items-start gap-1 [&_p]:leading-relaxed",e),...a})}try{t.displayName="Alert",t.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"info" | "warning" | "default" | "success" | "error" | null'}}}}}catch{}try{n.displayName="AlertDescription",n.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}try{i.displayName="AlertTitle",i.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}const I={title:"Components/Alert",component:t},s={render:()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs(t,{variant:"default",children:[r.jsx(A,{}),r.jsx(i,{children:"Default Alert"}),r.jsx(n,{children:"This is an alert with, icon, title and description."})]}),r.jsxs(t,{variant:"info",children:[r.jsx(h,{}),r.jsx(i,{children:"Info Alert"}),r.jsx(n,{children:"This is an alert with icon, title and description."})]}),r.jsxs(t,{variant:"success",children:[r.jsx(d,{}),r.jsx(i,{children:"Success Alert"}),r.jsx(n,{children:"This is an alert with icon, title and description."})]}),r.jsxs(t,{variant:"warning",children:[r.jsx(g,{}),r.jsx(i,{children:"Warning Alert"}),r.jsx(n,{children:"This is an alert with icon, title and description."})]}),r.jsxs(t,{variant:"error",children:[r.jsx(u,{}),r.jsx(i,{children:"Error Alert"}),r.jsx(n,{children:"This is an alert with icon, title and description."})]})]})},l={render:e=>r.jsxs(t,{variant:e.variant,children:[r.jsx(d,{}),r.jsx(i,{children:e.title}),r.jsx(n,{children:e.description})]}),args:{title:"Success! Your changes have been saved",description:"This is an alert with icon, title and description.",variant:"default"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert variant="default">
        <NetworkIcon />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is an alert with, icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckmarkIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="warning">
        <WarningIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert variant="error">
        <CloseIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: {
    title: string;
    description: string;
    variant: 'default' | 'info' | 'success' | 'warning' | 'error';
  }) => <Alert variant={args.variant}>
      <CheckmarkIcon />
      <AlertTitle>{args.title}</AlertTitle>
      <AlertDescription>{args.description}</AlertDescription>
    </Alert>,
  args: {
    title: 'Success! Your changes have been saved',
    description: 'This is an alert with icon, title and description.',
    variant: 'default'
  }
}`,...l.parameters?.docs?.source}}};const b=["All","Default"];export{s as All,l as Default,b as __namedExportsOrder,I as default};
