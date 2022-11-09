import { Box } from '~/components/Box'

type TabOption = {
  label: string
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
            <Box>{option.label}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
