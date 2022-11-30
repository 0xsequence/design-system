var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as r}from"./Text.f66da417.js";import{C as e}from"./Collapsible.12b5846e.js";import{a,j as p}from"./jsx-runtime.08aeaa9a.js";import"./Box.fc9625ad.js";/* empty css                             */import"./atoms.css.b06098ab.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.d71f06db.js";import"./index.37a7b8f5.js";import"./iframe.879686e0.js";import"./index.module.3e6cd5bc.js";import"./index.module.2edb3662.js";import"./WarningIcon.1d738e58.js";import"./index.e4b53d4c.js";import"./tslib.es6.03b483f6.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.c4d57ec5.js.map
