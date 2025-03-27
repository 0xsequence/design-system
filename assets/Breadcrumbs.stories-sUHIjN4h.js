import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DYprdW1A.js";import{T as s}from"./Text-CEbW6txk.js";import{D as f}from"./Divider-BBABybgC.js";import"./index-AemB5ySP.js";import"./index-CFahbR6w.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./classnames-Dx2cly0x.js";const o=a=>{const{className:r,paths:t,excludeDivider:l=!1,renderLink:m,...p}=a;return e.jsxs("div",{className:r,...p,children:[e.jsx(s,{variant:"small",fontWeight:"medium",asChild:!0,children:e.jsx("div",{children:t.map((h,i)=>e.jsx(b,{path:h,active:i===t.length-1,renderLink:m},i))})}),!l&&e.jsx(f,{})]})},x=(a,r)=>e.jsx("a",{href:a.url,children:r}),b=a=>{const{path:r,active:t,renderLink:l=x}=a;return t?e.jsx(s,{color:"primary",nowrap:!0,capitalize:!0,children:r.label}):e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"muted",nowrap:!0,capitalize:!0,className:"no-underline outline-hidden focus:ring-2 focus:ring-border-focus hover:opacity-80",asChild:!0,children:l(r,r.label)}),e.jsx(s,{color:"muted",children:" / "})]})};try{o.displayName="Breadcrumbs",o.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{excludeDivider:{defaultValue:null,description:"",name:"excludeDivider",required:!1,type:{name:"boolean"}},paths:{defaultValue:null,description:"",name:"paths",required:!0,type:{name:"Path[]"}},renderLink:{defaultValue:null,description:"",name:"renderLink",required:!1,type:{name:"((path: Path, children: ReactNode) => Element)"}}}}}catch{}const L={title:"Components/Breadcrumbs",component:o},n={args:{excludeDivider:!1,paths:[{label:"Home",url:"/"},{label:"Components",url:"/components"},{label:"Breadcrumbs"}]}};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const N=["Default"];export{n as Default,N as __namedExportsOrder,L as default};
