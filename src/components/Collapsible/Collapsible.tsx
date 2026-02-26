import { Collapsible as CollapsiblePrimitive } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { useState, type ComponentProps, type ReactNode } from 'react'
import { cn } from 'src/utils/classnames.js'

import { ChevronDownIcon } from '../../icons/index.js'
import { focusRingVariants } from '../../styles.js'

function CollapsibleRoot({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
  )
}

function CollapsibleContent({ ...props }: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
  )
}

const collapsibleVariants = cva(
  [
    'min-h-[64px] rounded-xl relative overflow-hidden w-full',
    focusRingVariants({ variant: 'within' }),
  ],
  {
    variants: {
      variant: {
        default: 'bg-background-secondary border-1 border-border-card',
        muted: 'bg-background-muted border-1 border-border-card',
        outline: 'bg-transparent ring-inset border-1 border-border-normal',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface CollapsibleProps
  extends
    Omit<ComponentProps<typeof CollapsiblePrimitive.Root>, 'onOpenChange'>,
    VariantProps<typeof collapsibleVariants> {
  label: ReactNode
  onOpenChange?: (open: boolean) => void
}

export const Collapsible = (props: CollapsibleProps) => {
  const {
    className,
    variant,
    children,
    defaultOpen = false,
    open,
    onOpenChange,
    label,
    ...rest
  } = props

  const [expanded, toggleExpanded] = useState(defaultOpen)
  const isOpen = open ?? expanded

  const handleSetExpanded = (isExpanded: boolean) => {
    if (open !== undefined) {
      return
    }

    toggleExpanded(isExpanded)
  }

  const handleOpenChange = (isOpen: boolean) => {
    handleSetExpanded(isOpen)
    onOpenChange?.(isOpen)
  }

  return (
    <CollapsibleRoot
      open={isOpen}
      defaultOpen={defaultOpen}
      onOpenChange={handleOpenChange}
      className={cn(collapsibleVariants({ variant }), className)}
      {...rest}
    >
      <CollapsibleTrigger
        className={clsx(
          'group flex items-center p-4 bg-transparent w-full cursor-pointer select-none rounded-xl border-none appearance-none h-[64px] focus:outline-hidden',
          'text-normal-bold text-primary hover:text-primary/80'
        )}
      >
        {label}
        <ChevronDownIcon className="h-5 w-5 block text-muted absolute right-0 mr-4 group-data-panel-open:rotate-180 transition-transform duration-150" />
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col justify-end overflow-hidden w-full transition-[height, opacity] duration-150 ease-out h-(--collapsible-panel-height) data-starting-style:h-0 data-ending-style:h-0 opacity-100 data-starting-style:opacity-0 data-ending-style:opacity-0">
        <div className="pt-0 px-4 pb-4">{children}</div>
      </CollapsibleContent>
    </CollapsibleRoot>
  )
}

export { CollapsiblePrimitive }
