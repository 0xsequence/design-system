import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

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
    color: {
      body: style({ color: vars.colors.textBody }),
      faded: style({ color: vars.colors.textFaded }),
      title: style({ color: vars.colors.textTitle }),
      inverse: style({ color: vars.colors.textInverse }),
      white: style({ color: vars.colors.white }),
      inherit: style({ color: 'inherit' }),
    },

    fontFamily: {
      body: style({ fontFamily: vars.fonts.body }),
      mono: style({ fontFamily: vars.fonts.mono }),
    },

    size: {
      tiny: style({ fontSize: vars.fontSizes.sm }),
      body: style({ fontSize: vars.fontSizes.md }),
      large: style({ fontSize: vars.fontSizes.lg }),
      xlarge: style({ fontSize: vars.fontSizes.xl }),
    },

    weight: {
      light: style({ fontWeight: vars.fontWeights.light }),
      normal: style({ fontWeight: vars.fontWeights.normal }),
      semiBold: style({ fontWeight: vars.fontWeights.semiBold }),
      bold: style({ fontWeight: vars.fontWeights.bold }),
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
  defaultVariants: {
    variant: 'span',
  },
})

export type Variants = RecipeVariants<typeof variants>
