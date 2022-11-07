import { ElementType, forwardRef, PropsWithChildren, Ref } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type TextProps<T extends ElementType = 'span'> = Partial<
  Pick<
    BoxProps<T>,
    | 'as'
    | 'color'
    | 'fontWeight'
    | 'alignSelf'
    | 'justifySelf'
    | 'margin'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'marginX'
    | 'marginY'
    | 'padding'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'paddingX'
    | 'paddingY'
    | 'textTransform'
    | 'visibility'
    | 'whiteSpace'
    | 'wordBreak'
    | 'wordWrap'
    | 'zIndex'
  >
> &
  styles.Variants

export const Text = forwardRef(
  <T extends ElementType>(
    props: PropsWithChildren<TextProps<T>>,
    ref: Ref<T>
  ) => {
    const {
      as = 'span',
      variant = 'inherit',
      hidden,
      italic,
      underline,
      children,
      ...boxProps
    } = props

    return (
      <Box
        as={as}
        className={styles.variants({
          variant,
          hidden,
          italic,
          underline,
        })}
        ref={ref}
        {...boxProps}
      >
        {children}
      </Box>
    )
  }
)
