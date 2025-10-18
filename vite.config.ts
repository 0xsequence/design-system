import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import eslint from 'vite-plugin-eslint'
import { replaceCodePlugin } from 'vite-plugin-replace'
import tsconfigPaths from 'vite-tsconfig-paths'

import { version as designSystemVersion } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
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
        'src/components/ThemeProvider/renderWithTheme.tsx',
      ],
      outDir: 'dist/types',
    }),
    replaceCodePlugin({
      replacements: [
        {
          from: '__DESIGN_SYSTEM_VERSION__',
          to: `v${designSystemVersion}`,
        },
      ],
    }),
  ],
  publicDir: false,
})
