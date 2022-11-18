var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box.afe189d1.js";import{b as c}from"./TransactionIcon.d9bd8a33.js";import{I as r}from"./IconButton.4f215adc.js";import{j as t}from"./jsx-runtime.8e743ddb.js";import"./atoms.css.dc14a9f8.js";/* empty css                              */import"./Button.99df9a05.js";import"./Text.f908b6e4.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.c30b9b13.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
  variant: 'glass',
}
`,locationsMap:{base:{startLoc:{col:52,line:13},endLoc:{col:1,line:19},startBody:{col:52,line:13},endBody:{col:1,line:19}}}}},title:"Components/IconButton",component:r},m=n(o=>t(s,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:t(r,{...o})}),"Template"),i=m.bind({});i.args={Icon:c,disabled:!1,size:"md",variant:"glass"};const k=["Base"];export{i as Base,k as __namedExportsOrder,S as default};
//# sourceMappingURL=IconButton.stories.ddaeafcd.js.map
