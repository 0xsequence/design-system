var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{a as l,F as s,j as t,r as p}from"./jsx-runtime.1bd02d27.js";import{B as c}from"./Button.d8ab6663.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.5aae3839.js";import{M as m}from"./Modal.e1e288b9.js";import{A as d}from"./index.0d72b098.js";import"./iframe.846e4d8e.js";import"./Box.0eb13bc5.js";import"./atoms.css.cff455f3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.41c64031.js";import"./index.6a23b5b2.js";import"./index.module.b45a9713.js";import"./index.module.549a0d02.js";import"./TransactionIcon.901ad226.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.ce37bf0e.js.map
