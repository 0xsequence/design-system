import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../Button/index.js'
import { Card } from '../Card/index.js'
import { Text } from '../Text/index.js'

import { Popover, PopoverContent, PopoverTrigger } from './Popover.js'

export default {
  title: 'Components/Popover',
} as Meta<any>

type Story = StoryObj<typeof PopoverContent>

const StoryWrapper = (props: React.ComponentProps<typeof PopoverContent>) => {
  const { children, ...rest } = props
  return (
    <div className="flex justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button label="Open Popover" />
        </PopoverTrigger>
        <PopoverContent className="p-4 w-[480px]" {...rest}>
          {children}
        </PopoverContent>
      </Popover>
    </div>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    children: (
      <div>
        <Card>
          <div>
            <Text variant="large" color="primary">
              This is a popover
            </Text>
          </div>
          <div>
            <Text variant="normal" color="muted">
              It can contain any content you like.
            </Text>
          </div>
        </Card>
      </div>
    ),
    sideOffset: 8,
    align: 'center',
    alignOffset: 0,
    side: 'bottom',
  },
}
