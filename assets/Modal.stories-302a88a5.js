import{a as r,j as e,F as y}from"./jsx-runtime-a9c13c85.js";import{r as C}from"./index-d8ade8ea.js";import{B as t}from"./Box-63eb24b2.js";import{B as s}from"./Button-f5fc896c.js";import{T as n}from"./Text-cc9cad53.js";import{M as g,A as B}from"./Modal-a8a94101.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-6bc7ac75.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./motion-7df5a7b3.js";import"./extends-98964cd2.js";import"./index.module-99b258bb.js";import"./index.module-008d2b5e.js";import"./index-6cf4ba34.js";import"./index.module-cc7c4bf6.js";import"./Combination-278cba89.js";import"./index.module-ecfb6810.js";import"./index.module-e5ebf90d.js";import"./index-807b81f6.js";import"./WarningIcon-75993e4b.js";import"./IconButton-7ecadd56.js";import"./Scroll-f5008abe.js";const J={title:"Components/Modal",component:g},f=i=>{const[l,p]=C.useState(!0);return r(y,{children:[e(s,{label:"Open Modal",onClick:()=>p(!l)}),e(B,{children:l&&e(g,{...i,onClose:()=>p(!1)})})]})},a={render:f,args:{size:"lg",children:r(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(t,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})}},o={render:i=>e(f,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...i}),args:{size:"lg",children:r(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(t,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})}};var c,m,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const K=["Default","CustomAnimation"];export{o as CustomAnimation,a as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Modal.stories-302a88a5.js.map
