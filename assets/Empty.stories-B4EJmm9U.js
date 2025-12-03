import{j as e}from"./iframe-gc0R0tdm.js";import{i as u,j as _}from"./YoutubeIcon-C-yMw-Ut.js";import"./SearchIcon-Dgq3blqC.js";import{B as s}from"./Button-D1WPboKF.js";import{b as a,a as f}from"./index-Cn1xQXcm.js";import{C as x}from"./Card-D6AwI0cd.js";import{t as l}from"./Text-DqwRyWG_.js";import"./preload-helper-PPVm8Dsz.js";import"./index--dA_Jfmr.js";import"./index-C0mxVCnv.js";import"./styles-DSBOcsIh.js";function i({className:t,...r}){return e.jsx(x,{variant:"muted","data-slot":"empty",className:a("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-6 text-center md:p-12",t),...r})}function o({className:t,...r}){return e.jsx("div",{"data-slot":"empty-header",className:a("flex max-w-sm flex-col items-center gap-2 text-center",t),...r})}const E=f("flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",{variants:{variant:{default:"bg-transparent",icon:"text-muted [&_svg:not([class*='size-'])]:size-9"}},defaultVariants:{variant:"default"}});function p({className:t,variant:r="default",...y}){return e.jsx("div",{"data-slot":"empty-icon","data-variant":r,className:a(E({variant:r,className:t})),...y})}function c({className:t,...r}){return e.jsx("div",{"data-slot":"empty-title",className:a(l({variant:"medium"}),"text-primary",t),...r})}function m({className:t,...r}){return e.jsx("div",{"data-slot":"empty-description",className:a(l({variant:"normal"}),"text-muted [&>a]:underline [&>a]:underline-offset-4",t),...r})}function d({className:t,...r}){return e.jsx("div",{"data-slot":"empty-content",className:a(l({variant:"small"}),"flex w-full max-w-sm min-w-0 flex-col items-center gap-4",t),...r})}try{i.displayName="Empty",i.__docgenInfo={description:"",displayName:"Empty",props:{}}}catch{}try{d.displayName="EmptyContent",d.__docgenInfo={description:"",displayName:"EmptyContent",props:{}}}catch{}try{m.displayName="EmptyDescription",m.__docgenInfo={description:"",displayName:"EmptyDescription",props:{}}}catch{}try{o.displayName="EmptyHeader",o.__docgenInfo={description:"",displayName:"EmptyHeader",props:{}}}catch{}try{p.displayName="EmptyMedia",p.__docgenInfo={description:"",displayName:"EmptyMedia",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:'"default" | "icon" | null'}}}}}catch{}try{c.displayName="EmptyTitle",c.__docgenInfo={description:"",displayName:"EmptyTitle",props:{}}}catch{}const P={title:"Components/Empty"},n={render:()=>e.jsxs(i,{children:[e.jsxs(o,{children:[e.jsx(p,{variant:"icon",children:e.jsx(u,{})}),e.jsx(c,{children:"No Projects Yet"}),e.jsx(m,{children:"You haven't created any projects yet. Get started by creating your first project."})]}),e.jsx(d,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{variant:"emphasis",shape:"square",size:"sm",children:"Create Project"}),e.jsx(s,{shape:"square",size:"sm",children:"Import Project"})]})}),e.jsx(s,{variant:"text",className:"text-muted underline underline-offset-4",size:"sm",asChild:!0,children:e.jsxs("a",{href:"#",children:["Learn More ",e.jsx(_,{})]})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button variant="emphasis" shape="square" size="sm">
            Create Project
          </Button>
          <Button shape="square" size="sm">
            Import Project
          </Button>
        </div>
      </EmptyContent>
      <Button variant="text" className="text-muted underline underline-offset-4" size="sm" asChild>
        <a href="#">
          Learn More <ExternalLinkIcon />
        </a>
      </Button>
    </Empty>
}`,...n.parameters?.docs?.source}}};const b=["Default"];export{n as Default,b as __namedExportsOrder,P as default};
