import{a as e,j as o}from"./jsx-runtime-a9c13c85.js";import{B as i}from"./Box-63eb24b2.js";import{I as s}from"./IconButton-7ecadd56.js";import{T as t}from"./Text-cc9cad53.js";import{f as m}from"./WarningIcon-75993e4b.js";import{S as p}from"./StopClickPropagation-7c76ae97.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-6bc7ac75.js";import"./Button-f5fc896c.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";const j={title:"Components/StopClickPropagation",component:p},d=()=>e(i,{alignItems:"center",background:{base:"backgroundSecondary",hover:"backgroundBackdrop"},borderRadius:"md",cursor:"pointer",flexDirection:"row",justifyContent:"space-between",onClick:()=>console.log("Container Clicked!!"),padding:"4",children:[e(i,{children:[o(t,{as:"p",fontWeight:"medium",children:"This container here has a click action."}),o(t,{as:"p",fontWeight:"medium",children:"The button on the right also has a click action."}),o(t,{as:"p",fontWeight:"medium",children:"Since the button is wrapped in a StopClickPropagation component, the click-through is prevented."})]}),o(p,{children:o(s,{icon:m,onClick:()=>console.log("Button Clicked! Propagation Stopped!")})})]}),r={render:d};var n,a,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: StoryWrapper
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,j as default};
//# sourceMappingURL=StopClickPropagation.stories-fae8d305.js.map
