var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box.84a3e293.js";import{b as c}from"./TransactionIcon.4bd20bcf.js";import{I as r}from"./IconButton.9547fa14.js";import{j as t}from"./jsx-runtime.183293f6.js";import"./atoms.css.992cbf41.js";/* empty css                              */import"./Button.930ae02d.js";import"./Text.8f428060.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.a71886b8.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=IconButton.stories.2ddd6a0e.js.map
