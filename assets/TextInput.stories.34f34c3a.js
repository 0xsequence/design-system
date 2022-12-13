var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.6e19c9f7.js";import"./Avatar.d3e98485.js";import"./Badge.eca02fc7.js";import{B as l}from"./Button.303d0986.js";/* empty css                             *//* empty css                              */import"./Card.80a86fc5.js";import"./Checkbox.6d506131.js";import{T as i}from"./ControlledTextInput.a351c178.js";import"./Collapsible.c7dabf37.js";import{j as t,a as h}from"./jsx-runtime.c83a6dad.js";import"./SearchInput.fc401894.js";import"./FileInput.b80de096.js";import"./Group.1bf0a71f.js";import{I as m}from"./IconButton.12ea2a9b.js";import"./LabelledField.0a99ff0d.js";import"./Modal.b125c956.js";import"./RadioGroup.0b10249c.js";import"./Scroll.c27f40e6.js";import"./Select.d57f4fc4.js";import"./Spinner.616e0414.js";import"./Switch.4effb0d1.js";import"./GradientAvatar.ac156d05.js";import"./TabbedNav.d13098bb.js";import"./Tabs.901b24f8.js";import"./Tag.6721bcb6.js";import"./Text.e79e063b.js";import"./ThemeProvider.7ef96751.js";import"./TokenImage.038eef7c.js";import"./Tooltip.449c3e4d.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.55ad9013.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.da7f3d52.js";import"./index.825d69cc.js";import"./iframe.0fa8211e.js";import"./index.module.aec12b35.js";import"./index.module.270e7d31.js";import"./index.module.9658c971.js";import"./index.module.e261825f.js";import"./index.02f227cb.js";import"./tslib.es6.03b483f6.js";import"./index.module.84d3232c.js";import"./index.module.209fa70e.js";import"./Combination.33653f59.js";import"./index.module.cebbe7eb.js";import"./index.module.579b07d9.js";const xo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.34f34c3a.js.map
