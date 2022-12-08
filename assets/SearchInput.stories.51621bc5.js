var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.43c8dc3d.js";import{S as e}from"./SearchInput.3e43e32b.js";import"./iframe.5953023d.js";import"./Box.27f7cd84.js";/* empty css                             */import"./atoms.css.b9e53546.js";import"./Avatar.8e87572d.js";import"./index.3f9518bc.js";import"./Badge.3e0c2a59.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.7644ad98.js";import"./Text.c9b665b1.js";import"./Card.de406baf.js";import"./Checkbox.e117ba94.js";import"./index.module.554e1fc7.js";import"./index.d39f2c51.js";import"./index.module.99cdb3ec.js";import"./index.module.bb75b94a.js";import"./index.module.585f1646.js";import"./LabelledField.19b82964.js";import"./WarningIcon.b58aea42.js";import"./ControlledTextInput.fec76c32.js";import"./RadioGroup.767f7664.js";import"./index.module.e37526c6.js";import"./index.module.edee1fad.js";import"./index.module.a73d31e7.js";import"./Select.dd539f84.js";import"./index.module.aa0c78f9.js";import"./Combination.bd5284c7.js";import"./tslib.es6.03b483f6.js";import"./index.module.0bcf0934.js";import"./Switch.4a39756e.js";import"./Collapsible.de87d7c8.js";import"./index.9cb1647f.js";import"./Tooltip.ecfde288.js";import"./Modal.7fc781f9.js";import"./IconButton.2c3fb8a0.js";import"./Scroll.9bfa014e.js";import"./FileInput.8806a832.js";import"./Group.4f5a0105.js";import"./Spinner.6a7ac7b0.js";import"./TabbedNav.661e9876.js";import"./Tabs.db2f99ad.js";import"./Tag.1c07b678.js";import"./ThemeProvider.c2bec647.js";import"./TokenImage.d189d7de.js";const nt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:11},endLoc:{col:1,line:22},startBody:{col:53,line:11},endBody:{col:1,line:22}}}}},title:"Forms/SearchInput",component:e},s=r(t=>{const[o,p]=i.exports.useState("");return a(e,{id:"myInput",...t,value:o,onChange:n=>p(n.target.value)})},"Template"),l=s.bind({});l.args={label:"Search",labelLocation:"top",placeholder:"This is the placeholder"};const mt=["Demo"];export{l as Demo,mt as __namedExportsOrder,nt as default};
//# sourceMappingURL=SearchInput.stories.51621bc5.js.map
