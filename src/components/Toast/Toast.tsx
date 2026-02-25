import { Toast } from '@base-ui/react'
import { cva } from 'class-variance-authority'
import { AnimatePresence, motion } from 'motion/react'
import { type ComponentType } from 'react'

import { CheckmarkIcon, CloseIcon } from '../../icons/index.js'
import { type IconProps } from '../../icons/types.js'
import { Card } from '../Card/Card.js'
import { IconButton } from '../IconButton/IconButton.js'
import { Text } from '../Text/Text.js'

type ToastVariant = 'normal' | 'success' | 'error'

type ToastData = {
  variant?: ToastVariant
  isDismissible?: boolean
  icon?: ComponentType<IconProps>
}

export type ToastProps = {
  id?: string
  title?: string
  description?: string
  variant?: ToastVariant
  isDismissible?: boolean
  icon?: ComponentType<IconProps>
}

const toastVariants = cva(
  [
    'will-change-transform will-change-opacity',
    'data-[swiping]:translate-x-(--toast-swipe-movement-x)',
    'data-[swipe-direction=right]:data-[swiping]:translate-x-(--toast-swipe-movement-x)',
    'data-[swipe-direction=left]:data-[swiping]:translate-x-(--toast-swipe-movement-x)',
  ],
  {
    variants: {
      variant: {
        normal: '',
        success: 'text-positive',
        error: 'text-negative',
      },
    },
    defaultVariants: {
      variant: 'normal',
    },
  }
)

export const ToastProvider = (props: Toast.Provider.Props) => {
  const { children, ...rest } = props

  return (
    <Toast.Provider {...rest}>
      <ToasterList />
      {children}
    </Toast.Provider>
  )
}

function ToasterList() {
  const { toasts } = Toast.useToastManager<ToastData>()

  return (
    <Toast.Viewport className="fixed right-0 bottom-0 focus:outline-hidden w-full flex flex-col gap-2 p-4 pt-0 z-1000 list-none max-w-[532px]">
      <AnimatePresence>
        {toasts.map(toast => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </Toast.Viewport>
  )
}

function ToastItem({
  toast,
}: {
  toast: Toast.Root.ToastObject<ToastData>
}) {
  const { id, title, description, data } = toast
  const variant = data?.variant ?? 'normal'
  const isDismissible = data?.isDismissible ?? true
  const Icon = data?.icon

  const renderIcon = () => {
    if (Icon) {
      return <Icon />
    }

    switch (variant) {
      case 'success':
        return (
          <div className="bg-positive text-white rounded-full w-8 h-8 place-items-center min-w-0 shrink-0 flex items-center justify-center">
            <CheckmarkIcon />
          </div>
        )
      case 'error':
        return (
          <div className="bg-negative text-white rounded-full w-8 h-8 place-items-center min-w-0 shrink-0 flex items-center justify-center">
            <CloseIcon />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Toast.Root
      toast={toast}
      className={toastVariants({ variant })}
      render={
        <Card
          className="rounded-md bg-background-raised relative flex justify-between w-full shadow-primary"
          render={
            <motion.li
              layoutId={id}
              layout
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ y: '100%', opacity: 0 }}
            />
          }
        />
      }
    >
      <div className="flex gap-3 items-center">
        {renderIcon()}

        <div className="flex flex-col gap-1">
          {title && (
            <Toast.Title>
              <Text
                variant="normal"
                fontWeight="bold"
                color="secondary"
                render={<div />}
              >
                {title}
              </Text>
            </Toast.Title>
          )}

          <Toast.Description>
            <Text
              variant="normal"
              fontWeight="medium"
              color="muted"
              render={<div />}
            >
              {description}
            </Text>
          </Toast.Description>
        </div>
      </div>

      {isDismissible && (
        <Toast.Close
          aria-label="Close"
          render={<IconButton icon={CloseIcon} size="xs" />}
        />
      )}
    </Toast.Root>
  )
}

export { ToastItem as Toast }

export const useToast = () => {
  const { add } = Toast.useToastManager<ToastData>()

  return (props: ToastProps) => {
    add({
      id: props.id ?? Math.random().toString(36).slice(2, 12),
      title: props.title,
      description: props.description,
      data: {
        variant: props.variant,
        isDismissible: props.isDismissible,
        icon: props.icon,
      },
    })
  }
}
