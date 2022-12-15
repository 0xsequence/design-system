var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.9ad41e42.js";import{B as i}from"./Button.d6081e13.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.ab7f3e02.js";import{j as t}from"./jsx-runtime.45971c93.js";import"./atoms.css.79225c60.js";import"./Text.843dffc6.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.d5201a7f.js";import"./index.9869dfef.js";import"./iframe.c4333eae.js";import"./index.module.bcbb936a.js";import"./index.module.06694813.js";import"./index.module.23371235.js";import"./index.module.56a290b5.js";import"./index.module.7eaefdc4.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.ab443d21.js.map
