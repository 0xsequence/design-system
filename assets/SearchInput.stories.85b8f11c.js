var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.7684fdb3.js";import{S as e}from"./SearchInput.dcce0f93.js";import"./iframe.d8984628.js";import"./Box.f2f2ff9f.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.050765a4.js";import"./index.3f9518bc.js";import"./Badge.63483bc9.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.02130dc9.js";import"./Text.c9c459c7.js";import"./Card.23c40a88.js";import"./Checkbox.b356811a.js";import"./index.module.4f959ddc.js";import"./index.cdb327c6.js";import"./index.module.64090600.js";import"./index.module.f539692c.js";import"./index.module.045c15b5.js";import"./LabelledField.94264092.js";import"./WarningIcon.3567554e.js";import"./ControlledTextInput.fb26aaa0.js";import"./RadioGroup.b099e10c.js";import"./index.module.5e2fe4bc.js";import"./index.module.14fbf2f4.js";import"./index.module.62ea5b81.js";import"./Select.5888b5b0.js";import"./index.module.8ad87d7f.js";import"./Combination.470456b8.js";import"./tslib.es6.03b483f6.js";import"./index.module.ce1c3228.js";import"./Switch.6786307c.js";import"./Collapsible.a91599fe.js";import"./index.012475fb.js";import"./Tooltip.db0530ae.js";import"./Modal.300326ec.js";import"./IconButton.4bf3ca37.js";import"./Scroll.155b545a.js";import"./FileInput.1d6ae77f.js";import"./Group.f0f140cd.js";import"./Spinner.ae604c5b.js";import"./GradientAvatar.c1139b9a.js";import"./TabbedNav.a471530d.js";import"./Tabs.e8adb73a.js";import"./Tag.0c8f70cb.js";import"./ThemeProvider.87017979.js";import"./TokenImage.748ea763.js";const mt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.85b8f11c.js.map
