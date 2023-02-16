import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

import { textVariants } from '../Text/styles.css'

export const badgeVariants = recipe({
  base: {
    fontWeight: vars.fontWeights.normal,
  },

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
        atoms({
          height: '4',
          minWidth: '4',
          paddingX: '2',
        }),
      ],
      md: [
        textVariants({ variant: 'normal' }),
        atoms({
          height: '5',
          minWidth: '5',
          paddingX: '3',
        }),
      ],
      lg: [
        textVariants({ variant: 'medium' }),
        atoms({
          height: '6',
          minWidth: '6',
          paddingX: '4',
        }),
      ],
    },
  },
})

export type BadgeVariants = RecipeVariants<typeof badgeVariants>
