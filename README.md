[Live Storybook](https://0xsequence.github.io/design-system/)

# Sequence Design System

Sequence Design System is a reusable component library uses across the Sequence product suite.

Components are written in [React](https://reactjs.org/) with [Vanilla Extract](https://vanilla-extract.style/), and its stories are written in [Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df).

### Install

```
pnpm add @0xsequence/design-system
```

#### Peer Dependencies

The design system relies on these peer dependencies to be installed in your application:

- `pnpm add react`
- `pnpm add react-dom`
- `pnpm add framer-motion`

### Use

Import the styles at the root of your app:

`import '@0xsequence/design-system/styles.css'`

Then wrap your application root with the ThemeProvider:

```jsx
import { ThemeProvider } from '@0xsequence/design-system'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
```

Then import components from the design system to build your UI:

```jsx
import { Text, Button, useTheme } from '@0xsequence/design-system'

const App = () => (
  const { theme, setTheme } = useTheme()

  <div>
    <Text variant="normal">Hello, World!</Text>
    <Button variant="primary" label="Change theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
  </div>
)

```

### Run and Develop Locally

Clone the [Sequence Design System GitHub Project](https://github.com/0xsequence/design-system) then start Storybook.

```
pnpm install && pnpm storybook
```

### Create a snapshot release

1. Bump version in package.json to 0.0.0-YYYYmmddHHMMSS (`echo -n 0.0.0- ; date -u +%Y%m%d%H%M%S`)
2. `git commit -a -m <version>`
3. `pnpm publish --tag snapshot`

### Used by

- [Sequence Wallet](https://sequence.app/)
- [Sequence Console](https://sequence.dev/)
- [Sequence Status](https://status.sequence.info/)
- [Sequence Demo Dapp Github Project](https://github.com/0xsequence/demo-dapp)

Note: this package is not used in Storybook's UI, but the visual design is identical.

### **Resources**

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [GitHub Repository](https://github.com/0xsequence/design-system)
