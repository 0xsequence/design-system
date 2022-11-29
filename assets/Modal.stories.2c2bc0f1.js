var s=Object.defineProperty;var r=(e,o)=>s(e,"name",{value:o,configurable:!0});import{a as l,F as m,j as t,r as p}from"./jsx-runtime.2f5c74dd.js";import{B as c}from"./Button.e4629b20.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.1e7ab3e4.js";import{M as i}from"./Modal.bcd20a3c.js";import{A as d}from"./index.97784490.js";import"./iframe.3896c9c1.js";import"./Box.6a5c6877.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.2203d951.js";import"./index.26b2447d.js";import"./index.module.4917e756.js";import"./index.module.2e28bc38.js";import"./index.50964060.js";import"./tslib.es6.03b483f6.js";import"./index.module.8874ebc1.js";import"./WarningIcon.54ee2475.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.2c2bc0f1.js.map
