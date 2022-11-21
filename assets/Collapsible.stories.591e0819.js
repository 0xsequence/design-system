var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as a}from"./Text.a9ff68e4.js";import{C as e}from"./Collapsible.f70983f8.js";import{a as r,j as p}from"./jsx-runtime.628831a7.js";import"./Box.daa61a90.js";/* empty css                             */import"./atoms.css.cff455f3.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.ad1a0ed7.js";import"./index.623888b1.js";import"./iframe.3833dadd.js";import"./index.module.5bbfcddb.js";import"./TransactionIcon.25297e9e.js";import"./index.55690f3e.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.591e0819.js.map
