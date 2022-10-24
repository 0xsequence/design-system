import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    vanillaExtractPlugin({
      identifiers: 'debug'
    }),
    react(),
    eslint({
      include: ['**/*.ts', '**/*.tsx']
    }),
    dts({
      exclude: ['src/**/*.test.ts*'],
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', '')
      }),
      compilerOptions: {
        baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false
      },
      outputDir: 'dist/types'
    })
  ],
  build: {
    lib: {
      name: 'SequenceDesignSystem',
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`
    },
    outDir: path.resolve(__dirname, 'dist')
  }
})
