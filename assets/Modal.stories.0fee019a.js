var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{a as l,F as s,j as t,r as p}from"./jsx-runtime.c3f89086.js";import{B as c}from"./Button.2c78ff1e.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.13e6607c.js";import{M as m}from"./Modal.64163318.js";import{A as d}from"./index.c8661cc9.js";import"./iframe.f80ad13e.js";import"./Box.a8f80a42.js";import"./atoms.css.cff455f3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.ac9ad127.js";import"./index.981f84a4.js";import"./index.module.b2b71163.js";import"./index.module.445067e2.js";import"./TransactionIcon.ad8d88c3.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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
    <>
      <Text variant="medium" color="textBody">
        New Dapp
      </Text>
      <Text variant="normal" color="textFaded">
        You can always change these settings later
      </Text>
    </>
  ),
}
`,locationsMap:{default:{startLoc:{col:47,line:15},endLoc:{col:1,line:26},startBody:{col:47,line:15},endBody:{col:1,line:26}}}}},title:"Components/Modal",component:m},u=r(e=>{const[o,n]=p.exports.useState(!0);return l(s,{children:[t(c,{label:"Open Modal",onClick:()=>n(!o)}),t(d,{children:o&&t(m,{...e,onClose:()=>n(!1)})})]})},"Template"),f=u.bind({});f.args={children:l(s,{children:[t(a,{variant:"medium",color:"textBody",children:"New Dapp"}),t(a,{variant:"normal",color:"textFaded",children:"You can always change these settings later"})]})};const k=["Default"];export{f as Default,k as __namedExportsOrder,j as default};
//# sourceMappingURL=Modal.stories.0fee019a.js.map
