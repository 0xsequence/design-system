var l=Object.defineProperty;var o=(t,a)=>l(t,"name",{value:a,configurable:!0});import{C as s}from"./Card-eff102f4.js";import{T as i}from"./Text-cce84919.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tabs-bb4c7d5b.js";import{j as n}from"./jsx-runtime-6057fa59.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";import"./Box-51f65dd6.js";import"./atoms.css-36c6db2d.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-1de2ed83.js";import"./typography-f274f330.js";import"./index.module-ab67e808.js";import"./index-7bfbb1c9.js";import"./index.module-b9ae0e60.js";import"./index.module-0992d81f.js";import"./index.module-e55af700.js";import"./index.module-79bb90fa.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
`,locationsMap:{default:{startLoc:{col:46,line:13},endLoc:{col:1,line:15},startBody:{col:46,line:13},endBody:{col:1,line:15}}}}},title:"Components/Tabs",component:r},m=o(t=>n(r,{...t}),"Template"),e=o(({children:t})=>n(s,{marginTop:"4",children:n(i,{variant:"normal",color:"text100",children:t})}),"Content"),c=m.bind({});c.args={defaultValue:"coins",tabs:[{value:"coins",label:"Coins",content:n(e,{children:"Coins"})},{value:"collectibles",label:"Collectibles",content:n(e,{children:"Collectibles"})},{value:"other",label:"Other",content:n(e,{children:"Other"})}]};const V=["Default"];export{c as Default,V as __namedExportsOrder,L as default};
//# sourceMappingURL=Tabs.stories-58c58174.js.map