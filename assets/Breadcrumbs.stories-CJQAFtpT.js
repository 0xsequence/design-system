import{j as e}from"./iframe-4jdeRta1.js";import{f}from"./styles-Dnb-ama7.js";import{c as x}from"./classnames-CzI9s_aO.js";import{D as b}from"./Divider-DvvKO945.js";import{T as s}from"./Text-DZp5baOb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./index-DPmhm0QD.js";const o=a=>{const{className:r,paths:n,excludeDivider:l=!1,renderLink:u,...p}=a;return e.jsxs("div",{className:r,...p,children:[e.jsx(s,{variant:"small",fontWeight:"medium",asChild:!0,children:e.jsx("div",{children:n.map((h,i)=>e.jsx(v,{path:h,active:i===n.length-1,renderLink:u},i))})}),!l&&e.jsx(b,{})]})},j=(a,r)=>e.jsx("a",{href:a.url,children:r}),v=a=>{const{path:r,active:n,renderLink:l=j}=a;return n?e.jsx(s,{color:"primary",nowrap:!0,capitalize:!0,children:r.label}):e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"muted",nowrap:!0,capitalize:!0,className:x("no-underline hover:opacity-80 rounded-sm",f({inner:!1})),asChild:!0,children:l(r,r.label)}),e.jsx(s,{color:"muted",children:" / "})]})};try{o.displayName="Breadcrumbs",o.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{excludeDivider:{defaultValue:null,description:"",name:"excludeDivider",required:!1,type:{name:"boolean"}},paths:{defaultValue:null,description:"",name:"paths",required:!0,type:{name:"Path[]"}},renderLink:{defaultValue:null,description:"",name:"renderLink",required:!1,type:{name:"((path: Path, children: ReactNode) => Element)"}}}}}catch{}const R={title:"Components/Breadcrumbs",component:o},t={args:{excludeDivider:!1,paths:[{label:"Home",url:"/"},{label:"Components",url:"/components"},{label:"Breadcrumbs"}]}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,R as default};
