import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const root = style({
  width: '100%',
  margin: '25px 0',
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
})

export const items = recipe({
  variants: {
    layout: {
      rows: {
        //'& > *:not(:last-child)': {
        //  marginBottom: '12px'
        //}
      },

      grid: {
        display: 'grid',
        gridColumnGap: '12px',
        gridRowGap: '12px',
        gridAutoRows: '1fr',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',

        '@media': {
          'screen and (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          },
        },
      },
    },
  },
})

globalStyle(`${items({ layout: 'rows' })} > *:not(:last-child)`, {
  marginBottom: 12,
})
