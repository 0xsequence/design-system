import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { CloseIcon } from '~/icons'

import { IconButton } from '../IconButton'
import { Scroll } from '../Scroll'

import * as styles from './styles.css'

export interface ModalProps {
  backdropColor?: BoxProps['background']
  className?: string
  closeOnEscape?: boolean
  closeOnOverlayClick?: boolean
  disableAnimation?: boolean
  onClose?: () => void
  scroll?: boolean
}

// const portalRoot = document.getElementById('portal')

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    backdropColor = 'gradientBackdrop',
    children,
    disableAnimation = false,
    scroll = true,
    onClose,
    closeOnOverlayClick = true,
    closeOnEscape = true,
  } = props

  return (
    <Dialog.Root defaultOpen onOpenChange={onClose}>
      <Dialog.Portal forceMount /* container={portalRoot} */>
        <Box className={styles.root}>
          <Box
            as={Dialog.Overlay}
            asChild
            background={backdropColor}
            className={styles.overlay}
            forceMount
          >
            <motion.div
              key="modal-overlay"
              initial={disableAnimation ? false : { opacity: 0 }}
              animate={disableAnimation ? false : { opacity: 1 }}
              exit={disableAnimation ? undefined : { opacity: 0 }}
              transition={{
                type: 'tween',
                ease: 'linear',
              }}
            >
              {/* {closeOnOverlayClick && (
                <IconButton icon={CloseIcon} className={styles.close} />
              )} */}
            </motion.div>
          </Box>

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
              initial={disableAnimation ? false : { y: '100%' }}
              animate={disableAnimation ? false : { y: 0 }}
              exit={disableAnimation ? undefined : { y: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut' }}
            >
              {scroll ? <Scroll>{children}</Scroll> : children}

              {closeOnOverlayClick && (
                <Dialog.Close asChild>
                  <IconButton
                    icon={CloseIcon}
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
