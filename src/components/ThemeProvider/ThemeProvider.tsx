import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export interface Color {
  r: number
  g: number
  b: number
}

export interface Theme {
  foreground: Color
  background: Color
  backgroundBackdrop: Color,
  backgroundRaised: Color,
  statusPositive: Color
  statusNegative: Color
  statusWarning: Color
  statusInfo: Color
  primaryButton: string
}

const DEFAULT_THEME: Theme = {
  foreground: { r: 255, g: 255, b: 255 },
  background: { r: 0, g: 0, b: 0 },
  backgroundBackdrop: { r: 34, g: 34, b: 34 },
  backgroundRaised: { r: 54, g: 54, b: 54 },
  statusPositive: { r: 31, g: 194, b: 102 },
  statusNegative: { r: 194, g: 80, b: 31 },
  statusWarning: { r: 244, g: 176, b: 62 },
  statusInfo: { r: 0, g: 118, b: 204 },
  primaryButton: 'linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)'
}

const STORAGE_KEY = '@sequence.theme'

interface ThemeContextValue {
  theme: Theme
  setTheme: (mode: Theme) => void
}

interface ThemeProviderProps {
  theme?: Theme
}

const getTheme = (): Theme => {
  const persistedThemeRaw = localStorage.getItem(STORAGE_KEY)

  if (persistedThemeRaw) {
    const persistedTheme = JSON.parse(persistedThemeRaw) as Theme
    return persistedTheme
  }

  return DEFAULT_THEME
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const [theme, setTheme] = useState<Theme>(props.theme || getTheme())

  
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


  // Create the context value
  const value: ThemeContextValue = useMemo(() => {
    return {
      theme,
      setTheme: (newTheme: Theme) => {
        const themeString = JSON.stringify(newTheme)
        // Save to local storage
        localStorage.setItem(STORAGE_KEY, themeString)

        // Set the theme state which will cause a re-render
        setTheme(newTheme)
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
