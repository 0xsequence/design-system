import { defineConfig } from 'tsup'
import { version } from './package.json'

export default defineConfig({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  dts: true,
  clean: true,
  banner: {
    js: '"use client";',
  },
  define: {
    __DESIGN_SYSTEM_VERSION__: JSON.stringify(version),
  },
})
