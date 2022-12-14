var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.f636af4d.js";import{S as e}from"./SearchInput.0ce34645.js";import"./iframe.e363e4ff.js";import"./Box.2d3bce7f.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.2a8f4fda.js";import"./index.3f9518bc.js";import"./Badge.c399faa4.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.18f843cd.js";import"./Divider.c1ec7a99.js";import"./Text.184e3bef.js";import"./Button.372f4ba6.js";import"./Card.7c9efd16.js";import"./Checkbox.ad79d0fc.js";import"./index.module.9ad9589d.js";import"./index.6b7fb880.js";import"./index.module.3afcfe3e.js";import"./index.module.ab38d266.js";import"./index.module.39783b35.js";import"./LabelledField.31088f69.js";import"./WarningIcon.2bf9e3d8.js";import"./ControlledTextInput.f5f7fbdf.js";import"./RadioGroup.6f25dbc2.js";import"./index.module.ed52a915.js";import"./index.module.c60debcf.js";import"./index.module.5875e635.js";import"./Select.f125defe.js";import"./index.module.8aa37338.js";import"./Combination.8ec01dad.js";import"./tslib.es6.03b483f6.js";import"./index.module.54e4d840.js";import"./Switch.25faf947.js";import"./Collapsible.32d87070.js";import"./index.1da4344d.js";import"./Tooltip.e01f0207.js";import"./Modal.568fa99b.js";import"./IconButton.269e8e67.js";import"./Scroll.6fe7e970.js";import"./FileInput.5b3fc6ca.js";import"./Spinner.145e66ae.js";import"./GradientAvatar.a62dadee.js";import"./TabbedNav.b08d6504.js";import"./Tabs.f65160af.js";import"./Tag.2203769e.js";import"./ThemeProvider.387c6ba7.js";import"./TokenImage.4c672921.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.96e4de6c.js.map
