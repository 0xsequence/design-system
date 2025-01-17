import path from 'path'

import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  test: {
    silent: true,
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
  },
})
