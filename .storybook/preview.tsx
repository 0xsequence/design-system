import { Decorator } from '@storybook/react'
import React from 'react'

import '../src/tailwind.css'

import { ThemeProvider } from '../src/components/ThemeProvider'

import docsTheme from './theme'

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
      icon: 'moon',
      items: [
        { value: 'dark', icon: 'moon', title: 'Dark (default)' },
        { value: 'light', icon: 'sun', title: 'Light' },
        { value: 'custom', icon: 'paintbrush', title: 'Custom' },
      ],
    },
  },
}

const CUSTOM_THEME = {
  text100: 'rgba(255, 255, 255, 1)',
  text80: 'rgba(200, 200, 255, 1)',
  text50: 'rgba(150, 150, 200, 1)',
  backgroundPrimary: 'pink',
  backgroundSecondary: 'navy',
}

const withTheme: Decorator = (StoryFn, context) => {
  const { theme } = context.globals

  return (
    <ThemeProvider theme={theme === 'custom' ? CUSTOM_THEME : theme}>
      <StoryFn />
    </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const decorators = [withTheme]
