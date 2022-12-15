var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.799c379c.js";import"./Avatar.e0b624d8.js";import"./Badge.54ba5968.js";import"./Breadcrumbs.f88bd8f6.js";import{B as l}from"./Button.40c27aac.js";/* empty css                             *//* empty css                              */import"./Card.0321e1c2.js";import"./Checkbox.9206e4aa.js";import{T as i}from"./ControlledTextInput.b0dc0dc6.js";import"./Collapsible.fc647964.js";import{j as t,a as h}from"./jsx-runtime.d695ebac.js";import"./SearchInput.54440d54.js";import"./FileInput.ae1869d7.js";import{I as m}from"./IconButton.66d03e8c.js";import"./LabelledField.f86e0d74.js";import"./Modal.dcad09be.js";import"./RadioGroup.462c1556.js";import"./Scroll.73cfcc40.js";import"./Select.22ba1cdd.js";import"./Spinner.9a6d7408.js";import"./Switch.142f7918.js";import"./GradientAvatar.e6d4a0f3.js";import"./TabbedNav.dec211ff.js";import"./Tabs.cb18f408.js";import"./Tag.41801d60.js";import"./Text.c5cff101.js";import"./ThemeProvider.c6295c0f.js";import"./TokenImage.08178121.js";import"./Tooltip.5eecc14d.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.2fd4ad6f.js";import"./atoms.css.79225c60.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.1bf670bc.js";import"./index.module.40f3f895.js";import"./index.67cb3537.js";import"./iframe.c31f4b0e.js";import"./index.module.3306ec17.js";import"./index.module.461bf61b.js";import"./index.module.f9a22c90.js";import"./index.module.6b95deff.js";import"./index.d0eca7a2.js";import"./tslib.es6.03b483f6.js";import"./index.module.aac5ceb3.js";import"./index.module.7135e0c3.js";import"./Combination.c349cd10.js";import"./index.module.692d1bdb.js";import"./index.module.985bd2a6.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.66cd1e19.js.map
