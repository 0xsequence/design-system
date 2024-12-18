/**
 * boxVariants are variants that convert between the old vanilla-extract
 * atomic sprinkle properties and values to tailwind classes.
 *
 * ie. { borderRadius: 'circle' } => 'rounded-full'
 */

import { cva } from 'class-variance-authority'

import { vars } from './vars.css'

type Side = 't' | 'r' | 'b' | 'l'
type Corner = 'tl' | 'tr' | 'bl' | 'br'

const borderStyles = (side?: Side) => {
  const borderStyle = (value: 'solid' | 'dashed' | 'dotted', side?: Side) => {
    let className = 'border'

    if (side) {
      className += `-${side}`
    }

    return `${className}-${value}`
  }

  return {
    solid: borderStyle('solid', side),
    dashed: borderStyle('dashed', side),
    dotted: borderStyle('dotted', side),
  }
}

const borderWidths = (side?: Side) => {
  const borderWidth = (value: number, side?: Side) => {
    let className = 'border'

    if (value === 1) {
      return className
    }

    if (side) {
      className += `-${side}`
    }

    return `${className}-${value}`
  }

  return {
    none: borderWidth(0, side),
    thin: borderWidth(1, side),
    thick: borderWidth(2, side),
  }
}

const borderRadius = (side?: Side | Corner) => {
  const radii = {
    none: 'none',
    xs: '', // 4px
    sm: 'lg', // 8px
    md: 'xl', // 12px
    lg: '2xl', // 16px
    circle: 'full', // 9999px
  }

  const radiiValue = (value: keyof typeof radii) => {
    let className = 'rounded'

    if (side) {
      className += `-${side}`
    }

    if (radii[value]) {
      className += `-${radii[value]}`
    }

    return className
  }

  return {
    none: radiiValue('none'),
    xs: radiiValue('xs'),
    sm: radiiValue('sm'),
    md: radiiValue('md'),
    lg: radiiValue('lg'),
    circle: radiiValue('circle'),
  }
}

type PrefixKeysResult<T> = { [K in keyof T]: string }

const prefixKeys = <T extends { [key: string]: string }>(
  prefix: string,
  obj: T
): PrefixKeysResult<T> => {
  return Object.keys(obj).reduce<{
    [key: string]: string
  }>((acc, key) => {
    acc[key] = `${prefix}-${key}`

    return acc
  }, {}) as PrefixKeysResult<T>
}

const prefixValues = <T extends { [key: string]: string }>(
  prefix: string,
  obj: T
): T => {
  return Object.entries(obj).reduce<{
    [key: string]: string
  }>((acc, [key, value]) => {
    acc[key] = `${prefix}-${value}`

    return acc
  }, {}) as T
}

const spaces = <T extends { [key: string]: string }>(
  prefix: string,
  optionalSpace?: T
) => {
  return {
    ...prefixKeys(prefix, vars.space),
    ...prefixValues(prefix, optionalSpace || ({} as T)),
  }
}

const extraSpaces = {
  none: '0',
  px: '1px',
  auto: 'auto',
  full: 'full',
  '1/2': '1/2',
  '1/3': '1/3',
  '2/3': '2/3',
  '1/4': '1/4',
  '3/4': '3/4',
  fit: 'fit-content',
  max: 'max-content',
  min: 'min-content',
  vw: 'screen',
  vh: 'screen',
}

