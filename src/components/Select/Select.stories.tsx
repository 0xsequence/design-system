import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../Button/Button.js'
import { Dialog, DialogContent, DialogTrigger } from '../Dialog/Dialog.js'
import { NetworkImage } from '../NetworkImage/NetworkImage.js'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './Select.js'

export default {
  title: 'Forms/Select',
  component: Select.Helper,
} as Meta<typeof Select.Helper>

type Story = StoryObj<typeof Select.Helper>

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

interface Network {
  name: string
  chainId: number
}

const networks: Network[] = [
  {
    name: 'Mainnet',
    chainId: 1,
  },
  {
    name: 'Polygon',
    chainId: 137,
  },
  {
    name: 'BNB Smart Chain',
    chainId: 56,
  },
  {
    name: 'Avalanche',
    chainId: 43114,
  },
  {
    name: 'Arbitrum',
    chainId: 42161,
  },
  {
    name: 'Optimism',
    chainId: 10,
  },
  {
    name: 'Base',
    chainId: 8453,
  },
]

const NetworkItem = ({ network }: { network: Network }) => {
  return (
    <div className="flex items-center gap-2 text-sm font-bold">
      <NetworkImage chainId={network.chainId} />
      {network.name}
    </div>
  )
}

export const NetworkSelect: Story = {
  render: args => (
    <Select
      onValueChange={args.onValueChange}
      disabled={args.disabled}
      defaultValue={networks[0]}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a network">
          {network => <NetworkItem network={network} />}
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="start">
        <SelectGroup className="*:h-13">
          {networks.map(network => (
            <SelectItem key={network.chainId} value={network}>
              <NetworkItem network={network} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {
    onValueChange: value => {
      console.log('selected: ', value)
    },
    disabled: false,
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

export const WithinDialog: Story = {
  tags: ['!autodocs'],
  render: args => {
    return (
      <Dialog>
        <DialogTrigger
          render={<Button variant="outline">Open Dialog</Button>}
        />

        <DialogContent>
          <Select.Helper className="w-full" {...args} />
        </DialogContent>
      </Dialog>
    )
  },
  args: Default.args,
}

export const TooManyOptionsWithinDialog: Story = {
  args: {
    ...TooManyOptions.args,
  },
  render: args => {
    return (
      <Dialog>
        <DialogTrigger
          render={<Button variant="outline">Open Dialog</Button>}
        />

        <DialogContent>
          <Select.Helper className="w-full" {...args} />
        </DialogContent>
      </Dialog>
    )
  },
}
