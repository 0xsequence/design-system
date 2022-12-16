var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box-28ceaece.js";import"./Avatar-5ed424b6.js";import"./Badge-f35e4615.js";import"./Breadcrumbs-8067f398.js";import{B as i}from"./Button-05331ee3.js";/* empty css                             *//* empty css                              */import"./Card-649802ed.js";import"./Checkbox-ada1f7fe.js";import{T as l}from"./ControlledTextInput-351a54ac.js";import"./Collapsible-f1d0e021.js";import{j as t,a as h}from"./jsx-runtime-6057fa59.js";import"./SearchInput-c3d25741.js";import"./FileInput-120642b3.js";import{I as m}from"./IconButton-c9f33e54.js";import"./LabelledField-36d27b5b.js";import"./Modal-d8a31a53.js";import"./RadioGroup-d0579348.js";import"./Scroll-35ead0c8.js";import"./Select-146db690.js";import"./Spinner-93117a53.js";import"./Switch-f9014e56.js";import"./GradientAvatar-74e0e086.js";import"./TabbedNav-afe61283.js";import"./Tabs-70bf48f7.js";import"./Tag-e62d9d39.js";import"./Text-3f9ccc26.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-71f7e978.js";import"./Tooltip-376be546.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon-47731319.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-ded810a3.js";import"./index-a2f37619.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Divider-f76e7f02.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./index.module-e55af700.js";import"./index-3d2c79c6.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-0992d81f.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./index.module-b9ae0e60.js";import"./index.module-ec83e676.js";const uo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{basic:{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-left-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-right-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-both-icons":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"search-input":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-complex-controls":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}}}}},title:"Forms/TextInput",component:l},o=n(e=>t(l,{id:"myInput",...e}),"Template"),b=o.bind({});b.args={label:"This the label",description:"This is the description",placeholder:"This is the placeholder",labelLocation:"top"};const T=o.bind({});T.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r};const x=o.bind({});x.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:c};const g=o.bind({});g.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r,rightIcon:c};const u=o.bind({});u.args={placeholder:"Search for coins or collectibles",leftIcon:d,controls:t(m,{icon:I,size:"xs"})};const B=o.bind({});B.args={label:"This the label",placeholder:"This is the placeholder",controls:h(p,{gap:"2",children:[t(i,{label:"Max",size:"xs",shape:"square"}),t(i,{label:"Paste",size:"xs",shape:"square"})]})};const Bo=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","WithComplexControls"];export{b as Basic,u as SearchInput,g as WithBothIcons,B as WithComplexControls,T as WithLeftIcon,x as WithRightIcon,Bo as __namedExportsOrder,uo as default};
//# sourceMappingURL=TextInput.stories-6a9a835a.js.map
