var a=Object.defineProperty;var e=(o,l)=>a(o,"name",{value:l,configurable:!0});import{B as i}from"./Box.01559332.js";import{S as n}from"./Select.fe2d1532.js";import{j as t}from"./jsx-runtime.67acbeda.js";/* empty css                             */import"./atoms.css.9489b500.js";import"./index.module.fe3b5df2.js";import"./index.1d999334.js";import"./iframe.619ea6da.js";import"./index.module.35cc8dfa.js";import"./index.module.cfc86f4d.js";import"./index.e05a8bdc.js";import"./tslib.es6.03b483f6.js";import"./index.module.3c7d4498.js";import"./index.module.3928a559.js";import"./index.module.09860a86.js";import"./LabelledField.988f40df.js";import"./Text.ad301f8c.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./WarningIcon.61be758b.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Select.stories.0f1e5bc5.js.map
