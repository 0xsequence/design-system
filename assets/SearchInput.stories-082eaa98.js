var n=Object.defineProperty;var r=(t,o)=>n(t,"name",{value:o,configurable:!0});import{r as i}from"./index-9b47cd5d.js";import{S as e}from"./SearchInput-0b172164.js";import{j as a}from"./jsx-runtime-6057fa59.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./Box-0ba2098e.js";/* empty css                             */import"./atoms.css-36c6db2d.js";import"./Avatar-fb0ee5e1.js";import"./index-a2f37619.js";import"./Badge-7c100604.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Breadcrumbs-2174e81c.js";import"./Divider-f0cab42c.js";import"./Text-dbab31a0.js";import"./typography-f274f330.js";import"./Button-7c83841c.js";import"./Card-60e830df.js";import"./Checkbox-c3af7b07.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./Field-05b9f6d4.js";import"./WarningIcon-58080c2d.js";import"./ControlledTextInput-c24d362c.js";import"./FileInput-30da46a0.js";import"./IconButton-b8b35c44.js";import"./RadioGroup-33e7f2b9.js";import"./index.module-b9ae0e60.js";import"./index.module-0992d81f.js";import"./index.module-e55af700.js";import"./Select-78ef02ee.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-ec83e676.js";import"./Switch-f9014e56.js";import"./Collapsible-d3edb1f5.js";import"./index-3d2c79c6.js";import"./Tooltip-1a071af0.js";import"./Modal-b4838fe2.js";import"./Scroll-bd23f2cc.js";import"./Spinner-e6d52e40.js";import"./GradientAvatar-9c136998.js";import"./TabbedNav-c872b502.js";import"./Tabs-78c2208a.js";import"./Tag-678d1634.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-e537292f.js";const st={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:11},endLoc:{col:1,line:22},startBody:{col:53,line:11},endBody:{col:1,line:22}}}}},title:"Forms/SearchInput",component:e},s=r(t=>{const[o,p]=i.exports.useState("");return a(e,{id:"myInput",...t,value:o,onChange:m=>p(m.target.value)})},"Template"),l=s.bind({});l.args={label:"Search",labelLocation:"top",placeholder:"This is the placeholder"};const lt=["Demo"];export{l as Demo,lt as __namedExportsOrder,st as default};
//# sourceMappingURL=SearchInput.stories-082eaa98.js.map
