import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { Atoms, atoms } from '~/css'

type TextVariant =
  | 'inherit'
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'normal'
  | 'small'
  | 'xsmall'
  | 'code'

interface TextVariantAtoms {
  fontFamily: Atoms['fontFamily']
  fontSize: Atoms['fontSize']
  lineHeight: Atoms['lineHeight']
  letterSpacing: Atoms['letterSpacing']
  fontWeight: Atoms['fontWeight']
}

export const rawTextVariants: Record<TextVariant, TextVariantAtoms> = {
  inherit: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
    fontWeight: 'inherit',
  },

  // Size variants
  xlarge: {
    fontFamily: 'body',
    fontSize: 'xlarge',
    lineHeight: '9',
    letterSpacing: 'none',
    fontWeight: 'bold',
  },
  large: {
    fontFamily: 'body',
    fontSize: 'large',
    lineHeight: '7',
    letterSpacing: 'normal',
    fontWeight: 'semibold',
  },
  medium: {
    fontFamily: 'body',
    fontSize: 'medium',
    lineHeight: '6',
    letterSpacing: 'normal',
    fontWeight: 'bold',
  },
  normal: {
    fontFamily: 'body',
    fontSize: 'normal',
    lineHeight: '5',
    letterSpacing: 'wide',
    fontWeight: 'normal',
  },
  small: {
    fontFamily: 'body',
    fontSize: 'small',
    lineHeight: '4',
    letterSpacing: 'wide',
    fontWeight: 'medium',
  },
  xsmall: {
    fontFamily: 'body',
    fontSize: 'xsmall',
    lineHeight: '4',
    letterSpacing: 'wide',
    fontWeight: 'bold',
  },

  // Semantic variants
  code: {
    fontFamily: 'mono',
    fontSize: 'normal',
    lineHeight: '5',
    letterSpacing: 'none',
    fontWeight: 'normal',
  },
}

const toAtoms = <T extends object>(obj: T) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, atoms(value)])
  ) as { [K in keyof T]: string }

export const textVariants = recipe({
  variants: {
    variant: toAtoms(rawTextVariants),

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
