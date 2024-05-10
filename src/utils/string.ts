export const pluralize = (count: number, singular: string, plural: string) => {
  return count === 1 ? singular : plural
}

export const capitalize = (s: string) => {
  if (s === '') {
    return ''
  }

  return s[0].toUpperCase() + s.slice(1)
}

export const kebabize = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )
