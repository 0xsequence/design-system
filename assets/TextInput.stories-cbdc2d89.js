var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box-51f65dd6.js";import"./Avatar-a0ad93f0.js";import"./Badge-bb29d0d0.js";import"./Breadcrumbs-8eca0f50.js";import{B as i}from"./Button-4551bff3.js";/* empty css                             *//* empty css                              */import"./Card-eff102f4.js";import"./Checkbox-57669e46.js";import{T as l}from"./ControlledTextInput-c6f1c5d1.js";import"./Collapsible-8808d480.js";import"./SearchInput-d80e8ced.js";import"./FileInput-da1342d5.js";import{I as h}from"./IconButton-f938168d.js";import"./Field-ac861416.js";import"./Modal-222ef460.js";import"./RadioGroup-8460e252.js";import"./Scroll-f482921d.js";import"./Select-e629f7c1.js";import"./Spinner-92f37ffa.js";import"./Switch-f9014e56.js";import"./GradientAvatar-09ad650d.js";import"./TabbedNav-13275627.js";import"./Tabs-bb4c7d5b.js";import"./Tag-210cef44.js";import"./Text-cce84919.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-519965c7.js";import"./Tooltip-ac62d88a.js";import{I as r,g as c,b as m,c as d}from"./WarningIcon-4182fb24.js";import{j as t,a as I}from"./jsx-runtime-6057fa59.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-36c6db2d.js";import"./index-a2f37619.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Divider-f59a5db1.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./index.module-e55af700.js";import"./index-3d2c79c6.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-0992d81f.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./index.module-b9ae0e60.js";import"./index.module-ec83e676.js";import"./typography-f274f330.js";const Bo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
  description: 'This is the description',
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
`,locationsMap:{basic:{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-left-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-right-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-both-icons":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"search-input":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-complex-controls":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}}}}},title:"Forms/TextInput",component:l},o=n(e=>t(l,{id:"myInput",...e}),"Template"),b=o.bind({});b.args={label:"This the label",description:"This is the description",placeholder:"This is the placeholder",labelLocation:"top"};const T=o.bind({});T.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r};const x=o.bind({});x.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:c};const g=o.bind({});g.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r,rightIcon:c};const u=o.bind({});u.args={placeholder:"Search for coins or collectibles",leftIcon:m,controls:t(h,{icon:d,size:"xs"})};const B=o.bind({});B.args={label:"This the label",placeholder:"This is the placeholder",controls:I(p,{gap:"2",children:[t(i,{label:"Max",size:"xs",shape:"square"}),t(i,{label:"Paste",size:"xs",shape:"square"})]})};const fo=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","WithComplexControls"];export{b as Basic,u as SearchInput,g as WithBothIcons,B as WithComplexControls,T as WithLeftIcon,x as WithRightIcon,fo as __namedExportsOrder,Bo as default};
//# sourceMappingURL=TextInput.stories-cbdc2d89.js.map
