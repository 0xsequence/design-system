import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

import { textVariants } from '../Text/styles.css'

const outlineStyle = {
  outlineStyle: 'solid',
  outlineOffset: `calc(${vars.borderWidths.thick} * -1)`,
  outlineWidth: vars.borderWidths.thick,
  borderColor: 'transparent',
} as const

export const buttonVariants = recipe({
  base: atoms({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    alignItems: 'center',
  }),

  variants: {
    variant: {
      base: {},

      feature: [
        atoms({
          background: 'gradientSecondary',
          color: 'white',
        }),
        {
          outline: '2px solid rgba(255, 255, 255, 0.1)',
          outlineOffset: '-2px',
        },
      ],
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
      danger: atoms({
        background: 'negative',
        color: 'white',
      }),

      text: [
        textVariants({ variant: 'small' }),
        atoms({
          background: 'transparent',
          color: 'text50',
          borderRadius: 'xs',
        }),
        {
          outlineOffset: '1px',
        },
      ],
    },

    shape: {
      circle: atoms({ borderRadius: 'circle' }),
      square: atoms({ borderRadius: 'sm' }),
    },

    disabled: {
      true: atoms({ cursor: 'default', opacity: '50' }),
      false: atoms({
        cursor: 'pointer',
        opacity: { base: '100', hover: '80' },
      }),
    },

    size: {
      xs: [
        textVariants({ variant: 'xsmall' }),
        atoms({ paddingX: '3' }),
        { height: '28px' },
      ],
      sm: [
        textVariants({ variant: 'normal' }),
        atoms({ paddingX: '4' }),
        { height: '36px' },
      ],
      md: [
        textVariants({ variant: 'normal' }),
        atoms({ paddingX: '5' }),
        { height: '44px' },
      ],
      lg: [
        textVariants({ variant: 'normal' }),
        atoms({ paddingX: '5' }),
        { height: '52px' },
      ],
    },

    iconOnly: {
      true: {
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    hasLeftIcon: { true: {} },
    hasRightIcon: { true: {} },

    activeOutline: {
      light: {
        outlineColor: vars.colors.backgroundSecondary,
        ...outlineStyle,
      },
      bold: {
        outlineColor: vars.colors.borderNormal,
        ...outlineStyle,
      },
    },
  },

  compoundVariants: [
    {
      variants: { iconOnly: true, size: 'xs' },
      style: { width: '28px' },
    },
    {
      variants: { iconOnly: true, size: 'sm' },
      style: { width: '36px' },
    },
    {
      variants: { iconOnly: true, size: 'md' },
      style: { width: '44px' },
    },
    {
      variants: { iconOnly: true, size: 'lg' },
      style: { width: '52px' },
    },
    {
      variants: { iconOnly: false, hasLeftIcon: true, size: 'xs' },
      style: { paddingLeft: vars.space['2'] },
    },
    {
      variants: { iconOnly: false, hasLeftIcon: true, size: 'sm' },
      style: { paddingLeft: vars.space['2'] },
    },
    {
      variants: { iconOnly: false, hasLeftIcon: true, size: 'md' },
      style: { paddingLeft: vars.space['4'] },
    },
    {
      variants: { iconOnly: false, hasRightIcon: true, size: 'xs' },
      style: { paddingRight: vars.space['2'] },
    },
    {
      variants: { iconOnly: false, hasRightIcon: true, size: 'sm' },
      style: { paddingRight: vars.space['2'] },
    },
    {
      variants: { iconOnly: false, hasRightIcon: true, size: 'md' },
      style: { paddingRight: vars.space['4'] },
    },
  ],
})

export type ButtonVariants = RecipeVariants<typeof buttonVariants>
