var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.2b80f63d.js";import"./Avatar.b3a3c32c.js";import"./Badge.36d79c6f.js";import"./Breadcrumbs.e3951442.js";import{B as l}from"./Button.9c14424b.js";/* empty css                             *//* empty css                              */import"./Card.cba0207e.js";import"./Checkbox.483738bd.js";import{T as i}from"./ControlledTextInput.bb92f32a.js";import"./Collapsible.4708caf2.js";import{j as t,a as h}from"./jsx-runtime.7b8f79a5.js";import"./SearchInput.756eb456.js";import"./FileInput.7f134d57.js";import{I as m}from"./IconButton.a4b9d28c.js";import"./LabelledField.be3cc53f.js";import"./Modal.7af71a5f.js";import"./RadioGroup.d5008e73.js";import"./Scroll.303992f8.js";import"./Select.bdedd97d.js";import"./Spinner.3bb7c3d7.js";import"./Switch.23319a96.js";import"./GradientAvatar.84efa11b.js";import"./TabbedNav.684c326d.js";import"./Tabs.cc31cf61.js";import"./Tag.7dd9b523.js";import"./Text.740823a5.js";import"./ThemeProvider.28e84a20.js";import"./TokenImage.3091617e.js";import"./Tooltip.4611b86e.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.b816a64b.js";import"./atoms.css.79225c60.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.371a75a0.js";import"./index.module.b24ea735.js";import"./index.b3e6f2fc.js";import"./iframe.ab6302e5.js";import"./index.module.ef2e47c9.js";import"./index.module.00ae9362.js";import"./index.module.b27c9671.js";import"./index.module.89602cd7.js";import"./index.b7079b9e.js";import"./tslib.es6.03b483f6.js";import"./index.module.88acf63a.js";import"./index.module.48628431.js";import"./Combination.f05e1c75.js";import"./index.module.696f650e.js";import"./index.module.04a384c2.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.dd630f95.js.map
