var a=Object.defineProperty;var n=(e,s)=>a(e,"name",{value:s,configurable:!0});import{B as p}from"./Box.9ad41e42.js";import"./Avatar.1aee1452.js";import"./Badge.bfbbbc10.js";import"./Breadcrumbs.dd78c505.js";import{B as l}from"./Button.d6081e13.js";/* empty css                             *//* empty css                              */import"./Card.bb4f2680.js";import"./Checkbox.469d2898.js";import{T as i}from"./ControlledTextInput.7088e9e7.js";import"./Collapsible.af08e68e.js";import{j as t,a as h}from"./jsx-runtime.45971c93.js";import"./SearchInput.cb3f7b0f.js";import"./FileInput.a1081b4a.js";import{I as m}from"./IconButton.269e030a.js";import"./LabelledField.c4180f28.js";import"./Modal.bac1e08a.js";import"./RadioGroup.9187fa4c.js";import"./Scroll.61f000f2.js";import"./Select.54bb6c1b.js";import"./Spinner.874c064e.js";import"./Switch.9b94020a.js";import"./GradientAvatar.47102075.js";import"./TabbedNav.07afd64b.js";import"./Tabs.4560f2f4.js";import"./Tag.0dabad05.js";import"./Text.843dffc6.js";import"./ThemeProvider.1c0ea9ed.js";import"./TokenImage.345bfd07.js";import"./Tooltip.ab7f3e02.js";import{I as r,g as c,b as d,c as I}from"./WarningIcon.1d3393be.js";import"./atoms.css.79225c60.js";import"./index.3f9518bc.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./Divider.689df2d4.js";import"./index.module.d5201a7f.js";import"./index.9869dfef.js";import"./iframe.c4333eae.js";import"./index.module.0024909b.js";import"./index.module.23371235.js";import"./index.module.56a290b5.js";import"./index.module.06694813.js";import"./index.0f2f649b.js";import"./tslib.es6.03b483f6.js";import"./index.module.f449d3fd.js";import"./index.module.bcbb936a.js";import"./Combination.bef07e92.js";import"./index.module.ab06e313.js";import"./index.module.7eaefdc4.js";const go={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=TextInput.stories.7f75718c.js.map
