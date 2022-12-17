import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const labelVariants = recipe({
  variants: {
    labelLocation: {
      top: atoms({
        alignItems: 'stretch',
        flexDirection: 'column',
        gap: '3',
      }),
      left: [
        atoms({
          alignItems: 'center',
          flexDirection: 'row',
          gap: '3',
        }),
        {
          gridTemplateColumns: '1fr 2fr',
        },
      ],
      right: [
        atoms({
          alignItems: 'center',
          flexDirection: 'row',
          gap: '3',
        }),
        {
          gridTemplateColumns: '2fr 1fr',
        },
      ],
      hidden: atoms({
        gap: '0',
      }),
    },
  },
})

export type LabelVariants = RecipeVariants<typeof labelVariants>
