var r=Object.defineProperty;var n=(o,c)=>r(o,"name",{value:c,configurable:!0});import{D as e,f as l}from"./WarningIcon.38b0fde5.js";import{T as i}from"./TextInput.dfc8a19f.js";import{j as a}from"./jsx-runtime.812d2fcc.js";import"./Box.9d3829fb.js";/* empty css                             */import"./atoms.css.ccb5b5eb.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./LabelledField.6e573f38.js";import"./Text.448c223a.js";/* empty css                              */import"./iframe.f7713773.js";const W={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArrowRightIcon, ScanIcon } from '~/icons'

import { TextInput } from './TextInput'

export default {
  title: 'Forms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = args => {
  return <TextInput id="myInput" {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  labelLocation: 'top',
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  LeftIcon: ScanIcon,
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  RightIcon: ArrowRightIcon,
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  LeftIcon: ScanIcon,
  RightIcon: ArrowRightIcon,
}
`,locationsMap:{basic:{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-left-icon":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-right-icon":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-both-icons":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}}}}},title:"Forms/TextInput",component:i},t=n(o=>a(i,{id:"myInput",...o}),"Template"),s=t.bind({});s.args={label:"This the label",placeholder:"This is the placeholder",labelLocation:"top"};const h=t.bind({});h.args={label:"This the label",placeholder:"This is the placeholder",LeftIcon:e};const p=t.bind({});p.args={label:"This the label",placeholder:"This is the placeholder",RightIcon:l};const d=t.bind({});d.args={label:"This the label",placeholder:"This is the placeholder",LeftIcon:e,RightIcon:l};const S=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons"];export{s as Basic,d as WithBothIcons,h as WithLeftIcon,p as WithRightIcon,S as __namedExportsOrder,W as default};
//# sourceMappingURL=TextInput.stories.951238ae.js.map
