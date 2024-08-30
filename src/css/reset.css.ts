import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('.seq-root *, .seq-root *::before, .seq-root *::after', {
  boxSizing: 'border-box',
})
