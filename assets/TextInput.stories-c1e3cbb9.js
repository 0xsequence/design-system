var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box-189343a4.js";import"./Avatar-3fe76b7e.js";import"./Badge-6e33208c.js";import"./Breadcrumbs-8cde9abf.js";import{B as i}from"./Button-a91a0758.js";/* empty css                             *//* empty css                              */import"./Card-d70a44a9.js";import"./Checkbox-622c56a0.js";import{T as l}from"./ControlledTextInput-3294cadf.js";import"./Collapsible-8a7c614c.js";import"./SearchInput-d31460f0.js";import"./FileInput-239b02c8.js";import{I as h}from"./IconButton-e0a70fee.js";import"./Field-87e3c99c.js";import"./Modal-88211da2.js";import"./RadioGroup-adaba344.js";import"./Scroll-60cc41ca.js";import"./Select-a26d331b.js";import"./Spinner-a1e49eb6.js";import"./Switch-f9014e56.js";import"./GradientAvatar-3ca86e43.js";import"./TabbedNav-f4a8e482.js";import"./Tabs-ec343f4b.js";import"./Tag-c6207b13.js";import"./Text-58c8d0a0.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-948c157e.js";import"./Tooltip-ad22f25d.js";import{I as r,g as c,b as m,c as d}from"./WarningIcon-66e22c0e.js";import{j as t,a as I}from"./jsx-runtime-6057fa59.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-82e5de3b.js";import"./index-a2f37619.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Divider-7f4c1189.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./index.module-e55af700.js";import"./index-3d2c79c6.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-0992d81f.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./index.module-b9ae0e60.js";import"./index.module-ec83e676.js";import"./typography-f274f330.js";const Bo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories-c1e3cbb9.js.map
