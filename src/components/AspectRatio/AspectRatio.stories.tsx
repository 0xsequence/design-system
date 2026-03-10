import type { Meta, StoryObj } from '@storybook/react-vite'

import { AspectRatio } from './AspectRatio.js'

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
} as Meta<typeof AspectRatio>

type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: args => (
    <AspectRatio ratio={args.ratio} className="bg-muted rounded-lg">
      <img
        src="https://skyweaver.ghost.io/content/images/size/w600/2023/01/hexbound_promo.png"
        className="h-full w-full rounded-lg object-cover"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 1,
  },
}
