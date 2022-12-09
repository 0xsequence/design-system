var r=Object.defineProperty;var l=(t,s)=>r(t,"name",{value:s,configurable:!0});import{B as d}from"./Badge.508ac486.js";import{B as i}from"./Box.2b9ff5ae.js";import{E as o,g as c}from"./WarningIcon.1aafeee7.js";import{B as a}from"./Button.ff9d774f.js";import{a as m,j as e}from"./jsx-runtime.734c2008.js";/* empty css                             *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.b9e53546.js";import"./Text.f3eaed8d.js";import"./iframe.f3215ac1.js";const R={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{"label-only":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-left-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-right-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-both-icons":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-count-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"anchor-button":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}}}}},title:"Components/Button",component:a},n=l(t=>e(i,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:e(a,{...t})}),"Template"),g=n.bind({});g.args={as:"a",disabled:!1,href:"#",label:"Click me",size:"md",variant:"glass"};const p=n.bind({});p.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),leftIcon:o,size:"md",variant:"glass"};const h=n.bind({});h.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),rightIcon:c,size:"md",variant:"glass"};const b=n.bind({});b.args={disabled:!1,label:"Click me",leftIcon:o,onClick:()=>console.log("Clicked!"),rightIcon:c,size:"md",variant:"glass"};const B=n.bind({});B.args={disabled:!1,label:m(i,{gap:"1",children:["Click me",e(d,{value:"3"})]}),onClick:()=>console.log("Clicked!"),leftIcon:o,size:"md",variant:"glass"};const f=n.bind({});f.args={as:"a",href:"/wallet",label:"Click me",leftIcon:o,size:"md"};const A=["LabelOnly","WithLeftIcon","WithRightIcon","WithBothIcons","WithCountIcon","AnchorButton"];export{f as AnchorButton,g as LabelOnly,b as WithBothIcons,B as WithCountIcon,p as WithLeftIcon,h as WithRightIcon,A as __namedExportsOrder,R as default};
//# sourceMappingURL=Button.stories.937cb4a4.js.map
