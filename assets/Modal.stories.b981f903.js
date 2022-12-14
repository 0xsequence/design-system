var p=Object.defineProperty;var l=(n,e)=>p(n,"name",{value:e,configurable:!0});import{a as r,j as t,r as c,F as d}from"./jsx-runtime.a2cf14b6.js";import{B as o}from"./Box.b01802aa.js";import{B as s}from"./Button.9e28cc08.js";/* empty css                             *//* empty css                              */import{T as i}from"./Text.31c5c98c.js";import{M as m}from"./Modal.5731e9a4.js";import{A as f}from"./index.e903a05a.js";import"./iframe.bf1e0a8a.js";import"./atoms.css.b2798663.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.af414869.js";import"./index.f5481880.js";import"./index.module.63ac338d.js";import"./index.module.8b32435b.js";import"./Combination.68127be4.js";import"./tslib.es6.03b483f6.js";import"./index.module.50642589.js";import"./WarningIcon.86cfaf7b.js";import"./IconButton.95fcc8d0.js";import"./Scroll.a8f0d203.js";const Y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
`,locationsMap:{default:{startLoc:{col:47,line:16},endLoc:{col:1,line:27},startBody:{col:47,line:16},endBody:{col:1,line:27}}}}},title:"Components/Modal",component:m},u=l(n=>{const[e,a]=c.exports.useState(!0);return r(d,{children:[t(s,{label:"Open Modal",onClick:()=>a(!e)}),t(f,{children:e&&t(m,{...n,onClose:()=>a(!1)})})]})},"Template"),x=u.bind({});x.args={children:r(o,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(o,{children:[t(i,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),t(i,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),t(o,{justifyContent:"flex-end",children:t(s,{variant:"primary",shape:"square",label:"Create"})})]})};const E=["Default"];export{x as Default,E as __namedExportsOrder,Y as default};
//# sourceMappingURL=Modal.stories.b981f903.js.map
