import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

import { CloseIcon } from '~/icons'

import { Box } from '../Box'
import { IconButton } from '../IconButton'
import { Scroll } from '../Scroll'

import * as styles from './styles.css'

export interface ModalProps {
  onClose?: () => void
  scroll?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  className?: string
}

// const portalRoot = document.getElementById('portal')

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    children,
    scroll = true,
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
              {/* {closeOnOverlayClick && (
                <IconButton Icon={CloseIcon} className={styles.close} />
              )} */}
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
              {scroll ? <Scroll>{children}</Scroll> : children}

              {closeOnOverlayClick && (
                <Dialog.Close asChild>
                  <IconButton
                    Icon={CloseIcon}
                    size="xs"
                    className={styles.close}
                    aria-label="Close"
                  />
                </Dialog.Close>
              )}
            </motion.div>
          </Dialog.Content>
        </Box>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
