var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.110a0077.js";import"./Avatar.b1ae7c11.js";import"./Badge.cdec8d7e.js";import"./Breadcrumbs.b77f005c.js";import{B as l}from"./Button.8a0256bb.js";/* empty css                             *//* empty css                              */import"./Card.800931e3.js";import"./Checkbox.565add66.js";import{T as i}from"./ControlledTextInput.c123e873.js";import"./Collapsible.cfa72cc6.js";import{j as t,a as h}from"./jsx-runtime.c3c6753e.js";import"./SearchInput.0dfe605b.js";import"./FileInput.c7f20313.js";import{I as m}from"./IconButton.a931f7a7.js";import"./LabelledField.f04f0354.js";import"./Modal.83f476fa.js";import"./RadioGroup.c0278520.js";import"./Scroll.a94b724a.js";import"./Select.766ba361.js";import"./Spinner.0209535b.js";import"./Switch.e23d5f33.js";import"./GradientAvatar.0eeb240b.js";import"./TabbedNav.d72d4a26.js";import"./Tabs.3e95fac8.js";import"./Tag.d27782f4.js";import"./Text.38c28920.js";import"./ThemeProvider.b9888e27.js";import"./TokenImage.38a2d24c.js";import"./Tooltip.5819cace.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.b6e94604.js";import"./atoms.css.79225c60.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.77c107ba.js";import"./index.module.e4b8e2b0.js";import"./index.213be3e2.js";import"./iframe.df35f0ab.js";import"./index.module.07e8e295.js";import"./index.module.eb77254b.js";import"./index.module.9fd593a8.js";import"./index.module.3279dc18.js";import"./index.f62c5755.js";import"./tslib.es6.03b483f6.js";import"./index.module.9d19065e.js";import"./index.module.f49a903b.js";import"./Combination.e809eadb.js";import"./index.module.40f6d64e.js";import"./index.module.444be7a0.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.62fdc4a3.js.map
