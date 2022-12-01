var p=Object.defineProperty;var l=(o,e)=>p(o,"name",{value:e,configurable:!0});import{a,j as t,r as c,F as d}from"./jsx-runtime.14042249.js";import{B as n}from"./Box.4f7faf9f.js";import{B as s}from"./Button.bb50d29b.js";/* empty css                             *//* empty css                              */import{T as i}from"./Text.9bd74db5.js";import{M as m}from"./Modal.d9df9fd5.js";import{A as f}from"./index.2026680d.js";import"./iframe.4bbadcc5.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.be98d844.js";import"./index.4d1d8a40.js";import"./index.module.1fc51b22.js";import"./index.module.79421451.js";import"./index.753f74d4.js";import"./tslib.es6.03b483f6.js";import"./index.module.771113f7.js";import"./WarningIcon.dbff1480.js";import"./IconButton.d52d03c3.js";import"./Scroll.10c193be.js";const Y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.29a671ac.js.map
