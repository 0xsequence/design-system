var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.decd8f5e.js";import"./Avatar.c9861b4e.js";import"./Badge.d1ea14a6.js";import{B as l}from"./Button.68104d9c.js";/* empty css                             *//* empty css                              */import"./Card.a26876ec.js";import"./Checkbox.6dcc8aa0.js";import{T as i}from"./ControlledTextInput.098a7a2c.js";import"./Collapsible.103dd28e.js";import{j as t,a as h}from"./jsx-runtime.528c4313.js";import"./SearchInput.2399f8f8.js";import"./FileInput.50336291.js";import"./Group.774414ca.js";import{I as m}from"./IconButton.61deb511.js";import"./LabelledField.12b681d6.js";import"./Modal.b37ca683.js";import"./RadioGroup.96cba4d8.js";import"./Scroll.c6db558e.js";import"./Select.7adf8b3a.js";import"./Spinner.653f5c2c.js";import"./Switch.61036d9f.js";import"./TabbedNav.6e5b4606.js";import"./Tabs.d9178b82.js";import"./Tag.0f1a67ff.js";import"./Text.4ff57f0a.js";import"./ThemeProvider.87da5928.js";import"./TokenImage.26ae5925.js";import"./Tooltip.53ff44c6.js";import{E as r,g as c,b as d,c as I}from"./WarningIcon.f0aeff3f.js";import"./atoms.css.66ddf8d3.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.c7a34397.js";import"./index.265b039e.js";import"./iframe.45b4ed18.js";import"./index.module.5b0a4625.js";import"./index.module.18d38814.js";import"./index.module.20fd2667.js";import"./index.module.34ca61e2.js";import"./index.35209c55.js";import"./tslib.es6.03b483f6.js";import"./index.module.6d6f6c8c.js";import"./index.module.101a538e.js";import"./Combination.9ce1653d.js";import"./index.module.0493d929.js";import"./index.module.78fe6527.js";const To={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{basic:{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-left-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-right-icon":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-both-icons":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"search-input":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}},"with-complex-controls":{startLoc:{col:51,line:13},endLoc:{col:1,line:15},startBody:{col:51,line:13},endBody:{col:1,line:15}}}}},title:"Forms/TextInput",component:i},o=n(e=>t(i,{id:"myInput",...e}),"Template"),b=o.bind({});b.args={label:"This the label",placeholder:"This is the placeholder",labelLocation:"top"};const T=o.bind({});T.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r};const x=o.bind({});x.args={label:"This the label",placeholder:"This is the placeholder",rightIcon:c};const g=o.bind({});g.args={label:"This the label",placeholder:"This is the placeholder",leftIcon:r,rightIcon:c};const u=o.bind({});u.args={placeholder:"Search for coins or collectibles",leftIcon:d,controls:t(m,{icon:I,size:"xs"})};const B=o.bind({});B.args={label:"This the label",placeholder:"This is the placeholder",controls:h(p,{gap:"2",children:[t(l,{label:"Max",size:"xs",shape:"square"}),t(l,{label:"Paste",size:"xs",shape:"square"})]})};const xo=["Basic","WithLeftIcon","WithRightIcon","WithBothIcons","SearchInput","WithComplexControls"];export{b as Basic,u as SearchInput,g as WithBothIcons,B as WithComplexControls,T as WithLeftIcon,x as WithRightIcon,xo as __namedExportsOrder,To as default};
//# sourceMappingURL=TextInput.stories.d4f4d470.js.map
