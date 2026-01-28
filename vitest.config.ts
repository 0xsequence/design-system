import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

import { version } from './package.json'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    silent: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
  },
  define: {
    __DESIGN_SYSTEM_VERSION__: JSON.stringify(version),
  },
})
