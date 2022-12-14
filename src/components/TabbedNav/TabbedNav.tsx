import { clsx } from 'clsx'
import { ComponentType, MouseEvent, ReactNode, useState } from 'react'

import { Box, PolymorphicProps } from '~/components/Box'
import { Button } from '~/components/Button'
import { IconProps } from '~/icons/types'

import * as styles from './styles.css'

export type TabOption = {
  label: ReactNode
  leftIcon?: ComponentType<IconProps>
  value: string
  onLoad?: () => boolean | Promise<boolean>
}

type TabbedNavProps = {
  defaultValue?: string
  size?: 'xs' | 'sm'
  tabs: TabOption[]
  onTabChange?: (value: string) => void
}

export const TabbedNav = (props: PolymorphicProps<TabbedNavProps, 'div'>) => {
  const {
    className,
    defaultValue,
    size = 'sm',
    tabs,
    onTabChange,
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
      <Box as="ul" gap="2">
        {tabs.map((option, tabIndex) => (
          <Box as="li" key={tabIndex}>
            <Button
              className={clsx(
                className,
                styles.tab({ active: option.value === value })
              )}
              variant="base"
              disabled={isLoading}
              label={option.label}
              leftIcon={option.leftIcon ?? undefined}
              onClick={(ev: MouseEvent<HTMLButtonElement>) =>
                handleTabClick(ev, option, tabIndex)
              }
              paddingLeft={option.leftIcon ? '1' : '2'}
              size={size}
              borderRadius="circle"
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
