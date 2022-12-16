var l=Object.defineProperty;var o=(t,a)=>l(t,"name",{value:a,configurable:!0});import{C as s}from"./Card.f808ade0.js";import{T as i}from"./Text.b8a52137.js";/* empty css                             *//* empty css                              */import{T as r}from"./Tabs.3bcc8b94.js";import{j as n}from"./jsx-runtime.2e08b7ec.js";import"./Box.7993a24b.js";import"./atoms.css.79225c60.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./index.module.4da1dcc7.js";import"./index.33fa010c.js";import"./iframe.ce068c36.js";import"./index.module.88c8ce49.js";import"./index.module.abd778ee.js";import"./index.module.5a44f47c.js";import"./index.module.cd84a2ad.js";const j={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
//# sourceMappingURL=Tabs.stories.db54712a.js.map
