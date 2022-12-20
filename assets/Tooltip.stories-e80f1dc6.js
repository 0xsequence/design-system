var p=Object.defineProperty;var n=(o,e)=>p(o,"name",{value:e,configurable:!0});import{B as m}from"./Box-51f65dd6.js";import{B as i}from"./Button-4551bff3.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tooltip-ac62d88a.js";import{j as t}from"./jsx-runtime-6057fa59.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-36c6db2d.js";import"./Text-cce84919.js";import"./typography-f274f330.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-ef1f1d8d.js";import"./index.module-e55af700.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./index.module-ec83e676.js";const v={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{default:{startLoc:{col:49,line:13},endLoc:{col:1,line:19},startBody:{col:49,line:13},endBody:{col:1,line:19}}}}},title:"Components/Tooltip",component:r},l=n(o=>t(m,{background:"backgroundSecondary",padding:"4",children:t(r,{...o})}),"Template"),a=l.bind({});a.args={message:"Hello, world!",children:t(i,{label:"Hover me"})};const w=["Default"];export{a as Default,w as __namedExportsOrder,v as default};
//# sourceMappingURL=Tooltip.stories-e80f1dc6.js.map
