import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const variants = recipe({
  variants: {
    variant: {
      inherit: {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
        fontWeight: 'inherit',
      },
      xlarge: [
        atoms({
          fontFamily: 'body',
          fontSize: 'xlarge',
          lineHeight: 'xlarge',
          letterSpacing: 'none',
          fontWeight: 'bold',
        }),
      ],
      large: [
        atoms({
          fontFamily: 'body',
          fontSize: 'large',
          lineHeight: 'large',
          letterSpacing: 'regular',
          fontWeight: 'semiBold',
        }),
      ],
      medium: [
        atoms({
          fontFamily: 'body',
          fontSize: 'medium',
          lineHeight: 'medium',
          letterSpacing: 'regular',
          fontWeight: 'bold',
        }),
      ],
      normal: [
        atoms({
          fontFamily: 'body',
          fontSize: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'open',
          fontWeight: 'regular',
        }),
      ],
      small: [
        atoms({
          fontFamily: 'body',
          fontSize: 'small',
          lineHeight: 'small',
          letterSpacing: 'open',
          fontWeight: 'medium',
        }),
      ],
      xsmall: [
        atoms({
          fontFamily: 'body',
          fontSize: 'xsmall',
          lineHeight: 'xsmall',
          letterSpacing: 'open',
          fontWeight: 'bold',
        }),
      ],
      code: [
        atoms({
          fontFamily: 'mono',
          fontSize: 'normal',
          lineHeight: 'normal',
          letterSpacing: 'none',
          fontWeight: 'regular',
        }),
      ],
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
