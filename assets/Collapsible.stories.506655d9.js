var l=Object.defineProperty;var t=(o,n)=>l(o,"name",{value:n,configurable:!0});import{T as r}from"./Text.d4cb5076.js";import{C as e}from"./Collapsible.bad3df77.js";import{a,j as p}from"./jsx-runtime.bef1881e.js";import"./Box.c689a501.js";/* empty css                             */import"./atoms.css.b06098ab.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.325ecc51.js";import"./index.d4817ac9.js";import"./iframe.5b62c891.js";import"./index.module.14995526.js";import"./index.module.b331d1e2.js";import"./WarningIcon.b17b104e.js";import"./index.6de44805.js";import"./tslib.es6.03b483f6.js";const _={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Collapsible.stories.506655d9.js.map
