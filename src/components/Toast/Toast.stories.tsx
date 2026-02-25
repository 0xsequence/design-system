import type { Meta, StoryFn } from '@storybook/react-vite'

import { TransactionIcon } from '../../icons/index.js'
import { Button } from '../Button/Button.js'
import { Card } from '../Card/Card.js'

import { ToastProvider, useToast, type ToastProps } from './Toast.js'

export default {
  title: 'Components/Toast',
} as Meta

const StoryWrapper: StoryFn<ToastProps> = args => {
  return (
    <ToastProvider>
      <ToastStory {...args} />
    </ToastProvider>
  )
}

const ToastStory = (args: ToastProps) => {
  const toast = useToast()

  return (
    <Card>
      <Button
        onClick={() => {
          toast({
            ...args,
            title: args.title + ' ' + new Date().getMilliseconds(),
          })
        }}
      >
        Raise a Toast
      </Button>
    </Card>
  )
}

export const Default = {
  render: StoryWrapper,
  args: {
    title: 'Title',
    description: 'Description',
  } as ToastProps,
}

export const WithIcon = {
  render: StoryWrapper,
  args: {
    icon: TransactionIcon,
    title: 'Transaction Sent',
    description: 'Waiting for confirmation',
  } as ToastProps,
}

export const Success = {
  render: StoryWrapper,
  args: {
    title: 'Success',
    description: 'Description',
    variant: 'success',
  } as ToastProps,
}

export const Error = {
  render: StoryWrapper,
  args: {
    title: 'Error',
    description:
      'The transaction failed to send because the relayer encountered an error. "Not enough gas"',
    variant: 'error',
  } as ToastProps,
}
