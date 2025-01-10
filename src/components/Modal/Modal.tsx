import * as ModalPrimitive from '@radix-ui/react-dialog'
import { cva, VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { motion, MotionProps } from 'framer-motion'
import { PropsWithChildren, useEffect, useState } from 'react'

import { CloseIcon } from '~/icons'

import { IconButton } from '../IconButton'
import { Scroll } from '../Scroll'
import { useTheme } from '../ThemeProvider'

const modalContentVariants = cva(
  [
    'flex',
    'flex-col',
    'fixed',
    'overflow-hidden',
    'bg-background-primary',
    'focus:outline-none',
    'scrollbar-none',
    'bottom-0 md:bottom-auto',
    'rounded-t-2xl rounded-b-none md:rounded-b-2xl',
  ],
  {
    variants: {
      size: {
        sm: [
          'w-screen md:w-[540px]',
          'min-h-[100px] max-h-[calc(100dvh-80px)] md:max-h-[min(800px,calc(100dvh-80px))]',
        ],
        lg: [
          'w-screen md:w-[720px]',
          'h-[calc(100dvh-70px)] md:h-[800px] md:max-h-[min(800px,calc(100dvh-80px))]',
        ],
      },
      autoHeight: {
        true: 'lg:!h-auto',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
)

export interface ModalProps extends VariantProps<typeof modalContentVariants> {
  backdropColor?: string
  className?: string
  disableAnimation?: boolean
  isDismissible?: boolean
  onClose?: () => void
  scroll?: boolean
  overlayProps?: MotionProps
  contentProps?: MotionProps
  rootProps?: {
    className?: string
    [key: string]: unknown
  }
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    autoHeight = false,
    backdropColor = 'bg-background-backdrop',
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
        <div
          className={clsx(
            'seq-root',
            'fixed inset-0 z-20 flex items-center justify-center',
            rootProps?.className
          )}
          {...rootProps}
        >
          <ModalPrimitive.Overlay asChild forceMount>
            <motion.div
              className={clsx('fixed inset-0', backdropColor)}
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
          </ModalPrimitive.Overlay>

          <ModalPrimitive.Content
            asChild
            className={modalContentVariants({ size, autoHeight })}
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
                    className="absolute right-4 top-4 z-20"
                    aria-label="Close"
                  />
                </ModalPrimitive.Close>
              )}
            </motion.div>
          </ModalPrimitive.Content>
        </div>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  ) : null
}

export { ModalPrimitive }
