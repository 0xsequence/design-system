var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i}from"./index-9b47cd5d.js";import{S as e}from"./SearchInput-e4b96eb5.js";import{j as a}from"./jsx-runtime-6057fa59.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./Box-be3174e1.js";/* empty css                             */import"./atoms.css-b51cbbce.js";import"./Avatar-45a584f4.js";import"./index-a2f37619.js";import"./Badge-8fbb0543.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Breadcrumbs-00a753e5.js";import"./Divider-69751524.js";import"./Text-e9f661d3.js";import"./Button-a1cb23ed.js";import"./Card-56a95fc0.js";import"./Checkbox-7472e12a.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./LabelledField-9041a5a7.js";import"./WarningIcon-fee4c69b.js";import"./ControlledTextInput-e7f98e21.js";import"./RadioGroup-62161d37.js";import"./index.module-b9ae0e60.js";import"./index.module-0992d81f.js";import"./index.module-e55af700.js";import"./Select-1b480989.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-ec83e676.js";import"./Switch-f9014e56.js";import"./Collapsible-3a77b2a9.js";import"./index-3d2c79c6.js";import"./Tooltip-823deca3.js";import"./Modal-cd92944c.js";import"./IconButton-3aba5f0c.js";import"./Scroll-d80acf71.js";import"./FileInput-12f3d9fb.js";import"./Spinner-37b1c3b0.js";import"./GradientAvatar-382793ac.js";import"./TabbedNav-cfcc16e5.js";import"./Tabs-b9c3ca9b.js";import"./Tag-3a174272.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-64ba7fb0.js";const at={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:11},endLoc:{col:1,line:22},startBody:{col:53,line:11},endBody:{col:1,line:22}}}}},title:"Forms/SearchInput",component:e},s=r(t=>{const[o,p]=i.exports.useState("");return a(e,{id:"myInput",...t,value:o,onChange:n=>p(n.target.value)})},"Template"),l=s.bind({});l.args={label:"Search",labelLocation:"top",placeholder:"This is the placeholder"};const st=["Demo"];export{l as Demo,st as __namedExportsOrder,at as default};
//# sourceMappingURL=SearchInput.stories-708e8650.js.map
