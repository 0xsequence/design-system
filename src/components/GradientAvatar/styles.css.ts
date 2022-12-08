import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const avatar = recipe({
  base: {
    backgroundColor: 'white',
  },

  variants: {
    size: {
      sm: {
        width: '20px',
        height: '20px',
      },
      md: {
        width: '32px',
        height: '32px',
      },
      lg: {
        width: '40px',
        height: '40px',
      },
      xl: {
        width: '52px',
        height: '52px',
      },
    },
  },
})

export type AvatarVariants = RecipeVariants<typeof avatar>
