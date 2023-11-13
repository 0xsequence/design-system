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
    defaultValue: false,
    toolbar: {
      title: 'Theme Override',
      icon: 'circleHollow',
      items: [
        { value: false, icon: 'circlehollow', title: 'No ThemeOverride' },
        { value: true, icon: 'circle', title: 'With ThemeOverride' },
      ],
    }
  }
}

const withTheme: Decorator = (StoryFn, context) => {
  const { theme, themeOverride } = context.globals

  const customTheme = {
    foreground: '#FF7F50',
    background: '#5526C9',
    backgroundBackdrop: '#DDDDDD',
    backgroundRaised: '#C0C0C0',
    statusPositive: '#1FC266',
    statusNegative: '#C2501F',
    statusWarning: '#F4B03E',
    statusInfo: '#0076CC',
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
