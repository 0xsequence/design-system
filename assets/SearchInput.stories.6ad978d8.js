var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.a2cf14b6.js";import{S as e}from"./SearchInput.b2d4f38e.js";import"./iframe.bf1e0a8a.js";import"./Box.b01802aa.js";/* empty css                             */import"./atoms.css.b2798663.js";import"./Avatar.ca5cf69d.js";import"./index.3f9518bc.js";import"./Badge.3286de1e.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.29289b60.js";import"./Divider.05cefbd8.js";import"./Text.31c5c98c.js";import"./Button.9e28cc08.js";import"./Card.4da44259.js";import"./Checkbox.75dadba9.js";import"./index.module.af414869.js";import"./index.f5481880.js";import"./index.module.391e4452.js";import"./index.module.641589b1.js";import"./index.module.50642589.js";import"./LabelledField.2d8710a8.js";import"./WarningIcon.86cfaf7b.js";import"./ControlledTextInput.6ab2366b.js";import"./RadioGroup.e41fad8b.js";import"./index.module.c7eb4479.js";import"./index.module.0bc9ea2c.js";import"./index.module.63ac338d.js";import"./Select.a78d9560.js";import"./index.module.8b32435b.js";import"./Combination.68127be4.js";import"./tslib.es6.03b483f6.js";import"./index.module.48056757.js";import"./Switch.c4bb0f2b.js";import"./Collapsible.d76ac3a4.js";import"./index.e903a05a.js";import"./Tooltip.1b351de0.js";import"./Modal.5731e9a4.js";import"./IconButton.95fcc8d0.js";import"./Scroll.a8f0d203.js";import"./FileInput.a90eb930.js";import"./Spinner.9d71643d.js";import"./GradientAvatar.77823f47.js";import"./TabbedNav.9f4c781a.js";import"./Tabs.efba54b9.js";import"./Tag.539dcab2.js";import"./ThemeProvider.d289210a.js";import"./TokenImage.c58d74d9.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.6ad978d8.js.map
