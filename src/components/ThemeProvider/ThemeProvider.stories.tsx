import { Meta } from '@storybook/react'

import { Button } from '~/components/Button'

import { Card } from '../Card'
import { Collapsible } from '../Collapsible'
import { Text } from '../Text'

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

const customTheme = {
  primary: '#002C54',
  secondary: '#396E97',
  muted: '#71A6B2',
  backgroundPrimary: '#F1F1F2',
  backgroundSecondary: '#A1D6E2',
  gradientPrimary: 'linear-gradient(45deg, #1995AD 0%, #002C54 100%)',
}

export const Nested = () => {
  return (
    <Card>
      <Text variant="normal" color="primary" fontWeight="bold">
        Root Application
      </Text>

      <div id="app1">
        <ThemeProvider root="#app1" scope="application1" theme="light">
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
                <ThemeProvider root="#app2" scope="application2" theme="dark">
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
                  scope="application3"
                  theme={customTheme}
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

                      <div className="mt-4 flex gap-2">
                        <SetThemeButton />
                        <SetCustomThemeButton />
                      </div>
                    </Collapsible>
                  </Card>
                </ThemeProvider>
              </div>

              <div id="app4">
                <ThemeProvider
                  root="#app4"
                  scope="application4"
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
    <Button
      variant="primary"
      label={`Set ${themeLabel} Mode`}
      onClick={toggleTheme}
    />
  )
}

const SetCustomThemeButton = () => {
  const { setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(customTheme)
  }

  return <Button label="Set Custom Mode" onClick={toggleTheme} />
}
