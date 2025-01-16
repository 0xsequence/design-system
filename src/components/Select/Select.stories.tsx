import { StoryObj, Meta } from '@storybook/react'

import { NetworkImage } from '~/components/NetworkImage'
import { Text } from '~/components/Text'

import { Select } from './Select'

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta<typeof Select>

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    borderRadius: 'md',
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
    borderRadius: 'md',
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
