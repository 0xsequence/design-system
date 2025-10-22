import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '../Card/Card.js'
import { Text } from '../Text/Text.js'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs.js'

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
    return (
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="coins">Coins</TabsTrigger>
          <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
          <TabsTrigger value="rwas">RWAs</TabsTrigger>
        </TabsList>
        <TabsContent value="coins">
          <Content>Coins content</Content>
        </TabsContent>
        <TabsContent value="collectibles">
          <Content>Collectibles content</Content>
        </TabsContent>
        <TabsContent value="rwas">
          <Content>Other content</Content>
        </TabsContent>
      </Tabs>
    )
  },
  args: {
    defaultValue: 'coins',
    onValueChange: (value: string) => {
      console.log('value', value)
    },
  },
}

export const WithoutContent: Story = {
  render: args => {
    return (
      <Tabs {...args}>
        <TabsList>
          <TabsTrigger value="coins">Coins</TabsTrigger>
          <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
          <TabsTrigger value="rwas">RWAs</TabsTrigger>
        </TabsList>
      </Tabs>
    )
  },
  args: {
    defaultValue: 'coins',
    onValueChange: (value: string) => {
      console.log('value', value)
    },
  },
}
