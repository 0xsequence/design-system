import {
  type RenderOptions,
  type RenderResult,
  render,
} from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'

import { ThemeProvider } from './ThemeProvider.js'

interface WrapperProps {
  children: ReactNode
}

const Wrapper = (props: WrapperProps) => {
  return <ThemeProvider>{props.children}</ThemeProvider>
}

export const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: Wrapper, ...options })
