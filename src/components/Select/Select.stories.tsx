import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Button } from '../Button/Button.js'
import { Modal } from '../Modal/Modal.js'
import { NetworkImage } from '../NetworkImage/NetworkImage.js'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectHelper,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select.js'

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

export const NetworkSelect: Story = {
  render: args => (
    <Select
      defaultValue={args.defaultValue}
      onValueChange={args.onValueChange}
      disabled={args.disabled}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a network" />
      </SelectTrigger>
      <SelectContent align="start" position="popper">
        <SelectGroup className="[&>*]:h-13">
          <SelectItem value="mainnet">
            <NetworkImage chainId={1} />
            Mainnet
          </SelectItem>
          <SelectItem value="polygon">
            <NetworkImage chainId={137} />
            Polygon
          </SelectItem>
          <SelectItem value="bsc">
            <NetworkImage chainId={56} />
            BNB Smart Chain
          </SelectItem>
          <SelectItem value="avalanche">
            <NetworkImage chainId={43114} />
            Avalanche
          </SelectItem>
          <SelectItem value="arbitrum">
            <NetworkImage chainId={42161} />
            Arbitrum
          </SelectItem>
          <SelectItem value="optimism">
            <NetworkImage chainId={10} />
            Optimism
          </SelectItem>
          <SelectItem value="base">
            <NetworkImage chainId={8453} />
            Base
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    onValueChange: value => {
      console.log('selected: ', value)
    },
    disabled: false,
    defaultValue: 'mainnet',
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
