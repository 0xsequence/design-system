import { forwardRef, PropsWithChildren, Ref } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type ButtonProps = styles.Variants &
  Omit<
    BoxProps,
    | 'as'
    | 'background'
    | 'display'
    | 'fontFamily'
    | 'fontSize'
    | 'lineHeight'
    | 'size'
    | 'textSize'
    | 'weight'
    | 'width'
  > & {
    width?: 'full' | 'normal'
    type?: 'button' | 'submit' | 'reset'
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: PropsWithChildren<ButtonProps>, ref: Ref<HTMLElement>) => {
    const {
      children,
      justifyContent = 'flex-start',
      size = 'md',
      type = 'button',
      variant = 'solid',
      width = 'normal',
      ...boxProps
    } = props

    return (
      <Box
        as="button"
        type={type}
        className={styles.variants({ size, variant, width })}
        ref={ref}
        {...boxProps}
      >
        <Box
          as="span"
          display="flex"
          justifyContent={justifyContent}
          alignItems="center"
          gap={width === 'normal' ? 'xtight' : undefined}
        >
          {children}
        </Box>
      </Box>
    )
  }
)
