import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import eslint from 'vite-plugin-eslint'

import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    eslint({
      include: ['**/*.ts', '**/*.tsx'],
    }),
    dts({
      exclude: [
        'node_modules',
        'tests',
        '**/*.stories.tsx',
        '**/*.test.tsx',
        'src/providers/ThemeProvider/renderWithTheme.tsx',
      ],
      outDir: 'dist/types',
    }),
  ],
  define: {
    __DESIGN_SYSTEM_VERSION__: JSON.stringify(version),
  },
  publicDir: false,
})
