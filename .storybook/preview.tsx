import { Preview, Decorator } from '@storybook/react'
import React from 'react'

import { ThemeProvider } from '../src/components/ThemeProvider'

import docsTheme from './theme'

import './index.css'

const CUSTOM_THEME = {
  primary: '#002C54',
  secondary: '#396E97',
  muted: '#71A6B2',
  backgroundPrimary: '#F1F1F2',
  backgroundSecondary: '#A1D6E2',
  gradientPrimary: 'linear-gradient(45deg, #1995AD 0%, #002C54 100%)',
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
