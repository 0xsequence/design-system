import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

export const cardVariants = recipe({
  variants: {
    clickable: {
      true: [
        atoms({
          opacity: {
            hover: '80',
          },
          cursor: 'pointer',
        }),
        {
          selectors: {
            '&:focus': {
              outline: 'none',
            },

            '&:focus-visible': {
              outline: 'none',
              boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,
            },
          },
        },
      ],
    },

    disabled: {
      true: { opacity: 0.5, cursor: 'default', pointerEvents: 'none' },
    },

    outlined: {
      true: atoms({
        borderStyle: 'solid',
        borderWidth: 'thin',
        borderColor: 'borderNormal',
      }),
    },

    blur: {
      true: atoms({
        backdropFilter: 'blur',
      }),
    },
  },
})

export type CardVariants = RecipeVariants<typeof cardVariants>
