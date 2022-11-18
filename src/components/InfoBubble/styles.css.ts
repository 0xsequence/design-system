import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

export const variants = recipe({
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

    tiny: {
      true: { height: vars.lineHeights.xsmall, width: vars.lineHeights.xsmall },
      false: {
        height: vars.lineHeights.normal,
        width: vars.lineHeights.normal,
      },
    },
  },
})

export type Variants = RecipeVariants<typeof variants>
