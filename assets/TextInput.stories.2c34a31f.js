var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.644b2ccd.js";import"./Avatar.11f809c8.js";import"./Badge.d9829662.js";import"./Breadcrumbs.6568a84a.js";import{B as l}from"./Button.fc9fc948.js";/* empty css                             *//* empty css                              */import"./Card.ed909fc8.js";import"./Checkbox.40352310.js";import{T as i}from"./ControlledTextInput.96f00d39.js";import"./Collapsible.5c9a9b50.js";import{j as t,a as h}from"./jsx-runtime.368e1e2b.js";import"./SearchInput.9499b2ae.js";import"./FileInput.9cae4001.js";import{I as m}from"./IconButton.c279660b.js";import"./LabelledField.6a838959.js";import"./Modal.ac13cd14.js";import"./RadioGroup.5634f799.js";import"./Scroll.17936fb4.js";import"./Select.6e939b2b.js";import"./Spinner.f1f4341a.js";import"./Switch.09de69c3.js";import"./GradientAvatar.3a828f1a.js";import"./TabbedNav.f60558fe.js";import"./Tabs.f7026033.js";import"./Tag.61e7bf0d.js";import"./Text.1e9ed5a3.js";import"./ThemeProvider.a28c5152.js";import"./TokenImage.7597557a.js";import"./Tooltip.50a072ab.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.8e3ef22f.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.e7b37ec8.js";import"./index.module.e41eb08d.js";import"./index.ab5262d5.js";import"./iframe.95d61bca.js";import"./index.module.eeb5393f.js";import"./index.module.76dff107.js";import"./index.module.5093cc33.js";import"./index.module.dd86010b.js";import"./index.8791ed57.js";import"./tslib.es6.03b483f6.js";import"./index.module.55bd9fe9.js";import"./index.module.7996bc1f.js";import"./Combination.6660856d.js";import"./index.module.54c3d7b9.js";import"./index.module.48392fa7.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.2c34a31f.js.map
