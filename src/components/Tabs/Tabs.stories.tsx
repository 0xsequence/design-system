import { StoryObj, Meta } from '@storybook/react'

import { Card, Text } from '~/components'

import { Tabs } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>

type Story = StoryObj<typeof Tabs>

const Content = ({ children }: any) => (
  <Card marginTop="4">
    <Text variant="normal" color="text100">
      {children}
    </Text>
  </Card>
)

export const Default: Story = {
  args: {
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
  },
}
