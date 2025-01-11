import { cva, VariantProps } from 'class-variance-authority'
import { ComponentType, MouseEvent, ReactNode, useState } from 'react'

import { Button } from '~/components/Button'
import { IconProps } from '~/icons/types'
import { cn } from '~/utils'

const tabVariants = cva([''], {
  variants: {
    variant: {
      pill: '',
      line: 'leading-5 text-[0.625rem] tracking-[0.8px]',
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
      className: 'bg-button-inverse text-text-inverse-100',
    },
    {
      variant: 'pill',
      active: false,
      className: 'bg-transparent text-text-80',
    },
    {
      variant: 'line',
      active: true,
      className: 'text-text-100',
    },
    {
      variant: 'line',
      active: false,
      className: 'text-text-80',
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

interface TabbedNavProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof tabVariants> {
  defaultValue?: string
  size?: 'xs' | 'sm'
  tabs: TabOption[]
  onTabChange?: (value: string) => void
}

export const TabbedNav = (props: TabbedNavProps) => {
  const {
    className,
    defaultValue,
    onTabChange,
    size = 'sm',
    tabs,
    variant = 'pill',
    ...rest
  } = props

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [value, setValue] = useState<string>(defaultValue ?? tabs[0].value)

  const handleTabClick = async (
    event: MouseEvent<HTMLButtonElement>,
    option: TabOption,
    tabIndex: number
  ) => {
    event.preventDefault()

    const prevValue = value

    if (value === option.value) {
      return
    }

    setValue(tabs[tabIndex].value)

    setIsLoading(true)

    const loadSucceeded = option.onLoad ? await option.onLoad?.() : true

    setIsLoading(false)

    if (loadSucceeded) {
      onTabChange?.(option.value)
    } else {
      setValue(prevValue)
    }
  }

  return (
    <nav {...rest}>
      <ul className="flex gap-2 list-none">
        {tabs.map((option, tabIndex) => {
          const isActive = option.value === value

          return (
            <li
              key={tabIndex}
              className={cn(
                variant === 'line'
                  ? isActive
                    ? 'border-t-2 border-t-text-100'
                    : 'border-t-2 border-t-transparent'
                  : undefined
              )}
            >
              <Button
                className={cn(
                  tabVariants({ active: isActive, variant }),
                  className
                )}
                variant={variant === 'line' ? 'text' : 'base'}
                disabled={isLoading || option.disabled}
                label={option.label}
                leftIcon={option.leftIcon ?? undefined}
                onClick={(ev: MouseEvent<HTMLButtonElement>) =>
                  handleTabClick(ev, option, tabIndex)
                }
                padding={variant === 'line' ? '2' : undefined}
                paddingLeft={option.leftIcon ? '1' : '2'}
                size={size}
                borderRadius="circle"
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
