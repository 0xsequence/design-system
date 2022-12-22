var n=Object.defineProperty;var r=(t,o)=>n(t,"name",{value:o,configurable:!0});import{r as i}from"./index-9b47cd5d.js";import{S as e}from"./SearchInput-04307c5b.js";import{j as a}from"./jsx-runtime-6057fa59.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./Box-51f65dd6.js";/* empty css                             */import"./atoms.css-36c6db2d.js";import"./Avatar-a0ad93f0.js";import"./index-a2f37619.js";import"./Badge-bb29d0d0.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Breadcrumbs-8eca0f50.js";import"./Divider-f59a5db1.js";import"./Text-cce84919.js";import"./typography-f274f330.js";import"./Button-df754410.js";import"./Card-eff102f4.js";import"./Checkbox-57669e46.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./Field-ac861416.js";import"./WarningIcon-4182fb24.js";import"./ControlledTextInput-769c6133.js";import"./FileInput-f4871110.js";import"./IconButton-b7801058.js";import"./RadioGroup-8460e252.js";import"./index.module-b9ae0e60.js";import"./index.module-0992d81f.js";import"./index.module-e55af700.js";import"./Select-e629f7c1.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-ec83e676.js";import"./Switch-f9014e56.js";import"./Collapsible-8808d480.js";import"./index-3d2c79c6.js";import"./Tooltip-ac62d88a.js";import"./Modal-ffda7f8a.js";import"./Scroll-f482921d.js";import"./Spinner-92f37ffa.js";import"./GradientAvatar-09ad650d.js";import"./TabbedNav-6dc725f5.js";import"./Tabs-bb4c7d5b.js";import"./Tag-210cef44.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-519965c7.js";const st={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories-d05877b4.js.map
