import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '../Card'
import { Text } from '../Text'

import { Tabs } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => {
  return <Tabs {...args} />
}

const Content = ({ children }: any) => (
  <Card marginTop="4">
    <Text variant="normal" color="text100">
      {children}
    </Text>
  </Card>
)

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'coins',
  tabs: [
    {
      value: 'coins',
      label: 'Coins',
      content: <Content>Coins</Content>,
    },
    {
      value: 'collectibles',
      label: 'Collectibles',
      content: <Content>Collectibles</Content>,
    },
    {
      value: 'other',
      label: 'Other',
      content: <Content>Other</Content>,
    },
  ],
}
