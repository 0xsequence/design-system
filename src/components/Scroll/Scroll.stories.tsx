import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '../Box'
import { Text } from '../Text'

import { Scroll } from './Scroll'

export default {
  title: 'Components/Scroll',
  component: Scroll,
} as ComponentMeta<typeof Scroll>

const Template: ComponentStory<typeof Scroll> = args => (
  <Box
    style={{ width: 300, height: 200 }}
    overflow="hidden"
    borderRadius="md"
    background="backgroundSecondary"
  >
    <Scroll {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  padding: '2',
  children: (
    <>
      <Text as="h1" variant="xlarge" color="textBody">
        Title
      </Text>
      <Text as="p" variant="medium" color="textFaded">
        Description
      </Text>

      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="textBody">
        Paragraph
      </Text>
    </>
  ),
}
