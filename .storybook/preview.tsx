import type { Decorator, Preview } from '@storybook/react-vite'
import React from 'react'

import {
  ThemeProvider,
  type CustomThemes,
  type Theme,
} from '../src/providers/ThemeProvider/ThemeProvider.js'

import docsTheme from './theme'

import './index.css'

const customThemes: CustomThemes = {
  light: {
    primary: 'var(--color-violet-950)',
    muted: 'var(--color-violet-600)',

    gradientPrimary: 'linear-gradient(45deg, darkblue 0%, blue 100%)',

    backgroundPrimary: 'var(--color-violet-50)',
    backgroundSecondary: 'var(--color-violet-100)',
    backgroundRaised: 'var(--color-violet-200)',
    backgroundInput: 'var(--color-violet-50)',
    backgroundHover: 'var(--color-violet-100)',
    backgroundActive: 'var(--color-violet-300)',

    borderNormal: 'var(--color-violet-400)',
    borderCard: 'var(--color-violet-300)',
    borderButton: 'var(--color-violet-300)',
    borderHover: 'var(--color-violet-400)',
  },
  dark: {
    primary: 'var(--color-violet-50)',
    muted: 'var(--color-violet-400)',

    gradientPrimary: 'linear-gradient(45deg, darkblue 0%, blue 100%)',

    backgroundPrimary: 'var(--color-violet-950)',
    backgroundSecondary: 'var(--color-violet-900)',
    backgroundRaised: 'var(--color-violet-800)',
    backgroundInput: 'var(--color-violet-950)',
    backgroundHover: 'var(--color-violet-900)',
    backgroundActive: 'var(--color-violet-700)',

    borderNormal: 'var(--color-violet-600)',
    borderCard: 'var(--color-violet-700)',
    borderButton: 'var(--color-violet-500)',
    borderHover: 'var(--color-violet-600)',
  },
}

const withTheme: Decorator = (StoryFn, context) => {
  const { theme, isCustomTheme } = context.globals as {
    theme: Theme
    isCustomTheme: boolean
  }

  return (
    <ThemeProvider
      theme={theme}
      customThemes={isCustomTheme ? customThemes : undefined}
      storageKey={null}
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
          { value: 'dark', icon: 'moon', title: 'Dark' },
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'system', icon: 'cog', title: 'System' },
        ],
      },
    },

    // Custom colors toggle
    isCustomTheme: {
      name: 'Colors',
      description: 'Toggle custom theme colors',
      defaultValue: false,
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: false, title: 'Default' },
          { value: true, title: 'Custom' },
        ],
        dynamicTitle: true, // will show "Default" / "Custom" in toolbar
      },
    },
  },

  tags: ['autodocs'],

  decorators: [withTheme],
}

export default preview
