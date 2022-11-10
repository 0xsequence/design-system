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
    onClick: () => {
      console.log('History')
      return true
    },
  },
  {
    label: 'Contacts',
    LeftIcon: ProfileIcon,
    value: 'contacts',
    onClick: () => {
      console.log('Contacts')
      return true
    },
  },
]

export const Default = Template.bind({})
Default.args = {
  activeTab: 'history',
  tabs,
}
