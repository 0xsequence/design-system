import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

import { textVariants } from '../Text/styles.css'

export const variants = recipe({
  base: [
    atoms({
      cursor: 'pointer',
    }),
  ],

  variants: {
    variant: {
      primary: [
        atoms({
          background: {
            base: 'gradientPrimary',
            hover: 'backgroundButton',
            active: 'backgroundLight',
          },
          color: {
            base: 'white',
            hover: 'textBody',
            active: 'textBody',
          },
        }),
      ],
      solid: [
        atoms({
          background: {
            base: 'backgroundButton',
            hover: 'backgroundLight',
            active: 'backgroundDark',
          },
          color: 'textBody',
        }),
      ],
      glass: [
        atoms({
          backdropFilter: 'blur',
          background: 'backgroundLight',
          color: 'textBody',
        }),
      ],
      // TODO
      disabled: [atoms({ background: 'backgroundButton', color: 'textBody' })],
      pending: [atoms({ background: 'backgroundButton', color: 'textBody' })],
    },

    size: {
      sm: [
        textVariants({ variant: 'xsmall' }),
        atoms({
          borderRadius: 'circle',
          paddingX: 'tight',
          paddingY: 'xxtight',
        }),
        { height: '28px' },
      ],
      md: [
        textVariants({ variant: 'normal' }),
        atoms({
          borderRadius: 'lg',
          paddingY: 'tight',
          fontWeight: 'bold',
        }),
        {
          height: '44px',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        },
      ],
      lg: [
        textVariants({ variant: 'normal' }),
        atoms({
          borderRadius: 'lg',
          paddingY: 'tight',
          fontWeight: 'bold',
        }),
        {
          height: '59px',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        },
      ],
    },

    width: {
      full: [atoms({ display: 'block' }), { width: '100%' }],
      normal: [atoms({ display: 'inline-block' })],
    },
  },
})

export type Variants = RecipeVariants<typeof variants>
