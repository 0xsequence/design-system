import { breakpoints } from './breakpoints'

export const kebabize = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )


export const mapVarName = (_value: string | null, path: string[]) => {
  const suffix = process.env.DESIGN_SYSTEM_SUFFIX

  return `${path.map(kebabize).join('-').replace('.', '_').replace('/', '__')}${suffix ? `-${suffix}` : ''}`
}

export const responsiveStyle = (rules: {
  [key in keyof typeof breakpoints]?: Record<string, string | string[]>
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

export const selectorize = (classNames: string) =>
  '.' + classNames.split(' ').join('.')
