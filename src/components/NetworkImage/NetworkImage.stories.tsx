import type { Meta, StoryObj } from '@storybook/react-vite'

import { NetworkImage } from './NetworkImage.js'

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
