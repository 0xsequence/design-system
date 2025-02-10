[Live Storybook](https://0xsequence.github.io/design-system/)

# Sequence Design System

Sequence Design System is a reusable component library uses across the Sequence product suite.

Components are written in [React](https://reactjs.org/) with [Tailwind](https://tailwindcss.com/), and its stories are written in [Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df).

### Install

```
pnpm add @0xsequence/design-system
```

#### Peer Dependencies

The design system relies on these peer dependencies to be installed in your application:

- `pnpm add react react-dom motion`

### Use

The design system requires to be used within an existing tailwind configured application. Your application should import the design system preset within your main css file. Check out the [Tailwind Docs](https://tailwindcss.com/docs/installation) for more information on setting up your application

Import the styles at the root of your app:

#### index.css

```css
@import 'tailwindcss';
@import '@0xsequence/design-system/preset';

/* Your app styles */
```

Then wrap your application root with the ThemeProvider:

```jsx
import './index.css'
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

### Migration from 1.x to 2.x

To make migrating from the vanilla-extract polymorphic box model styling system used in v1.x to the simplified tailwind classes version in 2.x you can use the supplied codemod to do most of the work for you.

Give the relative path to your application, ie.

`pnpm codemod ../wallet-webapp/src/**/*.{ts,tsx}`

And the codemod will convert atom props to tailwind classnames and handle `as` props, amonst other things. Give it a try and save yourself some time.

### Used by

- [Sequence Wallet](https://sequence.app/)
- [Sequence Console](https://sequence.dev/)
- [Sequence Status](https://status.sequence.info/)
- [Sequence Demo Dapp Github Project](https://github.com/0xsequence/demo-dapp)

Note: this package is not used in Storybook's UI, but the visual design is identical.

### **Resources**

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [GitHub Repository](https://github.com/0xsequence/design-system)
- [Tailwind](https://tailwindcss.com)
