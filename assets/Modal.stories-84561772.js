import{j as e}from"./jsx-runtime-5c44f2f2.js";import{r as f}from"./index-32f9f3e1.js";import{B as t}from"./Box-d2820196.js";import{B as n}from"./Button-385abe5e.js";import{T as o}from"./Text-13c0f3dc.js";import{M as h}from"./Modal-03ddf604.js";import{A as j}from"./index-8301207e.js";import"./atoms-c8fed878.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./typography-f274f330.js";import"./index.module-c4cb74e4.js";import"./index-81ed4395.js";import"./index.module-da5321b3.js";import"./index.module-943d6f06.js";import"./index.module-7f5f77c0.js";import"./Combination-765f8fb0.js";import"./index.module-065ada07.js";import"./index.module-87cbc37c.js";import"./index-807b81f6.js";import"./WarningIcon-50a98c13.js";import"./IconButton-6e3f5233.js";import"./Scroll-e4ebae0b.js";import"./motion-2413b055.js";const G={title:"Components/Modal",component:h},g=s=>{const[i,l]=f.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Open Modal",onClick:()=>l(!i)}),e.jsx(j,{children:i&&e.jsx(h,{...s,onClose:()=>l(!1)})})]})},r={render:g,args:{size:"lg",children:e.jsxs(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[e.jsxs(t,{children:[e.jsx(o,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e.jsx(o,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e.jsx(t,{justifyContent:"flex-end",children:e.jsx(n,{variant:"primary",shape:"square",label:"Create"})})]})}},a={render:s=>e.jsx(g,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...s}),args:{size:"lg",children:e.jsxs(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[e.jsxs(t,{children:[e.jsx(o,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e.jsx(o,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),e.jsx(t,{justifyContent:"flex-end",children:e.jsx(n,{variant:"primary",shape:"square",label:"Create"})})]})}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var x,d,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <StoryWrapper overlayProps={{}} contentProps={{
    initial: {
      scale: 0,
      rotateZ: 0
    },
    animate: {
      scale: 1,
      rotateZ: 360
    },
    exit: {
      scale: 0,
      rotateZ: 0
    },
    transition: {
      type: 'spring'
    }
  }} {...args} />,
  args: {
    size: 'lg',
    children: <Box flexDirection="column" justifyContent="space-between" height="full" padding="4">
        <Box>
          <Text as="h1" variant="medium" color="text100">
            New Dapp
          </Text>
          <Text as="p" variant="normal" color="text50">
            Custom Open & Close Animated Modal. You can always change these
            settings later.
          </Text>
        </Box>

        <Box justifyContent="flex-end">
          <Button variant="primary" shape="square" label="Create" />
        </Box>
      </Box>
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const H=["Default","CustomAnimation"];export{a as CustomAnimation,r as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Modal.stories-84561772.js.map
