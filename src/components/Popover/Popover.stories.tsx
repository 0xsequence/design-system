import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Button } from '../Button/Button.js'
import { Separator } from '../Separator/Separator.js'

import { Popover, PopoverContent, PopoverTrigger } from './Popover.js'

export default {
  title: 'Components/Popover',
} as Meta<any>

type Story = StoryObj<typeof PopoverContent>

const StoryWrapper = (props: ComponentProps<typeof PopoverContent>) => {
  const { children, ...rest } = props
  return (
    <div className="flex justify-center">
      <Popover>
        <PopoverTrigger render={<Button>Open Popover</Button>} />
        <PopoverContent className="w-[480px]" {...rest}>
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
        <div className="p-4">
          <span className="text-xl text-primary">This is a popover</span>
        </div>
        <Separator />
        <div className="p-4">
          <span className="text-sm text-muted">
            It can contain any content you like.
          </span>
        </div>
      </div>
    ),
    sideOffset: 8,
    align: 'center',
    alignOffset: 0,
    side: 'bottom',
  },
}
