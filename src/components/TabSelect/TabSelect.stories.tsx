import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TabSelect } from './TabSelect'

export default {
  title: 'Components/TabSelect',
  component: TabSelect,
} as ComponentMeta<typeof TabSelect>

const Template: ComponentStory<typeof TabSelect> = args => {
  return <TabSelect {...args} />
}

const tabs = [
  {
    value: 'coins',
    label: 'Coins',
    content: 'Coins',
  },
  {
    value: 'collectibles',
    label: 'Collectibles',
    content: 'Collectibles',
  },
]

export const Default = Template.bind({})
Default.args = {
  activeTab: 'coins',
  tabs,
}
