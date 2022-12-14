var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.2d3bce7f.js";import"./Avatar.2a8f4fda.js";import"./Badge.c399faa4.js";import"./Breadcrumbs.18f843cd.js";import{B as l}from"./Button.372f4ba6.js";/* empty css                             *//* empty css                              */import"./Card.7c9efd16.js";import"./Checkbox.ad79d0fc.js";import{T as i}from"./ControlledTextInput.f5f7fbdf.js";import"./Collapsible.32d87070.js";import{j as t,a as h}from"./jsx-runtime.f636af4d.js";import"./SearchInput.0ce34645.js";import"./FileInput.5b3fc6ca.js";import{I as m}from"./IconButton.269e8e67.js";import"./LabelledField.31088f69.js";import"./Modal.568fa99b.js";import"./RadioGroup.6f25dbc2.js";import"./Scroll.6fe7e970.js";import"./Select.f125defe.js";import"./Spinner.145e66ae.js";import"./Switch.25faf947.js";import"./GradientAvatar.a62dadee.js";import"./TabbedNav.b08d6504.js";import"./Tabs.f65160af.js";import"./Tag.2203769e.js";import"./Text.184e3bef.js";import"./ThemeProvider.387c6ba7.js";import"./TokenImage.4c672921.js";import"./Tooltip.e01f0207.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.2bf9e3d8.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.c1ec7a99.js";import"./index.module.9ad9589d.js";import"./index.6b7fb880.js";import"./iframe.e363e4ff.js";import"./index.module.3afcfe3e.js";import"./index.module.ab38d266.js";import"./index.module.39783b35.js";import"./index.module.5875e635.js";import"./index.1da4344d.js";import"./tslib.es6.03b483f6.js";import"./index.module.c60debcf.js";import"./index.module.8aa37338.js";import"./Combination.8ec01dad.js";import"./index.module.ed52a915.js";import"./index.module.54e4d840.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.df6f4b20.js.map
