import{j as e}from"./iframe-Dbx0ZjZr.js";import{f as d}from"./styles-S7yBqErU.js";import{c as p}from"./classnames-By7m_D43.js";import{T as s}from"./Text-BrhtqrX_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jbG8BFt3.js";import"./index-CAz0fIAS.js";import"./index-B2rLdcIY.js";const l=a=>{const{className:r,paths:t,renderLink:o,...i}=a;return e.jsx("div",{className:r,...i,children:e.jsx(s,{variant:"small",fontWeight:"medium",asChild:!0,children:e.jsx("div",{children:t.map((m,c)=>e.jsx(h,{path:m,active:c===t.length-1,renderLink:o},c))})})})},u=(a,r)=>e.jsx("a",{href:a.url,children:r}),h=a=>{const{path:r,active:t,renderLink:o=u}=a;return t?e.jsx(s,{color:"primary",nowrap:!0,capitalize:!0,children:r.label}):e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"muted",nowrap:!0,capitalize:!0,className:p("no-underline hover:opacity-80 rounded-sm",d({inner:!1})),asChild:!0,children:o(r,r.label)}),e.jsx(s,{color:"muted",children:" / "})]})};try{l.displayName="Breadcrumbs",l.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{paths:{defaultValue:null,description:"",name:"paths",required:!0,type:{name:"Path[]"}},renderLink:{defaultValue:null,description:"",name:"renderLink",required:!1,type:{name:"((path: Path, children: ReactNode) => Element)"}}}}}catch{}const v={title:"Components/Breadcrumbs",component:l},n={args:{paths:[{label:"Home",url:"/"},{label:"Components",url:"/components"},{label:"Breadcrumbs"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    paths: [{
      label: 'Home',
      url: '/'
    }, {
      label: 'Components',
      url: '/components'
    }, {
      label: 'Breadcrumbs'
    }]
  }
}`,...n.parameters?.docs?.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,v as default};
