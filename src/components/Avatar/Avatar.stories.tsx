import { StoryFn, Meta } from '@storybook/react'

import { Box } from '../Box'

import { Avatar } from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>

const Template: StoryFn<typeof Avatar> = args => {
  return (
    <Box
      display="flex"
      padding="3"
      background="backgroundSecondary"
      borderRadius="md"
    >
      <Avatar {...args} />
    </Box>
  )
}

export const A = Template.bind({})
A.args = {
  address: 'casdasfasfkasgfkasgf',
  size: 'md',
}
