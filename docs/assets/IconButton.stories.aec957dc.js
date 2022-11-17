var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box.379a310a.js";import{b as c}from"./TransactionIcon.3c30b9cc.js";import{I as r}from"./IconButton.026bed01.js";import{j as t}from"./jsx-runtime.58fdc09c.js";import"./atoms.css.9060149a.js";/* empty css                              */import"./Button.0046b29c.js";import"./Text.fb41b4d2.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.04194b68.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'
import { ArrowRightIcon } from '~/icons'

import { IconButton } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = args => {
  return (
    <Box padding="3" background="backgroundSecondary" borderRadius="md">
      <IconButton {...args} />
    </Box>
  )
}

export const Base = Template.bind({})
Base.args = {
  Icon: ArrowRightIcon,
  disabled: false,
  size: 'md',
  variant: 'solid',
}
`,locationsMap:{base:{startLoc:{col:52,line:13},endLoc:{col:1,line:19},startBody:{col:52,line:13},endBody:{col:1,line:19}}}}},title:"Components/IconButton",component:r},i=n(o=>t(s,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:t(r,{...o})}),"Template"),m=i.bind({});m.args={Icon:c,disabled:!1,size:"md",variant:"solid"};const k=["Base"];export{m as Base,k as __namedExportsOrder,S as default};
//# sourceMappingURL=IconButton.stories.aec957dc.js.map
