import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

import { variants as textVariants } from '../Text/styles.css'

export const pill = style([
  textVariants({ variant: 'xsmall' }),
  atoms({
    backdropFilter: 'blur',
    borderRadius: 'sm',
    display: 'inline-flex',
    gap: 'xxtight',
    paddingX: 'xtight',
    paddingY: 'xxtight',
    whiteSpace: 'nowrap',
  }),
  style({
    lineHeight: '1.4em',
  }),
])
