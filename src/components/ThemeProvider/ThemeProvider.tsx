import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const THEMES = ['dark', 'light'] as const

type Theme = typeof THEMES[number]

const DEFAULT_THEME = 'dark'
const THEME_ATTR = 'data-theme'
const STORAGE_KEY = '@sequence.theme'

interface ThemeContextValue {
  theme: Theme
  setTheme: (mode: Theme) => void
}

interface ThemeProviderProps {
  theme?: Theme
}

const getTheme = (): Theme => {
  const persistedTheme = localStorage.getItem(STORAGE_KEY) as Theme

  if (THEMES.includes(persistedTheme)) {
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
  const [theme, setTheme] = useState<Theme>(props.theme || getTheme())

  // Allow prop theme override
  useEffect(() => {
    if (props.theme) {
      setTheme(props.theme)
    }
  }, [props.theme])

  // Set the data-theme attribtute on the document root element
  useEffect(() => {
    const root = document.querySelector(':root')

    if (root) {
      root.setAttribute(THEME_ATTR, theme)
    }
  }, [theme])

  // Create the context value
  const value: ThemeContextValue = useMemo(() => {
    return {
      theme,
      setTheme: (mode: Theme) => {
        // Save to local storage
        localStorage.setItem(STORAGE_KEY, mode)

        // Set the theme state which will cause a re-render
        setTheme(mode)
      },
    }
  }, [theme])

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
