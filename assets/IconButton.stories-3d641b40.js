var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});import{B as s}from"./Box-51f65dd6.js";import{g as c}from"./WarningIcon-4182fb24.js";import{I as r}from"./IconButton-f938168d.js";import{j as t}from"./jsx-runtime-6057fa59.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";/* empty css                             */import"./atoms.css-36c6db2d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Button-4551bff3.js";import"./Text-cce84919.js";import"./typography-f274f330.js";/* empty css                              */const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
  icon: ArrowRightIcon,
  disabled: false,
  size: 'md',
  onClick: () => console.log('ouch!'),
  variant: 'glass',
}
`,locationsMap:{base:{startLoc:{col:52,line:13},endLoc:{col:1,line:19},startBody:{col:52,line:13},endBody:{col:1,line:19}}}}},title:"Components/IconButton",component:r},i=n(o=>t(s,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:t(r,{...o})}),"Template"),m=i.bind({});m.args={icon:c,disabled:!1,size:"md",onClick:()=>console.log("ouch!"),variant:"glass"};const R=["Base"];export{m as Base,R as __namedExportsOrder,S as default};
//# sourceMappingURL=IconButton.stories-3d641b40.js.map
