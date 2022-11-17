import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

import { textVariants } from '../Text/styles.css'

export const pill = style([
  textVariants({ variant: 'xsmall' }),
  atoms({
    backdropFilter: 'blur',
    borderRadius: 'sm',
    display: 'inline-flex',
    gap: '1',
    paddingX: '2',
    paddingY: '1',
    whiteSpace: 'nowrap',
  }),
  style({
    lineHeight: '1.4em',
  }),
])
