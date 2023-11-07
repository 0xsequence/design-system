import { render, RenderOptions } from '@testing-library/react'
import { ReactElement, ReactNode } from 'react'

import { ThemeProvider } from './ThemeProvider'

interface WrapperProps {
  children: ReactNode
}

const Wrapper = (props: WrapperProps) => {
  return <ThemeProvider>{props.children}</ThemeProvider>
}

export const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options })
