var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.e6e00a73.js";import"./Avatar.4e19c1ac.js";import"./Badge.509f6e69.js";import{B as l}from"./Button.c98f3d14.js";/* empty css                             *//* empty css                              */import"./Card.a3bfb603.js";import"./Checkbox.0416f69b.js";import{T as i}from"./ControlledTextInput.c4c9725c.js";import"./Collapsible.c69e8fc7.js";import{j as t,a as h}from"./jsx-runtime.6b16d6ce.js";import"./SearchInput.796754ba.js";import"./FileInput.7c31ff51.js";import"./Group.081b4e85.js";import{I as m}from"./IconButton.b5b8f11b.js";import"./LabelledField.23cfd5b3.js";import"./Modal.f1083d21.js";import"./RadioGroup.d362e1b9.js";import"./Scroll.c3ecf716.js";import"./Select.81d8e18f.js";import"./Spinner.2800403b.js";import"./Switch.0689311c.js";import"./GradientAvatar.48a45585.js";import"./TabbedNav.c662fbe8.js";import"./Tabs.de50acf6.js";import"./Tag.9fa8acd9.js";import"./Text.4b0e9133.js";import"./ThemeProvider.5cee7533.js";import"./TokenImage.e7b956d3.js";import"./Tooltip.f547c9d4.js";import{E as r,g as c,b as d,c as I}from"./WarningIcon.a8c984cd.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.13ccf86a.js";import"./index.c47da552.js";import"./iframe.ecda5169.js";import"./index.module.acac4d68.js";import"./index.module.c86d1965.js";import"./index.module.d2d4036b.js";import"./index.module.a1561f64.js";import"./index.377421ea.js";import"./tslib.es6.03b483f6.js";import"./index.module.f0b8a94f.js";import"./index.module.66f5198c.js";import"./Combination.22801f8d.js";import"./index.module.ec4bd3ee.js";import"./index.module.c0c98138.js";const xo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box, Button, IconButton } from '~/components'
import { ArrowRightIcon, CloseIcon, ScanIcon, SearchIcon } from '~/icons'

import { TextInput } from './TextInput'

export default {
  title: 'Forms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = args => {
  return <TextInput id="myInput" {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  labelLocation: 'top',
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  leftIcon: ScanIcon,
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  rightIcon: ArrowRightIcon,
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  leftIcon: ScanIcon,
  rightIcon: ArrowRightIcon,
}

export const SearchInput = Template.bind({})
SearchInput.args = {
  placeholder: 'Search for coins or collectibles',
  leftIcon: SearchIcon,
  controls: <IconButton icon={CloseIcon} size="xs" />,
}

export const WithComplexControls = Template.bind({})
WithComplexControls.args = {
  label: 'This the label',
  placeholder: 'This is the placeholder',
  controls: (
    <Box gap="2">
      <Button label="Max" size="xs" shape="square" />
      <Button label="Paste" size="xs" shape="square" />
    </Box>
  ),
}
`,locationsMap:{basic:{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-left-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-right-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-both-icons":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"search-input":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-complex-controls":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}}}}},title:"Forms/TextInput",component:i},o=n(e=>t(i,{id:"myInput",...e}),"Template"),b=o.bind({});b.args={label:"This the label",placeholder:"This is the placeholder",labelLocation:"top"};const T=o.bind({});T.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r};const x=o.bind({});x.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:c};const g=o.bind({});g.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r,rightIcon:c};const u=o.bind({});u.args={placeholder:"Search for coins or collectibles",leftIcon:d,controls:t(m,{icon:I,size:"xs"})};const B=o.bind({});B.args={label:"This the label",placeholder:"This is the placeholder",controls:h(p,{gap:"2",children:[t(l,{label:"Max",size:"xs",shape:"square"}),t(l,{label:"Paste",size:"xs",shape:"square"})]})};const go=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","WithComplexControls"];export{b as Basic,u as SearchInput,g as WithBothIcons,B as WithComplexControls,T as WithLeftIcon,x as WithRightIcon,go as __namedExportsOrder,xo as default};
//# sourceMappingURL=TextInput.stories.ea73514a.js.map
