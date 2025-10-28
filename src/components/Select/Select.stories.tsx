import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Button } from '../Button/Button.js'
import { Modal } from '../Modal/Modal.js'
import { NetworkImage } from '../NetworkImage/NetworkImage.js'
import { Text } from '../Text/Text.js'

import { SelectHelper } from './Select.js'

export default {
  title: 'Forms/Select',
  component: SelectHelper,
} as Meta<typeof SelectHelper>

type Story = StoryObj<typeof SelectHelper>

export const Default: Story = {
  args: {
    onValueChange: value => {
      console.log('selected: ', value)
    },
    name: 'selectDemo',
    placeholder: 'Select an option',
    disabled: false,
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
      {
        label: 'Disabled Option',
        value: 'option-4',
        disabled: true,
      },
      {
        label: 'Custom Action',
        value: 'option-5',
      },
    ],
  },
}

export const Custom: Story = {
  args: {
    onValueChange: value => {
      console.log('selected: ', value)
    },
    name: 'selectDemo',
    disabled: false,
    defaultValue: 'mainnet',
    options: [
      {
        label: (
          <div className="flex items-center gap-2">
            <NetworkImage chainId={1} />
            <Text>Mainnet</Text>
          </div>
        ),
        value: 'mainnet',
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <NetworkImage chainId={137} />
            <Text>Polygon</Text>
          </div>
        ),
        value: 'polygon',
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <NetworkImage chainId={56} />
            <Text>BNB Smart Chain</Text>
          </div>
        ),
        value: 'bsc',
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <NetworkImage chainId={43114} />
            <Text>Avalanche</Text>
          </div>
        ),
        value: 'avalanche',
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <NetworkImage chainId={42161} />
            <Text>Arbitrum</Text>
          </div>
        ),
        value: 'arbitrum',
      },
    ],
  },
}

export const TooManyOptions: Story = {
  args: {
    ...Default.args,
    options: Array.from({ length: 100 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `option-${i + 1}`,
    })),
  },
}

export const WithinModal: Story = {
  tags: ['!autodocs'],
  render: args => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        {isOpen && (
          <Modal onClose={() => setIsOpen(false)}>
            <div className="p-4">
              <SelectHelper className="w-full" {...args} />
            </div>
          </Modal>
        )}
      </>
    )
  },
  args: Default.args,
}

export const TooManyOptionsWithModal: Story = {
  args: {
    ...TooManyOptions.args,
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        {isOpen && (
          <Modal onClose={() => setIsOpen(false)}>
            <div className="p-4">
              <SelectHelper className="w-full" {...args} />
            </div>
          </Modal>
        )}
      </>
    )
  },
}
