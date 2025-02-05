import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

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
  build: {
    lib: {
      name: 'SequenceDesignSystem',
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`,
    },
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      external: ['react', 'react-dom', 'motion/react'],
      output: {
        banner: "'use client';",
      },
    },
    minify: false,
  },
})
