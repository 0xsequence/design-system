import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

import { textVariants } from '../Text/styles.css'

export const buttonVariants = recipe({
  base: atoms({ fontWeight: 'bold' }),

  variants: {
    variant: {
      base: {},

      primary: atoms({
        background: 'gradientPrimary',
        color: {
          base: 'white',
          disabled: 'textInactive',
        },
      }),
      glass: atoms({
        backdropFilter: 'blur',
        background: 'buttonGlass',
        color: {
          base: 'textBody',
          disabled: 'textInactive',
        },
      }),
      emphasis: atoms({
        backdropFilter: 'blur',
        background: 'buttonEmphasis',
        color: {
          base: 'textBody',
          disabled: 'textInactive',
        },
      }),

      text: [
        textVariants({ variant: 'small' }),
        atoms({
          background: 'transparent',
          color: {
            base: 'textFaded',
            disabled: 'textInactive',
          },
          padding: '0',
        }),
      ],

      // TabSelect options
      active: [
        atoms({
          background: 'buttonInverse',
          color: {
            base: 'textInverse',
            disabled: 'textInactive',
          },
        }),
      ],
      inactive: [
        atoms({
          background: 'transparent',
          color: {
            base: 'textFaded',
            hover: 'textBody',
            disabled: 'textInactive',
          },
        }),
      ],
    },

    clickable: {
      true: atoms({ cursor: 'pointer', opacity: { base: '100', hover: '80' } }),
    },

    disabled: { true: atoms({ cursor: 'not-allowed', opacity: '50' }) },

    iconOnly: { true: {} },

    size: {
      xs: [
        textVariants({ variant: 'xsmall' }),
        atoms({ borderRadius: 'sm', paddingX: '3', paddingY: '1.5' }),
        { height: '28px' },
      ],
      sm: [
        textVariants({ variant: 'normal' }),
        atoms({ borderRadius: 'md', paddingX: '4', paddingY: '2' }),
        { height: '36px' },
      ],
      md: [
        textVariants({ variant: 'normal' }),
        atoms({ borderRadius: 'circle', paddingX: '5', paddingY: '3' }),
        { height: '44px' },
      ],
      lg: [
        textVariants({ variant: 'normal' }),
        atoms({ borderRadius: 'circle', paddingX: '5', paddingY: '4' }),
        { height: '52px' },
      ],
    },

    width: {
      full: [atoms({ display: 'block' }), { width: '100%' }],
      normal: [atoms({ display: 'inline-block' })],
    },
  },

  compoundVariants: [
    {
      variants: { iconOnly: true, size: 'xs' },
      style: { padding: '0.375rem' },
    },
    {
      variants: { iconOnly: true, size: 'sm' },
      style: { padding: '0.5rem' },
    },
    {
      variants: { iconOnly: true, size: 'md' },
      style: { padding: '0.75rem' },
    },
  ],
})

export type ButtonVariants = RecipeVariants<typeof buttonVariants>

export const iconVariants = recipe({
  base: {
    height: vars.lineHeights.normal,
    width: vars.lineHeights.normal,
  },

  variants: {
    size: {
      xs: {
        height: vars.lineHeights.xsmall,
        width: vars.lineHeights.xsmall,
      },
      sm: {},
      md: {},
      lg: {},
    },
  },
})
