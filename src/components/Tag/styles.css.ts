import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

import { textVariants } from '../Text/styles.css'

export const tagStyle = style([
  textVariants({ variant: 'xsmall' }),
  atoms({
    borderRadius: 'xs',
    display: 'inline-flex',
    gap: '1',
    paddingX: '2',
    paddingY: '1',
    whiteSpace: 'nowrap',
  }),
])
