var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as r}from"./Text-3f9ccc26.js";/* empty css                             *//* empty css                              */import{C as e}from"./Collapsible-f1d0e021.js";import{a,j as p}from"./jsx-runtime-6057fa59.js";import"./Box-28ceaece.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./atoms.css-ded810a3.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-79bb90fa.js";import"./index.module-e55af700.js";import"./WarningIcon-47731319.js";import"./index-3d2c79c6.js";import"./tslib.es6-1c0aeb2a.js";const v={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{default:{startLoc:{col:53,line:12},endLoc:{col:1,line:14},startBody:{col:53,line:12},endBody:{col:1,line:14}}}}},title:"Components/Collapsible",component:e},i=t(o=>p(e,{...o}),"Template"),m=i.bind({});m.args={label:"My Heading",children:[1,2,3,4,5].map(o=>a(r,{variant:"normal",as:"p",color:"text80",children:["Item ",o]},o))};const B=["Default"];export{m as Default,B as __namedExportsOrder,v as default};
//# sourceMappingURL=Collapsible.stories-d14881aa.js.map
