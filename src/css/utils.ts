import { kebabize } from '../utils'

import { breakpoints } from './breakpoints'

export const VAR_PREFIX = 'seq'

export const mapVarName = (_value: string | null, path: string[]) =>
  `${VAR_PREFIX}-${path.map(kebabize).join('-').replace('.', '_').replace('/', '__')}`

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

export const isTruthy = <T>(value: T | undefined | null): value is T =>
  Boolean(value)
