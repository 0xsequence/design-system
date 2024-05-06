import { StoryObj, Meta } from '@storybook/react'

import { Box } from '~/components/Box'

import { Skeleton } from './Skeleton'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta<typeof Skeleton>

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <Box gap="2">
      <Skeleton gap="2" padding="2">
        <Skeleton style={{ width: 72, height: 72 }} />
        <Box flexDirection="column" gap="2">
          <Skeleton size="md" />
          <Skeleton size="sm" />
          <Skeleton size="sm" />
        </Box>
      </Skeleton>
    </Box>
  ),
}
