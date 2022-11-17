import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

import { textVariants } from '../Text/styles.css'

export const buttonVariants = recipe({
  base: atoms({
    borderRadius: 'circle',
    color: {
      base: 'textBody',
      disabled: 'textInactive',
    },
    cursor: {
      base: 'pointer',
      disabled: 'not-allowed',
    },
    fontWeight: 'bold',
    opacity: {
      base: '100',
      hover: '80',
      disabled: '50',
    },
  }),

  variants: {
    variant: {
      primary: atoms({ background: 'gradientPrimary' }),
      solid: atoms({ backdropFilter: 'blur', background: 'buttonSolid' }),
      glass: atoms({ backdropFilter: 'blur', background: 'buttonGlass' }),
      emphasis: atoms({ backdropFilter: 'blur', background: 'buttonEmphasis' }),

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

    iconOnly: { true: {} },

    size: {
      tiny: [
        textVariants({ variant: 'xsmall' }),
        atoms({ paddingX: '3' }),
        {
          height: '28px',
          paddingTop: '0.375rem',
          paddingBottom: '0.375rem',
        },
      ],
      sm: [
        textVariants({ variant: 'normal' }),
        atoms({
          borderRadius: 'md',
          paddingX: '4',
          paddingY: '2',
        }),
        {
          height: '36px',
        },
      ],
      md: [
        textVariants({ variant: 'normal' }),
        atoms({ paddingX: '5', paddingY: '3' }),
        {
          height: '44px',
        },
      ],
      lg: [
        textVariants({ variant: 'normal' }),
        atoms({ paddingX: '5', paddingY: '4' }),
        {
          height: '52px',
        },
      ],
      tabTiny: [
        textVariants({ variant: 'xsmall' }),
        atoms({ paddingX: '2', paddingY: '1' }),
        {
          height: '24px',
        },
      ],
      tab: [
        textVariants({ variant: 'normal' }),
        {
          height: '32px',
          padding: '0.375rem 1.25rem',
        },
      ],
    },

    width: {
      full: [atoms({ display: 'block' }), { width: '100%' }],
      normal: [atoms({ display: 'inline-block' })],
    },
  },

  compoundVariants: [
    {
      variants: { iconOnly: true, size: 'tiny' },
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
      tiny: {
        height: vars.lineHeights.xsmall,
        width: vars.lineHeights.xsmall,
      },
      sm: {},
      md: {},
      lg: {},
      tabTiny: {
        height: vars.lineHeights.small,
        width: vars.lineHeights.small,
      },
      tab: {
        height: vars.lineHeights.small,
        width: vars.lineHeights.small,
      },
    },
  },
})
