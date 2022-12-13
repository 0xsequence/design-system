var i=Object.defineProperty;var n=(t,l)=>i(t,"name",{value:l,configurable:!0});import{B as s}from"./Box.644b2ccd.js";import{T as r}from"./Text.1e9ed5a3.js";/* empty css                             *//* empty css                              */import{C as a}from"./Card.ed909fc8.js";import{j as e,a as c}from"./jsx-runtime.368e1e2b.js";import"./atoms.css.b9e53546.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.95d61bca.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { tokens } from '~/tokens'

import { Box } from '../Box'
import { Text } from '../Text'

import { Card } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = args => (
  <Card {...args}>
    <Box flexDirection="column">
      <Text variant="large" color="textBody">
        Card
      </Text>
      <Text variant="normal" color="textFaded">
        Description
      </Text>
    </Box>
  </Card>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

export const Clickable = Template.bind({})
Clickable.args = { clickable: true }

export const Disabled = Template.bind({})
Disabled.args = { clickable: true, disabled: true }

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }
`,locationsMap:{default:{startLoc:{col:46,line:17},endLoc:{col:1,line:28},startBody:{col:46,line:17},endBody:{col:1,line:28}},clickable:{startLoc:{col:46,line:17},endLoc:{col:1,line:28},startBody:{col:46,line:17},endBody:{col:1,line:28}},disabled:{startLoc:{col:46,line:17},endLoc:{col:1,line:28},startBody:{col:46,line:17},endBody:{col:1,line:28}},outlined:{startLoc:{col:46,line:17},endLoc:{col:1,line:28},startBody:{col:46,line:17},endBody:{col:1,line:28}}}}},title:"Components/Card",component:a},o=n(t=>e(a,{...t,children:c(s,{flexDirection:"column",children:[e(r,{variant:"large",color:"textBody",children:"Card"}),e(r,{variant:"normal",color:"textFaded",children:"Description"})]})}),"Template"),d=o.bind({});d.args={};const p=o.bind({});p.args={clickable:!0};const m=o.bind({});m.args={clickable:!0,disabled:!0};const u=o.bind({});u.args={outlined:!0};const h=["Default","Clickable","Disabled","Outlined"];export{p as Clickable,d as Default,m as Disabled,u as Outlined,h as __namedExportsOrder,L as default};
//# sourceMappingURL=Card.stories.8ed6941e.js.map
