var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i}from"./index-9b47cd5d.js";import{S as e}from"./SearchInput-2d8f287e.js";import{j as a}from"./jsx-runtime-6057fa59.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./Box-28ceaece.js";/* empty css                             */import"./atoms.css-ded810a3.js";import"./Avatar-5ed424b6.js";import"./index-a2f37619.js";import"./Badge-f35e4615.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Breadcrumbs-8067f398.js";import"./Divider-f76e7f02.js";import"./Text-3f9ccc26.js";import"./Button-05331ee3.js";import"./Card-649802ed.js";import"./Checkbox-e3b3cf18.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./LabelledField-0316a056.js";import"./WarningIcon-47731319.js";import"./ControlledTextInput-50e34b7c.js";import"./RadioGroup-f538575d.js";import"./index.module-b9ae0e60.js";import"./index.module-0992d81f.js";import"./index.module-e55af700.js";import"./Select-5f214056.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-ec83e676.js";import"./Switch-f9014e56.js";import"./Collapsible-f1d0e021.js";import"./index-3d2c79c6.js";import"./Tooltip-376be546.js";import"./Modal-d8a31a53.js";import"./IconButton-c9f33e54.js";import"./Scroll-35ead0c8.js";import"./FileInput-0c83a983.js";import"./Spinner-93117a53.js";import"./GradientAvatar-74e0e086.js";import"./TabbedNav-afe61283.js";import"./Tabs-70bf48f7.js";import"./Tag-e62d9d39.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-71f7e978.js";const at={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories-a2caf505.js.map
