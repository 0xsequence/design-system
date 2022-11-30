var p=Object.defineProperty;var l=(o,e)=>p(o,"name",{value:e,configurable:!0});import{a as r,j as t,r as c,F as d}from"./jsx-runtime.bef1881e.js";import{B as n}from"./Box.c689a501.js";import{B as s}from"./Button.959281bd.js";/* empty css                             *//* empty css                              */import{T as i}from"./Text.d4cb5076.js";import{M as m}from"./Modal.61b83360.js";import{A as f}from"./index.6de44805.js";import"./iframe.5b62c891.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.325ecc51.js";import"./index.d4817ac9.js";import"./index.module.b331d1e2.js";import"./index.module.7bf4fe02.js";import"./index.c07eca61.js";import"./tslib.es6.03b483f6.js";import"./index.module.14995526.js";import"./WarningIcon.b17b104e.js";import"./IconButton.2a86e003.js";import"./Scroll.8f68c619.js";const Y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
    <Box flexDirection="column" justifyContent="space-between" height="full">
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
`,locationsMap:{default:{startLoc:{col:47,line:16},endLoc:{col:1,line:27},startBody:{col:47,line:16},endBody:{col:1,line:27}}}}},title:"Components/Modal",component:m},u=l(o=>{const[e,a]=c.exports.useState(!0);return r(d,{children:[t(s,{label:"Open Modal",onClick:()=>a(!e)}),t(f,{children:e&&t(m,{...o,onClose:()=>a(!1)})})]})},"Template"),x=u.bind({});x.args={children:r(n,{flexDirection:"column",justifyContent:"space-between",height:"full",children:[r(n,{children:[t(i,{as:"h1",variant:"medium",color:"textBody",children:"New Dapp"}),t(i,{as:"p",variant:"normal",color:"textFaded",children:"You can always change these settings later."})]}),t(n,{justifyContent:"flex-end",children:t(s,{variant:"primary",shape:"square",label:"Create"})})]})};const E=["Default"];export{x as Default,E as __namedExportsOrder,Y as default};
//# sourceMappingURL=Modal.stories.93c3697c.js.map
