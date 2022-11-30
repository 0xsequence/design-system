import { recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'
import { responsiveStyle } from '~/css/utils'

export const root = atoms({
  width: 'full',
  marginY: '8',
})

export const items = recipe({
  variants: {
    layout: {
      rows: atoms({
        display: 'flex',
        flexDirection: 'column',
        gap: '2',
      }),

      grid: {
        display: 'grid',
        gridColumnGap: vars.space['2'],
        gridRowGap: vars.space['2'],
        gridAutoRows: '1fr',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',

        '@media': responsiveStyle({
          lg: {
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          },
        }),
      },
    },
  },
})
