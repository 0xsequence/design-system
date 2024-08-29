import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

import { Text } from '~/components/Text'
import { ChevronDownIcon } from '~/icons'

import { Box, BoxProps } from '../Box'

import * as styles from './styles.css'

export { CollapsiblePrimitive }

type CollapsibleProps = BoxProps &
  CollapsiblePrimitive.CollapsibleProps & {
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
    >
      <Box
        as={motion.div}
        className={clsx(className, styles.root)}
        initial={{ height: isOpen ? 'auto' : styles.COLLAPSED_HEIGHT }}
        animate={{ height: isOpen ? 'auto' : styles.COLLAPSED_HEIGHT }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        borderRadius="md"
        background="backgroundSecondary"
        position="relative"
        overflow="hidden"
        width="full"
        {...rest}
      >
        <CollapsiblePrimitive.Trigger className={styles.trigger}>
          <Text as="div" variant="normal" fontWeight="bold" color="text80">
            {label}
          </Text>
          <Box
            as={motion.div}
            position="absolute"
            right="0"
            marginRight="4"
            initial={{ rotate: isOpen ? 180 : 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ ease: 'linear', duration: 0.1 }}
          >
            <ChevronDownIcon className={styles.icon} color="text50" />
          </Box>
        </CollapsiblePrimitive.Trigger>
        <AnimatePresence>
          {isOpen && (
            <CollapsiblePrimitive.Content
              className={styles.content}
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
      </Box>
    </CollapsiblePrimitive.Root>
  )
}
