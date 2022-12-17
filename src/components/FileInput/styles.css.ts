import { style } from '@vanilla-extract/css'

import { textVariants } from '~/components/Text/styles.css'
import { atoms } from '~/css'

export const wrap = style([
  textVariants({ variant: 'normal' }),
  atoms({
    alignItems: 'center',
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'dashed',
    borderWidth: 'thin',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    minWidth: 'full',
    opacity: {
      base: '100',
      hover: '80',
      disabled: '50',
    },
    padding: '4',
    position: 'relative',
  }),
  {
    height: 52,
  },
])

export const input = style([
  atoms({
    position: 'absolute',
    opacity: '0',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  }),
])
