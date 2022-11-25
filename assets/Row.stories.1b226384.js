var i=Object.defineProperty;var r=(e,d)=>i(e,"name",{value:d,configurable:!0});import{B as n}from"./Box.4be97a27.js";import{T as t}from"./Text.7b863767.js";import{R as a}from"./Row.a5d13015.js";import{a as c,j as o}from"./jsx-runtime.45652db6.js";/* empty css                             */import"./atoms.css.bb66546d.js";/* empty css                              */import"./vanilla-extract-recipes-createRuntimeFn.esm.e63f122f.js";import"./iframe.c4c6278d.js";const w={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'
import { Text } from '~/components/Text'

import { Row } from './Row'

export default {
  title: 'Components/Row',
  component: Row,
} as ComponentMeta<typeof Row>

const Template: ComponentStory<typeof Row> = ({ ...args }) => (
  <Row
    borderWidth="thin"
    borderColor="borderNormal"
    borderStyle="dashed"
    {...args}
  >
    <Box background="positive" padding="2">
      <Text color="white">This component is for</Text>
    </Box>

    <Box background="negative" padding="2">
      <Text color="white">a commonly used horizontal layout,</Text>
    </Box>

    <Box background="info" padding="2">
      <Text color="white">and gives us default spacing</Text>
    </Box>

    <Box background="backgroundSecondary" padding="2">
      <Text color="textBody">to horizontally space components.</Text>
    </Box>
  </Row>
)

export const Default = Template.bind({})
`,locationsMap:{default:{startLoc:{col:45,line:13},endLoc:{col:1,line:36},startBody:{col:45,line:13},endBody:{col:1,line:36}}}}},title:"Components/Row",component:a},l=r(({...e})=>c(a,{borderWidth:"thin",borderColor:"borderNormal",borderStyle:"dashed",...e,children:[o(n,{background:"positive",padding:"2",children:o(t,{color:"white",children:"This component is for"})}),o(n,{background:"negative",padding:"2",children:o(t,{color:"white",children:"a commonly used horizontal layout,"})}),o(n,{background:"info",padding:"2",children:o(t,{color:"white",children:"and gives us default spacing"})}),o(n,{background:"backgroundSecondary",padding:"2",children:o(t,{color:"textBody",children:"to horizontally space components."})})]}),"Template"),T=l.bind({}),B=["Default"];export{T as Default,B as __namedExportsOrder,w as default};
//# sourceMappingURL=Row.stories.1b226384.js.map
