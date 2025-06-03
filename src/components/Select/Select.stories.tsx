import type { Meta, StoryObj } from '@storybook/react-vite'

import { Modal } from '~/components/Modal/index.js'
import { NetworkImage } from '~/components/NetworkImage/index.js'
import { Text } from '~/components/Text/index.js'

import { Select } from './Select.js'

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta<typeof Select>

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    onValueChange: value => {
      console.log('selected: ', value)
    },
    name: 'selectDemo',
    label: 'Select',
    description: 'This is a description',
    labelLocation: 'top',
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
    label: 'Networks',
    labelLocation: 'top',
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
    return (
      <Modal>
        <div className="p-4">
          <Select className="w-full" {...args} />
        </div>
      </Modal>
    )
  },
  args: Default.args,
}

export const TooManyOptionsWithModal: Story = {
  args: {
    ...TooManyOptions.args,
  },
  render: args => {
    return (
      <Modal>
        <div className="p-4">
          <Select {...args} />
        </div>
      </Modal>
    )
  },
}
