var s=Object.defineProperty;var e=(n,r)=>s(n,"name",{value:r,configurable:!0});import{u as l,c as i}from"./TransactionIcon.c44d1c1c.js";import{T as c}from"./TextInput.e6e98ac2.js";import{j as t}from"./jsx-runtime.df376e78.js";import"./Box.7a12e483.js";/* empty css                             */import"./atoms.css.cff455f3.js";import"./Text.ac2ccab9.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.8bda80e6.js";const W={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArrowRightIcon, ScanIcon } from '~/icons'

import { TextInput } from './TextInput'

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = args => {
  return <TextInput id="myInput" {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  leftIcon: <ScanIcon />,
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  rightIcon: <ArrowRightIcon />,
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  leftIcon: <ScanIcon />,
  rightIcon: <ArrowRightIcon />,
}
`,locationsMap:{basic:{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-left-icon":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-right-icon":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-both-icons":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}}}}},title:"Components/Forms/TextInput",component:c},o=e(n=>t(c,{id:"myInput",...n}),"Template"),a=o.bind({});a.args={label:"This the label",placeholder:"This is the placeholder"};const h=o.bind({});h.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:t(l,{})};const p=o.bind({});p.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:t(i,{})};const d=o.bind({});d.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:t(l,{}),rightIcon:t(i,{})};const S=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons"];export{a as Basic,d as WithBothIcons,h as WithLeftIcon,p as WithRightIcon,S as __namedExportsOrder,W as default};
//# sourceMappingURL=TextInput.stories.b9ff843e.js.map
