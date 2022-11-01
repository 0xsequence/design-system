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
    }),
    style({
      border: 'none',
      lineHeight: 'inherit',
    }),
  ]),
  // {
  //     color: vars.colors.textTitle,
  //   },

  variants: {
    variant: {
      primary: {
        background: vars.colors.gradientPrimary,
        color: 'white',
      },
    },

    size: {
      sm: style([
        atoms({
          borderRadius: 'subtle',
          textSize: 'xsmall',
          weight: 'semiBold',
          paddingX: 'sm',
          paddingY: 'xs',
        }),
        style({
          height: '24px',
        }),
      ]),
      md: style([
        atoms({
          borderRadius: 'medium',
          paddingX: 'md',
          paddingY: 'sm',
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
      true: {
        backdropFilter: 'blur(12.5px)',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type Variants = RecipeVariants<typeof variants>
