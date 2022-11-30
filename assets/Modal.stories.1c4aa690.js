var s=Object.defineProperty;var r=(e,o)=>s(e,"name",{value:o,configurable:!0});import{a as l,F as m,j as t,r as p}from"./jsx-runtime.b4654c87.js";import{B as c}from"./Button.56fe8ffd.js";/* empty css                             *//* empty css                              */import{T as a}from"./Text.4c73ff2e.js";import{M as i}from"./Modal.89bd87a5.js";import{A as d}from"./index.c3f5be55.js";import"./iframe.f3047d8a.js";import"./Box.00136d2c.js";import"./atoms.css.b06098ab.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.0ade2719.js";import"./index.00dea71a.js";import"./index.module.b91d73c7.js";import"./index.module.a02423fa.js";import"./index.7fdc7a7e.js";import"./tslib.es6.03b483f6.js";import"./index.module.1392ee73.js";import"./WarningIcon.09911fdc.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=Modal.stories.1c4aa690.js.map
