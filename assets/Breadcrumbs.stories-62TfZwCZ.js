import{j as e}from"./iframe-f-zG5TfG.js";import"./index-U72pIW8v.js";import{T as s}from"./Text-BYcn0Uwp.js";import{D as f}from"./Divider-DJJeKIyq.js";import"./index-Bujg7A9D.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./classnames-DQzbijWx.js";const o=a=>{const{className:r,paths:n,excludeDivider:l=!1,renderLink:m,...p}=a;return e.jsxs("div",{className:r,...p,children:[e.jsx(s,{variant:"small",fontWeight:"medium",asChild:!0,children:e.jsx("div",{children:n.map((h,i)=>e.jsx(b,{path:h,active:i===n.length-1,renderLink:m},i))})}),!l&&e.jsx(f,{})]})},x=(a,r)=>e.jsx("a",{href:a.url,children:r}),b=a=>{const{path:r,active:n,renderLink:l=x}=a;return n?e.jsx(s,{color:"primary",nowrap:!0,capitalize:!0,children:r.label}):e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"muted",nowrap:!0,capitalize:!0,className:"no-underline outline-hidden focus:ring-2 focus:ring-border-focus hover:opacity-80",asChild:!0,children:l(r,r.label)}),e.jsx(s,{color:"muted",children:" / "})]})};try{o.displayName="Breadcrumbs",o.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{excludeDivider:{defaultValue:null,description:"",name:"excludeDivider",required:!1,type:{name:"boolean"}},paths:{defaultValue:null,description:"",name:"paths",required:!0,type:{name:"Path[]"}},renderLink:{defaultValue:null,description:"",name:"renderLink",required:!1,type:{name:"((path: Path, children: ReactNode) => Element)"}}}}}catch{}const C={title:"Components/Breadcrumbs",component:o},t={args:{excludeDivider:!1,paths:[{label:"Home",url:"/"},{label:"Components",url:"/components"},{label:"Breadcrumbs"}]}};var d,c,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,C as default};
