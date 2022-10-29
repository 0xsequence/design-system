import { recipe } from '@vanilla-extract/recipes'

import { vars } from '~/css'
import { typography } from '~/css/typography.css'

export const button = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    userSelect: 'none',
    cursor: 'pointer',
    appearance: 'none',
    border: 'none',
    lineHeight: 0,
    backdropFilter: 'blur(12.5px)',
    background: vars.colors.backgroundComponent,
    color: vars.colors.white,
  },

  variants: {
    size: {
      sm: [
        typography.b4,
        {
          height: '24px',
          borderRadius: vars.radii.sm,
          padding: `0 ${vars.space.md}`,
        },
      ],
      md: {
        height: '32px',
        borderRadius: vars.radii.full,
        padding: `0 ${vars.space.lg}`,
      },
      lg: {
        height: '48px',
        borderRadius: vars.radii.md,
      },
    },
    variant: {
      primary: {
        background: vars.colors.gradientPrimary,
        color: 'white',
      },
    },
  },
})
