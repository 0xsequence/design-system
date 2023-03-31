import * as ToastPrimitive from '@radix-ui/react-toast'
import { ToastProps as ToastPrimitiveProps } from '@radix-ui/react-toast'
import { ComponentType } from 'react'

import { CloseIcon } from '~/icons'
import { IconProps } from '~/icons/types'

import { Box } from '../Box'
import { Card } from '../Card'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

export const ToastProvider = ToastPrimitive.Provider

export const ToastViewport = () => (
  <ToastPrimitive.Viewport asChild>
    <Box
      position="fixed"
      bottom="0"
      right="0"
      padding="4"
      flexDirection="column"
      pointerEvents="none"
      gap="2"
      width={{ sm: 'full', md: '1/2', lg: '1/3', xl: '1/4' }}
    />
  </ToastPrimitive.Viewport>
)

interface ToastProps extends ToastPrimitiveProps {
  title?: string
  description?: string
  icon?: ComponentType<IconProps>
}

export const Toast = (props: ToastProps) => {
  const { title, description, icon: Icon, ...rest } = props

  return (
    <ToastPrimitive.Root {...rest}>
      <Card
        borderRadius="md"
        background="buttonGlass"
        backdropFilter="blur"
        position="relative"
        width="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box gap="2" alignItems="center">
          {Icon && <Icon />}

          <Box>
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

        <ToastPrimitive.Close aria-label="Close" asChild>
          <IconButton icon={CloseIcon} size="xs" />
        </ToastPrimitive.Close>
      </Card>
    </ToastPrimitive.Root>
  )
}
