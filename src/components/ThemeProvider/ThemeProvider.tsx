import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

import { colorNames, type ColorTokens } from '../../tokens/color.js'
import { kebabize } from '../../utils/string.js'

export const themes = ['dark', 'light'] as const

export type Theme = (typeof themes)[number]

export type ThemeColors = ColorTokens

type CustomThemes = {
  light?: Partial<ThemeColors>
  dark?: Partial<ThemeColors>
}

const DEFAULT_THEME = 'dark'
const THEME_ATTR = 'data-theme'
const STORAGE_KEY = '@sequence.theme'

interface ThemeContextValue {
  theme: Theme
  container?: HTMLElement
  setTheme: (mode: Theme) => void
}

interface ThemeProviderProps {
  defaultTheme?: Theme
  customThemes?: CustomThemes
  storageKey?: string
  root?: string | HTMLElement
  prefersColorScheme?: boolean
}

const isTheme = (theme: any): theme is Theme =>
  typeof theme === 'string' && themes.includes(theme as any)

const toCSSVar = (key: string) => `--seq-color-${kebabize(key)}`

const themeVarNames = colorNames.map(key => toCSSVar(key))

const clearThemeVars = (element: HTMLElement) => {
  // Clear each color token CSS variable
  themeVarNames.forEach(name => {
    element.style.removeProperty(name)
  })
}

const setThemeVars = (element: HTMLElement, props: Partial<ColorTokens>) => {
  // Set each color token as a CSS variable
  Object.entries(props).forEach(([key, value]) => {
    if (value) {
      element.style.setProperty(toCSSVar(key), value)
    }
  })
}

const getPersistedTheme = (storageKey: string): Theme | null => {
  const persistedTheme = localStorage.getItem(storageKey) as Theme | null

  if (persistedTheme && isTheme(persistedTheme)) {
    return persistedTheme
  }

  return null
}

const getSystemTheme = (): Theme | null => {
  if (matchMedia(`(prefers-color-scheme: light)`).matches) {
    return 'light'
  } else if (matchMedia(`(prefers-color-scheme: dark)`).matches) {
    return 'dark'
  }

  return null
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const {
    children,
    defaultTheme = DEFAULT_THEME,
    customThemes,
    prefersColorScheme = false,
    storageKey = STORAGE_KEY,
    root,
  } = props
  const [theme, setTheme] = useState<Theme>(
    () => getPersistedTheme(storageKey) || defaultTheme
  )
  const [container, setContainer] = useState<HTMLElement | undefined>(undefined)

  useEffect(() => {
    // Add is-apple class
    if (/Mac/.test(window.navigator.userAgent)) {
      window.document.documentElement.classList.add('is-apple')
    }
  }, [])

  useEffect(() => {
    const theme =
      // or use the persisted theme from local store if it exists
      getPersistedTheme(storageKey) ||
      // or use the browser's preferred color scheme if enabled
      (prefersColorScheme && getSystemTheme()) ||
      // or use the default theme
      defaultTheme

    setTheme(theme)
  }, [defaultTheme, storageKey, prefersColorScheme])

  // Set the data-theme attribute and CSS variables on the document root element
  useEffect(() => {
    const rootElement =
      typeof root === 'object'
        ? root
        : (document.querySelector(root || ':root') as HTMLElement)

    if (rootElement) {
      clearThemeVars(rootElement)

      rootElement.setAttribute(THEME_ATTR, theme)

      // Apply per-scheme overrides as CSS vars
      const overrides = {
        ...customThemes?.[theme],
      }
      setThemeVars(rootElement, overrides)

      // Add seq-root class to the root element of custom root
      if (root) {
        rootElement.classList.add('seq-root')
      }

      setContainer(root ? rootElement : document.body)
    }
  }, [theme, root, customThemes])

  // Create the context value
  const value: ThemeContextValue = useMemo(() => {
    return {
      theme,
      container,
      setTheme: (theme: Theme) => {
        // Save to local storage
        localStorage.setItem(storageKey, theme)

        // Set the theme state which will cause a re-render
        setTheme(theme)
      },
    }
  }, [theme, customThemes, container, storageKey])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
