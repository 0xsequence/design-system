//import { setElementVars } from '@vanilla-extract/dynamic';
import { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react'

const THEME_ATTR = 'data-theme'

interface ThemeContextValue {
  theme: string
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  theme: string
}

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const { theme, children } = props
  const value: ThemeContextValue = useMemo(
    () => ({
      theme
    }),
    [theme]
  )

  useEffect(() => {
    const root = document.querySelector(':root')

    if (root) {
      root.setAttribute(THEME_ATTR, theme)
      //setElementVars(root, {})
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
