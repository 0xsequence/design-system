var r=Object.defineProperty;var l=(e,s)=>r(e,"name",{value:s,configurable:!0});import{B as d}from"./Badge.4de419b0.js";import{B as a}from"./Box.e9b6b9f2.js";import{I as o,g as i}from"./WarningIcon.895b46dc.js";import{B as c}from"./Button.af590098.js";import{a as m,j as t}from"./jsx-runtime.15708ae5.js";/* empty css                             *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.79225c60.js";import"./Text.dfb4198d.js";import"./iframe.b6bbbd50.js";const T={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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

export const Disabled = Template.bind({})
Disabled.args = {
  as: 'a',
  disabled: true,
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
  leftIcon: ScanIcon,
  size: 'md',
  variant: 'glass',
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  disabled: false,
  label: 'Click me',
  onClick: () => console.log('Clicked!'),
  rightIcon: ArrowRightIcon,
  size: 'md',
  variant: 'glass',
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  disabled: false,
  label: 'Click me',
  leftIcon: ScanIcon,
  onClick: () => console.log('Clicked!'),
  rightIcon: ArrowRightIcon,
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
  leftIcon: ScanIcon,
  size: 'md',
  variant: 'glass',
}

export const AnchorButton = Template.bind({})
AnchorButton.args = {
  as: 'a',
  href: '/wallet',
  label: 'Click me',
  leftIcon: ScanIcon,
  size: 'md',
}
`,locationsMap:{"label-only":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},disabled:{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-left-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-right-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-both-icons":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-count-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"anchor-button":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}}}}},title:"Components/Button",component:c},n=l(e=>t(a,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:t(c,{...e})}),"Template"),g=n.bind({});g.args={as:"a",disabled:!1,href:"#",label:"Click me",size:"md",variant:"glass"};const b=n.bind({});b.args={as:"a",disabled:!0,href:"#",label:"Click me",size:"md",variant:"glass"};const p=n.bind({});p.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),leftIcon:o,size:"md",variant:"glass"};const h=n.bind({});h.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),rightIcon:i,size:"md",variant:"glass"};const B=n.bind({});B.args={disabled:!1,label:"Click me",leftIcon:o,onClick:()=>console.log("Clicked!"),rightIcon:i,size:"md",variant:"glass"};const f=n.bind({});f.args={disabled:!1,label:m(a,{gap:"1",children:["Click me",t(d,{value:"3"})]}),onClick:()=>console.log("Clicked!"),leftIcon:o,size:"md",variant:"glass"};const C=n.bind({});C.args={as:"a",href:"/wallet",label:"Click me",leftIcon:o,size:"md"};const A=["LabelOnly","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","WithCountIcon","AnchorButton"];export{C as AnchorButton,b as Disabled,g as LabelOnly,B as WithBothIcons,f as WithCountIcon,p as WithLeftIcon,h as WithRightIcon,A as __namedExportsOrder,T as default};
//# sourceMappingURL=Button.stories.d2c2580d.js.map
