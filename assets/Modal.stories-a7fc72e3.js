import{a as o,j as e,F as c}from"./jsx-runtime-a9c13c85.js";import{r as d}from"./index-d8ade8ea.js";import{B as t}from"./Box-5a71b8bf.js";import{B as l}from"./Button-2c965b19.js";import"./atoms.css-3866390b.js";/* empty css                              */import{T as i}from"./Text-2c61dd5f.js";import{M as p,A as u}from"./Modal-b211fa45.js";import"./_commonjsHelpers-042e6b4d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./motion-7df5a7b3.js";import"./extends-98964cd2.js";import"./index.module-d15610cf.js";import"./index-ffd4619b.js";import"./index.module-a9b21657.js";import"./Combination-ae2baabd.js";import"./index.module-f17d4a85.js";import"./index.module-732cca0e.js";import"./WarningIcon-f712c85e.js";import"./IconButton-dd6840d6.js";import"./Scroll-33d154f8.js";const W={title:"Components/Modal",component:p},x=m=>{const[a,n]=d.useState(!0);return o(c,{children:[e(l,{label:"Open Modal",onClick:()=>n(!a)}),e(u,{children:a&&e(p,{...m,onClose:()=>n(!1)})})]})},r={render:x,args:{size:"lg",children:o(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[o(t,{children:[e(i,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(i,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(l,{variant:"primary",shape:"square",label:"Create"})})]})}};var s;r.parameters={...r.parameters,storySource:{source:`{
  render: StoryWrapper,
  args: {
    size: 'lg',
    children: <Box flexDirection="column" justifyContent="space-between" height="full" padding="4">
        <Box>
          <Text as="h1" variant="medium" color="text100">
            New Dapp
          </Text>
          <Text as="p" variant="normal" color="text50">
            You can always change these settings later.
          </Text>
        </Box>

        <Box justifyContent="flex-end">
          <Button variant="primary" shape="square" label="Create" />
        </Box>
      </Box>
  }
}`,...(s=r.parameters)==null?void 0:s.storySource}};const Y=["Default"];export{r as Default,Y as __namedExportsOrder,W as default};
//# sourceMappingURL=Modal.stories-a7fc72e3.js.map
