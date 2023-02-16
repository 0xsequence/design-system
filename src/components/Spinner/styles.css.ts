import { keyframes } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

const rotateAnimation = keyframes({
  '100%': { transform: 'rotate(1turn)' },
})

export const variants = recipe({
  base: {
    animation: `${rotateAnimation} 2s linear infinite`,
  },

  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px',
        strokeWidth: 'calc(24 / 16 * 2px)',
      },
      md: {
        width: '24px',
        height: '24px',
        strokeWidth: '2px',
      },
      lg: {
        width: '32px',
        height: '32px',
        strokeWidth: 'calc(24 / 32 * 2px)',
      },
    },
  },
})

export type Variants = RecipeVariants<typeof variants>
