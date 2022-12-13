var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.78f458c4.js";import"./Avatar.7b29d06e.js";import"./Badge.2e3e9d25.js";import{B as l}from"./Button.a765000c.js";/* empty css                             *//* empty css                              */import"./Card.6ee72953.js";import"./Checkbox.9b075fa3.js";import{T as i}from"./ControlledTextInput.6889364d.js";import"./Collapsible.232bf591.js";import{j as t,a as h}from"./jsx-runtime.856db583.js";import"./SearchInput.5972f3dc.js";import"./FileInput.a7c55a2c.js";import{I as m}from"./IconButton.5a55e82d.js";import"./LabelledField.505df6a8.js";import"./Modal.6ac6d941.js";import"./RadioGroup.c0c996a5.js";import"./Scroll.ed3a386e.js";import"./Select.779226c1.js";import"./Spinner.ac20e714.js";import"./Switch.8429f9b3.js";import"./GradientAvatar.7d0667fa.js";import"./TabbedNav.9b6e548d.js";import"./Tabs.9594487e.js";import"./Tag.adfb12d0.js";import"./Text.88c39bc6.js";import"./ThemeProvider.76edbde4.js";import"./TokenImage.8346811a.js";import"./Tooltip.bac217c6.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.31d1f671.js";import"./atoms.css.b9e53546.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.c916579e.js";import"./index.c612c528.js";import"./iframe.3827cd0b.js";import"./index.module.72339c64.js";import"./index.module.631ad1f7.js";import"./index.module.4b66b907.js";import"./index.module.e16e41be.js";import"./index.81d85203.js";import"./tslib.es6.03b483f6.js";import"./index.module.0339cfce.js";import"./index.module.e7aac110.js";import"./Combination.5bd5d18f.js";import"./index.module.2f9c429a.js";import"./index.module.7e90fca1.js";const To={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.4d6b577c.js.map
