import { keyframes } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { vars } from '~/css'

const placeholderBackgroundAnimation = keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})

export const placeholder = recipe({
  base: {
    backgroundImage: `linear-gradient(-45deg, transparent, ${vars.colors.backgroundSecondary}, transparent)`,
    backgroundSize: '400% 400%',
    backgroundRepeat: 'no-repeat',
    animation: `${placeholderBackgroundAnimation} 1s ease infinite`,
  },

  variants: {
    size: {
      sm: {
        width: '96px',
        height: vars.lineHeights[4],
      },
      normal: {
        width: '100px',
        height: vars.lineHeights[5],
      },
      md: {
        width: '124px',
        height: vars.lineHeights[6],
      },
      lg: {
        width: '124px',
        height: vars.lineHeights[7],
      },
      xl: {
        width: '148px',
        height: vars.lineHeights[9],
      },
    },
  },
})

export type PlaceholderVariants = RecipeVariants<typeof placeholder>
