import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import * as styles from './styles.css'

export const Collapsible = (
  props: CollapsiblePrimitive.CollapsibleProps & { label: string | JSX.Element; className?: string }
) => {
  const { defaultOpen, label, children, className } = props
  const [isExpanded, toggleExpanded] = useState(defaultOpen)

  return (
    <CollapsiblePrimitive.Root
      className={clsx(styles.root, className)}
      defaultOpen={defaultOpen}
      onOpenChange={toggleExpanded}
      asChild
    >
      <motion.div
        initial={{ height: defaultOpen ? 'auto' : styles.COLLAPSED_HEIGHT }}
        animate={{ height: isExpanded ? 'auto' : styles.COLLAPSED_HEIGHT }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <CollapsiblePrimitive.Trigger className={styles.trigger}>
          {typeof label === 'string' ? <div className={styles.label}>{label}</div> : label}
          {/* <ExpandIcon expanded={isExpanded} /> */}
        </CollapsiblePrimitive.Trigger>
        <AnimatePresence>
          {isExpanded && (
            <CollapsiblePrimitive.Content className={styles.content} asChild forceMount>
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
