import { ComponentType, MouseEvent, useState } from 'react'

import { Box, PolymorphicProps } from '~/components/Box'
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

export const TabSelect = ({
  activeTab,
  tabs,
  ...rest
}: PolymorphicProps<TabSelectProps, 'div'>) => {
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
      <Box as="ul" display="flex" gap="2">
        {tabs.map((option, tabIndex) => (
          <Box as="li" display="block" key={tabIndex}>
            <Button
              disabled={isLoading}
              label={option.label}
              LeftIcon={option.LeftIcon ?? undefined}
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handleTabClick(e, option, tabIndex)
              }
              paddingLeft={option.LeftIcon ? '1' : '2'}
              size="tab"
              variant={option.value === activeTabValue ? 'active' : 'inactive'}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
