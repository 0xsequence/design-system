import * as TabsPrimitive from '@radix-ui/react-tabs'
import { type ComponentProps, type ReactNode } from 'react'

import { disabledStyle, focusRingVariants } from '../../styles.js'
import { cn } from '../../utils/classnames.js'
import { textVariants } from '../Text/Text.js'

function Tabs({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-10 w-full items-center justify-start border-b border-border-normal',
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        textVariants({ variant: 'normal-bold' }),
        'h-full text-muted inline-flex items-center justify-center whitespace-nowrap cursor-pointer border-b-1 border-transparent px-4 -mb-[2px] rounded-t-sm',
        'hover:not-[[data-state=active]]:opacity-80 data-[state=active]:border-border-focus data-[state=active]:text-border-focus',
        focusRingVariants(),
        disabledStyle,
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsPrimitive, TabsTrigger }

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
          className={cn(
            textVariants({ variant: 'normal-bold' }),
            'w-full h-full rounded-lg cursor-pointer relative bg-transparent select-none text-secondary outline-hidden appearance-none border-none z-2 data-[state=active]:text-primary disabled:opacity-50'
          )}
          key={tab.value}
          value={tab.value}
        >
          {tab.label}
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>
  )
}
