import { ComponentStory, ComponentMeta } from '@storybook/react'

import { tokens } from '~/tokens'

import { Box } from '../Box'
import { Text } from '../Text'

import { Card } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = args => (
  <Card {...args}>
    <Box flexDirection="column">
      <Text variant="large" color="textBody">
        Card
      </Text>
      <Text variant="normal" color="textFaded">
        Description
      </Text>
    </Box>
  </Card>
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}

export const Hover = Template.bind({})
Hover.args = { hover: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }
