var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.dfe826a6.js";import"./Avatar.405ec1f3.js";import"./Badge.e7f6e53c.js";import{B as l}from"./Button.ace1ca68.js";/* empty css                             *//* empty css                              */import"./Card.c46cd853.js";import"./Checkbox.084e05e2.js";import{T as i}from"./ControlledTextInput.cc3ab193.js";import"./Collapsible.241d9e98.js";import{j as t,a as h}from"./jsx-runtime.ddf3d684.js";import"./SearchInput.a0666db1.js";import"./FileInput.15a3eca1.js";import"./Group.84376283.js";import{I as m}from"./IconButton.c66388ad.js";import"./LabelledField.ceec57f5.js";import"./Modal.8b95ef97.js";import"./RadioGroup.35a2ce68.js";import"./Scroll.90edb6d9.js";import"./Select.11cfd943.js";import"./Spinner.e1f49c32.js";import"./Switch.9c9eedb0.js";import"./GradientAvatar.667e23f0.js";import"./TabbedNav.a492b040.js";import"./Tabs.08c2d9f4.js";import"./Tag.be6beb80.js";import"./Text.eb2c0c15.js";import"./ThemeProvider.ba86584d.js";import"./TokenImage.16824bd0.js";import"./Tooltip.98ad7cb3.js";import{E as r,g as c,b as d,c as I}from"./WarningIcon.093f6a99.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.c376906f.js";import"./index.b8e9cd29.js";import"./iframe.396223e0.js";import"./index.module.4ee151e5.js";import"./index.module.4c847f10.js";import"./index.module.c78da923.js";import"./index.module.11e5f41a.js";import"./index.955ad1b3.js";import"./tslib.es6.03b483f6.js";import"./index.module.73e43dfa.js";import"./index.module.8178ac87.js";import"./Combination.2bd813a8.js";import"./index.module.ed15664e.js";import"./index.module.97d83deb.js";const xo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.9b41646b.js.map
