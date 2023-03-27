import{a,j as e,F as y}from"./jsx-runtime-a9c13c85.js";import{r as C}from"./index-d8ade8ea.js";import{B as t}from"./Box-267ea0e2.js";import{B as s}from"./Button-3f6116a1.js";import{T as n}from"./Text-b0b48eb4.js";import{M as g,A as B}from"./Modal-3fcd3da7.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-4b423f56.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-bf276de8.js";import"./typography-f274f330.js";import"./motion-bd85eac6.js";import"./index.module-93053fc6.js";import"./index-6cf4ba34.js";import"./index.module-99b258bb.js";import"./index.module-cc7c4bf6.js";import"./Combination-c233f7e3.js";import"./index.module-06e982d2.js";import"./index.module-7bf7577a.js";import"./index-807b81f6.js";import"./WarningIcon-dc821990.js";import"./IconButton-ea8bf5c6.js";import"./Scroll-55141b20.js";const I={title:"Components/Modal",component:g},f=i=>{const[l,p]=C.useState(!0);return a(y,{children:[e(s,{label:"Open Modal",onClick:()=>p(!l)}),e(B,{children:l&&e(g,{...i,onClose:()=>p(!1)})})]})},r={render:f,args:{size:"lg",children:a(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[a(t,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})}},o={render:i=>e(f,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...i}),args:{size:"lg",children:a(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[a(t,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,x,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["Default","CustomAnimation"];export{o as CustomAnimation,r as Default,J as __namedExportsOrder,I as default};
//# sourceMappingURL=Modal.stories-e8931963.js.map
