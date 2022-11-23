import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const textVariants = recipe({
  variants: {
    variant: {
      inherit: atoms({
        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
        fontWeight: 'inherit',
      }),
      xlarge: atoms({
        fontFamily: 'body',
        fontSize: 'xlarge',
        lineHeight: 'xlarge',
        letterSpacing: 'none',
        fontWeight: 'bold',
      }),
      large: atoms({
        fontFamily: 'body',
        fontSize: 'large',
        lineHeight: 'large',
        letterSpacing: 'regular',
        fontWeight: 'semiBold',
      }),
      medium: atoms({
        fontFamily: 'body',
        fontSize: 'medium',
        lineHeight: 'medium',
        letterSpacing: 'regular',
        fontWeight: 'bold',
      }),
      normal: atoms({
        fontFamily: 'body',
        fontSize: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'open',
        fontWeight: 'regular',
      }),
      small: atoms({
        fontFamily: 'body',
        fontSize: 'small',
        lineHeight: 'small',
        letterSpacing: 'open',
        fontWeight: 'medium',
      }),
      xsmall: atoms({
        fontFamily: 'body',
        fontSize: 'xsmall',
        lineHeight: 'xsmall',
        letterSpacing: 'open',
        fontWeight: 'bold',
      }),
      code: atoms({
        fontFamily: 'mono',
        fontSize: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'none',
        fontWeight: 'regular',
      }),
    },

    /** prop overrides */
    ellipsis: {
      true: atoms({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }),
    },

    // hidden text for screen readers
    hidden: {
      true: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
      },
    },

    italic: {
      true: {
        fontStyle: 'italic',
      },
    },

    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
  },
})

export type TextVariants = RecipeVariants<typeof textVariants>
