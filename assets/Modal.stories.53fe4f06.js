var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{a as l,F as s,j as t,r as p}from"./jsx-runtime.4ca9c3c4.js";import{B as c}from"./Button.db5b288a.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.ebf37340.js";import{M as m}from"./Modal.7e797d0a.js";import{A as d}from"./index.96439aad.js";import"./iframe.093ea225.js";import"./Box.0fa68525.js";import"./atoms.css.cff455f3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.3375bafb.js";import"./index.6e8bb534.js";import"./index.module.78d50973.js";import"./index.module.7efde36c.js";import"./WarningIcon.c96f0446.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.53fe4f06.js.map
