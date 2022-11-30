var p=Object.defineProperty;var l=(o,e)=>p(o,"name",{value:e,configurable:!0});import{a as r,j as t,r as c,F as d}from"./jsx-runtime.f0566386.js";import{B as n}from"./Box.a2cee02f.js";import{B as s}from"./Button.8d0ee09d.js";/* empty css                             *//* empty css                              */import{T as i}from"./Text.b3feb25b.js";import{M as m}from"./Modal.a88e8311.js";import{A as f}from"./index.816c0931.js";import"./iframe.a4443ffa.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.4b25f822.js";import"./index.dd4c6f4e.js";import"./index.module.56773449.js";import"./index.module.997674ed.js";import"./index.5e566362.js";import"./tslib.es6.03b483f6.js";import"./index.module.7b6589ea.js";import"./WarningIcon.53efd291.js";import"./IconButton.1ba6527d.js";import"./Scroll.e1d307ca.js";const Y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.08c9285b.js.map
