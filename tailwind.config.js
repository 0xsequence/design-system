/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base colors
        black: 'var(--seq-colors-black)',
        white: 'var(--seq-colors-white)',
        transparent: 'var(--seq-colors-transparent)',
        inherit: 'var(--seq-colors-inherit)',

        // Status colors
        positive: 'var(--seq-colors-positive)',
        negative: 'var(--seq-colors-negative)',
        info: 'var(--seq-colors-info)',
        warning: 'var(--seq-colors-warning)',

        // Text colors
        text: {
          100: 'var(--seq-colors-text100)',
          80: 'var(--seq-colors-text80)',
          50: 'var(--seq-colors-text50)',
          inverse: 'var(--seq-colors-text-inverse100)',
        },

        // Background colors
        background: {
          primary: 'var(--seq-colors-background-primary)',
          secondary: 'var(--seq-colors-background-secondary)',
          contrast: 'var(--seq-colors-background-contrast)',
          muted: 'var(--seq-colors-background-muted)',
          control: 'var(--seq-colors-background-control)',
          inverse: 'var(--seq-colors-background-inverse)',
          backdrop: 'var(--seq-colors-background-backdrop)',
          overlay: 'var(--seq-colors-background-overlay)',
          raised: 'var(--seq-colors-background-raised)',
        },

        // Border colors
        border: {
          normal: 'var(--seq-colors-border-normal)',
          focus: 'var(--seq-colors-border-focus)',
        },

        // Button colors
        button: {
          glass: 'var(--seq-colors-button-glass)',
          emphasis: 'var(--seq-colors-button-emphasis)',
          inverse: 'var(--seq-colors-button-inverse)',
        },
      },
      backgroundImage: {
        'gradient-backdrop': 'var(--seq-colors-gradient-backdrop)',
        'gradient-primary': 'var(--seq-colors-gradient-primary)',
        'gradient-secondary': 'var(--seq-colors-gradient-secondary)',
      },
    },
  },
  plugins: [],
}
