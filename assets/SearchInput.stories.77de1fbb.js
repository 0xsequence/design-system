var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.c83a6dad.js";import{S as e}from"./SearchInput.fc401894.js";import"./iframe.0fa8211e.js";import"./Box.6e19c9f7.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.d3e98485.js";import"./index.3f9518bc.js";import"./Badge.eca02fc7.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.303d0986.js";import"./Text.e79e063b.js";import"./Card.80a86fc5.js";import"./Checkbox.6d506131.js";import"./index.module.da7f3d52.js";import"./index.825d69cc.js";import"./index.module.aec12b35.js";import"./index.module.270e7d31.js";import"./index.module.9658c971.js";import"./LabelledField.0a99ff0d.js";import"./WarningIcon.55ad9013.js";import"./ControlledTextInput.a351c178.js";import"./RadioGroup.0b10249c.js";import"./index.module.cebbe7eb.js";import"./index.module.84d3232c.js";import"./index.module.e261825f.js";import"./Select.d57f4fc4.js";import"./index.module.209fa70e.js";import"./Combination.33653f59.js";import"./tslib.es6.03b483f6.js";import"./index.module.579b07d9.js";import"./Switch.4effb0d1.js";import"./Collapsible.c7dabf37.js";import"./index.02f227cb.js";import"./Tooltip.449c3e4d.js";import"./Modal.b125c956.js";import"./IconButton.12ea2a9b.js";import"./Scroll.c27f40e6.js";import"./FileInput.b80de096.js";import"./Group.1bf0a71f.js";import"./Spinner.616e0414.js";import"./GradientAvatar.ac156d05.js";import"./TabbedNav.d13098bb.js";import"./Tabs.901b24f8.js";import"./Tag.6721bcb6.js";import"./ThemeProvider.7ef96751.js";import"./TokenImage.038eef7c.js";const mt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

import { SearchInput } from './SearchInput'

export default {
  title: 'Forms/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>

const Template: ComponentStory<typeof SearchInput> = args => {
  const [value, setValue] = useState<string>('')

  return (
    <SearchInput
      id="myInput"
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export const Demo = Template.bind({})
Demo.args = {
  label: 'Search',
  labelLocation: 'top',
  placeholder: 'This is the placeholder',
}
`,locationsMap:{demo:{startLoc:{col:53,line:11},endLoc:{col:1,line:22},startBody:{col:53,line:11},endBody:{col:1,line:22}}}}},title:"Forms/SearchInput",component:e},s=r(t=>{const[o,p]=i.exports.useState("");return a(e,{id:"myInput",...t,value:o,onChange:n=>p(n.target.value)})},"Template"),l=s.bind({});l.args={label:"Search",labelLocation:"top",placeholder:"This is the placeholder"};const it=["Demo"];export{l as Demo,it as __namedExportsOrder,mt as default};
//# sourceMappingURL=SearchInput.stories.77de1fbb.js.map
