var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as a}from"./Text.fb41b4d2.js";import{C as e}from"./Collapsible.693ef9ea.js";import{a as r,j as p}from"./jsx-runtime.58fdc09c.js";import"./Box.379a310a.js";import"./atoms.css.9060149a.js";/* empty css                              *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.8b4ad79c.js";import"./index.1593d9a1.js";import"./iframe.04194b68.js";import"./index.module.2c505ccf.js";import"./TransactionIcon.3c30b9cc.js";import"./index.c2e02aa5.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.7cf69797.js.map