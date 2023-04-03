import { ToastProps } from '@radix-ui/react-toast'
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
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const handleAddToast = () => {
    setToasts([...toasts, args])
  }

  return (
    <ToastProvider swipeDirection="right">
      <Card>
        <Button label="Raise a Toast" onClick={() => handleAddToast()} />
      </Card>

      {toasts.map((toast, idx) => (
        <Toast {...toast} duration={3000} key={idx} />
      ))}

      <ToastViewport />
    </ToastProvider>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    icon: TransactionIcon,
    title: 'Title',
    description: 'Description',
  },
}
