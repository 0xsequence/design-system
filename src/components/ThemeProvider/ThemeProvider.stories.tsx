import { Meta } from '@storybook/react'

import { Button } from '~/components'

import { ThemeProvider, useTheme } from './ThemeProvider'

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
} as Meta<typeof ThemeProvider>

export const Default = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <Button label="Toggle theme" onClick={toggleTheme} />
}