//import { setElementVars } from '@vanilla-extract/dynamic';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from 'react'

const THEME_ATTR = 'data-theme'
const STORAGE_KEY = '@sequence.theme'

interface ThemeContextValue {
  theme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  theme?: 'light' | 'dark'
}

const persistTheme = (mode: ThemeContextValue['theme']) => {
  localStorage.setItem(STORAGE_KEY, mode)
  return mode
}

const getPreferredTheme = () => {
  const preferredTheme = localStorage.getItem(STORAGE_KEY)
  if (
    preferredTheme === 'light' ||
    (preferredTheme !== 'dark' &&
      matchMedia(`(prefers-color-scheme:light)`).matches)
  ) {
    return persistTheme('light')
  }
  return persistTheme('dark')
}

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const { theme, children } = props

  const value: ThemeContextValue = useMemo(() => {
    return {
      theme: theme ?? getPreferredTheme(),
    }
  }, [theme])

  useEffect(() => {
    const root = document.querySelector(':root')

    if (root) {
      persistTheme(value.theme)
      root.setAttribute(THEME_ATTR, value.theme)
    }
  }, [value.theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
