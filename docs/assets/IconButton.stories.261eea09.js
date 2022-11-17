var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box.f52b9a27.js";import{b as c}from"./TransactionIcon.99f6f586.js";import{I as r}from"./IconButton.156c289a.js";import{j as t}from"./jsx-runtime.91a17a4d.js";import"./atoms.css.9060149a.js";/* empty css                              */import"./Button.a3750273.js";import"./Text.8d02ece9.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.68c65bad.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=IconButton.stories.261eea09.js.map