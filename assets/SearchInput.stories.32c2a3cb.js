var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.cbb7d416.js";import{S as e}from"./SearchInput.23aaf6eb.js";import"./iframe.fb385025.js";import"./Box.0210adcf.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./Avatar.4bf381bc.js";import"./index.3f9518bc.js";import"./Badge.874c6bd9.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.fb1afe36.js";import"./Divider.67c01d72.js";import"./Text.4efcce86.js";import"./Button.eb14fc8e.js";import"./Card.52b461e5.js";import"./Checkbox.19fbf806.js";import"./index.module.fe21a7ad.js";import"./index.50664d3a.js";import"./index.module.96911153.js";import"./index.module.b764ca97.js";import"./index.module.e714c392.js";import"./LabelledField.956e97c7.js";import"./WarningIcon.3afd75e6.js";import"./ControlledTextInput.6ca6a738.js";import"./RadioGroup.8c09401f.js";import"./index.module.2d64a653.js";import"./index.module.55f79b20.js";import"./index.module.9bd2de52.js";import"./Select.ab9311e5.js";import"./index.module.231eba8b.js";import"./Combination.54252213.js";import"./tslib.es6.03b483f6.js";import"./index.module.092e4dd6.js";import"./Switch.afe3716d.js";import"./Collapsible.6cada8e0.js";import"./index.61226a14.js";import"./Tooltip.2e837c9b.js";import"./Modal.6f4558ca.js";import"./IconButton.74ad48d0.js";import"./Scroll.a0e1178b.js";import"./FileInput.92561fed.js";import"./Spinner.6290f6c0.js";import"./GradientAvatar.25758f6b.js";import"./TabbedNav.802876d3.js";import"./Tabs.1a81a119.js";import"./Tag.12f4bd26.js";import"./ThemeProvider.7e8354ec.js";import"./TokenImage.88011a3d.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.32c2a3cb.js.map
