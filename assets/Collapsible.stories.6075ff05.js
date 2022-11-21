var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as a}from"./Text.3d121d62.js";import{C as e}from"./Collapsible.c64f0ed1.js";import{a as r,j as p}from"./jsx-runtime.fc7d6443.js";import"./Box.be6d0854.js";import"./atoms.css.06f63def.js";/* empty css                              *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.330c993c.js";import"./index.0bba1f93.js";import"./iframe.80592374.js";import"./index.module.8772b948.js";import"./TransactionIcon.4c8dd193.js";import"./index.6ddfeeb3.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{default:{startLoc:{col:53,line:12},endLoc:{col:1,line:14},startBody:{col:53,line:12},endBody:{col:1,line:14}}}}},title:"Components/Collapsible",component:e},i=t(o=>p(e,{...o}),"Template"),s=i.bind({});s.args={label:"My Heading",children:[1,2,3,4,5].map(o=>r(a,{variant:"normal",as:"p",color:"textBody",children:["Item ",o]},o))};const S=["Default"];export{s as Default,S as __namedExportsOrder,j as default};
//# sourceMappingURL=Collapsible.stories.6075ff05.js.map
