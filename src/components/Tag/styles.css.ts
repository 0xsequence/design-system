import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

import { textVariants } from '../Text/styles.css'

export const tag = style([
  textVariants({ variant: 'xsmall' }),
  atoms({
    borderRadius: 'sm',
    display: 'inline-flex',
    gap: '1',
    paddingX: '2',
    paddingY: '1',
    whiteSpace: 'nowrap',
  }),
])

export const tagIcon = style({
  height: '1rem',
  width: '1rem',
})
