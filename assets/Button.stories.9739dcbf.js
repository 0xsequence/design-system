var r=Object.defineProperty;var l=(t,s)=>r(t,"name",{value:s,configurable:!0});import{B as d}from"./Badge.9a3c4594.js";import{B as i}from"./Box.e0c5aa09.js";import{D as o,f as c}from"./WarningIcon.83a12804.js";import{B as a}from"./Button.e35e39eb.js";import{a as m,j as e}from"./jsx-runtime.a97c4eab.js";/* empty css                             *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.ccb5b5eb.js";import"./Text.99ae096d.js";import"./iframe.f68b59c8.js";const w={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge } from '~/components/Badge'
import { Box } from '~/components/Box'
import { ArrowRightIcon, ScanIcon } from '~/icons'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => {
  return (
    <Box padding="3" background="backgroundSecondary" borderRadius="md">
      <Button {...args} />
    </Box>
  )
}

export const LabelOnly = Template.bind({})
LabelOnly.args = {
  as: 'a',
  disabled: false,
  href: '#',
  label: 'Click me',
  size: 'md',
  variant: 'glass',
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = {
  disabled: false,
  label: 'Click me',
  onClick: () => console.log('Clicked!'),
  LeftIcon: ScanIcon,
  size: 'md',
  variant: 'glass',
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  disabled: false,
  label: 'Click me',
  onClick: () => console.log('Clicked!'),
  RightIcon: ArrowRightIcon,
  size: 'md',
  variant: 'glass',
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  disabled: false,
  label: 'Click me',
  LeftIcon: ScanIcon,
  onClick: () => console.log('Clicked!'),
  RightIcon: ArrowRightIcon,
  size: 'md',
  variant: 'glass',
}

export const WithCountIcon = Template.bind({})
WithCountIcon.args = {
  disabled: false,
  label: (
    <Box gap="1">
      Click me
      <Badge value="3" />
    </Box>
  ),
  onClick: () => console.log('Clicked!'),
  LeftIcon: ScanIcon,
  size: 'md',
  variant: 'glass',
}

export const AnchorButton = Template.bind({})
AnchorButton.args = {
  as: 'a',
  href: '/wallet',
  label: 'Click me',
  LeftIcon: ScanIcon,
  size: 'md',
}
`,locationsMap:{"label-only":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-left-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-right-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-both-icons":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-count-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"anchor-button":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}}}}},title:"Components/Button",component:a},n=l(t=>e(i,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:e(a,{...t})}),"Template"),g=n.bind({});g.args={as:"a",disabled:!1,href:"#",label:"Click me",size:"md",variant:"glass"};const p=n.bind({});p.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),LeftIcon:o,size:"md",variant:"glass"};const h=n.bind({});h.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),RightIcon:c,size:"md",variant:"glass"};const b=n.bind({});b.args={disabled:!1,label:"Click me",LeftIcon:o,onClick:()=>console.log("Clicked!"),RightIcon:c,size:"md",variant:"glass"};const B=n.bind({});B.args={disabled:!1,label:m(i,{gap:"1",children:["Click me",e(d,{value:"3"})]}),onClick:()=>console.log("Clicked!"),LeftIcon:o,size:"md",variant:"glass"};const f=n.bind({});f.args={as:"a",href:"/wallet",label:"Click me",LeftIcon:o,size:"md"};const A=["LabelOnly","WithLeftIcon","WithRightIcon","WithBothIcons","WithCountIcon","AnchorButton"];export{f as AnchorButton,g as LabelOnly,b as WithBothIcons,B as WithCountIcon,p as WithLeftIcon,h as WithRightIcon,A as __namedExportsOrder,w as default};
//# sourceMappingURL=Button.stories.9739dcbf.js.map
