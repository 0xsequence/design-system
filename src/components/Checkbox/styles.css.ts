import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

export const checkboxVariants = recipe({
  base: [
    atoms({
      borderRadius: 'xs',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderColor: 'borderFocus',
      background: 'transparent',
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
      sm: [{ height: 20, width: 20 }],
      lg: [{ height: 28, width: 28 }],
    },
  },
})

export type CheckboxVariants = RecipeVariants<typeof checkboxVariants>

export const indicator = atoms({
  color: 'text100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'full',
  height: 'full',
})
