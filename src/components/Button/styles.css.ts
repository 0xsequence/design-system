import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const variants = recipe({
  base: style([
    atoms({
      cursor: 'pointer',
      fontFamily: 'body',
    }),
    style({ border: 'none' }),
  ]),

  variants: {
    variant: {
      primary: style([
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
      ]),
      solid: style([
        atoms({
          background: {
            base: 'backgroundButton',
            hover: 'backgroundLight',
            active: 'backgroundDark',
          },
          color: 'textBody',
        }),
      ]),
      glass: style([
        atoms({
          backdropFilter: 'blur',
          background: 'backgroundLight',
          color: 'textBody',
        }),
      ]),
      // TODO
      disabled: style([
        atoms({ background: 'backgroundButton', color: 'textBody' }),
      ]),
      pending: style([
        atoms({ background: 'backgroundButton', color: 'textBody' }),
      ]),
    },

    size: {
      sm: style([
        atoms({
          borderRadius: 'circle',
          paddingX: 'tight',
          paddingY: 'xxtight',
          textSize: 'xsmall',
          weight: 'bold',
        }),
        style({ height: '28px' }),
      ]),
      md: style([
        atoms({
          borderRadius: 'lg',
          paddingY: 'tight',
          textSize: 'normal',
          weight: 'bold',
        }),
        style({
          height: '44px',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        }),
      ]),
      lg: style([
        atoms({
          borderRadius: 'lg',
          paddingY: 'tight',
          textSize: 'small',
          weight: 'semiBold',
        }),
        style({
          height: '59px',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        }),
      ]),
    },

    width: {
      full: style([atoms({ display: 'block' }), style({ width: '100%' })]),
      normal: style([atoms({ display: 'inline-block' })]),
    },
  },
})

export type Variants = RecipeVariants<typeof variants>
