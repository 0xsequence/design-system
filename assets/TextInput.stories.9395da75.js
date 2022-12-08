var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.27f7cd84.js";import"./Avatar.8e87572d.js";import"./Badge.3e0c2a59.js";import{B as l}from"./Button.7644ad98.js";/* empty css                             *//* empty css                              */import"./Card.de406baf.js";import"./Checkbox.e117ba94.js";import{T as i}from"./ControlledTextInput.fec76c32.js";import"./Collapsible.de87d7c8.js";import{j as t,a as h}from"./jsx-runtime.43c8dc3d.js";import"./SearchInput.3e43e32b.js";import"./FileInput.8806a832.js";import"./Group.4f5a0105.js";import{I as m}from"./IconButton.2c3fb8a0.js";import"./LabelledField.19b82964.js";import"./Modal.7fc781f9.js";import"./RadioGroup.767f7664.js";import"./Scroll.9bfa014e.js";import"./Select.dd539f84.js";import"./Spinner.6a7ac7b0.js";import"./Switch.4a39756e.js";import"./TabbedNav.661e9876.js";import"./Tabs.db2f99ad.js";import"./Tag.1c07b678.js";import"./Text.c9b665b1.js";import"./ThemeProvider.c2bec647.js";import"./TokenImage.d189d7de.js";import"./Tooltip.ecfde288.js";import{E as r,g as c,b as d,c as I}from"./WarningIcon.b58aea42.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.554e1fc7.js";import"./index.d39f2c51.js";import"./iframe.5953023d.js";import"./index.module.99cdb3ec.js";import"./index.module.bb75b94a.js";import"./index.module.585f1646.js";import"./index.module.a73d31e7.js";import"./index.9cb1647f.js";import"./tslib.es6.03b483f6.js";import"./index.module.edee1fad.js";import"./index.module.aa0c78f9.js";import"./Combination.bd5284c7.js";import"./index.module.e37526c6.js";import"./index.module.0bcf0934.js";const To={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.9395da75.js.map
