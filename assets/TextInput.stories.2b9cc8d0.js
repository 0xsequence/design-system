var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.649ea987.js";import"./Avatar.b58a6b3e.js";import"./Badge.6b841c6b.js";import{B as l}from"./Button.469890ea.js";/* empty css                             *//* empty css                              */import"./Card.88ba39a1.js";import"./Checkbox.d68eef7c.js";import{T as i}from"./ControlledTextInput.2eb7ade8.js";import"./Collapsible.d9f08312.js";import{j as t,a as h}from"./jsx-runtime.d956131b.js";import"./SearchInput.2a0374b9.js";import"./FileInput.266e732c.js";import"./Group.87ab25eb.js";import{I as m}from"./IconButton.291853ce.js";import"./LabelledField.6f15f01e.js";import"./Modal.e203b3e6.js";import"./RadioGroup.f9a35d22.js";import"./Scroll.d6cd442a.js";import"./Select.fb67ceed.js";import"./Spinner.b1348adb.js";import"./Switch.f51174cb.js";import"./GradientAvatar.0f9a415c.js";import"./TabbedNav.4dffb431.js";import"./Tabs.852ac566.js";import"./Tag.1e4ef6af.js";import"./Text.0706b0ed.js";import"./ThemeProvider.5a69aedc.js";import"./TokenImage.2acb29bd.js";import"./Tooltip.bfce0345.js";import{E as r,g as c,b as d,c as I}from"./WarningIcon.7b7426ad.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.253d4222.js";import"./index.ef9a8d89.js";import"./iframe.fc647b85.js";import"./index.module.f1e88f67.js";import"./index.module.3b1b639c.js";import"./index.module.683b7e54.js";import"./index.module.f296c431.js";import"./index.5362fada.js";import"./tslib.es6.03b483f6.js";import"./index.module.6684dd0b.js";import"./index.module.9cfa04ba.js";import"./Combination.dcb6969c.js";import"./index.module.65ee287e.js";import"./index.module.f3962b84.js";const xo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{basic:{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-left-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-right-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-both-icons":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"search-input":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-complex-controls":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}}}}},title:"Forms/TextInput",component:i},o=n(e=>t(i,{id:"myInput",...e}),"Template"),b=o.bind({});b.args={label:"This the label",placeholder:"This is the placeholder",labelLocation:"top"};const T=o.bind({});T.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r};const x=o.bind({});x.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:c};const g=o.bind({});g.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r,rightIcon:c};const u=o.bind({});u.args={placeholder:"Search for coins or collectibles",leftIcon:d,controls:t(m,{icon:I,size:"xs"})};const B=o.bind({});B.args={label:"This the label",placeholder:"This is the placeholder",controls:h(p,{gap:"2",children:[t(l,{label:"Max",size:"xs",shape:"square"}),t(l,{label:"Paste",size:"xs",shape:"square"})]})};const go=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","WithComplexControls"];export{b as Basic,u as SearchInput,g as WithBothIcons,B as WithComplexControls,T as WithLeftIcon,x as WithRightIcon,go as __namedExportsOrder,xo as default};
//# sourceMappingURL=TextInput.stories.2b9cc8d0.js.map
