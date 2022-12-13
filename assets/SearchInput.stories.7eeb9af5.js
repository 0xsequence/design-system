var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.368e1e2b.js";import{S as e}from"./SearchInput.9499b2ae.js";import"./iframe.95d61bca.js";import"./Box.644b2ccd.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.11f809c8.js";import"./index.3f9518bc.js";import"./Badge.d9829662.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.6568a84a.js";import"./Divider.e7b37ec8.js";import"./Text.1e9ed5a3.js";import"./Button.fc9fc948.js";import"./Card.ed909fc8.js";import"./Checkbox.40352310.js";import"./index.module.e41eb08d.js";import"./index.ab5262d5.js";import"./index.module.eeb5393f.js";import"./index.module.76dff107.js";import"./index.module.5093cc33.js";import"./LabelledField.6a838959.js";import"./WarningIcon.8e3ef22f.js";import"./ControlledTextInput.96f00d39.js";import"./RadioGroup.5634f799.js";import"./index.module.54c3d7b9.js";import"./index.module.55bd9fe9.js";import"./index.module.dd86010b.js";import"./Select.6e939b2b.js";import"./index.module.7996bc1f.js";import"./Combination.6660856d.js";import"./tslib.es6.03b483f6.js";import"./index.module.48392fa7.js";import"./Switch.09de69c3.js";import"./Collapsible.5c9a9b50.js";import"./index.8791ed57.js";import"./Tooltip.50a072ab.js";import"./Modal.ac13cd14.js";import"./IconButton.c279660b.js";import"./Scroll.17936fb4.js";import"./FileInput.9cae4001.js";import"./Spinner.f1f4341a.js";import"./GradientAvatar.3a828f1a.js";import"./TabbedNav.f60558fe.js";import"./Tabs.f7026033.js";import"./Tag.61e7bf0d.js";import"./ThemeProvider.a28c5152.js";import"./TokenImage.7597557a.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.7eeb9af5.js.map
