import{a as o,j as e,F as y}from"./jsx-runtime-a9c13c85.js";import{r as B}from"./index-d8ade8ea.js";import{B as r}from"./Box-63eb24b2.js";import{B as i}from"./Button-f5fc896c.js";import{T as n}from"./Text-cc9cad53.js";import{M as g,A as C}from"./Modal-0b15c7c0.js";import"./_commonjsHelpers-042e6b4d.js";import"./atoms-6bc7ac75.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./typography-f274f330.js";import"./motion-7df5a7b3.js";import"./extends-98964cd2.js";import"./index.module-99b258bb.js";import"./index.module-1b91e82f.js";import"./index-ffd4619b.js";import"./index.module-cc7c4bf6.js";import"./Combination-ff871947.js";import"./index.module-05556e0d.js";import"./index.module-5cafe27c.js";import"./index-807b81f6.js";import"./WarningIcon-d73a79c6.js";import"./IconButton-7ecadd56.js";import"./Scroll-f5008abe.js";const J={title:"Components/Modal",component:g},f=s=>{const[l,p]=B.useState(!0);return o(y,{children:[e(i,{label:"Open Modal",onClick:()=>p(!l)}),e(C,{children:l&&e(g,{...s,onClose:()=>p(!1)})})]})},t={render:f,args:{size:"lg",children:o(r,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[o(r,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),e(r,{justifyContent:"flex-end",children:e(i,{variant:"primary",shape:"square",label:"Create"})})]})}},a={render:s=>e(f,{overlayProps:{},contentProps:{initial:{scale:0,rotateZ:0},animate:{scale:1,rotateZ:360},exit:{scale:0,rotateZ:0},transition:{type:"spring"}},...s}),args:{size:"lg",children:o(r,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[o(r,{children:[e(n,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),e(n,{as:"p",variant:"normal",color:"text50",children:"Custom Open & Close Animated Modal. You can always change these settings later."})]}),e(r,{justifyContent:"flex-end",children:e(i,{variant:"primary",shape:"square",label:"Create"})})]})}};var c,m,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};t.parameters={storySource:{source:`{
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
}`},...t.parameters};a.parameters={storySource:{source:`{
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
}`},...a.parameters};const K=["Default","CustomAnimation"];export{a as CustomAnimation,t as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Modal.stories-5da52d6e.js.map
