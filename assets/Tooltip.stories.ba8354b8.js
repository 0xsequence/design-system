var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.fc9625ad.js";import{B as i}from"./Button.407d5b47.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.e3ef21a3.js";import{j as t}from"./jsx-runtime.08aeaa9a.js";import"./atoms.css.b06098ab.js";import"./Text.f66da417.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.d71f06db.js";import"./index.37a7b8f5.js";import"./iframe.879686e0.js";import"./index.module.18a40af4.js";import"./index.module.2edb3662.js";import"./index.module.cdaa1a28.js";import"./index.module.3e6cd5bc.js";import"./index.module.7c56ec23.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.ba8354b8.js.map
