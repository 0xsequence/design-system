import { cva, type VariantProps } from 'class-variance-authority'
import {
  useState,
  type ComponentType,
  type MouseEvent,
  type ReactNode,
} from 'react'

import type { IconProps } from '../../icons/types.js'
import { cn } from '../../utils/classnames.js'
import { Button } from '../Button/Button.js'
import { textVariants } from '../Text/Text.js'

const tabVariants = cva(['select-none'], {
  variants: {
    variant: {
      pill: '',
      line: cn(
        textVariants({ variant: 'xsmall', fontWeight: 'bold' }),
        'leading-8 tracking-[0.8px] px-2'
      ),
    },
    active: {
      true: 'hover:opacity-100',
      false: '',
    },
    disabled: {
      true: 'opacity-50',
    },
  },
  compoundVariants: [
    {
      variant: 'pill',
      active: true,
      className: 'bg-button-inverse text-inverse',
    },
    {
      variant: 'pill',
      active: false,
      className: 'bg-transparent text-secondary',
    },
    {
      variant: 'line',
      active: true,
      className: 'text-primary',
    },
  ],
  defaultVariants: {
    variant: 'pill',
  },
})

export type TabOption = {
  label: ReactNode
  leftIcon?: ComponentType<IconProps>
  value: string
  disabled?: boolean
  onLoad?: () => boolean | Promise<boolean>
}

interface TabbedNavBaseProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof tabVariants> {
  size?: 'xs' | 'sm'
  tabs: TabOption[]
  onTabChange?: (value: string) => void
}

type TabbedNavProps = TabbedNavBaseProps &
  (
    | {
        /** The controlled value of the tabbed nav. Cannot be used with defaultValue. */
        value: string
        defaultValue?: never // Ensure defaultValue is not allowed when value is present
      }
    | {
        /** The initial value of the tabbed nav when uncontrolled. Cannot be used with value. */
        defaultValue?: string
        value?: never // Ensure value is not allowed when defaultValue is present
      }
  )

export const TabbedNav = (props: TabbedNavProps) => {
  const {
    className,
    defaultValue,
    value: controlledValue,
    onTabChange,
    size = 'sm',
    tabs,
    variant = 'pill',
    ...rest
  } = props

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue ?? tabs[0].value
  )

  const isControlled = controlledValue !== undefined
  const currentValue = isControlled ? controlledValue : internalValue

  const handleTabClick = async (
    event: MouseEvent<HTMLButtonElement>,
    option: TabOption
  ) => {
    event.preventDefault()

    if (currentValue === option.value || isLoading || option.disabled) {
      return
    }

    setIsLoading(true)
    const loadSucceeded = option.onLoad ? await option.onLoad?.() : true
    setIsLoading(false)

    if (loadSucceeded) {
      onTabChange?.(option.value)

      if (!isControlled) {
        setInternalValue(option.value)
      }
    }
  }

  return (
    <nav {...rest}>
      <ul className="flex gap-2 list-none leading-0">
        {tabs.map((option, tabIndex) => {
          const isActive = option.value === currentValue

          return (
            <li
              key={tabIndex}
              className={
                variant === 'line'
                  ? isActive
                    ? 'border-b-2 border-b-primary'
                    : 'border-b-2 border-b-transparent'
                  : undefined
              }
            >
              <Button
                className={cn(
                  tabVariants({ active: isActive, variant }),
                  variant === 'line' && option.leftIcon ? 'pl-1' : undefined,
                  className
                )}
                variant={variant === 'line' ? 'text' : 'base'}
                disabled={isLoading || option.disabled}
                label={option.label}
                leftIcon={option.leftIcon ?? undefined}
                size={variant === 'line' ? 'xs' : size}
                shape="circle"
                onClick={(ev: MouseEvent<HTMLButtonElement>) =>
                  handleTabClick(ev, option)
                }
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
