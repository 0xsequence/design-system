var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.4f616bff.js";import{B as i}from"./Button.3d20011e.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.a873320c.js";import{j as t}from"./jsx-runtime.77b8b000.js";import"./atoms.css.439e7cbc.js";import"./Text.593fb801.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.0b735ff6.js";import"./index.7b261eb3.js";import"./iframe.9dfc9a39.js";import"./index.module.a73ed06d.js";import"./index.module.17a8845b.js";import"./index.module.bc9ba593.js";const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.4c2dba79.js.map
