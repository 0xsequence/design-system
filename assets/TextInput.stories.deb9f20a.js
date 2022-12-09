var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.2b9ff5ae.js";import"./Avatar.ff2434ff.js";import"./Badge.508ac486.js";import{B as l}from"./Button.ff9d774f.js";/* empty css                             *//* empty css                              */import"./Card.b811cd97.js";import"./Checkbox.e0fe6c6f.js";import{T as i}from"./ControlledTextInput.802ab5e8.js";import"./Collapsible.a62a4a6b.js";import{j as t,a as h}from"./jsx-runtime.734c2008.js";import"./SearchInput.3038db2a.js";import"./FileInput.51bb759d.js";import"./Group.217a065a.js";import{I as m}from"./IconButton.e82737de.js";import"./LabelledField.08d7a2fa.js";import"./Modal.e298df46.js";import"./RadioGroup.0bb130f6.js";import"./Scroll.474153ef.js";import"./Select.d3619cfc.js";import"./Spinner.29fe2907.js";import"./Switch.a4212ddc.js";import"./GradientAvatar.1eea851e.js";import"./TabbedNav.3acf8891.js";import"./Tabs.0e841761.js";import"./Tag.981305fe.js";import"./Text.f3eaed8d.js";import"./ThemeProvider.c5f24e36.js";import"./TokenImage.5b960eaa.js";import"./Tooltip.07c683d2.js";import{E as r,g as c,b as d,c as I}from"./WarningIcon.1aafeee7.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.f7a4c1f0.js";import"./index.ce4cb835.js";import"./iframe.f3215ac1.js";import"./index.module.2093c781.js";import"./index.module.44d4a191.js";import"./index.module.cee83191.js";import"./index.module.bbafff7d.js";import"./index.af8b4432.js";import"./tslib.es6.03b483f6.js";import"./index.module.d7117dae.js";import"./index.module.b598f66c.js";import"./Combination.b1fca67e.js";import"./index.module.5bc619ca.js";import"./index.module.f038e62d.js";const xo={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.deb9f20a.js.map
