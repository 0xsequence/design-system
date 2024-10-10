import type { Config } from 'tailwindcss'

export default {
  content: ['./src/components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Roboto', '"Helvetica Neue"', 'Arial'],
        mono: [
          '"iAWriter Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      // fontSize: {
      //   xs: '0.625rem', // 10px
      //   sm: '0.75rem', // 12px
      //   base: '0.875rem', // 14px
      //   lg: '1rem', // 16px
      //   xl: '1.25rem', // 20px
      //   '2xl': '1.875rem', // 30px
      // },

      colors: {
        info: '#3b82f6',
        warning: '#f59e0b',
        positive: '#10b981',
        negative: '#ef4444',
      },
    },
  },
  plugins: [],
} satisfies Config
