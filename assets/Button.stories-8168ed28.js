var r=Object.defineProperty;var l=(e,s)=>r(e,"name",{value:s,configurable:!0});import{B as d}from"./Badge-f35e4615.js";import{B as i}from"./Box-28ceaece.js";import{I as o,g as a}from"./WarningIcon-47731319.js";import{B as c}from"./Button-a1cb6a60.js";import{a as m,j as t}from"./jsx-runtime-6057fa59.js";/* empty css                             *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-ded810a3.js";import"./Text-0c94a256.js";import"./typography-f274f330.js";const O={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{"label-only":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},disabled:{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-left-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-right-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-both-icons":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-count-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"anchor-button":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}}}}},title:"Components/Button",component:c},n=l(e=>t(i,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:t(c,{...e})}),"Template"),g=n.bind({});g.args={as:"a",disabled:!1,href:"#",label:"Click me",size:"md",variant:"glass"};const b=n.bind({});b.args={as:"a",disabled:!0,href:"#",label:"Click me",size:"md",variant:"glass"};const p=n.bind({});p.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),leftIcon:o,size:"md",variant:"glass"};const h=n.bind({});h.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),rightIcon:a,size:"md",variant:"glass"};const B=n.bind({});B.args={disabled:!1,label:"Click me",leftIcon:o,onClick:()=>console.log("Clicked!"),rightIcon:a,size:"md",variant:"glass"};const f=n.bind({});f.args={disabled:!1,label:m(i,{gap:"1",children:["Click me",t(d,{value:"3"})]}),onClick:()=>console.log("Clicked!"),leftIcon:o,size:"md",variant:"glass"};const C=n.bind({});C.args={as:"a",href:"/wallet",label:"Click me",leftIcon:o,size:"md"};const D=["LabelOnly","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","WithCountIcon","AnchorButton"];export{C as AnchorButton,b as Disabled,g as LabelOnly,B as WithBothIcons,f as WithCountIcon,p as WithLeftIcon,h as WithRightIcon,D as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-8168ed28.js.map
