import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { vars } from '~/css'

export const iconVariants = recipe({
  variants: {
    size: {
      xs: {
        height: vars.lineHeights[4],
        width: vars.lineHeights[4],
      },
      sm: {
        height: vars.lineHeights[5],
        width: vars.lineHeights[5],
      },
      md: {
        height: vars.lineHeights[6],
        width: vars.lineHeights[6],
      },
      lg: {
        height: vars.lineHeights[7],
        width: vars.lineHeights[7],
      },
      xl: {
        height: vars.lineHeights[9],
        width: vars.lineHeights[9],
      },
    },
  },
})

export type IconVariants = RecipeVariants<typeof iconVariants>