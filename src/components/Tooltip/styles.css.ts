import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const content = style([
  atoms({
    backdropFilter: 'blur',
    background: 'buttonGlass',
    borderRadius: 'sm',
    paddingX: '3',
    paddingBottom: '2',
    paddingTop: '1',
  }),
  {
    fill: vars.colors.buttonGlass,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  },
])
