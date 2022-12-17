import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'
import { text } from '~/tokens/typography'

export const textVariants = recipe({
  variants: {
    variant: {
      inherit: atoms(text.inherit),
      xlarge: atoms(text.xlarge),
      large: atoms(text.large),
      medium: atoms(text.medium),
      normal: atoms(text.normal),
      small: atoms(text.small),
      xsmall: atoms(text.xsmall),
      code: atoms(text.code),
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
