import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Text } from '~/components/Text/index.js'
import { ProfileIcon, TransactionIcon } from '~/icons/index.js'

import { TabbedNav } from './TabbedNav.js'

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
    label: 'History',
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
    <div className="flex flex-col gap-4">
      <div className="bg-background-secondary p-4 rounded-xl">
        <TabbedNav {...args} onTabChange={value => handleTabChange(value)} />
      </div>

      <div className="bg-background-secondary p-4 rounded-xl">
        <Text variant="normal" color="secondary">
          {value} content
        </Text>
      </div>
    </div>
  )
}

const ControlledStoryWrapper: StoryFn<typeof TabbedNav> = args => {
  const [value, setValue] = useState<string>(
    args.value ?? args.defaultValue ?? tabs[0].value
  )

  const handleTabChange = (newValue: string) => {
    setValue(newValue)
  }

  const argsWithoutValue = { ...args, defaultValue: undefined }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-background-secondary p-4 rounded-xl">
        <TabbedNav
          {...argsWithoutValue}
          onTabChange={handleTabChange}
          value={value}
        />
      </div>

      <div className="bg-background-secondary p-4 rounded-xl">
        <Text variant="normal" color="secondary">
          {value} content
        </Text>
      </div>
    </div>
  )
}

export const PillUncontrolled: Story = {
  render: StoryWrapper,
  args: {
    defaultValue: 'wallet', // Component manages state initially
    size: 'sm',
    tabs,
  },
}

export const LineUncontrolled: Story = {
  render: StoryWrapper,
  args: {
    defaultValue: 'history', // Component manages state initially
    variant: 'line',
    tabs,
  },
}

export const Controlled: Story = {
  render: ControlledStoryWrapper,
  args: {
    value: 'simple',
    tabs,
  },
}
