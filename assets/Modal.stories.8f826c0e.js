var s=Object.defineProperty;var r=(e,o)=>s(e,"name",{value:o,configurable:!0});import{a as l,F as m,j as t,r as p}from"./jsx-runtime.e9e872a3.js";import{B as c}from"./Button.b7589b93.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.b7f24ee0.js";import{M as i}from"./Modal.7033515c.js";import{A as d}from"./index.cdafd52a.js";import"./iframe.5afd4e53.js";import"./Box.329586f8.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.1e6815e9.js";import"./index.2b30b5c3.js";import"./index.module.1f8be29f.js";import"./index.module.8544f59c.js";import"./index.482e2958.js";import"./tslib.es6.03b483f6.js";import"./index.module.42c60f9b.js";import"./WarningIcon.8d5b9087.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.8f826c0e.js.map
