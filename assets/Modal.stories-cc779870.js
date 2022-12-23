import{a as o,j as e,F as c}from"./jsx-runtime-399103ca.js";import{r as d}from"./index-b1819cdf.js";import{B as t}from"./Box-2cd000c9.js";import{B as l}from"./Button-a47dbdfb.js";/* empty css                             *//* empty css                              */import{T as i}from"./Text-28862473.js";import{M as p,A as u}from"./Modal-36f6f1de.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms.css-4912cd8f.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./extends-98964cd2.js";import"./index.module-2169cd94.js";import"./index-0043b9de.js";import"./index.module-17452d70.js";import"./Combination-8aa41f8f.js";import"./index.module-5cd0964b.js";import"./WarningIcon-c2fea564.js";import"./IconButton-6059257e.js";import"./Scroll-97246402.js";const N={title:"Components/Modal",component:p},x=m=>{const[a,n]=d.useState(!0);return o(c,{children:[e(l,{label:"Open Modal",onClick:()=>n(!a)}),e(u,{children:a&&e(p,{...m,onClose:()=>n(!1)})})]})},r={render:x,args:{size:"lg",children:o(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[o(t,{children:[e(i,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(i,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(l,{variant:"primary",shape:"square",label:"Create"})})]})}};var s;r.parameters={...r.parameters,storySource:{source:`{
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
}`,...(s=r.parameters)==null?void 0:s.storySource}};const W=["Default"];export{r as Default,W as __namedExportsOrder,N as default};
//# sourceMappingURL=Modal.stories-cc779870.js.map
