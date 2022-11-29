var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.77fd5c83.js";import{B as i}from"./Button.cc030566.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.91dd8846.js";import{j as t}from"./jsx-runtime.336de55e.js";import"./atoms.css.b06098ab.js";import"./Text.83152935.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.41c3b217.js";import"./index.5924effe.js";import"./iframe.19170f77.js";import"./index.module.c5a800e9.js";import"./index.module.a2f867a7.js";import"./index.module.f4cb6e94.js";import"./index.module.21a2938c.js";import"./index.module.263c8f13.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.e337d189.js.map
