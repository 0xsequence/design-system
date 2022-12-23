var n=Object.defineProperty;var r=(t,o)=>n(t,"name",{value:o,configurable:!0});import{r as i}from"./index-9b47cd5d.js";import{S as e}from"./SearchInput-d31460f0.js";import{j as a}from"./jsx-runtime-6057fa59.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./Box-189343a4.js";/* empty css                             */import"./atoms.css-82e5de3b.js";import"./Avatar-3fe76b7e.js";import"./index-a2f37619.js";import"./Badge-6e33208c.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Breadcrumbs-8cde9abf.js";import"./Divider-7f4c1189.js";import"./Text-58c8d0a0.js";import"./typography-f274f330.js";import"./Button-a91a0758.js";import"./Card-d70a44a9.js";import"./Checkbox-622c56a0.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./Field-87e3c99c.js";import"./WarningIcon-66e22c0e.js";import"./ControlledTextInput-3294cadf.js";import"./FileInput-239b02c8.js";import"./IconButton-e0a70fee.js";import"./RadioGroup-adaba344.js";import"./index.module-b9ae0e60.js";import"./index.module-0992d81f.js";import"./index.module-e55af700.js";import"./Select-a26d331b.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-ec83e676.js";import"./Switch-f9014e56.js";import"./Collapsible-8a7c614c.js";import"./index-3d2c79c6.js";import"./Tooltip-ad22f25d.js";import"./Modal-88211da2.js";import"./Scroll-60cc41ca.js";import"./Spinner-a1e49eb6.js";import"./GradientAvatar-3ca86e43.js";import"./TabbedNav-f4a8e482.js";import"./Tabs-ec343f4b.js";import"./Tag-c6207b13.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-948c157e.js";const st={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories-35e782b2.js.map
