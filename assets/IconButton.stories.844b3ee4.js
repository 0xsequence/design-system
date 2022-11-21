var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box.be6d0854.js";import{b as c}from"./TransactionIcon.4c8dd193.js";import{I as r}from"./IconButton.5514f3ce.js";import{j as t}from"./jsx-runtime.fc7d6443.js";import"./atoms.css.06f63def.js";/* empty css                              */import"./Button.6e5cd736.js";import"./Text.3d121d62.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.80592374.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=IconButton.stories.844b3ee4.js.map
