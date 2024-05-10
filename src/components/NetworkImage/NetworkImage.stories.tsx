import { StoryObj, Meta } from '@storybook/react'

import { NetworkImage } from './NetworkImage'

export default {
  title: 'Components/NetworkImage',
  component: NetworkImage,
} as Meta<typeof NetworkImage>

type Story = StoryObj<typeof NetworkImage>

export const WithImage: Story = {
  args: {
    size: 'lg',
    chainId: 1,
  },
}
