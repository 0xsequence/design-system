import * as TabsPrimitive from '@radix-ui/react-tabs'
import { ReactNode, useState, ComponentPropsWithoutRef } from 'react'

import { Box } from '../Box'
import { Text } from '../Text'

import * as styles from './styles.css'

export { TabsPrimitive }

export interface TabsProps
  extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  tabs: (TabItemProps & { content: ReactNode })[]
}

export interface TabItemProps {
  value: string
  label: ReactNode
}

export const Tabs = (props: TabsProps) => {
  const { tabs, onValueChange, ...rest } = props
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    rest.defaultValue
  )
  if (!tabs.length) {
    return null
  }

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    onValueChange?.(value)
  }

  return (
    <TabsPrimitive.Root onValueChange={handleValueChange} {...rest}>
      <TabsHeader tabs={tabs} value={selectedValue} />

      {tabs.map(tab => (
        <TabsPrimitive.Content
          className={styles.content}
          key={tab.value}
          value={tab.value}
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  )
}

export interface TabsHeaderProps {
  tabs: TabItemProps[]
  value: string | undefined
}

export const TabsHeader = (props: TabsHeaderProps) => {
  const { tabs, value } = props

  if (!tabs.length) {
    return null
  }

  const selectorWidth = 100 / tabs.length
  const selectedIdx = tabs.findIndex(tab => tab.value === value)

  return (
    <TabsPrimitive.List className={styles.list} style={{ outline: undefined }}>
      <Box display="flex" position="absolute" inset="2" height="8">
        <div
          className={styles.selector}
          style={{
            width: `${selectorWidth}%`,
            transform: `translateX(${selectedIdx * 100}%)`,
          }}
        />
      </Box>

      {tabs.map(tab => (
        <TabsPrimitive.Trigger
          className={styles.trigger}
          key={tab.value}
          value={tab.value}
        >
          <Text variant="normal" fontWeight="bold">
            {tab.label}
          </Text>
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>
  )
}

export const TabsRoot = TabsPrimitive.Root

export const TabsList = TabsPrimitive.TabsList

export const TabsTrigger = TabsPrimitive.TabsTrigger

export const TabsContent = TabsPrimitive.TabsContent
