var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.e9b6b9f2.js";import"./Avatar.f428b69a.js";import"./Badge.4de419b0.js";import"./Breadcrumbs.ef3872c5.js";import{B as l}from"./Button.af590098.js";/* empty css                             *//* empty css                              */import"./Card.98b3af42.js";import"./Checkbox.bdff6308.js";import{T as i}from"./ControlledTextInput.440ea833.js";import"./Collapsible.2825ff9f.js";import{j as t,a as h}from"./jsx-runtime.15708ae5.js";import"./SearchInput.ca5f21c1.js";import"./FileInput.48798610.js";import{I as m}from"./IconButton.34f99732.js";import"./LabelledField.700d0e36.js";import"./Modal.78022925.js";import"./RadioGroup.0a39990e.js";import"./Scroll.175737a6.js";import"./Select.1aa02769.js";import"./Spinner.c618f938.js";import"./Switch.98c6b55f.js";import"./GradientAvatar.62b3d2b0.js";import"./TabbedNav.e8457ea4.js";import"./Tabs.222ccc7b.js";import"./Tag.ca1a74cb.js";import"./Text.dfb4198d.js";import"./ThemeProvider.e6da5c98.js";import"./TokenImage.b944c64b.js";import"./Tooltip.0e32f8d8.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.895b46dc.js";import"./atoms.css.79225c60.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.0578f522.js";import"./index.module.e77e1728.js";import"./index.884842a8.js";import"./iframe.b6bbbd50.js";import"./index.module.a12f205a.js";import"./index.module.72578efb.js";import"./index.module.ba5cf2c9.js";import"./index.module.1680d151.js";import"./index.8ff64368.js";import"./tslib.es6.03b483f6.js";import"./index.module.0d15c4a2.js";import"./index.module.11f4ad16.js";import"./Combination.9b989680.js";import"./index.module.5e4e66bc.js";import"./index.module.1faa5b92.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.43e6b4d8.js.map
