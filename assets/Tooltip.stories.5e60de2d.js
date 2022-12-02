var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.01559332.js";import{B as i}from"./Button.c67840c1.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.32c8c11d.js";import{j as t}from"./jsx-runtime.67acbeda.js";import"./atoms.css.9489b500.js";import"./Text.ad301f8c.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.fe3b5df2.js";import"./index.1d999334.js";import"./iframe.619ea6da.js";import"./index.module.cfc86f4d.js";import"./index.module.3c7d4498.js";import"./index.module.12a01ef1.js";import"./index.module.f38ea8e3.js";import"./index.module.09860a86.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{default:{startLoc:{col:49,line:13},endLoc:{col:1,line:19},startBody:{col:49,line:13},endBody:{col:1,line:19}}}}},title:"Components/Tooltip",component:r},l=n(o=>t(m,{background:"backgroundSecondary",padding:"4",children:t(r,{...o})}),"Template"),a=l.bind({});a.args={message:"Hello, world!",children:t(i,{label:"Hover me"})};const j=["Default"];export{a as Default,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=Tooltip.stories.5e60de2d.js.map
