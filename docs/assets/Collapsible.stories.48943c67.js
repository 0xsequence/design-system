var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as a}from"./Text.8d02ece9.js";import{C as e}from"./Collapsible.f999fec0.js";import{a as r,j as p}from"./jsx-runtime.91a17a4d.js";import"./Box.f52b9a27.js";import"./atoms.css.9060149a.js";/* empty css                              *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.6a94d229.js";import"./index.68078f7f.js";import"./iframe.68c65bad.js";import"./index.module.f82eba39.js";import"./TransactionIcon.99f6f586.js";import"./index.1c670288.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.48943c67.js.map
