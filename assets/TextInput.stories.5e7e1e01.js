var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.0210adcf.js";import"./Avatar.4bf381bc.js";import"./Badge.874c6bd9.js";import"./Breadcrumbs.fb1afe36.js";import{B as l}from"./Button.eb14fc8e.js";/* empty css                             *//* empty css                              */import"./Card.52b461e5.js";import"./Checkbox.19fbf806.js";import{T as i}from"./ControlledTextInput.6ca6a738.js";import"./Collapsible.6cada8e0.js";import{j as t,a as h}from"./jsx-runtime.cbb7d416.js";import"./SearchInput.23aaf6eb.js";import"./FileInput.92561fed.js";import{I as m}from"./IconButton.74ad48d0.js";import"./LabelledField.956e97c7.js";import"./Modal.6f4558ca.js";import"./RadioGroup.8c09401f.js";import"./Scroll.a0e1178b.js";import"./Select.ab9311e5.js";import"./Spinner.6290f6c0.js";import"./Switch.afe3716d.js";import"./GradientAvatar.25758f6b.js";import"./TabbedNav.802876d3.js";import"./Tabs.1a81a119.js";import"./Tag.12f4bd26.js";import"./Text.4efcce86.js";import"./ThemeProvider.7e8354ec.js";import"./TokenImage.88011a3d.js";import"./Tooltip.2e837c9b.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.3afd75e6.js";import"./atoms.css.79225c60.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.67c01d72.js";import"./index.module.fe21a7ad.js";import"./index.50664d3a.js";import"./iframe.fb385025.js";import"./index.module.96911153.js";import"./index.module.b764ca97.js";import"./index.module.e714c392.js";import"./index.module.9bd2de52.js";import"./index.61226a14.js";import"./tslib.es6.03b483f6.js";import"./index.module.55f79b20.js";import"./index.module.231eba8b.js";import"./Combination.54252213.js";import"./index.module.2d64a653.js";import"./index.module.092e4dd6.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.5e7e1e01.js.map
