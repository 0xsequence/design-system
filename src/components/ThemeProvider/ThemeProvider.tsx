import { setElementVars } from '@vanilla-extract/dynamic'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { colorSchemeVars } from '~/css/vars.css'
import { colors, ColorTokens } from '~/tokens/color'

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

interface ThemeContextValue {
  theme: Theme | ThemeOverrides
  root?: string
  setTheme: (mode: Theme) => void
}

interface ThemeProviderProps {
  theme?: Theme | ThemeOverrides
  root?: string
  scope?: string
}

const getTheme = (scope?: string): Theme => {
  const persistedTheme = localStorage.getItem(
    getStorageKey(scope)
  ) as Theme | null

  if (persistedTheme && THEMES.includes(persistedTheme)) {
    return persistedTheme
  }

  // else if (matchMedia(`(prefers-color-scheme: light)`).matches) {
  //   return 'light'
  // } else if (matchMedia(`(prefers-color-scheme: dark)`).matches) {
  //   return 'dark'
  // }

  return DEFAULT_THEME
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const [theme, setTheme] = useState<Theme | ThemeOverrides>(
    props.theme || getTheme(props.scope)
  )

  useEffect(() => {
    // Add is-apple class
    ;/Mac/.test(window.navigator.userAgent) &&
      window.document.documentElement.classList.add('is-apple')
  }, [])

  // Allow prop theme override
  useEffect(() => {
    if (props.theme) {
      setTheme(props.theme)
    }
  }, [props.theme])

  // Set the data-theme attribtute on the document root element
  useEffect(() => {
    const rootEl = document.querySelector(props.root || ':root') as HTMLElement

    if (rootEl) {
      if (isTheme(theme)) {
        rootEl.setAttribute(THEME_ATTR, theme)
        setElementVars(rootEl, colorSchemeVars, {
          colors: colors[theme],
        })
      } else if (isThemeOverrides(theme)) {
        setElementVars(rootEl, colorSchemeVars, {
          colors: theme as ColorTokens,
        })
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
