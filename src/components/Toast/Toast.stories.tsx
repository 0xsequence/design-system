import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

import { TransactionIcon } from '../../icons/index.js'
import { Button } from '../Button/Button.js'
import { Card } from '../Card/Card.js'

import { ToastProvider, useToast, type ToastProps } from './Toast.js'

export default {
  title: 'Components/Toast',
} as Meta

type Story = StoryObj<ToastProps>

const StoryWrapper: StoryFn<ToastProps> = args => {
  return (
    <ToastProvider>
      <ToastStory {...args} />
    </ToastProvider>
  )
}

let count = 0
const ToastStory = (args: ToastProps) => {
  const toast = useToast()

  return (
    <Card>
      <Button
        onClick={() => {
          toast.add({
            ...args,
            title: `${args.title} ${++count}`,
          })
        }}
      >
        Raise a Toast
      </Button>
    </Card>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    title: 'Title',
    description: 'Description',
  },
}

export const WithIcon: Story = {
  render: StoryWrapper,
  args: {
    title: 'Transaction Sent',
    description: 'Waiting for confirmation',
    data: {
      icon: TransactionIcon,
    },
  },
}

export const Success = {
  render: StoryWrapper,
  args: {
    type: 'success',
    title: 'Success',
    description: 'Description',
  },
}

export const Error = {
  render: StoryWrapper,
  args: {
    type: 'error',
    title: 'Error',
    description:
      'The transaction failed to send because the relayer encountered an error. "Not enough gas"',
  },
}
