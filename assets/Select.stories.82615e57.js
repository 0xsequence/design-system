var a=Object.defineProperty;var e=(o,l)=>a(o,"name",{value:l,configurable:!0});import{B as i}from"./Box.2b9ff5ae.js";import{S as n}from"./Select.d3619cfc.js";import{j as t}from"./jsx-runtime.734c2008.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./index.module.f7a4c1f0.js";import"./index.ce4cb835.js";import"./iframe.f3215ac1.js";import"./index.module.d7117dae.js";import"./index.module.b598f66c.js";import"./Combination.b1fca67e.js";import"./tslib.es6.03b483f6.js";import"./index.module.bbafff7d.js";import"./index.module.2093c781.js";import"./index.module.f038e62d.js";import"./LabelledField.08d7a2fa.js";import"./Text.f3eaed8d.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./WarningIcon.1aafeee7.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Select.stories.82615e57.js.map
