[Live Storybook](https://0xsequence.github.io/design-system/)

# Sequence Design System

Sequence Design System is a reusable component library uses across the Sequence product suite.

Components are written in [React](https://reactjs.org/) with [Vanilla Extract](https://vanilla-extract.style/), and its stories are written in [Component Story Format](https://medium.com/storybookjs/component-story-format-66f4c32366df).

### Install

```
pnpm add @0xsequence/design-system
```

### Use

Import the styles at the root of your app

`import '@0xsequence/design-system/styles'`

Then import components you want into your UI

`import { Box, Text, Button } from '@0xsequence/design-system'`

and use them like so

```
const example = () => (
  <Box display="flex" gap="1">
    <Text variant="normal">Hello, World!</Text>
    <Button variant="primary" label="Click me" onClick={() => 0}/>
  </Box>
)

```

### Run and Develop Locally

Clone the [Sequence Design System GitHub Project](https://github.com/0xsequence/design-system) then start Storybook.

```
pnpm install && pnpm storybook
```

### Used by

- [Sequence Wallet](https://sequence.app/)
- [Sequence Console](https://sequence.dev/)
- [Sequence Status](https://status.sequence.info/)
- [Sequence Demo Dapp Github Project](https://github.com/0xsequence/demo-dapp)

Note: this package is not used in Storybook's UI, but the visual design is identical.

### **Resources**

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [GitHub Repository](https://github.com/0xsequence/design-system)
