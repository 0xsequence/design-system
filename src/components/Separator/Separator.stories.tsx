import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '../Card/Card.js'

import { Separator } from './Separator.js'

export default {
  title: 'Components/Separator',
  component: Separator,
} as Meta<typeof Separator>

type Story = StoryObj<typeof Separator>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
}

export const Example = {
  render: () => (
    <Card>
      <div className="space-y-1">
        <h4 className="text-primary text-sm leading-none font-medium">
          Radix Primitives
        </h4>
        <p className="text-muted text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="text-primary flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </Card>
  ),
}
