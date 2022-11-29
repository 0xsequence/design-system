var s=Object.defineProperty;var r=(e,o)=>s(e,"name",{value:o,configurable:!0});import{a as l,F as m,j as t,r as p}from"./jsx-runtime.336de55e.js";import{B as c}from"./Button.cc030566.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.83152935.js";import{M as i}from"./Modal.96bf0796.js";import{A as d}from"./index.a75412e6.js";import"./iframe.19170f77.js";import"./Box.77fd5c83.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.41c3b217.js";import"./index.5924effe.js";import"./index.module.a2f867a7.js";import"./index.module.c5a800e9.js";import"./index.6c2ab08d.js";import"./tslib.es6.03b483f6.js";import"./index.module.21a2938c.js";import"./WarningIcon.062e3a4d.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
`,locationsMap:{default:{startLoc:{col:47,line:15},endLoc:{col:1,line:26},startBody:{col:47,line:15},endBody:{col:1,line:26}}}}},title:"Components/Modal",component:i},u=r(e=>{const[o,n]=p.exports.useState(!0);return l(m,{children:[t(c,{label:"Open Modal",onClick:()=>n(!o)}),t(d,{children:o&&t(i,{...e,onClose:()=>n(!1)})})]})},"Template"),f=u.bind({});f.args={children:l(m,{children:[t(a,{variant:"medium",color:"textBody",children:"New Dapp"}),t(a,{variant:"normal",color:"textFaded",children:"You can always change these settings later"})]})};const N=["Default"];export{f as Default,N as __namedExportsOrder,L as default};
//# sourceMappingURL=Modal.stories.b699e0b9.js.map
