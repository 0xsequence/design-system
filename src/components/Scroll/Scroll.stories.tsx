import { StoryFn, Meta } from '@storybook/react'

import { Box } from '../Box'
import { Text } from '../Text'

import { Scroll } from './Scroll'

export default {
  title: 'Components/Scroll',
  component: Scroll,
} as Meta<typeof Scroll>

const Template: StoryFn<typeof Scroll> = args => (
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
      <Text as="h1" variant="xlarge" color="text100">
        Title
      </Text>
      <Text as="p" variant="medium" color="text50">
        Description
      </Text>

      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
      <Text as="p" variant="normal" color="text100">
        Paragraph
      </Text>
    </>
  ),
}
