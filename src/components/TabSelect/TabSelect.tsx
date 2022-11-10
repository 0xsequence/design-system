import { ComponentType, MouseEvent, useState } from 'react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'
import { IconProps } from '~/icons/types'

export type TabOption = {
  label: string
  LeftIcon?: ComponentType<IconProps>
  value: string
  onClick?: () => boolean | Promise<boolean>
}

type TabSelectProps = {
  activeTab?: string
  tabs: TabOption[]
}

export const TabSelect = ({ activeTab, tabs, ...rest }: TabSelectProps) => {
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
    const activeTabBeforeLoad = activeTabValue
    setActiveTabValue(tabs[tabIndex].value)
    setIsLoading(true)
    const loadSucceeded = await option.onClick?.()
    setIsLoading(false)

    if (!loadSucceeded) {
      setActiveTabValue(activeTabBeforeLoad)
    }
  }

  return (
    <Box as="nav" {...rest}>
      <Box as="ul" display="flex" gap="xtight">
        {tabs.map((option, tabIndex) => (
          <Box as="li" display="block" key={tabIndex}>
            <Button
              isPending={isLoading && activeTabValue === option.value}
              label={option.label}
              LeftIcon={option.LeftIcon ?? undefined}
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handleTabClick(e, option, tabIndex)
              }
              size="tab"
              variant={option.value === activeTabValue ? 'active' : 'inactive'}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
