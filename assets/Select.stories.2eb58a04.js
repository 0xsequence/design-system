var a=Object.defineProperty;var e=(o,l)=>a(o,"name",{value:l,configurable:!0});import{B as i}from"./Box.9ad41e42.js";import{S as n}from"./Select.54bb6c1b.js";import{j as t}from"./jsx-runtime.45971c93.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./index.module.d5201a7f.js";import"./index.9869dfef.js";import"./iframe.c4333eae.js";import"./index.module.f449d3fd.js";import"./index.module.bcbb936a.js";import"./Combination.bef07e92.js";import"./tslib.es6.03b483f6.js";import"./index.module.06694813.js";import"./index.module.0024909b.js";import"./index.module.7eaefdc4.js";import"./LabelledField.c4180f28.js";import"./Text.843dffc6.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./WarningIcon.1d3393be.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
  disabled: false,
  options: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Disabled Option', value: 'option-4', disabled: true },
    { label: 'Custom Action', value: 'option-5' },
  ],
}
`,locationsMap:{demo:{startLoc:{col:48,line:12},endLoc:{col:1,line:18},startBody:{col:48,line:12},endBody:{col:1,line:18}}}}},title:"Forms/Select",component:n},r=e(o=>t(i,{padding:"3",background:"backgroundSecondary",borderRadius:"md",children:t(n,{...o})}),"Template"),p=r.bind({});p.args={onValueChange:o=>{console.log("selected: ",o),o==="option-5"&&alert("custom action selected")},name:"selectDemo",label:"Select",labelLocation:"top",placeholder:"Select an option",disabled:!1,options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Disabled Option",value:"option-4",disabled:!0},{label:"Custom Action",value:"option-5"}]};const j=["Demo"];export{p as Demo,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=Select.stories.2eb58a04.js.map
