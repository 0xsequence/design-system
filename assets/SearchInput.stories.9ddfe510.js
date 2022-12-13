var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.856db583.js";import{S as e}from"./SearchInput.5972f3dc.js";import"./iframe.3827cd0b.js";import"./Box.78f458c4.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.7b29d06e.js";import"./index.3f9518bc.js";import"./Badge.2e3e9d25.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.a765000c.js";import"./Text.88c39bc6.js";import"./Card.6ee72953.js";import"./Checkbox.9b075fa3.js";import"./index.module.c916579e.js";import"./index.c612c528.js";import"./index.module.72339c64.js";import"./index.module.631ad1f7.js";import"./index.module.4b66b907.js";import"./LabelledField.505df6a8.js";import"./WarningIcon.31d1f671.js";import"./ControlledTextInput.6889364d.js";import"./RadioGroup.c0c996a5.js";import"./index.module.2f9c429a.js";import"./index.module.0339cfce.js";import"./index.module.e16e41be.js";import"./Select.779226c1.js";import"./index.module.e7aac110.js";import"./Combination.5bd5d18f.js";import"./tslib.es6.03b483f6.js";import"./index.module.7e90fca1.js";import"./Switch.8429f9b3.js";import"./Collapsible.232bf591.js";import"./index.81d85203.js";import"./Tooltip.bac217c6.js";import"./Modal.6ac6d941.js";import"./IconButton.5a55e82d.js";import"./Scroll.ed3a386e.js";import"./FileInput.a7c55a2c.js";import"./Spinner.ac20e714.js";import"./GradientAvatar.7d0667fa.js";import"./TabbedNav.9b6e548d.js";import"./Tabs.9594487e.js";import"./Tag.adfb12d0.js";import"./ThemeProvider.76edbde4.js";import"./TokenImage.8346811a.js";const nt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:11},endLoc:{col:1,line:22},startBody:{col:53,line:11},endBody:{col:1,line:22}}}}},title:"Forms/SearchInput",component:e},s=r(t=>{const[o,p]=i.exports.useState("");return a(e,{id:"myInput",...t,value:o,onChange:n=>p(n.target.value)})},"Template"),l=s.bind({});l.args={label:"Search",labelLocation:"top",placeholder:"This is the placeholder"};const mt=["Demo"];export{l as Demo,mt as __namedExportsOrder,nt as default};
//# sourceMappingURL=SearchInput.stories.9ddfe510.js.map
