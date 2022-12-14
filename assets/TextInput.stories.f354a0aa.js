var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.b01802aa.js";import"./Avatar.ca5cf69d.js";import"./Badge.3286de1e.js";import"./Breadcrumbs.29289b60.js";import{B as l}from"./Button.9e28cc08.js";/* empty css                             *//* empty css                              */import"./Card.4da44259.js";import"./Checkbox.75dadba9.js";import{T as i}from"./ControlledTextInput.6ab2366b.js";import"./Collapsible.d76ac3a4.js";import{j as t,a as h}from"./jsx-runtime.a2cf14b6.js";import"./SearchInput.b2d4f38e.js";import"./FileInput.a90eb930.js";import{I as m}from"./IconButton.95fcc8d0.js";import"./LabelledField.2d8710a8.js";import"./Modal.5731e9a4.js";import"./RadioGroup.e41fad8b.js";import"./Scroll.a8f0d203.js";import"./Select.a78d9560.js";import"./Spinner.9d71643d.js";import"./Switch.c4bb0f2b.js";import"./GradientAvatar.77823f47.js";import"./TabbedNav.9f4c781a.js";import"./Tabs.efba54b9.js";import"./Tag.539dcab2.js";import"./Text.31c5c98c.js";import"./ThemeProvider.d289210a.js";import"./TokenImage.c58d74d9.js";import"./Tooltip.1b351de0.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.86cfaf7b.js";import"./atoms.css.b2798663.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.05cefbd8.js";import"./index.module.af414869.js";import"./index.f5481880.js";import"./iframe.bf1e0a8a.js";import"./index.module.391e4452.js";import"./index.module.641589b1.js";import"./index.module.50642589.js";import"./index.module.63ac338d.js";import"./index.e903a05a.js";import"./tslib.es6.03b483f6.js";import"./index.module.0bc9ea2c.js";import"./index.module.8b32435b.js";import"./Combination.68127be4.js";import"./index.module.c7eb4479.js";import"./index.module.48056757.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.f354a0aa.js.map
