import { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'

import { Text } from '~/components/Text'

import { ControlledCollapsible } from './ControlledCollapsible'

export default {
  title: 'Components/Collapsible',
  component: ControlledCollapsible,
} as Meta<typeof ControlledCollapsible>

type Story = StoryObj<typeof ControlledCollapsible>

const CollapsibleStory = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <ControlledCollapsible
      open={isOpen}
      label="My Heading"
      onOpenChange={open => setIsOpen(open)}
    >
      {[1, 2, 3, 4, 5].map(x => (
        <Text variant="normal" as="p" color="text80" key={x}>
          Item {x}
        </Text>
      ))}
    </ControlledCollapsible>
  )
}

export const Default: Story = {
  render: () => <CollapsibleStory />,
}
