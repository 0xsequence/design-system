import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    silent: true,
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests/setup.ts',
  },
})
