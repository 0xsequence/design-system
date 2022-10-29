import { clsx } from 'clsx'
import { ReactNode, Children } from 'react'

import { Box } from '~/components/Box'
import { Text } from '~/components/Text'

import * as styles from './styles.css'

interface GroupProps {
  label?: JSX.Element | string
  contentRight?: JSX.Element
  children: ReactNode
  style?: any
  className?: string
  layout?: 'rows' | 'grid'
}

export const Group = (props: GroupProps) => {
  const {
    label,
    contentRight,
    children,
    style,
    className,
    layout = 'rows',
  } = props

  return (
    <Box className={clsx(styles.root, className)} style={style}>
      <div className={styles.header}>
        {label && <Text variant="h2">{label}</Text>}
        {contentRight && <div>{contentRight}</div>}
      </div>
      <div className={styles.items({ layout })}>
        {Children.map(children, child => child)?.filter(Boolean)}
      </div>
    </Box>
  )
}
