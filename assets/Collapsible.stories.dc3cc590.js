var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as r}from"./Text.b7f24ee0.js";import{C as e}from"./Collapsible.9adacd1a.js";import{a,j as p}from"./jsx-runtime.e9e872a3.js";import"./Box.329586f8.js";/* empty css                             */import"./atoms.css.b06098ab.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.1e6815e9.js";import"./index.2b30b5c3.js";import"./iframe.5afd4e53.js";import"./index.module.42c60f9b.js";import"./index.module.1f8be29f.js";import"./WarningIcon.8d5b9087.js";import"./index.cdafd52a.js";import"./tslib.es6.03b483f6.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.dc3cc590.js.map
