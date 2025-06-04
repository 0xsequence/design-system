import path from 'path'
import { version as designSystemVersion } from './package.json'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import { replaceCodePlugin } from 'vite-plugin-replace'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  publicDir: false,
})