export const boxVariants = cva(undefined, {
  variants: {
    width: spaces('w', extraSpaces),
    height: spaces('h', extraSpaces),
    maxWidth: spaces('max-w', extraSpaces),
    maxHeight: spaces('max-h', extraSpaces),
    minWidth: spaces('min-w', extraSpaces),
    minHeight: spaces('min-h', extraSpaces),

    // space
    top: spaces('t', { auto: 'auto' }),
    bottom: spaces('b', { auto: 'auto' }),
    left: spaces('l', { auto: 'auto' }),
    right: spaces('r', { auto: 'auto' }),

    padding: spaces('p'),
    paddingTop: spaces('pt'),
    paddingBottom: spaces('pb'),
    paddingLeft: spaces('pl'),
    paddingRight: spaces('pr'),
    paddingX: spaces('px'),
    paddingY: spaces('py'),

    margin: spaces('m'),
    marginTop: spaces('mt'),
    marginBottom: spaces('mb'),
    marginLeft: spaces('ml'),
    marginRight: spaces('mr'),
    marginX: spaces('mx'),
    marginY: spaces('my'),
    gap: spaces('gap'),

    border: {
      none: 'border-none',
    },
    borderWidth: borderWidths(),
    borderBottomWidth: borderWidths('b'),
    borderLeftWidth: borderWidths('l'),
    borderRightWidth: borderWidths('r'),
    borderTopWidth: borderWidths('t'),

    borderStyle: borderStyles(),
    borderBottomStyle: borderStyles('b'),
    borderLeftStyle: borderStyles('l'),
    borderRightStyle: borderStyles('r'),
    borderTopStyle: borderStyles('t'),

    borderRadius: borderRadius(),
    borderLeftRadius: borderRadius('l'),
    borderRightRadius: borderRadius('r'),
    borderBottomRadius: borderRadius('b'),
    borderTopRadius: borderRadius('t'),
    borderBottomLeftRadius: borderRadius('bl'),
    borderBottomRightRadius: borderRadius('br'),
    borderTopLeftRadius: borderRadius('tl'),
    borderTopRightRadius: borderRadius('tr'),

    // typography
    fontSize: vars.fontSizes,
    fontWeight: vars.fontWeights,
    letterSpacing: vars.letterSpacings,
    lineHeight: vars.lineHeights,

    textAlign: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },

    display: {
      block: 'block',
      flex: 'flex',
      grid: 'grid',
      'inline-block': 'inline-block',
      'inline-flex': 'inline-flex',
      none: 'none',
      contents: 'contents',
    },

    position: {
      absolute: 'absolute',
      fixed: 'fixed',
      relative: 'relative',
      sticky: 'sticky',
    },

    flexDirection: {
      column: 'flex-col',
      'column-reverse': 'flex-col-reverse',
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
    },

    flexShrink: {
      '0': 'flex-shrink-0',
      '1': 'flex-shrink',
    },

    flexGrow: {
      '0': 'flex-grow-0',
      '1': 'flex-grow',
    },

    flexWrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },

    justifyContent: {
      'flex-start': 'justify-start',
      'flex-end': 'justify-end',
      center: 'justify-center',
      'space-around': 'justify-around',
      'space-between': 'justify-between',
      'space-evenly': 'justify-evenly',
    },

    justifySelf: {
      auto: 'justify-self-auto',
      'flex-start': 'justify-self-start',
      'flex-end': 'justify-self-end',
      center: 'justify-self-center',
      stretch: 'justify-self-stretch',
    },

    alignItems: {
      auto: 'items-auto',
      'flex-start': 'items-start',
      'flex-end': 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },

    alignSelf: {
      auto: 'self-auto',
      'flex-start': 'self-start',
      'flex-end': 'self-end',
      center: 'self-center',
      stretch: 'self-stretch',
      baseline: 'self-baseline',
    },

    overflow: {
      auto: 'overflow-auto',
      hidden: 'overflow-hidden',
      scroll: 'overflow-scroll',
      visible: 'overflow-visible',
    },

    overflowX: {
      auto: 'overflow-x-auto',
      hidden: 'overflow-x-hidden',
      scroll: 'overflow-x-scroll',
      visible: 'overflow-x-visible',
    },

    overflowY: {
      auto: 'overflow-y-auto',
      hidden: 'overflow-y-hidden',
      scroll: 'overflow-y-scroll',
      visible: 'overflow-y-visible',
    },

    visibility: {
      hidden: 'invisible',
      visible: 'visible',
    },

    placeItems: {
      center: 'place-items-center',
      start: 'place-items-start',
      end: 'place-items-end',
      stretch: 'place-items-stretch',
    },

    inset: spaces('inset'),

    textOverflow: {
      ellipsis: 'overflow-ellipsis',
      clip: 'overflow-clip',
    },

    textDecoration: {
      none: 'no-underline',
      underline: 'underline',
    },

    textTransform: {
      capitalize: 'capitalize',
      lowercase: 'lowercase',
      uppercase: 'uppercase',
    },

    userSelect: {
      none: 'select-none',
      text: 'select-text',
      all: 'select-all',
      auto: 'select-auto',
    },

    whiteSpace: {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      initial: 'whitespace-initial',
      inherit: 'whitespace-inherit',
    },

    wordBreak: {
      break: 'break-all',
    },

    wordWrap: {
      break: 'break-word',
      normal: 'word-wrap-normal',
      initial: 'word-wrap-initial',
      inherit: 'word-wrap-inherit',
    },

    zIndex: vars.zIndex,

    aspectRatio: {
      '1/1': 'aspect-square',
      '16/9': 'aspect-video',
      '4/3': 'aspect-[4/3]',
      '3/1': 'aspect-[3/1]',
      auto: 'aspect-auto',
    },

    color: vars.colors,
    background: vars.colors,

    borderColor: vars.colors,
    borderBottomColor: vars.colors,
    borderLeftColor: vars.colors,
    borderRightColor: vars.colors,
    borderTopColor: vars.colors,

    outline: {
      none: 'outline-none',
    },

    boxShadow: {
      none: 'shadow-none',
    },

    backdropFilter: {
      blur: 'backdrop-filter',
      none: 'backdrop-filter-none',
    },

    cursor: {
      default: 'cursor-default',
      pointer: 'cursor-pointer',
      text: 'cursor-text',
    },
  },
})

boxVariants({ width: '1' })
boxVariants({ width: 'auto' })
