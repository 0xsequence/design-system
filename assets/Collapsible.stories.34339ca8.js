var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as r}from"./Text.843dffc6.js";/* empty css                             *//* empty css                              */import{C as e}from"./Collapsible.af08e68e.js";import{a,j as p}from"./jsx-runtime.45971c93.js";import"./Box.9ad41e42.js";import"./atoms.css.79225c60.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.d5201a7f.js";import"./index.9869dfef.js";import"./iframe.c4333eae.js";import"./index.module.56a290b5.js";import"./index.module.06694813.js";import"./WarningIcon.1d3393be.js";import"./index.0f2f649b.js";import"./tslib.es6.03b483f6.js";const k={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
    <Text variant="normal" as="p" color="text80" key={x}>
      Item {x}
    </Text>
  )),
}
`,locationsMap:{default:{startLoc:{col:53,line:12},endLoc:{col:1,line:14},startBody:{col:53,line:12},endBody:{col:1,line:14}}}}},title:"Components/Collapsible",component:e},i=t(o=>p(e,{...o}),"Template"),m=i.bind({});m.args={label:"My Heading",children:[1,2,3,4,5].map(o=>a(r,{variant:"normal",as:"p",color:"text80",children:["Item ",o]},o))};const v=["Default"];export{m as Default,v as __namedExportsOrder,k as default};
//# sourceMappingURL=Collapsible.stories.34339ca8.js.map
