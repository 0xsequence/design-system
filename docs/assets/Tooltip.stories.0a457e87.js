var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.f52b9a27.js";import{B as i}from"./Button.a3750273.js";/* empty css                              *//* empty css                              */import{T as r}from"./Tooltip.7f04769d.js";import{j as t}from"./jsx-runtime.91a17a4d.js";import"./atoms.css.9060149a.js";import"./Text.8d02ece9.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.6a94d229.js";import"./index.68078f7f.js";import"./iframe.68c65bad.js";import"./index.module.6391b8cb.js";import"./index.module.f82eba39.js";import"./index.module.02411c1f.js";const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.0a457e87.js.map
