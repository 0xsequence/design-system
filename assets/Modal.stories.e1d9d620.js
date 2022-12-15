var p=Object.defineProperty;var l=(n,e)=>p(n,"name",{value:e,configurable:!0});import{a as r,j as t,r as c,F as d}from"./jsx-runtime.cbb7d416.js";import{B as o}from"./Box.0210adcf.js";import{B as s}from"./Button.eb14fc8e.js";/* empty css                             *//* empty css                              */import{T as i}from"./Text.4efcce86.js";import{M as m}from"./Modal.6f4558ca.js";import{A as f}from"./index.61226a14.js";import"./iframe.fb385025.js";import"./atoms.css.79225c60.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.fe21a7ad.js";import"./index.50664d3a.js";import"./index.module.9bd2de52.js";import"./index.module.231eba8b.js";import"./Combination.54252213.js";import"./tslib.es6.03b483f6.js";import"./index.module.e714c392.js";import"./WarningIcon.3afd75e6.js";import"./IconButton.74ad48d0.js";import"./Scroll.a0e1178b.js";const Y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Box } from '../Box'
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
    <Box
      flexDirection="column"
      justifyContent="space-between"
      height="full"
      padding="4"
    >
      <Box>
        <Text as="h1" variant="medium" color="text100">
          New Dapp
        </Text>
        <Text as="p" variant="normal" color="text50">
          You can always change these settings later.
        </Text>
      </Box>

      <Box justifyContent="flex-end">
        <Button variant="primary" shape="square" label="Create" />
      </Box>
    </Box>
  ),
}
`,locationsMap:{default:{startLoc:{col:47,line:16},endLoc:{col:1,line:27},startBody:{col:47,line:16},endBody:{col:1,line:27}}}}},title:"Components/Modal",component:m},u=l(n=>{const[e,a]=c.exports.useState(!0);return r(d,{children:[t(s,{label:"Open Modal",onClick:()=>a(!e)}),t(f,{children:e&&t(m,{...n,onClose:()=>a(!1)})})]})},"Template"),x=u.bind({});x.args={children:r(o,{flexDirection:"column",justifyContent:"space-between",height:"full",padding:"4",children:[r(o,{children:[t(i,{as:"h1",variant:"medium",color:"text100",children:"New Dapp"}),t(i,{as:"p",variant:"normal",color:"text50",children:"You can always change these settings later."})]}),t(o,{justifyContent:"flex-end",children:t(s,{variant:"primary",shape:"square",label:"Create"})})]})};const E=["Default"];export{x as Default,E as __namedExportsOrder,Y as default};
//# sourceMappingURL=Modal.stories.e1d9d620.js.map
