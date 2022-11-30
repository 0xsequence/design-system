import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { Box } from '../Box'
import { Button } from '../Button'
import { Text } from '../Text'

import { Modal } from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => {
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

export const Default = Template.bind({})
Default.args = {
  children: (
    <Box flexDirection="column" justifyContent="space-between" height="full">
      <Box>
        <Text as="h1" variant="medium" color="textBody">
          New Dapp
        </Text>
        <Text as="p" variant="normal" color="textFaded">
          You can always change these settings later.
        </Text>
      </Box>

      <Box justifyContent="flex-end">
        <Button variant="primary" shape="square" label="Create" />
      </Box>
    </Box>
  ),
}
