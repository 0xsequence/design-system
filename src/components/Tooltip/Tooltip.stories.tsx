import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../Button/Button.js'
import { Dialog, DialogContent } from '../Dialog/Dialog.js'

import { Tooltip } from './Tooltip.js'

export default {
  title: 'Components/Tooltip',
  component: Tooltip.Helper,
} as Meta<typeof Tooltip.Helper>

type Story = StoryObj<typeof Tooltip.Helper>

export const Default: Story = {
  args: {
    message: 'Hello, world!',
    children: <Button>Hover me</Button>,
    disabled: false,
  },
}

export const Alignment: Story = {
  render: args => (
    <div className="flex h-[200px] items-center justify-center">
      <Tooltip.Helper
        {...args}
        message="A longer tooltip message shows alignment more clearly"
      >
        <Button>Hover me</Button>
      </Tooltip.Helper>
    </div>
  ),
  argTypes: {
    align: { control: 'radio', options: ['start', 'center', 'end'] },
    side: { control: 'radio', options: ['top', 'bottom', 'left', 'right'] },
  },
  args: {
    align: 'center',
    side: 'top',
    children: <Button>Hover me</Button>,
  },
}

export const Multiple: Story = {
  render: args => {
    return (
      <div className="flex gap-2 h-[200px] items-center justify-center">
        <Tooltip.Helper {...args} message="Suprise!">
          <Button>Button 1</Button>
        </Tooltip.Helper>
        <Tooltip.Helper {...args} message="Peekaboo!">
          <Button>Button 2</Button>
        </Tooltip.Helper>
        <Tooltip.Helper {...args} message="Hi, there!">
          <Button>Button 3</Button>
        </Tooltip.Helper>
      </div>
    )
  },
}

export const WithinDialog: Story = {
  tags: ['!autodocs'],
  render: args => {
    return (
      <Dialog defaultOpen disablePointerDismissal>
        <DialogContent
          className="sm:max-w-[425px] p-4 flex gap-2"
          showCloseButton={false}
        >
          <Tooltip.Helper {...args} message="Tooltip 1">
            <Button>Button 1</Button>
          </Tooltip.Helper>
          <Tooltip.Helper {...args} message="Tooltip 2">
            <Button>Button 2</Button>
          </Tooltip.Helper>
        </DialogContent>
      </Dialog>
    )
  },
}
