import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import { useMemo, useState } from 'react'

import { Button } from '../Button/Button.js'
import { Input } from '../Input/Input.js'
import { Label } from '../Label/Label.js'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPrimitive,
  DialogTitle,
  DialogTrigger,
} from './Dialog.js'

type ItemPayload = { label: string; detail: string }

export default {
  title: 'Components/Dialog',
  component: DialogContent,
} as Meta<typeof DialogContent>

/** Shared "edit profile" body used by the Default and Responsive stories. */
function EditProfileContent() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name-1">Name</Label>
          <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username-1">Username</Label>
          <Input id="username-1" name="username" defaultValue="@peduarte" />
        </div>
      </div>
      <DialogFooter className="flex-row gap-2">
        <DialogClose
          render={
            <Button variant="secondary" size="lg" className="w-full">
              Cancel
            </Button>
          }
        />
        <Button type="submit" size="lg" className="w-full">
          Save changes
        </Button>
      </DialogFooter>
    </>
  )
}

export const Default: StoryObj<typeof DialogContent> = {
  render: args => {
    return (
      <Dialog>
        <form>
          <DialogTrigger
            render={<Button variant="outline">Open Dialog</Button>}
          />
          <DialogContent className="sm:max-w-[425px]" {...args}>
            <EditProfileContent />
          </DialogContent>
        </form>
      </Dialog>
    )
  },
  args: {},
}

function ControlledDialogStory(args: ComponentProps<typeof DialogContent>) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open from outside
        </Button>
        <span className="text-sm text-muted">open = {String(open)}</span>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]" {...args}>
          <DialogHeader>
            <DialogTitle>Controlled dialog</DialogTitle>
            <DialogDescription>
              Open state is controlled with the open and onOpenChange props on
              Dialog.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Close</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export const Controlled: StoryObj<typeof DialogContent> = {
  render: args => <ControlledDialogStory {...args} />,
  args: {},
}

/** Detached triggers + payload, per https://base-ui.com/react/components/dialog#detached-triggers-with-payload */
function DetachedPayloadDialogStory(
  args: ComponentProps<typeof DialogContent>
) {
  const dialogHandle = useMemo(
    () => DialogPrimitive.createHandle<ItemPayload>(),
    []
  )

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted">
        Detached triggers share a handle from DialogPrimitive.createHandle; each
        passes a payload and Dialog renders its children as a function of that
        payload (see Base UI &quot;Detached triggers with payload&quot;).
      </p>
      <div className="flex flex-wrap gap-2">
        <DialogTrigger
          handle={dialogHandle}
          payload={{ label: 'Alpha', detail: 'Details for the Alpha item.' }}
          render={<Button variant="outline">Open Alpha</Button>}
        />
        <DialogTrigger
          handle={dialogHandle}
          payload={{ label: 'Beta', detail: 'Details for the Beta item.' }}
          render={<Button variant="outline">Open Beta</Button>}
        />
      </div>
      <Dialog data-slot="dialog" handle={dialogHandle}>
        {({ payload }) => (
          <DialogContent className="sm:max-w-[425px]" {...args}>
            <DialogHeader>
              <DialogTitle>
                {payload !== undefined ? payload.label : 'Item'}
              </DialogTitle>
              {payload !== undefined && (
                <DialogDescription>{payload.detail}</DialogDescription>
              )}
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="outline">Close</Button>} />
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

export const DetachedWithPayload: StoryObj<typeof DialogContent> = {
  render: args => <DetachedPayloadDialogStory {...args} />,
  args: {},
}

export const Responsive: StoryObj<typeof DialogContent> = {
  render: args => <ResponsiveDialogStory {...args} />,
  args: {},
}

function ResponsiveDialogStory(args: ComponentProps<typeof DialogContent>) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
      <DialogContent responsive {...args}>
        <EditProfileContent />
      </DialogContent>
    </Dialog>
  )
}
