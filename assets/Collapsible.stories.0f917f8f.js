var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as a}from"./Text.8f428060.js";import{C as e}from"./Collapsible.9567f6b6.js";import{a as r,j as p}from"./jsx-runtime.183293f6.js";import"./Box.84a3e293.js";import"./atoms.css.992cbf41.js";/* empty css                              *//* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.448a058f.js";import"./index.bfd41fea.js";import"./iframe.a71886b8.js";import"./index.module.baf7d693.js";import"./TransactionIcon.4bd20bcf.js";import"./index.65384bca.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.0f917f8f.js.map
