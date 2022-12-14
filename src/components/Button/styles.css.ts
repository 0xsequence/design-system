import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

import { textVariants } from '../Text/styles.css'

export const buttonVariants = recipe({
  base: atoms({ overflow: 'hidden', whiteSpace: 'nowrap' }),

  variants: {
    variant: {
      base: {},

      primary: atoms({
        background: 'gradientPrimary',
        color: 'white',
      }),
      glass: atoms({
        background: 'buttonGlass',
        color: 'text100',
      }),
      emphasis: atoms({
        background: 'buttonEmphasis',
        color: 'text100',
      }),

      text: [
        textVariants({ variant: 'small' }),
        atoms({
          background: 'transparent',
          color: 'text50',
          padding: '0',
        }),
      ],
    },

    clickable: {
      true: atoms({ cursor: 'pointer', opacity: { base: '100', hover: '80' } }),
    },

    shape: {
      circle: atoms({ borderRadius: 'circle' }),
      square: atoms({ borderRadius: 'sm' }),
    },

    disabled: { true: atoms({ cursor: 'not-allowed', opacity: '50' }) },

    iconOnly: { true: {} },
    hasLeftIcon: { true: {} },
    hasRightIcon: { true: {} },

    size: {
      xs: [
        textVariants({ variant: 'xsmall' }),
        atoms({ paddingX: '3', paddingY: '1.5' }),
        { height: '28px' },
      ],
      sm: [
        textVariants({ variant: 'normal' }),
        atoms({ paddingX: '4', paddingY: '2' }),
        { height: '36px' },
      ],
      md: [
        textVariants({ variant: 'normal' }),
        atoms({ paddingX: '5', paddingY: '3' }),
        { height: '44px' },
      ],
      lg: [
        textVariants({ variant: 'normal' }),
        atoms({ paddingX: '5', paddingY: '4' }),
        { height: '52px' },
      ],
    },
  },

  compoundVariants: [
    {
      variants: { iconOnly: true, size: 'xs' },
      style: { padding: vars.space['1.5'] },
    },
    {
      variants: { iconOnly: true, size: 'sm' },
      style: { padding: vars.space['2'] },
    },
    {
      variants: { iconOnly: true, size: 'md' },
      style: { padding: vars.space['3'] },
    },
    {
      variants: { hasLeftIcon: true, size: 'xs' },
      style: { paddingLeft: vars.space['2'] },
    },
    {
      variants: { hasLeftIcon: true, size: 'sm' },
      style: { paddingLeft: vars.space['2'] },
    },
    {
      variants: { hasLeftIcon: true, size: 'md' },
      style: { paddingLeft: vars.space['4'] },
    },
    {
      variants: { hasRightIcon: true, size: 'xs' },
      style: { paddingRight: vars.space['2'] },
    },
    {
      variants: { hasRightIcon: true, size: 'sm' },
      style: { paddingRight: vars.space['2'] },
    },
    {
      variants: { hasRightIcon: true, size: 'md' },
      style: { paddingRight: vars.space['4'] },
    },
  ],
})

export type ButtonVariants = RecipeVariants<typeof buttonVariants>
