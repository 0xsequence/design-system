import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '~/components/Box'
import { ArrowRightIcon, ScanIcon } from '~/icons'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => {
  return (
    <Box padding="3" background="backgroundSecondary" borderRadius="md">
      <Button {...args} />
    </Box>
  )
}

export const TextOnly = Template.bind({})
TextOnly.args = {
  label: 'Click me',
  size: 'md',
  variant: 'glass',
  disabled: false,
  width: 'normal',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Click me',
  LeftIcon: ScanIcon,
  size: 'md',
  variant: 'glass',
  disabled: false,
  width: 'normal',
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  label: 'Click me',
  RightIcon: ArrowRightIcon,
  size: 'md',
  variant: 'glass',
  disabled: false,
  width: 'normal',
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  label: 'Click me',
  LeftIcon: ScanIcon,
  RightIcon: ArrowRightIcon,
  size: 'md',
  variant: 'glass',
  disabled: false,
  width: 'normal',
}

export const AnchorButton = Template.bind({})
AnchorButton.args = {
  label: 'Click me',
  LeftIcon: ScanIcon,
  as: 'a',
  size: 'md',
  href: '/wallet',
}
