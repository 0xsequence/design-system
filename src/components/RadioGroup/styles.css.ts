import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

export const radioItemVariants = recipe({
  base: [
    atoms({
      background: 'transparent',
      borderRadius: 'circle',
      borderStyle: 'solid',
      borderColor: 'borderFocus',
      padding: '0',
      cursor: {
        base: 'pointer',
        disabled: 'default',
      },
      opacity: {
        hover: '80',
        disabled: '50',
      },
    }),
    {
      selectors: {
        '&:focus': {
          outline: 'none',
        },

        '&:focus-visible': {
          outline: 'none',
          boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,
          borderColor: 'transparent',
        },
      },
    },
  ],

  variants: {
    size: {
      sm: [atoms({ borderWidth: 'thin' }), { height: 20, width: 20 }],
      lg: [atoms({ borderWidth: 'thick' }), { height: 28, width: 28 }],
    },
  },
})

export type RadioItemVariants = RecipeVariants<typeof radioItemVariants>

export const indicatorVariants = recipe({
  base: style([
    atoms({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      width: 'full',
      height: 'full',
      color: 'text100',
    }),
    {
      selectors: {
        '&::after': {
          content: '""',
          display: 'block',
          borderRadius: 999,
          background: 'currentColor',
        },
      },
    },
  ]),

  variants: {
    size: {
      sm: [{ selectors: { '&::after': { width: 14, height: 14 } } }],
      lg: [{ selectors: { '&::after': { width: 18, height: 18 } } }],
    },
  },
})
