var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as r}from"./Text.b8a52137.js";/* empty css                             *//* empty css                              */import{C as e}from"./Collapsible.eac4de6e.js";import{a,j as p}from"./jsx-runtime.2e08b7ec.js";import"./Box.7993a24b.js";import"./atoms.css.79225c60.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.4da1dcc7.js";import"./index.33fa010c.js";import"./iframe.ce068c36.js";import"./index.module.cd84a2ad.js";import"./index.module.5a44f47c.js";import"./WarningIcon.2814b597.js";import"./index.5343167a.js";import"./tslib.es6.03b483f6.js";const k={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.dbbf7af6.js.map
