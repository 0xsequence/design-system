var d=Object.defineProperty;var r=(e,c)=>d(e,"name",{value:c,configurable:!0});import{B as n}from"./Box.4be97a27.js";import{T as t}from"./Text.7b863767.js";import{S as a}from"./Stack.028cd241.js";import{a as i,j as o}from"./jsx-runtime.45652db6.js";/* empty css                             */import"./atoms.css.bb66546d.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.c4c6278d.js";const y={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'
import { Text } from '~/components/Text'

import { Stack } from './Stack'

export default {
  title: 'Components/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = ({ ...args }) => (
  <Stack
    borderWidth="thin"
    borderColor="borderNormal"
    borderStyle="dashed"
    {...args}
  >
    <Box background="positive" padding="2">
      <Text color="white">This component is for</Text>
    </Box>

    <Box background="negative" padding="2">
      <Text color="white">a commonly used vertical layout,</Text>
    </Box>

    <Box background="info" padding="2">
      <Text color="white">and gives us default spacing</Text>
    </Box>

    <Box background="backgroundSecondary" padding="2">
      <Text color="textBody">to vertically space components.</Text>
    </Box>
  </Stack>
)

export const Default = Template.bind({})
`,locationsMap:{default:{startLoc:{col:47,line:13},endLoc:{col:1,line:36},startBody:{col:47,line:13},endBody:{col:1,line:36}}}}},title:"Components/Stack",component:a},l=r(({...e})=>i(a,{borderWidth:"thin",borderColor:"borderNormal",borderStyle:"dashed",...e,children:[o(n,{background:"positive",padding:"2",children:o(t,{color:"white",children:"This component is for"})}),o(n,{background:"negative",padding:"2",children:o(t,{color:"white",children:"a commonly used vertical layout,"})}),o(n,{background:"info",padding:"2",children:o(t,{color:"white",children:"and gives us default spacing"})}),o(n,{background:"backgroundSecondary",padding:"2",children:o(t,{color:"textBody",children:"to vertically space components."})})]}),"Template"),S=l.bind({}),T=["Default"];export{S as Default,T as __namedExportsOrder,y as default};
//# sourceMappingURL=Stack.stories.3bd24395.js.map
