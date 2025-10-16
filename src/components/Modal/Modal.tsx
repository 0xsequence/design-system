import * as ModalPrimitive from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { motion, type HTMLMotionProps } from 'motion/react'
import { Fragment, type PropsWithChildren } from 'react'

import { IconButton } from '../IconButton/IconButton.js'
import { Scroll } from '../Scroll/Scroll.js'
import { Text } from '../Text/Text.js'
import { useTheme } from '../ThemeProvider/ThemeProvider.js'
import { CloseIcon } from '../../icons/index.js'
import { cn } from '../../utils/classnames.js'

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

  overlayColor?: string
  disableAnimation?: boolean
  overlayProps?: HTMLMotionProps<'div'>
  contentProps?: HTMLMotionProps<'div'>
  rootProps?: {
    className?: string
    [key: string]: unknown
  }
  title?: string
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    header,
    footer,
    autoHeight = false,
    overlayColor = 'bg-background-overlay/90',
    children,
    disableAnimation = false,
    isDismissible = true,
    onClose,
    scroll = true,
    size = 'lg',
    overlayProps,
    contentProps,
    rootProps = {},
    title = 'Modal dialog',
  } = props

  const { container } = useTheme()

  const ContentWrapper = scroll ? Scroll : Fragment

  return container ? (
    <ModalPrimitive.Root modal defaultOpen onOpenChange={onClose}>
      <ModalPrimitive.Portal forceMount container={container}>
        <ModalPrimitive.Overlay
          {...rootProps}
          className={cn(
            'seq-root',
            'fixed inset-0 flex items-center justify-center z-20',
            rootProps?.className
          )}
          forceMount
        >
          <motion.div
            className={clsx('absolute inset-0', overlayColor)}
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
              <VisuallyHidden>
                <ModalPrimitive.Title>{title}</ModalPrimitive.Title>
              </VisuallyHidden>
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
        </ModalPrimitive.Overlay>
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
        'before:absolute before:left-0 before:-bottom-4 before:w-full before:h-4 before:z-[11] before:pointer-events-none before:bg-gradient-to-t before:from-transparent before:to-background-primary/70'
      )}
    >
      <div className="backdrop-blur-md bg-background-primary/70 absolute w-full h-full top-0 left-0 border-b-1 border-border-card" />
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
        'before:absolute before:left-0 before:-top-4 before:w-full before:h-4 before:z-[11] before:pointer-events-none before:bg-gradient-to-b before:from-transparent before:to-background-primary/70'
      )}
    >
      <div className="backdrop-blur-md bg-background-primary/70 absolute w-full h-full top-0 left-0 border-t-1 border-border-card" />
      <div className="relative w-full z-10 pb-[calc(env(safe-area-inset-bottom))]">
        {children}
      </div>
    </div>
  )
}

export { ModalPrimitive }
