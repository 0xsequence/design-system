import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tabs } from '../../components'

export default {
  title: 'Components/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => {
  return <Tabs {...args} />
}

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'coins',
  tabs: [
    {
      value: 'coins',
      title: 'Coins',
      content: 'Coins'
    },
    {
      value: 'collectibles',
      title: 'Collectibles',
      content: 'Collectibles'
    }
  ]
}
