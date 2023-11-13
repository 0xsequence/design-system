type RawColor = [number, number, number, number] // values from 0 to 1

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

export class Color {
  r: number = 0
  g: number = 0
  b: number = 0
  a: number = 1

  static from(value: string): Color {
    const [r, g, b, a] = parseCSS(value)
    return new Color(r, g, b, a)
  }

  constructor(r: number, g: number, b: number, a: number) {
    this.r = clamp(r, 0, 1)
    this.g = clamp(g, 0, 1)
    this.b = clamp(b, 0, 1)
    this.a = clamp(a, 0, 1)
  }

  setAlpha(alpha: number) {
    this.a = alpha

    return this
  }

  toRGB(): RawColor {
    return [
      Math.round(this.r * 255),
      Math.round(this.g * 255),
      Math.round(this.b * 255),
      this.a,
    ]
  }

  toHSL(): RawColor {
    const r = this.r
    const g = this.g
    const b = this.b
    const a = this.a
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
    }

    return [h * 60, s * 100, l * 100, a ?? 1]
  }

  toRGBString(): string {
    const [r, g, b, a] = this.toRGB()
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  toHSLString(): string {
    const [h, s, l, a] = this.toHSL()
    return `hsla(${h}, ${s}%, ${l}%, ${a})`
  }
}

const parseCSS = (color: string): RawColor => {
  if (color === 'transparent') {
    return [0, 0, 0, 0]
  }

  const value =
    parseHex(color) ||
    parseHex(COLORS[color]) ||
    parseRGB(color) ||
    parseHSL(color)

  if (!value) {
    throw new Error(`Could not parse color ${color}`)
  }

  return value
}

const parseHex = (color: string | undefined): RawColor | undefined => {
  if (!color) {
    return
  }

  color = color.toLowerCase()

  if (/^#([a-f0-9]{3}){1,2}$/.test(color)) {
    let c = color.substring(1)

    if (c.length === 3) {
      c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]
    }

    const hex = Number('0x' + c)
    return [
      ((hex >> 16) & 255) / 255,
      ((hex >> 8) & 255) / 255,
      (hex & 255) / 255,
      1,
    ]
  }

  return
}

const parseRGB = (color: string | undefined): RawColor | undefined => {
  if (!color) {
    return
  }

  const c = color.match(/rgba?\((.*)\)/)

  if (c) {
    const [r, g, b, a] = c[1].split(/[,\s\/]+/).map(parseFloat)

    return [r / 255, g / 255, b / 255, a ?? 1]
  }

  return
}

const parseHSL = (color: string | undefined): RawColor | undefined => {
  if (!color) {
    return
  }

  const c = color.match(/hsla?\((.*)\)/)

  if (c) {
    let [h, s, l, a] = c[1]
      .replace(/deg|%/g, '')
      .split(/[,\s\/]+/)
      .map(parseFloat)
    h = h
    s /= 100
    l /= 100
    a ??= 1
    let r = 0
    let g = 0
    let b = 0

    if (s === 0) {
      r = g = b = l
      return [r, g, b, a]
    } else {
      const huePrime = (((h % 360) + 360) % 360) / 60
      const chroma = (1 - Math.abs(2 * l - 1)) * s
      const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))

      if (huePrime >= 0 && huePrime < 1) {
        r = chroma
        g = secondComponent
      } else if (huePrime >= 1 && huePrime < 2) {
        r = secondComponent
        g = chroma
      } else if (huePrime >= 2 && huePrime < 3) {
        g = chroma
        b = secondComponent
      } else if (huePrime >= 3 && huePrime < 4) {
        g = secondComponent
        b = chroma
      } else if (huePrime >= 4 && huePrime < 5) {
        r = secondComponent
        b = chroma
      } else if (huePrime >= 5 && huePrime < 6) {
        r = chroma
        b = secondComponent
      }

      const lightnessModification = l - chroma / 2
      const finalRed = r + lightnessModification
      const finalGreen = g + lightnessModification
      const finalBlue = b + lightnessModification

      return [finalRed, finalGreen, finalBlue, a]
    }
  }

  return
}

const COLORS: { [index: string]: string } = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  alegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
}
