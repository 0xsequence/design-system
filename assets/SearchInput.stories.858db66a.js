var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.ddf3d684.js";import{S as e}from"./SearchInput.a0666db1.js";import"./iframe.396223e0.js";import"./Box.dfe826a6.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.405ec1f3.js";import"./index.3f9518bc.js";import"./Badge.e7f6e53c.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.ace1ca68.js";import"./Text.eb2c0c15.js";import"./Card.c46cd853.js";import"./Checkbox.084e05e2.js";import"./index.module.c376906f.js";import"./index.b8e9cd29.js";import"./index.module.4ee151e5.js";import"./index.module.4c847f10.js";import"./index.module.c78da923.js";import"./LabelledField.ceec57f5.js";import"./WarningIcon.093f6a99.js";import"./ControlledTextInput.cc3ab193.js";import"./RadioGroup.35a2ce68.js";import"./index.module.ed15664e.js";import"./index.module.73e43dfa.js";import"./index.module.11e5f41a.js";import"./Select.11cfd943.js";import"./index.module.8178ac87.js";import"./Combination.2bd813a8.js";import"./tslib.es6.03b483f6.js";import"./index.module.97d83deb.js";import"./Switch.9c9eedb0.js";import"./Collapsible.241d9e98.js";import"./index.955ad1b3.js";import"./Tooltip.98ad7cb3.js";import"./Modal.8b95ef97.js";import"./IconButton.c66388ad.js";import"./Scroll.90edb6d9.js";import"./FileInput.15a3eca1.js";import"./Group.84376283.js";import"./Spinner.e1f49c32.js";import"./GradientAvatar.667e23f0.js";import"./TabbedNav.a492b040.js";import"./Tabs.08c2d9f4.js";import"./Tag.be6beb80.js";import"./ThemeProvider.ba86584d.js";import"./TokenImage.16824bd0.js";const mt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.858db66a.js.map
