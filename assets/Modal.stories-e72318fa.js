import{a as r,j as e,F as x}from"./jsx-runtime-a9c13c85.js";import{r as h}from"./index-d8ade8ea.js";import{B as t}from"./Box-fa0ac857.js";import{B as s}from"./Button-7f73e633.js";import"./atoms-37a3518e.js";/* empty css                              */import{T as a}from"./Text-e0b7a790.js";import{M as d,A as g}from"./Modal-ba13002d.js";import"./_commonjsHelpers-042e6b4d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./motion-7df5a7b3.js";import"./extends-98964cd2.js";import"./index.module-d15610cf.js";import"./index-ffd4619b.js";import"./index.module-a9b21657.js";import"./Combination-78ef0d5c.js";import"./index.module-f17d4a85.js";import"./index.module-732cca0e.js";import"./index-807b81f6.js";import"./WarningIcon-25714511.js";import"./IconButton-752759c9.js";import"./Scroll-99234cc4.js";const F={title:"Components/Modal",component:d},u=o=>{const[l,p]=h.useState(!0);return r(x,{children:[e(s,{label:"Open Modal",onClick:()=>p(!l)}),e(g,{children:l&&e(d,{...o,onClose:()=>p(!1)})})]})},n={render:u,args:{size:"lg",children:r(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(t,{children:[e(a,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(a,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})}},i={render:o=>e(u,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...o}),args:{size:"lg",children:r(t,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(t,{children:[e(a,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(a,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),e(t,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})}};var m;n.parameters={...n.parameters,storySource:{source:`{
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
}`,...(m=n.parameters)==null?void 0:m.storySource}};var c;i.parameters={...i.parameters,storySource:{source:`{
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
}`,...(c=i.parameters)==null?void 0:c.storySource}};const k=["Default","CustomAnimation"];export{i as CustomAnimation,n as Default,k as __namedExportsOrder,F as default};
//# sourceMappingURL=Modal.stories-e72318fa.js.map
