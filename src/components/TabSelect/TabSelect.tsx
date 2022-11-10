import { ComponentType, ElementType, MouseEvent, useState } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Button } from '~/components/Button'
import { IconProps } from '~/icons/types'

export type TabOption = {
  label: string
  LeftIcon?: ComponentType<IconProps>
  value: string
  onClick?: () => boolean | Promise<boolean>
}

type TabSelectProps<T extends ElementType> = BoxProps<T> & {
  activeTab?: string
  tabs: TabOption[]
}

export const TabSelect = ({
  activeTab,
  tabs,
  ...rest
}: TabSelectProps<'div'>) => {
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
      <Box as="ul" display="flex" gap="xtight">
        {tabs.map((option, tabIndex) => (
          <Box as="li" display="block" key={tabIndex}>
            <Button
              label={option.label}
              LeftIcon={option.LeftIcon ?? undefined}
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handleTabClick(e, option, tabIndex)
              }
              pending={isLoading && activeTabValue === option.value}
              size="tab"
              variant={option.value === activeTabValue ? 'active' : 'inactive'}
              paddingLeft={option.LeftIcon ? 'xxtight' : 'xtight'}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
