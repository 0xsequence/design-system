var p=Object.defineProperty;var l=(o,e)=>p(o,"name",{value:e,configurable:!0});import{a,j as t,r as c,F as d}from"./jsx-runtime.62fd101c.js";import{B as n}from"./Box.4a8275e8.js";import{B as s}from"./Button.793dd394.js";/* empty css                             *//* empty css                              */import{T as i}from"./Text.ea662e0e.js";import{M as m}from"./Modal.aaeb554c.js";import{A as f}from"./index.1f2b883d.js";import"./iframe.e31f7670.js";import"./atoms.css.ccb5b5eb.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.936446b4.js";import"./index.2389c771.js";import"./index.module.d8f3bbc5.js";import"./index.module.e82c7ea0.js";import"./Combination.f89c714d.js";import"./tslib.es6.03b483f6.js";import"./index.module.12c66d1d.js";import"./WarningIcon.89e10e0f.js";import"./IconButton.5016de8b.js";import"./Scroll.85f09f59.js";const Y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
        <Text as="h1" variant="medium" color="textBody">
          New Dapp
        </Text>
        <Text as="p" variant="normal" color="textFaded">
          You can always change these settings later.
        </Text>
      </Box>

      <Box justifyContent="flex-end">
        <Button variant="primary" shape="square" label="Create" />
      </Box>
    </Box>
  ),
}
`,locationsMap:{default:{startLoc:{col:47,line:16},endLoc:{col:1,line:27},startBody:{col:47,line:16},endBody:{col:1,line:27}}}}},title:"Components/Modal",component:m},u=l(o=>{const[e,r]=c.exports.useState(!0);return a(d,{children:[t(s,{label:"Open Modal",onClick:()=>r(!e)}),t(f,{children:e&&t(m,{...o,onClose:()=>r(!1)})})]})},"Template"),x=u.bind({});x.args={children:a(n,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[a(n,{children:[t(i,{as:"h1",variant:"medium",color:"textBody",children:"New Dapp"}),t(i,{as:"p",variant:"normal",color:"textFaded",children:"You can always change these settings later."})]}),t(n,{justifyContent:"flex-end",children:t(s,{variant:"primary",shape:"square",label:"Create"})})]})};const E=["Default"];export{x as Default,E as __namedExportsOrder,Y as default};
//# sourceMappingURL=Modal.stories.721eb3ab.js.map
