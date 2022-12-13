var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.d956131b.js";import{S as e}from"./SearchInput.2a0374b9.js";import"./iframe.fc647b85.js";import"./Box.649ea987.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.b58a6b3e.js";import"./index.3f9518bc.js";import"./Badge.6b841c6b.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.469890ea.js";import"./Text.0706b0ed.js";import"./Card.88ba39a1.js";import"./Checkbox.d68eef7c.js";import"./index.module.253d4222.js";import"./index.ef9a8d89.js";import"./index.module.f1e88f67.js";import"./index.module.3b1b639c.js";import"./index.module.683b7e54.js";import"./LabelledField.6f15f01e.js";import"./WarningIcon.7b7426ad.js";import"./ControlledTextInput.2eb7ade8.js";import"./RadioGroup.f9a35d22.js";import"./index.module.65ee287e.js";import"./index.module.6684dd0b.js";import"./index.module.f296c431.js";import"./Select.fb67ceed.js";import"./index.module.9cfa04ba.js";import"./Combination.dcb6969c.js";import"./tslib.es6.03b483f6.js";import"./index.module.f3962b84.js";import"./Switch.f51174cb.js";import"./Collapsible.d9f08312.js";import"./index.5362fada.js";import"./Tooltip.bfce0345.js";import"./Modal.e203b3e6.js";import"./IconButton.291853ce.js";import"./Scroll.d6cd442a.js";import"./FileInput.266e732c.js";import"./Group.87ab25eb.js";import"./Spinner.b1348adb.js";import"./GradientAvatar.0f9a415c.js";import"./TabbedNav.4dffb431.js";import"./Tabs.852ac566.js";import"./Tag.1e4ef6af.js";import"./ThemeProvider.5a69aedc.js";import"./TokenImage.2acb29bd.js";const mt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.ef30a4a7.js.map
