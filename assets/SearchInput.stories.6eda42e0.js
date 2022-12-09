var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.734c2008.js";import{S as e}from"./SearchInput.3038db2a.js";import"./iframe.f3215ac1.js";import"./Box.2b9ff5ae.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.ff2434ff.js";import"./index.3f9518bc.js";import"./Badge.508ac486.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.ff9d774f.js";import"./Text.f3eaed8d.js";import"./Card.b811cd97.js";import"./Checkbox.e0fe6c6f.js";import"./index.module.f7a4c1f0.js";import"./index.ce4cb835.js";import"./index.module.2093c781.js";import"./index.module.44d4a191.js";import"./index.module.cee83191.js";import"./LabelledField.08d7a2fa.js";import"./WarningIcon.1aafeee7.js";import"./ControlledTextInput.802ab5e8.js";import"./RadioGroup.0bb130f6.js";import"./index.module.5bc619ca.js";import"./index.module.d7117dae.js";import"./index.module.bbafff7d.js";import"./Select.d3619cfc.js";import"./index.module.b598f66c.js";import"./Combination.b1fca67e.js";import"./tslib.es6.03b483f6.js";import"./index.module.f038e62d.js";import"./Switch.a4212ddc.js";import"./Collapsible.a62a4a6b.js";import"./index.af8b4432.js";import"./Tooltip.07c683d2.js";import"./Modal.e298df46.js";import"./IconButton.e82737de.js";import"./Scroll.474153ef.js";import"./FileInput.51bb759d.js";import"./Group.217a065a.js";import"./Spinner.29fe2907.js";import"./GradientAvatar.1eea851e.js";import"./TabbedNav.3acf8891.js";import"./Tabs.0e841761.js";import"./Tag.981305fe.js";import"./ThemeProvider.c5f24e36.js";import"./TokenImage.5b960eaa.js";const mt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.6eda42e0.js.map
