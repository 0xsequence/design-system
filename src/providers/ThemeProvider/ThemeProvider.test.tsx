import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ThemeContext, ThemeProvider, useTheme } from './ThemeProvider.js'

const STORAGE_KEY = '@sequence.theme'

function ThemeConsumer() {
  const { theme, resolvedTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
    </div>
  )
}

describe('<ThemeProvider />', () => {
  beforeEach(() => localStorage.clear())
  afterEach(cleanup)

  it('defaults to dark theme', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme').textContent).toBe('dark')
    expect(screen.getByTestId('resolved').textContent).toBe('dark')
  })

  it('uses the defaultTheme prop', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer />
      </ThemeProvider>
    )
    expect(screen.getByTestId('theme').textContent).toBe('light')
  })

  it('reads an existing persisted theme from localStorage (line 71 / 184)', () => {
    localStorage.setItem(STORAGE_KEY, 'light')

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    )

    expect(screen.getByTestId('theme').textContent).toBe('light')
  })

  it('ignores an invalid value in localStorage and falls back to defaultTheme', () => {
    localStorage.setItem(STORAGE_KEY, 'invalid-value')

    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    )

    expect(screen.getByTestId('theme').textContent).toBe('dark')
  })

  it('skips localStorage when storageKey is null (line 178)', () => {
    localStorage.setItem(STORAGE_KEY, 'light')

    render(
      <ThemeProvider storageKey={null} defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>
    )

    // storageKey=null means persisted value is ignored
    expect(screen.getByTestId('theme').textContent).toBe('dark')
  })

  it('resolves system theme via matchMedia (line 191)', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    } as MediaQueryList)

    render(
      <ThemeProvider defaultTheme="system">
        <ThemeConsumer />
      </ThemeProvider>
    )

    expect(screen.getByTestId('theme').textContent).toBe('system')
    expect(screen.getByTestId('resolved').textContent).toBe('dark')

    vi.restoreAllMocks()
  })

  it('persists the theme to localStorage when setTheme is called', () => {
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {ctx => (
            <button onClick={() => ctx?.setTheme('light')}>Switch</button>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )

    screen.getByText('Switch').click()

    expect(localStorage.getItem(STORAGE_KEY)).toBe('light')
  })

  it('throws when useTheme is used outside a ThemeProvider', () => {
    const err = console.error
    console.error = vi.fn()

    expect(() => render(<ThemeConsumer />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    )

    console.error = err
  })
})
