import { Preview, Decorator } from '@storybook/react'
import React from 'react'

import { ThemeProvider } from '../src/components/ThemeProvider'

import docsTheme from './theme'

import './index.css'

const CUSTOM_THEME = {
  primary: 'rgba(255, 255, 255, 1)',
  secondary: 'rgba(200, 200, 255, 1)',
  muted: 'rgba(150, 150, 200, 1)',
  backgroundPrimary: 'pink',
  backgroundSecondary: 'navy',
}

const withTheme: Decorator = (StoryFn, context) => {
  const { theme } = context.globals

  return (
    <ThemeProvider theme={theme === 'custom' ? CUSTOM_THEME : theme}>
      <div className="bg-background-primary p-4">
        <StoryFn />
      </div>
    </ThemeProvider>
  )
}

const preview: Preview = {
  parameters: {
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
    layout: 'fullscreen',
  },

  globalTypes: {
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
  },

  tags: ['autodocs'],

  decorators: [withTheme],
}

export default preview
