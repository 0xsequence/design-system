import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProfileIcon, TransactionIcon } from '~/icons'

import { TabOption, TabSelect } from './TabSelect'

export default {
  title: 'Components/TabSelect',
  component: TabSelect,
} as ComponentMeta<typeof TabSelect>

const Template: ComponentStory<typeof TabSelect> = ({ ...args }) => {
  return <TabSelect {...args} />
}

const delay = (sec: number) => new Promise(res => setTimeout(res, sec * 1000))

const tabs: TabOption[] = [
  {
    label: 'Wallet',
    value: 'wallet',
    onClick: () => {
      console.log('Wallet')
      return true
    },
  },
  {
    label: 'History',
    LeftIcon: TransactionIcon,
    value: 'history',
    onClick: async () => {
      console.log('processing...')
      await delay(1)
      console.log('History')
      return true
    },
  },
  {
    label: 'Contacts',
    LeftIcon: ProfileIcon,
    value: 'contacts',
    onClick: async () => {
      console.log('expecting fail...')
      await delay(1)
      return false
    },
  },
]

export const Default = Template.bind({})
Default.args = {
  activeTab: 'history',
  tabs,
}
