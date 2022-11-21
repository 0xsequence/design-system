import { breakpoints } from './breakpoints'

export const kebabize = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )

export const capitalize = (s: string) => {
  if (s === '') {
    return ''
  }

  return s[0].toUpperCase() + s.slice(1)
}

export const mapVarName = (_value: string | null, path: string[]) =>
  path.map(kebabize).join('-').replace('.', '_').replace('/', '__')

export const responsiveStyle = (rules: {
  [key in keyof typeof breakpoints]?: Record<string, string>
}) => {
  return Object.entries(rules).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`screen and (min-width: ${
        breakpoints[key as keyof typeof breakpoints]
      }px)`]: value,
    }
  }, {})
}
