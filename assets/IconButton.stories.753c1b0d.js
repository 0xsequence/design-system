var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box.4f616bff.js";import{d as c}from"./WarningIcon.63454647.js";import{I as r}from"./IconButton.86f5edf2.js";import{j as t}from"./jsx-runtime.77b8b000.js";/* empty css                             */import"./atoms.css.439e7cbc.js";import"./Button.3d20011e.js";import"./Text.593fb801.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.9dfc9a39.js";const k={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
  onClick: () => console.log('ouch!'),
  variant: 'glass',
}
`,locationsMap:{base:{startLoc:{col:52,line:13},endLoc:{col:1,line:19},startBody:{col:52,line:13},endBody:{col:1,line:19}}}}},title:"Components/IconButton",component:r},i=n(o=>t(s,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:t(r,{...o})}),"Template"),m=i.bind({});m.args={Icon:c,disabled:!1,size:"md",onClick:()=>console.log("ouch!"),variant:"glass"};const h=["Base"];export{m as Base,h as __namedExportsOrder,k as default};
//# sourceMappingURL=IconButton.stories.753c1b0d.js.map
