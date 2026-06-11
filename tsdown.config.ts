import { defineConfig } from 'tsdown'
import pkg from './package.json' with { type: 'json' }

const { version } = pkg

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  dts: true,
  clean: true,
  platform: 'browser',
  banner: {
    js: '"use client";',
  },
  define: {
    __DESIGN_SYSTEM_VERSION__: JSON.stringify(version),
  },
  css: {
    fileName: 'index.css',
    minify: false,
  },
})
