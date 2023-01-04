import{a as o,j as e,F as c}from"./jsx-runtime-a9c13c85.js";import{r as d}from"./index-d8ade8ea.js";import{B as t}from"./Box-f4432bb8.js";import{B as l}from"./Button-c4c91c81.js";import"./atoms.css-bb4ad6bf.js";/* empty css                              */import{T as i}from"./Text-bae74cde.js";import{M as p,A as u}from"./Modal-00e0f10c.js";import"./_commonjsHelpers-042e6b4d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./extends-98964cd2.js";import"./index.module-ad4057e5.js";import"./index-ffd4619b.js";import"./index.module-c986f64a.js";import"./Combination-adb67df6.js";import"./index.module-f4493aef.js";import"./WarningIcon-d09bba5b.js";import"./IconButton-99437871.js";import"./Scroll-e51eaffc.js";const F={title:"Components/Modal",component:p},x=m=>{const[a,n]=d.useState(!0);return o(c,{children:[e(l,{label:"Open Modal",onClick:()=>n(!a)}),e(u,{children:a&&e(p,{...m,onClose:()=>n(!1)})})]})},r={render:x,args:{size:"lg",children:o(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[o(t,{children:[e(i,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(i,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(l,{variant:"primary",shape:"square",label:"Create"})})]})}};var s;r.parameters={...r.parameters,storySource:{source:`{
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
}`,...(s=r.parameters)==null?void 0:s.storySource}};const N=["Default"];export{r as Default,N as __namedExportsOrder,F as default};
//# sourceMappingURL=Modal.stories-ef9903f5.js.map
