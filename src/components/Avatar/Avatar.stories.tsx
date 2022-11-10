import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '../Box'

import { Avatar } from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => {
  return (
    <Box
      sx={{
        padding: 'tight',
        background: 'backgroundSecondary',
        borderRadius: 'md',
      }}
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
