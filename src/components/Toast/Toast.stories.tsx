// import { ToastProps } from '@radix-ui/react-toast'
import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { TransactionIcon } from '~/icons'

import { Button } from '../Button'
import { Card } from '../Card'

import { Toast, ToastProvider, ToastViewport } from './Toast'

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta<typeof Toast>

type Story = StoryObj<typeof Toast>

const StoryWrapper: StoryFn<typeof Toast> = args => {
  // const [toasts, setToasts] = useState<ToastProps[]>([])

  // const handleAddToast = () => {
  //   setToasts([...toasts, args])
  // }

  const [open, setOpen] = useState(true)

  return (
    <ToastProvider swipeDirection="right">
      <Card position="relative">
        {/* <Button label="Raise a Toast" onClick={() => handleAddToast()} /> */}
        <Button
          label="Raise a Toast"
          onClick={() => {
            setOpen(false)

            setTimeout(() => {
              setOpen(true)
            }, 250)
          }}
        />
      </Card>

      {/* {toasts.map((toast, idx) => (
        <Toast {...toast} duration={3000} key={idx} />
      ))} */}

      <ToastViewport />

      <Toast {...args} open={open} onOpenChange={setOpen} />
    </ToastProvider>
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
