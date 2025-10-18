import{j as e}from"./iframe-Bz-ddAwC.js";import{f as u}from"./styles-xWsADqyq.js";import{c as p}from"./classnames-BpotA9kf.js";import{D as h}from"./Divider-Cu04-Jep.js";import{T as s}from"./Text-wkuvRbVB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./index-CPSoPwAt.js";const o=a=>{const{className:r,paths:n,excludeDivider:l=!1,renderLink:d,...c}=a;return e.jsxs("div",{className:r,...c,children:[e.jsx(s,{variant:"small",fontWeight:"medium",asChild:!0,children:e.jsx("div",{children:n.map((m,i)=>e.jsx(x,{path:m,active:i===n.length-1,renderLink:d},i))})}),!l&&e.jsx(h,{})]})},f=(a,r)=>e.jsx("a",{href:a.url,children:r}),x=a=>{const{path:r,active:n,renderLink:l=f}=a;return n?e.jsx(s,{color:"primary",nowrap:!0,capitalize:!0,children:r.label}):e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"muted",nowrap:!0,capitalize:!0,className:p("no-underline hover:opacity-80 rounded-sm",u({inner:!1})),asChild:!0,children:l(r,r.label)}),e.jsx(s,{color:"muted",children:" / "})]})};try{o.displayName="Breadcrumbs",o.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{excludeDivider:{defaultValue:null,description:"",name:"excludeDivider",required:!1,type:{name:"boolean"}},paths:{defaultValue:null,description:"",name:"paths",required:!0,type:{name:"Path[]"}},renderLink:{defaultValue:null,description:"",name:"renderLink",required:!1,type:{name:"((path: Path, children: ReactNode) => Element)"}}}}}catch{}const C={title:"Components/Breadcrumbs",component:o},t={args:{excludeDivider:!1,paths:[{label:"Home",url:"/"},{label:"Components",url:"/components"},{label:"Breadcrumbs"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    excludeDivider: false,
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
}`,...t.parameters?.docs?.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,C as default};
