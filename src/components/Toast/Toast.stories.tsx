import type { StoryObj, Meta, StoryFn } from '@storybook/react'

import { Button } from '~/components/Button/index.js'
import { Card } from '~/components/Card/index.js'
import { TransactionIcon } from '~/icons/index.js'

import { Toast, type ToastProps, ToastProvider, useToast } from './Toast.js'

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta<typeof Toast>

type Story = StoryObj<typeof Toast>

const StoryWrapper: StoryFn<typeof Toast> = args => {
  return (
    <ToastProvider swipeDirection="right">
      <ToastStory {...args} />
    </ToastProvider>
  )
}

const ToastStory = (args: ToastProps) => {
  const toast = useToast()

  return (
    <Card>
      <Button
        label="Raise a Toast"
        onClick={() => {
          toast({
            ...args,
            title: args.title + ' ' + new Date().getMilliseconds(),
          })
        }}
      />
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
    icon: TransactionIcon,
    title: 'Transaction Sent',
    description: 'Waiting for confirmation',
  },
}

export const Success: Story = {
  render: StoryWrapper,
  args: {
    title: 'Success',
    description: 'Description',
    variant: 'success',
  },
}

export const Error: Story = {
  render: StoryWrapper,
  args: {
    title: 'Error',
    description:
      'The transaction failed to send because the relayer encountered an error. "Not enough gas"',
    variant: 'error',
  },
}
