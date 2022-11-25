import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { vars } from '~/css'

export const iconVariants = recipe({
  variants: {
    size: {
      xs: {
        height: vars.lineHeights.small,
        width: vars.lineHeights.small,
      },
      sm: {
        height: vars.lineHeights.normal,
        width: vars.lineHeights.normal,
      },
      md: {
        height: vars.lineHeights.medium,
        width: vars.lineHeights.medium,
      },
      lg: {
        height: vars.lineHeights.large,
        width: vars.lineHeights.large,
      },
      xl: {
        height: vars.lineHeights.xlarge,
        width: vars.lineHeights.xlarge,
      },
    },
  },
})

export type IconVariants = RecipeVariants<typeof iconVariants>
