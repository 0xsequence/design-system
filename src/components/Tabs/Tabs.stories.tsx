import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Card } from '../Card/Card.js'
import { Text } from '../Text/Text.js'

import { Tabs, TabsContent, TabsHeader } from './Tabs.js'

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
  render: args => {
    const [value, setValue] = useState<string>(
      args.value ?? args.defaultValue ?? 'coins'
    )

    return (
      <Tabs {...args} onValueChange={setValue}>
        <TabsHeader
          value={value}
          tabs={[
            { value: 'coins', label: 'Coins' },
            { value: 'collectibles', label: 'Collectibles' },
            { value: 'other', label: 'Other' },
          ]}
        />
        <TabsContent value="coins">
          <Content>Coins content</Content>
        </TabsContent>
        <TabsContent value="collectibles">
          <Content>Collectibles content</Content>
        </TabsContent>
        <TabsContent value="other">
          <Content>Other content</Content>
        </TabsContent>
      </Tabs>
    )
  },
}
