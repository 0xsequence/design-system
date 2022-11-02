import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

export const variants = recipe({
  base: style([
    atoms({
      background: 'backgroundSecondary',
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: 'body',
      color: 'textBody',
    }),
    style({
      border: 'none',
      lineHeight: 'inherit',
    }),
  ]),

  variants: {
    variant: {
      primary: {
        background: vars.colors.gradientPrimary,
        color: 'white',
      },
      solid: {},
      glass: {},
    },

    size: {
      sm: style([
        atoms({
          borderRadius: 'sm',
          textSize: 'xsmall',
          weight: 'semiBold',
          paddingX: 'tight',
          paddingY: 'xtight',
        }),
        style({
          height: '24px',
        }),
      ]),
      md: style([
        atoms({
          borderRadius: 'md',
          paddingX: 'tight',
          paddingY: 'xtight',
          fontSize: 'small',
          weight: 'bold',
        }),
        style({
          height: '34px',
        }),
      ]),
      lg: {
        height: '48px',
      },
    },

    blur: {
      false: {},
      true: style([atoms({ backdropFilter: 'blur' })]),
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type Variants = RecipeVariants<typeof variants>
