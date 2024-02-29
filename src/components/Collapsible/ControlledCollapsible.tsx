import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

import { Text } from '~/components/Text'
import { ChevronDownIcon } from '~/icons'

import { Box, BoxProps } from '../Box'

import * as styles from './styles.css'

type ControlledCollapsibleProps = BoxProps &
  Omit<CollapsiblePrimitive.CollapsibleProps, 'open' | 'defaultOpen'> & {
    open: boolean
    label: ReactNode
  }

export const ControlledCollapsible = (props: ControlledCollapsibleProps) => {
  const { className, children, open, onOpenChange, label, ...rest } = props

  return (
    <CollapsiblePrimitive.Root open={open} onOpenChange={onOpenChange} asChild>
      <Box
        as={motion.div}
        className={clsx(className, styles.root)}
        initial={{ height: open ? 'auto' : styles.COLLAPSED_HEIGHT }}
        animate={{ height: open ? 'auto' : styles.COLLAPSED_HEIGHT }}
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
            initial={{ rotate: open ? 180 : 0 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ ease: 'linear', duration: 0.1 }}
          >
            <ChevronDownIcon className={styles.icon} color="text50" />
          </Box>
        </CollapsiblePrimitive.Trigger>
        <AnimatePresence>
          {open && (
            <CollapsiblePrimitive.Content
              className={styles.content}
              asChild
              forceMount
            >
              <motion.div
                initial={{ opacity: open ? 1 : 0 }}
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
