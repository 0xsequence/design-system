var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{a as l,F as s,j as t,r as p}from"./jsx-runtime.5f93b98e.js";import{B as c}from"./Button.25e52cd3.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.a82d933d.js";import{M as m}from"./Modal.7e715c33.js";import{A as d}from"./index.18acfe08.js";import"./iframe.c40bfb42.js";import"./Box.6f00241a.js";import"./atoms.css.cff455f3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.708e96a8.js";import"./index.f2c6a2bd.js";import"./index.module.84cc3d11.js";import"./index.module.e5902db7.js";import"./TransactionIcon.9d5ff453.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.81f217ff.js.map
