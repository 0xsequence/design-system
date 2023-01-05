import { StoryObj, Meta } from '@storybook/react'

import { Button } from '~/components'

import { Tooltip } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    message: 'Hello, world!',
    children: <Button label="Hover me" />,
    disabled: false,
  },
}
