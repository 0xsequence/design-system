import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

const bodyVariant = style([
  atoms({
    fontSize: 'md',
    fontWeight: 'medium',
    lineHeight: 'body',
    color: 'textBody',
    fontFamily: 'body',
  }),
])

export const variants = recipe({
  base: bodyVariant,
  variants: {
    /** style presets */
    variant: {
      h1: style([
        atoms({
          fontSize: 'xl',
          fontWeight: 'medium',
          lineHeight: 'heading',
          color: 'textTitle',
        }),
      ]),
      h2: style([
        atoms({
          fontSize: 'xl',
          fontWeight: 'medium',
          lineHeight: 'heading',
          color: 'textTitle',
        }),
      ]),
      h3: style([
        atoms({
          fontSize: 'sm',
          fontWeight: 'medium',
          lineHeight: 'body',
          color: 'textTitle',
        }),
      ]),
      label: style([
        atoms({
          fontSize: 'sm',
          fontWeight: 'semiBold',
          lineHeight: 'heading',
          color: 'textTitle',
        }),
      ]),
      code: style([
        atoms({
          fontFamily: 'mono',
          fontSize: 'md',
          fontWeight: 'medium',
          lineHeight: 'body',
          color: 'textBody',
        }),
      ]),
      p: bodyVariant,
      span: bodyVariant,
    },

    /** prop overrides */
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
  defaultVariants: {
    variant: 'span',
  },
})

export type Variants = RecipeVariants<typeof variants>
