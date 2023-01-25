import { ComponentType, ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Text } from '~/components/Text'
import { IconProps } from '~/icons/types'

import { tagStyle } from './styles.css'

type TagProps = {
  label: string
  icon?: ComponentType<IconProps>
}

export const Tag: PolymorphicComponent<TagProps, 'div'> = forwardRef(
  <T extends ElementType>(
    props: PolymorphicProps<TagProps, T>,
    ref: PolymorphicRef<T>
  ) => {
    const { icon: Icon, label, ...otherProps } = props

    return (
      <Box
        className={tagStyle}
        ref={ref}
        background="buttonGlass"
        {...otherProps}
      >
        {Icon && <Icon size="xs" />}
        <Text>{label}</Text>
      </Box>
    )
  }
)
