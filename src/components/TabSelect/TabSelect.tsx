import { Box } from '~/components/Box'

type TabOption = {
  label: string
  onClick?: () => void | boolean | Promise<boolean>
}

type TabSelectProps = {
  activeTab?: string
  tabs: TabOption[]
}

export const TabSelect = ({ activeTab, tabs, ...boxProps }: TabSelectProps) => {
  console.log(activeTab)

  return (
    <Box as="nav" {...boxProps}>
      <Box as="ul" display="flex">
        {tabs.map((option, tabIndex) => (
          <Box key={tabIndex}>hello</Box>
        ))}
      </Box>
    </Box>
  )
}
