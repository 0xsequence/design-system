import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  colors,
  colorSchemes,
  type ColorScheme,
  type ColorTokens,
} from '~/tokens/color.js'

export type ThemeOverrides = Partial<ColorTokens>

export type Theme = ColorScheme | ThemeOverrides

const DEFAULT_THEME = 'dark'
const THEME_ATTR = 'data-theme'
const STORAGE_KEY = '@sequence.theme'

interface ThemeContextValue {
  theme: Theme
  container?: HTMLElement
  setTheme: (mode: Theme) => void
}

interface ThemeProviderProps {
  theme?: Theme
  root?: string | HTMLElement
  scope?: string
  prefersColorScheme?: boolean
}

const isColorScheme = (theme: any): theme is ColorScheme =>
  typeof theme === 'string' && colorSchemes.includes(theme as any)

const isThemeOverrides = (theme: any): theme is ThemeOverrides =>
  typeof theme === 'object' && theme !== null && !Array.isArray(theme)

const getStorageKey = (scope?: string) =>
  scope ? `${STORAGE_KEY}.${scope}` : STORAGE_KEY

const toKebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

const toCSSVar = (key: string) => `--seq-color-${toKebabCase(key)}`

const colorVars = (Object.keys(colors.dark) as string[]).map(key =>
  toCSSVar(key)
)

const clearThemeVars = (element: HTMLElement) => {
  // Clear each color token CSS variable
  colorVars.forEach(colorVar => {
    element.style.removeProperty(colorVar)
  })
}

const setThemeVars = (element: HTMLElement, vars: ThemeOverrides) => {
  // Set each color token as a CSS variable
  Object.entries(vars).forEach(([key, value]) => {
    if (value) {
      element.style.setProperty(toCSSVar(key), value)
    }
  })
}

const getPersistedTheme = (scope?: string) => {
  const persistedTheme = localStorage.getItem(
    getStorageKey(scope)
  ) as Theme | null

  if (persistedTheme && isColorScheme(persistedTheme)) {
    return persistedTheme
  }

  return null
}

const getPreferredColorScheme = () => {
  if (matchMedia(`(prefers-color-scheme: light)`).matches) {
    return 'light'
  } else if (matchMedia(`(prefers-color-scheme: dark)`).matches) {
    return 'dark'
  }

  return null
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const [theme, setTheme] = useState<Theme>(props.theme || DEFAULT_THEME)
  const [container, setContainer] = useState<HTMLElement | undefined>(undefined)

  useEffect(() => {
    // Add is-apple class
    if (/Mac/.test(window.navigator.userAgent)) {
      window.document.documentElement.classList.add('is-apple')
    }
  }, [])

  useEffect(() => {
    const theme =
      // Use the theme prop if it exists
      props.theme ||
      // or use the persisted theme from local store if it exists
      getPersistedTheme(props.scope) ||
      // or use the browser's preferred color scheme if enabled
      (props.prefersColorScheme && getPreferredColorScheme()) ||
      // or use the default theme
      DEFAULT_THEME

    setTheme(theme)
  }, [props.theme, props.scope, props.prefersColorScheme])

  // Set the data-theme attribute and CSS variables on the document root element
  useEffect(() => {
    const rootElement =
      typeof props.root === 'object'
        ? props.root
        : (document.querySelector(props.root || ':root') as HTMLElement)

    if (rootElement) {
      clearThemeVars(rootElement)

      if (isColorScheme(theme)) {
        rootElement.setAttribute(THEME_ATTR, theme)
        // XXX: We don't need to set the theme vars here because its already defined in the CSS
        // setThemeVars(rootElement, colors[theme])
      } else if (isThemeOverrides(theme)) {
        rootElement.setAttribute(THEME_ATTR, 'custom')
        setThemeVars(rootElement, theme)
      }

      // Add seq-root class to the root element of custom root
      if (props.root) {
        rootElement.classList.add('seq-root')
      }

      setContainer(props.root ? rootElement : document.body)
    }
  }, [theme, props.root])

  // Create the context value
  const value: ThemeContextValue = useMemo(() => {
    return {
      theme,
      container,
      setTheme: (theme: Theme) => {
        if (isColorScheme(theme)) {
          // Save to local storage
          localStorage.setItem(getStorageKey(props.scope), theme)
        }

        // Set the theme state which will cause a re-render
        setTheme(theme)
      },
    }
  }, [theme, container, props.scope])

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
