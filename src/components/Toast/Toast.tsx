import * as ToastPrimitive from '@radix-ui/react-toast'
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

import { Box } from '../Box'
import { Card } from '../Card'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

import * as styles from './styles.css'

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
  <ToastPrimitive.Viewport className={styles.viewport} />
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
          <Box
            background="positive"
            color="black"
            borderRadius="circle"
            width="8"
            height="8"
            placeItems="center"
            minWidth="0"
            flexShrink="0"
          >
            <CheckmarkIcon />
          </Box>
        )
      case 'error':
        return (
          <Box
            background="negative"
            color="black"
            borderRadius="circle"
            width="8"
            height="8"
            placeItems="center"
            minWidth="0"
            flexShrink="0"
          >
            <CloseIcon />
          </Box>
        )

      default:
        return null
    }
  }

  return (
    <ToastPrimitive.Root
      className={styles.toast({ variant })}
      open
      forceMount
      asChild
      duration={variant === 'error' ? Infinity : 5000}
      {...rest}
    >
      <Card
        as={motion.li}
        layoutId={id}
        layout
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ y: '100%', opacity: 0 }}
        borderRadius="md"
        background="buttonGlass"
        backdropFilter="blur"
        position="relative"
        width="full"
        justifyContent="space-between"
      >
        <Box gap="3" alignItems="center">
          {renderIcon()}

          <Box flexDirection="column" gap="1">
            {title && (
              <ToastPrimitive.Title>
                <Text
                  as="div"
                  variant="normal"
                  fontWeight="bold"
                  color="text80"
                >
                  {title}
                </Text>
              </ToastPrimitive.Title>
            )}

            <ToastPrimitive.Description>
              <Text
                as="div"
                variant="normal"
                fontWeight="medium"
                color="text50"
              >
                {description}
              </Text>
            </ToastPrimitive.Description>
          </Box>
        </Box>

        {isDismissible && (
          <ToastPrimitive.Close aria-label="Close" asChild>
            <IconButton icon={CloseIcon} size="xs" />
          </ToastPrimitive.Close>
        )}
      </Card>
    </ToastPrimitive.Root>
  )
}

export const useToast = () => {
  const setToasts = useContext(ToastQueueContext)

  return (props: ToastProps) => {
    const toast: ToastProps = {
      ...props,
      id: crypto.randomUUID(),
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
