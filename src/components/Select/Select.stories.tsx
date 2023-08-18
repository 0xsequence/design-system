import { StoryObj, Meta } from '@storybook/react'

import { Box } from '~/components/Box'
import { Text } from '~/components/Text'
import { TokenImage } from '~/components/TokenImage'

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
          <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/1.cb52a9be955ddf5eacbe.png" />
            <Text>Mainnet</Text>
          </Box>
        ),
        value: 'mainnet',
      },
      {
        label: (
          <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/137.1c36e6b6953be3aacff4.png" />
            <Text>Polygon</Text>
          </Box>
        ),
        value: 'polygon',
      },
      {
        label: (
          <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/56.ef53ab0cdafe86027deb.png" />
            <Text>BNB Smart Chain</Text>
          </Box>
        ),
        value: 'bsc',
      },
      {
        label: (
          <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/43114.9b2c1709ab950bf92deb.png" />
            <Text>Avalanche</Text>
          </Box>
        ),
        value: 'avalanche',
      },
      {
        label: (
          <Box alignItems="center" gap="2">
            <TokenImage src="https://sequence.app/static/images/42161.a74b6921ab2c28356575.png" />
            <Text>Arbitrum</Text>
          </Box>
        ),
        value: 'gnosis',
      },
    ],
  },
}
