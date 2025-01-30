import { StoryObj, Meta } from '@storybook/react'

import { Card } from '~/components/Card'
import { Text } from '~/components/Text'

import { Tabs } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>

type Story = StoryObj<typeof Tabs>

const Content = ({ children }: any) => (
  <Card className="mt-4">
    <Text variant="normal" color="secondary">
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
        content: <Content>Coins content</Content>,
      },
      {
        value: 'collectibles',
        label: 'Collectibles',
        content: <Content>Collectibles content</Content>,
      },
      {
        value: 'other',
        label: 'Other',
        content: <Content>Other content</Content>,
      },
    ],
  },
}
