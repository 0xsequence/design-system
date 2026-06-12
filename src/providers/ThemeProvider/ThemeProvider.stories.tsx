import type { Meta } from '@storybook/react-vite'

import { Button } from '../../components/Button/Button.js'
import { Card } from '../../components/Card/Card.js'
import { Collapsible } from '../../components/Collapsible/Collapsible.js'

import { type CustomThemes, ThemeProvider, useTheme } from './ThemeProvider.js'

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

const customThemes: CustomThemes = {
  light: {
    primary: 'black',
    muted: '#009',
    backgroundPrimary: 'white',
    backgroundSecondary: '#EEF',
  },
  dark: {
    primary: 'white',
    muted: '#888',
    backgroundPrimary: 'black',
    backgroundSecondary: '#004',
  },
}

export const Nested = () => {
  return (
    <Card>
      <div className="text-sm text-primary font-bold">Root Application</div>

      <div id="app1">
        <ThemeProvider root="#app1" storageKey="theme1" defaultTheme="light">
          <Card className="bg-background-primary mt-4">
            <Collapsible.Helper label="Nested Application 1" defaultOpen>
              <p className="text-sm text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

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
                    <Collapsible.Helper
                      label="Nested Application 2 (Dark)"
                      defaultOpen
                    >
                      <p className="text-sm text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>

                      <div className="mt-4">
                        <SetThemeButton />
                      </div>
                    </Collapsible.Helper>
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
                    <Collapsible.Helper
                      label="Nested Application 3 (Custom Theme)"
                      defaultOpen
                    >
                      <p className="text-sm text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>

                      <div className="mt-4">
                        <SetThemeButton />
                      </div>
                    </Collapsible.Helper>
                  </Card>
                </ThemeProvider>
              </div>

              <div id="app4">
                <ThemeProvider
                  root="#app4"
                  storageKey="theme4"
                  defaultTheme="system"
                >
                  <Card className="bg-background-primary mt-4">
                    <Collapsible.Helper
                      label="Nested Application 4 (Prefers Color Scheme)"
                      defaultOpen
                    >
                      <p className="text-sm text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Collapsible.Helper>
                  </Card>
                </ThemeProvider>
              </div>
            </Collapsible.Helper>
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

  return <Button onClick={toggleTheme}>Set {themeLabel} Mode</Button>
}
