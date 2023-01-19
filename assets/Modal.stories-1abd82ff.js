import{a as o,j as e,F as c}from"./jsx-runtime-a9c13c85.js";import{r as d}from"./index-d8ade8ea.js";import{B as t}from"./Box-71460fdd.js";import{B as p}from"./Button-8adb6abb.js";import"./atoms.css-afddc020.js";/* empty css                              */import{T as n}from"./Text-33c21de8.js";import{M as l,A as u}from"./Modal-e0e1d404.js";import"./_commonjsHelpers-042e6b4d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./motion-7df5a7b3.js";import"./extends-98964cd2.js";import"./index.module-d15610cf.js";import"./index-ffd4619b.js";import"./index.module-a9b21657.js";import"./Combination-1c1d7579.js";import"./index.module-f17d4a85.js";import"./index.module-732cca0e.js";import"./index-807b81f6.js";import"./WarningIcon-e965e419.js";import"./IconButton-2fef59d9.js";import"./Scroll-f849ceca.js";const Y={title:"Components/Modal",component:l},x=m=>{const[a,i]=d.useState(!0);return o(c,{children:[e(p,{label:"Open Modal",onClick:()=>i(!a)}),e(u,{children:a&&e(l,{...m,onClose:()=>i(!1)})})]})},r={render:x,args:{size:"lg",children:o(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[o(t,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(p,{variant:"primary",shape:"square",label:"Create"})})]})}};var s;r.parameters={...r.parameters,storySource:{source:`{
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
}`,...(s=r.parameters)==null?void 0:s.storySource}};const k=["Default"];export{r as Default,k as __namedExportsOrder,Y as default};
//# sourceMappingURL=Modal.stories-1abd82ff.js.map
