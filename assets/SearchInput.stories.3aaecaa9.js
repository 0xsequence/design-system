var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.7950ebae.js";import{S as e}from"./SearchInput.127aee00.js";import"./iframe.fe1cae89.js";import"./Box.a7ff084d.js";/* empty css                             */import"./atoms.css.66ddf8d3.js";import"./Avatar.d6110409.js";import"./index.3f9518bc.js";import"./Badge.7d28a4dc.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Button.b3192f07.js";import"./Text.cca25e33.js";import"./Card.c639d714.js";import"./Checkbox.354440c7.js";import"./index.module.dd447f0b.js";import"./index.bed1c532.js";import"./index.module.f28997d0.js";import"./index.module.a99c1f42.js";import"./index.module.740df0e4.js";import"./LabelledField.dec2757b.js";import"./WarningIcon.3d1748df.js";import"./ControlledTextInput.4e1bae6d.js";import"./RadioGroup.77defbae.js";import"./index.module.e82789af.js";import"./index.module.9a9904a7.js";import"./index.module.458578b2.js";import"./Select.3d0bc6f7.js";import"./index.module.8a7e40bd.js";import"./Combination.b8c41d17.js";import"./tslib.es6.03b483f6.js";import"./index.module.d783760e.js";import"./Switch.3cce071c.js";import"./Collapsible.1fd1fc57.js";import"./index.c6089d30.js";import"./Tooltip.7227145c.js";import"./Modal.cb8cfafc.js";import"./IconButton.b606a499.js";import"./Scroll.b7ce8c01.js";import"./FileInput.fd42cc8a.js";import"./Group.eec39518.js";import"./Spinner.af51d6aa.js";import"./TabbedNav.910efcdc.js";import"./Tabs.a4225fea.js";import"./Tag.61029992.js";import"./ThemeProvider.f87e99ef.js";import"./TokenImage.3f69190a.js";const nt={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.3aaecaa9.js.map
