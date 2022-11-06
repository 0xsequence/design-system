import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

export const input = style([
  atoms({
    borderWidth: 'thin',
    borderRadius: 'md',
    display: 'flex',
    alignItems: 'center',
    gap: 'xtight',
    paddingX: 'normal',
    paddingY: 'tight',
    borderColor: 'borderNormal',

    fontFamily: 'body',
    textSize: 'normal',
    weight: 'medium',
    letterSpacing: 'regular',
    position: 'relative',
  }),
  style({
    minWidth: '100%',
  }),
])
