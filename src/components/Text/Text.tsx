import { forwardRef, PropsWithChildren, Ref } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type TextProps = Pick<
  BoxProps,
  | 'alignSelf'
  | 'color'
  | 'fontFamily'
  | 'justifySelf'
  | 'letterSpacing'
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
  | 'textSize'
  | 'textTransform'
  | 'visibility'
  | 'weight'
  | 'whiteSpace'
  | 'wordBreak'
  | 'wordWrap'
  | 'zIndex'
> &
  styles.Variants

export const Text = forwardRef(
  (props: PropsWithChildren<TextProps>, ref: Ref<HTMLElement>) => {
    const { italic, underline, variant = 'span', children, ...boxProps } = props

    return (
      <Box
        as={variant}
        className={styles.variants({
          italic,
          underline,
          variant,
        })}
        ref={ref}
        {...boxProps}
      >
        {children}
      </Box>
    )
  }
)
