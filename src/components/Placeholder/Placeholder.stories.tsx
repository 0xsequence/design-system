import { StoryObj, Meta } from '@storybook/react'

import { Box } from '~/components/Box'

import { Placeholder } from './Placeholder'

export default {
  title: 'Components/Placeholder',
  component: Placeholder,
} as Meta<typeof Placeholder>

type Story = StoryObj<typeof Placeholder>

export const Default: Story = {
  render: () => (
    <Box gap="2">
      <Placeholder style={{ width: 72, height: 72 }} />
      <Box flexDirection="column" gap="2">
        <Placeholder size="md" />
        <Placeholder size="sm" />
        <Placeholder size="sm" />
      </Box>
    </Box>
  ),
}
