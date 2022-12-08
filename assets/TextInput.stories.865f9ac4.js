var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.a7ff084d.js";import"./Avatar.d6110409.js";import"./Badge.7d28a4dc.js";import{B as l}from"./Button.b3192f07.js";/* empty css                             *//* empty css                              */import"./Card.c639d714.js";import"./Checkbox.354440c7.js";import{T as i}from"./ControlledTextInput.4e1bae6d.js";import"./Collapsible.1fd1fc57.js";import{j as t,a as h}from"./jsx-runtime.7950ebae.js";import"./SearchInput.127aee00.js";import"./FileInput.fd42cc8a.js";import"./Group.eec39518.js";import{I as m}from"./IconButton.b606a499.js";import"./LabelledField.dec2757b.js";import"./Modal.cb8cfafc.js";import"./RadioGroup.77defbae.js";import"./Scroll.b7ce8c01.js";import"./Select.3d0bc6f7.js";import"./Spinner.af51d6aa.js";import"./Switch.3cce071c.js";import"./TabbedNav.910efcdc.js";import"./Tabs.a4225fea.js";import"./Tag.61029992.js";import"./Text.cca25e33.js";import"./ThemeProvider.f87e99ef.js";import"./TokenImage.3f69190a.js";import"./Tooltip.7227145c.js";import{E as r,g as c,b as d,c as I}from"./WarningIcon.3d1748df.js";import"./atoms.css.66ddf8d3.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.dd447f0b.js";import"./index.bed1c532.js";import"./iframe.fe1cae89.js";import"./index.module.f28997d0.js";import"./index.module.a99c1f42.js";import"./index.module.740df0e4.js";import"./index.module.458578b2.js";import"./index.c6089d30.js";import"./tslib.es6.03b483f6.js";import"./index.module.9a9904a7.js";import"./index.module.8a7e40bd.js";import"./Combination.b8c41d17.js";import"./index.module.e82789af.js";import"./index.module.d783760e.js";const To={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{basic:{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-left-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-right-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-both-icons":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"search-input":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-complex-controls":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}}}}},title:"Forms/TextInput",component:i},o=n(e=>t(i,{id:"myInput",...e}),"Template"),b=o.bind({});b.args={label:"This the label",placeholder:"This is the placeholder",labelLocation:"top"};const T=o.bind({});T.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r};const x=o.bind({});x.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:c};const g=o.bind({});g.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r,rightIcon:c};const u=o.bind({});u.args={placeholder:"Search for coins or collectibles",leftIcon:d,controls:t(m,{icon:I,size:"xs"})};const B=o.bind({});B.args={label:"This the label",placeholder:"This is the placeholder",controls:h(p,{gap:"2",children:[t(l,{label:"Max",size:"xs",shape:"square"}),t(l,{label:"Paste",size:"xs",shape:"square"})]})};const xo=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","WithComplexControls"];export{b as Basic,u as SearchInput,g as WithBothIcons,B as WithComplexControls,T as WithLeftIcon,x as WithRightIcon,xo as __namedExportsOrder,To as default};
//# sourceMappingURL=TextInput.stories.865f9ac4.js.map
