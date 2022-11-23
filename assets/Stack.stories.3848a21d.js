var r=Object.defineProperty;var n=(o,t)=>r(o,"name",{value:t,configurable:!0});import{S as a}from"./Stack.5a9fa5de.js";import{j as e}from"./jsx-runtime.52cf79c1.js";import"./Box.d7d7819d.js";/* empty css                             */import"./atoms.css.cff455f3.js";import"./iframe.89df655f.js";const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stack } from './Stack'

export default {
  title: 'Components/Stack',
  component: Stack
  // argTypes: {
  //   itemCount: { type: 'number', defaultValue: 5 }
  // }
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = ({ ...args }) => (
  <Stack {...args}>
    {[...Array(5).keys()].map(idx => (
      <div key={idx}>{idx + 1}</div>
    ))}
  </Stack>
)

export const Default = Template.bind({})
Default.args = {}
`,locationsMap:{default:{startLoc:{col:47,line:13},endLoc:{col:1,line:19},startBody:{col:47,line:13},endBody:{col:1,line:19}}}}},title:"Components/Stack",component:a},c=n(({...o})=>e(a,{...o,children:[...Array(5).keys()].map(t=>e("div",{children:t+1},t))}),"Template"),p=c.bind({});p.args={};const f=["Default"];export{p as Default,f as __namedExportsOrder,S as default};
//# sourceMappingURL=Stack.stories.3848a21d.js.map
