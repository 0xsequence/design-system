var i=Object.defineProperty;var a=(e,o)=>i(e,"name",{value:o,configurable:!0});import{a as l,F as s,j as t,r as p}from"./jsx-runtime.d1999ebe.js";import{B as c}from"./Button.5854e605.js";/* empty css                             *//* empty css                              */import{T as r}from"./Text.4bce75ac.js";import{M as m}from"./Modal.216819c0.js";import{A as d}from"./index.6a9a00df.js";import"./iframe.2f30c382.js";import"./Box.476646d9.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.b72dfbbb.js";import"./index.c15027db.js";import"./index.module.332f3ad4.js";import"./index.module.4f7282b1.js";import"./index.8fc761e9.js";import"./tslib.es6.03b483f6.js";import"./index.module.42f07cad.js";import"./WarningIcon.34c9b5ed.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
      <Text as="h1" variant="medium" color="textBody">
        New Dapp
      </Text>
      <Text as="p" variant="normal" color="textFaded">
        You can always change these settings later
      </Text>
    </>
  ),
}
`,locationsMap:{default:{startLoc:{col:47,line:15},endLoc:{col:1,line:26},startBody:{col:47,line:15},endBody:{col:1,line:26}}}}},title:"Components/Modal",component:m},u=a(e=>{const[o,n]=p.exports.useState(!0);return l(s,{children:[t(c,{label:"Open Modal",onClick:()=>n(!o)}),t(d,{children:o&&t(m,{...e,onClose:()=>n(!1)})})]})},"Template"),f=u.bind({});f.args={children:l(s,{children:[t(r,{as:"h1",variant:"medium",color:"textBody",children:"New Dapp"}),t(r,{as:"p",variant:"normal",color:"textFaded",children:"You can always change these settings later"})]})};const N=["Default"];export{f as Default,N as __namedExportsOrder,L as default};
//# sourceMappingURL=Modal.stories.93c26be9.js.map
