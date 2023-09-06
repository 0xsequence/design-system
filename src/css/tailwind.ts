import { Atoms } from './atoms'
import { isTruthy, kebabize } from './utils'

type TextVariant = 'ellipsis' | 'capitalize' | 'lowercase' | 'uppercase'

export type TailwindMapName = keyof Required<Atoms> | TextVariant

export type TailwindMapValue = string | ((value: string) => string | null)

const borderRadius =
  (
    side?: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br'
  ): TailwindMapValue =>
  (value: string) => {
    const radii = {
      none: 'none',
      xs: '', // 4px
      sm: 'lg', // 8px
      md: 'xl', // 12px
      lg: '2xl', // 16px
      circle: 'full', // 9999px
    }

    const radiiValue = radii[value as keyof typeof radii]

    return `rounded${side ? `-${side}` : ''}${
      radiiValue ? `-${radiiValue}` : ''
    }`
  }

const borderWidth =
  (side?: 't' | 'b' | 'l' | 'r'): TailwindMapValue =>
  (value: string) => {
    const widths = {
      none: '0',
      thin: '', // '0.075rem', no suffix for 1px border in tailwind
      thick: '2', // '0.125rem',
    }

    const widthValue = widths[value as keyof typeof widths]

    return `border${side ? `-${side}` : ''}${
      widthValue ? `-${widthValue}` : ''
    }`
  }

const borderColor =
  (side?: 't' | 'b' | 'l' | 'r'): TailwindMapValue =>
  (value: string) => {
    const colors = {
      normal: 'normal',
      focus: 'focus',
    }

    const colorValue = colors[value as keyof typeof colors]

    return `border${side ? `-${side}` : ''}${
      colorValue ? `-${colorValue}` : ''
    }`
  }

