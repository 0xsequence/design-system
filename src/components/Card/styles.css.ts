import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const cardVariants = recipe({
  variants: {
    hover: {
      true: atoms({
        opacity: {
          hover: '80',
        },
        cursor: 'pointer',
      }),
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

    disabled: {
      true: atoms({
        opacity: '50',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }),
    },
  },
})

export type CardVariants = RecipeVariants<typeof cardVariants>
