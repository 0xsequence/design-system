var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.042e240a.js";import{B as l}from"./Button.79210f66.js";/* empty css                              *//* empty css                              */import{T as r}from"./Tooltip.39b7bdbf.js";import{j as t}from"./jsx-runtime.7dfe9fe8.js";import"./atoms.css.68759f6a.js";import"./Text.b5f03237.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.c89c0a26.js";import"./index.03eb3243.js";import"./iframe.aff18420.js";import"./index.module.81efd9f0.js";import"./index.module.fff96a1f.js";import"./index.module.89726ac6.js";const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'

import { Tooltip } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => {
  return (
    <Box background="backgroundSecondary" padding="normal">
      <Tooltip {...args} />
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  message: 'Hello, world!',
  children: <Button label="Hover me" />,
}
`,locationsMap:{default:{startLoc:{col:49,line:13},endLoc:{col:1,line:19},startBody:{col:49,line:13},endBody:{col:1,line:19}}}}},title:"Components/Tooltip",component:r},a=n(o=>t(m,{background:"backgroundSecondary",padding:"normal",children:t(r,{...o})}),"Template"),i=a.bind({});i.args={message:"Hello, world!",children:t(l,{label:"Hover me"})};const M=["Default"];export{i as Default,M as __namedExportsOrder,h as default};
//# sourceMappingURL=Tooltip.stories.c571275d.js.map
