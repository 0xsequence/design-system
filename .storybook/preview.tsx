import { DecoratorFn } from '@storybook/react'
import React from 'react'

import { ThemeProvider } from '../src/components'
import { vars } from '../src/css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Design System',
        ['Design Tokens', 'Colors', 'Typography', 'Iconography'],
        'Components',
        ['Atoms', 'Molecules', 'Organisms']
      ]
    }
  }
}

export const globalTypes = {
  // Theme select toggle
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light' },
        { value: 'dark', icon: 'circle', title: 'Dark' }
      ]
    }
  }
}

const withTheme: DecoratorFn = (StoryFn, context) => {
  const { theme } = context.globals

  return (
    <ThemeProvider theme={theme || 'light'}>
      <StoryFn />
    </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const decorators = [withTheme]
