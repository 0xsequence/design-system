import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { tokens } from '../tokens'

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'flex', 'block', 'inline', 'inline-flex'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    overflow: ['auto', 'hidden'],
    paddingTop: tokens.space,
    paddingBottom: tokens.space,
    paddingLeft: tokens.space,
    paddingRight: tokens.space,
    marginTop: tokens.space,
    marginBottom: tokens.space,
    marginLeft: tokens.space,
    marginRight: tokens.space,
    borderRadius: tokens.radii
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems']
  }
})

const colors = {
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827'
  // etc.
}

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: colors,
    background: colors
    // etc.
  }
})

export const atoms = createSprinkles(responsiveProperties, colorProperties)

export type Atoms = Parameters<typeof atoms>[0]
