import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { Text } from '~/components/Text'
import { ChevronLeftIcon } from '~/icons'

import { Box } from '../Box'

import * as styles from './styles.css'

export const Collapsible = (
  props: CollapsiblePrimitive.CollapsibleProps & {
    label: string | JSX.Element
    className?: string
  }
) => {
  const { defaultOpen, label, children, className } = props
  const [expanded, toggleExpanded] = useState(defaultOpen)

  return (
    <CollapsiblePrimitive.Root
      className={clsx(styles.root, className)}
      defaultOpen={defaultOpen}
      onOpenChange={toggleExpanded}
      asChild
    >
      <motion.div
        initial={{ height: defaultOpen ? 'auto' : styles.COLLAPSED_HEIGHT }}
        animate={{ height: expanded ? 'auto' : styles.COLLAPSED_HEIGHT }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <CollapsiblePrimitive.Trigger className={styles.trigger}>
          {typeof label === 'string' ? (
            <Text variant="medium" color="textBody">
              {label}
            </Text>
          ) : (
            label
          )}
          <Box
            as={motion.div}
            position="absolute"
            right="0"
            marginRight="4"
            initial={{ rotate: defaultOpen ? -90 : 0 }}
            animate={{ rotate: expanded ? -90 : 0 }}
            transition={{ ease: 'linear', duration: 0.1 }}
          >
            <ChevronLeftIcon className={styles.icon} color="textFaded" />
          </Box>
        </CollapsiblePrimitive.Trigger>
        <AnimatePresence>
          {expanded && (
            <CollapsiblePrimitive.Content
              className={styles.content}
              asChild
              forceMount
            >
              <motion.div
                initial={{ opacity: defaultOpen ? 1 : 0 }}
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
