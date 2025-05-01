import { cva, VariantProps } from 'class-variance-authority'
import { ComponentType, MouseEvent, ReactNode, useState } from 'react'

import { Button } from '~/components/Button/index.js'
import { textVariants } from '~/components/Text/index.js'
import { IconProps } from '~/icons/types.js'
import { cn } from '~/utils/classnames.js'

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
      <ul className="flex gap-2 list-none leading-0">
        {tabs.map((option, tabIndex) => {
          const isActive = option.value === value

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
                  handleTabClick(ev, option, tabIndex)
                }
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
