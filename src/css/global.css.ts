import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*:focus', {
  outlineColor: 'rgba(255,255,255,0.5)',
  outlineStyle: 'solid',
  outlineOffset: '-2px',
  outlineWidth: '2px',
  borderColor: 'transparent',
})
