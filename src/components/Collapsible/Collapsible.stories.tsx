import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Card } from '../Card/Card.js'

import { Collapsible } from './Collapsible.js'

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
} as Meta<typeof Collapsible>

type Story = StoryObj<typeof Collapsible>

const CollapsibleStory = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapsible
      open={isOpen}
      label="My Heading"
      onOpenChange={open => setIsOpen(open)}
    >
      {[1, 2, 3, 4, 5].map(x => (
        <p className="text-normal text-secondary" key={x}>
          Item {x}
        </p>
      ))}
    </Collapsible>
  )
}

export const Default: Story = {
  args: {
    label: 'My Heading',
    children: (
      <Card>
        {[1, 2, 3, 4, 5].map(x => (
          <p className="text-normal text-secondary" key={x}>
            Item {x}
          </p>
        ))}
      </Card>
    ),
    variant: 'default',
  },
}

export const Controlled: Story = {
  render: () => <CollapsibleStory />,
}