const tailwindMap: {
  [key in TailwindMapName]: TailwindMapValue
} = {
  position: '', // Empty string means just pass the value prefixless
  margin: 'm',
  marginTop: 'mt',
  marginBottom: 'mb',
  marginLeft: 'ml',
  marginRight: 'mr',
  marginX: 'mx',
  marginY: 'my',

  padding: 'p',
  paddingTop: 'pt',
  paddingBottom: 'pb',
  paddingLeft: 'pl',
  paddingRight: 'pr',
  paddingX: 'px',
  paddingY: 'py',

  width: 'w',
  minWidth: 'min-w',
  maxWidth: 'max-w',

  height: 'h',
  minHeight: 'min-h',
  maxHeight: 'max-h',

  gap: 'gap',

  whiteSpace: 'whitespace',

  wordWrap: 'break',
  wordBreak: 'break',

  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',

  inset: 'inset',

  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',

  zIndex: 'z',

  userSelect: 'select',

  cursor: 'cursor',

  fontFamily: 'font',

  textTransform: '', // No prefix - pass through value as utility class

  opacity: 'opacity',

  pointerEvents: 'pointer-events',

  focusRing: 'shadow', // focusRing is only used for disabling a box shadow with none
  boxShadow: 'shadow',
  outline: 'outline', // Not used

  // Text variants: Boolean short hands for applying specific text styles
  ellipsis: 'truncate',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',

  borderRadius: borderRadius(),
  borderTopRadius: borderRadius('t'),
  borderBottomRadius: borderRadius('b'),
  borderLeftRadius: borderRadius('l'),
  borderRightRadius: borderRadius('r'),
  borderTopLeftRadius: borderRadius('tl'),
  borderTopRightRadius: borderRadius('tr'),
  borderBottomLeftRadius: borderRadius('bl'),
  borderBottomRightRadius: borderRadius('br'),

  borderWidth: borderWidth(),
  borderTopWidth: borderWidth('t'),
  borderBottomWidth: borderWidth('b'),
  borderLeftWidth: borderWidth('l'),
  borderRightWidth: borderWidth('r'),

  borderColor: borderColor(),
  borderTopColor: borderColor('t'),
  borderBottomColor: borderColor('b'),
  borderLeftColor: borderColor('l'),
  borderRightColor: borderColor('r'),

  // tailwind only supports a single border style at a time so we can't specify a side here - just map all to border
  borderStyle: 'border',
  borderTopStyle: 'border',
  borderBottomStyle: 'border',
  borderLeftStyle: 'border',
  borderRightStyle: 'border',

  aspectRatio: value => {
    switch (value) {
      case 'auto':
        return 'aspect-auto'
      case '1/1':
        return 'aspect-square'
      case '16/9':
        return 'aspect-video'
      case '4/3':
        return 'aspect-[4 / 3]'
      case '3/1':
        return 'aspect-[3 / 1]'
    }

    return null
  },

  alignSelf: value => {
    switch (value) {
      case 'auto':
        return 'self-auto'
      case 'flex-start':
        return 'self-start'
      case 'flex-end':
        return 'self-end'
      case 'center':
        return 'self-center'

      case 'stretch':
        return 'self-stretch'
      case 'baseline':
        return 'self-baseline'
    }

    return null
  },

  textOverflow: value => {
    switch (value) {
      case 'ellipsis':
        return 'ellipsis'
      case 'clip':
        return 'overflow-clip'
    }

    return null
  },

  fontSize: value => {
    switch (value) {
      case 'inherit':
        return 'text-[inherit]'
      case 'xsmall':
        return 'text-xs'
      case 'small':
        return 'text-sm'
      case 'normal':
        return 'text-base'
      case 'medium':
        return 'text-large'
      case 'large':
        return 'text-xl'
      case 'xlarge':
        return 'text-2xl'
    }

    return null
  },

  fontWeight: value => {
    switch (value) {
      case 'inherit':
        return 'font-[inherit]'
      case 'normal':
        return 'font-normal'
      case 'medium':
        return 'font-medium'
      case 'semibold':
        return 'font-semibold'
      case 'bold':
        return 'font-bold'
    }

    return null
  },

  letterSpacing: value => {
    switch (value) {
      case 'inherit':
        return 'tracking-[inherit]'
      case 'none':
        return 'tracking-normal'
      case 'normal':
        return 'tracking-wide'
      case 'wide':
        return 'tracking-wider'
    }

    return null
  },

  lineHeight: value => {
    switch (value) {
      case 'inherit':
        return 'leading-[inherit]'
      case '4':
        return 'leading-4'
      case '5':
        return 'leading-5'
      case '6':
        return 'leading-6'
      case '7':
        return 'leading-7'
      case '9':
        return 'leading-9'
    }

    return null
  },

  color: value => `text-${kebabize(value)}`,
  background: value => `bg-${kebabize(value.replace('background', ''))}`,

  placeItems: value => {
    switch (value) {
      case 'center':
        return 'place-items-center'
      case 'start':
        return 'place-items-start'
      case 'end':
        return 'place-items-end'
      case 'stretch':
        return 'place-items-stretch'
    }

    return null
  },

  alignItems: value => {
    switch (value) {
      case 'flex-start':
        return 'items-start'
      case 'flex-end':
        return 'items-end'
      case 'center':
        return 'items-center'
      case 'baseline':
        return 'items-baseline'
      case 'stretch':
        return 'items-stretch'
    }

    return null
  },

  justifyContent: value => {
    switch (value) {
      case 'flex-start':
        return 'justify-start'
      case 'flex-end':
        return 'justify-end'
      case 'center':
        return 'justify-center'
      case 'space-between':
        return 'justify-between'
      case 'space-around':
        return 'justify-around'
      case 'space-evenly':
        return 'justify-evenly'
    }

    return null
  },

  justifySelf: value => {
    switch (value) {
      case 'auto':
        return 'justify-self-auto'
      case 'flex-start':
        return 'justify-self-start'
      case 'flex-end':
        return 'justify-self-end'
      case 'center':
        return 'justify-self-center'
      case 'stretch':
        return 'justify-self-stretch'
    }

    return null
  },

  backdropFilter: value => {
    switch (value) {
      case 'none':
        return 'backdrop-filter-none'
      case 'blur':
        return 'backdrop-filter'
    }

    return null
  },

  flexDirection: value => {
    switch (value) {
      case 'column':
        return 'flex-col'
      case 'column-reverse':
        return 'flex-col-reverse'
      case 'row':
        return 'flex-row'
      case 'row-reverse':
        return 'flex-row-reverse'
    }

    return null
  },

  flexShrink: value => {
    switch (value) {
      case '0':
        return 'flex-shrink-0'
      case '1':
        return 'flex-shrink'
    }

    return null
  },

  flexGrow: value => {
    switch (value) {
      case '0':
        return 'flex-grow-0'
      case '1':
        return 'flex-grow'
    }

    return null
  },

  flexWrap: value => `flex-${value}`,

  visibility: value => {
    switch (value) {
      case 'hidden':
        return 'invisible'
      case 'visible':
        return 'visible'
    }

    return null
  },

  textAlign: value => `text-${value}`,

  display: value => {
    switch (value) {
      case 'none':
        return 'hidden'
      case 'block':
        return 'block'
      case 'inline':
        return 'inline'
      case 'inline-block':
        return 'inline-block'
      case 'flex':
        return 'flex'
      case 'inline-flex':
        return 'inline-flex'
      case 'grid':
        return 'grid'
      case 'contents':
        return 'contents'
    }

    return null
  },
}

export const TAILWIND_MAP_NAMES = Object.keys(tailwindMap) // as any as TailwindMapName[]

export const getTailwindClassName = (
  key: string,
  value?: string
): string | null => {
  const mapValue = tailwindMap[key as TailwindMapName]

  if (!mapValue) {
    return null
  }

  if (typeof mapValue === 'function') {
    return mapValue(value ? value : '')
  } else {
    return [mapValue, value].filter(isTruthy).join('-')
  }
}
