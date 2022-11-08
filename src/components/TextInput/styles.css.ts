import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

import { variants as textVariants } from '../Text/styles.css'

export const input = style([
  textVariants({ variant: 'normal' }),
  atoms({
    borderWidth: 'thin',
    borderRadius: 'md',
    display: 'flex',
    alignItems: 'center',
    gap: 'xtight',
    paddingX: 'normal',
    paddingY: 'tight',
    borderColor: 'borderNormal',

    fontWeight: 'medium',
    letterSpacing: 'regular',
    position: 'relative',
  }),
])
