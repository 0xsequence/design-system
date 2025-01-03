import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const content = style([
  atoms({
    backdropFilter: 'blur',
    background: 'backgroundRaised',
    borderRadius: 'sm',
    paddingX: '4',
    paddingBottom: '3',
    paddingTop: '2',
  }),
  {
    fill: vars.colors.backgroundRaised,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  },
])
