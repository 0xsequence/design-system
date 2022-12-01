var r=Object.defineProperty;var l=(t,s)=>r(t,"name",{value:s,configurable:!0});import{B as d}from"./Badge.726f7acd.js";import{B as i}from"./Box.f361b255.js";import{D as o,f as a}from"./WarningIcon.060345c6.js";import{B as c}from"./Button.b64eaaf9.js";import{a as m,j as e}from"./jsx-runtime.5a74c576.js";/* empty css                             */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./atoms.css.b06098ab.js";import"./Text.6ba9b7f9.js";/* empty css                              */import"./iframe.50ce4562.js";const z={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
  width: 'normal',
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = {
  disabled: false,
  label: 'Click me',
  onClick: () => console.log('Clicked!'),
  LeftIcon: ScanIcon,
  size: 'md',
  variant: 'glass',
  width: 'normal',
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  disabled: false,
  label: 'Click me',
  onClick: () => console.log('Clicked!'),
  RightIcon: ArrowRightIcon,
  size: 'md',
  variant: 'glass',
  width: 'normal',
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
  width: 'normal',
}

export const WithCountIcon = Template.bind({})
WithCountIcon.args = {
  disabled: false,
  label: (
    <Box gap="1">
      Click me
      <Badge info="3" />
    </Box>
  ),
  onClick: () => console.log('Clicked!'),
  LeftIcon: ScanIcon,
  size: 'md',
  variant: 'glass',
  width: 'normal',
}

export const AnchorButton = Template.bind({})
AnchorButton.args = {
  as: 'a',
  href: '/wallet',
  label: 'Click me',
  LeftIcon: ScanIcon,
  size: 'md',
}
`,locationsMap:{"label-only":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-left-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-right-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-both-icons":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"with-count-icon":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}},"anchor-button":{startLoc:{col:48,line:14},endLoc:{col:1,line:20},startBody:{col:48,line:14},endBody:{col:1,line:20}}}}},title:"Components/Button",component:c},n=l(t=>e(i,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:e(c,{...t})}),"Template"),g=n.bind({});g.args={as:"a",disabled:!1,href:"#",label:"Click me",size:"md",variant:"glass",width:"normal"};const h=n.bind({});h.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),LeftIcon:o,size:"md",variant:"glass",width:"normal"};const p=n.bind({});p.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),RightIcon:a,size:"md",variant:"glass",width:"normal"};const b=n.bind({});b.args={disabled:!1,label:"Click me",LeftIcon:o,onClick:()=>console.log("Clicked!"),RightIcon:a,size:"md",variant:"glass",width:"normal"};const f=n.bind({});f.args={disabled:!1,label:m(i,{gap:"1",children:["Click me",e(d,{info:"3"})]}),onClick:()=>console.log("Clicked!"),LeftIcon:o,size:"md",variant:"glass",width:"normal"};const B=n.bind({});B.args={as:"a",href:"/wallet",label:"Click me",LeftIcon:o,size:"md"};const A=["LabelOnly","WithLeftIcon","WithRightIcon","WithBothIcons","WithCountIcon","AnchorButton"];export{B as AnchorButton,g as LabelOnly,b as WithBothIcons,f as WithCountIcon,h as WithLeftIcon,p as WithRightIcon,A as __namedExportsOrder,z as default};
//# sourceMappingURL=Button.stories.fbccd657.js.map
