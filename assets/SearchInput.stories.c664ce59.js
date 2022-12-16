var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.2e08b7ec.js";import{S as e}from"./SearchInput.e288f891.js";import"./iframe.ce068c36.js";import"./Box.7993a24b.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./Avatar.32a088db.js";import"./index.3f9518bc.js";import"./Badge.f552ecea.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.ed42258b.js";import"./Divider.62583409.js";import"./Text.b8a52137.js";import"./Button.03623ddf.js";import"./Card.f808ade0.js";import"./Checkbox.66f99bcb.js";import"./index.module.4da1dcc7.js";import"./index.33fa010c.js";import"./index.module.2f2e5fee.js";import"./index.module.b736bcb2.js";import"./index.module.cd84a2ad.js";import"./LabelledField.5bdaf3e2.js";import"./WarningIcon.2814b597.js";import"./ControlledTextInput.80c5a6a0.js";import"./RadioGroup.33ae179f.js";import"./index.module.88c8ce49.js";import"./index.module.abd778ee.js";import"./index.module.5a44f47c.js";import"./Select.65882ee6.js";import"./index.module.9eb42a43.js";import"./Combination.926eaf74.js";import"./tslib.es6.03b483f6.js";import"./index.module.3bc24312.js";import"./Switch.0aca8d59.js";import"./Collapsible.eac4de6e.js";import"./index.5343167a.js";import"./Tooltip.a8875091.js";import"./Modal.26953ce9.js";import"./IconButton.cebf68c5.js";import"./Scroll.5349ee68.js";import"./FileInput.7f87f2bc.js";import"./Spinner.b67e2557.js";import"./GradientAvatar.eacfc4b2.js";import"./TabbedNav.b47bb55f.js";import"./Tabs.3bcc8b94.js";import"./Tag.d6aad7bc.js";import"./ThemeProvider.f80a1a69.js";import"./TokenImage.d0700fc0.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.c664ce59.js.map
