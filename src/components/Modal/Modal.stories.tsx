import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Button } from '~/components/Button'
import { Text } from '~/components/Text'

import { Modal } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>

type Story = StoryObj<typeof Modal>

const StoryWrapper: StoryFn<typeof Modal> = args => {
  const [isOpen, toggleModal] = useState(true)
  return (
    <>
      <Button label="Open Modal" onClick={() => toggleModal(!isOpen)} />
      <AnimatePresence>
        {isOpen && <Modal {...args} onClose={() => toggleModal(false)} />}
      </AnimatePresence>
    </>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    size: 'lg',
    children: (
      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <Text variant="medium" color="primary" asChild>
            <h1>New Dapp</h1>
          </Text>
          <Text variant="normal" color="muted" asChild>
            <p>You can always change these settings later.</p>
          </Text>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" shape="square" label="Create" />
        </div>
      </div>
    ),
  },
}

export const CustomAnimation: Story = {
  render: args => (
    <StoryWrapper
      overlayProps={{}}
      contentProps={{
        initial: { scale: 0, rotateZ: 0 },
        animate: { scale: 1, rotateZ: 360 },
        exit: { scale: 0, rotateZ: 0 },
        transition: { type: 'spring' },
      }}
      {...args}
    />
  ),
  args: {
    size: 'lg',
    children: (
      <div className="flex flex-col justify-between h-full p-4">
        <div>
          <Text variant="medium" color="primary" asChild>
            <h1>New Dapp</h1>
          </Text>
          <Text variant="normal" color="muted" asChild>
            <p>
              Custom Open & Close Animated Modal. You can always change these
              settings later.
            </p>
          </Text>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" shape="square" label="Create" />
        </div>
      </div>
    ),
  },
}
