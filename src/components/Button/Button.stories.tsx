import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ScanIcon } from '~/icons'

import { Box } from '../Box'
import { Text } from '../Text'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => {
  return (
    <Box padding="tight" background="backgroundSecondary" borderRadius="sm">
      <Button {...args} />
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: <Text>Click me</Text>,
  size: 'md',
}

export const DefaultWithIcon = Template.bind({})
DefaultWithIcon.args = {
  children: (
    <>
      <ScanIcon />
      <Text>Click me</Text>
    </>
  ),
  size: 'md',
}

export const Primary = Template.bind({})
Primary.args = {
  children: <Text>Click me</Text>,
  size: 'md',
  variant: 'primary',
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  children: (
    <>
      <ScanIcon />
      <Text>Click me</Text>
    </>
  ),
  size: 'md',
  variant: 'primary',
}
