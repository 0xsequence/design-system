import * as ModalPrimitive from '@radix-ui/react-dialog'
import type { DialogContentProps } from '@radix-ui/react-dialog'
import { cva, VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { HTMLMotionProps, motion } from 'motion/react'
import { PropsWithChildren, Fragment } from 'react'

import { CloseIcon } from '~/icons'
import { cn } from '~/utils'

import { IconButton } from '../IconButton'
import { Scroll } from '../Scroll'
import { Text } from '../Text'
import { useTheme } from '../ThemeProvider'

const modalContentVariants = cva(
  [
    'flex',
    'flex-col',
    'fixed',
    'overflow-hidden',
    'bg-background-primary',
    'focus:outline-hidden',
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
        true: 'lg:h-auto!',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
)

export interface ModalProps extends VariantProps<typeof modalContentVariants> {
  header?: React.ReactNode
  footer?: React.ReactNode
  scroll?: boolean
  isDismissible?: boolean
  onClose?: () => void

  backdropColor?: string
  disableAnimation?: boolean
  overlayProps?: HTMLMotionProps<'div'>
  contentProps?: HTMLMotionProps<'div'>
  rootProps?: {
    className?: string
    [key: string]: unknown
  }
  dialogContentProps?: DialogContentProps
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    header,
    footer,
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
    dialogContentProps = {},
  } = props

  const { container } = useTheme()

  const ContentWrapper = scroll ? Scroll : Fragment

  return container ? (
    <ModalPrimitive.Root modal defaultOpen onOpenChange={onClose}>
      <ModalPrimitive.Portal forceMount container={container}>
        <div
          {...rootProps}
          className={cn(
            'seq-root',
            'fixed inset-0 z-20 flex items-center justify-center',
            rootProps?.className
          )}
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
            {...dialogContentProps}
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
              transformTemplate={(_latest, generated) => {
                return `${generated} translateZ(0)`
              }}
              {...contentProps}
              className={cn(
                modalContentVariants({ size, autoHeight }),
                contentProps?.className
              )}
            >
              {header && <ModalHeader>{header}</ModalHeader>}
              <ContentWrapper>
                {header && <ModalHeaderSpacer />}
                {children}
              </ContentWrapper>
              {footer && <ModalFooter>{footer}</ModalFooter>}
              {isDismissible && (
                <ModalPrimitive.Close asChild>
                  <IconButton
                    icon={CloseIcon}
                    size="xs"
                    className="absolute right-4 top-4 z-20 backdrop-blur-xs"
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

const ModalHeader = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <div
      className={clsx(
        'absolute top-0 left-0 right-0 h-[60px] p-4 z-10',
        'before:absolute before:left-0 before:-bottom-4 before:w-full before:h-4 before:z-[11] before:pointer-events-none before:bg-gradient-to-t before:from-transparent before:to-background-overlay'
      )}
    >
      <div className="backdrop-blur-md bg-background-overlay absolute w-full h-full top-0 left-0" />
      <div className="relative h-full w-full z-10 flex items-center justify-center">
        {typeof children === 'string' ? (
          <Text variant="normal" fontWeight="bold" color="primary" block>
            {children}
          </Text>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

const ModalHeaderSpacer = () => <div className="pt-[60px]" />

const ModalFooter = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <div
      className={clsx(
        'absolute bottom-0 left-0 right-0 p-4',
        'before:absolute before:left-0 before:-top-4 before:w-full before:h-4 before:z-[11] before:pointer-events-none before:bg-gradient-to-b before:from-transparent before:to-background-overlay'
      )}
    >
      <div className="backdrop-blur-md bg-background-overlay absolute w-full h-full top-0 left-0" />
      <div className="relative w-full z-10 pb-[calc(env(safe-area-inset-bottom))]">
        {children}
      </div>
    </div>
  )
}

export { ModalPrimitive }
