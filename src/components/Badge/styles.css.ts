import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

import { textVariants } from '../Text/styles.css'

export const badgeVariants = recipe({
  variants: {
    variant: {
      info: atoms({ background: 'info' }),
      warning: atoms({ background: 'warning' }),
      success: atoms({ background: 'positive' }),
      error: atoms({ background: 'negative' }),
    },

    size: {
      sm: [
        textVariants({ variant: 'small' }),
        {
          height: vars.lineHeights[4],
          minWidth: vars.lineHeights[4],
        },
      ],
      md: [
        textVariants({ variant: 'normal' }),
        {
          height: vars.lineHeights[5],
          minWidth: vars.lineHeights[5],
        },
      ],
      lg: [
        textVariants({ variant: 'large' }),
        {
          height: vars.lineHeights[7],
          minWidth: vars.lineHeights[7],
        },
      ],
    },
  },
})

export type BadgeVariants = RecipeVariants<typeof badgeVariants>
