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
        lineHeight: '9',
        letterSpacing: 'none',
        fontWeight: 'bold',
      }),
      large: atoms({
        fontFamily: 'body',
        fontSize: 'large',
        lineHeight: '7',
        letterSpacing: 'normal',
        fontWeight: 'semibold',
      }),
      medium: atoms({
        fontFamily: 'body',
        fontSize: 'medium',
        lineHeight: '6',
        letterSpacing: 'normal',
        fontWeight: 'bold',
      }),
      normal: atoms({
        fontFamily: 'body',
        fontSize: 'normal',
        lineHeight: '5',
        letterSpacing: 'wide',
        fontWeight: 'normal',
      }),
      small: atoms({
        fontFamily: 'body',
        fontSize: 'small',
        lineHeight: '4',
        letterSpacing: 'wide',
        fontWeight: 'medium',
      }),
      xsmall: atoms({
        fontFamily: 'body',
        fontSize: 'xsmall',
        lineHeight: '4',
        letterSpacing: 'wide',
        fontWeight: 'bold',
      }),
      code: atoms({
        fontFamily: 'mono',
        fontSize: 'normal',
        lineHeight: '5',
        letterSpacing: 'none',
        fontWeight: 'normal',
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

    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },

    capitalize: {
      true: {
        textTransform: 'capitalize',
      },
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
  },
})

export type TextVariants = RecipeVariants<typeof textVariants>
