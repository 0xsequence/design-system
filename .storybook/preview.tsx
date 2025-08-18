import type { Decorator, Preview } from '@storybook/react-vite'
import React from 'react'

import { ThemeProvider } from '../src/components/ThemeProvider'

import docsTheme from './theme'

import './index.css'

const customThemes = {
  light: {
    primary: 'black',
    secondary: '#006',
    muted: '#009',
    backgroundPrimary: 'white',
    backgroundSecondary: '#EEF',
    gradientPrimary: 'linear-gradient(45deg, darkblue 0%, blue 100%)',
  },
  dark: {
    primary: 'white',
    secondary: '#CCC',
    muted: '#888',
    backgroundPrimary: 'black',
    backgroundSecondary: '#004',
    gradientPrimary: 'linear-gradient(45deg, darkblue 0%, blue 100%)',
  },
}

const withTheme: Decorator = (StoryFn, context) => {
  const { theme } = context.globals

  const isCustom = theme === 'custom'
  const appliedTheme = isCustom ? 'dark' : theme

  return (
    <ThemeProvider
      theme={appliedTheme as 'light' | 'dark'}
      customThemes={isCustom ? customThemes : undefined}
    >
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
