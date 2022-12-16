var m=Object.defineProperty;var r=(t,o)=>m(t,"name",{value:o,configurable:!0});import{r as i,j as a}from"./jsx-runtime.c3c6753e.js";import{S as e}from"./SearchInput.0dfe605b.js";import"./iframe.df35f0ab.js";import"./Box.110a0077.js";/* empty css                             */import"./atoms.css.79225c60.js";import"./Avatar.b1ae7c11.js";import"./index.3f9518bc.js";import"./Badge.cdec8d7e.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Breadcrumbs.b77f005c.js";import"./Divider.77c107ba.js";import"./Text.38c28920.js";import"./Button.8a0256bb.js";import"./Card.800931e3.js";import"./Checkbox.565add66.js";import"./index.module.e4b8e2b0.js";import"./index.213be3e2.js";import"./index.module.07e8e295.js";import"./index.module.eb77254b.js";import"./index.module.9fd593a8.js";import"./LabelledField.f04f0354.js";import"./WarningIcon.b6e94604.js";import"./ControlledTextInput.c123e873.js";import"./RadioGroup.c0278520.js";import"./index.module.40f6d64e.js";import"./index.module.9d19065e.js";import"./index.module.3279dc18.js";import"./Select.766ba361.js";import"./index.module.f49a903b.js";import"./Combination.e809eadb.js";import"./tslib.es6.03b483f6.js";import"./index.module.444be7a0.js";import"./Switch.e23d5f33.js";import"./Collapsible.cfa72cc6.js";import"./index.f62c5755.js";import"./Tooltip.5819cace.js";import"./Modal.83f476fa.js";import"./IconButton.a931f7a7.js";import"./Scroll.a94b724a.js";import"./FileInput.c7f20313.js";import"./Spinner.0209535b.js";import"./GradientAvatar.0eeb240b.js";import"./TabbedNav.d72d4a26.js";import"./Tabs.3e95fac8.js";import"./Tag.d27782f4.js";import"./ThemeProvider.b9888e27.js";import"./TokenImage.38a2d24c.js";const it={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'
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
//# sourceMappingURL=SearchInput.stories.5b3820bb.js.map
