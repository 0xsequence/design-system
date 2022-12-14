var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.12b235d0.js";import{S as e}from"./SearchInput.0c357e91.js";import"./iframe.063f743e.js";import"./Box.02e6c614.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.27767299.js";import"./index.3f9518bc.js";import"./Badge.fb5c1fa0.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.260c8e89.js";import"./Divider.8f801e86.js";import"./Text.a63ddca6.js";import"./Button.394cedc6.js";import"./Card.5b600a17.js";import"./Checkbox.cc03f82b.js";import"./index.module.a9575459.js";import"./index.7b917f51.js";import"./index.module.f7a56977.js";import"./index.module.30e92072.js";import"./index.module.28a1f0a2.js";import"./LabelledField.779b7704.js";import"./WarningIcon.f53b5e79.js";import"./ControlledTextInput.e4e27be4.js";import"./RadioGroup.61f5e55b.js";import"./index.module.3de9d79d.js";import"./index.module.7cc4bb51.js";import"./index.module.b3bd4032.js";import"./Select.ed68c47d.js";import"./index.module.f57fb956.js";import"./Combination.96f1b768.js";import"./tslib.es6.03b483f6.js";import"./index.module.ea9a5fbe.js";import"./Switch.fef47f0c.js";import"./Collapsible.01c1d2bf.js";import"./index.983b4faf.js";import"./Tooltip.33312ce4.js";import"./Modal.1307c044.js";import"./IconButton.3ddf2c98.js";import"./Scroll.7957ca47.js";import"./FileInput.789ca77c.js";import"./Spinner.9bee132c.js";import"./GradientAvatar.753ec6ca.js";import"./TabbedNav.825626ed.js";import"./Tabs.c877709d.js";import"./Tag.e8cdf31d.js";import"./ThemeProvider.b4c1a43d.js";import"./TokenImage.5b215796.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.46cf4cfd.js.map
