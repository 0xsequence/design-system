import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const tabList = style({
  listStyleType: 'none',
})

export const tabVariants = recipe({
  variants: {
    variant: {
      pill: {},
      line: [
        atoms({ lineHeight: '5' }),
        { fontSize: '0.625rem', letterSpacing: '0.8px' },
      ],
    },

    active: {
      true: atoms({ opacity: { hover: '100' } }),
      false: {},
    },

    disabled: { true: atoms({ opacity: '50' }) },
  },

  compoundVariants: [
    {
      variants: { active: true, variant: 'pill' },
      style: atoms({ background: 'buttonInverse', color: 'textInverse100' }),
    },
    {
      variants: { active: false, variant: 'pill' },
      style: atoms({ background: 'transparent', color: 'text80' }),
    },
    {
      variants: { active: true, variant: 'line' },
      style: atoms({ color: 'text100' }),
    },
    {
      variants: { active: false, variant: 'line' },
      style: atoms({ color: 'text80' }),
    },
  ],
})

export type TabVariants = RecipeVariants<typeof tabVariants>
