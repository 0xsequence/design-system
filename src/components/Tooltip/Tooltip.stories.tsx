import { StoryObj, Meta } from '@storybook/react'

import { Button } from '~/components/Button/index.js'
import { Modal } from '~/components/Modal/index.js'

import { Tooltip } from './Tooltip.js'

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

export const Multiple: Story = {
  render: args => {
    return (
      <div className="flex gap-2 h-[200px] items-center justify-center">
        <Tooltip {...args} message="Suprise!">
          <Button label="Button 1" />
        </Tooltip>
        <Tooltip {...args} message="Peekaboo!">
          <Button label="Button 2" />
        </Tooltip>
        <Tooltip {...args} message="Hi, there!">
          <Button label="Button 3" />
        </Tooltip>
      </div>
    )
  },
}

export const WithinModal: Story = {
  tags: ['!autodocs'],
  render: args => {
    return (
      <Modal>
        <div className="flex p-4 gap-2">
          <Tooltip {...args} message="Tooltip 1">
            <Button label="Button 1" />
          </Tooltip>
          <Tooltip {...args} message="Tooltip 2">
            <Button label="Button 2" />
          </Tooltip>
        </div>
      </Modal>
    )
  },
}
