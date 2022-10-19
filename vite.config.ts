import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`
    },
    outDir: path.resolve(__dirname, 'build')
  },
  plugins: [
    tsconfigPaths(),
    vanillaExtractPlugin({
      identifiers: 'debug'
    }),
    react(),
    eslint({
      include: ['**/*.ts', '**/*.tsx']
    })
  ]
})
