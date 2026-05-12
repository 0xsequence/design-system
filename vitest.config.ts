import { defineConfig } from 'vitest/config'

import { version } from './package.json'

export default defineConfig({
  test: {
    silent: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
    // Node 25 requires this to be enabled in order for happy-dom mocking of localStorage to work
    // execArgv: [
    //   '--no-webstorage'
    // ],
  },
  define: {
    __DESIGN_SYSTEM_VERSION__: JSON.stringify(version),
  },
})
