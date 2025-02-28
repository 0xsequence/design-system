import{j as e}from"./jsx-runtime-z8MfsBtr.js";import"./index-DEpc0yGt.js";import{T as s}from"./Text-BP7FPHpg.js";import{D as f}from"./Divider-PXwLU2je.js";import"./index-C9rmetsa.js";import"./index-DEvaI7vP.js";import"./index-D1TSixAU.js";import"./index-DKHC-OhD.js";import"./clsx-B-dksMZM.js";import"./classnames-Dx2cly0x.js";const o=a=>{const{className:r,paths:t,excludeDivider:l=!1,renderLink:u,...p}=a;return e.jsxs("div",{className:r,...p,children:[e.jsx(s,{variant:"small",fontWeight:"medium",asChild:!0,children:e.jsx("div",{children:t.map((h,i)=>e.jsx(b,{path:h,active:i===t.length-1,renderLink:u},i))})}),!l&&e.jsx(f,{})]})},x=(a,r)=>e.jsx("a",{href:a.url,children:r}),b=a=>{const{path:r,active:t,renderLink:l=x}=a;return t?e.jsx(s,{color:"primary",nowrap:!0,capitalize:!0,children:r.label}):e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"muted",nowrap:!0,capitalize:!0,className:"no-underline outline-hidden focus:ring-2 focus:ring-border-focus hover:opacity-80",asChild:!0,children:l(r,r.label)}),e.jsx(s,{color:"muted",children:" / "})]})};try{o.displayName="Breadcrumbs",o.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{excludeDivider:{defaultValue:null,description:"",name:"excludeDivider",required:!1,type:{name:"boolean"}},paths:{defaultValue:null,description:"",name:"paths",required:!0,type:{name:"Path[]"}},renderLink:{defaultValue:null,description:"",name:"renderLink",required:!1,type:{name:"((path: Path, children: ReactNode) => Element)"}}}}}catch{}const N={title:"Components/Breadcrumbs",component:o},n={args:{excludeDivider:!1,paths:[{label:"Home",url:"/"},{label:"Components",url:"/components"},{label:"Breadcrumbs"}]}};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,N as default};
