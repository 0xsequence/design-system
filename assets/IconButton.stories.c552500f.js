var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box.0e154dcb.js";import{f as c}from"./WarningIcon.91692ad8.js";import{I as r}from"./IconButton.8b97475e.js";import{j as t}from"./jsx-runtime.422d94bc.js";/* empty css                             */import"./atoms.css.ccb5b5eb.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.47658698.js";import"./Text.99014c1b.js";/* empty css                              */import"./iframe.498acad8.js";const k={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=IconButton.stories.c552500f.js.map
