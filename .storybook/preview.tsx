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
      icon: 'moon',
      items: [
        { value: 'light', icon: 'sun', title: 'Light' },
        { value: 'dark', icon: 'moon', title: 'Dark' },
      ],
    },
  },
}

const withTheme: Decorator = (StoryFn, context) => {
  const { theme } = context.globals

  return (
    <ThemeProvider theme={theme}>
      <StoryFn />
    </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const decorators = [withTheme]
