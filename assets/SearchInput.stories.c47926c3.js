var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.d695ebac.js";import{S as e}from"./SearchInput.54440d54.js";import"./iframe.c31f4b0e.js";import"./Box.799c379c.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./Avatar.e0b624d8.js";import"./index.3f9518bc.js";import"./Badge.54ba5968.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.f88bd8f6.js";import"./Divider.1bf670bc.js";import"./Text.c5cff101.js";import"./Button.40c27aac.js";import"./Card.0321e1c2.js";import"./Checkbox.9206e4aa.js";import"./index.module.40f3f895.js";import"./index.67cb3537.js";import"./index.module.3306ec17.js";import"./index.module.461bf61b.js";import"./index.module.f9a22c90.js";import"./LabelledField.f86e0d74.js";import"./WarningIcon.2fd4ad6f.js";import"./ControlledTextInput.b0dc0dc6.js";import"./RadioGroup.462c1556.js";import"./index.module.692d1bdb.js";import"./index.module.aac5ceb3.js";import"./index.module.6b95deff.js";import"./Select.22ba1cdd.js";import"./index.module.7135e0c3.js";import"./Combination.c349cd10.js";import"./tslib.es6.03b483f6.js";import"./index.module.985bd2a6.js";import"./Switch.142f7918.js";import"./Collapsible.fc647964.js";import"./index.d0eca7a2.js";import"./Tooltip.5eecc14d.js";import"./Modal.dcad09be.js";import"./IconButton.66d03e8c.js";import"./Scroll.73cfcc40.js";import"./FileInput.ae1869d7.js";import"./Spinner.9a6d7408.js";import"./GradientAvatar.e6d4a0f3.js";import"./TabbedNav.dec211ff.js";import"./Tabs.cb18f408.js";import"./Tag.41801d60.js";import"./ThemeProvider.c6295c0f.js";import"./TokenImage.08178121.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.c47926c3.js.map
