var a=Object.defineProperty;var e=(o,l)=>a(o,"name",{value:l,configurable:!0});import{B as i}from"./Box.9d3829fb.js";import{S as n}from"./Select.6be0b43c.js";import{j as t}from"./jsx-runtime.812d2fcc.js";/* empty css                             */import"./atoms.css.ccb5b5eb.js";import"./index.module.7ae073e4.js";import"./index.1b0d8f3a.js";import"./iframe.f7713773.js";import"./index.module.229e3b2c.js";import"./index.module.a66e2082.js";import"./Combination.e4e20aa3.js";import"./tslib.es6.03b483f6.js";import"./index.module.c084e427.js";import"./index.module.b847d150.js";import"./index.module.8fd1e01b.js";import"./LabelledField.6e573f38.js";import"./Text.448c223a.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./WarningIcon.38b0fde5.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'

import { Select } from './Select'

export default {
  title: 'Forms/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => {
  return (
    <Box padding="3" background="backgroundSecondary" borderRadius="md">
      <Select {...args} />
    </Box>
  )
}

export const Demo = Template.bind({})
Demo.args = {
  onValueChange: value => {
    console.log('selected: ', value)
    if (value === 'option-5') {
      alert('custom action selected')
    }
  },
  name: 'selectDemo',
  label: 'Select',
  labelLocation: 'top',
  placeholder: 'Select an option',
  options: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Disabled Option', value: 'option-4', disabled: true },
    { label: 'Custom Action', value: 'option-5' },
  ],
}
`,locationsMap:{demo:{startLoc:{col:48,line:12},endLoc:{col:1,line:18},startBody:{col:48,line:12},endBody:{col:1,line:18}}}}},title:"Forms/Select",component:n},r=e(o=>t(i,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:t(n,{...o})}),"Template"),p=r.bind({});p.args={onValueChange:o=>{console.log("selected: ",o),o==="option-5"&&alert("custom action selected")},name:"selectDemo",label:"Select",labelLocation:"top",placeholder:"Select an option",options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]};const j=["Demo"];export{p as Demo,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=Select.stories.7f1de0b4.js.map
