import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'

import { Button } from '~/components/Button/Button.js'
import { Card } from '~/components/Card/Card.js'
import { Text } from '~/components/Text/Text.js'
import { CheckmarkIcon } from '~/icons/index.js'

import { Modal } from './Modal.js'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>

type Story = StoryObj<typeof Modal>

const StoryWrapper: StoryFn<typeof Modal> = args => {
  const [isOpen, toggleModal] = useState(false)
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

export const WithHeaderAndFooter: Story = {
  render: StoryWrapper,
  args: {
    header: 'Task list',
    footer: (
      <div className="flex gap-2">
        <Button className="w-full" shape="square" label="Cancel" />
        <Button
          className="w-full"
          variant="primary"
          shape="square"
          label="Confirm"
        />
      </div>
    ),
    children: (
      <div className="flex flex-col gap-2 p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(idx => (
          <Card className="flex gap-2 items-center" key={idx}>
            <div className="flex items-center justify-center rounded-full bg-positive w-8 h-8 text-white">
              <CheckmarkIcon />
            </div>
            <div className="flex flex-col">
              <Text variant="normal" fontWeight="bold" color="primary" block>
                Item {idx}
              </Text>
              <Text variant="small" color="muted">
                Description
              </Text>
            </div>
          </Card>
        ))}
      </div>
    ),
  },
}

export const CustomAnimation: Story = {
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
    overlayProps: {},
    contentProps: {
      initial: { scale: 0, rotateZ: 0 },
      animate: { scale: 1, rotateZ: 360 },
      exit: { scale: 0, rotateZ: 0 },
      transition: { type: 'spring' },
    },
  },
}
