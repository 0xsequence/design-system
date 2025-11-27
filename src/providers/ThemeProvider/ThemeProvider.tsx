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

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = Exclude<Theme, 'system'>

export type ThemeColors = ColorTokens

export type CustomThemes = {
  light?: Partial<ThemeColors>
  dark?: Partial<ThemeColors>
}

const DEFAULT_THEME = 'dark'
const THEME_ATTR = 'data-theme'
const STORAGE_KEY = '@sequence.theme'

interface ThemeContextValue {
  /* User defined theme setting, includes 'system' */
  theme: Theme

  /* Resolved theme, 'light' or 'dark' */
  resolvedTheme: ResolvedTheme

  /* Container element the ThemeProvider is attached to*/
  container?: HTMLElement

  setTheme: (mode: Theme) => void
}

interface ThemeProviderProps {
  defaultTheme?: Theme
  customThemes?: CustomThemes
  storageKey?: string
  root?: string | HTMLElement
}

const validThemes: Theme[] = ['light', 'dark', 'system']
const isValidTheme = (theme: any): theme is Theme =>
  typeof theme === 'string' && validThemes.includes(theme as any)

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

  if (persistedTheme && isValidTheme(persistedTheme)) {
    return persistedTheme
  }

  return null
}

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const {
    children,
    defaultTheme = DEFAULT_THEME,
    customThemes,
    storageKey = STORAGE_KEY,
    root,
  } = props
  const [theme, setTheme] = useState<Theme>(
    () => getPersistedTheme(storageKey) || defaultTheme
  )
  const resolvedTheme = useMemo<ResolvedTheme>(() => {
    if (theme === 'system') {
      return getSystemTheme()
    }

    return theme
  }, [theme])
  const [container, setContainer] = useState<HTMLElement | undefined>(undefined)

  useEffect(() => {}, [theme])

  useEffect(() => {
    // Add is-apple class
    if (/Mac/.test(window.navigator.userAgent)) {
      window.document.documentElement.classList.add('is-apple')
    }
  }, [])

  // Set the data-theme attribute and CSS variables on the document root element
  useEffect(() => {
    const rootElement =
      typeof root === 'object'
        ? root
        : (document.querySelector(root || ':root') as HTMLElement)

    if (rootElement) {
      clearThemeVars(rootElement)

      rootElement.setAttribute(THEME_ATTR, resolvedTheme)

      // Apply per-scheme overrides as CSS vars
      const overrides = {
        ...customThemes?.[resolvedTheme],
      }
      setThemeVars(rootElement, overrides)

      // Add seq-root class to the root element of custom root
      if (root) {
        rootElement.classList.add('seq-root')
      }

      setContainer(root ? rootElement : document.body)
    }
  }, [resolvedTheme, root, customThemes])

  // Create the context value
  const value: ThemeContextValue = useMemo(() => {
    return {
      theme,
      resolvedTheme,
      container,
      setTheme: (theme: Theme) => {
        // Save to local storage
        localStorage.setItem(storageKey, theme)

        // Set the theme state which will cause a re-render
        setTheme(theme)
      },
    }
  }, [theme, resolvedTheme, customThemes, container, storageKey])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
