import * as TabsPrimitive from '@radix-ui/react-tabs'
import { ReactNode, useState, ComponentPropsWithoutRef } from 'react'

import { Text } from '../Text'

export interface TabsProps
  extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  tabs: (TabItemProps & { content: ReactNode })[]
}

export interface TabItemProps {
  value: string
  label: ReactNode
}

export const Tabs = (props: TabsProps) => {
  const { tabs, onValueChange, className, ...rest } = props
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
    <TabsPrimitive.Root
      onValueChange={handleValueChange}
      className={className}
      {...rest}
    >
      <TabsHeader tabs={tabs} value={selectedValue} />

      {tabs.map(tab => (
        <TabsPrimitive.Content
          className="outline-hidden"
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
    <TabsPrimitive.List
      className="px-2 flex relative w-full rounded-xl bg-background-secondary h-12 outline-hidden ring-inset focus-within:[&:has(:focus-visible)]:ring-2 focus-within:ring-border-focus"
      style={{ outline: undefined }}
    >
      <div className="flex absolute inset-2 h-8">
        <div
          className="absolute rounded-lg top-0 left-0 h-8 bg-button-glass pointer-events-none transition-transform duration-200 ease-out"
          style={{
            width: `${selectorWidth}%`,
            transform: `translateX(${selectedIdx * 100}%)`,
          }}
        />
      </div>

      {tabs.map(tab => (
        <TabsPrimitive.Trigger
          className="w-full h-full rounded-lg cursor-pointer relative bg-transparent select-none text-secondary outline-hidden appearance-none border-none z-2 data-[state=active]:text-primary disabled:opacity-50"
          key={tab.value}
          value={tab.value}
        >
          <Text variant="normal" fontWeight="bold" className="block">
            {tab.label}
          </Text>
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>
  )
}

export { TabsPrimitive }

export const TabsRoot = TabsPrimitive.Root

export const TabsList = TabsPrimitive.TabsList

export const TabsTrigger = TabsPrimitive.TabsTrigger

export const TabsContent = TabsPrimitive.TabsContent
