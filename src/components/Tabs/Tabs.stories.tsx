import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '~/components/Card/index.js'
import { Text } from '~/components/Text/index.js'

import { Tabs } from './Tabs.js'

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
