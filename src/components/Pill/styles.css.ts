import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

export const pill = style([
  atoms({
    backdropFilter: 'blur',
    borderRadius: 'sm',
    display: 'inline-flex',
    fontFamily: 'body',
    fontSize: 'xsmall',
    gap: 'xxtight',
    paddingX: 'xtight',
    paddingY: 'xxtight',
    weight: 'semiBold',
    whiteSpace: 'nowrap',
  }),
  style({
    lineHeight: '1.4em',
  }),
])
