import { ComponentType, ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Text } from '~/components/Text'
import { IconProps } from '~/icons/types'

import * as styles from './styles.css'

type TagProps = {
  label: string
  Icon?: ComponentType<IconProps>
}

export const Tag: PolymorphicComponent<TagProps, 'div'> = forwardRef(
  <T extends ElementType>(
    { Icon, label, ...otherProps }: PolymorphicProps<TagProps, T>,
    ref: PolymorphicRef<T>
  ) => (
    <Box className={styles.tag} ref={ref} {...otherProps}>
      {Icon && <Icon className={styles.tagIcon} />}
      <Text>{label}</Text>
    </Box>
  )
)
