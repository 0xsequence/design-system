import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ArrowRightIcon, ScanIcon } from '~/icons'

import { Box } from '../Box'
import { Text } from '../Text'

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
  children: <Text>Click me</Text>,
  size: 'md',
  variant: 'solid',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: (
    <>
      <ScanIcon />
      Click me
    </>
  ),
  size: 'md',
  variant: 'solid',
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  children: (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        gap="xtight"
      >
        <ScanIcon />
        <Text>Click me</Text>
      </Box>
      <ArrowRightIcon />
    </>
  ),
  size: 'md',
  variant: 'solid',
  justifyContent: 'space-between',
  width: 'full',
}

export const AnchorButton = Template.bind({})
AnchorButton.args = {
  children: (
    <>
      <ScanIcon />
      Click me
    </>
  ),
  as: 'a',
  size: 'md',
  href: '/wallet',
}
