var r=Object.defineProperty;var n=(o,c)=>r(o,"name",{value:c,configurable:!0});import{D as e,d as l}from"./WarningIcon.63454647.js";import{T as i}from"./TextInput.f9a90cbf.js";import{j as s}from"./jsx-runtime.77b8b000.js";import"./Box.4f616bff.js";/* empty css                             */import"./atoms.css.439e7cbc.js";import"./Text.593fb801.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.9dfc9a39.js";const R={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{basic:{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-left-icon":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-right-icon":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}},"with-both-icons":{startLoc:{col:51,line:12},endLoc:{col:1,line:14},startBody:{col:51,line:12},endBody:{col:1,line:14}}}}},title:"Components/Forms/TextInput",component:i},t=n(o=>s(i,{id:"myInput",...o}),"Template"),a=t.bind({});a.args={label:"This the label",placeholder:"This is the placeholder"};const h=t.bind({});h.args={label:"This the label",placeholder:"This is the placeholder",LeftIcon:e};const p=t.bind({});p.args={label:"This the label",placeholder:"This is the placeholder",RightIcon:l};const d=t.bind({});d.args={label:"This the label",placeholder:"This is the placeholder",LeftIcon:e,RightIcon:l};const W=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons"];export{a as Basic,d as WithBothIcons,h as WithLeftIcon,p as WithRightIcon,W as __namedExportsOrder,R as default};
//# sourceMappingURL=TextInput.stories.a267e721.js.map
