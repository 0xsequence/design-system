var s=Object.defineProperty;var e=(o,c)=>s(o,"name",{value:c,configurable:!0});import{B as r}from"./Box.948ea6da.js";import{u as t,b as i}from"./TransactionIcon.d79d9e84.js";import{B as a}from"./Button.3b0d2264.js";import{j as l}from"./jsx-runtime.d0578377.js";/* empty css                             */import"./atoms.css.dea4d62e.js";import"./Text.750447f6.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.c7541229.js";const R={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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

export const WithIcon = Template.bind({})
WithIcon.args = {
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

export const AnchorButton = Template.bind({})
AnchorButton.args = {
  as: 'a',
  href: '/wallet',
  label: 'Click me',
  LeftIcon: ScanIcon,
  size: 'md',
}
`,locationsMap:{"label-only":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}},"with-icon":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}},"with-right-icon":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}},"with-both-icons":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}},"anchor-button":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}}}}},title:"Components/Button",component:a},n=e(o=>l(r,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:l(a,{...o})}),"Template"),d=n.bind({});d.args={as:"a",disabled:!1,href:"#",label:"Click me",size:"md",variant:"glass",width:"normal"};const m=n.bind({});m.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),LeftIcon:t,size:"md",variant:"glass",width:"normal"};const h=n.bind({});h.args={disabled:!1,label:"Click me",onClick:()=>console.log("Clicked!"),RightIcon:i,size:"md",variant:"glass",width:"normal"};const g=n.bind({});g.args={disabled:!1,label:"Click me",LeftIcon:t,onClick:()=>console.log("Clicked!"),RightIcon:i,size:"md",variant:"glass",width:"normal"};const p=n.bind({});p.args={as:"a",href:"/wallet",label:"Click me",LeftIcon:t,size:"md"};const S=["LabelOnly","WithIcon","WithRightIcon","WithBothIcons","AnchorButton"];export{p as AnchorButton,d as LabelOnly,g as WithBothIcons,m as WithIcon,h as WithRightIcon,S as __namedExportsOrder,R as default};
//# sourceMappingURL=Button.stories.94df94e6.js.map
