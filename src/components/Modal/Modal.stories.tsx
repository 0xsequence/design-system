import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Box } from '~/components/Box'
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
      <Box
        flexDirection="column"
        justifyContent="space-between"
        height="full"
        padding="4"
      >
        <Box>
          <Text as="h1" variant="medium" color="text100">
            New Dapp
          </Text>
          <Text as="p" variant="normal" color="text50">
            You can always change these settings later.
          </Text>
        </Box>

        <Box justifyContent="flex-end">
          <Button variant="primary" shape="square" label="Create" />
        </Box>
      </Box>
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
      <Box
        flexDirection="column"
        justifyContent="space-between"
        height="full"
        padding="4"
      >
        <Box>
          <Text as="h1" variant="medium" color="text100">
            New Dapp
          </Text>
          <Text as="p" variant="normal" color="text50">
            Custom Open & Close Animated Modal. You can always change these
            settings later.
          </Text>
        </Box>

        <Box justifyContent="flex-end">
          <Button variant="primary" shape="square" label="Create" />
        </Box>
      </Box>
    ),
  },
}
