import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { ColorTokens } from '~/tokens/color'

const THEMES = ['dark', 'light'] as const

export type Theme = (typeof THEMES)[number]

const DEFAULT_THEME = 'dark'
const THEME_ATTR = 'data-theme'
const STORAGE_KEY = '@sequence.theme'

const isTheme = (theme: any): theme is Theme => THEMES.includes(theme as any)

type ThemeOverrides = Partial<ColorTokens>

const isThemeOverrides = (theme: any): theme is ThemeOverrides =>
  typeof theme === 'object' && theme !== null && !Array.isArray(theme)

const getStorageKey = (scope?: string) =>
  scope ? `${STORAGE_KEY}.${scope}` : STORAGE_KEY

const toKebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

const setThemeVars = (element: HTMLElement, vars: ThemeOverrides) => {
  // Set each color token as a CSS variable
  Object.entries(vars).forEach(([key, value]) => {
    if (value) {
      const kebabKey = toKebabCase(key)
      element.style.setProperty(`--seq-colors-${kebabKey}`, value)
    }
  })
}

interface ThemeContextValue {
  theme: Theme | ThemeOverrides
  root?: string
  setTheme: (mode: Theme) => void
}

interface ThemeProviderProps {
  theme?: Theme | ThemeOverrides
  root?: string
  scope?: string
  prefersColorScheme?: boolean
}

const getPersistedTheme = (scope?: string) => {
  const persistedTheme = localStorage.getItem(
    getStorageKey(scope)
  ) as Theme | null

  if (persistedTheme && THEMES.includes(persistedTheme)) {
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
  const [theme, setTheme] = useState<Theme | ThemeOverrides>(
    props.theme || DEFAULT_THEME
  )

  useEffect(() => {
    // Add is-apple class
    ;/Mac/.test(window.navigator.userAgent) &&
      window.document.documentElement.classList.add('is-apple')
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
    const rootEl = document.querySelector(props.root || ':root') as HTMLElement

    if (rootEl) {
      if (isTheme(theme)) {
        rootEl.setAttribute(THEME_ATTR, theme)
      } else if (isThemeOverrides(theme)) {
        setThemeVars(rootEl, theme)
      }

      // Add seq-root class to the root element of custom root
      if (props.root) {
        rootEl.classList.add('seq-root')
      }
    }
  }, [theme, props.root])

  // Create the context value
  const value: ThemeContextValue = useMemo(() => {
    return {
      theme,
      root: props.root,
      setTheme: (mode: Theme) => {
        if (THEMES.includes(mode)) {
          // Save to local storage
          localStorage.setItem(getStorageKey(props.scope), mode)

          // Set the theme state which will cause a re-render
          setTheme(mode)
        }
      },
    }
  }, [theme, props.root, props.scope])

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
