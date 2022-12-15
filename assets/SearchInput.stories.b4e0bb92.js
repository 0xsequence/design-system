var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.7b8f79a5.js";import{S as e}from"./SearchInput.756eb456.js";import"./iframe.ab6302e5.js";import"./Box.2b80f63d.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./Avatar.b3a3c32c.js";import"./index.3f9518bc.js";import"./Badge.36d79c6f.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.e3951442.js";import"./Divider.371a75a0.js";import"./Text.740823a5.js";import"./Button.9c14424b.js";import"./Card.cba0207e.js";import"./Checkbox.483738bd.js";import"./index.module.b24ea735.js";import"./index.b3e6f2fc.js";import"./index.module.ef2e47c9.js";import"./index.module.00ae9362.js";import"./index.module.b27c9671.js";import"./LabelledField.be3cc53f.js";import"./WarningIcon.b816a64b.js";import"./ControlledTextInput.bb92f32a.js";import"./RadioGroup.d5008e73.js";import"./index.module.696f650e.js";import"./index.module.88acf63a.js";import"./index.module.89602cd7.js";import"./Select.bdedd97d.js";import"./index.module.48628431.js";import"./Combination.f05e1c75.js";import"./tslib.es6.03b483f6.js";import"./index.module.04a384c2.js";import"./Switch.23319a96.js";import"./Collapsible.4708caf2.js";import"./index.b7079b9e.js";import"./Tooltip.4611b86e.js";import"./Modal.7af71a5f.js";import"./IconButton.a4b9d28c.js";import"./Scroll.303992f8.js";import"./FileInput.7f134d57.js";import"./Spinner.3bb7c3d7.js";import"./GradientAvatar.84efa11b.js";import"./TabbedNav.684c326d.js";import"./Tabs.cc31cf61.js";import"./Tag.7dd9b523.js";import"./ThemeProvider.28e84a20.js";import"./TokenImage.3091617e.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:11},endLoc:{col:1,line:22},startBody:{col:53,line:11},endBody:{col:1,line:22}}}}},title:"Forms/SearchInput",component:e},s=r(t=>{const[o,p]=i.exports.useState("");return a(e,{id:"myInput",...t,value:o,onChange:n=>p(n.target.value)})},"Template"),l=s.bind({});l.args={label:"Search",labelLocation:"top",placeholder:"This is the placeholder"};const at=["Demo"];export{l as Demo,at as __namedExportsOrder,it as default};
//# sourceMappingURL=SearchInput.stories.b4e0bb92.js.map
