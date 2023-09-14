import path from 'path'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    vanillaExtractPlugin({
      identifiers: 'short', // 'short' | 'debug'
    }),
  ],
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
