import { Decorator } from '@storybook/react'
import React from 'react'

import { ThemeProvider } from '../src/components/ThemeProvider'

import docsTheme from './theme.cjs'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Design System',
        ['Design Tokens', 'Colors', 'Typography', 'Iconography'],
        'Components',
        ['Atoms', 'Molecules', 'Organisms'],
      ],
    },
  },
  docs: {
    theme: docsTheme,
  },
}

const themeOverride = {
  foreground: { r: 255, g: 15, b: 100 },
  background: { r: 125, g: 200, b: 25 },
  backgroundBackdrop: { r: 221, g: 221, b: 221 },
  backgroundRaised: { r: 192, g: 192, b: 192 },
  statusPositive: { r: 31, g: 194, b: 102 },
  statusNegative: { r: 194, g: 80, b: 31 },
  statusWarning: { r: 244, g: 176, b: 62 },
  statusInfo: { r: 0, g: 118, b: 204 },
  primaryButton: 'linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)'
}

export const globalTypes = {
  // Theme select toggle
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circle', title: 'Dark' },
      ],
    },
  },
  themeOverride: {
    name: 'Override',
    description: 'Use theme override',
    toolbar: {
      title: 'Theme Override',
      icon: 'circleHollow',
      defaultValue: undefined,
      items: [
        { value: undefined, icon: 'circlehollow', title: 'No ThemeOverride' },
        { value: themeOverride, icon: 'circle', title: 'With ThemeOverride' },
      ],
    }
  }
}

const withTheme: Decorator = (StoryFn, context) => {
  const { theme, themeOverride } = context.globals

  const customTheme = {
    foreground: { r: 145, g: 157, b: 219 },
    background: { r: 85, g: 38, b: 201 },
    backgroundBackdrop: { r: 221, g: 221, b: 221 },
    backgroundRaised: { r: 192, g: 192, b: 192 },
    statusPositive: { r: 31, g: 194, b: 102 },
    statusNegative: { r: 194, g: 80, b: 31 },
    statusWarning: { r: 244, g: 176, b: 62 },
    statusInfo: { r: 0, g: 118, b: 204 },
    primaryButton: 'linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)'
  }
  
  return (
    <ThemeProvider theme={theme} themeOverride={themeOverride ? customTheme : undefined}>
      <StoryFn />
    </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const decorators = [withTheme]
