var p=Object.defineProperty;var i=(o,e)=>p(o,"name",{value:e,configurable:!0});import{r as c}from"./index-9b47cd5d.js";import{B as n}from"./Box-189343a4.js";import{B as s}from"./Button-a91a0758.js";/* empty css                             *//* empty css                              */import{T as l}from"./Text-58c8d0a0.js";import{M as m}from"./Modal-88211da2.js";import{a as r,j as t,F as d}from"./jsx-runtime-6057fa59.js";import{A as f}from"./index-3d2c79c6.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-82e5de3b.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./typography-f274f330.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-e55af700.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-79bb90fa.js";import"./WarningIcon-66e22c0e.js";import"./IconButton-e0a70fee.js";import"./Scroll-60cc41ca.js";const E={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Box } from '../Box'
import { Button } from '../Button'
import { Text } from '../Text'

import { Modal } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => {
  const [isOpen, toggleModal] = useState(true)

  return (
    <>
      <Button label="Open Modal" onClick={() => toggleModal(!isOpen)} />
      <AnimatePresence>
        {isOpen && <Modal {...args} onClose={() => toggleModal(false)} />}
      </AnimatePresence>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  size: 'lg',
  children: (
    <Box
      flexDirection="column"
      justifyContent="space-between"
      height="full"
      padding="4"
    >
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
  ),
}
`,locationsMap:{default:{startLoc:{col:47,line:16},endLoc:{col:1,line:27},startBody:{col:47,line:16},endBody:{col:1,line:27}}}}},title:"Components/Modal",component:m},u=i(o=>{const[e,a]=c.exports.useState(!0);return r(d,{children:[t(s,{label:"Open Modal",onClick:()=>a(!e)}),t(f,{children:e&&t(m,{...o,onClose:()=>a(!1)})})]})},"Template"),x=u.bind({});x.args={size:"lg",children:r(n,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(n,{children:[t(l,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),t(l,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),t(n,{justifyContent:"flex-end",children:t(s,{variant:"primary",shape:"square",label:"Create"})})]})};const G=["Default"];export{x as Default,G as __namedExportsOrder,E as default};
//# sourceMappingURL=Modal.stories-9a5bac5c.js.map
