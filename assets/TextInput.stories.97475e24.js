var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.02e6c614.js";import"./Avatar.27767299.js";import"./Badge.fb5c1fa0.js";import"./Breadcrumbs.260c8e89.js";import{B as l}from"./Button.394cedc6.js";/* empty css                             *//* empty css                              */import"./Card.5b600a17.js";import"./Checkbox.cc03f82b.js";import{T as i}from"./ControlledTextInput.e4e27be4.js";import"./Collapsible.01c1d2bf.js";import{j as t,a as h}from"./jsx-runtime.12b235d0.js";import"./SearchInput.0c357e91.js";import"./FileInput.789ca77c.js";import{I as m}from"./IconButton.3ddf2c98.js";import"./LabelledField.779b7704.js";import"./Modal.1307c044.js";import"./RadioGroup.61f5e55b.js";import"./Scroll.7957ca47.js";import"./Select.ed68c47d.js";import"./Spinner.9bee132c.js";import"./Switch.fef47f0c.js";import"./GradientAvatar.753ec6ca.js";import"./TabbedNav.825626ed.js";import"./Tabs.c877709d.js";import"./Tag.e8cdf31d.js";import"./Text.a63ddca6.js";import"./ThemeProvider.b4c1a43d.js";import"./TokenImage.5b215796.js";import"./Tooltip.33312ce4.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.f53b5e79.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.8f801e86.js";import"./index.module.a9575459.js";import"./index.7b917f51.js";import"./iframe.063f743e.js";import"./index.module.f7a56977.js";import"./index.module.30e92072.js";import"./index.module.28a1f0a2.js";import"./index.module.b3bd4032.js";import"./index.983b4faf.js";import"./tslib.es6.03b483f6.js";import"./index.module.7cc4bb51.js";import"./index.module.f57fb956.js";import"./Combination.96f1b768.js";import"./index.module.3de9d79d.js";import"./index.module.ea9a5fbe.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{basic:{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-left-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-right-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-both-icons":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"search-input":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-complex-controls":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}}}}},title:"Forms/TextInput",component:i},o=n(e=>t(i,{id:"myInput",...e}),"Template"),b=o.bind({});b.args={label:"This the label",placeholder:"This is the placeholder",labelLocation:"top"};const T=o.bind({});T.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r};const x=o.bind({});x.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:c};const g=o.bind({});g.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r,rightIcon:c};const u=o.bind({});u.args={placeholder:"Search for coins or collectibles",leftIcon:d,controls:t(m,{icon:I,size:"xs"})};const B=o.bind({});B.args={label:"This the label",placeholder:"This is the placeholder",controls:h(p,{gap:"2",children:[t(l,{label:"Max",size:"xs",shape:"square"}),t(l,{label:"Paste",size:"xs",shape:"square"})]})};const uo=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","WithComplexControls"];export{b as Basic,u as SearchInput,g as WithBothIcons,B as WithComplexControls,T as WithLeftIcon,x as WithRightIcon,uo as __namedExportsOrder,go as default};
//# sourceMappingURL=TextInput.stories.97475e24.js.map
