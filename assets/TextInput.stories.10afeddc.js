var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.7993a24b.js";import"./Avatar.32a088db.js";import"./Badge.f552ecea.js";import"./Breadcrumbs.ed42258b.js";import{B as l}from"./Button.03623ddf.js";/* empty css                             *//* empty css                              */import"./Card.f808ade0.js";import"./Checkbox.66f99bcb.js";import{T as i}from"./ControlledTextInput.80c5a6a0.js";import"./Collapsible.eac4de6e.js";import{j as t,a as h}from"./jsx-runtime.2e08b7ec.js";import"./SearchInput.e288f891.js";import"./FileInput.7f87f2bc.js";import{I as m}from"./IconButton.cebf68c5.js";import"./LabelledField.5bdaf3e2.js";import"./Modal.26953ce9.js";import"./RadioGroup.33ae179f.js";import"./Scroll.5349ee68.js";import"./Select.65882ee6.js";import"./Spinner.b67e2557.js";import"./Switch.0aca8d59.js";import"./GradientAvatar.eacfc4b2.js";import"./TabbedNav.b47bb55f.js";import"./Tabs.3bcc8b94.js";import"./Tag.d6aad7bc.js";import"./Text.b8a52137.js";import"./ThemeProvider.f80a1a69.js";import"./TokenImage.d0700fc0.js";import"./Tooltip.a8875091.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.2814b597.js";import"./atoms.css.79225c60.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.62583409.js";import"./index.module.4da1dcc7.js";import"./index.33fa010c.js";import"./iframe.ce068c36.js";import"./index.module.2f2e5fee.js";import"./index.module.b736bcb2.js";import"./index.module.cd84a2ad.js";import"./index.module.5a44f47c.js";import"./index.5343167a.js";import"./tslib.es6.03b483f6.js";import"./index.module.abd778ee.js";import"./index.module.9eb42a43.js";import"./Combination.926eaf74.js";import"./index.module.88c8ce49.js";import"./index.module.3bc24312.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.10afeddc.js.map
