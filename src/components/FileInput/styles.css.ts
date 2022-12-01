import { style } from '@vanilla-extract/css'

import { textVariants } from '~/components/Text/styles.css'
import { atoms } from '~/css'

export const wrap = style([
  textVariants({ variant: 'normal' }),
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'dashed',
    borderWidth: 'thin',
    padding: '4',
    opacity: {
      base: '100',
      hover: '80',
      disabled: '50',
    },
  }),
  { height: 52, minWidth: '100%' },
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
