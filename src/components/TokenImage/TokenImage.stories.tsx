import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TokenImage } from './TokenImage'

export default {
  title: 'Components/TokenImage',
  component: TokenImage,
} as ComponentMeta<typeof TokenImage>

const Template: ComponentStory<typeof TokenImage> = args => {
  return <TokenImage {...args} />
}

export const WithImage = Template.bind({})
WithImage.args = {
  size: 'lg',
  src: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912',
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  size: 'lg',
  symbol: 'SCAM',
}