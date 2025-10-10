/**
 * Get the computed value of a CSS variable.
 *
 */
export const getCssVar = (
  name: string,
  element = document.documentElement
): string | null => {
  if (!name.startsWith('--')) {
    console.warn('CSS variable names must start with "--"')
    return null
  }

  const value = getComputedStyle(element).getPropertyValue(name)
  return value ? value.trim() : null
}
