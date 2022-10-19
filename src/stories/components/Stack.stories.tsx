import React from 'react'
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react'

import { Box, Stack } from '../../components'
import { tokens } from '../../tokens'

export default {
  title: 'Components/Stack',
  component: Stack
  // argTypes: {
  //   itemCount: { type: 'number', defaultValue: 5 }
  // }
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = ({ ...args }) => (
  <Stack {...args}>
    {[...Array(5).keys()].map(idx => (
      <div key={idx}>{idx + 1}</div>
    ))}
  </Stack>
)

export const Default = Template.bind({})
Default.args = {}
