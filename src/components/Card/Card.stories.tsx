import type { Meta, StoryObj } from '@storybook/react-vite'
import { SettingsIcon } from 'lucide-react'

import { Button } from '../Button/Button.js'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card.js'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: args => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'default',
  },
}

export const WithAction: Story = {
  render: args => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>
          <Button iconOnly size="xs">
            <SettingsIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Confirm</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'default',
  },
}

export const Outline: Story = {
  render: args => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Outline Card</CardTitle>
        <CardDescription>This card uses the outline variant</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  ),
  args: {
    variant: 'outline',
  },
}

export const Clickable: Story = {
  render: args => (
    <Card {...args} render={<button />}>
      <CardHeader>
        <CardTitle>Clickable Card</CardTitle>
        <CardDescription>Click me</CardDescription>
      </CardHeader>
    </Card>
  ),
  args: {
    clickable: true,
    disabled: false,
    render: <button />,
    onClick: () => console.log('Clicked!'),
  },
}
