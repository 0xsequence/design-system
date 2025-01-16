import * as ToastPrimitive from '@radix-ui/react-toast'
import { cva } from 'class-variance-authority'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ComponentType,
  createContext,
  SetStateAction,
  useContext,
  useState,
  Dispatch,
} from 'react'

import { CheckmarkIcon, CloseIcon } from '~/icons'
import { IconProps } from '~/icons/types'

import { Card } from '../Card'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

const toastVariants = cva(
  [
    'will-change-transform will-change-opacity',
    'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
    'data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out',
    'data-[swipe=end]:animate-swipeOut',
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

export type ToastProps = ToastPrimitive.ToastProps & {
  id?: string
  title?: string
  description?: string
  variant?: 'normal' | 'success' | 'error'
  isDismissible?: boolean
  icon?: ComponentType<IconProps>
}

const ToastQueueContext = createContext<
  Dispatch<SetStateAction<Set<ToastProps>>>
>(null as any)

export const ToastProvider = (props: ToastPrimitive.ToastProviderProps) => {
  const { children, ...rest } = props
  const [toasts, setToasts] = useState<Set<ToastProps>>(new Set())

  return (
    <ToastPrimitive.Provider {...rest}>
      <ToastQueueContext.Provider value={setToasts}>
        {children}

        <AnimatePresence>
          {Array.from(toasts).map(toast => (
            <Toast key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </ToastQueueContext.Provider>

      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

const ToastViewport = () => (
  <ToastPrimitive.Viewport className="fixed right-0 bottom-0 focus:outline-none w-full flex flex-col gap-2 p-4 pt-0 z-[1000] list-none max-w-[532px]" />
)

export const Toast = (props: ToastProps) => {
  const {
    id,
    variant,
    title,
    description,
    icon: Icon,
    isDismissible = true,
    ...rest
  } = props

  const renderIcon = () => {
    if (Icon) {
      return <Icon />
    }

    switch (variant) {
      case 'success':
        return (
          <div className="bg-positive text-black rounded-full w-8 h-8 place-items-center min-w-0 flex-shrink-0 flex items-center justify-center">
            <CheckmarkIcon />
          </div>
        )
      case 'error':
        return (
          <div className="bg-negative text-black rounded-full w-8 h-8 place-items-center min-w-0 flex-shrink-0 flex items-center justify-center">
            <CloseIcon />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <ToastPrimitive.Root
      className={toastVariants({ variant })}
      open
      forceMount
      asChild
      {...rest}
    >
      <Card
        className="rounded-md bg-button-glass backdrop-blur relative flex justify-between w-full"
        asChild
      >
        <motion.li
          layoutId={id}
          layout
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ y: '100%', opacity: 0 }}
        >
          <div className="flex gap-3 items-center">
            {renderIcon()}

            <div className="flex flex-col gap-1">
              {title && (
                <ToastPrimitive.Title>
                  <Text
                    variant="normal"
                    fontWeight="bold"
                    color="text80"
                    asChild
                  >
                    <div>{title}</div>
                  </Text>
                </ToastPrimitive.Title>
              )}

              <ToastPrimitive.Description>
                <Text
                  variant="normal"
                  fontWeight="medium"
                  color="text50"
                  asChild
                >
                  <div>{description}</div>
                </Text>
              </ToastPrimitive.Description>
            </div>
          </div>

          {isDismissible && (
            <ToastPrimitive.Close aria-label="Close" asChild>
              <IconButton icon={CloseIcon} size="xs" />
            </ToastPrimitive.Close>
          )}
        </motion.li>
      </Card>
    </ToastPrimitive.Root>
  )
}

export const useToast = () => {
  const setToasts = useContext(ToastQueueContext)

  return (props: ToastProps) => {
    const toast: ToastProps = {
      ...props,
      id: Math.random().toString(36).slice(2, 12),
      onOpenChange: open => {
        if (!open) {
          setToasts(toasts => {
            toasts.delete(toast)
            return new Set([...toasts])
          })
        }
      },
    }

    setToasts(toasts => new Set([...toasts, toast]))
  }
}
