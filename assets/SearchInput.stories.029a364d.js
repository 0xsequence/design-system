var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.15708ae5.js";import{S as e}from"./SearchInput.ca5f21c1.js";import"./iframe.b6bbbd50.js";import"./Box.e9b6b9f2.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./Avatar.f428b69a.js";import"./index.3f9518bc.js";import"./Badge.4de419b0.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.ef3872c5.js";import"./Divider.0578f522.js";import"./Text.dfb4198d.js";import"./Button.af590098.js";import"./Card.98b3af42.js";import"./Checkbox.bdff6308.js";import"./index.module.e77e1728.js";import"./index.884842a8.js";import"./index.module.a12f205a.js";import"./index.module.72578efb.js";import"./index.module.ba5cf2c9.js";import"./LabelledField.700d0e36.js";import"./WarningIcon.895b46dc.js";import"./ControlledTextInput.440ea833.js";import"./RadioGroup.0a39990e.js";import"./index.module.5e4e66bc.js";import"./index.module.0d15c4a2.js";import"./index.module.1680d151.js";import"./Select.1aa02769.js";import"./index.module.11f4ad16.js";import"./Combination.9b989680.js";import"./tslib.es6.03b483f6.js";import"./index.module.1faa5b92.js";import"./Switch.98c6b55f.js";import"./Collapsible.2825ff9f.js";import"./index.8ff64368.js";import"./Tooltip.0e32f8d8.js";import"./Modal.78022925.js";import"./IconButton.34f99732.js";import"./Scroll.175737a6.js";import"./FileInput.48798610.js";import"./Spinner.c618f938.js";import"./GradientAvatar.62b3d2b0.js";import"./TabbedNav.e8457ea4.js";import"./Tabs.222ccc7b.js";import"./Tag.ca1a74cb.js";import"./ThemeProvider.e6da5c98.js";import"./TokenImage.b944c64b.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.029a364d.js.map
