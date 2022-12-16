var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box-be3174e1.js";import"./Avatar-45a584f4.js";import"./Badge-8fbb0543.js";import"./Breadcrumbs-00a753e5.js";import{B as l}from"./Button-a1cb23ed.js";/* empty css                             *//* empty css                              */import"./Card-56a95fc0.js";import"./Checkbox-7472e12a.js";import{T as i}from"./ControlledTextInput-e7f98e21.js";import"./Collapsible-3a77b2a9.js";import{j as t,a as h}from"./jsx-runtime-6057fa59.js";import"./SearchInput-e4b96eb5.js";import"./FileInput-12f3d9fb.js";import{I as m}from"./IconButton-3aba5f0c.js";import"./LabelledField-9041a5a7.js";import"./Modal-cd92944c.js";import"./RadioGroup-62161d37.js";import"./Scroll-d80acf71.js";import"./Select-1b480989.js";import"./Spinner-37b1c3b0.js";import"./Switch-f9014e56.js";import"./GradientAvatar-382793ac.js";import"./TabbedNav-cfcc16e5.js";import"./Tabs-b9c3ca9b.js";import"./Tag-3a174272.js";import"./Text-e9f661d3.js";import"./ThemeProvider-9f1c5a1a.js";import"./TokenImage-64ba7fb0.js";import"./Tooltip-823deca3.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon-fee4c69b.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-b51cbbce.js";import"./index-a2f37619.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./Divider-69751524.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-4b1ee413.js";import"./index.module-adb0a49a.js";import"./index.module-79bb90fa.js";import"./index.module-e55af700.js";import"./index-3d2c79c6.js";import"./tslib.es6-1c0aeb2a.js";import"./index.module-0992d81f.js";import"./index.module-ef1f1d8d.js";import"./Combination-e55b63e8.js";import"./index.module-b9ae0e60.js";import"./index.module-ec83e676.js";const uo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{basic:{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-left-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-right-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-both-icons":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"search-input":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-complex-controls":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}}}}},title:"Forms/TextInput",component:i},o=n(e=>t(i,{id:"myInput",...e}),"Template"),b=o.bind({});b.args={label:"This the label",placeholder:"This is the placeholder",labelLocation:"top"};const T=o.bind({});T.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r};const x=o.bind({});x.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:c};const g=o.bind({});g.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r,rightIcon:c};const u=o.bind({});u.args={placeholder:"Search for coins or collectibles",leftIcon:d,controls:t(m,{icon:I,size:"xs"})};const B=o.bind({});B.args={label:"This the label",placeholder:"This is the placeholder",controls:h(p,{gap:"2",children:[t(l,{label:"Max",size:"xs",shape:"square"}),t(l,{label:"Paste",size:"xs",shape:"square"})]})};const Bo=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","WithComplexControls"];export{b as Basic,u as SearchInput,g as WithBothIcons,B as WithComplexControls,T as WithLeftIcon,x as WithRightIcon,Bo as __namedExportsOrder,uo as default};
//# sourceMappingURL=TextInput.stories-8af86be1.js.map
