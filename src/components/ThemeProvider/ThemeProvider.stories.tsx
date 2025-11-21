import type { Meta } from '@storybook/react-vite'

import { Button } from '../Button/Button.js'
import { Card } from '../Card/Card.js'
import { Collapsible } from '../Collapsible/Collapsible.js'
import { Text } from '../Text/Text.js'

import { ThemeProvider, useTheme } from './ThemeProvider.js'

export default {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
} as Meta<typeof ThemeProvider>

export const Default = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <Button onClick={toggleTheme}>Toggle theme</Button>
}

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

export const Nested = () => {
  return (
    <Card>
      <Text variant="normal" color="primary" fontWeight="bold">
        Root Application
      </Text>

      <div id="app1">
        <ThemeProvider root="#app1" storageKey="theme1" defaultTheme="light">
          <Card className="bg-background-primary mt-4">
            <Collapsible label="Nested Application 1" defaultOpen>
              <Text variant="normal" color="primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>

              <div className="mt-4">
                <SetThemeButton />
              </div>

              <div id="app2">
                <ThemeProvider
                  root="#app2"
                  storageKey="theme2"
                  defaultTheme="dark"
                >
                  <Card className="bg-background-primary mt-4">
                    <Collapsible
                      label="Nested Application 2 (Dark)"
                      defaultOpen
                    >
                      <Text variant="normal" color="primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Text>

                      <div className="mt-4">
                        <SetThemeButton />
                      </div>
                    </Collapsible>
                  </Card>
                </ThemeProvider>
              </div>

              <div id="app3">
                <ThemeProvider
                  root="#app3"
                  storageKey="theme3"
                  defaultTheme="dark"
                  customThemes={customThemes}
                >
                  <Card className="bg-background-primary mt-4">
                    <Collapsible
                      label="Nested Application 3 (Custom Theme)"
                      defaultOpen
                    >
                      <Text variant="normal" color="primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Text>

                      <div className="mt-4">
                        <SetThemeButton />
                      </div>
                    </Collapsible>
                  </Card>
                </ThemeProvider>
              </div>

              <div id="app4">
                <ThemeProvider
                  root="#app4"
                  storageKey="theme4"
                  prefersColorScheme
                >
                  <Card className="bg-background-primary mt-4">
                    <Collapsible
                      label="Nested Application 4 (Prefers Color Scheme)"
                      defaultOpen
                    >
                      <Text variant="normal" color="primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Text>
                    </Collapsible>
                  </Card>
                </ThemeProvider>
              </div>
            </Collapsible>
          </Card>
        </ThemeProvider>
      </div>
    </Card>
  )
}

const SetThemeButton = () => {
  const { theme, setTheme } = useTheme()

  const themeLabel = theme === 'light' ? 'Dark' : 'Light'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button variant="primary" onClick={toggleTheme}>
      Set {themeLabel} Mode
    </Button>
  )
}
