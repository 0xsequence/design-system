var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box.daa61a90.js";import{B as i}from"./Button.304976de.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip.1b2e6358.js";import{j as t}from"./jsx-runtime.628831a7.js";import"./atoms.css.cff455f3.js";import"./Text.a9ff68e4.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.ad1a0ed7.js";import"./index.623888b1.js";import"./iframe.3833dadd.js";import"./index.module.1982fcf2.js";import"./index.module.5bbfcddb.js";import"./index.module.1cb9f8ff.js";const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tooltip.stories.6fe22099.js.map
