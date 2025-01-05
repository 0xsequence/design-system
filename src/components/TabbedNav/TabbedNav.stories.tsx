import { StoryObj, StoryFn, Meta } from '@storybook/react'
import { useState } from 'react'

import { Badge } from '~/components/Badge'
import { Box } from '~/components/Box'
import { Text } from '~/components/Text'
import { ProfileIcon, TransactionIcon } from '~/icons'

import { TabbedNav } from './TabbedNav'

export default {
  title: 'Components/TabbedNav',
  component: TabbedNav,
} as Meta<typeof TabbedNav>

type Story = StoryObj<typeof TabbedNav>

const delay = (sec: number) => new Promise(res => setTimeout(res, sec * 1000))

const tabs = [
  {
    label: 'Wallet',
    value: 'wallet',
    onLoad: () => {
      return true
    },
  },
  {
    label: 'Simple',
    value: 'simple',
  },
  // no onClick
  {
    label: 'Another Tab',
    value: 'another',
    onLoad: () => {
      return true
    },
  },
  {
    label: (
      <Box gap="1" alignItems="center">
        History
        <Badge value="3" />
      </Box>
    ),
    leftIcon: TransactionIcon,
    value: 'history',
    onLoad: async () => {
      console.log('processing...')
      await delay(1)
      return true
    },
  },
  {
    label: 'Contacts (Fails to load)',
    leftIcon: ProfileIcon,
    value: 'contacts',
    onLoad: async () => {
      console.log('expecting fail...')
      await delay(1)
      return false
    },
  },
  {
    label: 'Disabled',
    value: 'disabled',
    disabled: true,
  },
]

const StoryWrapper: StoryFn<typeof TabbedNav> = args => {
  const [value, setValue] = useState<string>('wallet')
  const handleTabChange = (value: string) => {
    setValue(value)
  }
  return (
    <Box flexDirection="column" gap="4">
      <Box background="backgroundSecondary" padding="4" borderRadius="md">
        <TabbedNav {...args} onTabChange={value => handleTabChange(value)} />
      </Box>

      <Box background="backgroundSecondary" padding="4" borderRadius="md">
        <Text variant="normal" color="text80">
          {value} content
        </Text>
      </Box>
    </Box>
  )
}

export const Pill: Story = {
  render: StoryWrapper,
  args: {
    defaultValue: 'wallet',
    size: 'sm',
    tabs,
  },
}

export const LineTabs: Story = {
  render: StoryWrapper,
  args: {
    defaultValue: 'wallet',
    variant: 'line',
    tabs,
  },
}
