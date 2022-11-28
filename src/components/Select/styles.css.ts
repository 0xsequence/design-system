import { style } from '@vanilla-extract/css'

import { textVariants } from '~/components/Text/styles.css'
import { atoms } from '~/css'

export const trigger = style([
  textVariants({ variant: 'normal' }),
  atoms({
    alignItems: 'center',
    background: 'transparent',
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 'thin',
    cursor: 'pointer',
    display: 'inline-flex',
    gap: '1',
    justifyContent: 'center',
    paddingX: '0',
    paddingY: '4',
    userSelect: 'none',
    width: 'full',
  }),
  {
    height: '35px',
  },
])
