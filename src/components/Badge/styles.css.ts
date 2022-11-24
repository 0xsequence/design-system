import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

export const badgeVariants = recipe({
  base: atoms({
    display: 'inline-block',
    color: 'white',
    borderRadius: 'circle',
  }),

  variants: {
    variant: {
      info: atoms({ background: 'info' }),
      positive: atoms({ background: 'positive' }),
      negative: atoms({ background: 'negative' }),
    },

    sm: {
      true: { height: vars.lineHeights.small, width: vars.lineHeights.small },
      false: {
        height: vars.lineHeights.normal,
        width: vars.lineHeights.normal,
      },
    },
  },
})

export type BadgeVariants = RecipeVariants<typeof badgeVariants>
