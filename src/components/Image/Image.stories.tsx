import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from './Image.js'

export default {
  title: 'Components/Image',
  component: Image,
} as Meta<typeof Image>

type Story = StoryObj<typeof Image>

// img src of a 512x512 image
const src =
  'https://skyweaver.ghost.io/content/images/size/w600/2023/01/hexbound_promo.png'

export const Default: Story = {
  args: {
    src,
  },
}
