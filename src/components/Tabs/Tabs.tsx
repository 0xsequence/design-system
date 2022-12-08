import * as TabsPrimitive from '@radix-ui/react-tabs'
import { ReactNode, useState, ComponentPropsWithoutRef } from 'react'

import { Text } from '~/components/Text'

import * as styles from './styles.css'

interface TabsProps
  extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  tabs: TabItemProps[]
}

interface TabItemProps {
  value: string
  title: ReactNode
  content: ReactNode
}

export const Tabs = (props: TabsProps) => {
  const { tabs, onValueChange, ...rest } = props
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    rest.defaultValue
  )
  if (!tabs.length) {
    return null
  }

  const selectorWidth = 100 / tabs.length
  const selectedIdx = tabs.findIndex(tab => tab.value === selectedValue)

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    onValueChange?.(value)
  }

  return (
    <TabsPrimitive.Root onValueChange={handleValueChange} {...rest}>
      <TabsPrimitive.List
        className={styles.list}
        style={{ outline: undefined }}
      >
        <div className={styles.selectorContainer}>
          <div
            className={styles.selector}
            style={{
              width: `${selectorWidth}%`,
              transform: `translateX(${selectedIdx * 100}%)`,
            }}
          />
        </div>
        {tabs.map(tab => (
          <TabsPrimitive.Trigger
            className={styles.trigger}
            key={tab.value}
            value={tab.value}
          >
            <Text variant="medium">{tab.title}</Text>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
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

// export const TabsRoot = TabsPrimitive.Root

// export const TabsContent = TabsPrimitive.TabsContent

// export const TabsTrigger = forwardRef<
//   React.ElementRef<typeof TabsPrimitive.TabsTrigger>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.TabsTrigger>
// >((props, forwardedRef) => {
//   const { className, ...rest } = props
//   return <TabsPrimitive.TabsTrigger className={clsx(className, styles.trigger)} {...rest} ref={forwardedRef} />
// })
// TabsTrigger.displayName = 'TabsTrigger'

// export const TabsList = (props: PropsWithChildren<{}>) => {
//   const { children } = props

//   const selectorWidth = 100 / Children.count(children)

//   const selectedIdx = Children.toArray(children).findIndex(child => {
//     if (!isValidElement(child)) {
//       return
//     }

//     const { value } = child.props

//     console.log('child props', child.props)
//   })

//   return (
//     <TabsPrimitive.TabsList className={styles.list} >
//       <div className={styles.selectorContainer}>
//         <div className={styles.selector} style={{ width: `${selectorWidth}%`, transform: `translateX(${selectedIdx * 100}%)` }} />
//       </div>
//       {children}
//     </TabsPrimitive.TabsList>
//   )
// }
