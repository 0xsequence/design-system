import { ComponentStory, ComponentMeta } from '@storybook/react'

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
