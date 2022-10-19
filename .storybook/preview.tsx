import { DecoratorFn } from '@storybook/react'
import React from 'react'

import { ThemeProvider } from '../src/components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Introduction', 'Design System', 'Components']
    }
  }
}

const withTheme: DecoratorFn = (StoryFn, context) => {
  const { theme } = context.parameters

  console.log('StoryContext', context)

  return (
    <ThemeProvider theme={theme || 'light'}>
      <StoryFn />
    </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const decorators = [withTheme]
