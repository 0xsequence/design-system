var p=Object.defineProperty;var l=(o,t)=>p(o,"name",{value:t,configurable:!0});import{a as r,j as e,r as c,F as d}from"./jsx-runtime.7d522e17.js";import{B as n}from"./Box.74eda5f2.js";import{B as s}from"./Button.e77f84c3.js";/* empty css                             *//* empty css                              */import{T as i}from"./Text.c75cb12e.js";import{M as m}from"./Modal.75db27e3.js";import{A as f}from"./index.4c6b8de6.js";import"./iframe.baf0ee19.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.857bd702.js";import"./index.e7fe8220.js";import"./index.module.64cd6072.js";import"./index.module.e1ad2278.js";import"./index.377e0ea0.js";import"./tslib.es6.03b483f6.js";import"./index.module.d02273ca.js";import"./WarningIcon.3297ead0.js";import"./IconButton.1a35ed0a.js";const N={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
`,locationsMap:{default:{startLoc:{col:47,line:16},endLoc:{col:1,line:27},startBody:{col:47,line:16},endBody:{col:1,line:27}}}}},title:"Components/Modal",component:m},u=l(o=>{const[t,a]=c.exports.useState(!0);return r(d,{children:[e(s,{label:"Open Modal",onClick:()=>a(!t)}),e(f,{children:t&&e(m,{...o,onClose:()=>a(!1)})})]})},"Template"),x=u.bind({});x.args={children:r(n,{flexDirection:"column",justifyContent:"space-between",height:"full",children:[r(n,{children:[e(i,{as:"h1",variant:"medium",color:"textBody",children:"New Dapp"}),e(i,{as:"p",variant:"normal",color:"textFaded",children:"You can always change these settings later."})]}),e(n,{justifyContent:"flex-end",children:e(s,{variant:"primary",shape:"square",label:"Create"})})]})};const Y=["Default"];export{x as Default,Y as __namedExportsOrder,N as default};
//# sourceMappingURL=Modal.stories.af8cc00a.js.map
