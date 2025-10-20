[![npm version](https://badge.fury.io/js/@0xsequence%2Fdesign-system.svg)](https://badge.fury.io/js/@0xsequence%2Fdesign-system)

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

#### Manual project updates

##### 1. Upgrade the design system to the latest version

`pnpm install 0xsequence/design-system@latest`

##### 2. Find and remove any import of the v1 design system stylesheet

`import '@0xsequence/design-system/styles.css'`

##### 3. If Tailwind is not installed in your project, install it and the vite plugin

`pnpm install tailwindcss @tailwindcss/vite`

##### 4. In your main css file (eg index.css or styles.css), import Tailwind and the design system preset

```css
@import 'tailwindcss';
@import '@0xsequence/design-system/preset';
```

##### 5. Update vite.config.ts to include Tailwind

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    /* ... other plugins like react() */
    tailwindcss(),
  ],
})
```

## Migrating from v2 to v3

V3 attemps to be mostly compatible but there are some breaking changes that will need to be addressed.

1. Form components are no longer wrapped in a Field component so properties like `labelLocation`, `label`, `description` are no longer on components like CheckBox, TextInput, etc. You will need to wrap these components in a Field component manually.

2. RadioGroup no longer takes an options object. Instead you must use RadioGroup and RadioGroupItem components:

```
  <RadioGroup>
    <RadioGroupItem>
    <RadioGroupItem>
    <RadioGroupItem>
  </RadioGroup>
```

3. Button component is now a simple component which allows you to easily create your own Buttons with children content of your choice, the Legacy Button component is renamed ButtonPreset which accepts properties like `leftIcon`, `rightIcon`, `label`, etc.

4. Button variants have changed, `glass` is no longer the default variant, now use `secondary`. Some variants have been removed like `feature`, and `emphasis`.

5. Glass layers and blur effects: many of the raised popover layers like Toast, Popover, Tooltip, Select, used glass blurred effect. While this looked pretty good in certain cases, it caused issues with contrast and readability when overlayed ontop of certain user generated content and lighter content would show through too much. It was decided to switch to opaque layers instead.

6. Divider component is replaced with shadcn Separator component which supports horizontal and vertical orientation

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
