import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'

import { Button } from '~/components/Button/Button.js'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet.js'

export default {
  title: 'Components/Sheet',
} as Meta<typeof SheetContent>

type Story = StoryObj<typeof SheetContent>

const StoryWrapper: StoryFn<typeof SheetContent> = args => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button label="Open" />
      </SheetTrigger>
      <SheetContent {...args}></SheetContent>
    </Sheet>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    side: 'left',
    children: (
      <>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button variant="primary" label="Save changes" />
          <SheetClose asChild>
            <Button label="Close" />
          </SheetClose>
        </SheetFooter>
      </>
    ),
  },
}
