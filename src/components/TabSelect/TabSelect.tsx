import { clsx } from 'clsx'
import { ComponentType, MouseEvent, ReactNode, useState } from 'react'

import { Box, PolymorphicProps } from '~/components/Box'
import { Button } from '~/components/Button'
import { IconProps } from '~/icons/types'

import * as styles from './styles.css'

export type TabOption = {
  label: ReactNode
  LeftIcon?: ComponentType<IconProps>
  value: string
  onClick?: () => boolean | Promise<boolean>
}

type TabSelectProps = {
  activeTab?: string
  size?: 'xs' | 'sm'
  tabs: TabOption[]
}

export const TabSelect = (props: PolymorphicProps<TabSelectProps, 'div'>) => {
  const { className, activeTab, size = 'sm', tabs, ...rest } = props
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [activeTabValue, setActiveTabValue] = useState<string>(
    activeTab ?? tabs[0].value
  )

  const handleTabClick = async (
    event: MouseEvent<HTMLButtonElement>,
    option: TabOption,
    tabIndex: number
  ) => {
    event.preventDefault()

    if (activeTabValue === option.value) {
      return
    }

    const prevTab = activeTabValue
    setActiveTabValue(tabs[tabIndex].value)
    setIsLoading(true)
    const loadSucceeded = await option.onClick?.()
    setIsLoading(false)

    if (!loadSucceeded) {
      setActiveTabValue(prevTab)
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
                styles.tab({ active: option.value === activeTabValue })
              )}
              disabled={isLoading}
              label={option.label}
              LeftIcon={option.LeftIcon ?? undefined}
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handleTabClick(e, option, tabIndex)
              }
              paddingLeft={option.LeftIcon ? '1' : '2'}
              size={size}
              borderRadius="circle"
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
