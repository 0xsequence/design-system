import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { useIsKeyboardFocused } from '../../hooks/useIsKeyboardFocused.js'
import { focusRingVariants, inputBorderStyle } from '../../styles.js'
import { cn } from '../../utils/classnames.js'
import { Input } from '../Input/Input.js'
import { NumericInput } from '../NumericInput/NumericInput.js'
import { TextArea } from '../TextArea/TextArea.js'

function InputGroup({ className, ...props }: ComponentProps<'div'>) {
  const isKeyboardFocused = useIsKeyboardFocused()

  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'group/input-group relative flex w-full items-center rounded-xl',
        'h-10 min-w-0 has-[>textarea]:h-auto bg-background-input',
        inputBorderStyle,

        // Variants based on alignment
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

        // Disabled state
        'has-[[data-slot=input-group-control]:disabled]:opacity-50 has-[[data-slot=input-group-control]:disabled]:cursor-not-allowed has-[[data-slot=input-group-control]:disabled]:pointer-events-none',

        // Focus state
        isKeyboardFocused
          ? focusRingVariants({ variant: 'within' })
          : 'focus:outline-none',

        // Error state
        'has-[[data-slot][aria-invalid=true]]:outline-destructive has-[[data-slot][aria-invalid=true]]:border-destructive',

        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({ className, ...props }: ComponentProps<'input'>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent outline-none disabled:opacity-100',
        className
      )}
      {...props}
    />
  )
}

function InputGroupNumericInput({
  className,
  ...props
}: ComponentProps<'input'>) {
  return (
    <NumericInput
      data-slot="input-group-control"
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent outline-none disabled:opacity-100',
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: ComponentProps<'textarea'>) {
  return (
    <TextArea
      data-slot="input-group-control"
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent outline-none disabled:opacity-100',
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  [
    'text-xs text-primary flex h-auto cursor-text items-center justify-center gap-2 py-1.5 select-none group-data-[disabled=true]/input-group:opacity-50 [&_svg:not([class*="size-"])]:size-4',
  ],
  {
    variants: {
      align: {
        'inline-start': 'order-first pl-3',
        'inline-end': 'order-last pr-3',
        'block-start':
          'order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5',
        'block-end':
          'order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  }
)

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={e => {
        if ((e.target as HTMLElement).closest('button')) {
          return
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus()
      }}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'text-sm text-muted flex items-center gap-2 [&_svg]:pointer-events-none',
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupNumericInput,
  InputGroupText,
  InputGroupTextarea,
}
