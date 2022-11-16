var r=Object.defineProperty;var e=(o,c)=>r(o,"name",{value:c,configurable:!0});import{B as s}from"./Box.042e240a.js";import{s as t,b as l}from"./TransactionIcon.4da46f7f.js";import{B as a}from"./Button.79210f66.js";import{j as i}from"./jsx-runtime.7dfe9fe8.js";import"./atoms.css.68759f6a.js";/* empty css                              */import"./Text.b5f03237.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.aff18420.js";const R={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'
import { ArrowRightIcon, ScanIcon } from '~/icons'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => {
  return (
    <Box padding="tight" background="backgroundSecondary" borderRadius="md">
      <Button {...args} />
    </Box>
  )
}

export const TextOnly = Template.bind({})
TextOnly.args = {
  label: 'Click me',
  size: 'md',
  variant: 'solid',
  disabled: false,
  width: 'normal',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Click me',
  LeftIcon: ScanIcon,
  size: 'md',
  variant: 'solid',
  disabled: false,
  width: 'normal',
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  label: 'Click me',
  RightIcon: ArrowRightIcon,
  size: 'md',
  variant: 'solid',
  disabled: false,
  width: 'normal',
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  label: 'Click me',
  LeftIcon: ScanIcon,
  RightIcon: ArrowRightIcon,
  size: 'md',
  variant: 'solid',
  disabled: false,
  width: 'normal',
}

export const AnchorButton = Template.bind({})
AnchorButton.args = {
  label: 'Click me',
  LeftIcon: ScanIcon,
  as: 'a',
  size: 'md',
  href: '/wallet',
}
`,locationsMap:{"text-only":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}},"with-icon":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}},"with-right-icon":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}},"with-both-icons":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}},"anchor-button":{startLoc:{col:48,line:13},endLoc:{col:1,line:19},startBody:{col:48,line:13},endBody:{col:1,line:19}}}}},title:"Components/Button",component:a},n=e(o=>i(s,{padding:"tight",background:"backgroundSecondary",borderRadius:"md",children:i(a,{...o})}),"Template"),d=n.bind({});d.args={label:"Click me",size:"md",variant:"solid",disabled:!1,width:"normal"};const m=n.bind({});m.args={label:"Click me",LeftIcon:t,size:"md",variant:"solid",disabled:!1,width:"normal"};const h=n.bind({});h.args={label:"Click me",RightIcon:l,size:"md",variant:"solid",disabled:!1,width:"normal"};const p=n.bind({});p.args={label:"Click me",LeftIcon:t,RightIcon:l,size:"md",variant:"solid",disabled:!1,width:"normal"};const b=n.bind({});b.args={label:"Click me",LeftIcon:t,as:"a",size:"md",href:"/wallet"};const S=["TextOnly","WithIcon","WithRightIcon","WithBothIcons","AnchorButton"];export{b as AnchorButton,d as TextOnly,p as WithBothIcons,m as WithIcon,h as WithRightIcon,S as __namedExportsOrder,R as default};
//# sourceMappingURL=Button.stories.07c38b08.js.map
