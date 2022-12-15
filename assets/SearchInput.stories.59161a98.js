var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.45971c93.js";import{S as e}from"./SearchInput.cb3f7b0f.js";import"./iframe.c4333eae.js";import"./Box.9ad41e42.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./Avatar.1aee1452.js";import"./index.3f9518bc.js";import"./Badge.bfbbbc10.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.dd78c505.js";import"./Divider.689df2d4.js";import"./Text.843dffc6.js";import"./Button.d6081e13.js";import"./Card.bb4f2680.js";import"./Checkbox.469d2898.js";import"./index.module.d5201a7f.js";import"./index.9869dfef.js";import"./index.module.0024909b.js";import"./index.module.23371235.js";import"./index.module.56a290b5.js";import"./LabelledField.c4180f28.js";import"./WarningIcon.1d3393be.js";import"./ControlledTextInput.7088e9e7.js";import"./RadioGroup.9187fa4c.js";import"./index.module.ab06e313.js";import"./index.module.f449d3fd.js";import"./index.module.06694813.js";import"./Select.54bb6c1b.js";import"./index.module.bcbb936a.js";import"./Combination.bef07e92.js";import"./tslib.es6.03b483f6.js";import"./index.module.7eaefdc4.js";import"./Switch.9b94020a.js";import"./Collapsible.af08e68e.js";import"./index.0f2f649b.js";import"./Tooltip.ab7f3e02.js";import"./Modal.bac1e08a.js";import"./IconButton.269e030a.js";import"./Scroll.61f000f2.js";import"./FileInput.a1081b4a.js";import"./Spinner.874c064e.js";import"./GradientAvatar.47102075.js";import"./TabbedNav.07afd64b.js";import"./Tabs.4560f2f4.js";import"./Tag.0dabad05.js";import"./ThemeProvider.1c0ea9ed.js";import"./TokenImage.345bfd07.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.59161a98.js.map
