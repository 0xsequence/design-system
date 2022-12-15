import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const checkboxVariants = recipe({
  base: atoms({
    borderRadius: 'xs',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 'thin',
    borderStyle: 'solid',
    borderColor: 'borderFocus',
    opacity: {
      base: '100',
      hover: '80',
      disabled: '50',
    },
    cursor: {
      base: 'pointer',
      disabled: 'default',
    },
  }),

  variants: {
    size: {
      sm: [{ height: 20, width: 20 }],
      lg: [{ height: 28, width: 28 }],
    },
  },
})

export type CheckboxVariants = RecipeVariants<typeof checkboxVariants>

export const indicatorVariants = recipe({
  base: atoms({
    color: 'text100',
    background: 'text50',
  }),

  variants: {
    size: {
      sm: [{ height: 20, width: 20 }],
      lg: [{ height: 28, width: 28 }],
    },
  },
})

export type IndicatorVariants = RecipeVariants<typeof indicatorVariants>
