var r=Object.defineProperty;var t=(o,e)=>r(o,"name",{value:e,configurable:!0});import{t as s}from"./index.6cabb9b9.js";import{B as n}from"./Box.b0cabf01.js";import{j as a}from"./jsx-runtime.02798405.js";import"./atoms.css.9060149a.js";/* empty css                              */import"./iframe.a4d5217f.js";const u={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

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
  color: 'textBody',
  children: 'Hello',
}
`,locationsMap:{default:{startLoc:{col:45,line:18},endLoc:{col:70,line:18},startBody:{col:45,line:18},endBody:{col:70,line:18}}}}},title:"Components/Box",component:n,argTypes:{padding:{control:"select",options:Object.keys(s.space)}}},p=t(o=>a(n,{...o}),"Template"),c=p.bind({});c.args={padding:"4",background:"backgroundSecondary",color:"textBody",children:"Hello"};const f=["Default"];export{c as Default,f as __namedExportsOrder,u as default};
//# sourceMappingURL=Box.stories.07b77a07.js.map
