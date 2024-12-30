import { ComponentType, ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Text } from '~/components/Text'
import { IconProps } from '~/icons/types'

type TagProps = {
  label: string
  icon?: ComponentType<IconProps>
}

export const Tag: PolymorphicComponent<TagProps, 'div'> = forwardRef(
  <T extends ElementType>(
    props: PolymorphicProps<TagProps, T>,
    ref: PolymorphicRef<T>
  ) => {
    const { icon: Icon, label, ...rest } = props

    return (
      <Box
        ref={ref}
        background="buttonGlass"
        borderRadius="xs"
        display="inline-flex"
        gap="1"
        paddingX="2"
        paddingY="1"
        whiteSpace="nowrap"
        color="text80"
        {...rest}
      >
        {Icon && <Icon size="xs" />}
        <Text variant="xsmall">{label}</Text>
      </Box>
    )
  }
)
