import * as TabsPrimitive from '@radix-ui/react-tabs'
import { type ReactNode } from 'react'

import { focusRingVariants } from '../../styles.js'
import { cn } from '../../utils/classnames.js'
import { Text } from '../Text/Text.js'

export interface TabItemProps {
  value: string
  label: ReactNode
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
      className={cn(
        'px-2 flex relative w-full rounded-xl bg-background-secondary h-12',
        focusRingVariants({ variant: 'within' })
      )}
      style={{ outline: undefined }}
    >
      <div className="flex absolute inset-2 h-8">
        <div
          className="absolute rounded-lg top-0 left-0 h-8 bg-background-active pointer-events-none transition-transform duration-200 ease-out"
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

export const Tabs = TabsPrimitive.Root

export const TabsList = TabsPrimitive.TabsList

export const TabsTrigger = TabsPrimitive.TabsTrigger

export const TabsContent = TabsPrimitive.TabsContent
