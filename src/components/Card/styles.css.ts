import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { atoms, focusRing } from '~/css'

export const cardVariants = recipe({
  variants: {
    clickable: {
      true: [
        atoms({
          borderWidth: 'none',
          opacity: {
            hover: '80',
          },
          cursor: 'pointer',
        }),
        focusRing,
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
