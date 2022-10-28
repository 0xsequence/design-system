import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

import { breakpoints } from './breakpoints'
import { vars } from './vars.css'

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { '@media': `(min-width: ${breakpoints.md}px)` },
    lg: { '@media': `(min-width: ${breakpoints.lg}px)` },
    xl: { '@media': `(min-width: ${breakpoints.xl}px)` },
  },
  defaultCondition: 'sm',
  properties: {
    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
    borderBottomLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,

    // space
    top: vars.space,
    bottom: vars.space,
    left: vars.space,
    right: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    gap: vars.space,

    // typography
    fontSize: vars.fontSizes,
    fontWeight: vars.fontWeights,
    letterSpacing: vars.letterSpacings,
    lineHeight: vars.lineHeights,

    display: ['block', 'flex', 'grid', 'inline-block', 'none', 'contents'],
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    flexDirection: ['column', 'column-reverse', 'row', 'row-reverse'],
    justifyContent: [...flexAlignment, 'space-around', 'space-between'],
    justifySelf: flexAlignment,
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    overflowX: ['auto', 'hidden', 'scroll'],
    overflowY: ['auto', 'hidden', 'scroll'],
  },
  shorthands: {
    borderWidth: [
      'borderBottomWidth',
      'borderLeftWidth',
      'borderRightWidth',
      'borderTopWidth',
    ],
    borderRadius: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    overflow: ['overflowX', 'overflowY'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const unresponsiveProperties = defineProperties({
  properties: {
    cursor: ['default', 'pointer', 'not-allowed'],
    fontFamily: vars.fonts,
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    visibility: ['hidden', 'visible'],
    zIndex: { '0': 0, '10': 10, '20': 20, auto: 'auto' },
  },
})

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
  },
  defaultCondition: 'base',
  properties: {
    background: vars.colors,
    borderColor: vars.colors,
    color: vars.colors,
  },
})

export const atoms = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  selectorProperties
)

export type Atoms = Parameters<typeof atoms>[0]
