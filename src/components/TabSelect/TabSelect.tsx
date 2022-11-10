import { ComponentType } from 'react'

import { Box } from '~/components/Box'
import { Button } from '~/components/Button'
import { IconProps } from '~/icons/types'

export type TabOption = {
  label: string
  LeftIcon?: ComponentType<IconProps>
  value: string
  onClick?: () => void | boolean | Promise<void> | Promise<boolean>
}

type TabSelectProps = {
  activeTab?: string
  tabs: TabOption[]
}

export const TabSelect = ({ activeTab, tabs, ...boxProps }: TabSelectProps) => {
  console.log(activeTab)

  return (
    <Box as="nav" {...boxProps}>
      <Box as="ul" display="flex" gap="xtight">
        {tabs.map((option, tabIndex) => (
          <Box as="li" display="block" key={tabIndex}>
            <Button
              variant="active"
              size="tab"
              label={option.label}
              LeftIcon={option.LeftIcon ?? undefined}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
