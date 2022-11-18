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
