import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from './Skeleton.js'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta<typeof Skeleton>

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div className="flex gap-2 p-2 w-[240px]">
      <Skeleton className="w-[72px] h-[72px]" />
      <div className="flex flex-col gap-2">
        <Skeleton size="md" />
        <Skeleton size="sm" />
        <Skeleton size="sm" />
      </div>
    </div>
  ),
}
