import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const variants = recipe({
  base: style([
    atoms({
      fontFamily: 'body',
      color: 'inherit',
    }),
  ]),
  variants: {
    /** style presets */
    variant: {
      h1: style([
        atoms({
          letterSpacing: 'none',
          textSize: 'xlarge',
          weight: 'bold',
        }),
      ]),
      h2: style([
        atoms({
          letterSpacing: 'regular',
          textSize: 'large',
          weight: 'semiBold',
        }),
      ]),
      h3: style([
        atoms({
          letterSpacing: 'regular',
          textSize: 'medium',
          weight: 'bold',
        }),
      ]),
      label: style([
        atoms({
          letterSpacing: 'open',
          textSize: 'small',
          weight: 'semiBold',
        }),
      ]),
      code: style([
        atoms({
          letterSpacing: 'open',
          fontFamily: 'mono',
          textSize: 'normal',
          weight: 'regular',
        }),
      ]),
      p: style([
        atoms({
          letterSpacing: 'open',
          textSize: 'normal',
          weight: 'regular',
        }),
      ]),
      span: style([
        atoms({
          letterSpacing: 'open',
          textSize: 'normal',
          weight: 'regular',
        }),
      ]),
    },

    /** prop overrides */
    ellipsis: {
      true: style([
        style({
          textOverflow: 'ellipsis',
        }),
        atoms({
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }),
      ]),
    },

    italic: {
      true: style({
        fontStyle: 'italic',
      }),
    },

    underline: {
      true: style({
        textDecoration: 'underline',
      }),
    },
  },
})

export type Variants = RecipeVariants<typeof variants>
