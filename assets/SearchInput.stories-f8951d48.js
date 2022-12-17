var n=Object.defineProperty;var r=(t,o)=>n(t,"name",{value:o,configurable:!0});import{r as i}from"./index-9b47cd5d.js";import{S as e}from"./SearchInput-66db2031.js";import{j as a}from"./jsx-runtime-6057fa59.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./Box-28ceaece.js";/* empty css                             */import"./atoms.css-ded810a3.js";import"./Avatar-5ed424b6.js";import"./index-a2f37619.js";import"./Badge-f35e4615.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Breadcrumbs-ad8c3028.js";import"./Divider-f76e7f02.js";import"./Text-0c94a256.js";import"./typography-f274f330.js";import"./Button-a1cb6a60.js";import"./Card-649802ed.js";import"./Checkbox-8c05d8a5.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./LabelledField-8c1b8a77.js";import"./WarningIcon-47731319.js";import"./ControlledTextInput-38c77d66.js";import"./RadioGroup-a8813e08.js";import"./index.module-b9ae0e60.js";import"./index.module-0992d81f.js";import"./index.module-e55af700.js";import"./Select-3d474e40.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-ec83e676.js";import"./Switch-f9014e56.js";import"./Collapsible-8b94ab28.js";import"./index-3d2c79c6.js";import"./Tooltip-5e20d527.js";import"./Modal-55d56aec.js";import"./IconButton-0a936ed5.js";import"./Scroll-35ead0c8.js";import"./FileInput-34565e12.js";import"./Spinner-93117a53.js";import"./GradientAvatar-74e0e086.js";import"./TabbedNav-7658b66a.js";import"./Tabs-33a83c5d.js";import"./Tag-a06287a0.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-a1597b8e.js";const st={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories-f8951d48.js.map
