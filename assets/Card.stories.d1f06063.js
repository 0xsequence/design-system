var i=Object.defineProperty;var n=(t,a)=>i(t,"name",{value:a,configurable:!0});import{B as s}from"./Box.b01802aa.js";import{T as r}from"./Text.31c5c98c.js";/* empty css                             *//* empty css                              */import{C as l}from"./Card.4da44259.js";import{j as e,a as c}from"./jsx-runtime.a2cf14b6.js";import"./atoms.css.b2798663.js";import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.bf1e0a8a.js";const L={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
      <Text variant="large" color="text100">
        Card
      </Text>
      <Text variant="normal" color="text50">
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
`,locationsMap:{default:{startLoc:{col:46,line:17},endLoc:{col:1,line:28},startBody:{col:46,line:17},endBody:{col:1,line:28}},clickable:{startLoc:{col:46,line:17},endLoc:{col:1,line:28},startBody:{col:46,line:17},endBody:{col:1,line:28}},disabled:{startLoc:{col:46,line:17},endLoc:{col:1,line:28},startBody:{col:46,line:17},endBody:{col:1,line:28}},outlined:{startLoc:{col:46,line:17},endLoc:{col:1,line:28},startBody:{col:46,line:17},endBody:{col:1,line:28}}}}},title:"Components/Card",component:l},o=n(t=>e(l,{...t,children:c(s,{flexDirection:"column",children:[e(r,{variant:"large",color:"text100",children:"Card"}),e(r,{variant:"normal",color:"text50",children:"Description"})]})}),"Template"),d=o.bind({});d.args={};const p=o.bind({});p.args={clickable:!0};const m=o.bind({});m.args={clickable:!0,disabled:!0};const u=o.bind({});u.args={outlined:!0};const h=["Default","Clickable","Disabled","Outlined"];export{p as Clickable,d as Default,m as Disabled,u as Outlined,h as __namedExportsOrder,L as default};
//# sourceMappingURL=Card.stories.d1f06063.js.map
