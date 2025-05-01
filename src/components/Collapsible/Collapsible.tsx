import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { useState, type ReactNode } from 'react'

import { Text } from '~/components/Text/index.js'
import { ChevronDownIcon } from '~/icons/index.js'

const COLLAPSED_HEIGHT = '64px'

interface CollapsibleProps extends CollapsiblePrimitive.CollapsibleProps {
  label: ReactNode
}

export const Collapsible = (props: CollapsibleProps) => {
  const {
    className,
    children,
    defaultOpen,
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
    <CollapsiblePrimitive.Root
      open={isOpen}
      defaultOpen={defaultOpen}
      onOpenChange={handleOpenChange}
      asChild
      {...rest}
    >
      <motion.div
        className={clsx(
          'min-h-[64px] rounded-xl bg-background-secondary relative overflow-hidden w-full ring-inset focus-within:[&:has(:focus-visible)]:ring-2 focus-within:ring-border-focus',
          className
        )}
        initial={{ height: isOpen ? 'auto' : COLLAPSED_HEIGHT }}
        animate={{ height: isOpen ? 'auto' : COLLAPSED_HEIGHT }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <CollapsiblePrimitive.Trigger className="flex items-center bg-transparent p-4 w-full cursor-pointer select-none rounded-xl border-none appearance-none h-[64px] focus:outline-hidden">
          <Text variant="normal" fontWeight="bold" color="secondary" asChild>
            <div>{label}</div>
          </Text>
          <motion.div
            className="absolute right-0 mr-4"
            initial={{ rotate: isOpen ? 180 : 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ ease: 'linear', duration: 0.1 }}
          >
            <ChevronDownIcon className="h-5 w-5 block text-muted" />
          </motion.div>
        </CollapsiblePrimitive.Trigger>
        <AnimatePresence>
          {isOpen && (
            <CollapsiblePrimitive.Content
              className="pt-0 px-4 pb-4 w-full origin-top"
              asChild
              forceMount
            >
              <motion.div
                initial={{ opacity: isOpen ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
              >
                {children}
              </motion.div>
            </CollapsiblePrimitive.Content>
          )}
        </AnimatePresence>
      </motion.div>
    </CollapsiblePrimitive.Root>
  )
}

export { CollapsiblePrimitive }
