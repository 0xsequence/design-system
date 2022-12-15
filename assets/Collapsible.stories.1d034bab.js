var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as r}from"./Text.4efcce86.js";/* empty css                             *//* empty css                              */import{C as e}from"./Collapsible.6cada8e0.js";import{a,j as p}from"./jsx-runtime.cbb7d416.js";import"./Box.0210adcf.js";import"./atoms.css.79225c60.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.fe21a7ad.js";import"./index.50664d3a.js";import"./iframe.fb385025.js";import"./index.module.e714c392.js";import"./index.module.9bd2de52.js";import"./WarningIcon.3afd75e6.js";import"./index.61226a14.js";import"./tslib.es6.03b483f6.js";const k={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.1d034bab.js.map
