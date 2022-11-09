import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArrowRightIcon, ScanIcon } from '~/icons'

import { Box } from '../Box'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => {
  return (
    <Box padding="tight" background="backgroundSecondary" borderRadius="md">
      <Button {...args} />
    </Box>
  )
}

export const TextOnly = Template.bind({})
TextOnly.args = {
  label: 'Click me',
  size: 'md',
  variant: 'solid',
  disabled: false,
  width: 'normal',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Click me',
  leftIcon: <ScanIcon />,
  size: 'md',
  variant: 'solid',
  disabled: false,
  width: 'normal',
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  label: 'Click me',
  rightIcon: <ArrowRightIcon />,
  size: 'md',
  variant: 'solid',
  disabled: false,
  width: 'normal',
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  label: 'Click me',
  leftIcon: <ScanIcon />,
  rightIcon: <ArrowRightIcon />,
  size: 'md',
  variant: 'solid',
  disabled: false,
  width: 'normal',
}

export const AnchorButton = Template.bind({})
AnchorButton.args = {
  label: 'Click me',
  leftIcon: <ScanIcon />,
  as: 'a',
  size: 'md',
  href: '/wallet',
}
