import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '../../components'
import { tokens } from '../../tokens'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Tokens',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    padding: { control: 'select', options: Object.keys(tokens.space) }
  }
} as ComponentMeta<typeof Box>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = args => <Box {...args} />

export const Tokens = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tokens.args = {
  padding: 'xl',
  background: 'blue-50',
  children: 'Hello'
}
