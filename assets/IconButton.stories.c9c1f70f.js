var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box.daa61a90.js";import{b as c}from"./TransactionIcon.25297e9e.js";import{I as r}from"./IconButton.9a6db734.js";import{j as t}from"./jsx-runtime.628831a7.js";/* empty css                             */import"./atoms.css.cff455f3.js";import"./Button.304976de.js";import"./Text.a9ff68e4.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.3833dadd.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=IconButton.stories.c9c1f70f.js.map
