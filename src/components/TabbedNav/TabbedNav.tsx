import { clsx } from 'clsx'
import { ComponentType, MouseEvent, ReactNode, useState } from 'react'

import { Box, PolymorphicProps } from '~/components/Box'
import { Button } from '~/components/Button'
import { IconProps } from '~/icons/types'

import { tabList, tabVariants, TabVariants } from './styles.css'

export type TabOption = {
  label: ReactNode
  leftIcon?: ComponentType<IconProps>
  value: string
  disabled?: boolean
  onLoad?: () => boolean | Promise<boolean>
}

type TabbedNavProps = {
  defaultValue?: string
  size?: 'xs' | 'sm'
  tabs: TabOption[]
  onTabChange?: (value: string) => void
} & TabVariants

export const TabbedNav = (props: PolymorphicProps<TabbedNavProps, 'div'>) => {
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
    <Box as="nav" {...rest}>
      <Box as="ul" gap="2" className={clsx(tabList)}>
        {tabs.map((option, tabIndex) => {
          const isActive = option.value === value

          return (
            <Box
              as="li"
              key={tabIndex}
              borderTopColor={
                variant === 'line'
                  ? isActive
                    ? 'text100'
                    : 'transparent'
                  : undefined
              }
              borderTopStyle={variant === 'line' ? 'solid' : undefined}
              borderTopWidth={variant === 'line' ? 'thick' : undefined}
            >
              <Button
                className={clsx(
                  className,
                  tabVariants({ active: isActive, variant })
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
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
