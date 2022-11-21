var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.84a3e293.js";import{B as i}from"./Button.930ae02d.js";/* empty css                              *//* empty css                              */import{T as r}from"./Tooltip.c331707d.js";import{j as t}from"./jsx-runtime.183293f6.js";import"./atoms.css.992cbf41.js";import"./Text.8f428060.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.448a058f.js";import"./index.bfd41fea.js";import"./iframe.a71886b8.js";import"./index.module.66537a5b.js";import"./index.module.baf7d693.js";import"./index.module.cc2eb97a.js";const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.267781c3.js.map
