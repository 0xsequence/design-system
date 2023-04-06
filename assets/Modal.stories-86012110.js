import{a as r,j as e,F as y}from"./jsx-runtime-a9c13c85.js";import{r as C}from"./index-d8ade8ea.js";import{B as t}from"./Box-9e9f1e0d.js";import{B as s}from"./Button-c055484d.js";import{T as n}from"./Text-755617cc.js";import{M as g,A as B}from"./Modal-9b19e353.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-53256ec3.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./typography-f274f330.js";import"./motion-bd85eac6.js";import"./extends-98964cd2.js";import"./index.module-99b258bb.js";import"./index.module-4456f0d6.js";import"./extends-9cd95192.js";import"./index-6cf4ba34.js";import"./index.module-cc7c4bf6.js";import"./index.module-f536abc8.js";import"./Combination-888d27bc.js";import"./index.module-5c3234a3.js";import"./index.module-cacec922.js";import"./index-807b81f6.js";import"./WarningIcon-60d06b1a.js";import"./IconButton-fd570a0d.js";import"./Scroll-37fd8e55.js";const L={title:"Components/Modal",component:g},f=i=>{const[l,p]=C.useState(!0);return r(y,{children:[e(s,{label:"Open Modal",onClick:()=>p(!l)}),e(B,{children:l&&e(g,{...i,onClose:()=>p(!1)})})]})},a={render:f,args:{size:"lg",children:r(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(t,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})}},o={render:i=>e(f,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...i}),args:{size:"lg",children:r(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(t,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})}};var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const Q=["Default","CustomAnimation"];export{o as CustomAnimation,a as Default,Q as __namedExportsOrder,L as default};
//# sourceMappingURL=Modal.stories-86012110.js.map
