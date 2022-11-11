import { keyframes, style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { vars } from '~/css'

const rotate = keyframes({
  '100%': { transform: 'rotate(1turn)' },
})

export const spinnerVariants = recipe({
  base: [
    style({
      stroke: vars.colors.textBody,
      animation: `1.4s linear infinite ${rotate}`,
    }),
  ],
  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px',
      },
      md: {
        width: '24px',
        height: '24px',
      },
      lg: {
        width: '32px',
        height: '32px',
      },
    },
  },
})

export type SpinnerVariants = RecipeVariants<typeof spinnerVariants>
