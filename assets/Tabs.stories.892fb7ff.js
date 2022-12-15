var l=Object.defineProperty;var o=(t,a)=>l(t,"name",{value:a,configurable:!0});import{C as s}from"./Card.bb4f2680.js";import{T as i}from"./Text.843dffc6.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tabs.4560f2f4.js";import{j as n}from"./jsx-runtime.45971c93.js";import"./Box.9ad41e42.js";import"./atoms.css.79225c60.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.d5201a7f.js";import"./index.9869dfef.js";import"./iframe.c4333eae.js";import"./index.module.ab06e313.js";import"./index.module.f449d3fd.js";import"./index.module.06694813.js";import"./index.module.56a290b5.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '../Card'
import { Text } from '../Text'

import { Tabs } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => {
  return <Tabs {...args} />
}

const Content = ({ children }: any) => (
  <Card marginTop="4">
    <Text variant="normal" color="text100">
      {children}
    </Text>
  </Card>
)

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'coins',
  tabs: [
    {
      value: 'coins',
      label: 'Coins',
      content: <Content>Coins</Content>,
    },
    {
      value: 'collectibles',
      label: 'Collectibles',
      content: <Content>Collectibles</Content>,
    },
    {
      value: 'other',
      label: 'Other',
      content: <Content>Other</Content>,
    },
  ],
}
`,locationsMap:{default:{startLoc:{col:46,line:13},endLoc:{col:1,line:15},startBody:{col:46,line:13},endBody:{col:1,line:15}}}}},title:"Components/Tabs",component:r},c=o(t=>n(r,{...t}),"Template"),e=o(({children:t})=>n(s,{marginTop:"4",children:n(i,{variant:"normal",color:"text100",children:t})}),"Content"),m=c.bind({});m.args={defaultValue:"coins",tabs:[{value:"coins",label:"Coins",content:n(e,{children:"Coins"})},{value:"collectibles",label:"Collectibles",content:n(e,{children:"Collectibles"})},{value:"other",label:"Other",content:n(e,{children:"Other"})}]};const B=["Default"];export{m as Default,B as __namedExportsOrder,j as default};
//# sourceMappingURL=Tabs.stories.892fb7ff.js.map
