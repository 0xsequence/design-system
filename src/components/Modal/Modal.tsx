import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

import { CloseIcon } from '~/icons'

import { Box } from '../Box'

import * as styles from './styles.css'

export interface ModalProps {
  onClose?: () => void
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  className?: string
}

// const portalRoot = document.getElementById('portal')

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    children,
    onClose,
    closeOnOverlayClick = true,
    closeOnEscape = true,
  } = props

  return (
    <Dialog.Root defaultOpen onOpenChange={onClose}>
      <Dialog.Portal forceMount /* container={portalRoot} */>
        <Box className={styles.root}>
          <Dialog.Overlay className={styles.overlay} forceMount asChild>
            <motion.div
              key="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'tween',
                ease: 'linear',
              }}
            >
              {closeOnOverlayClick && (
                <Box className={styles.close}>
                  <CloseIcon />
                </Box>
              )}
            </motion.div>
          </Dialog.Overlay>

          <Dialog.Content
            className={styles.content}
            onEscapeKeyDown={() => {
              if (closeOnEscape) {
                onClose?.()
              }
            }}
            forceMount
            asChild
          >
            <motion.div
              key="modal-content"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          </Dialog.Content>
        </Box>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
