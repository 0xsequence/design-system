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
          height: vars.lineHeights.small,
          minWidth: vars.lineHeights.small,
        },
      ],
      md: [
        textVariants({ variant: 'normal' }),
        {
          height: vars.lineHeights.normal,
          minWidth: vars.lineHeights.normal,
        },
      ],
      lg: [
        textVariants({ variant: 'large' }),
        {
          height: vars.lineHeights.large,
          minWidth: vars.lineHeights.large,
        },
      ],
    },
  },
})

export type BadgeVariants = RecipeVariants<typeof badgeVariants>
