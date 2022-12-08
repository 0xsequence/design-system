var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as r}from"./Text.eb2c0c15.js";/* empty css                             *//* empty css                              */import{C as e}from"./Collapsible.241d9e98.js";import{a,j as p}from"./jsx-runtime.ddf3d684.js";import"./Box.dfe826a6.js";import"./atoms.css.b9e53546.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.c376906f.js";import"./index.b8e9cd29.js";import"./iframe.396223e0.js";import"./index.module.c78da923.js";import"./index.module.11e5f41a.js";import"./WarningIcon.093f6a99.js";import"./index.955ad1b3.js";import"./tslib.es6.03b483f6.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from '../Text'

import { Collapsible } from './Collapsible'

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
} as ComponentMeta<typeof Collapsible>

const Template: ComponentStory<typeof Collapsible> = args => (
  <Collapsible {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'My Heading',
  children: [1, 2, 3, 4, 5].map(x => (
    <Text variant="normal" as="p" color="textBody" key={x}>
      Item {x}
    </Text>
  )),
}
`,locationsMap:{default:{startLoc:{col:53,line:12},endLoc:{col:1,line:14},startBody:{col:53,line:12},endBody:{col:1,line:14}}}}},title:"Components/Collapsible",component:e},i=t(o=>p(e,{...o}),"Template"),m=i.bind({});m.args={label:"My Heading",children:[1,2,3,4,5].map(o=>a(r,{variant:"normal",as:"p",color:"textBody",children:["Item ",o]},o))};const k=["Default"];export{m as Default,k as __namedExportsOrder,_ as default};
//# sourceMappingURL=Collapsible.stories.2b4a9b26.js.map
