import { StoryObj, Meta } from '@storybook/react'

import { Box } from '~/components/Box'
import { Text } from '~/components/Text'

import { Card } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <>
        <Box flexDirection="column">
          <Text variant="large" color="text100">
            Card
          </Text>
          <Text variant="normal" color="text50">
            Description
          </Text>
        </Box>
      </>
    ),
  },
}
export const Clickable: Story = {
  args: {
    clickable: true,
    children: (
      <>
        <Box flexDirection="column">
          <Text variant="large" color="text100">
            Card
          </Text>
          <Text variant="normal" color="text50">
            Description
          </Text>
        </Box>
      </>
    ),
  },
}
export const Disabled: Story = {
  args: {
    clickable: true,
    disabled: true,
    children: (
      <>
        <Box flexDirection="column">
          <Text variant="large" color="text100">
            Card
          </Text>
          <Text variant="normal" color="text50">
            Description
          </Text>
        </Box>
      </>
    ),
  },
}
export const Outlined: Story = {
  args: {
    outlined: true,
    children: (
      <>
        <Box flexDirection="column">
          <Text variant="large" color="text100">
            Card
          </Text>
          <Text variant="normal" color="text50">
            Description
          </Text>
        </Box>
      </>
    ),
  },
}
