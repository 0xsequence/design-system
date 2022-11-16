import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const content = style([
  atoms({
    backdropFilter: 'blur',
    background: 'buttonSolid',
    borderRadius: 'sm',
    paddingX: 'tight',
    paddingBottom: 'xtight',
    paddingTop: 'xxtight',
  }),
  {
    fill: vars.colors.buttonSolid,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  },
])
