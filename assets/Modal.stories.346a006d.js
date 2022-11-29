var s=Object.defineProperty;var r=(e,o)=>s(e,"name",{value:o,configurable:!0});import{a as l,F as m,j as t,r as p}from"./jsx-runtime.cfaa7d39.js";import{B as c}from"./Button.bee9fb70.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.84464cdd.js";import{M as i}from"./Modal.8651af1a.js";import{A as d}from"./index.96be288f.js";import"./iframe.013a05e2.js";import"./Box.54858950.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.48a5066b.js";import"./index.b6ba67e1.js";import"./index.module.fcc8ae8f.js";import"./index.module.296ba5f7.js";import"./index.f4849dad.js";import"./tslib.es6.03b483f6.js";import"./index.module.f6bf6259.js";import"./WarningIcon.1f0968eb.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.346a006d.js.map
