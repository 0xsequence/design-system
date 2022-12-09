import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '../Box'

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

export const Multiple = () => (
  <Box gap="2">
    <GradientAvatar
      address="0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9"
      size="xl"
    />
    <GradientAvatar
      address="0x73F8E47dEe63002378E047fA74e6DFb24F88f496"
      size="xl"
    />
    <GradientAvatar
      address="0x9Cb019C2FfcD9E9BB83e269625a170179Ff3ECD0"
      size="xl"
    />
    <GradientAvatar
      address="0x9b436D9599FAc498e1e0Ab4D48cDFC72922a6F1e"
      size="xl"
    />
    <GradientAvatar
      address="0x9aB58Bda3eeCbF391a17592ed7626727b922a18f"
      size="xl"
    />
    <GradientAvatar
      address="0x468E8e29F6cfb0F6b7ff10ec6A1AB516ec849c04"
      size="xl"
    />
    <GradientAvatar
      address="0x450cB9fbB2D44d166AACA1f6cDb1dBd9Ff168e4C"
      size="xl"
    />
    <GradientAvatar
      address="0x88cc3E896C4C178AB98333dCD29C33d2cc2102A8"
      size="xl"
    />
  </Box>
)
