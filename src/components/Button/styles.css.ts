import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

import { textVariants } from '../Text/styles.css'

export const buttonVariants = recipe({
  base: [
    atoms({
      cursor: {
        base: 'pointer',
        disabled: 'not-allowed',
      },
    }),
  ],

  variants: {
    variant: {
      primary: [
        atoms({
          background: 'gradientPrimary',
          color: 'white',
          opacity: {
            base: '100',
            hover: '80',
            disabled: '50',
          },
        }),
      ],
      solid: [
        atoms({
          background: 'backgroundButton',
          color: 'textBody',
          opacity: {
            base: '100',
            hover: '80',
            disabled: '50',
          },
        }),
      ],
      glass: [
        atoms({
          backdropFilter: 'blur',
          background: 'backgroundGlass',
          color: 'textBody',
          opacity: {
            base: '100',
            hover: '80',
            disabled: '50',
          },
        }),
      ],
      nested: [
        atoms({
          backdropFilter: 'blur',
          background: 'backgroundNestedGlass',
          color: 'textBody',
          opacity: {
            base: '100',
            hover: '80',
            disabled: '50',
          },
        }),
      ],
      text: [
        atoms({
          background: {
            base: 'transparent',
            hover: 'backgroundGlass',
          },
          color: 'textBody',
          opacity: {
            base: '100',
            hover: '80',
            disabled: '50',
          },
        }),
      ],
      // TabSelect options
      active: [
        atoms({
          background: 'backgroundInverse',
          color: 'textInverse',
        }),
      ],
      inactive: [
        atoms({
          background: 'transparent',
          color: {
            base: 'textFaded',
            hover: 'textBody',
          },
        }),
      ],
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
      tab: [
        textVariants({ variant: 'normal' }),
        atoms({
          borderRadius: 'circle',
          fontWeight: 'bold',
          paddingX: 'xtight',
          paddingY: 'xxtight',
        }),
        { height: '28px' },
      ],
    },

    width: {
      full: [atoms({ display: 'block' }), { width: '100%' }],
      normal: [atoms({ display: 'inline-block' })],
    },
  },
})

export type ButtonVariants = RecipeVariants<typeof buttonVariants>

export const iconVariants = recipe({
  variants: {
    size: {
      sm: {
        height: vars.lineHeights.xsmall,
        width: vars.lineHeights.xsmall,
      },
      md: {
        height: vars.lineHeights.normal,
        width: vars.lineHeights.normal,
      },
      lg: {
        height: vars.lineHeights.normal,
        width: vars.lineHeights.normal,
      },
      tab: {
        height: vars.lineHeights.small,
        width: vars.lineHeights.small,
      },
    },
  },
})
