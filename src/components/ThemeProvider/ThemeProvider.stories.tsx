import { Meta } from '@storybook/react'

import { Button } from '~/components/Button'

import { Box } from '../Box'
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

export const Nested = () => {
  const customTheme = {
    foreground: { r: 255, g: 127, b: 80 },
    background: { r: 85, g: 38, b: 201 },
    backgroundBackdrop: { r: 221, g: 221, b: 221 },
    backgroundRaised: { r: 192, g: 192, b: 192 },
    statusPositive: { r: 31, g: 194, b: 102 },
    statusNegative: { r: 194, g: 80, b: 31 },
    statusWarning: { r: 244, g: 176, b: 62 },
    statusInfo: { r: 0, g: 118, b: 204 },
    primaryButton: 'linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)'
  }
  return (
    <Card>
      <Text variant="normal" color="text100" fontWeight="bold">
        Root Application
      </Text>

      <div id="app1">
        <ThemeProvider root="#app1" scope="application1" theme="light">
          <Card background="backgroundPrimary" marginTop="4">
            <Collapsible label="Nested Application 1">
              <Text variant="normal" color="text100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>

              <Box marginTop="4">
                <SetThemeButton />
              </Box>

              <div id="app2">
                <ThemeProvider root="#app2" scope="application2" theme="dark">
                  <Card background="backgroundPrimary" marginTop="4">
                    <Collapsible label="Nested Application 2">
                      <Text variant="normal" color="text100">
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

                      <Box marginTop="4">
                        <SetThemeButton />
                      </Box>
                      <div id="app3">
                      <ThemeProvider root="#app3" scope="application3" themeOverride={customTheme}>
                        <Card background="backgroundPrimary" marginTop="4">
                          <Collapsible label="Nested Application 3">
                            <Text variant="normal" color="text100">
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

  return <Button label={`Set ${themeLabel} Mode`} onClick={toggleTheme} />
}
