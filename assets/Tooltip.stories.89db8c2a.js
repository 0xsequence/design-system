var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.86297f26.js";import{B as i}from"./Button.ec6e3c34.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.2f55a3a5.js";import{j as t}from"./jsx-runtime.0d09e0bf.js";import"./atoms.css.4b799120.js";import"./Text.80097401.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.5fc530f0.js";import"./index.402fd342.js";import"./iframe.25ff4bfc.js";import"./index.module.e23408f8.js";import"./index.module.c06cc200.js";import"./index.module.4b3982ac.js";const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'

import { Tooltip } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => {
  return (
    <Box background="backgroundSecondary" padding="4">
      <Tooltip {...args} />
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  message: 'Hello, world!',
  children: <Button label="Hover me" />,
}
`,locationsMap:{default:{startLoc:{col:49,line:13},endLoc:{col:1,line:19},startBody:{col:49,line:13},endBody:{col:1,line:19}}}}},title:"Components/Tooltip",component:r},l=n(o=>t(m,{background:"backgroundSecondary",padding:"4",children:t(r,{...o})}),"Template"),a=l.bind({});a.args={message:"Hello, world!",children:t(i,{label:"Hover me"})};const M=["Default"];export{a as Default,M as __namedExportsOrder,h as default};
//# sourceMappingURL=Tooltip.stories.89db8c2a.js.map
