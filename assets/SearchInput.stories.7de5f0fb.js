var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.6b16d6ce.js";import{S as e}from"./SearchInput.796754ba.js";import"./iframe.ecda5169.js";import"./Box.e6e00a73.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.4e19c1ac.js";import"./index.3f9518bc.js";import"./Badge.509f6e69.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.c98f3d14.js";import"./Text.4b0e9133.js";import"./Card.a3bfb603.js";import"./Checkbox.0416f69b.js";import"./index.module.13ccf86a.js";import"./index.c47da552.js";import"./index.module.acac4d68.js";import"./index.module.c86d1965.js";import"./index.module.d2d4036b.js";import"./LabelledField.23cfd5b3.js";import"./WarningIcon.a8c984cd.js";import"./ControlledTextInput.c4c9725c.js";import"./RadioGroup.d362e1b9.js";import"./index.module.ec4bd3ee.js";import"./index.module.f0b8a94f.js";import"./index.module.a1561f64.js";import"./Select.81d8e18f.js";import"./index.module.66f5198c.js";import"./Combination.22801f8d.js";import"./tslib.es6.03b483f6.js";import"./index.module.c0c98138.js";import"./Switch.0689311c.js";import"./Collapsible.c69e8fc7.js";import"./index.377421ea.js";import"./Tooltip.f547c9d4.js";import"./Modal.f1083d21.js";import"./IconButton.b5b8f11b.js";import"./Scroll.c3ecf716.js";import"./FileInput.7c31ff51.js";import"./Group.081b4e85.js";import"./Spinner.2800403b.js";import"./GradientAvatar.48a45585.js";import"./TabbedNav.c662fbe8.js";import"./Tabs.de50acf6.js";import"./Tag.9fa8acd9.js";import"./ThemeProvider.5cee7533.js";import"./TokenImage.e7b956d3.js";const mt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.7de5f0fb.js.map
