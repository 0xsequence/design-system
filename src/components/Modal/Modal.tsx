import * as ModalPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'
import { motion, MotionProps } from 'framer-motion'
import { PropsWithChildren, useEffect, useState } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { CloseIcon } from '~/icons'

import { IconButton } from '../IconButton'
import { Scroll } from '../Scroll'
import { useTheme } from '../ThemeProvider'

import * as styles from './styles.css'

export { ModalPrimitive }

export type ModalProps = {
  backdropColor?: BoxProps['background']
  className?: string
  disableAnimation?: boolean
  isDismissible?: boolean
  onClose?: () => void
  scroll?: boolean
  overlayProps?: MotionProps
  contentProps?: MotionProps
  rootProps?: BoxProps
} & styles.ContentVariants

// const portalRoot = document.getElementById('portal')

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    autoHeight = false,
    backdropColor = 'backgroundBackdrop', // gradientBackdrop for onboarding or special modals
    children,
    disableAnimation = false,
    isDismissible = true,
    onClose,
    scroll = true,
    size = 'lg',
    overlayProps,
    contentProps,
    rootProps = {},
  } = props
  const { root } = useTheme()
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setContainer(document.querySelector(root || 'body') as HTMLElement | null)
  }, [root])

  return container ? (
    <ModalPrimitive.Root modal defaultOpen onOpenChange={onClose}>
      <ModalPrimitive.Portal forceMount container={container}>
        <Box
          {...rootProps}
          className={clsx('seq-root', styles.root, rootProps?.className)}
        >
          <Box
            as={ModalPrimitive.Overlay}
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
              {...overlayProps}
            />
          </Box>

          <ModalPrimitive.Content
            asChild
            className={styles.contentVariants({ autoHeight, size })}
            forceMount
            onEscapeKeyDown={ev => {
              if (isDismissible) {
                onClose?.()
              } else {
                ev.preventDefault()
              }
            }}
            onInteractOutside={ev => {
              if (!isDismissible) {
                ev.preventDefault()
              }
            }}
          >
            <motion.div
              key="modal-content"
              initial={
                disableAnimation
                  ? false
                  : { y: '100%', opacity: size === 'sm' ? 0 : 1 }
              }
              animate={
                disableAnimation
                  ? false
                  : { y: 0, opacity: size === 'sm' ? 1 : 1 }
              }
              exit={
                disableAnimation
                  ? undefined
                  : { y: '100%', opacity: size === 'sm' ? 0 : 1 }
              }
              transition={{ type: 'tween', ease: 'easeOut' }}
              {...contentProps}
            >
              {scroll ? <Scroll>{children}</Scroll> : children}

              {isDismissible && (
                <ModalPrimitive.Close asChild>
                  <IconButton
                    icon={CloseIcon}
                    backdropFilter="blur"
                    size="xs"
                    className={styles.close}
                    aria-label="Close"
                  />
                </ModalPrimitive.Close>
              )}
            </motion.div>
          </ModalPrimitive.Content>
        </Box>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  ) : null
}
