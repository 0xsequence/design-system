var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.cec65f8f.js";import{B as i}from"./Button.b3c3cf52.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.36d8a67a.js";import{j as t}from"./jsx-runtime.f9e77152.js";import"./atoms.css.ccb5b5eb.js";import"./Text.bbdb8bc5.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.75c48f0f.js";import"./index.48c026c2.js";import"./iframe.328722cc.js";import"./index.module.dcce6269.js";import"./index.module.7d89467b.js";import"./index.module.e07dfbf6.js";import"./index.module.3fe8e62a.js";import"./index.module.fad79639.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.1f7bfd3e.js.map
