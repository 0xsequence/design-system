import {
  Toast as ToastPrimitive,
  type ToastManagerAddOptions,
} from '@base-ui/react/toast'
import { clsx } from 'clsx'
import { type ComponentType } from 'react'

import { CheckmarkIcon, CloseIcon } from '../../icons/index.js'
import { type IconProps } from '../../icons/types.js'
import { Button } from '../Button/Button.js'
import { Card } from '../Card/Card.js'

type ToastVariant = 'normal' | 'success' | 'error'

type ToastData = {
  isDismissible?: boolean
  icon?: ComponentType<IconProps>
}

export type ToastProps = ToastManagerAddOptions<ToastData>

const ToastProvider = (props: ToastPrimitive.Provider.Props) => {
  const { children, ...rest } = props

  return (
    <ToastPrimitive.Provider {...rest}>
      {children}
      <ToastPrimitive.Portal>
        <ToastList />
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  )
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager<ToastData>()

  return (
    <ToastPrimitive.Viewport className="fixed z-1 w-[250px] bottom-4 right-4 left-auto top-auto mx-auto sm:bottom-8 sm:right-8 sm:w-[300px] focus:outline-hidden">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ToastPrimitive.Viewport>
  )
}

function Toast({
  toast,
}: {
  toast: ToastPrimitive.Root.ToastObject<ToastData>
}) {
  const variant = (toast.type ?? 'normal') as ToastVariant
  const isDismissible = toast.data?.isDismissible ?? true
  const Icon = toast.data?.icon

  return (
    <ToastPrimitive.Root
      toast={toast}
      className={clsx([
        '[--gap:0.75rem]',
        '[--peek:0.75rem]',
        '[--scale:calc(max(0,1-(var(--toast-index)*0.1)))]',
        '[--shrink:calc(1-var(--scale))]',
        '[--height:var(--toast-frontmost-height,var(--toast-height))]',
        '[--offset-y:calc(var(--toast-offset-y)*-1+(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]',
      
        // layout / base
        'absolute right-0 bottom-0 left-auto mx-auto mr-0',
        'origin-bottom select-none',
        'cursor-default',
      
        // transitions & stacking
        '[transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]',
        'z-[calc(1000-var(--toast-index))]',
      
        // height & default transform (matches your "transform: translateX(...) translateY(...) scale(...)")
        'h-(--height)',
        "transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
      
        // expanded state: move to offset-y and set height
        'data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]',
        'data-expanded:h-(--toast-height)',
      
        // starting / ending off-screen
        'data-starting-style:transform-[translateY(150%)]!',
        'data-ending-style:transform-[translateY(150%)]!',
      
        // ending style 
        'data-ending-style:opacity-0',

        // limited opacity
        'data-limited:opacity-0',

        // swipe-direction specifics
        "data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",
        "data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
        "data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",
      
        // pseudo spacer (after)
        "after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-[calc(var(--gap)+1px)]",
      ])}
      render={
        <Card className="rounded-md bg-background-raised shadow-primary overflow-visible" />
      }
    >
      <ToastPrimitive.Content className="overflow-hidden transition-opacity duration-250 data-behind:opacity-0 data-expanded:opacity-100">
        <div className="w-full flex justify-between">
          <div className="flex gap-3 items-center">
            {Icon ? <Icon /> : <ToastIcon variant={variant} />}

            <div className="flex flex-col gap-1">
              <ToastPrimitive.Title className="text-sm font-bold text-primary" />
              <ToastPrimitive.Description className="text-xs text-muted" />
            </div>
          </div>

          {isDismissible && (
            <ToastPrimitive.Close
              aria-label="Close"
              render={
                <Button size="icon-xs">
                  <CloseIcon />
                </Button>
              }
            />
          )}
        </div>
      </ToastPrimitive.Content>
    </ToastPrimitive.Root>
  )
}

const ToastIcon = ({ variant }: { variant: ToastVariant }) => {
  switch (variant) {
    case 'success':
      return (
        <div className="bg-success text-white rounded-full w-8 h-8 place-items-center min-w-0 shrink-0 flex items-center justify-center">
          <CheckmarkIcon />
        </div>
      )
    case 'error':
      return (
        <div className="bg-destructive text-white rounded-full w-8 h-8 place-items-center min-w-0 shrink-0 flex items-center justify-center">
          <CloseIcon />
        </div>
      )
    default:
      return null
  }
}

export { Toast, ToastPrimitive, ToastProvider }

export const useToast = () => {
  return ToastPrimitive.useToastManager<ToastData>()
}
