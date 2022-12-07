var a=Object.defineProperty;var e=(o,l)=>a(o,"name",{value:l,configurable:!0});import{B as i}from"./Box.decd8f5e.js";import{S as n}from"./Select.7adf8b3a.js";import{j as t}from"./jsx-runtime.528c4313.js";/* empty css                             */import"./atoms.css.66ddf8d3.js";import"./index.module.c7a34397.js";import"./index.265b039e.js";import"./iframe.45b4ed18.js";import"./index.module.6d6f6c8c.js";import"./index.module.101a538e.js";import"./Combination.9ce1653d.js";import"./tslib.es6.03b483f6.js";import"./index.module.34ca61e2.js";import"./index.module.5b0a4625.js";import"./index.module.78fe6527.js";import"./LabelledField.12b681d6.js";import"./Text.4ff57f0a.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./WarningIcon.f0aeff3f.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Select.stories.4af2be87.js.map
