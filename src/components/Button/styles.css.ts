import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const variants = recipe({
  base: style([
    atoms({
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: 'body',
      color: 'textBody',
    }),
    style({ border: 'none' }),
  ]),

  variants: {
    variant: {
      primary: style([
        atoms({ background: 'gradientPrimary' }),
        style({ color: 'white' }),
      ]),
      solid: style([atoms({ background: 'backgroundButton' })]),
      glass: style([
        atoms({
          backdropFilter: 'blur',
          background: 'backgroundLight',
        }),
      ]),
    },

    size: {
      sm: style([
        atoms({
          borderRadius: 'circle',
          paddingX: 'tight',
          paddingY: 'xxtight',
          textSize: 'xsmall',
          weight: 'bold',
        }),
        style({ height: '28px' }),
      ]),
      md: style([
        atoms({
          borderRadius: 'lg',
          paddingY: 'tight',
          textSize: 'normal',
          weight: 'bold',
        }),
        style({
          height: '44px',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        }),
      ]),
      lg: style([
        atoms({
          borderRadius: 'lg',
          paddingY: 'tight',
          textSize: 'small',
          weight: 'semiBold',
        }),
        style({
          height: '59px',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        }),
      ]),
    },

    blur: {
      false: {},
      true: style([atoms({ backdropFilter: 'blur' })]),
    },
  },
})

export type Variants = RecipeVariants<typeof variants>
