var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.2b9ff5ae.js";import{B as i}from"./Button.ff9d774f.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.07c683d2.js";import{j as t}from"./jsx-runtime.734c2008.js";import"./atoms.css.b9e53546.js";import"./Text.f3eaed8d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.f7a4c1f0.js";import"./index.ce4cb835.js";import"./iframe.f3215ac1.js";import"./index.module.b598f66c.js";import"./index.module.bbafff7d.js";import"./index.module.44d4a191.js";import"./index.module.cee83191.js";import"./index.module.f038e62d.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.a893940c.js.map
