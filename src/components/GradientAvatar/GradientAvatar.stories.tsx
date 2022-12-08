import { ComponentStory, ComponentMeta } from '@storybook/react'

import { GradientAvatar } from './GradientAvatar'

export default {
  title: 'Components/GradientAvatar',
  component: GradientAvatar,
} as ComponentMeta<typeof GradientAvatar>

const Template: ComponentStory<typeof GradientAvatar> = args => (
  <GradientAvatar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  address: '0x1234567890123456789012345678901234567890',
}
