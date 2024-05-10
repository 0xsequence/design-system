import { StoryObj, Meta } from '@storybook/react'

import { TokenImage } from './TokenImage'

export default {
  title: 'Components/TokenImage',
  component: TokenImage,
} as Meta<typeof TokenImage>

type Story = StoryObj<typeof TokenImage>

export const WithImage: Story = {
  args: {
    borderRadius: 'circle',
    size: 'lg',
    src: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
  },
}

export const WithoutImage: Story = {
  args: {
    size: 'lg',
    symbol: 'SCAM',
  },
}

export const WithNetwork: Story = {
  args: {
    borderRadius: 'circle',
    size: 'lg',
    src: 'https://assets.sequence.info/images/networks/medium/37714555429.webp',
    withNetwork: 1,
  },
}
