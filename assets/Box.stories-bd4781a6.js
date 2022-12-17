var r=Object.defineProperty;var t=(o,e)=>r(o,"name",{value:e,configurable:!0});import{t as s}from"./index-e125bb4a.js";import{B as n}from"./Box-0ba2098e.js";import{j as a}from"./jsx-runtime-6057fa59.js";import"./typography-f274f330.js";import"./index-9b47cd5d.js";import"./es.object.get-own-property-descriptor-a95ea412.js";/* empty css                             */import"./atoms.css-36c6db2d.js";const b={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { tokens } from '~/tokens'

import { Box } from './Box'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    padding: { control: 'select', options: Object.keys(tokens.space) },
  },
} as ComponentMeta<typeof Box>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = args => <Box {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  padding: '4',
  background: 'backgroundSecondary',
  borderRadius: 'md',
  color: 'text100',
  children: 'Hello',
}
`,locationsMap:{default:{startLoc:{col:45,line:18},endLoc:{col:70,line:18},startBody:{col:45,line:18},endBody:{col:70,line:18}}}}},title:"Components/Box",component:n,argTypes:{padding:{control:"select",options:Object.keys(s.space)}}},p=t(o=>a(n,{...o}),"Template"),c=p.bind({});c.args={padding:"4",background:"backgroundSecondary",borderRadius:"md",color:"text100",children:"Hello"};const k=["Default"];export{c as Default,k as __namedExportsOrder,b as default};
//# sourceMappingURL=Box.stories-bd4781a6.js.map
