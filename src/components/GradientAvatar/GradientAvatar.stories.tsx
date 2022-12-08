import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '../Box'

import { GradientAvatar } from './GradientAvatar'

export default {
  title: 'Components/GradientAvatar',
  component: GradientAvatar,
} as ComponentMeta<typeof GradientAvatar>

const Template: ComponentStory<typeof GradientAvatar> = args => (
  <Box background="backgroundSecondary">
    <GradientAvatar {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  address: '0x1234567890123456789012345678901234567890',
}
