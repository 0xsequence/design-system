import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const content = style([
  atoms({
    background: 'buttonGlass',
    borderRadius: 'sm',
    filterEffect: 'blur',
    paddingX: '4',
    paddingBottom: '3',
    paddingTop: '2',
  }),
  {
    fill: vars.colors.buttonGlass,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  },
])
